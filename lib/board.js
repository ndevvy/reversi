var Piece = require("./piece");
var NullPiece = require("./nullpiece");
/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  var grid = [];
  var blank;
  for (var i = 0; i < 8; i++) {
    grid.push([]);
    for (var j = 0; j < 8; j++) {
      grid[i].push(blank);
    }
  }
  grid[3][4] = new Piece('black');
  grid[4][3] = new Piece('black');
  grid[3][3] = new Piece('white');
  grid[4][4] = new Piece('white');
  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  var row = pos[0];
  var col = pos[1];

  if (this.isValidPos(pos)) {
    return this.grid[row][col];
  }
  else {
    throw new RangeError("Invalid Position!");
  }
};


/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  var piece = this.getPiece(pos);
  if (piece) {
    return piece.color === color;
  }
  else{
    return false;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  if (this.getPiece(pos)) {
    return true;
  }
  else {
    return false;
  }
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) {
    return false;
  }
  return true;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (!this.getPiece(pos)) {
    this.grid[pos[0]][pos[1]] = new Piece(color);
  }
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  this.grid.forEach(function(row) {
    var printRow = "";
    row.forEach(function(piece){
      if (piece){
        printRow += piece.toString();
      }
      else {
        printRow += " ";
      }
    });
    console.log(printRow);
  });
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
// Board.prototype.validMove = function (pos, color) {
//   if (!this.isOccupied(pos)) {
//     for(var i = 0; i < Board.DIRS.length; i++ ){
//       var otherColorExists = false;
//       var posX = pos[0];
//       var posY = pos[1];
//       var deltaX = Board.DIRS[i][0];
//       var deltaY = Board.DIRS[i][1];
//       while()
//     }
//     // FINISH THIS
//   }
// };

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  var validMoves = [];
  for(var i = 0; i < this.grid.length; i++) {
    for(var j = 0; j < this.grid[0].length; j++) {
      if(this.validMove([i,j],color)) {
        validMoves.push([i,j]);
      }
    }
  }
  return validMoves;
};

module.exports = Board;
