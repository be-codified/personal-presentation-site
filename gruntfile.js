module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // watching over files and running plugins
        watch: {
            html_php: {
                files: ['*.html','*.php']
            },
            minify_css_styles: {
                files: ['css/custom_styles.css'],
                tasks: ['cssmin:styles']
            },
            minify_css_bootstrap: {
                files: ['css/bootstrap.css'],
                tasks: ['cssmin:bootstrap']
            },
            less_styles: {
                files: ['css/custom_styles.less'],
                tasks: ['less:styles']
            },
            less_bootstrap: {
                files: ['css/custom_variables.less'],
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
                    'css/custom_styles.css': 'css/custom_styles.less'
                }
            },
            bootstrap: {
                options: {
                    paths: ['.']
                },
                files: {
                    'css/bootstrap.css': 'css/bootstrap_less/bootstrap.less'
                }
            }
        },

        // minifying css files
        cssmin: {
            styles: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['custom_styles.css'],
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
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-notify');

    //grunt.loadNpmTasks('grunt-lint5');
    //grunt.loadNpmTasks('grunt-contrib-csslint');

};