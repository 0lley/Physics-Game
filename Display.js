let Objects = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(11);
    for (let i = 0; i < Objects.length; i++) {
        Objects[i].display()
    }
}

function mousePressed() {
    Objects.push(new Stellar)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

class Stellar {
    constructor() {
        this.x = mouseX;
        this.y = mouseY;
        this.d = 99;
    }
  
    display() {
        noFill()
        strokeWeight(6)
        stroke(999)
        ellipse(this.x, this.y, this.d);
    }
    distance() {
        return sqrt(Math.pow(this.x - mouseX, 2) + Math.pow(this.y - mouseY, 2))
    }
  }
  