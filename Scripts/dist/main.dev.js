"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Initial state of the board that can be copied when the game has to restart
var resetBoard = {
  a1: {
    piece: "rock",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhiteRock.svg"
  },
  b1: {
    piece: "knight",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhiteKnight.svg"
  },
  c1: {
    piece: "bishop",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhiteBishop.svg"
  },
  d1: {
    piece: "queen",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhiteQueen.svg"
  },
  e1: {
    piece: "king",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhiteKing.svg"
  },
  f1: {
    piece: "bishop",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhiteBishop.svg"
  },
  g1: {
    piece: "knight",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhiteKnight.svg"
  },
  h1: {
    piece: "rock",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhiteRock.svg"
  },
  a2: {
    piece: "pawn",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhitePawn.svg"
  },
  b2: {
    piece: "pawn",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhitePawn.svg"
  },
  c2: {
    piece: "pawn",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhitePawn.svg"
  },
  d2: {
    piece: "pawn",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhitePawn.svg"
  },
  e2: {
    piece: "pawn",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhitePawn.svg"
  },
  f2: {
    piece: "pawn",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhitePawn.svg"
  },
  g2: {
    piece: "pawn",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhitePawn.svg"
  },
  h2: {
    piece: "pawn",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhitePawn.svg"
  },
  a3: {
    piece: "",
    color: ""
  },
  b3: {
    piece: "",
    color: ""
  },
  c3: {
    piece: "",
    color: ""
  },
  d3: {
    piece: "",
    color: ""
  },
  e3: {
    piece: "",
    color: ""
  },
  f3: {
    piece: "",
    color: ""
  },
  g3: {
    piece: "",
    color: ""
  },
  h3: {
    piece: "",
    color: ""
  },
  a4: {
    piece: "",
    color: ""
  },
  b4: {
    piece: "",
    color: ""
  },
  c4: {
    piece: "",
    color: ""
  },
  d4: {
    piece: "",
    color: ""
  },
  e4: {
    piece: "",
    color: ""
  },
  f4: {
    piece: "",
    color: ""
  },
  g4: {
    piece: "",
    color: ""
  },
  h4: {
    piece: "",
    color: ""
  },
  a5: {
    piece: "",
    color: ""
  },
  b5: {
    piece: "",
    color: ""
  },
  c5: {
    piece: "",
    color: ""
  },
  d5: {
    piece: "",
    color: ""
  },
  e5: {
    piece: "",
    color: ""
  },
  f5: {
    piece: "",
    color: ""
  },
  g5: {
    piece: "",
    color: ""
  },
  h5: {
    piece: "",
    color: ""
  },
  a6: {
    piece: "",
    color: ""
  },
  b6: {
    piece: "",
    color: ""
  },
  c6: {
    piece: "",
    color: ""
  },
  d6: {
    piece: "",
    color: ""
  },
  e6: {
    piece: "",
    color: ""
  },
  f6: {
    piece: "",
    color: ""
  },
  g6: {
    piece: "",
    color: ""
  },
  h6: {
    piece: "",
    color: ""
  },
  a7: {
    piece: "pawn",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackPawn.svg"
  },
  b7: {
    piece: "pawn",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackPawn.svg"
  },
  c7: {
    piece: "pawn",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackPawn.svg"
  },
  d7: {
    piece: "pawn",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackPawn.svg"
  },
  e7: {
    piece: "pawn",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackPawn.svg"
  },
  f7: {
    piece: "pawn",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackPawn.svg"
  },
  g7: {
    piece: "pawn",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackPawn.svg"
  },
  h7: {
    piece: "pawn",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackPawn.svg"
  },
  a8: {
    piece: "rock",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackRock.svg"
  },
  b8: {
    piece: "knight",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackKnight.svg"
  },
  c8: {
    piece: "bishop",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackBishop.svg"
  },
  d8: {
    piece: "queen",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackQueen.svg"
  },
  e8: {
    piece: "king",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackKing.svg"
  },
  f8: {
    piece: "bishop",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackBishop.svg"
  },
  g8: {
    piece: "knight",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackKnight.svg"
  },
  h8: {
    piece: "rock",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackRock.svg"
  },
  //Move piece on empty tile
  updateBoard: function updateBoard(tile1, tile2) {
    this[tile2].piece = this[tile1].piece;
    this[tile2].color = this[tile1].color;
    this[tile2].source = this[tile1].source;
    this[tile2].hasMoved = true;
    this[tile1].piece = "";
    this[tile1].color = "";
    this[tile1].source = "";
  },
  //Used during control for check, during which every move for every piece needs to be run to calculate if it cause a check
  updateBoardForCheck: function updateBoardForCheck(tile1, tile2) {
    var colorTosave = this[tile2].color;
    var pieceTosave = this[tile2].piece;
    var sourceTosave = this[tile2].source;
    this[tile2].piece = this[tile1].piece;
    this[tile2].color = this[tile1].color;
    this[tile2].source = this[tile1].source;
    this[tile2].hasMoved = false;
    this[tile1].piece = pieceTosave;
    this[tile1].color = colorTosave;
    this[tile1].source = sourceTosave;
    this[tile1].hasMoved = false;
  },
  //Remove a piece from the board. Used for en passant and to promote pawn
  removePiece: function removePiece(tile) {
    this[tile].piece = "";
    this[tile].color = "";
    this[tile].source = "";
    this[tile].hasMoved = "";
  },
  //Add piece on the board, used for pawn promotion
  addPiece: function addPiece(piece, color, source, hasMoved, tile) {
    this[tile].piece = piece;
    this[tile].color = color;
    this[tile].source = source;
    this[tile].hasMoved = hasMoved;
  },
  swapPawn: function swapPawn(tile, source, piece) {
    this[tile].source = source;
    this[tile].piece = piece;
  },
  //Used to update board during a castling
  castle: function castle(tile) {
    if (tile == "g1") {
      this.g1.color = "white";
      this.g1.piece = "king";
      this.g1.source = "./Resources/WhiteKing.svg";
      this.g1.hasMoved = true;
      this.f1.color = "white";
      this.f1.piece = "rock";
      this.f1.source = "./Resources/WhiteRock.svg";
      this.f1.hasMoved = true;
      this.e1.color = "";
      this.e1.piece = "";
      this.e1.source = "";
      this.e1.hasMoved = true;
      this.h1.color = "";
      this.h1.piece = "";
      this.h1.source = "";
      this.h1.hasMoved = true;
    } else if (tile == "c1") {
      this.c1.color = "white";
      this.c1.piece = "king";
      this.c1.source = "./Resources/WhiteKing.svg";
      this.c1.hasMoved = true;
      this.d1.color = "white";
      this.d1.piece = "rock";
      this.d1.source = "./Resources/WhiteRock.svg";
      this.d1.hasMoved = true;
      this.e1.color = "";
      this.e1.piece = "";
      this.e1.source = "";
      this.e1.hasMoved = true;
      this.a1.color = "";
      this.a1.piece = "";
      this.a1.source = "";
      this.a1.hasMoved = true;
    } else if (tile == "g8") {
      this.g8.color = "black";
      this.g8.piece = "king";
      this.g8.source = "./Resources/BlackKing.svg";
      this.g8.hasMoved = true;
      this.f8.color = "black";
      this.f8.piece = "rock";
      this.f8.source = "./Resources/BlackRock.svg";
      this.f8.hasMoved = true;
      this.e8.color = "";
      this.e8.piece = "";
      this.e8.source = "";
      this.e8.hasMoved = true;
      this.h8.color = "";
      this.h8.piece = "";
      this.h8.source = "";
      this.h8.hasMoved = true;
    } else {
      this.c8.color = "black";
      this.c8.piece = "king";
      this.c8.source = "./Resources/BlackKing.svg";
      this.c8.hasMoved = true;
      this.d8.color = "black";
      this.d8.piece = "rock";
      this.d8.source = "./Resources/BlackRock.svg";
      this.d8.hasMoved = true;
      this.e8.color = "";
      this.e8.piece = "";
      this.e8.source = "";
      this.e8.hasMoved = true;
      this.a8.color = "";
      this.a8.piece = "";
      this.a8.source = "";
      this.a8.hasMoved = true;
    }
  }
}; //Board used for the game

var board = {
  a1: {
    piece: "rock",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhiteRock.svg"
  },
  b1: {
    piece: "knight",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhiteKnight.svg"
  },
  c1: {
    piece: "bishop",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhiteBishop.svg"
  },
  d1: {
    piece: "queen",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhiteQueen.svg"
  },
  e1: {
    piece: "king",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhiteKing.svg"
  },
  f1: {
    piece: "bishop",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhiteBishop.svg"
  },
  g1: {
    piece: "knight",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhiteKnight.svg"
  },
  h1: {
    piece: "rock",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhiteRock.svg"
  },
  a2: {
    piece: "pawn",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhitePawn.svg"
  },
  b2: {
    piece: "pawn",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhitePawn.svg"
  },
  c2: {
    piece: "pawn",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhitePawn.svg"
  },
  d2: {
    piece: "pawn",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhitePawn.svg"
  },
  e2: {
    piece: "pawn",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhitePawn.svg"
  },
  f2: {
    piece: "pawn",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhitePawn.svg"
  },
  g2: {
    piece: "pawn",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhitePawn.svg"
  },
  h2: {
    piece: "pawn",
    color: "white",
    hasMoved: false,
    source: "./Resources/WhitePawn.svg"
  },
  a3: {
    piece: "",
    color: ""
  },
  b3: {
    piece: "",
    color: ""
  },
  c3: {
    piece: "",
    color: ""
  },
  d3: {
    piece: "",
    color: ""
  },
  e3: {
    piece: "",
    color: ""
  },
  f3: {
    piece: "",
    color: ""
  },
  g3: {
    piece: "",
    color: ""
  },
  h3: {
    piece: "",
    color: ""
  },
  a4: {
    piece: "",
    color: ""
  },
  b4: {
    piece: "",
    color: ""
  },
  c4: {
    piece: "",
    color: ""
  },
  d4: {
    piece: "",
    color: ""
  },
  e4: {
    piece: "",
    color: ""
  },
  f4: {
    piece: "",
    color: ""
  },
  g4: {
    piece: "",
    color: ""
  },
  h4: {
    piece: "",
    color: ""
  },
  a5: {
    piece: "",
    color: ""
  },
  b5: {
    piece: "",
    color: ""
  },
  c5: {
    piece: "",
    color: ""
  },
  d5: {
    piece: "",
    color: ""
  },
  e5: {
    piece: "",
    color: ""
  },
  f5: {
    piece: "",
    color: ""
  },
  g5: {
    piece: "",
    color: ""
  },
  h5: {
    piece: "",
    color: ""
  },
  a6: {
    piece: "",
    color: ""
  },
  b6: {
    piece: "",
    color: ""
  },
  c6: {
    piece: "",
    color: ""
  },
  d6: {
    piece: "",
    color: ""
  },
  e6: {
    piece: "",
    color: ""
  },
  f6: {
    piece: "",
    color: ""
  },
  g6: {
    piece: "",
    color: ""
  },
  h6: {
    piece: "",
    color: ""
  },
  a7: {
    piece: "pawn",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackPawn.svg"
  },
  b7: {
    piece: "pawn",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackPawn.svg"
  },
  c7: {
    piece: "pawn",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackPawn.svg"
  },
  d7: {
    piece: "pawn",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackPawn.svg"
  },
  e7: {
    piece: "pawn",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackPawn.svg"
  },
  f7: {
    piece: "pawn",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackPawn.svg"
  },
  g7: {
    piece: "pawn",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackPawn.svg"
  },
  h7: {
    piece: "pawn",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackPawn.svg"
  },
  a8: {
    piece: "rock",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackRock.svg"
  },
  b8: {
    piece: "knight",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackKnight.svg"
  },
  c8: {
    piece: "bishop",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackBishop.svg"
  },
  d8: {
    piece: "queen",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackQueen.svg"
  },
  e8: {
    piece: "king",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackKing.svg"
  },
  f8: {
    piece: "bishop",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackBishop.svg"
  },
  g8: {
    piece: "knight",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackKnight.svg"
  },
  h8: {
    piece: "rock",
    color: "black",
    hasMoved: false,
    source: "./Resources/BlackRock.svg"
  },
  updateBoard: function updateBoard(tile1, tile2) {
    this[tile2].piece = this[tile1].piece;
    this[tile2].color = this[tile1].color;
    this[tile2].source = this[tile1].source;
    this[tile2].hasMoved = true;
    this[tile1].piece = "";
    this[tile1].color = "";
    this[tile1].source = "";
  },
  updateBoardForCheck: function updateBoardForCheck(tile1, tile2) {
    var colorTosave = this[tile2].color;
    var pieceTosave = this[tile2].piece;
    var sourceTosave = this[tile2].source;
    this[tile2].piece = this[tile1].piece;
    this[tile2].color = this[tile1].color;
    this[tile2].source = this[tile1].source;
    this[tile2].hasMoved = false;
    this[tile1].piece = pieceTosave;
    this[tile1].color = colorTosave;
    this[tile1].source = sourceTosave;
    this[tile1].hasMoved = false;
  },
  removePiece: function removePiece(tile) {
    this[tile].piece = "";
    this[tile].color = "";
    this[tile].source = "";
    this[tile].hasMoved = "";
  },
  addPiece: function addPiece(piece, color, source, hasMoved, tile) {
    this[tile].piece = piece;
    this[tile].color = color;
    this[tile].source = source;
    this[tile].hasMoved = hasMoved;
  },
  swapPawn: function swapPawn(tile, source, piece) {
    this[tile].source = source;
    this[tile].piece = piece;
  },
  castle: function castle(tile) {
    if (tile == "g1") {
      this.g1.color = "white";
      this.g1.piece = "king";
      this.g1.source = "./Resources/WhiteKing.svg";
      this.g1.hasMoved = true;
      this.f1.color = "white";
      this.f1.piece = "rock";
      this.f1.source = "./Resources/WhiteRock.svg";
      this.f1.hasMoved = true;
      this.e1.color = "";
      this.e1.piece = "";
      this.e1.source = "";
      this.e1.hasMoved = true;
      this.h1.color = "";
      this.h1.piece = "";
      this.h1.source = "";
      this.h1.hasMoved = true;
    } else if (tile == "c1") {
      this.c1.color = "white";
      this.c1.piece = "king";
      this.c1.source = "./Resources/WhiteKing.svg";
      this.c1.hasMoved = true;
      this.d1.color = "white";
      this.d1.piece = "rock";
      this.d1.source = "./Resources/WhiteRock.svg";
      this.d1.hasMoved = true;
      this.e1.color = "";
      this.e1.piece = "";
      this.e1.source = "";
      this.e1.hasMoved = true;
      this.a1.color = "";
      this.a1.piece = "";
      this.a1.source = "";
      this.a1.hasMoved = true;
    } else if (tile == "g8") {
      this.g8.color = "black";
      this.g8.piece = "king";
      this.g8.source = "./Resources/BlackKing.svg";
      this.g8.hasMoved = true;
      this.f8.color = "black";
      this.f8.piece = "rock";
      this.f8.source = "./Resources/BlackRock.svg";
      this.f8.hasMoved = true;
      this.e8.color = "";
      this.e8.piece = "";
      this.e8.source = "";
      this.e8.hasMoved = true;
      this.h8.color = "";
      this.h8.piece = "";
      this.h8.source = "";
      this.h8.hasMoved = true;
    } else {
      this.c8.color = "black";
      this.c8.piece = "king";
      this.c8.source = "./Resources/BlackKing.svg";
      this.c8.hasMoved = true;
      this.d8.color = "black";
      this.d8.piece = "rock";
      this.d8.source = "./Resources/BlackRock.svg";
      this.d8.hasMoved = true;
      this.e8.color = "";
      this.e8.piece = "";
      this.e8.source = "";
      this.e8.hasMoved = true;
      this.a8.color = "";
      this.a8.piece = "";
      this.a8.source = "";
      this.a8.hasMoved = true;
    }
  }
}; //As per name

var restartGame = function restartGame() {
  board = _objectSpread({}, resetBoard);
  board = _objectSpread({}, board, {
    a1: _objectSpread({}, board.a1),
    b1: _objectSpread({}, board.b1),
    c1: _objectSpread({}, board.c1),
    d1: _objectSpread({}, board.d1),
    e1: _objectSpread({}, board.e1),
    f1: _objectSpread({}, board.f1),
    g1: _objectSpread({}, board.g1),
    h1: _objectSpread({}, board.h1),
    a2: _objectSpread({}, board.a2),
    b2: _objectSpread({}, board.b2),
    c2: _objectSpread({}, board.c2),
    d2: _objectSpread({}, board.d2),
    e2: _objectSpread({}, board.e2),
    f2: _objectSpread({}, board.f2),
    g2: _objectSpread({}, board.g2),
    h2: _objectSpread({}, board.h2),
    a3: _objectSpread({}, board.a3),
    b3: _objectSpread({}, board.b3),
    c3: _objectSpread({}, board.c3),
    d3: _objectSpread({}, board.d3),
    e3: _objectSpread({}, board.e3),
    f3: _objectSpread({}, board.f3),
    g3: _objectSpread({}, board.g3),
    h3: _objectSpread({}, board.h3),
    a4: _objectSpread({}, board.a4),
    b4: _objectSpread({}, board.b4),
    c4: _objectSpread({}, board.c4),
    d4: _objectSpread({}, board.d4),
    e4: _objectSpread({}, board.e4),
    f4: _objectSpread({}, board.f4),
    g4: _objectSpread({}, board.g4),
    h4: _objectSpread({}, board.h4),
    a5: _objectSpread({}, board.a5),
    b5: _objectSpread({}, board.b5),
    c5: _objectSpread({}, board.c5),
    d5: _objectSpread({}, board.d5),
    e5: _objectSpread({}, board.e5),
    f5: _objectSpread({}, board.f5),
    g5: _objectSpread({}, board.g5),
    h5: _objectSpread({}, board.h5),
    a6: _objectSpread({}, board.a6),
    b6: _objectSpread({}, board.b6),
    c6: _objectSpread({}, board.c6),
    d6: _objectSpread({}, board.d6),
    e6: _objectSpread({}, board.e6),
    f6: _objectSpread({}, board.f6),
    g6: _objectSpread({}, board.g6),
    h6: _objectSpread({}, board.h6),
    a7: _objectSpread({}, board.a7),
    b7: _objectSpread({}, board.b7),
    c7: _objectSpread({}, board.c7),
    d7: _objectSpread({}, board.d7),
    e7: _objectSpread({}, board.e7),
    f7: _objectSpread({}, board.f7),
    g7: _objectSpread({}, board.g7),
    h7: _objectSpread({}, board.h7),
    a8: _objectSpread({}, board.a8),
    b8: _objectSpread({}, board.b8),
    c8: _objectSpread({}, board.c8),
    e8: _objectSpread({}, board.e8),
    d8: _objectSpread({}, board.d8),
    f8: _objectSpread({}, board.f8),
    g8: _objectSpread({}, board.g8),
    h8: _objectSpread({}, board.h8)
  });
  clearBoard();
  renderBoard();
  gameInfo.turn = "white";
  var pieceWhiteTook = document.querySelector(".pieceWhiteTook");
  pieceWhiteTook.innerHTML = "";
  var pieceBlackTook = document.querySelector(".pieceBlackTook");
  pieceBlackTook.innerHTML = "";

  if (document.querySelector(".checked")) {
    var _check = document.querySelector(".checked");

    _check.classList.remove("checked");
  }

  if (document.querySelector(".active")) {
    var active = document.querySelectorAll(".active");
    active.forEach(function (element) {
      element.classList.remove("active");
    });
  }

  if (document.querySelector(".selected")) {
    var selected = document.querySelector(".selected");
    selected.classList.remove("selected");
  }

  var display = document.querySelector(".swapPiece");
  display.innerText = "";
}; //Currently only used to store moves in order to know when an en passant can be done


var history = []; //Add each move to the history array. Again atm only used for en passant

var recordHistory = function recordHistory(piece, color, tileTo, tileFrom, wasPieceTaken) {
  history.push({
    piece: piece,
    color: color,
    from: tileFrom,
    to: tileTo,
    tookPiece: wasPieceTaken
  });
}; //Used to swap image source when a pawn is promote


var swapPiece = [["./Resources/WhiteRock.svg", "./Resources/WhiteBishop.svg", "./Resources/WhiteKnight.svg", "./Resources/WhiteQueen.svg"], ["./Resources/BlackRock.svg", "./Resources/BlackBishop.svg", "./Resources/BlackKnight.svg", "./Resources/BlackQueen.svg"]]; //Display which piece was taken by a specific player 

var renderSwap = function renderSwap(color) {
  var swapArea = document.querySelector(".swapPiece");
  gameInfo.isSwapOn = true;
  var alt = ["rock", "bishop", "knight", "queen"];
  var i = 0;
  var instruction = document.createElement("p");
  instruction.innerText = "Promote pawn ";
  swapArea.append(instruction);

  if (color == "white") {
    swapPiece[0].forEach(function (address) {
      var pieceToRender = document.createElement("img");
      pieceToRender.src = address;
      pieceToRender.alt = alt[i];
      pieceToRender.classList.add("pieceToSwap");
      pieceToRender.addEventListener("click", pawnForNewPiece);
      swapArea.append(pieceToRender);
      i++;
    });
  } else {
    swapPiece[1].forEach(function (address) {
      var pieceToRender = document.createElement("img");
      pieceToRender.src = address;
      pieceToRender.alt = alt[i];
      pieceToRender.classList.add("pieceToSwap");
      pieceToRender.addEventListener("click", pawnForNewPiece);
      swapArea.append(pieceToRender);
      i++;
    });
  }
}; //Upgrade pawn when it get to the end of the board


var pawnForNewPiece = function pawnForNewPiece(event) {
  board.swapPawn(document.querySelector(".swapHere").id, event.target.src, event.target.alt);
  clearBoard();
  renderBoard();
  gameInfo.isSwapOn = false;

  if (gameInfo.turn == "white") {
    check("black");
  } else {
    check("white");
  }

  var clearSwapArea = document.querySelectorAll(".pieceToSwap");
  clearSwapArea.forEach(function (element) {
    element.parentNode.removeChild(element);
  });
  var clearSwapTitle = document.querySelector(".swapPiece");
  clearSwapTitle.removeChild(clearSwapTitle.fir);
  return;
}; //Used to calculate turn and stopping game when a pawn reach the end and has to be promoted


var gameInfo = {
  turn: "white",
  piecesWhiteTook: [],
  piecesBlackTook: [],
  isSwapOn: false,
  updateTurn: function updateTurn() {
    if (this.turn == "white") {
      this.turn = "black";
    } else {
      this.turn = "white";
    }
  }
}; //Iterate over the board object and render it in the HTML grid

var renderBoard = function renderBoard() {
  var tiles = document.querySelectorAll(".tile");
  tiles.forEach(function (tile) {
    var tileToRender = tile.id;

    if (board[tileToRender].piece != "") {
      var pieceToRender = document.createElement("img");
      pieceToRender.src = board[tileToRender].source;
      pieceToRender.classList.add("piece");
      tile.append(pieceToRender);
    }
  });
}; //Clear the HTML grid before a render is necessary


var clearBoard = function clearBoard() {
  var tiles = document.querySelectorAll(".tile");
  tiles.forEach(function (tile) {
    if (tile.childNodes.length > 0) {
      tile.removeChild(tile.firstChild);
    }
  });
};

renderBoard(); //Initialize board to start game
//Use to convert the board cordinate (a2,h3, ...) to XY coordinates to calculate pieces movements more easily

var convertToXY = function convertToXY(piecePosition) {
  var y = parseInt(piecePosition.charAt(1));

  switch (piecePosition[0]) {
    case "a":
      return [1, y];

    case "b":
      return [2, y];

    case "c":
      return [3, y];

    case "d":
      return [4, y];

    case "e":
      return [5, y];

    case "f":
      return [6, y];

    case "g":
      return [7, y];

    case "h":
      return [8, y];
  }
}; //Convert XY to board coordinates to be able to render it on the page easily


var convertXYtoBoardCoordinates = function convertXYtoBoardCoordinates(XYPositions) {
  var y = XYPositions[1];

  switch (XYPositions[0]) {
    case 1:
      return "a" + y;

    case 2:
      return "b" + y;

    case 3:
      return "c" + y;

    case 4:
      return "d" + y;

    case 5:
      return "e" + y;

    case 6:
      return "f" + y;

    case 7:
      return "g" + y;

    case 8:
      return "h" + y;
  }
}; //Store the standard pawn moves


var pawn = function pawn(currentPositionXY, pawnColor) {
  var moves = [];

  if (pawnColor == "white") {
    var left = [currentPositionXY[0] - 1, currentPositionXY[1] + 1];
    var center = [currentPositionXY[0], currentPositionXY[1] + 1];
    var right = [currentPositionXY[0] + 1, currentPositionXY[1] + 1];
    var enPassantRight = [currentPositionXY[0] + 1, currentPositionXY[1] + 1];
    var enPassantLeft = [currentPositionXY[0] - 1, currentPositionXY[1] + 1];

    if (left[0] > 0 && left[1] < 9) {
      if (board[convertXYtoBoardCoordinates(left)].color == "black") {
        moves.push(left);
      }
    }

    if (center[1] < 9) {
      if (board[convertXYtoBoardCoordinates(center)].color == "") {
        moves.push(center);
      }
    }

    if (right[0] < 9 && right[1] < 9) {
      if (board[convertXYtoBoardCoordinates(right)].color == "black") {
        moves.push(right);
      }
    } //En passant calculation


    var controlObj = {
      piece: "pawn",
      color: "black",
      from: convertXYtoBoardCoordinates([currentPositionXY[0] + 1, currentPositionXY[1] + 2]),
      to: convertXYtoBoardCoordinates([currentPositionXY[0] + 1, currentPositionXY[1]]),
      tookPiece: false
    };

    if (currentPositionXY[1] == 5 && JSON.stringify(history[history.length - 1]) === JSON.stringify(controlObj)) {
      moves.push(enPassantRight);
    }

    controlObj = {
      piece: "pawn",
      color: "black",
      from: convertXYtoBoardCoordinates([currentPositionXY[0] - 1, currentPositionXY[1] + 2]),
      to: convertXYtoBoardCoordinates([currentPositionXY[0] - 1, currentPositionXY[1]]),
      tookPiece: false
    };

    if (currentPositionXY[1] == 5 && JSON.stringify(history[history.length - 1]) === JSON.stringify(controlObj)) {
      moves.push(enPassantLeft);
    }

    return moves;
  } else {
    var _left = [currentPositionXY[0] - 1, currentPositionXY[1] - 1];
    var _center = [currentPositionXY[0], currentPositionXY[1] - 1];
    var _right = [currentPositionXY[0] + 1, currentPositionXY[1] - 1];
    var _enPassantRight = [currentPositionXY[0] + 1, currentPositionXY[1] - 1];
    var _enPassantLeft = [currentPositionXY[0] - 1, currentPositionXY[1] - 1];

    if (_left[0] > 0 && _left[1] > 0) {
      if (board[convertXYtoBoardCoordinates(_left)].color == "white") {
        moves.push(_left);
      }
    }

    if (_center[1] > 0) {
      if (board[convertXYtoBoardCoordinates(_center)].color == "") {
        moves.push(_center);
      }
    }

    if (_right[0] < 9 && _right[1] > 0) {
      if (board[convertXYtoBoardCoordinates(_right)].color == "white") {
        moves.push(_right);
      }
    } //En passant calculation


    var _controlObj = {
      piece: "pawn",
      color: "white",
      from: convertXYtoBoardCoordinates([currentPositionXY[0] + 1, currentPositionXY[1] - 2]),
      to: convertXYtoBoardCoordinates([currentPositionXY[0] + 1, currentPositionXY[1]]),
      tookPiece: false
    };

    if (currentPositionXY[1] == 4 && JSON.stringify(history[history.length - 1]) === JSON.stringify(_controlObj)) {
      moves.push(_enPassantRight);
    }

    _controlObj = {
      piece: "pawn",
      color: "white",
      from: convertXYtoBoardCoordinates([currentPositionXY[0] - 1, currentPositionXY[1] - 2]),
      to: convertXYtoBoardCoordinates([currentPositionXY[0] - 1, currentPositionXY[1]]),
      tookPiece: false
    };

    if (currentPositionXY[1] == 4 && JSON.stringify(history[history.length - 1]) === JSON.stringify(_controlObj)) {
      moves.push(_enPassantLeft);
    }

    return moves;
  }
}; //Calculate which of the standard pawn moves can be performed according to the current state of the board


var movePawn = function movePawn(currentPosition, pawnColor) {
  var XYposition = convertToXY(currentPosition);
  var ruleSetMoves = pawn(XYposition, pawnColor);
  var ruleSetMovesToBoardCoordinates = ruleSetMoves.map(function (coordinates) {
    return convertXYtoBoardCoordinates(coordinates);
  });
  var allowedMoves = ruleSetMovesToBoardCoordinates.filter(function (coordinate) {
    return board[coordinate].color != pawnColor;
  });

  if (board[currentPosition].hasMoved == false) {
    if (pawnColor == "white") {
      var doubleStep = convertXYtoBoardCoordinates([XYposition[0], XYposition[1] + 2]);

      if (board[doubleStep].color == "") {
        allowedMoves.push(doubleStep);
      }
    } else {
      var _doubleStep = convertXYtoBoardCoordinates([XYposition[0], XYposition[1] - 2]);

      if (board[_doubleStep].color == "") {
        allowedMoves.push(_doubleStep);
      }
    }
  }

  return allowedMoves;
}; //Standard moves of the knigh


var knight = function knight(currentPositionXY) {
  var moves = [[currentPositionXY[0] + 1, currentPositionXY[1] + 2], [currentPositionXY[0] + 2, currentPositionXY[1] + 1], [currentPositionXY[0] + 2, currentPositionXY[1] - 1], [currentPositionXY[0] + 1, currentPositionXY[1] - 2], [currentPositionXY[0] - 1, currentPositionXY[1] - 2], [currentPositionXY[0] - 2, currentPositionXY[1] - 1], [currentPositionXY[0] - 2, currentPositionXY[1] + 1], [currentPositionXY[0] - 1, currentPositionXY[1] + 2]];
  var regularMoves = moves.filter(function (move) {
    return move[0] > 0 && move[0] < 9 && move[1] > 0 && move[1] < 9;
  });
  return regularMoves;
}; //Standard moves for the king 


var king = function king(currentPositionXY) {
  var moves = [[currentPositionXY[0], currentPositionXY[1] + 1], [currentPositionXY[0] + 1, currentPositionXY[1] + 1], [currentPositionXY[0] + 1, currentPositionXY[1]], [currentPositionXY[0] + 1, currentPositionXY[1] - 1], [currentPositionXY[0], currentPositionXY[1] - 1], [currentPositionXY[0] - 1, currentPositionXY[1] - 1], [currentPositionXY[0] - 1, currentPositionXY[1]], [currentPositionXY[0] - 1, currentPositionXY[1] + 1]];
  var regularMoves = moves.filter(function (move) {
    return move[0] > 0 && move[0] < 9 && move[1] > 0 && move[1] < 9;
  });
  return regularMoves;
}; //Given a piece color calculate all the possible moves that a player can perform. Use for check and checkmate controls


var findOpponentAllPossibleMoves = function findOpponentAllPossibleMoves(color) {
  if (color == "black") {
    var whitePiecesPositions = findPiecesOfSpecificColor("white");
    var whitePossibleMoves = [];
    whitePiecesPositions.forEach(function (element) {
      switch (Object.values(element)[0]) {
        case "pawn":
          whitePossibleMoves = whitePossibleMoves.concat(movePawn(Object.keys(element)[0], "white"));
          break;

        case "rock":
          whitePossibleMoves = whitePossibleMoves.concat(moveRock(Object.keys(element)[0], "white"));
          break;

        case "bishop":
          whitePossibleMoves = whitePossibleMoves.concat(moveBishop(Object.keys(element)[0], "white"));
          break;

        case "knight":
          whitePossibleMoves = whitePossibleMoves.concat(moveKnight(Object.keys(element)[0], "white"));
          break;

        case "queen":
          whitePossibleMoves = whitePossibleMoves.concat(moveQueen(Object.keys(element)[0], "white"));
          break;
      }
    });
    return whitePossibleMoves;
  } else {
    var blackPiecesPositions = findPiecesOfSpecificColor("black");
    var blackPossibleMoves = [];
    blackPiecesPositions.forEach(function (element) {
      switch (Object.values(element)[0]) {
        case "pawn":
          blackPossibleMoves = blackPossibleMoves.concat(movePawn(Object.keys(element)[0], "black"));
          break;

        case "rock":
          blackPossibleMoves = blackPossibleMoves.concat(moveRock(Object.keys(element)[0], "black"));
          break;

        case "bishop":
          blackPossibleMoves = blackPossibleMoves.concat(moveBishop(Object.keys(element)[0], "black"));
          break;

        case "knight":
          blackPossibleMoves = blackPossibleMoves.concat(moveKnight(Object.keys(element)[0], "black"));
          break;

        case "queen":
          blackPossibleMoves = blackPossibleMoves.concat(moveQueen(Object.keys(element)[0], "black"));
          break;
      }
    });
    return blackPossibleMoves;
  }
}; //Calculate king moves according to current board state


var moveKing = function moveKing(currentPosition, pawnColor) {
  var XYposition = convertToXY(currentPosition);
  var ruleSetMoves = king(XYposition);
  var ruleSetMovesToBoardCoordinates = ruleSetMoves.map(function (coordinates) {
    return convertXYtoBoardCoordinates(coordinates);
  });
  var isChecked = document.querySelector(".checked");
  var opponentMoves = findOpponentAllPossibleMoves(pawnColor); //Castling on the right white

  if (opponentMoves.includes("f1") == false && opponentMoves.includes("g1") == false && board.f1.color == "" && board.g1.color == "" && board.e1.hasMoved == false && board.h1.hasMoved == false && isChecked == null) {
    var castleTile = document.getElementById("g1");
    castleTile.classList.add("castleHere");
    ruleSetMovesToBoardCoordinates.push("g1");
  } //Castling on the left white


  if (opponentMoves.includes("c1") == false && opponentMoves.includes("d1") == false && board.b1.color == "" && board.c1.color == "" && board.d1.color == "" && board.e1.hasMoved == false && board.a1.hasMoved == false && isChecked == null) {
    var _castleTile = document.getElementById("c1");

    _castleTile.classList.add("castleHere");

    ruleSetMovesToBoardCoordinates.push("c1");
  } //Castling on the right black


  if (opponentMoves.includes("f8") == false && opponentMoves.includes("g8") == false && board.f8.color == "" && board.g8.color == "" && board.e8.hasMoved == false && board.h8.hasMoved == false && isChecked == null) {
    var _castleTile2 = document.getElementById("g8");

    _castleTile2.classList.add("castleHere");

    ruleSetMovesToBoardCoordinates.push("g8");
  } //Castling on the left black


  if (opponentMoves.includes("c8") == false && opponentMoves.includes("d8") == false && board.b8.color == "" && board.c8.color == "" && board.d8.color == "" && board.e8.hasMoved == false && board.a8.hasMoved == false && isChecked == null) {
    var _castleTile3 = document.getElementById("c8");

    _castleTile3.classList.add("castleHere");

    ruleSetMovesToBoardCoordinates.push("c8");
  }

  var allowedMoves = ruleSetMovesToBoardCoordinates.filter(function (coordinate) {
    return board[coordinate].color != pawnColor;
  });
  return allowedMoves;
}; //Calculate knight moves according to current board state


var moveKnight = function moveKnight(currentPosition, pawnColor) {
  var XYposition = convertToXY(currentPosition);
  var ruleSetMoves = knight(XYposition);
  var ruleSetMovesToBoardCoordinates = ruleSetMoves.map(function (coordinates) {
    return convertXYtoBoardCoordinates(coordinates);
  });
  var allowedMoves = ruleSetMovesToBoardCoordinates.filter(function (coordinate) {
    return board[coordinate].color != pawnColor;
  });
  return allowedMoves;
}; //Store bishop stamdard moves and calculate which ones are regular according to current board state


var moveBishop = function moveBishop(currentPosition, pieceColor) {
  var possibleMoves = [];
  var XYposition = convertToXY(currentPosition); //Moves for North east diagonal

  for (var i = 1; i < 8; i++) {
    var X = XYposition[0] + i;
    var Y = XYposition[1] + i;

    if (X > 8 || Y > 8 || X < 1 || Y < 1) {
      break;
    }

    var boardPosition = convertXYtoBoardCoordinates([X, Y]);

    if (board[boardPosition].color == pieceColor) {
      break;
    } else if (board[boardPosition].color == "") {
      possibleMoves.push(boardPosition);
    } else {
      possibleMoves.push(boardPosition);
      break;
    }
  } //Moves for South east diagonal


  for (var _i = 1; _i < 8; _i++) {
    var _X = XYposition[0] + _i;

    var _Y = XYposition[1] - _i;

    if (_X > 8 || _Y > 8 || _X < 1 || _Y < 1) {
      break;
    }

    var _boardPosition = convertXYtoBoardCoordinates([_X, _Y]);

    if (board[_boardPosition].color == pieceColor) {
      break;
    } else if (board[_boardPosition].color == "") {
      possibleMoves.push(_boardPosition);
    } else {
      possibleMoves.push(_boardPosition);
      break;
    }
  } //Moves for South west diagonal


  for (var _i2 = 1; _i2 < 8; _i2++) {
    var _X2 = XYposition[0] - _i2;

    var _Y2 = XYposition[1] - _i2;

    if (_X2 > 8 || _Y2 > 8 || _X2 < 1 || _Y2 < 1) {
      break;
    }

    var _boardPosition2 = convertXYtoBoardCoordinates([_X2, _Y2]);

    if (board[_boardPosition2].color == pieceColor) {
      break;
    } else if (board[_boardPosition2].color == "") {
      possibleMoves.push(_boardPosition2);
    } else {
      possibleMoves.push(_boardPosition2);
      break;
    }
  } //Moves for North west diagonal


  for (var _i3 = 1; _i3 < 8; _i3++) {
    var _X3 = XYposition[0] - _i3;

    var _Y3 = XYposition[1] + _i3;

    if (_X3 > 8 || _Y3 > 8 || _X3 < 1 || _Y3 < 1) {
      break;
    }

    var _boardPosition3 = convertXYtoBoardCoordinates([_X3, _Y3]);

    if (board[_boardPosition3].color == pieceColor) {
      break;
    } else if (board[_boardPosition3].color == "") {
      possibleMoves.push(_boardPosition3);
    } else {
      possibleMoves.push(_boardPosition3);
      break;
    }
  }

  return possibleMoves;
}; //Store rock stamdard moves and calculate which ones are regular according to current board state


var moveRock = function moveRock(currentPosition, pieceColor) {
  var possibleMoves = [];
  var XYposition = convertToXY(currentPosition); //North moves

  for (var i = 1; i < 8; i++) {
    var X = XYposition[0];
    var Y = XYposition[1] + i;

    if (X > 8 || Y > 8 || X < 1 || Y < 1) {
      break;
    }

    var boardPosition = convertXYtoBoardCoordinates([X, Y]);

    if (board[boardPosition].color == pieceColor) {
      break;
    } else if (board[boardPosition].color == "") {
      possibleMoves.push(boardPosition);
    } else {
      possibleMoves.push(boardPosition);
      break;
    }
  } //East moves


  for (var _i4 = 1; _i4 < 8; _i4++) {
    var _X4 = XYposition[0] + _i4;

    var _Y4 = XYposition[1];

    if (_X4 > 8 || _Y4 > 8 || _X4 < 1 || _Y4 < 1) {
      break;
    }

    var _boardPosition4 = convertXYtoBoardCoordinates([_X4, _Y4]);

    if (board[_boardPosition4].color == pieceColor) {
      break;
    } else if (board[_boardPosition4].color == "") {
      possibleMoves.push(_boardPosition4);
    } else {
      possibleMoves.push(_boardPosition4);
      break;
    }
  } //South moves


  for (var _i5 = 1; _i5 < 8; _i5++) {
    var _X5 = XYposition[0];

    var _Y5 = XYposition[1] - _i5;

    if (_X5 > 8 || _Y5 > 8 || _X5 < 1 || _Y5 < 1) {
      break;
    }

    var _boardPosition5 = convertXYtoBoardCoordinates([_X5, _Y5]);

    if (board[_boardPosition5].color == pieceColor) {
      break;
    } else if (board[_boardPosition5].color == "") {
      possibleMoves.push(_boardPosition5);
    } else {
      possibleMoves.push(_boardPosition5);
      break;
    }
  } //West moves


  for (var _i6 = 1; _i6 < 8; _i6++) {
    var _X6 = XYposition[0] - _i6;

    var _Y6 = XYposition[1];

    if (_X6 > 8 || _Y6 > 8 || _X6 < 1 || _Y6 < 1) {
      break;
    }

    var _boardPosition6 = convertXYtoBoardCoordinates([_X6, _Y6]);

    if (board[_boardPosition6].color == pieceColor) {
      break;
    } else if (board[_boardPosition6].color == "") {
      possibleMoves.push(_boardPosition6);
    } else {
      possibleMoves.push(_boardPosition6);
      break;
    }
  }

  return possibleMoves;
}; //Just calls moveRock and moveBishop to calculate regular moves


var moveQueen = function moveQueen(currentPosition, pieceColor) {
  var moves = moveBishop(currentPosition, pieceColor);
  var moves2 = moveRock(currentPosition, pieceColor);
  return moves.concat(moves2);
}; //When the regular moves for a selected piece are calculate the function display them on the board


var renderMoves = function renderMoves(possibleMoves) {
  var tiles = document.querySelectorAll(".tile");

  for (var i = 0; i < tiles.length; i++) {
    if (possibleMoves.includes(tiles[i].id)) {
      var classes = tiles[i]["class"];
      tiles[i].classList.add("active");
    }
  }
}; //When a piece has moved or another one is selected clear the previous piece moves which were rendered on the board


var clearActiveSelectedTiles = function clearActiveSelectedTiles() {
  var activeTiles = document.querySelectorAll(".active");
  var selectedPiece = document.querySelector(".selected");
  activeTiles.forEach(function (tile) {
    return tile.classList.remove("active");
  });
  selectedPiece.classList.remove("selected");

  if (document.querySelector(".castleHere")) {
    var castle = document.querySelector(".castleHere");
    castle.classList.remove("castleHere");
  }
}; //Display which pieces were taken my a player in the player section


var renderTakenPieces = function renderTakenPieces(piece, color) {
  var renderingDiv;
  var pieceToRender = document.createElement("img");
  var card = document.createElement("div");
  var pieceName = piece.charAt(0).toUpperCase() + piece.slice(1);

  if (color == "white") {
    renderingDiv = document.querySelector(".pieceBlackTook");
    card.classList.add("cardWhite");
    pieceToRender.src = "./Resources/White".concat(pieceName, ".svg");
    pieceToRender.classList.add("pieceTaken");
    card.append(pieceToRender);
    renderingDiv.append(card);
  } else {
    renderingDiv = document.querySelector(".pieceWhiteTook");
    card.classList.add("cardBlack");
    pieceToRender.src = "./Resources/Black".concat(pieceName, ".svg");
    pieceToRender.classList.add("pieceTaken");
    card.append(pieceToRender);
    renderingDiv.append(card);
  }
}; //Given a color find where that specific king is on the board. Use for check and checkmate


var findKingPosition = function findKingPosition(color) {
  for (key in board) {
    if (board[key].piece == "king" && board[key].color == color) {
      return key;
    }
  }
}; //Given a color find all the pieces of that color on the board. Used to calculate check, checkmate and avoid that a piece move if it cause check


var findPiecesOfSpecificColor = function findPiecesOfSpecificColor(color) {
  var piecesArr = [];

  for (keys in board) {
    if (board[keys].color == color) {
      piecesArr.push(_defineProperty({}, keys, board[keys].piece));
    }
  }

  return piecesArr;
}; //Calculate if a player is another check after the previous player has moved


var check = function check(colorThatMovesLast) {
  if (colorThatMovesLast == "white") {
    var blackKingPosition = findKingPosition("black");
    var whitePiecesPositions = findPiecesOfSpecificColor("white");
    var whitePossibleMoves = [];
    whitePiecesPositions.forEach(function (element) {
      switch (Object.values(element)[0]) {
        case "pawn":
          whitePossibleMoves = whitePossibleMoves.concat(movePawn(Object.keys(element)[0], "white"));
          break;

        case "rock":
          whitePossibleMoves = whitePossibleMoves.concat(moveRock(Object.keys(element)[0], "white"));
          break;

        case "bishop":
          whitePossibleMoves = whitePossibleMoves.concat(moveBishop(Object.keys(element)[0], "white"));
          break;

        case "knight":
          whitePossibleMoves = whitePossibleMoves.concat(moveKnight(Object.keys(element)[0], "white"));
          break;

        case "queen":
          whitePossibleMoves = whitePossibleMoves.concat(moveQueen(Object.keys(element)[0], "white"));
          break;
      }
    });

    if (whitePossibleMoves.includes(blackKingPosition)) {
      var kingTile = document.getElementById(blackKingPosition);
      kingTile.classList.add("checked");
      return true;
    }
  } else {
    var whiteKingPosition = findKingPosition("white");
    var blackPiecesPositions = findPiecesOfSpecificColor("black");
    var blackPossibleMoves = [];
    blackPiecesPositions.forEach(function (element) {
      switch (Object.values(element)[0]) {
        case "pawn":
          blackPossibleMoves = blackPossibleMoves.concat(movePawn(Object.keys(element)[0], "black"));
          break;

        case "rock":
          blackPossibleMoves = blackPossibleMoves.concat(moveRock(Object.keys(element)[0], "black"));
          break;

        case "bishop":
          blackPossibleMoves = blackPossibleMoves.concat(moveBishop(Object.keys(element)[0], "black"));
          break;

        case "knight":
          blackPossibleMoves = blackPossibleMoves.concat(moveKnight(Object.keys(element)[0], "black"));
          break;

        case "queen":
          blackPossibleMoves = blackPossibleMoves.concat(moveQueen(Object.keys(element)[0], "black"));
          break;
      }
    });

    if (blackPossibleMoves.includes(whiteKingPosition)) {
      var _kingTile = document.getElementById(whiteKingPosition);

      _kingTile.classList.add("checked");

      return true;
    }
  }
}; //Avoid a piece can be moved if it cause the player king to be checked


var checkIfMoved = function checkIfMoved(currentPosition, colorPiece, arrayOfMoves) {
  var movesThatCauseCheck = [];

  var movesToCheck = _toConsumableArray(arrayOfMoves);

  arrayOfMoves.forEach(function (move) {
    var tempPiece = board[move].piece;
    var tempColor = board[move].color;
    var tempSource = board[move].source;
    var tempStatus = board[move].hasMoved;
    var hasTakenPiece = false;

    if (board[move].color != colorPiece && board[move].color != "") {
      board.updateBoard(currentPosition, move);
      hasTakenPiece = true;
    } else {
      board.updateBoardForCheck(currentPosition, move);
    }

    var opponentMoves = findOpponentAllPossibleMoves(colorPiece);
    var kingPosition = findKingPosition(colorPiece);

    if (opponentMoves.includes(kingPosition)) {
      movesThatCauseCheck.push(move);
    }

    if (hasTakenPiece == true) {
      board.updateBoard(move, currentPosition);
      board.addPiece(tempPiece, tempColor, tempSource, tempStatus, move);
    } else {
      board.updateBoardForCheck(move, currentPosition);
    }
  });

  for (var i = 0; i < movesThatCauseCheck.length; i++) {
    if (movesToCheck.includes(movesThatCauseCheck[i])) {
      for (var y = 0; y < movesToCheck.length; y++) {
        if (movesToCheck[y] == movesThatCauseCheck[i]) {
          movesToCheck.splice(y, 1);
          y = 0;
        }
      }
    }
  }

  return movesToCheck;
}; //Cancel the rendered check if it has been stopped


var clearChecked = function clearChecked() {
  var checkedKing = document.querySelector(".checked");

  if (checkedKing == null) {
    return;
  }

  checkedKing.classList.remove("checked");
  return;
}; //Calculate if a pawn reached the end of the board


var pawnEndline = function pawnEndline(piece, color, movedOnTile) {
  if (piece != "pawn") {
    return;
  }

  if (convertToXY(movedOnTile)[1] == 8 && color == "white") {
    var finalTile = document.getElementById(movedOnTile);
    finalTile.classList.add("swapHere");
    renderSwap("white");
    return;
  }

  if (convertToXY(movedOnTile)[1] == 1 && color == "black") {
    var _finalTile = document.getElementById(movedOnTile);

    _finalTile.classList.add("swapHere");

    renderSwap("black");
    return;
  }
}; //Calculate checkmate


var checkMate = function checkMate(colorToCheck) {
  var allPieces = findPiecesOfSpecificColor(colorToCheck);
  var possibleMoves = [];
  var temp;
  allPieces.forEach(function (piecePosition) {
    switch (Object.values(piecePosition)[0]) {
      case "pawn":
        temp = checkIfMoved(Object.keys(piecePosition)[0], colorToCheck, movePawn(Object.keys(piecePosition)[0], colorToCheck));
        possibleMoves = possibleMoves.concat(temp);
        break;

      case "rock":
        temp = checkIfMoved(Object.keys(piecePosition)[0], colorToCheck, moveRock(Object.keys(piecePosition)[0], colorToCheck));
        possibleMoves = possibleMoves.concat(temp);
        break;

      case "bishop":
        temp = checkIfMoved(Object.keys(piecePosition)[0], colorToCheck, moveBishop(Object.keys(piecePosition)[0], colorToCheck));
        possibleMoves = possibleMoves.concat(temp);
        break;

      case "knight":
        temp = checkIfMoved(Object.keys(piecePosition)[0], colorToCheck, moveKnight(Object.keys(piecePosition)[0], colorToCheck));
        possibleMoves = possibleMoves.concat(temp);
        break;

      case "queen":
        temp = checkIfMoved(Object.keys(piecePosition)[0], colorToCheck, moveQueen(Object.keys(piecePosition)[0], colorToCheck));
        possibleMoves = possibleMoves.concat(temp);
        break;

      case "king":
        temp = checkIfMoved(Object.keys(piecePosition)[0], colorToCheck, moveKing(Object.keys(piecePosition)[0], colorToCheck));
        possibleMoves = possibleMoves.concat(temp);
        break;
    }
  });

  if (possibleMoves.length < 1) {
    var display = document.querySelector(".swapPiece");
    display.innerText = "Checkmate";
  }
}; //Main function that fire after each piece has been clicked


var pieceClicled = function pieceClicled(event) {
  if (gameInfo.isSwapOn == true) {
    return;
  } //Castling


  if (event.target.classList.contains("castleHere")) {
    var colorThatMoved = board[document.querySelector(".selected").id].color;
    recordHistory(board[document.querySelector(".selected").id].piece, board[document.querySelector(".selected").id].color, event.target.id, document.querySelector(".selected").id, false);
    board.castle(event.target.id);
    clearBoard();
    renderBoard();
    event.target.classList.remove("castleHere");
    gameInfo.updateTurn();
    clearChecked();
    check(colorThatMoved);

    if (colorThatMoved == "white") {
      checkMate("black");
    } else {
      checkMate("white");
    }

    clearActiveSelectedTiles();
    return;
  } //En passant


  if (event.target.classList.contains("active") && board[document.querySelector(".selected").id].piece == "pawn" && convertToXY(event.target.id)[0] != convertToXY(document.querySelector(".selected").id)[0]) {
    var _colorThatMoved = board[document.querySelector(".selected").id].color;
    recordHistory(board[document.querySelector(".selected").id].piece, board[document.querySelector(".selected").id].color, event.target.id, document.querySelector(".selected").id, false);
    pawnEndline(board[document.querySelector(".selected").id].piece, board[document.querySelector(".selected").id].color, event.target.id);
    board.updateBoard(document.querySelector(".selected").id, event.target.id);

    if (_colorThatMoved == "white") {
      var targetTile = convertToXY(event.target.id);
      board.removePiece(convertXYtoBoardCoordinates([targetTile[0], targetTile[1] - 1]));
    } else {
      var _targetTile = convertToXY(event.target.id);

      board.removePiece(convertXYtoBoardCoordinates([_targetTile[0], _targetTile[1] + 1]));
    }

    clearBoard();
    renderBoard();
    gameInfo.updateTurn();
    clearChecked();
    check(_colorThatMoved);

    if (_colorThatMoved == "white") {
      checkMate("black");
    } else {
      checkMate("white");
    }

    clearActiveSelectedTiles();
    return;
  } //Moved on empty tile


  if (event.target.classList.contains("active")) {
    var _colorThatMoved2 = board[document.querySelector(".selected").id].color;
    recordHistory(board[document.querySelector(".selected").id].piece, board[document.querySelector(".selected").id].color, event.target.id, document.querySelector(".selected").id, false);
    pawnEndline(board[document.querySelector(".selected").id].piece, board[document.querySelector(".selected").id].color, event.target.id);
    board.updateBoard(document.querySelector(".selected").id, event.target.id);
    clearBoard();
    renderBoard();
    gameInfo.updateTurn();
    clearChecked();
    check(_colorThatMoved2);

    if (_colorThatMoved2 == "white") {
      checkMate("black");
    } else {
      checkMate("white");
    }

    clearActiveSelectedTiles();
    return;
  } //Move piece and take another piece


  if (event.target.parentElement.classList.contains("active")) {
    recordHistory(board[document.querySelector(".selected").id].piece, board[document.querySelector(".selected").id].color, event.target.parentElement.id, document.querySelector(".selected").id, true);
    pawnEndline(board[document.querySelector(".selected").id].piece, board[document.querySelector(".selected").id].color, event.target.parentElement.id);
    var _colorThatMoved3 = board[document.querySelector(".selected").id].color;
    renderTakenPieces(board[event.target.parentElement.id].piece, board[event.target.parentElement.id].color);
    board.updateBoard(document.querySelector(".selected").id, event.target.parentElement.id);
    clearBoard();
    renderBoard();
    gameInfo.updateTurn();
    clearChecked();
    check(_colorThatMoved3);

    if (_colorThatMoved3 == "white") {
      checkMate("black");
    } else {
      checkMate("white");
    }

    clearActiveSelectedTiles();
    return;
  } //Clear tiles that were made active with previous click


  if (document.querySelector(".selected") != null) {
    clearActiveSelectedTiles();
  }

  var currentPosition = event.target.parentElement.id;
  var pieceColor = board[event.target.parentElement.id].color;
  var pieceType = board[event.target.parentElement.id].piece; //If piece is clicke mades it "selected" so it can be moved. Else stop function if empty tile was clicked

  if (event.target.parentElement.id != "") {
    event.target.parentElement.classList.add("selected");
  } else {
    return;
  }

  if (pieceColor != gameInfo.turn) {
    return;
  }

  var moves;

  switch (pieceType) {
    case "pawn":
      moves = movePawn(currentPosition, pieceColor);
      break;

    case "knight":
      moves = moveKnight(currentPosition, pieceColor);
      break;

    case "king":
      moves = moveKing(currentPosition, pieceColor);
      break;

    case "bishop":
      moves = moveBishop(currentPosition, pieceColor);
      break;

    case "rock":
      moves = moveRock(currentPosition, pieceColor);
      break;

    case "queen":
      moves = moveQueen(currentPosition, pieceColor);
      break;
  }

  var movesThatDontCauseCheck = checkIfMoved(currentPosition, pieceColor, moves);
  renderMoves(movesThatDontCauseCheck);
}; //Attach event listenr to every tile on the board


var tiles = document.querySelectorAll(".tile");

for (var i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener("click", pieceClicled);
} //Restart button


var restart = document.querySelector(".restart");
restart.addEventListener("click", restartGame);