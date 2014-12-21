<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>be-codified.com | freelance front-end developer</title>

        <!-- fonts -->
        <link href="http://fonts.googleapis.com/css?family=Raleway:700,400" rel="stylesheet" type="text/css" />

        <!-- stylesheets -->
        <link href="css/bootstrap.min.css?v=<?php echo time(); ?>" rel="stylesheet" media="screen" />
        <link href="css/custom_styles.min.css?v=<?php echo time(); ?>" rel="stylesheet" media="screen" />

        <!-- icons -->
        <link rel="shortcut icon" type="image/ico" href="images/favicon.ico" />
        <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114.png" />

        <!-- IE8 support for html5 elements and media queries -->
        <script type="text/javascript" src="js/lib/html5shiv.min.js"></script>
        <script type="text/javascript" src="js/lib/respond.min.js"></script>

        <!-- google analytics tracking code -->
        <script type="text/javascript">
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-57549333-1', 'auto');
            ga('send', 'pageview');
        </script>
    </head>
    <body>
        <div class="container" style="background-color: red;">
            <header>
                <h1>be-codified.com</h1>
            </header>
            <article>
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="background-color: beige;">
                        <h2>Hi,<br /> my name is Žiga and I'm <strong>a front-end developer.</strong></h2>
                        <?php require_once('time_period.php'); ?>
                        <h4>I have been working in the web industry for the past <?php echo time_period($date_webindustry, $date_today, 0); ?> years, for the last <?php echo time_period($date_freelancing, $date_today, 0); ?> years as a freelancer.</h4>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="background-color: coral;">
                        <p>Here goes avatar</p>
                        <ul>
                            <li><?php echo time_period($date_webindustry, $date_today, 0); ?>+ Years of Experience</li>
                            <li>90+ Happy Clients</li>
                            <li>150+ Completed Projects</li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="background-color: yellow;">
                        <h2>My main strenghts</h2>
                        <ul>
                            <li>strong understanding of developing for the web and <strong>a careful eye for design</strong>,</li>
                            <li>exceptional ability to <strong>translate designs</strong> into semantic, accessible front-end code,</li>
                            <li>strong understanding of <strong>modern web technologies</strong> and workflows,</li>
                            <li>strong understanding of mobile and <strong>responsive design</strong> and development practices,</li>
                            <li>solid understanding of <strong>designing in a browser</strong>,</li>
                            <li>solid understanding of <strong>integration or modification of front-end code</strong> with CMSs (i.e. Wordpress, Joomla, Magento),</li>
                            <li>solid understanding of <strong>SEO</strong>,</li>
                            <li>solid understanding and appreciation of <strong>colour and typography</strong>,</li>
                            <li>ability to work directly with designers to <strong>implement designs</strong> and provide feedback on design if needed,</li>
                            <li>excellent <strong>communication skills</strong>,</li>
                            <li>ability to dive in and learn new things to <strong>find solutions for technical problems</strong>.</li>
                        </ul>            
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="background-color: pink;">
                        <h2>Latest work</h2>
                        <p>Here goes image/text</p>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="background-color: green;">
                        <h2>My main skills</h2>
                        <ul>
                            <li><strong>HTML5</strong> (modern markup),</li>
                            <li><strong>CSS3</strong> (modern properties, web font embeding, SVG),</li>
                            <li><strong>cross-browser</strong> (i.e. Chrome, Firefox, Safari, Internet Explorer 9+) and <strong>cross-platform</strong> (Android, iOS iPhone/iPad) <strong>compatibility testing</strong>,</li>
                            <li><strong>jQuery</strong> (DOM elements manipulation, handling events, JSON parsing and using Ajax),</li>
                            <li><strong>Git</strong> (working with a team of developers, service BitBucket),</li>
                            <li>experienced in <strong>frameworks or theme starters</strong> (i.e. Bootstrap, Html5Boilerplate, _s),</li>
                            <li><strong>graphic tools</strong> (i.e. Adobe Photoshop and Illustrator),</li>
                            <li>basic understanding of PHP and MySQL.</li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    
        <!-- jquery and main script -->
        <script type="text/javascript" src="js/lib/jquery.min.js"></script>
        <script type="text/javascript" src="js/main.js?v=<?php echo time(); ?>"></script>
    </body>
</html>