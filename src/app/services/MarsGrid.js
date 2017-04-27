class MarsGrid {
    constructor() {

    }

    setSize(width, height) {
        this.width = width;
        this.height = height;
        
        this.grid = new Array(height);        
        for(var y = 0; y < height; y++) {
            this.grid[y] = new Array(width);
        }

        console.log(this.grid);
    }

}

export { MarsGrid }