function moveBigFoot(){
  alert('You found Big Foot!!! Woah, he\'s on the move, keep looking!')        
  setRandom();  
};

function loadBigFoot() {
  setRandom();  
}

function setRandom(){
  var imgBigFoot = document.getElementById('bigFoot');

  

  var x = Math.random()*(window.innerWidth-imgBigFoot.offsetWidth);
  var y = Math.random()*(window.innerHeight-imgBigFoot.offsetHeight);

  imgBigFoot.style.transition = "opacity 1s";
  imgBigFoot.style.opacity = "0";

  setTimeout(() => {
    imgBigFoot.style.top = y + 'px';
    imgBigFoot.style.left = x + 'px';
    imgBigFoot.style.transition = "opacity 1s";
    imgBigFoot.style.opacity = "1";
    imgBigFoot.style.visibility = "visible";
  }, 1000);

};