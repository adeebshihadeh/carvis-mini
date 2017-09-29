
/*

  space = select
  up/right/left/down arrows are themselves

*/

function report(key) {
  scroll(key);
}


$(window).keydown(function(e) {

  switch (e.keyCode) {
    case 38:
      report("up");
      break;
    case 40:
      report("down");
      break;
    case 39:
      report("right");
      break;
    case 37:
      report("left");
      break;
    case 32:
      report("select");
      break;
    default:
      console.log("unimplemented key: " + e.keyCode);
  }
});