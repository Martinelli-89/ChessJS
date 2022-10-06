export const convertXYtoBoardCoordinates= (XYPositions) => {

    let y = XYPositions[1];

    switch(XYPositions[0]) {
        case(1):
            return "a"+y;
        case(2):
            return "b"+y;
        case(3):
            return "c"+y;
        case(3):
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

export default convertXYtoBoardCoordinates;