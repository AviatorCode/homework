class Turtle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.currentDirection = "E";
        this.points = [[x, y]];
        console.log(`starting at ${x},${y}`);
        this.moveHistory = [];
        
        this.moveHistory.push([this.x, this.y]);
    }

    allPoints(){
        return this.points;
    }


    forward(steps) {
        console.log(`^^^^^^^^^^moved forward ${steps} steps in ${this.currentDirection}`);

       console.log(`^^^^^^^^^^currently at ${this.x},${this.y}`);
        let y1 = this.y;
        let x1 = this.x;

        switch (this.currentDirection) {
            case "N":
                            //
                for (let i = 1; i <= steps; i++) {
                    this.points.push([x1, y1 - i]);
                    this.y -= 1;
                }
                console.log('+++++++++++++', this.points);
                

                break;

            case "S":
                for (let i = 1; i <= steps; i++) {
                    this.points.push([x1, y1 + i]);
                    this.y += 1;
                }
                console.log('+++++++++++++', this.points);
                break;

            case "E":
                for (let j = 1; j <= steps; j++) {
                    this.points.push([x1 + j, y1]);
                    this.x += 1;
                }
                console.log('+++++++++++++', this.points);
                break;
                
            case "W":
                for (let j = 1; j <= steps; j++) {
                    this.points.push([x1 - j, y1]);
                    this.x -= 1;
                }
                console.log('+++++++++++++', this.points);
                break;
        }
         // Push current path coordinates into moveHistory 
        console.log(`This is inside the case statement ###### ${this.moveHistory.push([this.x, this.y])}`);
        
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
    // TA Paul assisted with solving this piece
    print() {
        let points = this.points;
        let obj = {};
        points.forEach((point) => {
            obj[`${point}`] = true;
            console.log("@@@@@@@"+ point);
        });
        console.log(obj);
        for (let y =0; y < 10; y++){
            let result = '';
            for (let x=0; x < 10; x++){
                let coordinate = [x, y];
                if(obj[`${coordinate}`]){
                    result = result + '■';
                } else {
                    result = result + '□';
                }
            };
            console.log(result);
        };
    }
}
new Turtle(0, 4)
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
    .print()



    
