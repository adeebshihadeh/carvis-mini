var phone = {

};

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