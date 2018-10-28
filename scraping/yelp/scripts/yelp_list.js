
// Start URL: https://www.yelp.ca/search?find_loc=Toronto,+ON&start=0&cflt=propertymgmt
// Pseudo URLs: https://www.yelp.ca/search?find_loc=Toronto,+ON&start=[\d+]&cflt=propertymgmt
// Clickable Elements: a.next.pagination-links_anchor

function pageFunction(context) {
    // called on every page the crawler visits, use it to extract data from it
    var $ = context.jQuery;
    var results = [];

    $(".regular-search-result").each( function(i) {
        console.log("---------- FEED ITEM -----------")
        console.log(i)

        // grabbing the service area
        var servicing = ''
        if ($(this).find("div.secondary-attributes > span.neighborhood-str-list")[0]) {
          servicing = $(this).find("div.secondary-attributes > span.neighborhood-str-list")[0].innerText.trim()
        }
        var service_area = $(this).find(".secondary-attributes > div.service-area").text().trim()
        if (servicing && service_area) {
          servicing = servicing + ', ' + service_area
        } else if (servicing && !service_area) {
          servicing = servicing
        } else {
          servicing = service_area
        }

        // grabbing the address
        var addr = $(this).find("address")[0]
        if (addr) {
          addr = $(this).find("address")[0].innerText
        } else {
          addr = ''
        }

        // grabbing the phone
        var phone = $(this).find("span.biz-phone")[0]
        if (phone) {
          phone = $(this).find("span.biz-phone")[0].innerText
        } else {
          phone = ''
        }

        var scraped_obj = {
            company_name : $(this).find("a.biz-name").text(),
            rating: $(this).find("div.i-stars").attr('title'),
            service_area: servicing,
            address : addr,
            phone: phone,
            yelp_profile_url : "https://yelp.ca" + $(this).find("a.biz-name").attr('href')
        }
        results.push(scraped_obj);
    });

    var final_results = []
    results.forEach((function(r) {
      var exists = false
      final_results.forEach((function(f) {
        if (f.yelp_profile_url === r.yelp_profile_url) {
          exists = true
        }
      }))
      if (!exists) {
        final_results.push(r)
      }
    }))
    return final_results;
}
