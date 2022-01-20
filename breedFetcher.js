// we need to update of eslintrc.js
const request = require('request');
const fetchBreedDescription = (breedName, callback) => {
  request(
    'https://api.thecatapi.com/v1/breeds/search?q=' + breedName,
    (err, response, body) => {
      // if no ERRORS
      if (!err) {
        let result = JSON.parse(body);

        // if results EMPTY
        if (result.length === 0) {
          return callback('error: breed not found', null);
          // if results found
        }

        // https://api.thecatapi.com/v1/breeds/search?q=Chartreux
        // [{weight: {}, id: 'id'....... description: ''}]
        return callback(err, result[0].description);
      }
      // if ERROR
      return callback(err, 'you are error');
    }
  );
};
module.exports = { fetchBreedDescription };
