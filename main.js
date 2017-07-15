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
            //give var to the array of the columns now declared in new var
            whereStartDrop = this.board[0];
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

    // connectFour.switchPlayers();

    $('.col-md-6').on('click', function(col) {
        // dont allow user to click any row < 4 on first try
        currentClickedRow = parseInt(col.target.id.split('-')[1]);


        if (currentClickedRow >= 50) { // NOTE: Change this later!!!!!!!
            connectFour.switchPlayers();
            connectFour.dropChip(col.target);
            
            // if (!$(col.target).hasClass('red') || !$(col.target).hasClass('green')) {
                if (connectFour.currentPlayer == 1) {
                    if (!$(col.target).hasClass('p2'))
                    {
                        changeColors(connectFour.currentPlayer, $(this));
                    }

                } else {
                    if (!$(col.target).hasClass('p1')) {
                        changeColors(connectFour.currentPlayer, $(this));
                    }
                }
            // }

            
        }
        // }

        // if cell has either green or red prevent click
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
