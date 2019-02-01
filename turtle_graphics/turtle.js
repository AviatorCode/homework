class Turtle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.currentDirection = "E";
        console.log(`starting at ${x},${y}`);
        this.moveHistory= [];
        //Push starting coordinate into moveHistory Array
        this.moveHistory.push([this.x,this.y]);
    }

    forward(steps) {
        console.log(`moved forward ${steps} steps in ${this.currentDirection}`);

        
        // console.log(`currently at ${this.x},${this.y}`);

        switch (this.currentDirection) {
            case "N":
                // this.x = x;
                //for each step push in a new coordinate
                this.y -= steps;
                break;
            case "S":
                // this.x = x;
                this.y += steps; 
                break;
            case "E":
                this.x += steps;
                // this.y = y;
                break;
            case "W":
                this.x -= steps;
                // this.y = y;
                break;
        }
        // Push current path coordinates into moveHistory 
        this.moveHistory.push([this.x,this.y]);

        console.log(`now at ${this.x},${this.y}`);
       
        return this;
    }

    left() {
        console.log(`current direction is ${this.currentDirection}`);
        switch (this.currentDirection) {
            case "N":
                this.currentDirection = "W";
                break;
            case "S":
                this.currentDirection = "E";
                break;
            case "E":
                this.currentDirection = "N";
                break;
            case "W":
                this.currentDirection = "S";
                break;
        }
        console.log(`turned left, current direction now is ${this.currentDirection}`);
        return this;
    }

    right() {
        console.log(`current direction is ${this.currentDirection}`);
        switch (this.currentDirection) {
            case "N":
                this.currentDirection = "E";
                break;
            case "S":
                this.currentDirection = "W";
                break;
            case "E":
                this.currentDirection = "S";
                break;
            case "W":
                this.currentDirection = "N";
                break;
        }
        console.log(`turned right, current direction now is ${this.currentDirection}`);
        return this;
    }
    print(){
        console.log(this.moveHistory);
        

    }
}
console.log(new Turtle(0, 4)
    .forward(3)
    .left()
    .forward(3)
    .right()
    .forward(5)
    .right()
    .forward(8)
    .right()
    .forward(5)
    .right()
    .forward(3)
    .left()
    .forward(3)
    .print());

//console.log(new Turtle(0,4).forward(3).left().forward(3));