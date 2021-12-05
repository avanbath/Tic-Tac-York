/*
    EECS1012 Section A Lab 03 - Term Project
    Team Name: Code Stars
    Team Members: Avaninder Bath, Justin Blasetti
    Project Title: Tic-Tac-York

    Client Side JS - Game Board Page (Player VS Computer & Player VS Player)
*/

// URL for the server side JS reference at port 3000
var url = "http://localhost:3000/post";

var mode = sessionStorage.getItem("gamemode");
var startTime = new Date();
var turn = 1;
var movesMade = [];
var movesMadeEach = [];
var p1Name = "";
var p2Name = "";
// Initialize the player marks as the default/customized marks for the game
var player1Mark = "../images/mark" + sessionStorage.getItem("lastP1Mark") + ".png";
var player2Mark = "../images/mark" + sessionStorage.getItem("lastP2Mark") + ".png";

// When the page is loaded, create the game board, and start a seconds timer
window.onload = function() {
    if (mode == "PVC") {
        p1Name = prompt("Please enter your name: ", "");
        p2Name = "Computer";
    }
    else if (mode == "PVP") {
        p1Name = prompt("Please enter Player 1's name: ", "");
        p2Name = prompt("Please enter Player 2's name: ", "");
    }

    // Set the timer and add it to the display
    setInterval(function() {
        var newLabel = document.createElement("h3");
        $(newLabel).text(parseInt((new Date() - startTime) / 1000) + " s");
        $(newLabel).css("font-weight", "normal");
        $("#timeslot").html(newLabel);
    }, 1000);

    // Set the appropriate player images on the display
    $("#p1Name").text(p1Name);
    $("#img1").attr("src", player1Mark);
    $("#p2Name").text(p2Name);
    $("#img2").attr("src", player2Mark);

    // Start the initial turn calculation and game board creation
    showTurn();
    initBoard();
}

// Create the game board display and functionality
function initBoard() {
    // Initialize a counter (for use in tile IDs)
    var counter = 0;

    // Nested loops to create a game board of 9 tiles (3x3 grid)
    for (var i = 1; i <= 3; i++) {
        for (var j = 0; j <= 2; j += 1) {
            counter += 1;

            // New element to create each tile as an input
            var newInput = document.createElement("input");

            // Set the type of the input element to an image
            $(newInput).attr("type", "image");
            $(newInput).attr("src", "../images/boardTile.png");
            $(newInput).attr("id", "space" + counter);

            // CSS styling for each tile is created
            $(newInput).css("background-color", "lightgrey");
            $(newInput).css("height", "150px");
            $(newInput).css("width", "150px");
            $(newInput).css("margin-bottom", "-5px");

            // Add each empty tile to the game board
            $("#gameBoard").append(newInput);

            // Set an onclick attribute to the tiles, so when one is clicked, a mark will appear on top
            $("#space" + counter).click(function() {
                if (mode == "PVC") {
                    if (turn == 1) {
                        // Change the image source to show the respective mark in place of the tile for player 1
                        $(this).attr("src", player1Mark);
    
                        // Appends the move to the list of all moves made, so no illegal moves can occur
                        $(this).prop("disabled", true);
                        movesMade.push($(this).attr("id"));
                        movesMadeEach.push($(this).attr("id") + "1");
                        $("input").prop("disabled", true);
                        $(this).attr("class", "playerMark1");
    
                        // Process the attempt through the server and run the computer's behaviour
                        processAttempt();
                        cpuMove();
                    }

                    showTurn();
                }
                else if (mode == "PVP") {
                    if (turn == 1) {
                        // Change the image source to show the respective mark in place of the tile for player 1
                        $(this).attr("src", player1Mark);
    
                        // Appends the move to the list of all moves made, so no illegal moves can occur
                        $(this).prop("disabled", true);
                        movesMade.push($(this).attr("id"));
                        movesMadeEach.push($(this).attr("id") + "1");
                        $(this).attr("class", "playerMark1");
    
                        // Set the turn to the opposite player and process the attempt through the server
                        turn = 2;
                        processAttempt();
                    }
                    else {
                        // Change the image source to show the respective mark in place of the tile for player 1
                        $(this).attr("src", player2Mark);
    
                        // Appends the move to the list of all moves made, so no illegal moves can occur
                        $(this).prop("disabled", true);
                        movesMade.push($(this).attr("id"));
                        movesMadeEach.push($(this).attr("id") + "2");
                        $(this).attr("class", "playerMark2");
    
                        // Set the turn to the opposite player and process the attempt through the server
                        turn = 1;
                        processAttempt();                        
                    }

                    showTurn();
                }
            });
        }
        
        // Add a line break after each row to format the game board display
        $("#gameBoard").append("<br>");
    }

    // Build JSON data to send to the server side
    $.post(url + '?data=' + JSON.stringify({
        "name1": p1Name,
        "name2": p2Name,
        "mark1": player1Mark,
        "mark2": player2Mark,
    }), response);
}

// Display which player's turn it is when called, based on the variable turn
function showTurn() {
    if (turn == 1) {
        $("#turn").text(p1Name + "'s Turn");
    }
    else {
        $("#turn").text(p2Name + "'s Turn");
    }
}

// Create the ID of the tile/space the computer will change (for PVC only), and add that ID to the list of all moves made, then display the move before setting variable turn back to 1 for the player to proceed
function cpuMove(){
    turn = 2;
    showTurn();

    // Sets a short delay after the player finishes their move for the CPU to behave like it "thinks" about its next move (realistic effect)
    window.setTimeout(function() {
        if (movesMade.length < 9) {
            var cpuMove = Math.floor(Math.random() * 9) + 1;

            while (jQuery.inArray("space" + cpuMove, movesMade) != -1) {
                cpuMove = Math.floor(Math.random() * 9) + 1;
            }

            $("#space" + cpuMove).attr("src", player2Mark);
            movesMade.push("space" + cpuMove);
            movesMadeEach.push("space" + cpuMove + "2");
            $("input").prop("disabled", false);
            $("#space" + cpuMove).prop("disabled", true);
            processAttempt()
        }

        turn = 1;
        showTurn();
    }, 2000);
}

// Build JSON data to send to the server side (including the moves made and calculation to perform)
function processAttempt(){
    $.post(url + '?data=' + JSON.stringify ({
            "name1": p1Name, 
            "name2": p2Name,
            "mark1": player1Mark,
            "mark2": player2Mark,
            "moves": movesMade,
            "movesEach": movesMadeEach,
            "action": 'evaluate',
            "howMany": movesMade.length
        }), response);
}

// Recieve response data from the server side to calculate the current game condition
function response(data, status){
    var response = JSON.parse(data);
    console.log(data);

    // If the response data includes the action to evaluate, then check all possible game conditions
    if (response["action"] == "evaluate") {
        var win = response["win"];
        var player1Won = response["player1"]
        var player2Won = response["player2"]
        var tie = response["tie"];

        // If the game is won, check who won, then set the names of the winner/loser appropriately
        if (win == true) {
            if (player1Won == true) {
                sessionStorage.setItem("winner", "Player 1");
                sessionStorage.setItem("winName", p1Name);
                sessionStorage.setItem("loseName", p2Name);
            }
            else if (player2Won == true) {
                sessionStorage.setItem("winner", "Player 2");
                sessionStorage.setItem("winName", p2Name);
                sessionStorage.setItem("loseName", p1Name);
            }
            
            // Save the time elapsed before moving on to the game over page
            sessionStorage.setItem("timer", $("#timeslot").text());
            window.location.href = "../gameOver/end.html";
        }
        // Otheriwse, if the game is tied, set the names of both players as placeholders appropriately
        else if (tie == true) {
            sessionStorage.setItem("winner", "none");
            sessionStorage.setItem("winName", p1Name);
            sessionStorage.setItem("loseName", p2Name);
            // Save the time elapsed before moving on to the game over page
            sessionStorage.setItem("timer", $("#timeslot").text());
            window.location.href = "../gameOver/end.html";
        }
    }
}
