//Business
var favReorder = function(sampleArray) {
  //Scramble the first three array items
  newArray = [];
  newArray.push(sampleArray[1], sampleArray[0], sampleArray[2]);
  return newArray;
};

//User-Interface


$(document).ready(function(){

$("#fav-submit").click(function(){
  var iceCream = $("#ice-cream").val();
  var favColor = $("#color").val();
  var favBand = $("#band").val();
  var favs = [iceCream, favColor, favBand];

  finalFavs = favReorder(favs);

  $("#results").append("<li>"+finalFavs[0]+"</li>");
  $("#results").append("<li>"+finalFavs[1]+"</li>");
  $("#results").append("<li>"+finalFavs[2]+"</li>");




});
});
