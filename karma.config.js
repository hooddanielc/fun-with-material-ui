var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    colors: true,
    reporters: ['progress'],
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: 2,

    files: [
      {pattern: 'test/*-test.js', watched: true},
      {pattern: 'test/*-test.jsx', watched: true},
      {pattern: 'test/**/*-test.js', watched: true},
      {pattern: 'test/**/*-test.jsx', watched: true},
    ],

    preprocessors: {
      'test/*-test.js': ['webpack'],
      'test/*-test.jsx': ['webpack'],
      'test/**/*-test.js': ['webpack'],
      'test/**/*-test.jsx': ['webpack'],      
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
}
