const request = require("request");
const cheerio = require("cheerio");

const fetchData = async () => {
  try {
    for (let i = 0; i < 3; i++) {
      const URL = `https://www.snapdeal.com/search?keyword=tshirts&santizedKeyword=&catId=&categoryId=0&suggested=false&vertical=&noOfResults=20&searchState=&clickSrc=go_header&lastKeyword=&prodCatId=&changeBackToAll=false&foundInAll=false&categoryIdSearched=&cityPageUrl=&categoryUrl=&url=&utmContent=&dealDetail=&sort=rlvncy`;

      request(URL, (err, res, body) => {
        if (err) {
          console.log(err);
        } else {
          let $ = cheerio.load(body);

          $("div.col-xs-6.favDp.product-tuple-listing.js-tuple").each(
            (index, link) => {
              const name = $(link)
                .find(
                  "div.product-tuple-description > div.product-desc-rating > a > p"
                )
                .text();
              const priceBefore = $(link)
                .find(
                  "div.product-tuple-description > div.product-desc-rating > a > div.product-price-row.clearfix > div.lfloat.marR10 > span.lfloat.product-desc-price.strike"
                )
                .text();
              const discount = $(link)
                .find(
                  "div.product-tuple-description > div.product-desc-rating > a > div.product-price-row.clearfix > div.product-discount > span"
                )
                .text();
              const priceAfter = $(link)
                .find(
                  "div.product-tuple-description > div.product-desc-rating > a > div.product-price-row.clearfix > div.lfloat.marR10 > span.lfloat.product-price"
                )
                .text();
              const rating = $(link)
                .find(
                  "div.product-tuple-description > div.product-desc-rating > a > div.clearfix.rating.av-rating > p"
                )
                .text();
              const availableSize = $(link)
                .find(
                  "div.product-tuple-description > div.product-hover-state > a > div > div.tuple-subattribute > span.sub-attr-value"
                )
                .text().trim();

              console.log(` ${index}`);
              console.log("name ", name);
              console.log("priceBefore ", priceBefore);
              console.log("discount ", discount);
              console.log("priceAfter ", priceAfter);
              console.log("rating ", rating);
              console.log("availableSize ", availableSize);
              console.log();
            }
          );
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
};
fetchData();
