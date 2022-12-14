//Initial state of the board that can be copied when the game has to restart
const resetBoard = {

    a1 : { 
        piece: "rock",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhiteRock.svg"
    },
    b1 : { 
        piece: "knight",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhiteKnight.svg"
    },
    c1 : { 
        piece: "bishop",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhiteBishop.svg"
    },
    d1 : { 
        piece: "queen",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhiteQueen.svg"
    },
    e1 : { 
        piece: "king",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhiteKing.svg"
    },
    f1 : { 
        piece: "bishop",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhiteBishop.svg"
    },
    g1 : { 
        piece: "knight",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhiteKnight.svg"
    },
    h1 : { 
        piece: "rock",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhiteRock.svg"
    },
    a2 : { 
        piece: "pawn",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhitePawn.svg"
    },
    b2 : { 
        piece: "pawn",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhitePawn.svg"
    },
    c2 : { 
        piece: "pawn",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhitePawn.svg"
    },
    d2 : { 
        piece: "pawn",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhitePawn.svg"
    },
    e2 : { 
        piece: "pawn",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhitePawn.svg"
    },
    f2 : { 
        piece: "pawn",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhitePawn.svg"
    },
    g2 : { 
        piece: "pawn",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhitePawn.svg"
    },
    h2 : { 
        piece: "pawn",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhitePawn.svg"
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
        hasMoved : false,
        source: "./Resources/BlackPawn.svg"
    },
    b7 : { 
        piece: "pawn",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackPawn.svg"
    },
    c7 : { 
        piece: "pawn",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackPawn.svg"
    },
    d7 : { 
        piece: "pawn",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackPawn.svg"
    },
    e7 : { 
        piece: "pawn",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackPawn.svg"
    },
    f7 : { 
        piece: "pawn",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackPawn.svg"
    },
    g7 : { 
        piece: "pawn",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackPawn.svg"
    },
    h7 : { 
        piece: "pawn",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackPawn.svg"
    },
    a8 : { 
        piece: "rock",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackRock.svg"
    },
    b8 : { 
        piece: "knight",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackKnight.svg"
    },
    c8 : { 
        piece: "bishop",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackBishop.svg"
    },
    d8 : { 
        piece: "queen",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackQueen.svg"
    },
    e8 : { 
        piece: "king",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackKing.svg"
    },
    f8 : { 
        piece: "bishop",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackBishop.svg"
    },
    g8 : { 
        piece: "knight",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackKnight.svg"
    },
    h8 : { 
        piece: "rock",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackRock.svg"
    },

    //Move piece on empty tile
    updateBoard (tile1, tile2) {
        this[tile2].piece = this[tile1].piece;
        this[tile2].color = this[tile1].color;
        this[tile2].source = this[tile1].source;
        this[tile2].hasMoved = true;
        this[tile1].piece = "";
        this[tile1].color = "";
        this[tile1].source = "";
        },
    //Used during control for check, during which every move for every piece needs to be run to calculate if it cause a check
    updateBoardForCheck (tile1, tile2) {
        let colorTosave = this[tile2].color;
        let pieceTosave = this[tile2].piece;
        let sourceTosave = this[tile2].source;
        this[tile2].piece = this[tile1].piece;
        this[tile2].color = this[tile1].color;
        this[tile2].source = this[tile1].source;
        this[tile2].hasMoved = false;
        this[tile1].piece = pieceTosave;
        this[tile1].color = colorTosave;
        this[tile1].source = sourceTosave; 
        this[tile1].hasMoved= false;
    },
    //Remove a piece from the board. Used for en passant and to promote pawn
    removePiece(tile) {
        this[tile].piece ="";
        this[tile].color ="";
        this[tile].source ="";
        this[tile].hasMoved ="";
    },
    //Add piece on the board, used for pawn promotion
    addPiece(piece, color, source, hasMoved, tile) {
        this[tile].piece = piece;
        this[tile].color = color;
        this[tile].source = source;
        this[tile].hasMoved = hasMoved;
    },

    swapPawn(tile, source, piece) {
        this[tile].source = source;
        this[tile].piece = piece;
    },
    //Used to update board during a castling
    castle(tile) {
        if(tile == "g1") {
            this.g1.color = "white";
            this.g1.piece = "king";
            this.g1.source = "./Resources/WhiteKing.svg"
            this.g1.hasMoved = true;
            this.f1.color = "white";
            this.f1.piece = "rock";
            this.f1.source = "./Resources/WhiteRock.svg"
            this.f1.hasMoved = true;
            this.e1.color = "";
            this.e1.piece = "";
            this.e1.source = ""
            this.e1.hasMoved = true;
            this.h1.color = "";
            this.h1.piece = "";
            this.h1.source = ""
            this.h1.hasMoved = true;
        } else if(tile == "c1") {
            this.c1.color = "white";
            this.c1.piece = "king";
            this.c1.source = "./Resources/WhiteKing.svg"
            this.c1.hasMoved = true;
            this.d1.color = "white";
            this.d1.piece = "rock";
            this.d1.source = "./Resources/WhiteRock.svg"
            this.d1.hasMoved = true;
            this.e1.color = "";
            this.e1.piece = "";
            this.e1.source = ""
            this.e1.hasMoved = true;
            this.a1.color = "";
            this.a1.piece = "";
            this.a1.source = ""
            this.a1.hasMoved = true;
        } else if(tile == "g8") {
            this.g8.color = "black";
            this.g8.piece = "king";
            this.g8.source = "./Resources/BlackKing.svg"
            this.g8.hasMoved = true;
            this.f8.color = "black";
            this.f8.piece = "rock";
            this.f8.source = "./Resources/BlackRock.svg"
            this.f8.hasMoved = true;
            this.e8.color = "";
            this.e8.piece = "";
            this.e8.source = ""
            this.e8.hasMoved = true;
            this.h8.color = "";
            this.h8.piece = "";
            this.h8.source = ""
            this.h8.hasMoved = true;
        } else {
            this.c8.color = "black";
            this.c8.piece = "king";
            this.c8.source = "./Resources/BlackKing.svg"
            this.c8.hasMoved = true;
            this.d8.color = "black";
            this.d8.piece = "rock";
            this.d8.source = "./Resources/BlackRock.svg"
            this.d8.hasMoved = true;
            this.e8.color = "";
            this.e8.piece = "";
            this.e8.source = ""
            this.e8.hasMoved = true;
            this.a8.color = "";
            this.a8.piece = "";
            this.a8.source = ""
            this.a8.hasMoved = true;
        }
    }
}
//Board used for the game
let board = {

    a1 : { 
        piece: "rock",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhiteRock.svg"
    },
    b1 : { 
        piece: "knight",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhiteKnight.svg"
    },
    c1 : { 
        piece: "bishop",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhiteBishop.svg"
    },
    d1 : { 
        piece: "queen",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhiteQueen.svg"
    },
    e1 : { 
        piece: "king",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhiteKing.svg"
    },
    f1 : { 
        piece: "bishop",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhiteBishop.svg"
    },
    g1 : { 
        piece: "knight",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhiteKnight.svg"
    },
    h1 : { 
        piece: "rock",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhiteRock.svg"
    },
    a2 : { 
        piece: "pawn",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhitePawn.svg"
    },
    b2 : { 
        piece: "pawn",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhitePawn.svg"
    },
    c2 : { 
        piece: "pawn",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhitePawn.svg"
    },
    d2 : { 
        piece: "pawn",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhitePawn.svg"
    },
    e2 : { 
        piece: "pawn",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhitePawn.svg"
    },
    f2 : { 
        piece: "pawn",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhitePawn.svg"
    },
    g2 : { 
        piece: "pawn",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhitePawn.svg"
    },
    h2 : { 
        piece: "pawn",
        color: "white",
        hasMoved : false,
        source: "./Resources/WhitePawn.svg"
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
        hasMoved : false,
        source: "./Resources/BlackPawn.svg"
    },
    b7 : { 
        piece: "pawn",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackPawn.svg"
    },
    c7 : { 
        piece: "pawn",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackPawn.svg"
    },
    d7 : { 
        piece: "pawn",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackPawn.svg"
    },
    e7 : { 
        piece: "pawn",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackPawn.svg"
    },
    f7 : { 
        piece: "pawn",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackPawn.svg"
    },
    g7 : { 
        piece: "pawn",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackPawn.svg"
    },
    h7 : { 
        piece: "pawn",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackPawn.svg"
    },
    a8 : { 
        piece: "rock",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackRock.svg"
    },
    b8 : { 
        piece: "knight",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackKnight.svg"
    },
    c8 : { 
        piece: "bishop",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackBishop.svg"
    },
    d8 : { 
        piece: "queen",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackQueen.svg"
    },
    e8 : { 
        piece: "king",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackKing.svg"
    },
    f8 : { 
        piece: "bishop",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackBishop.svg"
    },
    g8 : { 
        piece: "knight",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackKnight.svg"
    },
    h8 : { 
        piece: "rock",
        color: "black",
        hasMoved : false,
        source: "./Resources/BlackRock.svg"
    },


    updateBoard (tile1, tile2) {
        this[tile2].piece = this[tile1].piece;
        this[tile2].color = this[tile1].color;
        this[tile2].source = this[tile1].source;
        this[tile2].hasMoved = true;
        this[tile1].piece = "";
        this[tile1].color = "";
        this[tile1].source = "";
        },

    updateBoardForCheck (tile1, tile2) {
        let colorTosave = this[tile2].color;
        let pieceTosave = this[tile2].piece;
        let sourceTosave = this[tile2].source;
        this[tile2].piece = this[tile1].piece;
        this[tile2].color = this[tile1].color;
        this[tile2].source = this[tile1].source;
        this[tile2].hasMoved = false;
        this[tile1].piece = pieceTosave;
        this[tile1].color = colorTosave;
        this[tile1].source = sourceTosave; 
        this[tile1].hasMoved= false;
    },

    removePiece(tile) {
        this[tile].piece ="";
        this[tile].color ="";
        this[tile].source ="";
        this[tile].hasMoved ="";
    },

    addPiece(piece, color, source, hasMoved, tile) {
        this[tile].piece = piece;
        this[tile].color = color;
        this[tile].source = source;
        this[tile].hasMoved = hasMoved;
    },

    swapPawn(tile, source, piece) {
        this[tile].source = source;
        this[tile].piece = piece;
    },

    castle(tile) {
        if(tile == "g1") {
            this.g1.color = "white";
            this.g1.piece = "king";
            this.g1.source = "./Resources/WhiteKing.svg"
            this.g1.hasMoved = true;
            this.f1.color = "white";
            this.f1.piece = "rock";
            this.f1.source = "./Resources/WhiteRock.svg"
            this.f1.hasMoved = true;
            this.e1.color = "";
            this.e1.piece = "";
            this.e1.source = ""
            this.e1.hasMoved = true;
            this.h1.color = "";
            this.h1.piece = "";
            this.h1.source = ""
            this.h1.hasMoved = true;
        } else if(tile == "c1") {
            this.c1.color = "white";
            this.c1.piece = "king";
            this.c1.source = "./Resources/WhiteKing.svg"
            this.c1.hasMoved = true;
            this.d1.color = "white";
            this.d1.piece = "rock";
            this.d1.source = "./Resources/WhiteRock.svg"
            this.d1.hasMoved = true;
            this.e1.color = "";
            this.e1.piece = "";
            this.e1.source = ""
            this.e1.hasMoved = true;
            this.a1.color = "";
            this.a1.piece = "";
            this.a1.source = ""
            this.a1.hasMoved = true;
        } else if(tile == "g8") {
            this.g8.color = "black";
            this.g8.piece = "king";
            this.g8.source = "./Resources/BlackKing.svg"
            this.g8.hasMoved = true;
            this.f8.color = "black";
            this.f8.piece = "rock";
            this.f8.source = "./Resources/BlackRock.svg"
            this.f8.hasMoved = true;
            this.e8.color = "";
            this.e8.piece = "";
            this.e8.source = ""
            this.e8.hasMoved = true;
            this.h8.color = "";
            this.h8.piece = "";
            this.h8.source = ""
            this.h8.hasMoved = true;
        } else {
            this.c8.color = "black";
            this.c8.piece = "king";
            this.c8.source = "./Resources/BlackKing.svg"
            this.c8.hasMoved = true;
            this.d8.color = "black";
            this.d8.piece = "rock";
            this.d8.source = "./Resources/BlackRock.svg"
            this.d8.hasMoved = true;
            this.e8.color = "";
            this.e8.piece = "";
            this.e8.source = ""
            this.e8.hasMoved = true;
            this.a8.color = "";
            this.a8.piece = "";
            this.a8.source = ""
            this.a8.hasMoved = true;
        }
    }
}
//As per name
const restartGame = () => {
    board = {...resetBoard};

    board = {
        ...board,
        a1:{...board.a1},
        b1:{...board.b1},
        c1:{...board.c1},
        d1:{...board.d1},
        e1:{...board.e1},
        f1:{...board.f1},
        g1:{...board.g1},
        h1:{...board.h1},
        a2:{...board.a2},
        b2:{...board.b2},
        c2:{...board.c2},
        d2:{...board.d2},
        e2:{...board.e2},
        f2:{...board.f2},
        g2:{...board.g2},
        h2:{...board.h2},
        a3:{...board.a3},
        b3:{...board.b3},
        c3:{...board.c3},
        d3:{...board.d3},
        e3:{...board.e3},
        f3:{...board.f3},
        g3:{...board.g3},
        h3:{...board.h3},
        a4:{...board.a4},
        b4:{...board.b4},
        c4:{...board.c4},
        d4:{...board.d4},
        e4:{...board.e4},
        f4:{...board.f4},
        g4:{...board.g4},
        h4:{...board.h4},
        a5:{...board.a5},
        b5:{...board.b5},
        c5:{...board.c5},
        d5:{...board.d5},
        e5:{...board.e5},
        f5:{...board.f5},
        g5:{...board.g5},
        h5:{...board.h5},
        a6:{...board.a6},
        b6:{...board.b6},
        c6:{...board.c6},
        d6:{...board.d6},
        e6:{...board.e6},
        f6:{...board.f6},
        g6:{...board.g6},
        h6:{...board.h6},
        a7:{...board.a7},
        b7:{...board.b7},
        c7:{...board.c7},
        d7:{...board.d7},
        e7:{...board.e7},
        f7:{...board.f7},
        g7:{...board.g7},
        h7:{...board.h7},
        a8:{...board.a8},
        b8:{...board.b8},
        c8:{...board.c8},
        e8:{...board.e8},
        d8:{...board.d8},
        f8:{...board.f8},
        g8:{...board.g8},
        h8:{...board.h8}
    };

    clearBoard();
    renderBoard();
    gameInfo.turn = "white";
    
    const pieceWhiteTook = document.querySelector(".pieceWhiteTook");
    pieceWhiteTook.innerHTML="";
    const pieceBlackTook = document.querySelector(".pieceBlackTook");
    pieceBlackTook.innerHTML="";
    if (document.querySelector(".checked")) {
        const check = document.querySelector(".checked");
        check.classList.remove("checked");
    }
    if (document.querySelector(".active")) {
        const active = document.querySelectorAll(".active");
        active.forEach(element => {
            element.classList.remove("active");
        });
    }
    if (document.querySelector(".selected")) {
        const selected = document.querySelector(".selected");
        selected.classList.remove("selected");
    }
    const display = document.querySelector(".swapPiece");
    display.innerText=""
}
//Currently only used to store moves in order to know when an en passant can be done
const history = [];
//Add each move to the history array. Again atm only used for en passant
const recordHistory = (piece, color, tileTo, tileFrom, wasPieceTaken) => {

    history.push({piece: piece, color: color, from: tileFrom, to: tileTo, tookPiece: wasPieceTaken});

}
//Used to swap image source when a pawn is promote
const swapPiece = [[ "./Resources/WhiteRock.svg",
                    "./Resources/WhiteBishop.svg",
                    "./Resources/WhiteKnight.svg",
                    "./Resources/WhiteQueen.svg"],[
                    "./Resources/BlackRock.svg",
                    "./Resources/BlackBishop.svg",
                    "./Resources/BlackKnight.svg",
                    "./Resources/BlackQueen.svg"]];

//Display which piece was taken by a specific player 
const renderSwap = (color) => {
    const swapArea = document.querySelector(".swapPiece");
    gameInfo.isSwapOn = true;
    const alt=["rock","bishop","knight","queen"];
    let i=0;
    const instruction = document.createElement("p");
    instruction.innerText="Promote pawn ";
    swapArea.append(instruction);
    if(color == "white") {
        swapPiece[0].forEach( address => {
            const pieceToRender = document.createElement("img")
            pieceToRender.src = address;
            pieceToRender.alt = alt[i];
            pieceToRender.classList.add("pieceToSwap");
            pieceToRender.addEventListener("click", pawnForNewPiece);
            swapArea.append(pieceToRender);
            i++;
        });
    } else {
        swapPiece[1].forEach( address => {
            const pieceToRender = document.createElement("img")
            pieceToRender.src = address;
            pieceToRender.alt = alt[i];
            pieceToRender.classList.add("pieceToSwap");
            pieceToRender.addEventListener("click", pawnForNewPiece);
            swapArea.append(pieceToRender);
            i++;
        });
    }
}
//Upgrade pawn when it get to the end of the board
const pawnForNewPiece = (event) => {
    board.swapPawn(document.querySelector(".swapHere").id, event.target.src, event.target.alt);
    clearBoard();
    renderBoard();
    gameInfo.isSwapOn = false;
    if(gameInfo.turn == "white") {
        check("black");
    } else {
        check("white");
    }
    const clearSwapArea = document.querySelectorAll(".pieceToSwap");
    clearSwapArea.forEach( element => {
        element.parentNode.removeChild(element);
    })
    const clearSwapTitle = document.querySelector(".swapPiece");
    clearSwapTitle.removeChild(clearSwapTitle.fir);

    return;
}
//Used to calculate turn and stopping game when a pawn reach the end and has to be promoted
const gameInfo = {
    turn: "white",
    piecesWhiteTook: [],
    piecesBlackTook: [],
    isSwapOn: false,

    updateTurn () {
        if(this.turn == "white") {
            this.turn = "black"
        } else {
            this.turn = "white";
        }
    }
}
//Iterate over the board object and render it in the HTML grid
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
//Clear the HTML grid before a render is necessary
const clearBoard = () => {

    const tiles = document.querySelectorAll(".tile");

    tiles.forEach( tile => { 
        if (tile.childNodes.length > 0 ) {
            tile.removeChild(tile.firstChild);
        }
    });
}

renderBoard(); //Initialize board to start game
//Use to convert the board cordinate (a2,h3, ...) to XY coordinates to calculate pieces movements more easily
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
//Convert XY to board coordinates to be able to render it on the page easily
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
//Store the standard pawn moves
const pawn = (currentPositionXY, pawnColor) => {
    
    let moves=[];

    if (pawnColor == "white") {
        const left = [currentPositionXY[0]-1, currentPositionXY[1]+1];
        const center = [currentPositionXY[0], currentPositionXY[1]+1];
        const right = [currentPositionXY[0]+1, currentPositionXY[1]+1];
        const enPassantRight = [currentPositionXY[0]+1, currentPositionXY[1]+1]
        const enPassantLeft = [currentPositionXY[0]-1, currentPositionXY[1]+1]

        if (left[0]> 0 && left[1]<9) {
            if(board[convertXYtoBoardCoordinates(left)].color == "black") {
                moves.push(left);
            }
        }
        if (center[1]<9) {
            if(board[convertXYtoBoardCoordinates(center)].color == "") {
                moves.push(center);
            }
        }
        if (right[0]< 9 && right[1]<9) {
            if(board[convertXYtoBoardCoordinates(right)].color == "black") {
                moves.push(right);
            }
        }
        //En passant calculation
        let controlObj = {piece: "pawn", color:"black", from: convertXYtoBoardCoordinates([currentPositionXY[0]+1,currentPositionXY[1]+2]), to: convertXYtoBoardCoordinates([currentPositionXY[0]+1,currentPositionXY[1]]), tookPiece: false};
        if(currentPositionXY[1] == 5 && JSON.stringify(history[history.length-1]) === JSON.stringify(controlObj)){
            moves.push(enPassantRight);
        }
        controlObj = {piece: "pawn", color:"black", from: convertXYtoBoardCoordinates([currentPositionXY[0]-1,currentPositionXY[1]+2]), to: convertXYtoBoardCoordinates([currentPositionXY[0]-1,currentPositionXY[1]]), tookPiece: false};
        if(currentPositionXY[1] == 5 && JSON.stringify(history[history.length-1]) === JSON.stringify(controlObj)) {
            moves.push(enPassantLeft);
        }

        return moves;
    } else {
        const left = [currentPositionXY[0]-1, currentPositionXY[1]-1];
        const center = [currentPositionXY[0], currentPositionXY[1]-1];
        const right = [currentPositionXY[0]+1, currentPositionXY[1]-1];
        const enPassantRight = [currentPositionXY[0]+1, currentPositionXY[1]-1]
        const enPassantLeft = [currentPositionXY[0]-1, currentPositionXY[1]-1]

        if (left[0]> 0 && left[1]>0) {
            if(board[convertXYtoBoardCoordinates(left)].color == "white") {
                moves.push(left);
            }
        }
        if (center[1]>0) {
            if(board[convertXYtoBoardCoordinates(center)].color == "") {
                moves.push(center);
            }
        }
        if (right[0]< 9 && right[1]>0) {
            if(board[convertXYtoBoardCoordinates(right)].color == "white") {
                moves.push(right);
            }
        }
        //En passant calculation
        let controlObj = {piece: "pawn", color:"white", from: convertXYtoBoardCoordinates([currentPositionXY[0]+1,currentPositionXY[1]-2]), to: convertXYtoBoardCoordinates([currentPositionXY[0]+1,currentPositionXY[1]]), tookPiece: false};
        if(currentPositionXY[1] == 4 && JSON.stringify(history[history.length-1]) === JSON.stringify(controlObj)){
            moves.push(enPassantRight);
        }
        controlObj = {piece: "pawn", color:"white", from: convertXYtoBoardCoordinates([currentPositionXY[0]-1,currentPositionXY[1]-2]), to: convertXYtoBoardCoordinates([currentPositionXY[0]-1,currentPositionXY[1]]), tookPiece: false};
        if(currentPositionXY[1] == 4 && JSON.stringify(history[history.length-1]) === JSON.stringify(controlObj)) {
            moves.push(enPassantLeft);
        }
        return moves;
    }
}
//Calculate which of the standard pawn moves can be performed according to the current state of the board
const movePawn = (currentPosition, pawnColor) => {
    
    const XYposition = convertToXY(currentPosition); 

    const ruleSetMoves = pawn(XYposition ,pawnColor);
    const ruleSetMovesToBoardCoordinates = ruleSetMoves.map (coordinates => convertXYtoBoardCoordinates(coordinates));
    
    const allowedMoves = ruleSetMovesToBoardCoordinates.filter( coordinate => board[coordinate].color != pawnColor);
    if(board[currentPosition].hasMoved == false) {
        if(pawnColor == "white") {
            const doubleStep = (convertXYtoBoardCoordinates([XYposition[0],XYposition[1]+2]));
            if(board[doubleStep].color == "") {
                allowedMoves.push(doubleStep);
            }
        } else {
            const doubleStep = (convertXYtoBoardCoordinates([XYposition[0],XYposition[1]-2]));
            if(board[doubleStep].color == "") {
                allowedMoves.push(doubleStep);
            }
        }
    }
    
    return allowedMoves;
}
//Standard moves of the knigh
const knight = (currentPositionXY) => {
    
        const moves = [[currentPositionXY[0]+1, currentPositionXY[1]+2],[currentPositionXY[0]+2, currentPositionXY[1]+1],[currentPositionXY[0]+2, currentPositionXY[1]-1],[currentPositionXY[0]+1, currentPositionXY[1]-2],[currentPositionXY[0]-1, currentPositionXY[1]-2],[currentPositionXY[0]-2, currentPositionXY[1]-1],[currentPositionXY[0]-2, currentPositionXY[1]+1],[currentPositionXY[0]-1, currentPositionXY[1]+2]]
    
        const regularMoves = moves.filter ( move => (move[0]> 0 && move[0]<9 && move[1]>0 && move[1] <9) );
        return regularMoves;
}
//Standard moves for the king 
const king = (currentPositionXY) => {
    
    const moves = [[currentPositionXY[0], currentPositionXY[1]+1],[currentPositionXY[0]+1, currentPositionXY[1]+1],[currentPositionXY[0]+1, currentPositionXY[1]],[currentPositionXY[0]+1, currentPositionXY[1]-1],[currentPositionXY[0], currentPositionXY[1]-1],[currentPositionXY[0]-1, currentPositionXY[1]-1],[currentPositionXY[0]-1, currentPositionXY[1]],[currentPositionXY[0]-1, currentPositionXY[1]+1]]

    const regularMoves = moves.filter ( move => (move[0]> 0 && move[0]<9 && move[1]>0 && move[1] <9) );
    return regularMoves;
}
//Given a piece color calculate all the possible moves that a player can perform. Use for check and checkmate controls
const findOpponentAllPossibleMoves = (color) => {

    if(color == "black") {

    const whitePiecesPositions = findPiecesOfSpecificColor("white");
        
    let whitePossibleMoves = [];

    whitePiecesPositions.forEach ( element => {
        switch(Object.values(element)[0]) {
            case("pawn"):
                whitePossibleMoves=whitePossibleMoves.concat(movePawn(Object.keys(element)[0], "white"));
                break;
            case("rock"):
                whitePossibleMoves=whitePossibleMoves.concat(moveRock(Object.keys(element)[0], "white"));
                break;
            case("bishop"):
                whitePossibleMoves=whitePossibleMoves.concat(moveBishop(Object.keys(element)[0], "white"));
                break;
            case("knight"):
                whitePossibleMoves=whitePossibleMoves.concat(moveKnight(Object.keys(element)[0], "white"));
                break;
            case("queen"):
                whitePossibleMoves=whitePossibleMoves.concat(moveQueen(Object.keys(element)[0], "white"));
                break;
        }
    });
    return whitePossibleMoves;
    } else {

        const blackPiecesPositions = findPiecesOfSpecificColor("black");
            
        let blackPossibleMoves = [];

        blackPiecesPositions.forEach ( element => {
            switch(Object.values(element)[0]) {
                case("pawn"):
                    blackPossibleMoves=blackPossibleMoves.concat(movePawn(Object.keys(element)[0], "black"));
                    break;
                case("rock"):
                    blackPossibleMoves=blackPossibleMoves.concat(moveRock(Object.keys(element)[0], "black"));
                    break;
                case("bishop"):
                    blackPossibleMoves=blackPossibleMoves.concat(moveBishop(Object.keys(element)[0], "black"));
                    break;
                case("knight"):
                    blackPossibleMoves=blackPossibleMoves.concat(moveKnight(Object.keys(element)[0], "black"));
                    break;
                case("queen"):
                    blackPossibleMoves=blackPossibleMoves.concat(moveQueen(Object.keys(element)[0], "black"));
                    break;
            }
        });
        return blackPossibleMoves;
    }

}
//Calculate king moves according to current board state
const moveKing = (currentPosition, pawnColor) => {
   
    const XYposition = convertToXY(currentPosition); 

    const ruleSetMoves = king(XYposition);
    const ruleSetMovesToBoardCoordinates = ruleSetMoves.map (coordinates => convertXYtoBoardCoordinates(coordinates));
    const isChecked = document.querySelector(".checked");

    const opponentMoves = findOpponentAllPossibleMoves(pawnColor);
     //Castling on the right white
     if (opponentMoves.includes("f1") == false && opponentMoves.includes("g1") == false && board.f1.color == "" && board.g1.color == "" && board.e1.hasMoved == false && board.h1.hasMoved == false && isChecked == null) {
        const castleTile = document.getElementById("g1");
        castleTile.classList.add("castleHere");
        ruleSetMovesToBoardCoordinates.push("g1");
     }
     //Castling on the left white
     if (opponentMoves.includes("c1") == false && opponentMoves.includes("d1") == false && board.b1.color == "" && board.c1.color == "" && board.d1.color == "" && board.e1.hasMoved == false && board.a1.hasMoved == false && isChecked == null) {
        const castleTile = document.getElementById("c1");
        castleTile.classList.add("castleHere");
        ruleSetMovesToBoardCoordinates.push("c1");
     }
    //Castling on the right black
     if (opponentMoves.includes("f8") == false && opponentMoves.includes("g8") == false && board.f8.color == "" && board.g8.color == "" && board.e8.hasMoved == false && board.h8.hasMoved == false && isChecked == null) {
        const castleTile = document.getElementById("g8");
        castleTile.classList.add("castleHere");
        ruleSetMovesToBoardCoordinates.push("g8");
     }
     //Castling on the left black
     if (opponentMoves.includes("c8") == false && opponentMoves.includes("d8") == false && board.b8.color == "" && board.c8.color == "" && board.d8.color == "" && board.e8.hasMoved == false && board.a8.hasMoved == false && isChecked == null) {
        const castleTile = document.getElementById("c8");
        castleTile.classList.add("castleHere");
        ruleSetMovesToBoardCoordinates.push("c8");
     }

    const allowedMoves = ruleSetMovesToBoardCoordinates.filter( coordinate => board[coordinate].color != pawnColor);


    return allowedMoves;
}

//Calculate knight moves according to current board state
const moveKnight = (currentPosition, pawnColor) => {
    
    const XYposition = convertToXY(currentPosition); 

    const ruleSetMoves = knight(XYposition);
    const ruleSetMovesToBoardCoordinates = ruleSetMoves.map (coordinates => convertXYtoBoardCoordinates(coordinates));
    
    const allowedMoves = ruleSetMovesToBoardCoordinates.filter( coordinate => board[coordinate].color != pawnColor);

    return allowedMoves;
}
//Store bishop stamdard moves and calculate which ones are regular according to current board state
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
        const Y = (XYposition[1]-i);
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
        const X = (XYposition[0]-i);
        const Y = (XYposition[1]-i);
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
        const X = (XYposition[0]-i);
        const Y = (XYposition[1]+i);
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
//Store rock stamdard moves and calculate which ones are regular according to current board state
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
        const Y = (XYposition[1]-i);
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
        const X = (XYposition[0]-i);
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
//Just calls moveRock and moveBishop to calculate regular moves
const moveQueen = (currentPosition, pieceColor) => {
    
    let moves = moveBishop(currentPosition, pieceColor);
    let moves2 = moveRock(currentPosition, pieceColor);

    return moves.concat(moves2);

}
//When the regular moves for a selected piece are calculate the function display them on the board
const renderMoves = (possibleMoves) => {

    const tiles = document.querySelectorAll(".tile");
    
    for(let i=0; i<tiles.length; i++) {
        if(possibleMoves.includes(tiles[i].id)) {
            const classes = tiles[i].class
            tiles[i].classList.add("active");
        }
    }

}
//When a piece has moved or another one is selected clear the previous piece moves which were rendered on the board
const clearActiveSelectedTiles = () => {

    const activeTiles = document.querySelectorAll(".active");
    const selectedPiece = document.querySelector(".selected");

    activeTiles.forEach( tile => tile.classList.remove("active"));
    selectedPiece.classList.remove("selected");
    if(document.querySelector(".castleHere")) {
        const castle = document.querySelector(".castleHere");
        castle.classList.remove("castleHere");
    }

}
//Display which pieces were taken my a player in the player section
const renderTakenPieces = (piece, color) => {
    
    let renderingDiv;
    const pieceToRender = document.createElement("img");
    const card = document.createElement("div");
    const pieceName = piece.charAt(0).toUpperCase() + piece.slice(1);

    if (color == "white") {
        renderingDiv = document.querySelector(".pieceBlackTook");
        card.classList.add("cardWhite");
        pieceToRender.src = `./Resources/White${pieceName}.svg`;
        pieceToRender.classList.add("pieceTaken");
        card.append(pieceToRender)
        renderingDiv.append(card);
    } else {
        renderingDiv = document.querySelector(".pieceWhiteTook");
        card.classList.add("cardBlack");
        pieceToRender.src = `./Resources/Black${pieceName}.svg`;
        pieceToRender.classList.add("pieceTaken");
        card.append(pieceToRender)
        renderingDiv.append(card);
    }
}
//Given a color find where that specific king is on the board. Use for check and checkmate
const findKingPosition = (color) => {

    for (key in board) {
        if(board[key].piece == "king" && board[key].color == color) {
            return key;
        }
    }
}
//Given a color find all the pieces of that color on the board. Used to calculate check, checkmate and avoid that a piece move if it cause check
const findPiecesOfSpecificColor = (color) => {

	const piecesArr = [];

	for (keys in board) {
  
  	if(board[keys].color == color) {
    		piecesArr.push({[keys] : board[keys].piece});
    }
  }
  return piecesArr;
}
//Calculate if a player is another check after the previous player has moved
const check = (colorThatMovesLast) => {
    
    if(colorThatMovesLast == "white") {

        const blackKingPosition = findKingPosition("black");
        const whitePiecesPositions = findPiecesOfSpecificColor("white");
        
        let whitePossibleMoves = [];

        whitePiecesPositions.forEach ( element => {
            switch(Object.values(element)[0]) {
                case("pawn"):
                    whitePossibleMoves=whitePossibleMoves.concat(movePawn(Object.keys(element)[0], "white"));
                    break;
                case("rock"):
                    whitePossibleMoves=whitePossibleMoves.concat(moveRock(Object.keys(element)[0], "white"));
                    break;
                case("bishop"):
                    whitePossibleMoves=whitePossibleMoves.concat(moveBishop(Object.keys(element)[0], "white"));
                    break;
                case("knight"):
                    whitePossibleMoves=whitePossibleMoves.concat(moveKnight(Object.keys(element)[0], "white"));
                    break;
                case("queen"):
                    whitePossibleMoves=whitePossibleMoves.concat(moveQueen(Object.keys(element)[0], "white"));
                    break;
            }
        });
        if(whitePossibleMoves.includes(blackKingPosition)) {
            const kingTile = document.getElementById(blackKingPosition);
            kingTile.classList.add("checked");
            return true;
        }
    } else {

        const whiteKingPosition = findKingPosition("white");
        const blackPiecesPositions = findPiecesOfSpecificColor("black");
        
        let blackPossibleMoves = [];

        blackPiecesPositions.forEach ( element => {
            switch(Object.values(element)[0]) {
                case("pawn"):
                    blackPossibleMoves=blackPossibleMoves.concat(movePawn(Object.keys(element)[0], "black"));
                    break;
                case("rock"):
                    blackPossibleMoves=blackPossibleMoves.concat(moveRock(Object.keys(element)[0], "black"));
                    break;
                case("bishop"):
                    blackPossibleMoves=blackPossibleMoves.concat(moveBishop(Object.keys(element)[0], "black"));
                    break;
                case("knight"):
                    blackPossibleMoves=blackPossibleMoves.concat(moveKnight(Object.keys(element)[0], "black"));
                    break;
                case("queen"):
                    blackPossibleMoves=blackPossibleMoves.concat(moveQueen(Object.keys(element)[0], "black"));
                    break;
            }
        });
        if(blackPossibleMoves.includes(whiteKingPosition)) {
            const kingTile = document.getElementById(whiteKingPosition);
            kingTile.classList.add("checked");
            return true;
        }
    }

}
//Avoid a piece can be moved if it cause the player king to be checked
const checkIfMoved = (currentPosition, colorPiece, arrayOfMoves) => {
   
    const movesThatCauseCheck = [];
    const movesToCheck = [...arrayOfMoves];

    arrayOfMoves.forEach ( move => {  
        const tempPiece = board[move].piece;
        const tempColor = board[move].color;
        const tempSource = board[move].source;
        const tempStatus = board[move].hasMoved;
        let hasTakenPiece = false;
        if(board[move].color != colorPiece && board[move].color != "") {
            board.updateBoard(currentPosition, move);
            hasTakenPiece = true;
        } else {
            board.updateBoardForCheck(currentPosition, move);
        }
        const opponentMoves = findOpponentAllPossibleMoves(colorPiece);
        const kingPosition = findKingPosition(colorPiece);
        if(opponentMoves.includes(kingPosition)) {
            movesThatCauseCheck.push(move);
        }
        if(hasTakenPiece == true) {
            board.updateBoard(move, currentPosition);
            board.addPiece(tempPiece,tempColor,tempSource,tempStatus,move);
        } else {
            board.updateBoardForCheck(move, currentPosition);
        }
    });

    for(let i=0; i< movesThatCauseCheck.length; i++) {
        if((movesToCheck.includes(movesThatCauseCheck[i]))) {
            for(let y=0; y<movesToCheck.length;y++) {
                if(movesToCheck[y] == movesThatCauseCheck[i]) {
                    movesToCheck.splice(y,1);
                    y=0;
                }   
            }
        }
    }

    return movesToCheck;
}
//Cancel the rendered check if it has been stopped
const clearChecked = () => {

    const checkedKing = document.querySelector(".checked");
    if (checkedKing == null) {
        return;
    }

    checkedKing.classList.remove("checked");
    return;
}

//Calculate if a pawn reached the end of the board
const pawnEndline = (piece, color, movedOnTile) => {

    if(piece != "pawn") {
        return;
    }

    if(convertToXY(movedOnTile)[1] == 8 && color == "white") {
        const finalTile = document.getElementById(movedOnTile);
        finalTile.classList.add("swapHere");
        renderSwap("white");
        return;
    } 

    if(convertToXY(movedOnTile)[1] == 1 && color == "black") {
        const finalTile = document.getElementById(movedOnTile);
        finalTile.classList.add("swapHere");
        renderSwap("black");
        return;
    } 
}
//Calculate checkmate
const checkMate = (colorToCheck) => {
    
    const allPieces = findPiecesOfSpecificColor(colorToCheck);

    let possibleMoves = [];
    let temp;

    allPieces.forEach( piecePosition => { 
        switch(Object.values(piecePosition)[0]) {
            case("pawn"):
                temp = (checkIfMoved(Object.keys(piecePosition)[0], colorToCheck, movePawn(Object.keys(piecePosition)[0], colorToCheck)));
                possibleMoves = possibleMoves.concat(temp);
                break;
            case("rock"):
                temp = (checkIfMoved(Object.keys(piecePosition)[0], colorToCheck, moveRock(Object.keys(piecePosition)[0], colorToCheck)));
                possibleMoves = possibleMoves.concat(temp);
                break;
            case("bishop"):
                temp = (checkIfMoved(Object.keys(piecePosition)[0], colorToCheck, moveBishop(Object.keys(piecePosition)[0], colorToCheck)));
                possibleMoves = possibleMoves.concat(temp);
                break;
            case("knight"):
                temp = (checkIfMoved(Object.keys(piecePosition)[0], colorToCheck, moveKnight(Object.keys(piecePosition)[0], colorToCheck)));
                possibleMoves = possibleMoves.concat(temp);
                break;
            case("queen"):
                temp = (checkIfMoved(Object.keys(piecePosition)[0], colorToCheck, moveQueen(Object.keys(piecePosition)[0], colorToCheck)));
                possibleMoves = possibleMoves.concat(temp);
                break;
            case("king"):
                temp = (checkIfMoved(Object.keys(piecePosition)[0], colorToCheck, moveKing(Object.keys(piecePosition)[0], colorToCheck)));
                possibleMoves = possibleMoves.concat(temp);
                break;
        }
    });
    if(possibleMoves.length<1) {
        const display = document.querySelector(".swapPiece");
        display.innerText = "Checkmate";
    }
}
//Main function that fire after each piece has been clicked
const pieceClicled = (event) => {

    if(gameInfo.isSwapOn == true) {
        return;
    }

    //Castling
    if(event.target.classList.contains("castleHere")) { 
        const colorThatMoved = board[document.querySelector(".selected").id].color;
        recordHistory(board[document.querySelector(".selected").id].piece,board[document.querySelector(".selected").id].color, event.target.id, document.querySelector(".selected").id, false);
        board.castle(event.target.id);
        clearBoard();
        renderBoard();
        event.target.classList.remove("castleHere");
        gameInfo.updateTurn();
        clearChecked();
        check(colorThatMoved);
        if(colorThatMoved == "white") {
            checkMate("black");
        } else {
            checkMate("white");
        }
        clearActiveSelectedTiles();
        return;
    } 
    //En passant
    if(event.target.classList.contains("active") && board[document.querySelector(".selected").id].piece == "pawn" && convertToXY(event.target.id)[0] != convertToXY(document.querySelector(".selected").id)[0]) {
        const colorThatMoved = board[document.querySelector(".selected").id].color;
        recordHistory(board[document.querySelector(".selected").id].piece,board[document.querySelector(".selected").id].color,event.target.id, document.querySelector(".selected").id, false);
        pawnEndline(board[document.querySelector(".selected").id].piece, board[document.querySelector(".selected").id].color,event.target.id );
        board.updateBoard(document.querySelector(".selected").id, event.target.id);
        if(colorThatMoved == "white") {
            const targetTile = convertToXY(event.target.id);
            board.removePiece(convertXYtoBoardCoordinates([targetTile[0], targetTile[1]-1]));
        } else {
            const targetTile = convertToXY(event.target.id);
            board.removePiece(convertXYtoBoardCoordinates([targetTile[0], targetTile[1]+1]));
        }
        clearBoard();
        renderBoard();
        gameInfo.updateTurn();
        clearChecked();
        check(colorThatMoved);
        if(colorThatMoved == "white") {
            checkMate("black");
        } else {
            checkMate("white");
        }
        clearActiveSelectedTiles();
    
         return;
    }
    //Moved on empty tile
    if(event.target.classList.contains("active")) {
        const colorThatMoved = board[document.querySelector(".selected").id].color;
        recordHistory(board[document.querySelector(".selected").id].piece,board[document.querySelector(".selected").id].color, event.target.id, document.querySelector(".selected").id, false);
        pawnEndline(board[document.querySelector(".selected").id].piece, board[document.querySelector(".selected").id].color, event.target.id );
        board.updateBoard(document.querySelector(".selected").id, event.target.id);
        clearBoard();
        renderBoard();
        gameInfo.updateTurn();
        clearChecked();
        check(colorThatMoved);
        if(colorThatMoved == "white") {
            checkMate("black");
        } else {
            checkMate("white");
        }
        clearActiveSelectedTiles();

        return;
    }
    //Move piece and take another piece
    if(event.target.parentElement.classList.contains("active")) {
        recordHistory(board[document.querySelector(".selected").id].piece,board[document.querySelector(".selected").id].color, event.target.parentElement.id, document.querySelector(".selected").id, true);
        pawnEndline(board[document.querySelector(".selected").id].piece, board[document.querySelector(".selected").id].color, event.target.parentElement.id );
        const colorThatMoved = board[document.querySelector(".selected").id].color;
        renderTakenPieces(board[event.target.parentElement.id].piece,board[event.target.parentElement.id].color);
        board.updateBoard(document.querySelector(".selected").id, event.target.parentElement.id);
        clearBoard();
        renderBoard();
        gameInfo.updateTurn();
        clearChecked();
        check(colorThatMoved);
        if(colorThatMoved == "white") {
            checkMate("black");
        } else {
            checkMate("white");
        }
        clearActiveSelectedTiles();
        return;
    }
    //Clear tiles that were made active with previous click
    if(document.querySelector(".selected") != null){
        clearActiveSelectedTiles();
    }

    const currentPosition = event.target.parentElement.id;
    const pieceColor = board[event.target.parentElement.id].color;
    const pieceType = board[event.target.parentElement.id].piece;

    //If piece is clicke mades it "selected" so it can be moved. Else stop function if empty tile was clicked
    if (event.target.parentElement.id != "") {
        event.target.parentElement.classList.add("selected");
    } else {
        return;
    }

    if(pieceColor != gameInfo.turn) {
        return;
    }

    let moves;
  
    switch(pieceType) {
        case("pawn"): 
            moves = movePawn(currentPosition, pieceColor);
            break;
        case("knight"): 
            moves = moveKnight(currentPosition, pieceColor);
            break;
        case("king"): 
            moves = moveKing(currentPosition, pieceColor);
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
    
    const movesThatDontCauseCheck = checkIfMoved(currentPosition, pieceColor, moves);
    renderMoves(movesThatDontCauseCheck);
    

}
//Attach event listenr to every tile on the board
const tiles = document.querySelectorAll(".tile");
for (let i=0; i<tiles.length; i++) {
        tiles[i].addEventListener("click", pieceClicled);
}
//Restart button
const restart = document.querySelector(".restart");
restart.addEventListener("click", restartGame);
