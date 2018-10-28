

// ----------------- INTRO MESSAGE -----------------
// what this is:
// why we made it:
// who we are:
// what to expect at the end:


// ----------------- INTERNAL REVIEWS SENTIMENT -----------------
// Polar Area Chart
// http://www.chartjs.org/samples/latest/charts/polar-area.html
// Graphic segments are individual reviews, ordered clockwise by sentiment color (no time dimension)
// Color is on a red to green scale, based on the sentiment score from -1 to 1 (angry to happy)
// Magnitude is the height from the segment from center of graph
// SUMMARY: Your brand perception online is mostly _________ (good vs bad)
// ACTIONABLE: Adding ____ X more positive reviews on __________ (google vs yelp) would change your score to _____
// INTEL: In your opinion, what does your company pride itself most on? (dropdown menu)
// NEXT-HOOK: Click next to see how your companys online reviews perform over time
//            - In order to see the next graph, answer the previous INTEL question, and this next one:
//            INTEL: Rank which of these you spend the most time on? (dropdown: marketing to new tenants, marketing to new landlords, qualifying renters, conducting tours, admin, serving existing tenants)
//                   Which of these do you spend the most money on? (dropdown: marketing to new tenants, marketing to new landlords, qualifying renters, conducting tours, admin, serving existing tenants)
//            Disclaimer: This data will never be shared
// RE-HOOK: Or click here to see how you compare against ______, ______ and 520 other property management companies in Toronto?


// ----------------- INTERNAL REVIEWS SENTIMENT OVER TIME -----------------
// Stacked Bar Graph
// http://www.chartjs.org/samples/latest/charts/bar/stacked.html
// X-axis is month by month
// Y-axis are review segments stacked by the same month
// Y-axis segment height is the magnitude of the sentiment
// Y-axis cumulative height in a given month is the aggregate of review magnitudes
// Color is on a red to green scale, based on the sentiment score from -1 to 1 (angry to happy)
// SUMMARY: In the public's eyes, your best year was _____.
//          Your worst review was _____ months ago complaining about _______.
//          ___% of all reviews mentioning that topic were negative.
// ACTIONABLE: Adding ____ X more positive reviews about this topic will reduce the ratio of negative ones down to ___%
// INTEL: Rank where do you think your company's brand reputation is most at risk (dropdown: qualifying potential renters, serving existing renters, landlord admin stuff, )
// RE-HOOK: Or click here to see how you compare against ______, ______ and 520 other property management companies in Toronto?
//           - In order to see the comparison report, answer the previous INTEL question, and this next one:
//           INTEL:
//           Disclaimer:


// ----------------- COMPETITIVE REVIEWS SENTIMENT OVER TIME -----------------
// Stacked Area Graph
// http://www.chartjs.org/samples/latest/charts/area/line-stacked.html
// X-axis is month by month
// Y-axis is the cumulative reviews each month aggregated by net sentiment x magnitude
// y-axis has multiple datasets that represent a different company each
// thus this graph hides info about specific reviews, but shows the aggregate result compared across competitors


//
// Pie Graph
// http://www.chartjs.org/samples/latest/charts/pie.html
// Compare with competitors what % of bad reviews are from you versus others (same with good reviews and total reviews)
// Maybe adjust this Pie Graph to have slices morphed by sentiment magnitude. That way very angry reviews have a larger portion of the pie
