var start = new Date();
var turn = 1;
var player1Mark="../images/xImage.png"
var player2Mark="../images/oImage.png"
var movesMade=[];
var movesMadeEach=[];
var url = "http://localhost:3000/post";
var p1Name=""

//when page is loaded, create gameboard and start and display a timer
window.onload= function()
{
    p1Name = prompt("Please enter first player name", "");
    setInterval(function() 
    {$("#timer").text(parseInt((new Date() - start) / 1000) + "s");}, 1000);
    turnDisplay();
    initializeBoardPvp();

}
 

function initializeBoardPvp() {
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
            $(newInput).attr("class","moveButtons");
            $(newInput).css("margin", "5px");
            $(newInput).css("width", "180px");
            $(newInput).css("height", "180px");
            //display each button to the screen
            $("#gameBoard").append(newInput);

            //set an onclick attribute to the tiles so when they are clicked, a mark will appear
            //this code/function is only run when a button is pressed
            $("#space"+counter).click(function(){
                if (turn==1){
                    $(this).attr("src", player1Mark);
                    //appends the move to the list of all moves made, so no illegal moves can occur
                    $(this).prop("disabled", true);
                    movesMade.push($(this).attr("id"));
                    movesMadeEach.push($(this).attr("id")+"1");
                    $(".moveButtons").prop("disabled", true);
                    $(this).attr("class","playerMark1");
                    process_attempt();
                    cpuMove();

                    
                }
                turnDisplay();
                });



        }
    }
    $.post(url+'?data='+JSON.stringify({
        'name1': p1Name, 
        'name2': p2Name,
        'mark1': player1Mark,
        'mark2': player2Mark,
    }),
    response);
}


//Displays who's turn it is when called based on the variable turn
function turnDisplay(){
    if (turn==1){
        $("#turn").text(p1Name+"'s Turn");
    }
    else{
        $("#turn").text("Computer's Turn");
    }
}

//creates the id of the space the computer will change, appends that id to the list of 
//all moves made and then displays the move. then sets turn back to 1 for the player
function cpuMove(){
    turn=2;
    turnDisplay();
    //sets a short delay after the player moves for the cpu to "think" about their move(more realistic)
    window.setTimeout(function(){
    if (movesMade.length<9){
        var cpuMove=Math.floor(Math.random()*9)+1;
        while ((jQuery.inArray("space"+cpuMove,movesMade)!=-1)){
            cpuMove=Math.floor(Math.random()*9)+1;
        }
        $("#space"+cpuMove).attr("src",player2Mark);
        movesMade.push("space"+cpuMove);
        movesMadeEach.push("space"+cpuMove+"2");
        $(".moveButtons").prop("disabled", false);
        $("#space"+cpuMove).prop("disabled", true);
        process_attempt()

    }
    turn=1;
    turnDisplay();
    },2000);

}

function process_attempt(){
    $.post(
        url+'?data='+JSON.stringify({
            'name1': p1Name, 
            'mark1': player1Mark,
            'mark2': player2Mark,
            'moves' : movesMade,
            'movesEach' : movesMadeEach,
            'action' : 'evaluate',
            'howMany': movesMade.length

        }),
        response
    );
}

function response(data, status){
    var response = JSON.parse(data);
    console.log(data);
    if (response['action']=='evaluate'){
        var win=response['win'];
        var player1Win=response['player1']
        var player2Win=response['player2']
        var tie=response['tie'];
        if (win==true&&player1Win==true){
            alert(p1Name+" wins!!")
            window.location.href="../gameOver/end.html"
        }
        else if (win==true&&player2Win==true){
            alert("Computer wins!!")
            window.location.href="../gameOver/end.html"
        }
        else if(tie==true){
            alert("Cat's Game!")
            window.location.href="../gameOver/end.html"
        }

    }
}
function openTips(){
    document.getElementById("tipsForm").style.display = "block";
}
function closeTips() {
    document.getElementById("tipsForm").style.display = "none";
}
function openHow(){
    document.getElementById("howForm").style.display = "block";
}
function closeHow() {
    document.getElementById("howForm").style.display = "none";
}