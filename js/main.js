$(document).ready(function() {

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
            }, 2000
        );        
    }

    counterAnimate('.counter.normal', timePeriod(dateWebindustry, dateToday, false), '');
    counterAnimate('.counter.small', 90, '+');
    counterAnimate('.counter.smaller', 150, '+');
});