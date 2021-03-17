const request = require("request");
const cheerio = require("cheerio");
const URL =
  "https://www.flipkart.com/search?q=mobiles&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off";

request(URL, function (err, res, body) {
  if (err) {
    console.log(err);
  } else {
    let $ = cheerio.load(body);

    $("div._1AtVbE.col-12-12>div._13oc-S>div>div._2kHMtA>a._1fQZEK").each(
      (index, data) => {
        const price = $(data)
          .find(
            "div._3pLy-c.row>div.col.col-5-12.nlI3QM>div._3tbKJL>div._25b18c>div._30jeq3._1_WHN1"
          )
          .text();
        const name = $(data)
          .find("div._3pLy-c.row > div.col.col-7-12 > div._4rR01T")
          .text();
        const memory = $(data)
          .find(
            "div._3pLy-c.row > div.col.col-7-12 > div.fMghEO > ul > li:nth-child(1)"
          )
          .text();
        const screen = $(data)
          .find(
            "div._3pLy-c.row > div.col.col-7-12 > div.fMghEO > ul > li:nth-child(2)"
          )
          .text();
        const camera = $(data)
          .find(
            "div._3pLy-c.row > div.col.col-7-12 > div.fMghEO > ul > li:nth-child(3)"
          )
          .text();
        const battery = $(data)
          .find(
            "div._3pLy-c.row > div.col.col-7-12 > div.fMghEO > ul > li:nth-child(4)"
          )
          .text();
        console.log();
        console.log("name ", name);
        console.log("price ", price);
        console.log("memory ", memory);
        console.log("screen ", screen);
        console.log("camera ", camera);
        console.log("battery ", battery);
      }
    );
  }
});
