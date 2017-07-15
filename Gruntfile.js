'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);

  grunt.initConfig({

    folders: {
      src: ['src'],
      dev: ['dev'],
      build: ['build']
    },

    copy: {
      dev: {
        cwd: '<%= folders.src %>/',
        src: ['{images,fonts,js}/**/*', 'bower_components/**/*.js', 'manifest.json'],
        dest: '<%= folders.dev %>/',
        expand: true
      },
      build: {
        cwd: '<%= folders.src %>/',
        src: ['{images,fonts,js}/**/*', 'bower_components/**/*.js', 'manifest.json'],
        dest: '<%= folders.build %>/',
        expand: true
      },
      webapp: {
        expand: true,
        src: ['manifest.json'],
        dest: '<%= folders.build %>/',
        filter: 'isFile'
      }
    },

    clean: {
      dev: '<%= folders.dev %>/*',
      build: '<%= folders.build %>/*',
      tmp: '.tmp/*',
      sass: '.sass-cache/*',
      all: [
        '<%= folders.dev %>/*',
        '<%= folders.build %>/*',
        '.tmp/*',
        '.sass-cache/*'
      ],
      buildCleanBower: '<%= folders.build %>/bower_components/'
    },

    useminPrepare: {
      html: '<%= folders.build %>/**/*.html',
      options: {
        dest: '<%= folders.build %>/'
      }
    },

    concat: {
      awesomeSheet: {
        src: [
          '<%= folders.build %>/js/strict.js',
          '<%= folders.build %>/js/helper.js', // helper functions
          '<%= folders.build %>/js/card.js',
          '<%= folders.build %>/js/characters/blank.js',
          '<%= folders.build %>/js/characters/marika.js',
          '<%= folders.build %>/js/characters/nefi.js',
          '<%= folders.build %>/js/characters/nif.js',
          '<%= folders.build %>/js/characters/orrin.js',
          '<%= folders.build %>/js/characters/ro.js',
          '<%= folders.build %>/js/characters/vos.js',
          '<%= folders.build %>/js/characters.js',
          '<%= folders.build %>/js/check-url.js',
          '<%= folders.build %>/js/clone.js',
          '<%= folders.build %>/js/display.js',
          '<%= folders.build %>/js/fireball.js',
          '<%= folders.build %>/js/fullscreen.js',
          '<%= folders.build %>/js/hidable-block.js',
          '<%= folders.build %>/js/input-block.js',
          '<%= folders.build %>/js/log.js',
          '<%= folders.build %>/js/modal.js',
          '<%= folders.build %>/js/nav.js',
          '<%= folders.build %>/js/night.js',
          '<%= folders.build %>/js/prompt.js',
          '<%= folders.build %>/js/register-service-worker.js',
          '<%= folders.build %>/js/repair.js',
          '<%= folders.build %>/js/select-block.js',
          '<%= folders.build %>/js/sheet.js',
          '<%= folders.build %>/js/skills.js',
          '<%= folders.build %>/js/snack.js',
          '<%= folders.build %>/js/spells.js',
          '<%= folders.build %>/js/stats.js',
          '<%= folders.build %>/js/textarea-block.js',
          '<%= folders.build %>/js/theme-color.js',
          '<%= folders.build %>/js/total-block.js',
          '<%= folders.build %>/js/update.js',
          '<%= folders.build %>/js/vendor-options.js',
          '<%= folders.build %>/js/init.js' // invoke calls
        ],
        dest: '<%= folders.build %>/js/awesomeSheet.js'
      },
      vendor: {
        src: [
          '<%= folders.build %>/bower_components/smooth-scroll/dist/js/smooth-scroll.min.js'
        ],
        dest: '<%= folders.build %>/js/vendor.min.js'
      }
    },

    uglify: {
      build: {
        src: '<%= folders.build %>/js/awesomeSheet.js',
        dest: '<%= folders.build %>/js/awesomeSheet.min.js'
      }
    },

    usemin: {
      html: '<%= folders.build %>/**/*.html'
    },

    sass: {
      dev: {
        options: {
          style: 'compact',
          compass: false
        },
        files: [{
          '<%= folders.dev %>/css/vendor.css': '<%= folders.src %>/sass/vendor.scss'
        }, {
          '<%= folders.dev %>/css/awesomeSheet.css': '<%= folders.src %>/sass/awesomeSheet.scss'
        }]
      },
      build: {
        options: {
          style: 'compact',
          compass: false
        },
        files: [{
          '<%= folders.build %>/css/vendor.css': '<%= folders.src %>/sass/vendor.scss'
        }, {
          '<%= folders.build %>/css/awesomeSheet.css': '<%= folders.src %>/sass/awesomeSheet.scss'
        }]
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 3 versions']
      },
      dev: {
        files: {
          '<%= folders.dev %>/css/awesomeSheet.css': '<%= folders.dev %>/css/awesomeSheet.css'
        }
      },
      build: {
        files: {
          '<%= folders.build %>/css/awesomeSheet.css': '<%= folders.build %>/css/awesomeSheet.css'
        }
      }
    },

    cssmin: {
      build: {
        options: {
          sourceMap: true
        },
        files: [{
          expand: true,
          cwd: '<%= folders.build %>/',
          src: ['css/**/*.css'],
          dest: '<%= folders.build %>/',
          ext: '.min.css'
        }]
      }
    },

    watch: {
      sass: {
        files: ['<%= folders.src %>/sass/**/*.{scss,sass}'],
        tasks: ['sass:dev'],
        options: {
          livereload: true
        }
      },
      hbs: {
        files: ['<%= folders.src %>/hbs/**/*.hbs'],
        tasks: ['assemble:dev'],
        options: {
          livereload: true
        }
      },
      assets: {
        files: ['<%= folders.src %>/{images,fonts,js}/**/*', '<%= folders.src %>/manifest.json'],
        tasks: ['copy:dev'],
        options: {
          livereload: true
        }
      }
    },

    connect: {
      dev: {
        options: {
          port: 9000,
          base: '<%= folders.dev %>',
          hostname: 'localhost',
          livereload: 35729,
          open: {
            target: 'http://localhost:9000'
          }
        }
      },
      build: {
        options: {
          port: 9001,
          base: '<%= folders.build %>',
          hostname: 'localhost',
          livereload: 35729,
          open: {
            target: 'http://localhost:9001'
          }
        }
      }
    },

    htmlmin: {
      build: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          '<%= folders.build %>/index.html': '<%= folders.build %>/index.html'
        }
      }
    },

    assemble: {
      options: {
        flatten: false,
        layout: '<%= folders.src %>/hbs/layouts/default.hbs',
        layoutdir: '<%= folders.src %>/hbs/layouts',
        partials: '<%= folders.src %>/hbs/partials/**/*.hbs'
      },
      dev: {
        options: {
          // layout: 'default.hbs'
          layout: false
        },
        files: [{
          expand: true,
          cwd: '<%= folders.src %>/hbs/pages/',
          src: '**/*.hbs',
          dest: '<%= folders.dev %>/'
        }]
      },
      build: {
        options: {
          // layout: 'default.hbs'
          layout: false
        },
        files: [{
          expand: true,
          cwd: '<%= folders.src %>/hbs/pages/',
          src: '**/*.hbs',
          dest: '<%= folders.build %>/'
        }]
      }
    },

    'sw-precache': {
      options: {
        baseDir: '<%= folders.build %>/',
        stripPrefix: 'build/',
        // replacePrefix: 'awesomeSheet/',
        cacheId: 'aS',
        workerFileName: 'service-worker.js',
        verbose: false,
      },
      'default': {
        staticFileGlobs: [
          '**/*.html',
          'css/**/*.css',
          'fonts/**/*.{woff,ttf,svg,eot,woff,woff2}',
          'images/**/*.{gif,png,jpg}',
          'js/**/*.js',
        ],
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-assemble');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-sw-precache');

  grunt.registerTask('dev', [
    'clean:dev',
    'clean:tmp',
    'assemble:dev',
    'copy:dev',
    'sass:dev',
    'autoprefixer:dev',
    'connect:dev',
    'watch'
  ]);

  grunt.registerTask('aslive', [
    'connect:build',
    'watch'
  ]);

  grunt.registerTask('sw', [
    'sw-precache:default'
  ]);

  grunt.registerTask('build', [
    'clean:build',
    'clean:tmp',
    'assemble:build',
    'copy:build',
    'copy:webapp',
    'sass:build',
    'autoprefixer:build',
    'cssmin:build',
    'useminPrepare',
    'concat',
    'uglify:build',
    'usemin',
    'clean:buildCleanBower',
    'htmlmin',
    'sw-precache:default'
  ]);

};
