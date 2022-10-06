const pieceClicled = (event) => {

    const currentPosition = event.target.id;
    const pieceColor = board[event.target.id].color;
    const pieceType = board[event.target.id].piece;

    if(pieceType == "pawn") {

        renderMoves(movePawn(currentPosition, pieceColor));

    }

}