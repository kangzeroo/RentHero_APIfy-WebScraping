const axios = require('axios')
const APIFY_TOKEN = require('../../credentials/'+process.env.NODE_ENV+'/apify_creds.json').token
const CRAWLER_ID = 'reC99LcXSCRgJ2XJT'
const CRAWLER_EXEC_TOKEN = 'xsnuzJN86faXzjtAuQax9aPTZ'

// NODE_ENV=development node ./scripts/zumper/zumper_ad_listing.js
console.log("=========> STARTING SCRIPT...")



/*
  // ================ CRAWLER CONFIG ================

  ---> WHEN TO RUN THIS SCRIPT
  1. This script is for the APIfy Crawler "Zumper Ad Listing"
  2. Use it to compile of latest zumper listings in a given city, to be saved as JSON output
  3a. View/download results as JSON in the crawler run history
        3b. Overwrite the local file 'zumper_ad_list.json'
        3c. Use the JSON output in the next script "Zumper Ad Extraction" using "zumper_ad_extraction.js"

    ---> CRAWLER PARAMETERS
  - This is the setup for the crawler. If the APIfy console ever deletes params, we can use the below as a saved reference
  - You can include these params in the functions below, or omit and run with the latest executed params.

  function pageFunction(context) {
      // called on every page the crawler visits, use it to extract data from it
      var $ = context.jQuery;
      var results = [];
      $(".listingFeed-item").each( function(i) {
          console.log("---------- FEED ITEM -----------")
          console.log(i)
          var scraped_obj = {
              address : $(this).find(".feedItem-details > h3 > a").text(),
              summary : $(this).find(".feedItem-details > p").text(),
              ad_url : "https://zumper.com" + $(this).find(".feedItem-details > h3 > a").attr('href'),
              zumper_id: $(this).attr('id').replace('item-', '')
          }
          results.push(scraped_obj);
      });

      var final_results = []
      results.forEach((function(r) {
        var exists = false
        final_results.forEach((function(f) {
          if (f.zumper_id === r.zumper_id) {
            exists = true
          }
        }))
        if (!exists) {
          final_results.push(r)
        }
      }))
      return final_results;
  }

  const PAYLOAD_CRAWLER_SETTINGS_OBJECT = {
    "startUrls": [
      {
        "key": "1",
        "value": "https://www.zumper.com/apartments-for-rent/toronto-on?sort=newest&property-categories=apartment,condo,house&page=1"
      }
    ],
    "crawlPurls": [
      {
        "key": "1",
        "value": "https://www.zumper.com/apartments-for-rent/toronto-on?sort=newest&property-categories=apartment,condo,house&page=[\d+]"
      }
    ],
    "clickableElementsSelector": ".listingFeed-pagination > ul > li:last-child > a[href]",
    "injectJQuery": true
  }
*/





// ================ AVAILABLE FUNCTIONS ================

// ---> VIEW CRAWLER
/*
axios.get('https://api.apify.com/v1/jJNKda3ocxBuADaHk/crawlers/'+CRAWLER_ID+'?token='+APIFY_TOKEN)
  .then((data) => {
    console.log("=========> SUCCESS")
    console.log(data.data)
  })
  .catch((err) => {
    console.log("=========> ERROR")
    console.log(err)
  })
*/

// ---> UPDATE CRAWLER
// For example, to change the start URLs
/*
const PAYLOAD_UPDATE_CRAWLER = {
  "startUrls": [
    {
      "key": "1",
      "value": "http://example1.com"
    },
    {
      "key": "2",
      "value": "http://example2.com"
    }
  ]
}
axios.put('https://api.apify.com/v1/jJNKda3ocxBuADaHk/crawlers/'+CRAWLER_ID+'?token='+APIFY_TOKEN, PAYLOAD_UPDATE_CRAWLER)
  .then((data) => {
    console.log("=========> SUCCESS")
    console.log(data.data)
  })
  .catch((err) => {
    console.log("=========> ERROR")
    console.log(err)
  })
*/

// ---> EXECUTE CRAWLER
/*
const PAYLOAD_EXECUTE_CRAWLER = {}
axios.post('https://api.apify.com/v1/jJNKda3ocxBuADaHk/crawlers/'+CRAWLER_ID+'/execute?token='+CRAWLER_EXEC_TOKEN+'&wait=15', PAYLOAD_EXECUTE_CRAWLER)
  .then((data) => {
    console.log("=========> SUCCESS")
    console.log(data.data)
  })
  .catch((err) => {
    console.log("=========> ERROR")
    console.log(err)
  })
*/
