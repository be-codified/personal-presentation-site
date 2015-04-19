module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /*** watchers
        *********************************************************/

            // watching over files and running plugins
            watch: {
                htmlPhp: {
                    files: ['*.html','*.php']
                },
                /*
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
                */
                lessStyles: {
                    files: ['css/custom-styles.less'],
                    tasks: ['less:styles']
                },
                lessBootstrap: {
                    files: ['css/custom-variables.less'],
                    tasks: ['less:bootstrap']
                },
                /*
                fileRevision: {
                    files: ['css/custom-styles.min.css'],
                    tasks: ['filerev']
                },
                */
                options: {
                    livereload: true
                }
            },

        /*** tasks
        *********************************************************/

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

            // file revisions 
            filerev: {
                options: {
                    algorithm: 'md5',
                    length: 8
                },
                images: {
                    src: ['img/portfolio-1.jpg', 'img2.png'],
                    dest: 'tmp'
                }
            },

            // coping files and folders
            copy: {
                buildDevelopment: {
                    cwd: '',
                    src: ['**/*',
                        '!**/node_modules/**',
                        '!**/jekyll/**',
                        '!**/build/**', 
                        '!**/tmp/**', 
                        '!**/.git/**', '!.gitignore', '!readme.md',
                        '!gruntfile.js', '!package.json', 
                        '!licence.txt', '!.ftppass', 
                        '!.DS_Store', '!*/.DS_Store'
                    ],
                    dest: 'build/development',
                    dot: true,
                    expand: true
                },
            },

            // deployment
            'ftp-deploy': {
                development: {
                    auth: {
                        host: '109.202.120.135',
                        port: 21,
                        authKey: 'credentials'
                    },
                    src: '/Users/Ziga/Projekti/be_codified/site/build/development',
                    dest: '/public_html/development',
                    exclusions: [
                        '.DS_Store', '*/.DS_Store'
                    ]
                }
            },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-minified');
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-contrib-copy');

    /*** building and deploying process
    *********************************************************/

    grunt.registerTask('deploy-development', ['copy:buildDevelopment', 'ftp-deploy:development']);    
};