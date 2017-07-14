$(function() {

var connectFour = {
    //need array to let any function know what it is searching through
    gameOver: false,
    //designate if luke=player 1 or if darth=player 2
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
// };

dropChip: function(column) {
    //// Loop through the array of arrays
        // for (var i = 0; i < connectFour.board.length; i++ ) {
        // for ( var j = 0; j < connectFour.board[i].length; j++ ) {
        //     let cell = $(`#columns ${i}${j}`);
        //     console.log(connectFour.board.length);
        //return the ids for each column in loop as string locations
//// if the loops are set to index0 then start turn
        // if (connectFour.board[i][j]=== 0) {
        //     connectFour.board[i][j] = connectFour.currentPlayer;
        //need to finish fxn--->connectFour.changeColor(); 
         //   connectFour.isVictorious();
       // return (cell);
                //  }
            //  }
       

    },

    //console.log(dropChip());

switchPlayers: function(currentPlayer) {
        if (this.current === 1) {
           currentPlayer = this.currentPlayer = 2;
                $('#turn').html("Darth Vader");
                console.log(currentPlayer)
        } else {
          currentPlayer = this.currentPlayer = 1;
                $('#turn').html("Luke Skywalker");
                }
                console.log(currentPlayer);
        this.dropChip(currentPlayer);
    },
    

   whenClicked: function() {
       for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 7; j++) {
         $(`#columns-${i}${j}`).on('click', dropCoin());
            if (board.gameOver !== false) {
            var target = column;
            }
         connectFour.dropCoin(column);
         connectFour.switchPlayers(currentPlayer);
            }     
     }

}

// //   });            
//     for (var i = 0; i < 6; i++) {
//             for (var j = 0; j < 7; j++) {
//             let cell = $(`#columns-${i}${j}`);
//             let target = column;
//      cell.on('click', connectFour.dropChip(column));
//      cell.on('click', connectFour.switchPlayers(currentPayer));
//             }
//     }
 } //<---bracket ends connectFour object






 
// PUT EVERYTHING HERE! OR TRY.
 function clickClick(){
    alert('Im working');
}

console.log(connectFour);

$('#columns-00').on('click', function(){
    clickClick();
}) 
 }); //<-- this ends jquery document load function


// // colorChanger: function (){

     






  // ABOVE: need to create chip for the chip dropped fxn to work 
// //WHEN the user clicks USER1 
//     //function needs to start game
    //need array of columns in the game 
   

    

                            //CHECKFORWINNER
//isVictorious: function(player, x, y) {
//        var cell =  //callbackfunction.element[];
//        var x = cell.$('#columns')[7]; 
//        var y =cell.$('#columns')[8];


// function isVictorious(player, cell) {
//     var directions = [
//       { x: 0, y: 1  }, // North-South
//       { x: 1, y: 0  }, // East-West
//       { x: 1, y: 1  }, // Northeast-Southwest
//       { x: 1, y: -1 }  // Southeast-Northwest
//     ],
// // Check all directions

// }

// connectFour.dropChip();
// connectFour.switchPlayers();
// });  


// reset 
//  gameOver: false,
//     //designate if luke=player 1 or if darth=player 2
//     currentPlayer: 1,
//     board: [
//         [{},{},{},{},{},{},{}],
//         [{},{},{},{},{},{},{}],
//         [{},{},{},{},{},{},{}],
//         [{},{},{},{},{},{},{}],
//         [{},{},{},{},{},{},{}],
//         [{},{},{},{},{},{},{}]
//         ],


