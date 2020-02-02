
function addContrastControl(){
  someControl('contrast', ['Add more contrast', 'Remove additional contrast'], 'contrast');
}

addContrastControl();

function addInvertedControl(){
  someControl('invmode', ['Inverted mode', 'Normal mode'], 'inverted');
}


function someControl(id, text, className){
  var box = document.getElementById(id);
  var clickEvent = ('ontouchstart' in window ? 'touchend' : 'click');
  var e = document.getElementsByTagName('html')[0];
  box.addEventListener(clickEvent, function(){
    if(box.innerHTML === text[0]){
      e.classList.add(className);
      box.innerHTML = text[1];
    }
    else{
      e.classList.remove(className);
      box.innerHTML = text[0];
    }
  });
}
addInvertedControl();
'use strict';

var rain = document.getElementById('coul');
var currentHue = 0;
var hueAddition = 5;
function doThatFuckingColorThing()
{
  var color = 'hsl(' + currentHue + ',80%, 60%)';
  if(currentHue + hueAddition > 360)
  {
    currentHue = 0;
  }
  else {
    currentHue += hueAddition;
  }
  rain.style.color = color;
  setTimeout(function(){doThatFuckingColorThing();}, 1000/25);
}
doThatFuckingColorThing();
