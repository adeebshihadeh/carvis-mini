var topbar = {
  updateTime: function() {
    var time = new Date();
    $("#topbar-time").text(time.getHours() + ":" + (time.getMinutes() < 10 ? "0" : "") + time.getMinutes());
  },
  init: function() {
    this.updateTime();
  }
};

setInterval(topbar.updateTime, 2000);