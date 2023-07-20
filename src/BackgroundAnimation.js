import React from "react";
import Sketch from "react-p5";

const particles = [];

function BackgroundAnimation() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    for (let i = 0; i < p5.windowWidth / 50; i++) {
      particles.push(new Particle(p5));
    }
  };

  const draw = (p5) => {
    p5.background("#f3c677"); // Transparent background
    for (let i = 0; i < particles.length; i++) {
      particles[i].createParticle();
      particles[i].moveParticle();
      particles[i].joinParticles(particles.slice(i), p5);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}

class Particle {
  constructor(p5) {
    this.p5 = p5;
    this.x = this.p5.random(0, this.p5.width);
    this.y = this.p5.random(0, this.p5.height);
    this.size = this.p5.random(2.5, 5);
    this.speedX = this.p5.random(-1.6, 1.6);
    this.speedY = this.p5.random(-1.6, 1.6);
  }

  createParticle() {
    this.p5.noStroke();
    this.p5.fill("#fffff0");
    this.p5.circle(this.x, this.y, this.size);
  }

  moveParticle() {
    if (this.x < 0 || this.x > this.p5.width) this.speedX *= -1;
    if (this.y < 0 || this.y > this.p5.height) this.speedY *= -1;
    this.x += this.speedX;
    this.y += this.speedY;
  }

  joinParticles(particles, p5) {
    particles.forEach((element) => {
      let dis = this.p5.dist(this.x, this.y, element.x, element.y);
      if (dis < 190) {
        this.p5.stroke("#fffff0)");
        this.p5.line(this.x, this.y, element.x, element.y);
      }
    });
  }
}

export default BackgroundAnimation;
