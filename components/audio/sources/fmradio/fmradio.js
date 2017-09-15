var fmradio = {
  canvas: null,
  ctx: null,
  freq: 100,
  markerDensity: 20,
  markerWidth: 3,
  markerHeight: 75,
  handleInput: function(input) {
    if (this.hasFocus()) {
      if (input == "right" || input == "twistRight") {
        this.freq++;
        this.freq += (this.freq >= this.canvas.width ? 0 : 1);
      } else if (input == "left" || input == "twistLeft") {
        this.freq -= (this.freq <= 0 ? 0 : 1);
      }
      this.updateFreq(this.freq);
    }
  },
  hasFocus: function() {
    return true;
  },
  updateFreq: function(frequency) {
    this.selectFreq(frequency);
    this.draw(frequency);
  },
  selectFreq: function(frequency) {
    // server communication
  },
  draw: function(frequency) {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = "white";
    for (var i  = 0; i < this.canvas.width; i += this.canvas.width/this.markerDensity) {
      this.ctx.fillRect(i, this.canvas.height-this.markerHeight, this.markerWidth, this.markerHeight);
    }

    // draw dynamic elements
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(frequency, 0, 5, this.canvas.height);
  },
  init: function() {
    this.canvas = document.getElementById("fmradio_input_widget");
    this.ctx = this.canvas.getContext("2d");
    
    this.updateFreq(this.freq);
  }
};
