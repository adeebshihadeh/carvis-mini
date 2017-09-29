var focus = "content";
var focus_released = true;


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
  if (focus == "menubar") {
    if (input == "down") {
      shiftFocus("content");
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
    if (focus_released && input == "up") {
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



$(document).ready(function() {
  var height = $("body").height() - ($("#statusbar").height() + $("#menubar").height());
  $("#content").css("height", height);

  updateTime();
  window.setInterval(updateTime, 2000);

  setContent("nav");
});
