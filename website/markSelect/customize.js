/*
    EECS1012 Section A Lab 03 - Term Project
    Team Name: Code Stars
    Team Members: Avaninder Bath, Justin Blasetti
    Project Title: Tic-Tac-York

    Client Side JS - Mark Customization Page
*/

// When the page loads, create and display all mark options depending on the times the loop iterates
window.onload = function() {
    for (var i = 1; i <= 8; i++) {
        // Build each row for Player 1's options
        var newRow1 = document.createElement("tr");
        var newOption1 = document.createElement("td");
        $(newOption1).attr("onclick", "setMark(" + i + ", " + 1 + ")");
        $(newOption1).text("Mark " + i);
        $(newRow1).append(newOption1);
        $("#table1").append(newRow1);

        // Build each row for Player 2 / Computer's options
        var newRow2 = document.createElement("tr");
        var newOption2 = document.createElement("td");
        $(newOption2).attr("onclick", "setMark(" + i + ", " + 2 + ")");
        $(newOption2).text("Mark " + i);
        $(newRow2).append(newOption2);
        $("#table2").append(newRow2);
    }

    // If the default marks have been changed previously, then the new marks will be shown when initializing this page
    if (sessionStorage.getItem("flag") == "1") {
        setMark(parseInt(sessionStorage.getItem("lastP1Mark")), 1);
        setMark(parseInt(sessionStorage.getItem("lastP2Mark")), 2);
    }
    else {
        setMark(1, 1);
        setMark(2, 2);
    }
}


// Change the mark to the one desired by the user, depending on the mark number and player number
function setMark(mark, player) {
    sessionStorage.setItem("flag", "1");

    // Retrieve the image sources for the previous marks, if they exist
    var p1Mark = $("#img1")[0].getAttribute("src");
    var p2Mark = $("#img2")[0].getAttribute("src");
    // Initialize the new source image for mark which will replace the previous mark
    var newMark = "../images/mark" + mark + ".png";

    // If player 1 is changing their mark, the mark will be associated with player 1's identity
    if (player == 1) {
        if (newMark == p2Mark) {
            alert("Mark " + mark + " is already in use by Player 2 / Computer. Please choose another mark.");
        }
        else {
            $("#p1Mark").text("Mark " + mark);
            $("#img1").attr("src", newMark);

            sessionStorage.setItem("lastP1Mark", mark);
        }
    }
    // Otheriwse, if player 2 is changing their mark, the mark will be associated with player 2's identity
    else if (player == 2) {
        if (newMark == p1Mark) {
            alert("Mark " + mark + " is already in use by Player 1. Please choose another mark.");
        }
        else {
            $("#p2Mark").text("Mark " + mark);
            $("#img2").attr("src", newMark);

            sessionStorage.setItem("lastP2Mark", mark);
        }
    }
}
