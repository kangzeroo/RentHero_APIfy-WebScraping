function pageFunction(context) {
    // called on every page the crawler visits, use it to extract data from it
    var $ = context.jQuery;
    var MOMENT_JS = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.js'

    $.when(
        $.getScript(MOMENT_JS),
        // put more libraries here
        $.Deferred(function( deferred ){
            $( deferred.resolve );
        })
    ).done(function(){
        //place your code here, the scripts are all loaded
        extractData();
    });

    var extractData = function() {
      var hiddenElement = $('div[itemtype="http://schema.org/LocalBusiness"]');

      var result = {
          name: $(hiddenElement).find('meta[itemprop="name"]').attr('content'),
          ratingValue: $(hiddenElement).find('meta[itemprop="ratingValue"]').attr('content'),
          reviewCount: $(hiddenElement).find('span[itemprop="reviewCount"]').text().trim(),
          priceRange: $(hiddenElement).find('meta[itemprop="priceRange"]').attr('content'),
          streetAddress: $(hiddenElement).find('span[itemprop="streetAddress"]').text().trim(),
          addressLocality: $(hiddenElement).find('span[itemprop="addressLocality"]').text().trim(),
          addressRegion: $(hiddenElement).find('span[itemprop="addressRegion"]').text().trim(),
          postalCode: $(hiddenElement).find('span[itemprop="postalCode"]').text().trim(),
          addressCountry: $(hiddenElement).find('meta[itemprop="addressCountry"]').attr('content'),
          telephone: $(hiddenElement).find('span[itemprop="telephone"]').text().trim(),
          website: $('.mapbox-text .biz-website a').text().trim(),
          hours: [],
          reviews: [],
          images: [],
          description: ''
      };

      result.description = $(".from-biz-owner-content").text().trim() || ''

      $('.hours-table tr').each(function(){
          result.hours.push($(this).find('th').text() + " " + $(this).find('td:eq(0)').text().trim());
      });

      $('.reviews .review').each(function(){
          if ($(this).find('.user-display-name').text() !== "") {
              result.reviews.push({
                  name: $(this).find('.user-display-name').text().trim(),
                  date: $(this).find('.review-content .rating-qualifier').text().trim(),
                  rating: $(this).find('.review-content .rating-very-large meta[itemprop="ratingValue"]').attr('content'),
                  text: $(this).find('.review-content p').text().trim()
              });
          }
      });

      var photos = []
      $("div.showcase-photos img.photo-box-img").each(function(i){
        photos.push($(this).attr("src"))
      })
      if (photos && photos.length > 0) {
        result.images = photos
      }

      context.finish(result)
    }

    context.willFinishLater();
}
