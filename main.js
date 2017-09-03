var core = {
  focus: "content",
  modules: [],
  shiftFocus: function(ascend) {
    this.focus = (ascend ? "navbar" : "content");
  },
  handleInput: function(input) {
    // console.log("input: " + input);

    if (input == "up") {
      this.shiftFocus(true);
    } else if (input == "down") {
      this.shiftFocus(false);
    } else if (input == "right") {

    } else if (input == "left") {

    } else if (input == "twistRight") {

    } else if (input == "twistLeft") {

    } else if (input == "select") {

    }

    this.broadcastInput(input);
  },
  broadcastInput: function(input) {
    for (module in this.modules) {
      this.modules[module].handleInput(input);
    }
  },
  registerModule: function(module) {
    this.modules.push(module);
  }
};


$(document).keydown(function(e) {
  // console.log(e.keyCode);
  switch(e.keyCode) {
    case 119: // w
      core.handleInput("up");
      break;
    case 97: // a
      core.handleInput("left");
      break;
    case 115: // s
      core.handleInput("down");
      break;
    case 100: // d
      core.handleInput("right");
      break;

    case 38: // up arrow
      core.handleInput("up");
      break;
    case 37: // left arrow
      core.handleInput("left");
      break;
    case 40: // down arrow
      core.handleInput("down");
      break;
    case 39: // right arrow
      core.handleInput("right");
      break;

    case 32: // spacebar
      core.handleInput("select");
      break;

    default:
      console.log("unimplemented key: " + e.keyCode);
      break;
  }
});

$(document).bind('mousewheel', function(e) {
  if(e.originalEvent.wheelDelta / 120 > 0) {
    core.handleInput("twistRight");
  } else{
    core.handleInput("twistLeft");
  }
});