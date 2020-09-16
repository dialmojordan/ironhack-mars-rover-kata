// Rover Object Goes Here

let myRover = {
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: [{
        x: 0,
        y: 0
    }]
}

//BONUS 4 creating a 10x10 board (check)

//let board = [
//  [myRover, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
//  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
//]

// ======================

function turnLeft(rover) {

    console.log('turnLeft was called!');

    switch (rover.direction) {

        case 'N':
            rover.direction = 'W';
            break;

        case 'W':
            rover.direction = 'S';
            break;

        case 'S':
            rover.direction = 'E';
            break;

        case 'E':
            rover.direction = 'N';
            break;
    }
}

function turnRight(rover) {

    console.log('turnRight was called!');

    switch (rover.direction) {
        case 'N':
            rover.direction = 'E';
            break;

        case 'W':
            rover.direction = 'N';
            break;

        case 'S':
            rover.direction = 'W';
            break;

        case 'E':
            rover.direction = 'S';
            break;
    }
}

function moveForward(rover) {
    console.log('moveForward was called');
    // check BONUS 1  if (rover.x >= 0 && rover.x < 9 && rover.y >= 0 && rover.y < 9) {
    switch (rover.direction) {

        case 'N':
            rover.x++;
            break;

        case 'W':
            rover.y--;
            break;

        case 'S':
            rover.x--;
            break;

        case 'E':
            rover.y++;
            break;
    }
    //check } else {
    //check console.log(''
    //check  You cannot place the rover outside the board!'');
    //check }

}

//print out rover position

console.log(`The rover has position: x= ${rover.x} ,  y= ${rover.y};`)

//declare a new variable in order to update and push the new position into our roverObject

let newPosition = {
    x: rover.x,
    y: rover.y
};

rover.travelLog.push(newPosition);


function moveBackward(rover) {
    console.log('moveBackward was called');
    // check   if (rover.x >= 0 && rover.x < 9 && rover.y >= 0 && rover.y < 9) {
    switch (rover.direction) {

        case 'N':
            rover.x--;
            break;

        case 'W':
            rover.y++;
            break;

        case 'S':
            rover.x++;
            break;

        case 'E':
            rover.y--;
            break;
    }
    //check } else {
    //check console.log(''
    //check  You cannot place the rover outside the board!'');
    //check }
    rover.travelLog.push(newPosition);

}

//print out rover position

console.log(`The rover has position: x= ${rover.x} ,  y= ${rover.y};`)

//create a function that receives a list of commands (what the rover should do when we give it certain commands)

function command(rover, orders) {
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];

        switch (order) {

            case 'f':
                moveForward(rover, order);
                break;

            case 'r':
                turnRight(rover, order);
                break;

            case 'l':
                turnLeft(rover, order);
                break;

            case 'b':
                moveBackward(rover, order);
                break;
                //BONUS 3// If we enter a letter into our input that is not one of the rover commands, nothing will happen    
                // check  default:
                // check continue; 

        }
    }

    console.log(`The rover path was: ${rover.travelLog});

}