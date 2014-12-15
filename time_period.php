<?php
    // setting time zone
    date_default_timezone_set('Europe/Ljubljana');

    // setting two important dates and today
    $date_webindustry = date_create('2007-06-01');
    $date_freelancing = date_create('2013-01-01');

    $date_today = date_create('now');

    // function for calculating difference between two  
    // dates and returning it as integer or string
    function time_period($date_start, $date_end, $return_string) {
        $period = date_diff($date_start, $date_end);

        if (!$return_string) {
            return round($period->days / 365);            
        } 
        else {
            $integer_to_string = array(
                1 => 'one',
                2 => 'two',
                3 => 'three',
                4 => 'four',
            );
            return $integer_to_string[round($period->days / 365)];            
        }
    }

    // calling function with params: 
    // start_date, end_date, show number as string
    echo time_period($date_webindustry, $date_today, 0);
    echo time_period($date_freelancing, $date_today, 1);
?>