// karma.conf.js
var webpackConfig = require('./webpack.common.js');
//webpackConfig.entry = {};

module.exports = function (config) {
    config.set({
        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],

        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            'src/**/*.js':  ['webpack']
        },

        webpackPreprocessor: {
            configPath: webpackConfig
          },

        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },
        webpack: webpackConfig,

        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        singleRun: true
    });
};