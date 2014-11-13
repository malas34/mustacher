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
/*global module, require */
(function () {
    'use strict';
    var Mustacher = require('./lib/mustacher'),
        helpers = [
            'timestamp'
        ];
        /*
         *
            'equal',
            'image',
            'include',
            'lorem',
            'random',
            'repeat',
         */
    /**
     *
     *
     *
     */
    module.exports = function (grunt) {
        grunt.registerMultiTask('mustacher', 'Handlebars Template Helpers.', function () {
            var done = this.async(),
                mustacher = new Mustacher();
            mustacher.render(this, helpers).then(function () {
                done(true);
            }, function (err) {
                done(new Error(err));
            });
        });
    };

}());
