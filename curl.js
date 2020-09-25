const request = require('request');

// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

module.exports =function curl (link) {
  request (link, function(error, response, body) {
      console.error('error:', error); 
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    })
}