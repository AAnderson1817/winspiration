const unsplash = 'http://www.unsplash.it';
const photo = document.getElementById('photo');
const display = document.getElementById('p');
const button = document.getElementById('button');
const ageput = document.getElementById('age');
let width = window.innerWidth;
let height = window.innerHeight;
let randomNum = `${Math.floor(Math.random()*300)}`;
let parseNum = parseInt(getRandomNum());
let randomPic = `${unsplash}/${width}/${height}?image=${parseNum}`;



function changeText(){
  display.innerHTML = `I am ${ageput.value} years old`;
}
function clearText(){
  ageput.value = '';
  changeText();
}
function getRandomNum(){
  let randomNum = Math.floor(Math.random()*300);
  return randomNum;
}
function randomPhoto(){
 width = window.innerWidth;
 height = window.innerHeight;
 randomNum = `${Math.floor(Math.random()*300)}`;
 parseNum = parseInt(getRandomNum());
 randomPic = `${unsplash}/${width}/${height}?image=${parseNum}`;
 photo.src = randomPic;
}
function screenCheck(){
  if (document.documentElement.clientWidth < 600) {
	    alert("Small!")
  }
}

window.addEventListener('resize', screenCheck);
button.addEventListener('click', randomPhoto);
ageput.addEventListener('keyup', changeText);
