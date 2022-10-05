

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
        piece: "pawn",
        color: "white",
        source: "../Resources/WhitePawn.svg"
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
