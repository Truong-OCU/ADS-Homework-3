// Homework 3 Part B written by Diane Truong
var code, win, draw, loss;

fs = require('fs');
fs.readFile('wcup.json', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var dt = JSON.parse(data);
    
    allTeams(dt);
    noWins(dt);
    lostAll(dt);


});

function allTeams(dt) {
    console.log("\nAll teams in FIFA:");
    for (var i in dt) {
        code = dt[i].fifa_code;
        win = dt[i].wins;
        draw = dt[i].draws;
        loss = dt[i].losses;
        console.log("Fifa Code: " + code + " Wins: " + win + " Draws: " + draw + " Loss: " + loss);
    }
}

function noWins(dt) {
    console.log("\nTeams that had no wins:");
    for (var i in dt) {
        code = dt[i].fifa_code;
        win = dt[i].wins;
        draw = dt[i].draws;
        loss = dt[i].losses;
        if (win == 0) {
            console.log("Fifa Code: " + code + " Wins: " + win + " Draws: " + draw + " Loss: " + loss);
        }
    }
}

function lostAll(dt) {
    console.log("\nTeams that lost all games:");
    for (var i in dt) {
        code = dt[i].fifa_code;
        win = dt[i].wins;
        draw = dt[i].draws;
        loss = dt[i].losses;
        if (win == 0 && draw == 0) {
            console.log("Fifa Code: " + code + " Wins: " + win + " Draws: " + draw + " Loss: " + loss);
        }
    }
}