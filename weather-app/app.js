const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1%20infinite%20loop',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(response, undefined, 2));
  console.log(JSON.stringify(body, undefined, 2));
  console.log(JSON.stringify(error, undefined, 2));
});