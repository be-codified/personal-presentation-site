module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        'ftp-deploy': {
          build: {
            auth: {
              host: '109.202.120.135',
              port: 21,
              authKey: 'credentials'
            },
            src: '/Users/Ziga/Projekti/be_codified/site',
            dest: '/public_html',
            exclusions: ['path/to/source/folder/**/.DS_Store', 'path/to/source/folder/**/Thumbs.db', 'path/to/dist/tmp']
          }
        },

        watch: {
            html: {
                files: ['*.html','*.php']
            },
            cssmin: {
                files: ['css/bootstrap.css', 'css/custom_styles.css'],
                tasks: ['cssmin']
            },
            less: {
                files: ['css/custom_styles.less'],
                tasks: ['less:styles']
            },
            less: {
                files: ['css/custom_variables.less'],
                tasks: ['less:bootstrap']
            },
            options: {
                livereload: true
            }
        },

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

        cssmin: {
            minify: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['bootstrap.css', 'custom_styles.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        },

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
                src: ['path/to/**/*.css']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-lint5');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-contrib-less');
};