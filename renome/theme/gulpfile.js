'use strict';


/* ----------------- */
/* Dependencies
/* ----------------- */

const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      sourcemaps = require('gulp-sourcemaps'),
      concat = require('gulp-concat'),
      sass = require('gulp-sass'),
      pug = require('gulp-pug'),
      autoprefixer = require('gulp-autoprefixer'),
      imagemin = require('gulp-imagemin'),
      image = require('gulp-image'),
      pngquant = require('imagemin-pngquant'),
      browserify = require('browserify'),
      babelify = require('babelify'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      clean = require('gulp-clean'),
      uglify = require('gulp-uglify'),
      cleanCSS = require('gulp-clean-css'),
      gutil = require('gulp-util'),
      envify = require('envify'),
      manifest = require('gulp-manifest');
      





const hbsfy = require('hbsfy').configure({
  extensions: ['html']
});

/* ----------------- */
/* Settings variables
/* ----------------- */

const settings = {
  src: './src',
  build: './../static/renome'
}, 
      scssPathes = ['node_modules/susy/sass', 
                    'node_modules/breakpoint-sass/stylesheets',
                   'node_modules/bootstrap-sass/assets/stylesheets',
                   'node_modules/font-awesome-sass/assets/stylesheets/'];


/* ----------------- */
/* Scripts
/* ----------------- */

gulp.task('js', () => {
  process.env.NODE_ENV = 'development';

  return browserify({
      transform: ['hbsfy'],
      entries: settings.src + '/js/main.js',
      debug: true
    })
    .transform("babelify", {
      plugins: ['react-html-attrs', 
      'transform-class-properties', 
      'transform-decorators-legacy',
       'transform-object-rest-spread'],
      presets: ['es2015', 'react'],
      sourceMapsAbsolute: true
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(settings.build + '/js'));
});


gulp.task('jsmin', () => {
  process.env.NODE_ENV = 'production';

  return browserify({
      transform: ['hbsfy', 'envify'],
      entries: settings.src + '/js/main.js',
      debug: false
    })
    .transform("babelify", {
      plugins: ['react-html-attrs', 
      'transform-class-properties', 
      'transform-decorators-legacy',
       'transform-object-rest-spread'],
      presets: ['es2015', 'react'],
      sourceMapsAbsolute: false
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify()).on('error', gutil.log)
    .pipe(sourcemaps.write('.'))    
    .pipe(gulp.dest(settings.build + '/js'));
});


/* ----------------- */
/* SASS
/* ----------------- */

gulp.task('scss', () => {
  return gulp.src(settings.src + '/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: scssPathes
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(settings.build + '/css'))
    .pipe(browserSync.stream());
});

gulp.task('css', () => {
  return gulp.src(settings.src + '/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: scssPathes
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(settings.build + '/css'));
});


/* ----------------- */
/* Images
/* ----------------- */

gulp.task('images', () => {
  return gulp.src(settings.src + '/img/*')
    .pipe(image())
    .pipe(gulp.dest(settings.build + '/img'));
});

gulp.task('fastimages', () => {
  return gulp.src(settings.src + '/img/*')
    .pipe(gulp.dest(settings.build + '/img'));
});

/* ----------------- */
/* HTML
/* ----------------- */

gulp.task('html', () => {
  return gulp.src(settings.src + '/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./../app/templates'));
});


/* ----------------- */
/* Fonts
/* ----------------- */

gulp.task('fonts', () => {
  return gulp.src(settings.src + '/fonts/**/*.*')
    .pipe(gulp.dest(settings.build + '/fonts'));
});

gulp.task('fastmedia', ['fonts', 'fastimages']);
gulp.task('media', ['fonts', 'images'])
/* ----------------- */
/* CacheApp
/* ----------------- */

gulp.task('manifest', () => {
  gulp.src(settings.build + '/**/*')
    .pipe(manifest({
      hash: true,
      preferOnline: true,
      network: ['*'],
      filename: 'app.manifest',
      exclude: 'app.manifest'
    }))
    .pipe(gulp.dest(settings.build));
});


/* ----------------- */
/* Clean
/* ----------------- */

gulp.task('clean', function () {
    return gulp.src('public', { read: false })
      .pipe(clean());
});


/* ----------------- */
/* Predefined
/* ----------------- */
gulp.task('bundle', ['js', 'scss', 'fastmedia', 'html', 'fonts']);

gulp.task('default', ['bundle'], () => {
  gulp.watch(settings.src + '/**/*.scss', ['scss']);
  gulp.watch(settings.src + '/img/**/*.*', ['fastimages']);
  gulp.watch(settings.src + '/**/*.pug', ['html']);
  gulp.watch(settings.src + '/**/*.js', ['js']);
  //gulp.watch('./**/*', []).on('change', browserSync.reload);
});  // development

gulp.task('deploy', ['jsmin', 'html', 'css', 'media', 'manifest']);
