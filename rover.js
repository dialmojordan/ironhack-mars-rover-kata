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

    //print out rover position

    console.log(`The rover has position: x= ${rover.x} ,  y= ${rover.y};`)

    //declare a new variable in order to update and push the new position into our roverObject

    let newPosition = {
        x: rover.x,
        y: rover.y
    };

    rover.travelLog.push(newPosition);
}

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
        }
    }

    console.log(`The rover path was: ${rover.travelLog});

}