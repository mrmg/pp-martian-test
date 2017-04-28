import Robot from "../actors/Robot";

class MarsGrid {
    constructor() {
        this.output = [];
        this.grid = [[]];
    }

    runInstruction(instruction) {
        this.commandCount = 0;
        this.output.length = 0;
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
        this.output.push('---START COMMAND---');
        this.output.push('START: ' + command);
    }

    processMovement(command) {
        this.output.push('END: ' + command);
    }

    setSize(command) {
        this.width = command;
        this.height = command;
        
        this.output.push('Creating rrid of size: ' + command);
        
        this.grid = new Array(this.height);        
        for(var y = 0; y < this.height; y++) {
            this.grid[y] = new Array(this.width);
        }
    }

}

export { MarsGrid }