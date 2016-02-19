$( document ).ready(function() {


  /* - - - - - Smooth Scrolling  - - - - - */
  var smoothScroll = function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 60
          }, 1000);
          return false;
        }
      }
    });
  };


  /* - - - - - Sticky navigation when scrolling  - - - - - */
  var scrolledMenu = function() {
    $(window).scroll(function() {
      var nav = $('#sticky-nav');
      var navInner = $('.nav-items');
      var yScrollPos = window.pageYOffset;
      var scrollPosNav = 600;
      if(yScrollPos > scrollPosNav) {
        nav.css("top", "0");
      }
      else {
        nav.css("top", "-60px");
        navInner.removeClass('active');
      }
    });
  };


  /* - - - - - Sticky navigation when scrolling  - - - - - */
  var mobileNav = function() {
    var toggle = $('.toggle'),
        nav = $('.nav-items');
    toggle.on('click', function() {
      nav.toggleClass('active');
    })
  };



  /* - - - - - Call functions - - - - - */
  smoothScroll();
  scrolledMenu();
  mobileNav();

});
