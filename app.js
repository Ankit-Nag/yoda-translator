//define our variables
var btnTranslate = document.querySelector("#btn-translate");
var inputText= document.querySelector("#text-input");
var outputText= document.querySelector("#text-output");

//click event
function clickEventHandler() {
    console.log(inputText.value);
    outputText.innerText=inputText.value;
}

btnTranslate.addEventListener("click", clickEventHandler);