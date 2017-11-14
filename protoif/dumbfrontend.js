var frontend = {
  handle_msg: function(msg) {},
  on_disconnect: function() {
    $("#statusbar-server-status").text("server disconnected");
  },
  on_connect: function() {
    $("#statusbar-server-status").text("server connected");
  }
};
registerModule(frontend);

function updateTime() {
  var time = new Date();
  $("#statusbar-time").text(time.getHours() + ":" + (time.getMinutes() < 10 ? "0" : "") + time.getMinutes());
}


function setContent(content) {
  $(".content").hide();
  $("#" + content + ".content").show();
  shiftRowFocus("up");
}

function changeTab(tab) {
  setContent(tab);
  $("#menubar").children().removeClass("btn-hover");
}

function scroll(input) {
  if (input == "up" || input == "down") {
    shiftRowFocus(input);
  } else if (input == "right" || input == "left") {
    shiftBtnFocus(input);
  } else if (input == "select") {
    if ($(".scrollable-focus > .btn-hover").length) {
      $(".scrollable-focus > .btn-hover").click();
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
  $($(".scrollable-row:visible")[index]).addClass("scrollable-focus");
}

function shiftBtnFocus(direction) {
  if ($(".scrollable-focus > .btn").length) {
    if (!$(".scrollable-focus > .btn-hover").length) {
      $($(".scrollable-focus > .btn")[0]).addClass("btn-hover");
    } else {
      var index = $(".scrollable-focus > .btn-hover").index();
      index = limit($(".scrollable-focus > .btn").length-1 , 0, index + (direction == "right" ? 1 : -1));
      $(".scrollable-focus > .btn").removeClass("btn-hover");
      $($(".scrollable-focus > .btn")[index]).addClass("btn-hover");
    }
  }
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

  $(".btn-row").each(function() {
    $(this).children().css("width", 100/$(this).children().length + "vw")
  });

  updateTime();
  window.setInterval(updateTime, 2000);

  setContent("nav");
});


$(".content-select").click(function() {
  setContent($(this).text());
});
