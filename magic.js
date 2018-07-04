isScrolledIntoView = ($elem, $window)  => {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return (((elemBottom - $elem.height()/2) <= docViewBottom)
      && ((elemTop + $elem.height()/2) >= docViewTop));
}

$(window).on('scroll', () => {
   if (isScrolledIntoView($('.contact h1'), $(window))) {
     $('.contact h1').addClass('animated fadeInUp');
   }

   if (isScrolledIntoView($('.hero'), $(window))) {
     $('body').css('background-color', 'white');
   }

   if (isScrolledIntoView($('#proj1'), $(window))) {
     $('body').css('background-color', '#cc98c4');
     $('.proj1 #img1').addClass('animated fadeIn');

       $('.proj1 #top-img').addClass('animated bounceInLeft');

       $('.proj1 #img2').addClass('animated fadeIn');

   }

   if (isScrolledIntoView($('#proj2'), $(window))) {
     $('body').css('background-color', '#616ab1');
     $('.proj2 #img1').addClass('animated fadeIn');

       $('.proj2 #top-img').addClass('animated bounceInLeft');

       $('.proj2 #img2').addClass('animated fadeIn');
    
   }

   if (isScrolledIntoView($('.contact'), $(window))) {
     $('body').css('background-color', '#6dc1dd');
   }

});
