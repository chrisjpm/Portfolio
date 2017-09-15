$(document).ready(function() {
  $(window).mousemove(function frontimage(e) {
      var change;
      var xpos = e.clientX;
      var ypos = e.clientY;
      var left = change * 2;
      var xpos = xpos * 20;
      var ypos = ypos * 10;
      $('.front-img').css('margin-top', ((0 + (ypos / 50)) + "px"));
      $('.front-img').css('margin-left', ((0 + (-xpos / 80)) + "px"));
  });

  $(window).mousemove(function backimage(e) {
    var change;
    var xpos = e.clientX;
    var ypos = e.clientY;
    var left = change * 2;
    var xpos = xpos * 5;
    var ypos = ypos * 5;
    $('.back-img').css('margin-top', ((0 + (ypos / 50)) + "px"));
    $('.back-img').css('margin-left', ((0 + (-xpos / 80)) + "px"));
  });

  $(function() {
    switch (window.location.pathname) {
    case '/shop':
       $('.nav-shop').addClass('nav-active');
       $('ul#pages li').removeClass('li-hover');
       $('ul#pages li a').removeClass('nav-shop');
       break;
    case '/about-me':
       $('.nav-about').addClass('nav-active');
       $('ul#pages li').removeClass('li-hover');
       $('ul#pages li a').removeClass('nav-about');
       break;
    case '/my-work':
       $('.nav-work').addClass('nav-active');
       $('ul#pages li').removeClass('li-hover');
       $('ul#pages li a').removeClass('nav-work');
       break;
    case '/contact-me':
       $('.nav-contact').addClass('nav-active');
       $('ul#pages li').removeClass('li-hover');
       $('ul#pages li a').removeClass('nav-contact');
       break;
}
  });
})
