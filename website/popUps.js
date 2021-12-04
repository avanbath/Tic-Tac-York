function createPopUp(button) {
    $("#headers").css("display", "none");
    $("form").css("display", "none");
    $("footer").css("display", "none");

    
    var newDiv = document.createElement("div");
    $("body").append(newDiv);
    $(newDiv).attr("id", "popUp");
    $("#popUp").css("visibility", "visible");
    $("#popUp").css("display", "inline-block");
    $("#popUp").css("color", "black");
    $("#popUp").css("background-color", "white");
    $("#popUp").css("width", "20em");
    $("#popUp").css("margin-top", "20vh");
    $("#popUp").css("margin-bottom", "20vh");
    $("#popUp").css("border", "5px solid black");

    var newHeader = document.createElement("h3");
    $(newDiv).append(newHeader);
    $(newHeader).css("background-color", "grey");
    $(newHeader).css("height", "30px");
    $(newHeader).css("font-size", "25px");
    $(newHeader).css("font-weight", "bold");
    $(newHeader).css("margin", "0");
    $(newHeader).css("padding", "5px");
    $(newHeader).css("border-bottom", "3px solid black");

    var newList = document.createElement("ul");
    $(newDiv).append(newList);
    $(newList).css("margin-top", "0");
    $(newList).css("margin-bottom", "0");
    $(newList).css("margin-left", "20px");
    $(newList).css("padding", "20px");
    $(newList).css("text-align", "left");

    if (button == "how") {
        $(newHeader).text("How to Play")

        var point1 = document.createElement("li");
        $(newList).append(point1);
        var point2 = document.createElement("li");
        $(newList).append(point2);
        var point3 = document.createElement("li");
        $(newList).append(point3);
        var point4 = document.createElement("li");
        $(newList).append(point4);
        $(point1).css("margin-bottom", "5px");
        $(point2).css("margin-bottom", "5px");
        $(point3).css("margin-bottom", "5px");
        $(point4).css("margin-bottom", "5px");
        $(point1).text("If you are first, click the blank box you would like to place your mark/symbol in.");
        $(point2).text("If you are second, wait for your opponent, then make your move.");
        $(point3).text("Both players (or player and computer) will continue making moves until the win condition is reached.");
        $(point4).html("<b>Win Condition:</b> Match 3 of your marks/symbols in a row, either vertically, horizontally, or diagonally.");
    }
    else if (button == "tips") {
        $(newHeader).text("Tips & Tricks")

        var point1 = document.createElement("li");
        $(newList).append(point1);
        var point2 = document.createElement("li");
        $(newList).append(point2);
        var point3 = document.createElement("li");
        $(newList).append(point3);
        $(point1).css("margin-bottom", "5px");
        $(point2).css("margin-bottom", "5px");
        $(point3).css("margin-bottom", "5px");
        $(point1).text("Always place your first symbol in the center or corner! Your first symbol is crucial to winning, so putting it in the right spot will give you a competitive edge.");
        $(point2).text("Going second may make it tougher to win! Try to capitalize on your opponent's mistakes.");
        $(point3).text("Look for moves that can give you a win in 2 ways. That way, your opponent is less likely to take your victory.");
    }
        
    var newButton = document.createElement("button");
    $(newDiv).append(newButton);
    $(newButton).attr("id", "ok");
    $(newButton).attr("onclick", "closePopUp()");
    $("#ok").css("width", "100px");
    $("#ok").css("margin-bottom", "10px");
    $(newButton).text("OK");
}


function closePopUp() {
    $("#headers").css("display", "block");
    $("form").css("display", "block");
    $("footer").css("display", "block");

    $("#popUp").remove();
}
