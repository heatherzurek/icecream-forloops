var flavors = ["chocolate", "vanilla", "chunky monkey", "rum raisin", "americone dream"];

$(document).ready(function () {

  flavors.forEach(function(flavor) {
    $("#listOf_iceCreamFlavors").append("<li>" + flavor + "</li>");

  
  });
});
