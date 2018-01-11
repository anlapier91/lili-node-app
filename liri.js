var keys = require('./keys.js')
var Twitter = require('twitter');
var request = require('request');
var Spotify = require('node-spotify-api');
var fs = require('fs');

var twitterKeys = keys.twitterKeys
var spotifyKeys = keys.spotifyKeys


var userEntry1 = process.argv[2];
var userEntry2 = process.argv[3];
var userEntry3 = process.argv[4];

 if (userEntry1 == 'my-tweets'){
  twitter();
 };



if (userEntry1 == 'spotify-this-song'){
	spotify(userEntry3);
};



// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });



function twitter(){
 
var client = new Twitter(twitterKeys);
 
var params = {screen_name: 'SonamiGames'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }

  else{

    console.log(error)
  }
});
};




function spotify(song){

	

var	client = new Spotify({
		id: '183064ae7cc8465292741310b955dbe1',
		secret: '4afb2cefdc6a41628a1e250b177495ee'
	});


client
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  })


 

};

// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
// });
 


// Create two more sets of variables for omdb and do what it says.
// Add at least two more process.argv for additional inputs.
// Create similar function to above for omdb and do what it says.
// Figure out a way to parse the information displayed by both the working and future implemented
// functions to display limited information instead of the entirety of the html code in node log