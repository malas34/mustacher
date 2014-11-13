/**
 * Grunt Mustacher
 * https://github.com/malas34/grunt-mustacher
 *
 * Copyright (c) 2014 Matthieu Lassalvy
 * Licensed under the MIT license.
 *
 * HANDLEBARS
 * @see http://handlebarsjs.com/
 *
 */
/*jslint plusplus: true, indent: 4 */
/*global module */
(function () {

    'use strict';

    module.exports = function (grunt) {

        grunt.initConfig({
            /** ------------------------------------

 JSHint task

 */
            jshint: {
                options: {
                    jshintrc: '.jshintrc'
                },
                all: ['Gruntfile.js', 'specs/*.js']
            },
            /** ------------------------------------

 Jasmine task

 */
            jasmine_node: {
                options: {
                    match: '.',
                    forceExit: false,
                    extensions: 'js',
                    specNameMatcher: 'test'
                },
                all: ['specs/']
            },
            /** ------------------------------------

 Clean task

 */
            clean: {
                tests: ['tmp/*']
            },
            /** ------------------------------------

 Mustacher task

 */
            mustacher: {
                compile: {
                    files: [{
                        src: 'templates/commons/head.tpl',
                        dest: 'html/commons/head.html'
                    }, {
                        src: 'templates/index.tpl',
                        dest: 'html/index.html'
                    }]
                }
                /*
                templates: {
                    files: [{
                        expand: true,
                        cwd: 'output/hbs/commons/',
                        src: '.hbs',
                        dest: 'output/tpl/commons/',
                        ext: '.tpl'
                }]
                },

                html: {
                    files: [{
                        expand: true,
                        cwd: 'html/tpl/',
                        src: '*.tpl',
                        dest: 'html/html/',
                        ext: '.html'
                }]
                }
                */
            }

        });
        /* -----------------------------------------------------------------------------

 Tasks

----------------------------------------------------------------------------- */
        grunt.loadTasks('tasks');

        grunt.loadNpmTasks('grunt-jasmine-node');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-htmlmin');

        grunt.registerTask('default', ['jshint', 'jasmine_node']);
        grunt.registerTask('compile', ['jshint', 'mustacher:compile']);

    };
}());
