$(document).ready(function() {

  // Preloader
  imagesLoaded(document.querySelector('body'), function(instance) {
    setTimeout(function() {
      $('.preloader img').fadeOut(500, function() {
        $('.preloader').fadeOut(1000, function() {

          // Scroll down animation to contact info
          $('.contact a').on('click', function() {
            $('html, body').animate({
              scrollTop: $('.neighbour-4').offset().top,
            }, 2000);
          });

          // Achievements calculations
          // Setting two important dates and today
          var dateWebindustry = new Date('2007-06-01');
          var dateProgramming = new Date('2012-01-01');
          var dateFreelancing = new Date('2013-01-01');
          var dateToday       = new Date();

          // Function for calculating difference between
          // two dates and returning it as integer or string
          // NOTE: use true or false for returnString
          function timePeriod(dateStart, dateEnd, returnString) {
            var period = Math.round(new Date(dateEnd - dateStart) / 1000 / 60 / 60 / 24 / 365);

            if (returnString) {
              var integerToString = ['two', 'three', 'four', 'five', 'six'];
              return integerToString[period - 2];
            } else {
              return period;
            }
          }

          $('.years-web').html(
            timePeriod(dateWebindustry, dateToday, false)
          );
          $('.years-programming').html(
              timePeriod(dateProgramming, dateToday, false)
          );
          $('.years-freelance').html(
            timePeriod(dateFreelancing, dateToday, true)
          );

          // Counter animations
          function counterAnimate(selector, number, sign) {
            var counter = $.animateNumber.numberStepFactories.append(sign);

            $(selector).animateNumber({
              number: number,
              easing: 'easeInQuad',
              numberStep: counter,
            }, 750, function() {
              if (sign) {
                $(selector).append('');
              }
            });
          }

          counterAnimate('.counter.normal.block-1', timePeriod(dateWebindustry, dateToday, false), '+');
          counterAnimate('.counter.normal.block-2', timePeriod(dateProgramming, dateToday, false), '+');
          counterAnimate('.counter.normal.block-3', 2, '+');

          // Contact me animation
          setTimeout(function() {
            if ($(window).width() >= 992) {
              $('.contact').animate({
                marginTop: '0',
              }, 1000, 'easeInOutElastic');
            }
          }, 500);

          // Portfolio column (same height as neighbour element)
          function setColumnHeight(number) {
            var heightNeighbour = $('.neighbour-' + number).height();
            $('.item-' + number).height(heightNeighbour);
          }

          if ($(window).width() >= 768) {
            $(window).resize(function() {
              for (var i = 1; i <= 4; i++) {
                setColumnHeight(i);
              }
            });

            for (var i = 1; i <= 4; i++) {
              setColumnHeight(i);
            }
          }
        });
      });
    }, 2000);
  });
});
