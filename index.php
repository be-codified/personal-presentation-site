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
                        <p class="lead">Hi,<br /> my name is Žiga and I'm <strong>a front-end developer.</strong></p>
                        <?php require_once('time_period.php'); ?>
                        <h3>I have been working in the web industry for the past <?php echo time_period($date_webindustry, $date_today, 0); ?> years, for the last <?php echo time_period($date_freelancing, $date_today, 0); ?> years as a freelancer.</h3>
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
                        <p class="lead">My main strenghts</p>
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
                        <p class="lead">Latest work</p>
                        <p>Here goes image/text</p>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="background-color: green;">
                        <p class="lead">My main skills</p>
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
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="background-color: coral;">
                        <p class="lead">Magical tools I use on a daily basis</p>
                        <p>editor Sublime Text 2, Chrome DevTools, task runner Grump, CodeKit and Bootstrap framework; all running on a small thing called MacBook Pro, extended to an external 24” monitor. // note: these should be links</p>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="background-color: beige;">
                        <p class="lead">Latest work</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="background-color: pink;">
                        <p class="lead">Want to hire me for a project?</p>
                        <p>Please feel free to contact me by any communication channel:</p>
                        <ul>
                            <li>
                                e-mail:&nbsp; 
                                <a href="mailto:ziga@be-codified.com">ziga@be-codified.com</a></li>
                            <li>
                                twitter:&nbsp;
                                <a href="https://twitter.com/be_codified" target="_blank">@be_codified</a>
                            </li>
                            <li>skype:&nbsp;
                                <a href="skype:ziga_vukcevic?call">ziga_vukcevic</a>

                            </li>
                            <li>phone:&nbsp;
                                <a href="tel: 0038651313680">00386 51 313 680</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="background-color: green;">
                        <p class="lead">How was this site made?</p>
                        <ul>
                            <p>I have coded it with modern technologies such as:</p>
                            <li>HTML5, CSS3 and jQuery (no website template has been used), checked with grunt-lint5 (HTML5 validator), Csslint (CSS validator), PageSpeed Insights; cross-browser and cross-platform compatibility was tested as well</li>
                            <li>by using responsive design and Bootstrap framework,</li>
                            <li>design came under hands of Groga Tanček</li>
                        </ul>
                    </div>
                </div>
            </article>
            <footer>
                <div class="row">
                    <p class="text-center">Business owner info:</p>
                    <address class="text-center">Digitalna ladja, Žiga Vukčevič s.p., Tržaška 121, 1000 Ljubljana, Slovenia<br />VAT Nr.: SI86291459, Registration Nr.: 6531164000, IBAN: SI56 6100 0000 6613 419, BIC: HDELSI22</address>
                    <p class="text-center">
                        <small>Copyright 2015 © be-codified.com</small>
                    </p>
                </div>
            </footer>
        </div>
    
        <!-- jquery and main script -->
        <script type="text/javascript" src="js/lib/jquery.min.js"></script>
        <script type="text/javascript" src="js/main.js?v=<?php echo time(); ?>"></script>
    </body>
</html>