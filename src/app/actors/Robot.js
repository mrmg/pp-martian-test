export default class Robot {

    constructor(x, y, r) {
        this.rotations = [
            'N', 'E', 'S', 'W'
        ]
        this.movement = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ]
        this.rot = this.rotations.findIndex(i => i == r);
        this.pos = [Number(x), Number(y)];        
    }
    rotate(dir) {
        switch(dir) {
            case "R":
                this.rot = (this.rot + 1 == this.rotations.length) ? 0 : this.rot + 1;
                break;
            case "L":
                this.rot = (this.rot - 1 < 0) ? this.rotations.length - 1 : this.rot - 1;
                break;
            default:
                throw new Error("Invalid rotation");
        }

        return this.rot;
    }
    get rotation() {
        return this.rotations[this.rot];
    }
    get direction() {
        return this.movement[this.rot];
    }
    get position() {
        return "" + this.pos[0] + this.pos[1] + this.rotation;
    }
}
