var start = new Date();

//when page is loaded, create gameboard and start and display a timer
window.onload= function()
{
    initializeBoard();
    setInterval(function() 
    {$("#timer").text(parseInt((new Date() - start) / 1000) + "s");}, 1000);
}


function initializeBoard() {
    // Initialize a counter (for use in ids)
    var counter=0;
    //loops to create a gameboard of 9 tiles
    for(var i = 1; i<=3; i+=1){
        $("#gameBoard").append("<br>")
        for(var j=0; j<=2; j+=1){
            counter+=1;
            //new var to create each button
            var newInput= document.createElement("input");
            //make each button an image
            $(newInput).attr("type","image");
            $(newInput).attr("src", "../images/boardTile.png" );
            //css styling for each button created
            $(newInput).attr("id","space"+counter);
            $(newInput).css("margin", "5px");
            $(newInput).css("width", "180px");
            $(newInput).css("height", "180px");
            //display each button to the screen
            $("#gameBoard").append(newInput);

        }
    }
}

