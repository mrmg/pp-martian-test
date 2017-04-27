export default class Robot {

    constructor() {
        this.rotations = [
            'N', 'E', 'S', 'W'
        ]
        this.movement = [
            [0, 1],
            [-1, 0],
            [0, -1],
            [1, 0]
        ]
        this.rot = 0;
        this.pos = [0, 0];
        
    }
    get rotation() {
        return this.rotations[this.rot];
    }
    rotate(dir) {
        switch(dir) {
            case "R":
                this.rot = (this.rot + 1 == this.rotations.length) ? 0 : this.rot++;
                break;
            case "L":
                this.rot = (this.rot - 1 < 0) ? this.rotations.length - 1 : this.rot--;
                break;
            default:
                throw new Error("Invalid rotation");
        }

        return this.rot;
    }
}
