//define our variables
var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#text-input");
var outputText = document.querySelector("#text-output");
var serverURL = "https://api.funtranslations.com/translate/pirate.json";
var btnClick = document.querySelector("#click")

//create server URL for querying [load]
function getTranslationURL(text) {
    return serverURL + "?text=" + text;
}

//error handling
function errorHandler(error){
    console.log("Error: ",error);
}

//click event
function clickEventHandler() {
    fetch(getTranslationURL(inputText.value))
    .then(response => response.json())
    .then(json => {outputText.innerText=json.contents.translated})
    .catch(errorHandler)
}



btnTranslate.addEventListener("click", clickEventHandler);
