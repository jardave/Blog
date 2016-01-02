// (function myBlog(){

//   var app = function(){
//     function getSections(id){
//       return document.querySelectorAll(id);
//   }
//   var publicAPI = {
//     getSections: getSections
//   }
//   return publicAPI;
// }();

//   console.log(app.getSections("section"));

// })();

(function myBlog(){

  var app = {
    myDOMapi: domApiFunc(),
    addSections: addSectionsFunc,
    mainContainer: null,
    init: init
  }

  app.init();

  function init() {

    this.addSections();
  }

  function addSectionsFunc(){

    var title="Terrific new";
    var image = "http://pipsum.com/400x200.jpg";
    var text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique pellentesque leo sodales feugiat. Maecenas imperdiet interdum rhoncus. Donec purus nunc, tristique ac tortor vel, fringilla porttitor mauris. Ut lectus leo, vulputate vitae leo ac, elementum sagittis massa. Nunc et suscipit leo, at ornare urna. Vivamus egestas, ante lobortis dignissim dignissim, ante eros convallis felis, vitae sodales augue arcu vitae lorem. Donec quis erat tincidunt, gravida nisl at, placerat nibh. Integer ut viverra purus. Praesent condimentum libero ut ante maximus tempor. Proin et lorem imperdiet, mollis magna eu, suscipit velit. Nulla elementum sodales nulla, in viverra sapien rutrum ac. Quisque sapien sem, interdum hendrerit arcu ut, laoreet aliquet augue. Vivamus vitae feugiat est.";



    this.mainContainer = this.myDOMapi.getSectionContainer('main-sections-container');
    

//console.log(this.domApiFunc().getSectionContainer('main-sections-container'));
  var sections = [   //do request for sections(AJAX)
  "<section>"+
  "<header><h2>" + title + "</h2></header>"+
  '<div class="full"><span>more</span></div>"'
  +"<article>"+

  '<img src=' + image + 'alt="Terrific new">'+
  "<p>"+
  text
  +"</p>"+
  "</article>"
  +"</section>",
  "<section>"+
  "<header><h2>" + title + "</h2></header>"+
  '<div class="full"><span>more</span></div>"'
  +"<article>"+

  '<img src=' + image + 'alt="Terrific new">'+
  "<p>"+
  text
  +"</p>"+
  "</article>"
  +"</section>"
  ];
  function addItemHTML(item){
   this.mainContainer.innerHTML += item;

 }
 this.myDOMapi.addItems(sections, addItemHTML.bind(this));
}

/*function updateArticleText(){
  var sections = this.myDOMapi.getSections('.section');
  for (var i = i < section.length; i++) {
    var els = sections[i].children[3].getElementsByTagName('p');
    for (var x = x < section.length; x++){
      els[x].textContent = "lorem";
    };
  };
}*/

function domApiFunc(){
  function getSectionContainer(id){
    //console.log(document.getElementById('main-container'));
    return document.getElementById(id);

  }
  function addItems(items, callBack){
    for (var i = 0; i < items.length; i++) {
      callBack(items[i]);
    };
  }
  var publicAPI = {
    getSectionContainer: getSectionContainer,
    addItems: addItems
  }
  return publicAPI;
};

})();

