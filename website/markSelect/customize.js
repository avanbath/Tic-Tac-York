window.onload = function() {
    for (var i = 1; i <= 5; i++) {
        var newRow1 = document.createElement("tr");
        var newOption1 = document.createElement("td");
        $(newOption1).attr("onclick", "setMark(" + i + ", " + 1 + ")");
        $(newOption1).text("Mark " + i);
        $(newRow1).append(newOption1);
        $("#table1").append(newRow1);

        var newRow2 = document.createElement("tr");
        var newOption2 = document.createElement("td");
        $(newOption2).attr("onclick", "setMark(" + i + ", " + 2 + ")");
        $(newOption2).text("Mark " + i);
        $(newRow2).append(newOption2);
        $("#table2").append(newRow2);

        // If a mark had been selected on a previous page load, then make the program disregard this.
        setMark(1, 1);
        setMark(2, 2);
    }
}

function setMark(mark, player) {
    var p1Mark = $("#img1")[0].getAttribute("src");
    var p2Mark = $("#img2")[0].getAttribute("src");
    var newMark = "../images/mark" + mark + ".png";

    if (player == 1) {
        if (newMark == p2Mark) {
            alert("Mark " + mark + " is already in use by Player 2 / Computer. Please choose another mark.");
        }
        else {
            $("#p1Mark").text("Mark " + mark);
            $("#img1").attr("src", newMark);
        }
    }
    else if (player == 2) {
        if (newMark == p1Mark) {
            alert("Mark " + mark + " is already in use by Player 1. Please choose another mark.");
        }
        else {
            $("#p2Mark").text("Mark " + mark);
            $("#img2").attr("src", newMark);
        }
    }

    // Add server side solution to save selected mark.
}
