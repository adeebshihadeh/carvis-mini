var content = {
  handleInput: function(input) {
    if (focus == "content") {

    }
  },
  setScreen: function(id) {
    $(".screen").hide();
    $("#" + id + "-screen").show();
  },
  init: function() {
    $(".content").css("height", ($("body").height() - ($(".topbar").height() + $(".navbar").height())) + "px");
    this.setScreen("audio");
  }
};
