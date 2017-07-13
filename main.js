$(document).ready(function() {

var connectFour = {
    //GIVEN the user is on the start page with grid 
        //need array to let any function know what it is searching through
        //
    gameOver: false,
    //designate if luke=player "a" or if darth=player "b"
    currentPlayer: 1,
    board: [
        [{},{},{},{},{},{},{}],
        [{},{},{},{},{},{},{}],
        [{},{},{},{},{},{},{}],
        [{},{},{},{},{},{},{}],
        [{},{},{},{},{},{},{}],
        [{},{},{},{},{},{},{}]
        ],
        // trying to create a function within object for the loop
             // of board arrays to use within other funtions that would need the data
   //loopForBoard: function(i, j) {
   //     for (var i = 0; i < connectFour.board.length; i++ ) {
   //     for ( var j = 0; j < connectFour.board[i].length; j++ ){
   //         console.log([i, j]);
   //             }  
    //        }
//loopForBoard.map();
//        }
//    }
//});


            // }
 
 //       }
    // },
//     directions: [
//         { x: 0, y: 1  }, // North-South
//         { x: 1, y: 0  }, // East-West
//         { x: 1, y: 1  }, // Northeast-Southwest
//         { x: 1, y: -1 }  // Southeast-Northwest
//         ]

// };

// //
    dropChip: function() {

//// Loop through the array of arrays
        for (var i = 0; i < connectFour.board.length; i++ ) {
        for ( var j = 0; j < connectFour.board[i].length; j++ ) {
            let cell = $(`#columns ${i}${j}`);
            console.log(connectFour.board.length);
        //return the ids for each column in loop as string locations
//// if the loops are set to index0 then start turn
      if (connectFour.board[i][j]=== 0) {
            connectFour.board[i][j] = connectFour.currentPlayer;
        //need to finish fxn--->connectFour.changeColor(); 
        //need to finish fxn--->connectFour.isVictorious();
        return (cell);
                 }
             }
         }
    },

    clickLocation: $('#columns[{}]').click(function(column) {
        if (board.gameOver !== false) {
            var target = column;
        }
         board.dropCoin(target);
         board.switchPlayers();
            },
        
 
//                            //SWITCH PLAYERS
// //if player === a then a //if player !== a then b
    switchPlayers: function() {
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
                //$('#').click.css('background-color', red);
                console.log(2);
        } else {
            this.currentPlayer = 1;
                //$('#').css('background-color', green);
                }
                console.log(1);
        //need to callfunctionhere(this.currentPlayer);
            }
    }
connectFour.dropChip();
connectFour.switchPlayers();
});  
// // colorChanger: function (){

// // }
     
   




  // ABOVE: need to create chip for the chip dropped fxn to work 
// //WHEN the user clicks USER1 
//     //function needs to start game
    //need array of columns in the game 
   

    

                            //CHECKFORWINNER
//isVictorious: function(player, x, y) {
        var cell =  //callbackfunction.element[];
        var x = cell.$('#columns')[7]; 
        var y =cell.$('#columns')[8];

// checkDirections.

//}



//RESET
// method: {
// GameReset: function(array) {
//     this.gameOver = false;
//     this.currentPlayer = "a";
//     for (var i = 0; i < this.board.length; i++ ) {
//     for ( var j = 0; j < this.board[i].length; j++ ) {
//         $('#resetGame').click(this.board[i],[j], 0);
//             }
//         }
//     }
// };
// });