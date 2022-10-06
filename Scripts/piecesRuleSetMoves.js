import convertToXY from "./convertToXYCoordinates";
import pawn from "./piecesMoveset/pawn";
import convertXYtoBoardCoordinates from "./convertXYtoBoardCordinates";


const movePawn = (currentPosition, pawnColor, board) => {

    const possibleMoves = [];
    const XYposition = convertToXY(currentPosition); 

    const ruleSetMoves = pawn(currentPosition,pawnColor);
    const ruleSetMovesToBoardCoordinates = ruleSetMoves.map (coordinates => convertXYtoBoardCoordinates(coordinates));

    const allowedMoves = ruleSetMovesToBoardCoordinates.filter( coordinates => {
        board[coordinates].color != pawnColor;
    });

    return allowedMoves;
}