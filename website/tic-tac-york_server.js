var express = require('express');
var app = express();
app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);

    if (z['action'] == 'evaluate'){
        var win=false
        var play1Win=false
        var play2Win=false
        var catGame=false
        //check if player 1 wins in any horizontal rows
        if ((z['moves'].includes("space1")&&z['moves'].includes("space2")&&z['moves'].includes("space3"))&&z['movesEach'].includes("space11")&&z['movesEach'].includes("space21")&&z['movesEach'].includes("space31")==true){
            win=true;
            play1Win=true
        }
        else if ((z['moves'].includes("space4")&&z['moves'].includes("space5")&&z['moves'].includes("space6"))&&z['movesEach'].includes("space41")&&z['movesEach'].includes("space51")&&z['movesEach'].includes("space61")==true){
            win=true;
            play1Win=true
        }
        else if ((z['moves'].includes("space7")&&z['moves'].includes("space8")&&z['moves'].includes("space9"))&&z['movesEach'].includes("space71")&&z['movesEach'].includes("space81")&&z['movesEach'].includes("space91")==true){
            win=true;
            play1Win=true
        }
        // check if player 1 wins in any vertical columns
        else if ((z['moves'].includes("space1")&&z['moves'].includes("space4")&&z['moves'].includes("space7"))&&z['movesEach'].includes("space11")&&z['movesEach'].includes("space41")&&z['movesEach'].includes("space71")==true){
            win=true;
            play1Win=true
        }
        else if ((z['moves'].includes("space2")&&z['moves'].includes("space5")&&z['moves'].includes("space8"))&&z['movesEach'].includes("space21")&&z['movesEach'].includes("space51")&&z['movesEach'].includes("space81")==true){
            win=true;
            play1Win=true
        }
        else if ((z['moves'].includes("space3")&&z['moves'].includes("space6")&&z['moves'].includes("space9"))&&z['movesEach'].includes("space31")&&z['movesEach'].includes("space61")&&z['movesEach'].includes("space91")==true){
            win=true;
            play1Win=true
        }
        // check if player 1 wins in diagonals
        else if ((z['moves'].includes("space1")&&z['moves'].includes("space5")&&z['moves'].includes("space9"))&&z['movesEach'].includes("space11")&&z['movesEach'].includes("space51")&&z['movesEach'].includes("space91")==true){
            win=true;
            play1Win=true
        }
        else if ((z['moves'].includes("space3")&&z['moves'].includes("space5")&&z['moves'].includes("space7"))&&z['movesEach'].includes("space31")&&z['movesEach'].includes("space51")&&z['movesEach'].includes("space71")==true){
            win=true;
            play1Win=true
        }
        //Now begin checking if player 2 has won.....check if player 2 wins horizontally
        else if ((z['moves'].includes("space1")&&z['moves'].includes("space2")&&z['moves'].includes("space3"))&&z['movesEach'].includes("space12")&&z['movesEach'].includes("space22")&&z['movesEach'].includes("space32")==true){
            win=true;
            play1Win=true
        }
        else if ((z['moves'].includes("space4")&&z['moves'].includes("space5")&&z['moves'].includes("space6"))&&z['movesEach'].includes("space42")&&z['movesEach'].includes("space52")&&z['movesEach'].includes("space62")==true){
            win=true;
            play1Win=true
        }
        else if ((z['moves'].includes("space7")&&z['moves'].includes("space8")&&z['moves'].includes("space9"))&&z['movesEach'].includes("space72")&&z['movesEach'].includes("space82")&&z['movesEach'].includes("space92")==true){
            win=true;
            play1Win=true
        }
        //check if player 2 has won vertically
        else if ((z['moves'].includes("space1")&&z['moves'].includes("space4")&&z['moves'].includes("space7"))&&z['movesEach'].includes("space12")&&z['movesEach'].includes("space42")&&z['movesEach'].includes("space72")==true){
            win=true;
            play2Win=true
        }
        else if ((z['moves'].includes("space2")&&z['moves'].includes("space5")&&z['moves'].includes("space8"))&&z['movesEach'].includes("space22")&&z['movesEach'].includes("space52")&&z['movesEach'].includes("space82")==true){
            win=true;
            play2Win=true
        }
        else if ((z['moves'].includes("space3")&&z['moves'].includes("space6")&&z['moves'].includes("space9"))&&z['movesEach'].includes("space32")&&z['movesEach'].includes("space62")&&z['movesEach'].includes("space92")==true){
            win=true;
            play2Win=true
        }
        //check if player 2 won diagonally
        else if ((z['moves'].includes("space1")&&z['moves'].includes("space5")&&z['moves'].includes("space9"))&&z['movesEach'].includes("space12")&&z['movesEach'].includes("space52")&&z['movesEach'].includes("space92")==true){
            win=true;
            play2Win=true
        }
        else if ((z['moves'].includes("space3")&&z['moves'].includes("space5")&&z['moves'].includes("space7"))&&z['movesEach'].includes("space32")&&z['movesEach'].includes("space52")&&z['movesEach'].includes("space72")==true){
            win=true;
            play2Win=true
        }
        //if win was never updated to true and all possible moves are made, tie game
        else if(win=false&&z['moves'].length==9){
            catGame=true
        }
        var jsontext = JSON.stringify({
            'win' : win,
            'action' : 'evaluate',
            'player1': play1Win,
            'player2': play2Win,
            'tie': catGame
        });
        console.log(jsontext);
        res.send(jsontext);
    }
}).listen(3000);

