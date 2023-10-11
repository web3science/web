const scrape = require('website-scraper');

let options = {
    urls: ['https://nfi.softr.app/'],
    directory: './softr-scrape',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});
