var navbar = {
  setActiveTab: function(id) {
    $(".navbar-item").removeClass("active")
    $("#" + id).addClass("active");
  },
  setHoverTab: function(id) {
    $(".navbar-item").removeClass("hover")
    $("#" + id).addClass("hover");
  },
  incrementTab: function(right) {
    var index = $(".navbar-item.hover").index() + (right ? 1 : -1);

    if (index >= 0 && index < $(".navbar-item").length) {
      this.setHoverTab($($(".navbar-item")[index]).text());
    }
  },
  handleInput: function(input) {
    if (core.focus == "navbar") {
      if (input == "right" || input == "twistRight") {
        this.incrementTab(true);
      } else if (input == "left" || input == "twistLeft") {
        this.incrementTab(false);
      } else if (input == "select") {
        content.setScreen($(".navbar-item.hover").text());
        this.setActiveTab($(".navbar-item.hover").text());
      }
    }
  },
  init: function() {}
};