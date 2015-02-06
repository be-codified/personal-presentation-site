$(document).ready(function() {
    // animations
    // *********************************************

    // water drop (underneath avatar)
    $('.avatar .circle-large').delay(1000).animate({
        opacity: 0,
        top: '50px',
        left: '50px',
        width: '+=300px',
        height: '+=300px',
    },{
        duration: 1000,
        easing: 'swing',
        queue: false
    })

    $('.avatar .circle-small').delay(250).animate({
        opacity: 0,
        top: '75px',
        left: '75px',
        width: '+=250px',
        height: '+=250px',
    },{
        duration: 1000,
        easing: 'swing'
    })

    // rolling counter (on avatar)
    $.fn.rolling = function() {
        this.css('color', 'white');
    }

    $('.counter').rolling();
});