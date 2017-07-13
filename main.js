$(document).ready(function() {

var connectFour = {
    //GIVEN the user is on the start page with grid 
        //need array to let any function know what it is searching through
        //
    gameOver: false,
    //designate if luke=player "a" or if darth=player "b"
    currentPlayer: 1,
    board: [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
        ],
        // trying to create a function within object for the loop
             // of board arrays to use within other funtions that would need the data
    loopForBoard: function() {
        for (var i = 0; i < connectFour.board.length; i++ ) {
    for ( var j = 0; j < connectFour.board[i].length; j++ ) {

            }

        }
    },
    directions: [
        { x: 0, y: 1  }, // North-South
        { x: 1, y: 0  }, // East-West
        { x: 1, y: 1  }, // Northeast-Southwest
        { x: 1, y: -1 }  // Southeast-Northwest
        ]

}

//
var dropChip = function() {

// Loop through the array of arrays
for (var i = 0; i < connectFour.board.length; i++ ) {
    for ( var j = 0; j < connectFour.board[i].length; j++ ) {
        // console.log(connectFour.board.length);
// if the loops are set to index0 then start turn
        if (connectFour.board[i][j]=== 0) {
            connectFour.board[i][j] = connectFour.currentPlayer;
        //need to finish fxn--->connectFour.changeColor(); 
        //need to finish fxn--->connectFour.isVictorious();
              }
        }
    }
}
                            //SWITCH PLAYERS
//if player === a then a //if player !== a then b
var switchPlayers = function() {

    if (this.turn === 1) {
        this.turn = 2;
        console.log(2);
    } else {
        this.turn = 1;
    console.log(1);
        }
    }
    switchPlayers();
});  
    //need to callfunctionhere(this.turn);
//         }
// }

// colorChanger: function (){

// }
     
   




  // ABOVE: need to create chip for the chip dropped fxn to work 
// //WHEN the user clicks USER1 
//     //function needs to start game
    //need array of columns in the game 
   

    
//     //when userOneStarsGame clicked it needs to call fxn that drops chip
    //THEN the game starts
    //chip appears in column that is clicked
        //create chip
        //create function
// }
// countChipsInColumn: function(colorArray, row, col) {
//     //take array of Chips in play for color/user x
//     //take array of chips in play for color/user y
//     //
// }

                            //CHECKFORWINNER
//isVictorious: function(chips, placedX, placedY) {
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