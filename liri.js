// config 
require("dotenv").config();

var keys = require("keys.js");
var first = process.argv[2];
var second = process.argv[3];

// twitter API
var Twitter = require('twitter');
// var client = new Twitter(keys.twitter);


var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

if (first === "my-tweets") {
    var params = { screen_name: 'DanBarthell' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });
}

// spotify API
var Spotify = require('node-spotify-api');
// var spotify = new Spotify(keys.spotify);

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

if (first === "spotify-this-song") {
    spotify.search({ type: 'track', query: second }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });
}