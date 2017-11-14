var phone = {
  handle_msg: function(msg) {
    if (msg.phone) {
      $("#phone-in-call").toggle(msg.phone.incall);
      $("#phone-dialer").toggle(msg.phone.connected && !msg.phone.incall);
      $("#phone-not-connected").toggle(!msg.phone.connected);
    }
  }
};

phone.handle_msg({
  "phone": {
    "connected": true,
    "incall": false
  }
});

registerModule(phone);

$(".num-btn").click(function() {
  
  if ($("#phone-number-entry").text().length < 25) {
    $("#phone-number-entry").append($(this).text());
  }
});

$("#phone-clr-btn").click(function() {
  $("#phone-number-entry").text($("#phone-number-entry").text().substring(0, $("#phone-number-entry").text().length-1));
});

$("#phone-dial-btn").click(function() {
  console.log("dialing: " + $("#phone-number-entry").text());
  sendMsg({
    "phone":{
      "dial": $("#phone-number-entry").text()
    }
  });
});
