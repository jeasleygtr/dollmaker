document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, dist="0");
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);

  var instance = M.Modal.getInstance(elems);

  document.getElementById('.modal').onclick = function(){
    instance.open();
  }
  
    
});

