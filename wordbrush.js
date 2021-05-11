window.brushes.wordbrush = {
  name: 'word brush',
  draw: function setup() {
    if (mouseIsPressed && !window.dragging) {
      const hue = random(0, 360)
      colorMode(HSB)
      fill(hue, 0, 100)
      stroke(0, 0, 0)
      const radius = sin(frameCount * 0.1) * 80
      let words = ["Collaborative", "Art" , "Ware","2021" ];
      let word = random(words);
      text(word, mouseX, mouseY, radius, radius)
    }
  }
}
