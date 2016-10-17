window.onload = function() {
  document.addEventListener('scroll', function(){
    //console.log(window.scrollY);
    if (window.scrollY > 120) {
      document.getElementById('header').classList.add("fixed");
    } else {
      document.getElementById('header').classList.remove("fixed");
    }
  });
}
