/* global mouseIsPressed, random, colorMode, fill, stroke, sin, ellipse,
 HSB, frameCount, mouseX, mouseY */

let cat;
function preload(){
cat = loadImage("images/cat.png")
}


window.brushes.catbrush = {
  name: 'cat brush',
  draw: function setup() {
    if (mouseIsPressed && !window.dragging) {
      const hue = random(0, 360)
      colorMode(HSB)
      fill(hue, 50, 100)
      stroke(0, 0, 0)
      const radius = sin(frameCount * 0.1) * 80
      let words = ["cat", "kitten" , "chonk", ];
      let word = random(words);
      text(word, mouseX, mouseY, radius, radius)
    }
  }
}
