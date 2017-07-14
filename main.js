$(function() {

var connectFour = {
    //need array to let any function know what it is searching through
    gameOver: false,
    //designate if luke=player 1 or if darth=player 2
    currentPlayer: 1,
    //array for each square in the gameboard
    board: [
        [{},{},{},{},{},{},{}],
        [{},{},{},{},{},{},{}],
        [{},{},{},{},{},{},{}],
        [{},{},{},{},{},{},{}],
        [{},{},{},{},{},{},{}],
        [{},{},{},{},{},{},{}]
        ],
    

dropChip: function(column) {
    //give var to all of the columns
    var columnToDrop = $('.col-md-6');
    //give var to the array of the columns now declared in new var
    whereStartDrop = this.board;
    //need to loop thru 
     console.log("dropChip, im working");
     console.log(connectFour.board.length[0]);
     for (var i = 0; i <= connectFour.board.length; i++) {
         console.log(whereStartDrop[i]);
        if (whereStartDrop[i] === 0) {
            console.log(whereStartDrop[i]);
            whereStartDrop[i] = connectFour.currentPlayer;
        //need to call fxn for color change
          changeColors();
          //need to call function for victory
           // return; all of above 
        }
    }   
 },


switchPlayers: function(currentPlayer) {
         console.log("switchPlayersisworking");
        if (this.currentPlayer === 1) {
           currentPlayer = this.currentPlayer = 2;
                $('#turn').html("Darth Vader");
        } else {
          currentPlayer = this.currentPlayer = 1;
                $('#turn').html("Luke Skywalker");
                }
        return;
    },
// //            
//     
//             let target = column;
//      cell.on('click', connectFour.dropChip(column));
//      cell.on('click', connectFour.switchPlayers(currentPayer));
//             }
//     }
 } //<---bracket ends connectFour object
connectFour.dropChip();
connectFour.switchPlayers();


function changeColors(){
    console.log("changecolorslogging")
    let cell = $(`#columns-${i}${j}`);
    for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 7; j++) {
         if (connectFour.switchPlayers() === 1) {
        cell.css("background-color", "green")
         } else {
        cell.css("background-color", "red")
            }
        }
    }      
}
$('.col-md-6').click(function() {
//  function whenClicked() {
    console.log("whenclickedlogging");
    // var getTarget = column;
    console.log("Call dropChip function");
    connectFour.dropChip();
    console.log("Call switchPlayers function");
    connectFour.switchPlayers();
    //  if (connectFour.gameOver !== false) {
    //             // var getTarget = column;
    //             console.log("Call dropChip function");
    //             // connectFour.dropChip();
    //             console.log("Call switchPlayers function");
    //             // connectFour.switchPlayers();
    //         }
    })
//whenClicked();
changeColors();
//         {
//          $(`#columns-${i}${j}`).on('click', dropCoin());
//             if (board.gameOver !== false) {
//             var target = column;
//             }
          
//      }
// }
 
// PUT EVERYTHING ^^^^HERE^^^^! OR TRY.

//created function that changes "columns-__" to a number
//need to split the number for x & y coordinates
//use function to decalred wins at x,y coordinates
function parseIntColumnIds(x, y){
    console.log("CLICKCLICKimworking");
            for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 7; j++){
           let cell = $(`#columns-${i}${j}`);
           let cellId = parseInt((cell.attr('id').replace(/columns-/, '')));
           console.log(cell);
           let x = parseInt(cellId);
           let y = parseInt(cellId);
           console.log(x + " im x ");
            }
        }    
}


parseIntColumnIds();
 
 }); //<-- this ends jquery document load function


     






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


