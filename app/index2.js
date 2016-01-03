(function myBlog() {

    document.addEventListener("DOMContentLoaded", function (event) {

        var app = {
            DataApi: dataApiFunc(),
            DOMapi: domApiFunc(),
            addMenu: addMenuFunc,
            addSections: addSectionsFunc,
            mainsectionsConteiner:null,
            sections: null,
            menu: null,
            init: init

        }


        app.init();

        function init() {

            this.addMenu();

            this.addSections();

        };

        function addMenuFunc() {

            function constructMenu() {
                var container = this.DOMapi.getContainer("main-nav");
                var newNav = document.createElement("nav");
                var newList = document.createElement("ul");
                newNav.appendChild(newList);
                container.appendChild(newNav);
                function addItems(item, index) {
                    item
                    debugger;
                    var index = index + 1;
                    newList.innerHTML += "<li>" + (item.title + " " + index) + "</li>";
                }
                this.DOMapi.addItems(this.menu, addItems)
            }

            function addMenutoDOM(obj) {
                this.sections = obj.data.sections;
                this.menu = obj.data.menu;
                constructMenu.call(this);
                    
            }
            
            
            this.DataApi.getData(addMenutoDOM.bind(this));

        }
        ;
        function addSectionsFunc() {

            var _self = this;
            var observer = setInterval(function () {
                if (_self.sections) {
                    clearInterval(observer);
                    var container = _self.DOMapi.getContainer("main-sections-conteiner")
                    function addItems(item, index) {
                        var index = index + 1;
                        var section = document.createElement("section");
                        var header = document.createElement("header");
                        header.appendChild(document.createElement("h2"));
                        header.children[0].textContent = item.title;
                        var moreButton = document.createElement("div");
                        moreButton.classList.add('full');
                        moreButton.appendChild(document.createElement("span"));
                        moreButton.children[0].textContent = "more";
                        var article = document.createElement("article");
                        var imgForArt = document.createElement("img");
                        imgForArt.src = item.image;
                        article.appendChild(imgForArt);
                        var articleText = document.createElement("p");
                        articleText.textContent = item.article;
                        article.appendChild(articleText);
                        section.appendChild(header);
                        section.appendChild(moreButton);
                        section.appendChild(article);
                        container.appendChild(section);
                    }
                    _self.DOMapi.addItems(_self.sections, addItems);
                }
            }, 1)
        };

  function domApiFunc() {
            function getContainer(id) {
                return document.getElementById(id);
             }

            function addItems(items, callBack) {

                for (var i = 0; items.length; i++) {
                    callBack(items[i], i);
                };
            }   

            var publicAPI={
                getContainer: getContainer,
                addItems:addItems


            }
            return publicAPI;
        };

    function dataApiFunc() {

            var URLs = {
                get: "./app/data.json",
                post: "nothing yet"
            };
            function getData(callBack) {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                        callBack(JSON.parse(xmlhttp.responseText));
                    }
                };
                xmlhttp.open("GET",URLs.get,true);
                xmlhttp.send();

            }
          var publicAPI = {
              getData:getData,
                
            }
            return publicAPI; //checar esto
};

        

      
    });
})();