module.exports =  class bomb {
    constructor(x, y,) {
        this.x = x;
        this.y = y;
    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getDirections(ch) {
        this.newDirections();
        var found = [];

        for (let i = 0; i < this.directions.length; i++) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move() {
        let cord = random(this.getDirections(0));
        let cord2 = this.getDirections(1);



        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        } else if (cord2.length == 8) {
            for (let i = 0; i < 8; i++) {
                let x = cord2[i][0];
                let y = cord2[i][1];
                matrix[y][x] = 2
                eatArr.push(new GrassEater(x, y));
                for (let b = 0; b < xotArr.length; b++) {
                    if (x == xotArr[b].x && y == xotArr[b].y) {
                        xotArr.splice(b, 1);
                    }
                }
            }
        }
    }
}