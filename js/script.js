var nav = document.querySelector('.navigation');
var position = 0;

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 100) {
   nav.classList += ' small';
 } else {
   nav.classList = 'main-nav';
 }
});
