$(document).ready(function() {
  // Preloader
  imagesLoaded(document.querySelector('body'), function(instance) {
    setTimeout(function() {
      $('.preloader img').fadeOut(500, function() {
        $('.preloader').fadeOut(1000, function() {

          // Scroll down animation to contact info
          $('.contact a').on('click', function() {
            $('html, body').animate({
              scrollTop: $('.neighbor-4').offset().top,
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

          $('.years-web').html(timePeriod(dateWebindustry, dateToday, false));
          $('.years-programming').html(timePeriod(dateProgramming, dateToday, false));
          $('.years-freelance').html(timePeriod(dateFreelancing, dateToday, true));

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

          counterAnimate(
            '.counter.normal.block-1',
            timePeriod(dateWebindustry, dateToday, false), '+'
          );
          counterAnimate(
            '.counter.normal.block-2',
            timePeriod(dateProgramming, dateToday, false), '+'
          );
          counterAnimate('.counter.normal.block-3', 2, '+');

          setColumnsHeights();
         });
      });
    }, 2000);
  });

  function setColumnsHeights() {
    // Portfolio column (same height as neighbor element)
    function setColumnHeight(number) {
      var heightNeighbor = $('.neighbor-' + number).height();
      $('.item-' + number).height(heightNeighbor);
    }

    // Portfolio column (set to auto)
    function setColumnHeightToAuto(number) {
      $('.item-' + number).height('auto');
    }

    // NOTE: neglecting item-4 as it does not needs height change
    if ($(window).width() >= 768) {
      for (var i = 1; i <= 3; i++) {
        setColumnHeight(i);
      }
    } else {
      // NOTE: neglecting item-4
      for (var i = 1; i <= 3; i++) {
        setColumnHeightToAuto(i);
      }
    }
  }

  $(window).resize(function() {
    setColumnsHeights();
  });
});
