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
      // if( $(this).is(':focus')) {
      //   $(this).next('label').css('top', '-10px');
      // }
      // if( $(this).val().length <= 0 ) {
      //   $(this).next('label').css('top', '32px');
      // }
    });
  };



  /* - - - - - Loading screen - - - - - */
  var loadingScreen = function() {
    var svg = $('.animating-logo svg'),
        loadingBar = $('.loading-bar-fill');
    loadingBar.css('width', '100%');
    svg.css('opacity','1');
    setTimeout(
    function() {
      var loadingScreen = $('#loading-screen');
      loadingScreen.css('opacity','0');
      loadingScreen.css('visibility','hidden');
    }, 3200);
  };





  /* - - - - - Call functions - - - - - */
  loadingScreen();
  smoothScroll();
  scrolledMenu();
  mobileNav();
  formLabel();

});
