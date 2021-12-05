/*
    EECS1012 Section A Lab 03 - Term Project
    Team Name: Code Stars
    Team Members: Avaninder Bath, Justin Blasetti
    Project Title: Tic-Tac-York

    Client Side JS - Game Over Page
*/

// When the page loads, set and display the appropriate game condition message and marks/images
window.onload = function() {
    // An image element is initialized to be added to the condition display
    var winDisplay = document.createElement("img");

    // If player 1 is the winner, then the victory message/image is for player 1
    if (sessionStorage.getItem("winner") == "Player 1") {
        $(winDisplay).attr("src", "../images/mark" + sessionStorage.getItem("lastP1Mark") + ".png");
        $("#description").text(sessionStorage.getItem("winName") + " wins against " + sessionStorage.getItem("loseName") + "!");
    }
    // If player 2 is the winner, then the victory message/image is for player 2
    else if (sessionStorage.getItem("winner") == "Player 2") {
        $(winDisplay).attr("src", "../images/mark" + sessionStorage.getItem("lastP2Mark") + ".png");
        $("#description").text(sessionStorage.getItem("winName") + " wins against " + sessionStorage.getItem("loseName") + "!");
    }
    // If no one wins, then the victroy message/image is for a tie game
    else if (sessionStorage.getItem("winner") == "none") {
        $(winDisplay).attr("src", "../images/tied.png");
        $("#description").text(sessionStorage.getItem("winName") + " has tied with " + sessionStorage.getItem("loseName") + "!");

        // Hide the trophies if there is a tie
        $("#trophy1").css("visibility", "hidden");
        $("#trophy2").css("visibility", "hidden");
    }

    // Set the main image CSS properties and add the main image to the display
    $(winDisplay).css("height", "200px");
    $(winDisplay).css("width", "200px");
    $("#showcase").append(winDisplay);

    // Carry over the time elapsed from the game board page and add it to the display
    var timeDisplay = document.createElement("p");
    $(timeDisplay).css("font-weight", "normal");
    $(timeDisplay).text(sessionStorage.getItem("timer"));
    $("h3").append(timeDisplay);
}