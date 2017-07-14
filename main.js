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
       connectFour.isVictorious();
        return (cell);
                 }
             }
         }
    },

  $('#columns[{}]').click(function(column) {
     $('#columns[{}]').click
        if (board.gameOver !== false) {
            var target = column;
        }
         board.dropCoin(target);
         board.switchPlayers();
            
        
  });
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
    },

// // colorChanger: function (){

// // }
     
   




  // ABOVE: need to create chip for the chip dropped fxn to work 
// //WHEN the user clicks USER1 
//     //function needs to start game
    //need array of columns in the game 
   

    

                            //CHECKFORWINNER
//isVictorious: function(player, x, y) {
//        var cell =  //callbackfunction.element[];
//        var x = cell.$('#columns')[7]; 
//        var y =cell.$('#columns')[8];


isVictory: function (pieces, placedX, placedY) {
  var i, j, x, y, maxX, maxY, steps, count = 0,
    var directions = [
      { x: 0, y: 1  }, // North-South
      { x: 1, y: 0  }, // East-West
      { x: 1, y: 1  }, // Northeast-Southwest
      { x: 1, y: -1 }  // Southeast-Northwest
    ],

  // Check all directions
  var outerloop =
  for (i = 0; i < directions.length; i++, count = 0) {
    // Set up bounds to go 3 pieces forward and backward
    x =     Math.min(Math.max(placedX - (3 * directions[i].x), 0), pieces.length    - 1);
    y =     Math.min(Math.max(placedY - (3 * directions[i].y), 0), pieces[0].length - 1);
    maxX =  Math.max(Math.min(placedX + (3 * directions[i].x),     pieces.length    - 1), 0);
    maxY =  Math.max(Math.min(placedY + (3 * directions[i].y),     pieces[0].length - 1), 0);
    steps = Math.max(Math.abs(maxX - x), Math.abs(maxY - y));

    for (j = 0; j < steps; j++, x += directions[i].x, y += directions[i].y) {
      if (pieces[x][y] == pieces[placedX][placedY]) {
        // Increase count
        if (++count >= 4) {
          break outerloop;
        }
      } else {
        // Reset count
        count = 0;
      }
    }
  }

  return count >= 4;
}

connectFour.dropChip();
connectFour.switchPlayers();
});  






