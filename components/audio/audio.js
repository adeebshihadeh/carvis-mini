var audio = {
  focus: "selector",
  setActiveTab: function() {
    $("#audio-source-selector").children().removeClass("active");
    $("#audio-source-selector > li.hover").addClass("active");
  },
  setHover: function(id) {
    $("#audio-screen *").removeClass("hover");
    $("#" + id).addClass("hover");
  },
  scrollSelector: function(up) {
    var index = $("li.hover").index() + (up ? 1 : -1);

    if (index >= 0 && index < $("#audio-source-selector").children().length) {
      this.setHover($($("#audio-source-selector").children()[index]).text());
    }
  },
  handleInput: function(input) {
    if (core.focus == "content") {
      if (this.focus == "selector") {
        if (input == "twistLeft") {
          this.scrollSelector(true);
        } else if (input == "twistRight") {
          this.scrollSelector(false);
        } else if (input == "select") {
          this.setActiveTab();
        }
      }
    }
  },
  init: function() {}
};