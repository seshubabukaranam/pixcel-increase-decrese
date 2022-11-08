var inputText = document.querySelector("#input-text");
var btnIncreasePx = document.querySelector("#btn-increase-px");
var btnDecreasePx = document.querySelector("#btn-decrease-px");
var outputMessage = document.querySelector("#output-message");
var noOfClick = 0;
function increasePxSize()
{
noOfClick += 2;
displayMessage();
outputMessage.style.fontSize = noOfClick+"px";

}
function decreasePxSize()
{
noOfClick -= 2;
displayMessage();
outputMessage.style.fontSize = noOfClick+"px";
}
function displayMessage(){   

    outputMessage.innerText = inputText.value;
}
 btnIncreasePx.addEventListener("click", increasePxSize);
 btnDecreasePx.addEventListener("click", decreasePxSize);


