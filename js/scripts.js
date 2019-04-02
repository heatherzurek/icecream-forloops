var flavors = ["chocolate", "vanilla", "chunky monkey", "rum raisin", "americone dream"];

$(document).ready(function() {
console.log("working");
  for (var index = 0; index < flavors.length; index ++) {

  // flavors.forEach(function(flavor) {
    $("#listOf_iceCreamFlavors").append("<li>" + flavors[index] + "</li>"); console.log(flavors[index]);
  };
  $("#listOf_iceCreamFlavors").show();
});
