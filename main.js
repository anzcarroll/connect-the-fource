$(function() {
    var connectFour = {
        //need array to let any function know what it is searching through
        gameOver: false,
        //designate if luke=player 1 or if darth=player 2
        currentPlayer: 1,
        //array for each square in the gameboard
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
            //give var to the array of the columns now declared in new var
        },

        switchPlayers: function(currentPlayer) {
            // console.log('switchPlayersisworking');
            if (this.currentPlayer === 1) {
                currentPlayer = this.currentPlayer = 2;
                $('#turn').html('Darth Vader');
            } else {
                currentPlayer = this.currentPlayer = 1;
                $('#turn').html('Luke Skywalker');
            }
            return;
        }
    }; //<---bracket ends connectFour object
    
    // @TODO: There is a bug that changes the user state when click is too fast
    $('.col-md-6').on('click', function(cell) {
        
        currentClickedCell = parseInt(cell.target.id.split('-')[1]);
        nextCellId = currentClickedCell+10;
        cellBelow = $('#columns-' + nextCellId)[0];
        if (cellBelow !== undefined) {
            // console.log($(cellBelow)[0])
            // console.log($(cellBelow).hasClass('p1') || $(cellBelow).hasClass('p2'));
        }
        // dont allow user to click any row < 4 on first try
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

        // connectFour.switchPlayers();
    }

    // PUT EVERYTHING ^^^^HERE^^^^! OR TRY.

    //created function that changes "columns-__" to a number
    //need to split the number for x & y coordinates
    //use function to decalred wins at x,y coordinates
    var parseIntColumnIds = function(x, y) {
        // console.log('i have changed your strings to numbers');
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 7; j++) {
                let cell = $(`#columns-${i}${j}`);
                let cellId = parseInt(cell.attr('id').replace(/columns-/, ''));
                // console.log(cell);
                let x = parseInt(cellId);
                let y = parseInt(cellId);
                // console.log(x + ' im x ');
            }
        }
    };
});
