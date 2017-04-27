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
                this.output.push('init');
                this.setSize(command, command);
            } else {
                if(command.substr(0,1) < 10) {
                    // not first command if it starts with a number it's a start command
                    this.output.push('---START COMMAND---');
                    this.output.push('START: ' + command);
                } else {
                    // otherwise it's an instruction set 
                    this.output.push('END: ' + command);
                }
            }
            this.commandCount++;
        }
    }

    setSize(width, height) {
        this.width = width;
        this.height = height;
        
        this.grid = new Array(height);        
        for(var y = 0; y < height; y++) {
            this.grid[y] = new Array(width);
        }
    }

}

export { MarsGrid }