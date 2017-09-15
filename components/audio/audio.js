var audio = {
  focus: "selector",
  sources: [],
  setActiveTab: function(id) {
    id = id ? id : $("#audio-source-selector > li.hover").attr("id");
    $("#audio-source-selector").children().removeClass("active");
    $("#" + id).addClass("active");
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
  selectSource: function(source) {
    source = source ? source : $("#audio-source-selector > li.hover").attr("id");
    this.setActiveTab(source);
    $(".audio-source").hide();
    $("#" + source + "-source").show();
  },
  registerSource: function(source) {
    this.sources.push(source);
    source.init();
  },
  handleInput: function(input) {
    if (core.focus == "content") {
      if (this.focus == "selector") {
        if (input == "twistLeft") {
          this.scrollSelector(true);
        } else if (input == "twistRight") {
          this.scrollSelector(false);
        } else if (input == "select") {
          this.selectSource();
        } else if (input == "right") {
          this.focus = "source";
        }
      } else if (this.focus == "source") {
        if (input == "left") {
          this.focus = "selector";
        }
      }
    }
    for (source in this.sources) {
      this.sources[source].handleInput(input);
    }
  },
  init: function() {
    this.selectSource("fmradio");
  }
};