//import { createClient } from 'C:\Users\deltagare\Desktop\pexels\dist\main.js';
//function getImageFromPexels(){
//const client = createClient('563492ad6f9170000100000114141580c3c04d539189908bd3b0c145');
//var x;
//client.photos.show({ id: 3715989 }).then(photo => {x = photo.src.small});
//https://www.pexels.com/photo/macro-photography-of-sparkling-diamonds-3715989/
//make a request towards pexels API and get 1 Diamond image
//}
function init(){
  initGameUI();
}
var e;
var randomNumber;
function randomChest(){
  e = Math.floor(Math.random()*3);
  chestClicked(e)
}
function initGameUI(){
  // Call functions that creates the Game UI
  initScoreBoard(0);
  var x = document.getElementById("openChest1");
  var y = document.getElementById("openChest2");
  var z = document.getElementById("openChest3");
  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "none";
}

function initChests(){
  
}
localStorage.setItem("scoreTo", 0);
var totalScore = 0;
function initScoreBoard(plusScore){
  console.log("scoreTo: ",  sessionStorage.getItem("scoreTo")) //scoreTo console test
  totalScore = parseInt(sessionStorage.getItem("scoreTo")) | 0;
  document.getElementById("score").innerHTML = "";
  document.getElementById("score").innerHTML = totalScore;
  totalScore = parseInt(totalScore) + parseInt(plusScore);
  sessionStorage.setItem("scoreTo", totalScore);
}

function initRefreshButton(){
  location.reload();
  // location.href = location.href;
}

function initChestEventListeners(){
  // var chest1 = document.getElementById("btn1")
  // chest1.addEventListener("click", chestClicked(getAttribute('attribute')));
  // var chest2 = document.getElementById("btn2")
  // chest2.addEventListener("click", chestClicked(getAttribute('attribute')));
  // var chest3 = document.getElementById("btn3")
  // chest3.addEventListener("click", chestClicked(getAttribute('attribute')));
  // var refBut = document.getElementById("refresh-button")
  // refBut.addEventListener("click", initRefreshButton());
  
}

function placeTreassure(){
var z = document.getElementById("x");
z.style.show
}
function removeChest(num){
  document.getElementById("chest"+num).style.display = 'none';
}

function chestClicked(num){
  if(num == Math.floor(Math.random()*3))
  {
    
    initScoreBoard(5);
    removeChest(num);
    getImageFromPexels();
    placeTreassure();
  }
  else
  {
    removeChest(num);
    placeChest(num);
  }
  }

  function placeChest(num)
  {
    var x = document.getElementById("openChest"+num);
    x.style.display = "block";
  }


function refresh(){
}

function removeChestEvents(){ 
}
//export {initScoreBoard}