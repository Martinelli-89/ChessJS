export const pawn = (currentPositionXY, pawnColor) => {

    if (pawnColor == "white") {
        const moves = [[currentPositionXY[0]-1, currentPositionXY[1]+1],
                       [currentPositionXY[0], currentPositionXY[1]+1],
                       [currentPositionXY[0]+1, currentPositionXY[1]+1]];

        const regularMoves = moves.filter ( move => (move[0]> 0 && move[0]<8 && move[1]<9) );
        return regularMoves;
    } else {
        const moves = [[currentPositionXY[0]-1, currentPositionXY[1]-1],
                       [currentPositionXY[0], currentPositionXY[1]-1],
                       [currentPositionXY[0]+1, currentPositionXY[1]-1]];

        const regularMoves = moves.filter ( move => (move[0]> 0 && move[0]<8 && move[1]>0) );
        return regularMoves;
    }
}

export default pawn;