<?php
    // setting time zone
    date_default_timezone_set('Europe/Ljubljana');

    // setting two important dates and today
    $date_webindustry = date_create('2007-06-01');
    $date_freelancing = date_create('2013-01-01');

    $date_today = date_create('now');

    // function for calculating difference between
    // two dates and returning it as integer or string
    // NOTE: use true or false for $return_string
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
                5 => 'five',
            );
            return $integer_to_string[round($period->days / 365)];            
        }
    }
?>