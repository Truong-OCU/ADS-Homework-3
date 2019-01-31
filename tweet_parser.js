// Homework 3 Part A written by Diane Truong
fs = require('fs');
fs.readFile('tweet.json', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    var dt = JSON.parse(data);

    // Creation of the tweet
    console.log("Date:\t" + dt.created_at);
    // User that created the tweet
    console.log("User:\t" + dt.user.name);
    // Text that the user tweeted
    console.log("Text:\t" + dt.text);
    // Screen name of user
    console.log("Screen Name:\t" + dt.user.screen_name);
    // Hastags that user used in tweet
    for (x in dt.entities.hashtags) {
        if (dt.entities.hashtags[x] != null) {
            var out = dt.entities.hashtags[x].text;
            console.log("Hashtags:\t" + out);
        }
    }

});