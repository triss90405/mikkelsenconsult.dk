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
      var nav = $('#sticky-nav'),
          navInner = $('.nav-items'),
          yScrollPos = window.pageYOffset,
          scrollPosNav = 800;
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
    });
  };



  /* - - - - - Form label  - - - - - */
  var formLabel = function() {
    $('.form-grp input').blur(function() {
      if( $(this).val().length > 0 ) {
          $(this).next('label').css('top', '-10px');
      }
    });
  };





  /* - - - - - Call functions - - - - - */
  smoothScroll();
  scrolledMenu();
  mobileNav();
  formLabel();

});
