
// Hosted APIfy Crawlers use ES5 (Not ES6 unfortnetly)
// So remember that its a limited environment!

// called on every page the crawler visits, use it to extract data from it
function pageFunction(context) {
    console.log('-------> Starting script...')

    // jQuery comes preinstalled by APIfy
    var $ = context.jQuery;

    /*
      ___ There are 2 ways to import our custom libraries
      1. DOM insertion of <script> tag pointing to a CDN. Use this method on chrome browser
              var coolLib = document.createElement('script');
              coolLib.src = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.js";
              document.getElementsByTagName('head')[0].appendChild(coolLib);
      2. Loading via ES5 jQuery. Can also be used in browser, but def better for NodeJS (non browser)
            - We can then import an ES6 Polyfill
    */

    // 2. Loading via jQuery
    var ES6_TRACER = 'https://raw.githubusercontent.com/jmcriffey/bower-traceur/0.0.72/traceur.js'
    var ES6_POLYFILL = 'https://raw.githubusercontent.com/ModuleLoader/es6-module-loader/v0.9.4/dist/es6-module-loader.js'
    var MOMENT_JS = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.js'
    // var BLUEBIRD = 'https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.2/bluebird.min.js'
    // jQuery $.when() forces JS code to sequentially
    $.when(
      // jQuery $.getScript() gets the library from CDN
      $.getScript(ES6_TRACER),
      $.getScript(ES6_POLYFILL),
      $.getScript(MOMENT_JS),
      // $.getScript(BLUEBIRD),
      // jQuery $.Deferred
      $.Deferred(function( deferred ){
          $( deferred.resolve );
      })
    ).done(function(){
        console.log('-------> Successfully Loaded Libraries!')
        console.log('Check out this example #' + moment().unix())
        const tryIt = function(a, b) {
          return a + b
        }
        const score = [2,57,864,86,2].map(function(num, index){
          return tryIt(num, index)
        })
        const results = {
          run: moment().toISOString(),
          score: score
        }
        console.log(results)
        context.finish(results)
    });

    // wait for everything to finish after context.finish()
    context.willFinishLater();
}
