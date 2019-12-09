function setup() {
    createCanvas(windowWidth, windowHeight);
    planet = new Stellar()
}

function mouseClicked() {
    planet = new Stellar()
}

function draw() {
    background(11);
    planet.display()
    console.log(planet.distance())
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

class Stellar {
    constructor() {
      this.x = windowWidth / 2;
      this.y = windowHeight / 2;
      this.d = 99;
    }
  
    display() {
      ellipse(this.x, this.y, this.d);
    }
    distance() {
        return sqrt(Math.pow(this.x - mouseX, 2) + Math.pow(this.y - mouseY, 2))
    }
  }
  