let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, 100, 100);

class Area {
    constructor() {
        this.width = canvas.width;
        this.height = canvas.height;
        this.cols = [];
        for (let i = 0; i < this.width; i++) {
            this.cols[i] = [];
            for (let j = 0; j < this.height; j++) {
                this.cols[i][j] = new Cell(i, j);
            }
        }
    }

    start() {
        let percent = 30;
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                let setStt = Math.floor(Math.random() * 101);
                if (setStt > percent) {
                    this.cols[i][j].state = false;
                }
                else if (setStt <= percent) {
                    this.cols[i][j].state = true;
                }
            }
        }
    }

    draw() {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                if (this.cols[i][j].state = true) {
                    ctx.fillStyle = "#00FF00";
                }
                else if (this.cols[i][j].state = false) {
                    ctx.fillStyle = "#000000";
                }
                ctx.fillRect(i, j, 1, 1);
            }
        }
    }
}

class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this._state = false;
    }

    get state() {
        return this._state;
    }

    set state(x) {
        this._state = x;
    }
}

let game_area = new Area();
game_area.start();
game_area.draw();