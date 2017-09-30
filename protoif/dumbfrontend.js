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
  $("#menubar").children().removeClass("btn-hover");
}

function scroll(input) {

  if (input == "up" || input == "down") {
    shiftRowFocus(input);
  }

  if (hasFocus($("#menubar"))) {
    if (input == "right" || input == "left") {
      if (!$(".menubar-item.btn-hover").length) {
        $($(".menubar-item")[0]).addClass("btn-hover");
      } else {
        var index = $("#menubar .menubar-item.btn-hover").index();
        index = limit($(".menubar-item").length-1 , 0, index + (input == "right" ? 1 : -1));
        $(".menubar-item").removeClass("btn-hover");
        $($(".menubar-item")[index]).addClass("btn-hover");
      }
    }
  }

  if (input == "select") {
    if (hasFocus($("#menubar"))) {
      $(".btn-hover").click();
    } else {
      $(".scrollable-focus").click();
    }
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
  return $(el).hasClass("scrollable-focus") || $(el).hasClass("btn-hover");
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


$(".content-select").click(function() {
  setContent($(this).text());
});

