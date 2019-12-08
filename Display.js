function setup() {
    createCanvas(windowWidth, windowHeight);
    planet = new Star()
}

function draw() {
    fill(227 ,0, 80);
    background(21);
    noStroke()
    planet.display()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

class Star {
    constructor() {
      this.x = windowWidth / 2;
      this.y = windowHeight / 2;
      this.d = int(prompt("How big, b?"));
    }
  
    display() {
      ellipse(this.x, this.y, this.d);
    }
  }
  