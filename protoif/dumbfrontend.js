var focus = "content";


function updateTime() {
  var time = new Date();
  $("#statusbar-time").text(time.getHours() + ":" + (time.getMinutes() < 10 ? "0" : "") + time.getMinutes());
}



function setContent(content) {
  $(".content").hide();
  $("#" + content + ".content").show();
}

function changeTab(tab) {
  setContent(tab);
  $("#menubar").children().removeClass("hover");
}

function scroll(input) {

  if (input == "up" || input == "down") {
    shiftRowFocus(input);
  }

  if (hasFocus($("#menubar"))) {
    if (input == "down") {
      // shiftFocus("content");
    } else if (input == "right" || input == "left") {
      if (!$(".menubar-item.hover").length) {
        $($(".menubar-item")[0]).addClass("hover");
      } else {
        var index = $("#menubar .menubar-item.hover").index();
        index = Math.min(Math.max(parseInt( index + (input == "right" ? 1 : -1) ), 0), $(".menubar-item").length-1);
        $(".menubar-item").removeClass("hover");
        $($(".menubar-item")[index]).addClass("hover");
      }
    } else if (input == "select") {
      changeTab($(".menubar-item.hover").text());
      shiftFocus("content");
    }
  } else {
    // content does a thing
    if (input == "up") {
      focus = "menubar";
    }
  }
}

function shiftFocus(zone) {
  focus = zone;
  if (focus == "content") {
    $(".menubar-item").removeClass("hover");
  }
}

function shiftRowFocus(direction) {
  var index = 0;
  $(".scrollable-row:visible").each(function() {
    if ($(this).hasClass("scrollable-focus")) {
      return false;
    }
    index++;
  });
  
  index += (direction == "up" ? -1 : 1);
  index = limit($(".scrollable-row:visible").length-1, 0, index);

  $(".scrollable-row").removeClass("scrollable-focus");
  $($(".scrollable-row")[index]).addClass("scrollable-focus");
}

function hasFocus(el) {
  return $(el).hasClass("scrollable-focus");
}

function limit(max, min, val) {
  return Math.min(Math.max(parseInt(val), min), max);
}

$(document).ready(function() {
  var height = $("body").height() - ($("#statusbar").height() + $("#menubar").height());
  $("#content").css("height", height);

  updateTime();
  window.setInterval(updateTime, 2000);

  setContent("nav");
});
