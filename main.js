$(function() {
    var connectFour = {
        gameOver: false,
        //designate if luke=player 1 or if darth=player 2
        currentPlayer: 1,
        //need array to let any function know what it is searching through
        board: [
            [{}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}]
        ],

        dropChip: function(column) {
            //give var to all of the columns
            var columnToDrop = $('.col-md-6')[$('.col-md-6').length - 6];
            var whereStartDrop = false;
            //if the colum attepmting click has p1 || p2
                if ($(columnToDrop).hasClass('p1') || $(columnToDrop).hasClass('p2')) {
                    var whereStartDrop = column.target;
                    //then the column is not available for palyer move
                    whereStartDrop === true;
                } else {   
                //else the column is available for player move
                 whereStartDrop === false;   
                }
        },

        switchPlayers: function(currentPlayer) {
                //console.log('switchPlayersisworking');
                if (this.currentPlayer === 1) {
                    currentPlayer = this.currentPlayer = 2;
                    $('#turn').html('Luke Skywalker');
                    $('#turn').css('color', 'green');
                } else {
                    currentPlayer = this.currentPlayer = 1;
                    $('#turn').html('Darth Vader');
                    $('#turn').css('color', 'red')
                }
                return;
        }
    }; //<---bracket ends connectFour object

    // @TODO: There is a bug that changes the user state when click is too fast
    $('.col-md-6').on('click', function(cell) {
        currentClickedCell = parseInt(cell.target.id.split('-')[1]);
        nextCellId = currentClickedCell+10;
        cellBelow = $('#columns-' + nextCellId)[0];
            // if (cellBelow !== undefined) {
        // }
        // dont allow user to click any row < 4 on first try // allow to stack after one below
        if (currentClickedCell >= 50 || $(cellBelow).hasClass('p1') || $(cellBelow).hasClass('p2')) {
            connectFour.switchPlayers();
            connectFour.dropChip(cell.target);
            if (connectFour.currentPlayer == 1) {
                if (!$(cell.target).hasClass('p2')) {
                    changeColors(connectFour.currentPlayer, $(this));
                }

            } else {
                if (!$(cell.target).hasClass('p1')) {
                    changeColors(connectFour.currentPlayer, $(this));
                }
            }
          isVictory();   
        }
    });

    //when its the players turn and they click on cell #, then the color changes 
    function changeColors(currentPlayer, col) {
        console.log(currentPlayer);
        if (currentPlayer == 1) {
            col.removeClass('grey');
            col.addClass('green');
            col.addClass('p1');
        } else {
            col.removeClass('green');
            col.addClass('red');
            col.addClass('p2');
        }
    }
    //check win
 function isVictory() {
        var i;
        var j;
        var k;
        var rTemp = 0;
        var bTemp = 0;
        var brTemp = 0;
        var trTemp = 0;
        for (i = 0; i < 6; i++) {
            for (j = 0; j < 7; j++) {
            for (k = 0; k <= 3; k++) {
                    //from (i,j) to right
                    if (j + k < 7) {
                        rTemp += connectFour.board[i][j + k]
                    }
                    //from (i,j) to bottom
                    if (i + k < 6) {
                        bTemp += connectFour.board[i + k][j];
                    }

                    //from (i,j) to bottom-right
                    if (i + k < 6 && j + k < 7) {
                        brTemp += connectFour.board[i + k][j + k]
                    }

                    //from (i,j) to top-right
                    if (i - k >= 0 && j + k < 7) {
                        trTemp += connectFour.board[i - k][j + k];
                    }
                }
                if (Math.abs(rTemp) === 4) {
                    alertWinner(currentPlayer);
                } else if (Math.abs(bTemp) === 4) {
                    alertWinner(currentPlayer);
                } else if (Math.abs(brTemp) === 4) {
                    alertWinner(currentPlayer);
                } else if (Math.abs(trTemp) === 4) {
                    alertWinner(currentPlayer);
                }
            }
    }
  


     alertWinner = function(currentPlayer) {
         connectFour.gameOver = true;
        if (connectFour.currentPlayer === 1) {
             alert("Victory for Darth!");
         } else {
             alert("Victory for Luke!");
         }
     }
    
    
    // parseIntColumnIds = function(currentClickedCell) {
    //    for (var i = 0; i < 6; i++) {
    //        for (var j = 0; j < 7; j++) {
    //     let cell = $(`#columns-${i}${j}${k}`);
    //     let cellId = parseInt(cell.attr('id').replace(/columns-/, ''));
    //             cellId += (currentClickedCell);
    //             let x = cellId[i];
    //             let y = cellId[j];
    //               console.log(x, y);;
    //         }
    //     }
    // }    

    //  parseIntColumnIds(currentClickedCell);
    //     }
    // };

    
//FIGURE OUT WHY THE FUCK THIS ISNT WORKING


    // function reloadPage(){
    //     var resetButton = $('#resetGame');
    //         if (connectFour.board === false) {
    //         (connectFour.board === true)
    //         }
    //     resetButton.onclick= reloadPage;
    //     window.location.reload(true);

    // }
    // reloadPage();
        
// PUT EVERYTHING ^^^^HERE^^^^! OR TRY.

    //created function that changes "columns-__" to a number
    //need to split the number for x & y coordinates
    //use function to decalred wins at x,y coordinates


}
});
