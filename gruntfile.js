module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // watching over files and running plugins
        watch: {
            htmlPhp: {
                files: ['*.html','*.php']
            },
            minifyCssStyles: {
                files: ['css/custom-styles.css'],
                tasks: ['cssmin:styles']
            },
            minifyCssBootstrap: {
                files: ['css/bootstrap.css'],
                tasks: ['cssmin:bootstrap']
            },
            minifyJs: {
                files: ['js/main.js'],
                tasks: ['minified']
            },
            lessStyles: {
                files: ['css/custom-styles.less'],
                tasks: ['less:styles']
            },
            lessBootstrap: {
                files: ['css/custom-variables.less'],
                tasks: ['less:bootstrap']
            },
            options: {
                livereload: true
            }
        },

        // compiling css files from less files
        less: {
            styles: {
                options: {
                    paths: ['.']
                },
                files: {
                    'css/custom-styles.css': 'css/custom-styles.less'
                }
            },
            bootstrap: {
                options: {
                    paths: ['.']
                },
                files: {
                    'css/bootstrap.css': 'css/bootstrap-less/bootstrap.less'
                }
            }
        },

        // minifying css files
        cssmin: {
            styles: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['custom-styles.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            },
            bootstrap: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['bootstrap.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        },

        // minifying js files        
        minified : {
            files: {
                src: ['js/main.js'],
                dest: 'js/'
            },
            options : {
                ext: '.min.js',
                sourcemap: false,
                allinone: false
            }
        },

        // deployment
        'ftp-deploy': {
            development: {
                auth: {
                    host: '109.202.120.135',
                    port: 21,
                    authKey: 'credentials'
                },
                src: '/Users/Ziga/Projekti/be_codified/site',
                dest: '/public_html/development',
                exclusions: [
                    'node_modules',
                    'jekyll', 
                    '.git', '.gitignore', 'readme.md',
                    'gruntfile.js', 'package.json', 
                    'licence.txt', '.ftppass', 
                    '.DS_Store', '*/.DS_Store'
                ]
            }
        },

/*
        lint5: {
            dirPath: '/',
            defaults: {
                'email': 'a@a.com', 
                'username': 'abcd'
            },
            templates: [
                'index.php'
            ],
            ignoreList: [
                'message to be ignored',
                'another message',
                'Bad value “” for attribute “action” on element “form”: Must be non-empty.',
                'Attribute “[a-z1-9]+” not allowed on element “[a-z1-9]+” at this point'
            ]
        },

        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['css/*.css']
            },
            lax: {
                options: {
                    import: false
                },
                src: ['.']
            }
        }

*/

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-minified');
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-notify');

    //grunt.loadNpmTasks('grunt-lint5');
    //grunt.loadNpmTasks('grunt-contrib-csslint');

};