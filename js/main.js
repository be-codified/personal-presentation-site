$(document).ready(function() {

    // logo animation
    // *********************************************

    $('header h1').animate({
        marginTop: '+=90px',
        opacity: 1 
    }, 500, 'swing');


    // achievements calculations
    // *********************************************

    // setting two important dates and today

    var dateWebindustry = new Date('2007-06-01'),
        dateFreelancing = new Date('2013-01-01'),
        dateToday       = new Date();

    // function for calculating difference between
    // two dates and returning it as integer or string
    // NOTE: use true or false for $return_string

    function timePeriod(dateStart, dateEnd, returnString) {
        var period = Math.round(new Date(dateEnd - dateStart)/1000/60/60/24/365);

        if (returnString) {
            var integerToString = ['two', 'three', 'four', 'five', 'six'];
            return integerToString[period - 2];             
        }
        else {
            return period;          
        }
    }

    $('.years-web').html(timePeriod(dateWebindustry, dateToday, false));
    $('.years-freelance').html(timePeriod(dateFreelancing, dateToday, true));

    // counter animations
    // *********************************************

    function counterAnimate(selector, number, sign){
        var counter = $.animateNumber.numberStepFactories.append(sign);            

        $(selector).animateNumber({
                number: number,
                easing: 'easeInQuad',
                numberStep: counter
            }, 2000, function() {
                if (sign) {
                    $(selector).append('');
                }
            }
        );        
    }

    counterAnimate('.counter.normal', timePeriod(dateWebindustry, dateToday, false), '');
    counterAnimate('.counter.small', 90, '+');
    counterAnimate('.counter.smaller', 150, '+');

    // portfolio column (same heigth as neighbour element)
    // ***************************************************

    function setColumnHeight(number) {
        var heightNeighbour = $('.neighbour-' + number).height();
        $('.item-' + number).height(heightNeighbour);        
    }

    // TODO: trying not to call code same thing twice

    $(window).resize(function() {
        for (var i = 1; i <= 3; i++) {
            setColumnHeight(i);
        }
    });

    for (var i = 1; i <= 3; i++) {
        setColumnHeight(i);
    }

    // portfolio see more animations
    // *********************************************

    $('.more').on('click', function(event) {
        $('.neighbour-1').fadeOut(500, 'swing', function() {
            $('.portfolio.item-1 > div').fadeOut(500, 'swing', function() {
                $('.portfolio.item-1').animate({
                    width: '+=40%' 
                }, 1000);
            });     
        });

        event.preventDefault();
    });

    $('.more-close').on('click', function(event) {
        $('.portfolio.item-1 > div').fadeOut(500, 'swing', function() {
            $('.portfolio.item-1').animate({
                width: '-=40%' 
            }, 1000, function() {
                $('.portfolio.item-1 > div').fadeIn(500, 'swing', function() {
                    $('.portfolio.item-1').css('width', '50%'); // cutting off decimal numbers                   
                    $('.neighbour-1').fadeIn(500, 'swing');
                })
            });
        });

        event.preventDefault();
    });
});