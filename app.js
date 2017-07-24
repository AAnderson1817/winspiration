const unsplash = 'http://www.unsplash.it';
const photo = document.getElementById('photo');
const display = document.getElementById('display');
//const button = document.getElementById('button');
//const ageput = document.getElementById('age');
let width = window.offsetWidth;
let height = window.offsetHeight;
let randomNum = `${Math.floor(Math.random()*200)}`;
let parseNum = parseInt(getRandomNum());
let randomPic = `${unsplash}/${width}/${height}?image=${parseNum}`;


//Editing text functions

//function changeText(){
//  display.innerHTML = `I am ${ageput.value} years old`;
//}
//function clearText(){
//  ageput.value = '';
//  changeText();
//}


//Random photo functions

function getRandomNum(){
  let randomNum = Math.floor(Math.random()*200);
  return randomNum;
}
function randomPhoto(){
 width = document.getElementById('header').offsetWidth;
 height = document.getElementById('header').offsetHeight;
 randomNum = `${Math.floor(Math.random()*200)}`;
 parseNum = parseInt(getRandomNum());
 randomPic = `${unsplash}/${width}/${height}?image=${parseNum}`;
 photo.src = randomPic;
}
//function screenCheck(){
//  if (document.documentElement.clientWidth < 600) {
//	    alert("Small!")
//  }
//}


//Event listeners

window.addEventListener('resize', screenCheck);
photo.addEventListener('click', randomPhoto);
window.setInterval(randomPhoto, 5000);
//ageput.addEventListener('keyup', changeText);
