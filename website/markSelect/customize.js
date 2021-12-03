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
    $("#img" + player).attr("src", "../images/mark" + mark + ".png");

    // Add a server side solution to save the selected mark.
}
