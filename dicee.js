function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var img1 = document.getElementsByClassName("img1")[0];
var random1 = getRandomInt(6);
var random2 = getRandomInt(6);
var img2 = document.getElementsByClassName("img2")[0];
console.log(random1);
console.log(img2);
img1.setAttribute("src","images/dice"+(random1+1)+".png");
img2.setAttribute("src","images/dice"+(random2+1)+".png");
if(random1>random2){
  document.querySelector("h1").innerHTML = "Player1 won =)";
}
else if(random1<random2){
  document.querySelector("h1").innerHTML = "Player2 won =)";
}
else{
  document.querySelector("h1").innerHTML = "Draw =)";
}
