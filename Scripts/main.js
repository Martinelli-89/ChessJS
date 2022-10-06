const board = {

    a1 : { 
        piece: "rock",
        color: "white",
        source: "../Resources/WhiteRock.svg"
    },
    b1 : { 
        piece: "knight",
        color: "white",
        source: "../Resources/WhiteKnight.svg"
    },
    c1 : { 
        piece: "bishop",
        color: "white",
        source: "../Resources/WhiteBishop.svg"
    },
    d1 : { 
        piece: "queen",
        color: "white",
        source: "../Resources/WhiteQueen.svg"
    },
    e1 : { 
        piece: "king",
        color: "white",
        source: "../Resources/WhiteKing.svg"
    },
    f1 : { 
        piece: "bishop",
        color: "white",
        source: "../Resources/WhiteBishop.svg"
    },
    g1 : { 
        piece: "knight",
        color: "white",
        source: "../Resources/WhiteKnight.svg"
    },
    h1 : { 
        piece: "rock",
        color: "white",
        source: "../Resources/WhiteRock.svg"
    },
    a2 : { 
        piece: "queen",
        color: "white",
        source: "../Resources/WhiteQueen.svg"
    },
    b2 : { 
        piece: "pawn",
        color: "white",
        source: "../Resources/WhitePawn.svg"
    },
    c2 : { 
        piece: "pawn",
        color: "white",
        source: "../Resources/WhitePawn.svg"
    },
    d2 : { 
        piece: "pawn",
        color: "white",
        source: "../Resources/WhitePawn.svg"
    },
    e2 : { 
        piece: "pawn",
        color: "white",
        source: "../Resources/WhitePawn.svg"
    },
    f2 : { 
        piece: "pawn",
        color: "white",
        source: "../Resources/WhitePawn.svg"
    },
    g2 : { 
        piece: "pawn",
        color: "white",
        source: "../Resources/WhitePawn.svg"
    },
    h2 : { 
        piece: "pawn",
        color: "white",
        source: "../Resources/WhitePawn.svg"
    },
    a3 : { 
        piece: "",
        color: ""
    },
    b3 : { 
        piece: "",
        color: ""
    },
    c3 : { 
        piece: "",
        color: ""
    },
    d3 : { 
        piece: "",
        color: ""
    },
    e3 : { 
        piece: "",
        color: ""
    },
    f3 : { 
        piece: "",
        color: ""
    },
    g3 : { 
        piece: "",
        color: ""
    },
    h3 : { 
        piece: "",
        color: ""
    },
    a4 : { 
        piece: "",
        color: ""
    },
    b4 : { 
        piece: "",
        color: ""
    },
    c4 : { 
        piece: "",
        color: ""
    },
    d4 : { 
        piece: "",
        color: ""
    },
    e4 : { 
        piece: "",
        color: ""
    },
    f4 : { 
        piece: "",
        color: ""
    },
    g4 : { 
        piece: "",
        color: ""
    },
    h4 : { 
        piece: "",
        color: ""
    },
    a5 : { 
        piece: "",
        color: ""
    },
    b5 : { 
        piece: "",
        color: ""
    },
    c5 : { 
        piece: "",
        color: ""
    },
    d5 : { 
        piece: "",
        color: ""
    },
    e5 : { 
        piece: "",
        color: ""
    },
    f5 : { 
        piece: "",
        color: ""
    },
    g5 : { 
        piece: "",
        color: ""
    },
    h5 : { 
        piece: "",
        color: ""
    },
    a6 : { 
        piece: "",
        color: ""
    },
    b6 : { 
        piece: "",
        color: ""
    },
    c6 : { 
        piece: "",
        color: ""
    },
    d6 : { 
        piece: "",
        color: ""
    },
    e6 : { 
        piece: "",
        color: ""
    },
    f6 : { 
        piece: "",
        color: ""
    },
    g6 : { 
        piece: "",
        color: ""
    },
    h6 : { 
        piece: "",
        color: ""
    },
    a7 : { 
        piece: "pawn",
        color: "black",
        source: "../Resources/BlackPawn.svg"
    },
    b7 : { 
        piece: "pawn",
        color: "black",
        source: "../Resources/BlackPawn.svg"
    },
    c7 : { 
        piece: "pawn",
        color: "black",
        source: "../Resources/BlackPawn.svg"
    },
    d7 : { 
        piece: "pawn",
        color: "black",
        source: "../Resources/BlackPawn.svg"
    },
    e7 : { 
        piece: "pawn",
        color: "black",
        source: "../Resources/BlackPawn.svg"
    },
    f7 : { 
        piece: "pawn",
        color: "black",
        source: "../Resources/BlackPawn.svg"
    },
    g7 : { 
        piece: "pawn",
        color: "black",
        source: "../Resources/BlackPawn.svg"
    },
    h7 : { 
        piece: "pawn",
        color: "black",
        source: "../Resources/BlackPawn.svg"
    },
    a8 : { 
        piece: "rock",
        color: "black",
        source: "../Resources/BlackRock.svg"
    },
    b8 : { 
        piece: "knight",
        color: "black",
        source: "../Resources/BlackKnight.svg"
    },
    c8 : { 
        piece: "bishop",
        color: "black",
        source: "../Resources/BlackBishop.svg"
    },
    d8 : { 
        piece: "queen",
        color: "black",
        source: "../Resources/BlackQueen.svg"
    },
    e8 : { 
        piece: "king",
        color: "black",
        source: "../Resources/BlackKing.svg"
    },
    f8 : { 
        piece: "bishop",
        color: "black",
        source: "../Resources/BlackBishop.svg"
    },
    g8 : { 
        piece: "knight",
        color: "black",
        source: "../Resources/BlackKnight.svg"
    },
    h8 : { 
        piece: "rock",
        color: "black",
        source: "../Resources/BlackRock.svg"
    }
}

const gameInfo = {
    turn: "white",
    piecesWhiteTook: [],
    piecesBlackTook: []
}

const renderBoard = ( ) => {

    const tiles = document.querySelectorAll(".tile");

    tiles.forEach( tile => {

        const tileToRender = tile.id;
        if(board[tileToRender].piece != "") {
            const pieceToRender = document.createElement("img")
            pieceToRender.src = board[tileToRender].source;
            pieceToRender.classList.add("piece");
            tile.append(pieceToRender);
        }

    })

}

renderBoard();

const convertToXY = (piecePosition) => {

    let y = parseInt(piecePosition.charAt(1));

    switch(piecePosition[0]) {
        case("a"):
            return [1, y];
        case("b"):
            return [2, y];
        case("c"):
            return [3, y];
        case("d"):
            return [4, y];
        case("e"):
            return [5, y];
        case("f"):
            return [6, y];
        case("g"):
            return [7, y];
        case("h"):
            return [8, y];
    }
}

const convertXYtoBoardCoordinates= (XYPositions) => {
  
    let y = XYPositions[1];

    switch(XYPositions[0]) {
        case(1):
            return "a"+y;
        case(2):
            return "b"+y;
        case(3):
            return "c"+y;
        case(4):
            return "d"+y;
        case(5):
            return "e"+y;
        case(6):
            return "f"+y;
        case(7):
            return "g"+y;
        case(8):
            return "h"+y;
    }
}

const pawn = (currentPositionXY, pawnColor) => {
    
    if (pawnColor == "white") {
        const moves = [[currentPositionXY[0]-1, currentPositionXY[1]+1],
                       [currentPositionXY[0], currentPositionXY[1]+1],
                       [currentPositionXY[0]+1, currentPositionXY[1]+1]];

        const regularMoves = moves.filter ( move => (move[0]> 0 && move[0]<9 && move[1]<9) );
        return regularMoves;
    } else {
        const moves = [[currentPositionXY[0]-1, currentPositionXY[1]-1],
                       [currentPositionXY[0], currentPositionXY[1]-1],
                       [currentPositionXY[0]+1, currentPositionXY[1]-1]];

        const regularMoves = moves.filter ( move => (move[0]> 0 && move[0]<9 && move[1]>0) );
        return regularMoves;
    }
}

const movePawn = (currentPosition, pawnColor) => {
    
    const possibleMoves = [];
    const XYposition = convertToXY(currentPosition); 

    const ruleSetMoves = pawn(XYposition ,pawnColor);
    const ruleSetMovesToBoardCoordinates = ruleSetMoves.map (coordinates => convertXYtoBoardCoordinates(coordinates));
    
    const allowedMoves = ruleSetMovesToBoardCoordinates.filter( coordinate => board[coordinate].color != pawnColor);

    return allowedMoves;
}

const knight = (currentPositionXY) => {
    
        const moves = [[currentPositionXY[0]+1, currentPositionXY[1]+2],[currentPositionXY[0]+2, currentPositionXY[1]+1],[currentPositionXY[0]+2, currentPositionXY[1]-1],[currentPositionXY[0]+1, currentPositionXY[1]-2],[currentPositionXY[0]-1, currentPositionXY[1]-2],[currentPositionXY[0]-2, currentPositionXY[1]-1],[currentPositionXY[0]-2, currentPositionXY[1]+1],[currentPositionXY[0]-1, currentPositionXY[1]+2]]
    
        const regularMoves = moves.filter ( move => (move[0]> 0 && move[0]<9 && move[1]>0 && move[1] <9) );
        return regularMoves;
}

const king = (currentPositionXY) => {
    
    const moves = [[currentPositionXY[0], currentPositionXY[1]+1],[currentPositionXY[0]+1, currentPositionXY[1]+1],[currentPositionXY[0]+1, currentPositionXY[1]],[currentPositionXY[0]+1, currentPositionXY[1]-1],[currentPositionXY[0], currentPositionXY[1]-1],[currentPositionXY[0]-1, currentPositionXY[1]-1],[currentPositionXY[0]-1, currentPositionXY[1]],[currentPositionXY[0]-1, currentPositionXY[1]+1]]

    const regularMoves = moves.filter ( move => (move[0]> 0 && move[0]<9 && move[1]>0 && move[1] <9) );
    return regularMoves;
}

const moveKing = (currentPosition, pawnColor) => {
    
    const possibleMoves = [];
    const XYposition = convertToXY(currentPosition); 

    const ruleSetMoves = king(XYposition);
    const ruleSetMovesToBoardCoordinates = ruleSetMoves.map (coordinates => convertXYtoBoardCoordinates(coordinates));
    
    const allowedMoves = ruleSetMovesToBoardCoordinates.filter( coordinate => board[coordinate].color != pawnColor);

    return allowedMoves;
}

const moveKnight = (currentPosition, pawnColor) => {
    
    const possibleMoves = [];
    const XYposition = convertToXY(currentPosition); 

    const ruleSetMoves = knight(XYposition);
    const ruleSetMovesToBoardCoordinates = ruleSetMoves.map (coordinates => convertXYtoBoardCoordinates(coordinates));
    
    const allowedMoves = ruleSetMovesToBoardCoordinates.filter( coordinate => board[coordinate].color != pawnColor);

    return allowedMoves;
}

const moveBishop = (currentPosition, pieceColor) => {
    
    const possibleMoves = [];
    const XYposition = convertToXY(currentPosition); 

    //Moves for North east diagonal
    for( let i=1; i < 8; i++) {
        const X = XYposition[0]+i;
        const Y = XYposition[1]+i;
        if( X > 8 || Y > 8 || X < 1 || Y < 1) {
            break;
        }
        const boardPosition = convertXYtoBoardCoordinates([X,Y]);
        if (board[boardPosition].color == pieceColor) {
            break;
        } else if (board[boardPosition].color == ""){
            possibleMoves.push(boardPosition);
        } else {
            possibleMoves.push(boardPosition);
            break;
        }
    }

    //Moves for South east diagonal
    for( let i=1; i < 8; i++) {
        const X = XYposition[0]+i;
        const Y = (XYposition[1]-i)*-1;
        if( X > 8 || Y > 8 || X < 1 || Y < 1) {
            break;
        }
        const boardPosition = convertXYtoBoardCoordinates([X,Y]);
        if (board[boardPosition].color == pieceColor) {
            break;
        } else if (board[boardPosition].color == ""){
            possibleMoves.push(boardPosition);
        } else {
            possibleMoves.push(boardPosition);
            break;
        }
    }

    //Moves for South west diagonal
    for( let i=1; i < 8; i++) {
        const X = (XYposition[0]-i)*-1;
        const Y = (XYposition[1]-i)*-1;
        if( X > 8 || Y > 8 || X < 1 || Y < 1) {
            break;
        }
        const boardPosition = convertXYtoBoardCoordinates([X,Y]);
        if (board[boardPosition].color == pieceColor) {
            break;
        } else if (board[boardPosition].color == ""){
            possibleMoves.push(boardPosition);
        } else {
            possibleMoves.push(boardPosition);
            break;
        }
    }

    //Moves for North west diagonal
    for( let i=1; i < 8; i++) {
        const X = (XYposition[0]-i)*-1;
        const Y = (XYposition[1]+i)*-1;
        if( X > 8 || Y > 8 || X < 1 || Y < 1) {
            break;
        }
        const boardPosition = convertXYtoBoardCoordinates([X,Y]);
        if (board[boardPosition].color == pieceColor) {
            break;
        } else if (board[boardPosition].color == ""){
            possibleMoves.push(boardPosition);
        } else {
            possibleMoves.push(boardPosition);
            break;
        }
    }

    return possibleMoves;
}

const moveRock = (currentPosition, pieceColor) => {
    
    const possibleMoves = [];
    const XYposition = convertToXY(currentPosition); 

    //North moves
    for( let i=1; i < 8; i++) {
        const X = XYposition[0];
        const Y = XYposition[1]+i;
        if( X > 8 || Y > 8 || X < 1 || Y < 1) {
            break;
        }
        const boardPosition = convertXYtoBoardCoordinates([X,Y]);
        if (board[boardPosition].color == pieceColor) {
            break;
        } else if (board[boardPosition].color == ""){
            possibleMoves.push(boardPosition);
        } else {
            possibleMoves.push(boardPosition);
            break;
        }
    }

    //East moves
    for( let i=1; i < 8; i++) {
        const X = XYposition[0]+i;
        const Y = (XYposition[1]);
        if( X > 8 || Y > 8 || X < 1 || Y < 1) {
            break;
        }
        const boardPosition = convertXYtoBoardCoordinates([X,Y]);
        if (board[boardPosition].color == pieceColor) {
            break;
        } else if (board[boardPosition].color == ""){
            possibleMoves.push(boardPosition);
        } else {
            possibleMoves.push(boardPosition);
            break;
        }
    }

    //South moves
    for( let i=1; i < 8; i++) {
        const X = XYposition[0];
        const Y = (XYposition[1]-i)*-1;
        if( X > 8 || Y > 8 || X < 1 || Y < 1) {
            break;
        }
        const boardPosition = convertXYtoBoardCoordinates([X,Y]);
        if (board[boardPosition].color == pieceColor) {
            break;
        } else if (board[boardPosition].color == ""){
            possibleMoves.push(boardPosition);
        } else {
            possibleMoves.push(boardPosition);
            break;
        }
    }

    //West moves
    for( let i=1; i < 8; i++) {
        const X = (XYposition[0]-i)*-1;
        const Y = XYposition[1];
        if( X > 8 || Y > 8 || X < 1 || Y < 1) {
            break;
        }
        const boardPosition = convertXYtoBoardCoordinates([X,Y]);
        if (board[boardPosition].color == pieceColor) {
            break;
        } else if (board[boardPosition].color == ""){
            possibleMoves.push(boardPosition);
        } else {
            possibleMoves.push(boardPosition);
            break;
        }
    }

    return possibleMoves;
}

const moveQueen = (currentPosition, pieceColor) => {
    
    let moves = moveBishop(currentPosition, pieceColor);
    let moves2 = moveRock(currentPosition, pieceColor);

    return moves.concat(moves2);

}

const renderMoves = (possibleMoves) => {

    const tiles = document.querySelectorAll(".tile");

    for(let i=0; i<tiles.length; i++) {
        if(possibleMoves.includes(tiles[i].id)) {
            tiles[i].classList.add("active");
        }
    }

}

const clearActiveSelectedTiles = () => {

    const activeTiles = document.querySelectorAll(".active");
    const selectedPiece = document.querySelector(".selected");

    activeTiles.forEach( tile => tile.classList.remove("active"));
    selectedPiece.classList.remove("selected");

}

const pieceClicled = (event) => {

    if(document.querySelector(".selected") != null) {
        clearActiveSelectedTiles();
    }
    
    event.target.parentElement.classList.add("selected");
    const currentPosition = event.target.parentElement.id;
    const pieceColor = board[event.target.parentElement.id].color;
    const pieceType = board[event.target.parentElement.id].piece;
    let moves;
  
    switch(pieceType) {
        case("pawn"): 
            moves = movePawn(currentPosition, pieceColor);
            break;
        case("knight"): 
            moves = moveKnight(currentPosition, pieceColor);
            break;
        case("king"): 
            moves = moveKnight(currentPosition, pieceColor);
            break;
        case("bishop"): 
            moves = moveBishop(currentPosition, pieceColor);
            break;
        case("rock"): 
            moves = moveRock(currentPosition, pieceColor);
            break;
        case("queen"): 
            moves = moveQueen(currentPosition, pieceColor);
            break;
    }
    
    renderMoves(moves);
    

}

const tiles = document.querySelectorAll(".tile");
for (let i=0; i<tiles.length; i++) {
    if(board[tiles[i].id].piece != "") {
        tiles[i].addEventListener("click", pieceClicled);
    }
}
