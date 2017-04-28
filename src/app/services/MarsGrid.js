import Robot from "../actors/Robot";

class MarsGrid {
    constructor() {
        this.output = [];
        this.grid = [[]];
        this.currentRobot = undefined;
        this.falls = [];
    }

    runInstruction(instruction) {
        this.commandCount = 0;
        this.output.length = 0;
        this.falls.length = 0;
        let commands = instruction.split("\n");
        commands.map((command) => this.runCommand(command));
    }

    runCommand(command) {
        if(command) {
            if(this.commandCount === 0) {
                // initial command is setting grid size
                this.setSize(command);
            } else {
                if(command.substr(0,1) < 10) {
                    // not first command if it starts with a number it's a start command
                    this.processStart(command);
                } else {
                    // otherwise it's an instruction set 
                    this.processMovement(command);
                }
            }
            this.commandCount++;
        }
    }

    processStart(command) {
        this.output.push('-');
        this.output.push('START: ' + command);
        let positions = command.split("");
        // new start position so lets make a new robot
        this.currentRobot = new Robot(positions[0], positions[1], positions[2]);
    }

    processMovement(command) {
        let commands = command.split("");
        try {
            commands.map((instruction) => this.processInstruction(instruction));
            this.output.push('END: ' + this.currentRobot.position);
        } catch(e) {
            // robot lost
            this.falls.push(this.currentRobot.position);
            this.output.push('END: ' + this.currentRobot.position + "LOST");
        }
    }

    processInstruction(i) {
        switch(i) {
            case "R":
            case "L":
                this.currentRobot.rotate(i);
                break;
            case "F":
                this.moveRobotForward();
                break;
            default:
                throw new Error("Not a valid movement command");
        }
    }

    moveRobotForward() {
        let nextPos = [
            this.currentRobot.pos[0] + this.currentRobot.direction[0],
            this.currentRobot.pos[1] + this.currentRobot.direction[1]
        ];
        try {
            if(nextPos[0] < 0 || nextPos[1] < 0 ||
                nextPos[0] > this.width || nextPos[1] > this.height) {
                throw new Error("Move out of bounds");
            }
            // move is ok
            this.currentRobot.pos = nextPos;
        } catch(e) {
            // move out of bounds
            // check if move previously tried
            if(this.falls.indexOf(this.currentRobot.position) < 0)
                throw new Error("Move out of bounds");
        }
    }

    setSize(command) {
        let dimensions = command.split("");
        this.width = dimensions[0];
        this.height = dimensions[1];
        
        this.output.push('Creating grid of size: ' + this.width +" x " + this.height);
        
        this.grid = new Array(this.height);        
        for(var y = 0; y < this.height; y++) {
            this.grid[y] = new Array(this.width);
        }
    }

}

export { MarsGrid }