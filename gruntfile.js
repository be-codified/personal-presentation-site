module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*** watchers
    *********************************************************/

    // watching over files and running plugins
    watch: {
      htmlPhp: {
        files: ['*.html', '*.php'],
      },
      lessStyles: {
        files: ['css/custom-styles.less'],
        tasks: ['less:styles'],
      },
      lessBootstrap: {
        files: ['css/bootstrap-less/bootstrap.less'],
        tasks: ['less:bootstrap'],
      },
      options: {
        livereload: true,
      },
    },

    /*** tasks
    *********************************************************/

    // compiling css files from less files
    less: {
      styles: {
        options: {
          paths: ['.'],
        },
        files: {
          'css/custom-styles.css': 'css/custom-styles.less',
        },
      },
      bootstrap: {
        options: {
          paths: ['.'],
        },
        files: {
          'css/bootstrap.css': 'css/bootstrap-less/bootstrap.less',
        },
      },
    },

    // minifying css files
    cssmin: {
      stylesDevelopment: {
        files: [
          {
            expand: true,
            cwd: 'build/development/css/',
            src: ['custom-styles.css'],
            dest: 'build/development/css/',
            ext: '.min.css',
          },
        ],
      },
      bootstrapDevelopment: {
        files: [
          {
            expand: true,
            cwd: 'build/development/css/',
            src: ['bootstrap.css'],
            dest: 'build/development/css/',
            ext: '.min.css',
          },
        ],
      },
    },

    // minifying js files
    uglify: {
      options: {
        mangle: false,
      },
      mainDevelopment: {
        files: {
          'build/development/js/main.min.js': ['build/development/js/main.js'],
        },
      },
    },

    // file revisions
    filerev: {
      options: {
        algorithm: 'md5',
        length: 8,
      },
      cssDevelopment: {
        src: [
          'build/development/css/bootstrap.min.css',
          'build/development/css/custom-styles.min.css',
        ],
        dest: 'build/development/css',
      },
      jsDevelopment: {
        src: [
          'build/development/js/main.min.js',
        ],
        dest: 'build/development/js',
      },
    },

    // copying files and folders
    copy: {
      buildDevelopment: {
        cwd: '',
        src: ['**/*',
            '!**/node_modules/**',
            '!**/jekyll/**',
            '!**/build/**',
            '!**/css/bootstrap-less/**',
            '!**/tmp/**',
            '!**/.git/**', '!.gitignore', '!readme.md',
            '!gruntfile.js', '!package.json',
            '!licence.txt', '!.ftppass',
            '!.DS_Store', '!*/.DS_Store',
            '!**/*.less',
        ],
        dest: 'build/development',
        dot: true,
        expand: true,
      },
    },

    // using minified files in html
    useminPrepare: {
      html: 'index.html',
      options: {
        dest: '.',
      },
    },
    usemin: {
      html: ['build/development/index.html'],
    },

    // cleaning build folder
    clean: {
      cleanDevelopment: {
        src: ['build/development'],
      },
      cleanDevelopmentAfterDeployment: {
        src: [
          'build/development/css/bootstrap.css',
          'build/development/css/bootstrap.min.css',
          'build/development/css/custom-styles.css',
          'build/development/css/custom-styles.min.css',
          'build/development/js/main.js',
          'build/development/js/main.min.js',
        ],
      },
    },

    // deployment
    'ftp-deploy': {
      development: {
        auth: {
          host: '109.202.120.135',
          port: 21,
          authKey: 'credentials',
        },
        src: '/Users/ziga/Development/be-codified/build/development',
        dest: '/public_html/development',
        exclusions: [
          '.DS_Store', '*/.DS_Store',
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  /*** building and deploying process
  *********************************************************/

  grunt.registerTask('deploy-development', [
    'clean:cleanDevelopment',
    'copy:buildDevelopment',
    'useminPrepare:html',
    'cssmin:stylesDevelopment',
    'cssmin:bootstrapDevelopment',
    'uglify:mainDevelopment',
    'filerev:cssDevelopment',
    'filerev:jsDevelopment',
    'usemin',
    'clean:cleanDevelopmentAfterDeployment',
    'ftp-deploy:development',
  ]);
};
