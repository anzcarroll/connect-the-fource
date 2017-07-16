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
                console.log("cant drop here");
            } else {
                //else the column is available for player move
                console.log("can dro here");
                 whereStartDrop === false;   
            }
            //give var to the array of the columns now declared in new var
        },

        switchPlayers: function(currentPlayer) {
            // console.log('switchPlayersisworking');
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
        if (cellBelow !== undefined) {
            // console.log($(cellBelow)[0])
            // console.log($(cellBelow).hasClass('p1') || $(cellBelow).hasClass('p2'));
        }
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
    function isVictorious(SOMETHINGHERE) {
            checkHorizontal = function() {  
                for (var i =0; i <connectFour.board.length; i++) {
                    for (var j = 0; j <connectFour.board[0].length - 3; j++) {
                var checkSum =         
                    }
                }
            }
            checkVertical = function() {

            }
            checkDiagonal = function() {

            }
            alertWinner = function() {

            }
     }

    alert win
    function alertWinner() {

    }


    // function clearBoard() {
    //    connectFour.gameOver === false;
    //     board = [
    //         [{}, {}, {}, {}, {}, {}, {}],
    //         [{}, {}, {}, {}, {}, {}, {}],
    //         [{}, {}, {}, {}, {}, {}, {}],
    //         [{}, {}, {}, {}, {}, {}, {}],
    //         [{}, {}, {}, {}, {}, {}, {}],
    //         [{}, {}, {}, {}, {}, {}, {}]
        
    // };

    // PUT EVERYTHING ^^^^HERE^^^^! OR TRY.

    //created function that changes "columns-__" to a number
    //need to split the number for x & y coordinates
    //use function to decalred wins at x,y coordinates
parseIntColumnIds = function(cell, x, y) {
        // console.log('i have changed your strings to numbers');
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 7; j++) {
                let cell = $(`#columns-${i}${j}`);
                let cellId = parseInt(cell.attr('id').replace(/columns-/, ''));
                cellCoordinates = cellId + (cell.target.id.split('-')[1]);
                let x = parseInt(cellCoordinates)[i];
                
                let y = parseInt(cellCoordinates)[j];
                 console.log("im workingish");
            }
        }
    };

});
