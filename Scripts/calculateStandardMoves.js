const calculateStandardMoves = (XYposition, pieceType, pieceColor) => {

    switch(pieceType) {
        case("pawn"):
            return pawn(XYposition, pieceColor);
        case("rock"):
            return rock(XYposition, pieceColor);
        case("king"):
            return king(XYposition, pieceColor);
        case("queen"):
            return queen(XYposition, pieceColor);
        case("bishop"):
            return bishop(XYposition, pieceColor);
        case("knight"):
            return knight(XYposition, pieceColor);
    }

}