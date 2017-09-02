var navbar = {
  setScreen: function(id) {
    $(".navbar-item").removeClass("active")
    $("#" + id).addClass("active");
  },
  incrementTab: function(right) {
    var index = $(".navbar-item.active").index() + (right ? 1 : -1);

    if (index >= 0 && index < $(".navbar-item").length) {
      this.setScreen($($(".navbar-item")[index]).text());
      console.log($($(".navbar-item")[index]).text());
    } else {
      console.log(index);
    }
  },
  handleInput: function(input) {
    if (core.focus == "navbar") {
      if (input == "right" || input == "twistRight") {
        this.incrementTab(true);
      } else if (input == "left" || input == "twistLeft") {
        this.incrementTab(false);
      }
    }
  }
};