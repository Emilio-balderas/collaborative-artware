window.brushes.rectangle = {
  name: 'rectangle',
  draw: function () {
    if (mouseIsPressed && !window.dragging) {
      const hue = random(0, 360)
      colorMode(HSB)
      fill(hue, 0, 100)
      stroke(0, 0, 0)
      const radius = sin(frameCount * 0.1) * 80
      rect(mouseX, mouseY, radius, radius)
    }
  }
}
