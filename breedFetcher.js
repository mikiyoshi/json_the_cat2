// we need to update of eslintrc.js
let breed = process.argv[2];
// node breedFetcher.js Chartreux
// breed = Chartreux
// https://api.thecatapi.com/v1/breeds/search?q=Chartreux
const request = require('request');

let response = request(
  'https://api.thecatapi.com/v1/breeds/search?q=' + breed,
  (err, response, body) => {
    // if no ERRORS
    if (!err) {
      let result = JSON.parse(body);

      // if results EMPTY
      if (result.length === 0) {
        console.log('breed not found');
        return;
        // if results found
      }
      console.log(result[0].description);
      // https://api.thecatapi.com/v1/breeds/search?q=Chartreux
      // [{weight: {}, id: 'id'....... description: ''}]
      return;
    }
    // if ERROR
    console.log(err);
  }
);
