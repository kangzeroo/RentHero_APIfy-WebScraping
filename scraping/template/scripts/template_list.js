
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
