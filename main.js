$(document).ready(function() {

var connectFour {
    //GIVEN the user is on the start page with grid 
        //need array to let any function know what it is searching through
        //
    var board: [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
        ];

// Loop through the array of arrays
//using the index as positions
//figure out through the index within the array or arrays where the first chip would drop
//(loop within  a loops)
//create function to start game from first drop OR a start button
// put this function inside a click event.





//  function startGame() {
//     for (i = 0; i<board.length; i++) {
//        for (j = 0; j<board.length; i++) {

//}
//     }

//  }
     
    // all canvas element return as array
    // green: rgb(71, 249, 1);
    // red:   rgb(149, 40, 34);
   
function createChips(color, radius, index){
    var radius = 39;
    var index = 0;
    for (index = 0; index <21; index++) {   //make red chips
       createChips(green,radius, index); //undefined is radius parameter
    }
    for (index = 0; index < 42; index++) {  //make black chips
        createChips(red, radius, index++);
    }
}; 
     





  

$('query').click(function(){
    startGame();
});







     
//     addChip: function (event) {
//         var $gameRows = $(".eachRow");
//         var $gameColumns = $(".col-md-6");

//         for (i = 0; i < $gameColumns.length; i++) {
//         var currentColumnn = $gameRows.$gameColumns[i];
//         $currentColumn.onClick = chipDropped(currentColumn);
//         console.log("is running");
//         }
//     }
//  }  
//   });



  // ABOVE: need to create chip for the chip dropped fxn to work 
// //WHEN the user clicks USER1 
//     //function needs to start game
    //need array of columns in the game 
    //ColumnArray=[] = i=0;i<7;i++;
    //



// userOneStartsGame: function (event) {
//         //this function triggers a click, we don't want the page to refresh
//     event.preventDefault();
//     //WHEN the user clicks USER1 

    
//     //when userOneStarsGame clicked it needs to call fxn that drops chip
    
// }
// countChipsInColumn: function(colorArray, row, col) {
//     //take array of Chips in play for color/user x
//     //take array of chips in play for color/user y
//     //
// }

//THEN the game starts
    //chip appears in column that is clicked
        //create chip
        //create function



//RESET
// $('#resetGame').click(function() {
      this.gameOver = false;
      this.winner = "nobody";
      this.currentPlayer = "x";
      for (var i = 0; i < this.board.length; i++ ) {
        for ( var j = 0; j < this.board[i].length; j++ ) {
           $('#resetGame').set(this.board[i],[j],'');
//}
//  });