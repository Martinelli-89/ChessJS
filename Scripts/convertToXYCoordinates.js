export const convertToXY = (piecePosition) => {

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

export default convertToXY;