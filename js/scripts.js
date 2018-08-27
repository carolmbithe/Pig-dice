
//function player(rolledside,totalscore) {
//this.ROLLEDSIDE = rolledside;
//}

//var player1=new player(rolledside1,totalscore1);
//var player2=new player(rolledside2,totalscore2);
//  player.prototype.totalScore = function() {
  //return this.ROLLEDSIDE += ROLLEDSIDE;
//}
//player1.rolledside
//player2.rolledside
//player1.totalscore
//player2.totalscore
//var totalScore =0;



$(document).ready(function() {
$("button#play1").click(function(){

  var rolledSide1=Math.floor(Math.random()*6)+1

  $("#rolledside1").text(rolledSide1);
  $("#totalscore1").text(rolledSide);

  if(rolledSide1==1  ) {

    alert("Ooops!!You rolled 1.It's the other player's turn");
  }
  $("button#hold1").click(function(){
    alert("Its the other players turn");
  });
$("button#play2").click(function(){
  var rolledSide2=Math.floor(Math.random()*6)+1

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
