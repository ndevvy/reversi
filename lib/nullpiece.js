function NullPiece() {
  this.color = null;
}

NullPiece.prototype.toString = function(){
  return '   ';
};
module.exports = NullPiece;
