$(document).ready(function() {

    // achievements calculations
    // *********************************************

    // setting two important dates and today

    var dateWebindustry = new Date('2007-06-01'),
        dateFreelancing = new Date('2013-01-01');

    dateToday = new Date();

    // function for calculating difference between
    // two dates and returning it as integer or string
    // NOTE: use true or false for $return_string

    function timePeriod(dateStart, dateEnd, returnString) {
        var period = Math.ceil(new Date(dateEnd - dateStart)/1000/60/60/24/365);

        if (returnString) {
            console.log(period);
            return period;            
        }
        /* 
        else {
            $integer_to_string = array(
                1 => 'one',
                2 => 'two',
                3 => 'three',
                4 => 'four',
                5 => 'five',
            );
            return $integer_to_string[round($period->days / 365)];            
        }*/
    }

    timePeriod(dateWebindustry, dateToday, true);


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

    counterAnimate('.counter.normal', 8, '');
    counterAnimate('.counter.small', 90, '+');
    counterAnimate('.counter.smaller', 150, '+');
});