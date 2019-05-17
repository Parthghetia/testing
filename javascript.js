var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var body = document.querySelector('body');
var input1 = document.getElementById('input1');
var button = document.getElementById('button');
var deleteChild = document.getElementById('deleteChild');
var ul = document.querySelector('ul');
function backgroundPicker(){
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}
function createLiElement(){
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input1.value));
  ul.appendChild(li);
  input1.value = "";
}

color1.addEventListener('input' , backgroundPicker);
color2.addEventListener('input' , backgroundPicker);


button.addEventListener('click', function(){

  if (input1.value.length > 0){
  createLiElement();
}
})

input1.addEventListener('keypress', function(event){

  if(input1.value.length > 0 && event.keyCode === 13){
    createLiElement();
  }
})

deleteChild.addEventListener('click', function(){
  var li = document.querySelector('li');

  li.parentNode.removeChild(li);
})
