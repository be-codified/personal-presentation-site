    'use strict';
    // =======================================================================
    // Gulp Plugins
    // =======================================================================
    var gulp = require('gulp'),
        nunjucks = require('nunjucks'),
        markdown = require('nunjucks-markdown'),
        marked = require('marked'),
        rename = require('gulp-rename'),
        gulpnunjucks = require('gulp-nunjucks');

    // =======================================================================
    // ENV Vars
    // =======================================================================
    var dist = 'dist'; //Set this as your target you be compiling into
    var src = 'src'; //Set this as the location of your source files
    var templates = src + '/templates'; //Set this as the folder that contains your nunjuck files

    var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(templates));

    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
    });

    markdown.register(env, marked);

    gulp.task('pages', function() {
        return gulp.src([templates + '/*.njk', templates + '/**/*.njk'])
            .pipe(gulpnunjucks.compile("", {env: env}))
            .pipe(rename(function (path) { path.extname=".html" }))
            .pipe(gulp.dest(dist))
    });
