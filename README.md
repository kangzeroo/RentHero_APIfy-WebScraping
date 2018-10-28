
# Web-Scraping with APIfy JS
See docs at https://www.apify.com/docs

### Common Scraping Syntaxes
- jQuery: `$('.athing:eq(0) .title:eq(1)').text()` --> https://www.w3schools.com/jquery/jquery_ref_selectors.asp <br/>
- CSS Selectors `document.querySelectorAll(".athing:nth-of-type(1) .title")[1].textContent` <br/>
- XPATH `document.evaluate('//tr[@class="athing"][1]/td[@class="title"][2]', document, null, XPathResult.STRING_TYPE, null).stringValue` <br/>

### Importing Libraries into Chrome Console
```
// import jQuery
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

// import MomentJS
var mt = document.createElement('script');
mt.src = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.js";
document.getElementsByTagName('head')[0].appendChild(mt);
```

## How To Run
1. Login to APIfy and use the Crawlers <br/>
2. First use the listing scripts (eg. `scraping/yelp/yelp_list.js` or `scraping/zumper/zumper_list.js`). Give it a URL with pages of listings. Run the listing script from the APIfy GUI. It will paginate your URL and output a JSON array of page URLs for details scraping <br/>
3. Download the output JSON of URLs. Save it into the `data/urls` folder (eg. `scraping/yelp/pm_data/urls/yelp_1.json`). It will be used in the next step, the extract scripts. <br/>
4. Extract scripts get in-depth detail from a page. Update the extract scripts with the array of URLs from the previous listing step. Use the REST function for Updating the Crawler (eg. `scraping/yelp/yelp_extract.js` or `scraping/zumper/zumper_extract.js`). This can also be tediously done via the APIfy GUI. Then run the crawler from the APIfy GUI. <br/> If you need to update the extract script itself, it can be found in the scripts folder (eg. `scraping/yelp/scripts/yelp_script.js`). The listing scripts can also be found here. <br/>
5. Download the output JSON of detailed extracted URLs. Save them to the `data/pages` folder (eg. `scraping/yelp/pm_data/pages/yelp_reviews_1.json)` <br/>
6. Now we can run additional parsing scripts such as adding gps coords, sentiment analysis, google place_ids, google business reviews, linkedin reviews...etc. (eg. `parsing/sentiment/analyze_reviews.js`). The parsing scripts will look for input data saved in the previous step at `data/pages`. Run the parsing script and store the output in a `data` folder (eg. `parsing/sentiment/data/Luxor_Property_Management.json`) <br/>
7. If we are satisfied with the parsed output, we can upload the json files to S3 and hook up a web app to GET files from S3 for data visualization. <br/>
