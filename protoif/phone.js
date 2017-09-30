var phone = {
  handle_msg: function(msg) {
    if (msg.phone.connected) {
      if (msg.phone.incall) {
        $("#phone-in-call").show();
        $("#phone-dialer").hide();
        $("#phone-not-connected").hide();
      } else {
        $("#phone-in-call").hide();
        $("#phone-dialer").show();
        $("#phone-not-connected").hide();
      }
    } else {
      $("#phone-in-call").hide();
      $("#phone-dialer").hide();
      $("#phone-not-connected").show();
    }
  }
};

phone.handle_msg({
  "phone": {
    "connected": true,
    "incall": true
  }
});

registerModule(phone);

$(".num-btn").click(function() {
  $("#phone-number-entry").append($(this).text());
});

$("#phone-clr-btn").click(function() {
  $("#phone-number-entry").text($("#phone-number-entry").text().substring(0, $("#phone-number-entry").text().length-1));
});

$("#phone-dial-btn").click(function() {
  console.log("dialing: " + $("#phone-number-entry").text());
});