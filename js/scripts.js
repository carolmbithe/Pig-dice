
var randomize = function(){
  var rolledSide = Math.floor((Math.random() * 6) + 1);
  return rolledSide;
}

$(document).ready(function() {
$("button#play1").click(function(){

  var rolledSide1= randomize();

  $("#rolledside1").text(rolledSide1);
  var score1 = calcScore(rolledSide1);
  $("#totalscore1").text(score1);

  if(rolledSide1==1  ) {

    alert("Ooops!!You rolled 1.It's the other player's turn");
  }
});
  $("button#hold1").click(function(){
    alert("Its the other players turn");
  });
$("button#play2").click(function(){
  var rolledSide2= Math.floor(Math.random()*6)+1

$("#rolledside2").text(rolledSide2);
$("#totalscore2").text(rolledSide);
  });
if(rolledSide2==1) {

  alert("Ooops!!You rolled 1.It's the other player's turn");
}
$("button#hold2").click(function(){
alert("Its the other players turn");
//}
  });
});
