const renderMoves = (possibleMoves) => {

    const tiles = document.querySelectorAll(".tile");

    for(let i=0; i<tiles.length; i++) {
        if(possibleMoves.includes(tiles[i].id)) {
            tiles[i].classList.add("active");
        }
    }

}