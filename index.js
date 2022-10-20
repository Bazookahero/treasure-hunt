function getImageFromPexels(num){
let url = "https://api.pexels.com/v1/search?query=diamonds+query&per_page1&page=1";
let xhr = new XMLHttpRequest();
xhr.open('GET', url, true)
xhr.setRequestHeader('Authorization', '563492ad6f9170000100000114141580c3c04d539189908bd3b0c145');
xhr.send();
xhr.addEventListener('load', function() {
  let imagePexels = JSON.parse(this.response);
  document.getElementById("photo"+num).src = imagePexels.photos[9].src.small;
});
//return e
}
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
  var xz = document.getElementById("photo1");
  var yz = document.getElementById("photo2");
  var zz = document.getElementById("photo3");
  xz.style.display = "none";
  yz.style.display = "none";
  zz.style.display = "none";
}

function initChests(){
  
}
localStorage.setItem("scoreTo", 0);
var totalScore = 0;
function initScoreBoard(plusScore){
  //console.log("scoreTo: ",  sessionStorage.getItem("scoreTo")) //scoreTo console test
  totalScore = parseInt(sessionStorage.getItem("scoreTo")) | 0;
  totalScore = parseInt(totalScore) + parseInt(plusScore);
  document.getElementById("score").innerHTML = "";
  document.getElementById("score").innerHTML = totalScore;
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

function placeTreassure(num){
var z = document.getElementById("photo"+num);
//tImageFromPexels(document.getElementById("photo"+num));
//z.innerHTML = k;
z.style.display = "block";
}
function removeChest(num){
  document.getElementById("chest"+num).style.display = 'none';
}

function chestClicked(num){
  if(num == Math.floor(Math.random()*3))
  {
    initScoreBoard(5);
    removeChest(num);
    getImageFromPexels(num)
    placeTreassure(num);
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
function reset(){
  sessionStorage.setItem("scoreTo", 0);
  location.reload();
}

function removeChestEvents(){ 
}
//export {initScoreBoard}