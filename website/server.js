/*
    EECS1012 Section A Lab 03 - Term Project
    Team Name: Code Stars
    Team Members: Avaninder Bath, Justin Blasetti
    Project Title: Tic-Tac-York

    Server Side JS - Core Game Logic
*/

// Server terminal output
console.log("Node.js/express server has successfully started! \n");

var express = require('express');
var app = express();

app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    // Request client side data and parse for usage
    var gameBoardData = JSON.parse(req.query['data']);

    console.log("SERVER EVALUATION REQUEST: ");
    console.log(gameBoardData);
    console.log("\n");


    if (gameBoardData['action'] == 'evaluate') {
        // Initialize all possible game conditions to false
        var win = false;
        var play1Win = false;
        var play2Win = false;
        var tieGame = false;

        // Beging checking if player 1 has won:
        // Check if player 1 has won in any horizontal row
        if ((gameBoardData['moves'].includes("space1") && gameBoardData['moves'].includes("space2") && gameBoardData['moves'].includes("space3")) && gameBoardData['movesEach'].includes("space11") && gameBoardData['movesEach'].includes("space21") && gameBoardData['movesEach'].includes("space31") == true) {
            win = true;
            play1Win = true;
        }
        else if ((gameBoardData['moves'].includes("space4") && gameBoardData['moves'].includes("space5") && gameBoardData['moves'].includes("space6")) && gameBoardData['movesEach'].includes("space41") && gameBoardData['movesEach'].includes("space51") && gameBoardData['movesEach'].includes("space61") == true) {
            win = true;
            play1Win = true;
        }
        else if ((gameBoardData['moves'].includes("space7") && gameBoardData['moves'].includes("space8") && gameBoardData['moves'].includes("space9")) && gameBoardData['movesEach'].includes("space71") && gameBoardData['movesEach'].includes("space81") && gameBoardData['movesEach'].includes("space91") == true) {
            win = true;
            play1Win = true;
        }
        // Check if player 1 has won in any vertical column
        else if ((gameBoardData['moves'].includes("space1") && gameBoardData['moves'].includes("space4") && gameBoardData['moves'].includes("space7")) && gameBoardData['movesEach'].includes("space11") && gameBoardData['movesEach'].includes("space41") && gameBoardData['movesEach'].includes("space71") == true) {
            win = true;
            play1Win = true;
        }
        else if ((gameBoardData['moves'].includes("space2") && gameBoardData['moves'].includes("space5") && gameBoardData['moves'].includes("space8")) && gameBoardData['movesEach'].includes("space21") && gameBoardData['movesEach'].includes("space51") && gameBoardData['movesEach'].includes("space81") == true) {
            win = true;
            play1Win = true;
        }
        else if ((gameBoardData['moves'].includes("space3") && gameBoardData['moves'].includes("space6") && gameBoardData['moves'].includes("space9")) && gameBoardData['movesEach'].includes("space31") && gameBoardData['movesEach'].includes("space61") && gameBoardData['movesEach'].includes("space91") == true) {
            win = true;
            play1Win = true;
        }
        // Check if player 1 has won in any diagonal direction
        else if ((gameBoardData['moves'].includes("space1") && gameBoardData['moves'].includes("space5") && gameBoardData['moves'].includes("space9")) && gameBoardData['movesEach'].includes("space11") && gameBoardData['movesEach'].includes("space51") && gameBoardData['movesEach'].includes("space91") == true) {
            win = true;
            play1Win = true;
        }
        else if ((gameBoardData['moves'].includes("space3") && gameBoardData['moves'].includes("space5") && gameBoardData['moves'].includes("space7")) && gameBoardData['movesEach'].includes("space31") && gameBoardData['movesEach'].includes("space51") && gameBoardData['movesEach'].includes("space71") == true) {
            win = true;
            play1Win = true;
        }

        // Begin checking if player 2 has won:
        // Check if player 2 has won in any horizontal row
        else if ((gameBoardData['moves'].includes("space1") && gameBoardData['moves'].includes("space2") && gameBoardData['moves'].includes("space3")) && gameBoardData['movesEach'].includes("space12") && gameBoardData['movesEach'].includes("space22") && gameBoardData['movesEach'].includes("space32") == true) {
            win = true;
            play2Win = true;
        }
        else if ((gameBoardData['moves'].includes("space4") && gameBoardData['moves'].includes("space5") && gameBoardData['moves'].includes("space6")) && gameBoardData['movesEach'].includes("space42") && gameBoardData['movesEach'].includes("space52") && gameBoardData['movesEach'].includes("space62") == true) {
            win = true;
            play2Win = true;
        }
        else if ((gameBoardData['moves'].includes("space7") && gameBoardData['moves'].includes("space8") && gameBoardData['moves'].includes("space9")) && gameBoardData['movesEach'].includes("space72") && gameBoardData['movesEach'].includes("space82") && gameBoardData['movesEach'].includes("space92") == true) {
            win = true;
            play2Win = true;
        }
        // Check if player 2 has won in any vertical column
        else if ((gameBoardData['moves'].includes("space1") && gameBoardData['moves'].includes("space4") && gameBoardData['moves'].includes("space7")) && gameBoardData['movesEach'].includes("space12") && gameBoardData['movesEach'].includes("space42") && gameBoardData['movesEach'].includes("space72") == true) {
            win = true;
            play2Win = true;
        }
        else if ((gameBoardData['moves'].includes("space2") && gameBoardData['moves'].includes("space5") && gameBoardData['moves'].includes("space8")) && gameBoardData['movesEach'].includes("space22") && gameBoardData['movesEach'].includes("space52") && gameBoardData['movesEach'].includes("space82") == true) {
            win = true;
            play2Win = true;
        }
        else if ((gameBoardData['moves'].includes("space3") && gameBoardData['moves'].includes("space6") && gameBoardData['moves'].includes("space9")) && gameBoardData['movesEach'].includes("space32") && gameBoardData['movesEach'].includes("space62") && gameBoardData['movesEach'].includes("space92") == true) {
            win = true;
            play2Win = true;
        }
        // Check if player 2 has won in any diagonal direction
        else if ((gameBoardData['moves'].includes("space1") && gameBoardData['moves'].includes("space5") && gameBoardData['moves'].includes("space9")) && gameBoardData['movesEach'].includes("space12") && gameBoardData['movesEach'].includes("space52") && gameBoardData['movesEach'].includes("space92") == true) {
            win = true;
            play2Win = true;
        }
        else if ((gameBoardData['moves'].includes("space3") && gameBoardData['moves'].includes("space5") && gameBoardData['moves'].includes("space7")) && gameBoardData['movesEach'].includes("space32") && gameBoardData['movesEach'].includes("space52") && gameBoardData['movesEach'].includes("space72") == true) {
            win = true;
            play2Win = true;
        }

        // After all conditions, if variable win was never updated to be true (no one won the game) and all possible moves have been made, then tie the game
        else if(gameBoardData['howMany'] == 9){
            tieGame = true;
        }

        // Build a response to send to the client side
        var jsontext = JSON.stringify({
            'win' : win,
            'action' : 'evaluate',
            'player1': play1Win,
            'player2': play2Win,
            'tie': tieGame,
        });

        // Server terminal output
        console.log("SERVER EVALUATION RESPONSE: ");
        console.log(jsontext);
        console.log("\n");

        // Send the response to the client side
        res.send(jsontext);
    }
}).listen(3000);
