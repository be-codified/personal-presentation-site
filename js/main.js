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

    var width = '30%';

    // opening panel

    $('.more').on('click', function(event) {
        id = $(this).data().id;

        $('.portfolio.item-' + id + ' .more').fadeOut(500, 'swing', function() {
            $('.neighbour-' + id).fadeOut(500, 'swing', function() {
                $('.portfolio.item-' + id + ' > div').fadeOut(500, 'swing', function() {
                    $('.portfolio.item-' + id).animate({
                        width: '+=' + width 
                    }, 1000, function() {
                        $('.portfolio.item-' + id + ' .initial').css('opacity', '0');
                        $('.portfolio.item-' + id + ' .more-close').fadeIn(500, 'swing');
                    });
                });   

            });
        });

        event.preventDefault();
    });

    // closing panel

    $('.more-close').on('click', function(event) {
        id = $(this).data().id;

        $('.portfolio.item-' + id + ' .more-close').fadeOut(500, 'swing', function() {
            $('.portfolio.item-' + id + ' .initial').css('opacity', '1');
            $('.portfolio.item-' + id + ' > div').fadeOut(500, 'swing', function() {
                $('.portfolio.item-' + id).animate({
                    width: '-=' + width 
                }, 1000, function() {
                    $('.portfolio.item-' + id + ' > div').fadeIn(500, 'swing', function() {
                        $('.portfolio.item-' + id).css('width', '50%'); // cutting off decimal numbers                   
                        $('.neighbour-' + id).fadeIn(500, 'swing', function() {
                            $('.portfolio.item-' + id + ' .more').fadeIn(500, 'swing');
                        });
                    })
                });
            });
        })

        event.preventDefault();
    });
});