var start = new Date();
var turn = 1;
var player1Mark="../images/xImage.png"
var player2Mark="../images/oImage.png"
var movesMade=[];
var movesMadeEach=[];
var url = "http://localhost:3000/post";
var p1Name=""
var p2Name=""
//when page is loaded, create gameboard and start and display a timer
window.onload= function()
{
    p1Name = prompt("Please enter first player name", "");
    p2Name =  prompt("Please enter second player name", "");
    setInterval(function() 
    {$("#timer").text(parseInt((new Date() - start) / 1000) + "s");}, 1000);
    initializeBoardPvp();
    turnDisplay();
    

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
            $(newInput).css("margin", "5px");
            $(newInput).css("width", "180px");
            $(newInput).css("height", "180px");
            //display each button to the screen
            $("#gameBoard").append(newInput);
            //set an onclick attribute to the tiles so when they are clicked, a mark will appear
            $("#space"+counter).click(function(){
                if (turn==1){
                    $(this).attr("src", player1Mark);
                    $(this).prop("disabled", true);
                    movesMade.push($(this).attr("id"));
                    movesMadeEach.push($(this).attr("id")+"1");
                    $(this).attr("class","playerMark1")
                    turn=2;
                    process_attempt()


                }
                else{
                    $(this).attr("src", player2Mark);
                    $(this).prop("disabled", true);
                    movesMade.push($(this).attr("id"));
                    movesMadeEach.push($(this).attr("id")+"2");
                    $(this).attr("class","playerMark2")
                    turn=1;
                    process_attempt()

                }
                turnDisplay()
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
        $("#turn").text(p2Name+"'s Turn");
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

function process_attempt(){
    $.post(
        url+'?data='+JSON.stringify({
            'name1': p1Name, 
            'name2': p2Name,
            'mark1': player1Mark,
            'mark2': player2Mark,
            'moves' : movesMade,
            'movesEach' : movesMadeEach,
            'action' : 'evaluate',
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
            alert(p2Name+" wins!!")
            window.location.href="../gameOver/end.html"
        }
        else if(tie==true){
            alert("Cat's Game!")
        }

    }
}