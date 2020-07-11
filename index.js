
let adjektive = ["laut", "leise", "schön", "hässlich", "groß", "klein", "lang", "kurz", "heiß", "kalt", "warm", "alt", "jung", "neu", "rot", "weiß", "grün", "gelb", "blau", "schwarz"]

let owner = ["meine", "deine" , "seine", "ihre", "unsere", "eure"];


let aktivitaetGerman = { eatApple : "Apfel essen", cleanTeeth: "Zähne putzen", sleepLong: "lange schlafen"};
let aktivitaetRussian = { eatApple : "есть яблоко", cleanTeeth: "чистить зубы", sleepLong: "долго спать"};
let aktivitaetEnglish = { eatApple: "eat apple", cleanTeeth : "clean teeth", sleepLong:"sleep long"};
let aktivitaetKeys = [ "eatApple" , "cleanTeeth", "sleepLong"]

let personsGerman = {me:"ich", you:"du", he:"er", she:"sie", it:"es", we:"wir", you2:"ihr", they: "Sie"};
let personsRussian = {me:"я", you:"ты", he:"он", she:"она", it:"оно", we:"мы", you2: "вы", they: "они"};
let personsEnglish = {me:"me", you:"you", he:"he", she:"she", it:"it", we:"we", you2: "you (plural)", they: "they"};
let personsKeys = ["me", "you", "he", "she", "it", "we", "you2", "they"];


let generateButton = document.getElementById("generateButton");
let switchLanguage = document.getElementById("languageSwitch");
let showTranslation = document.getElementById("showTranslation")
let sentenceLabel = document.getElementById("sentencesLabel");
let translationRussianLabel = document.getElementById("translationRussianLabel");
let translationGermanLabel = document.getElementById("translationGermanLabel");
let inputLabel = document.getElementById("inputLabel")
let generatedSentence;


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min; 
  } 

generateButton.onclick = function(){
    let personsIndex = personsKeys[getRandomIntInclusive(0,(personsKeys.length-1))];
    let aktivitaetIndex = aktivitaetKeys[getRandomIntInclusive(0,(aktivitaetKeys.length-1))];

    
    generatedSentence = aktivitaetEnglish[aktivitaetIndex] + " - " + personsEnglish[personsIndex];
    generatedRussianTranslation = aktivitaetRussian[aktivitaetIndex] + " - " + personsRussian[personsIndex];
    generatedGermanTranslation = aktivitaetGerman[aktivitaetIndex] + " - " + personsGerman[personsIndex];

    let displaySentence = document.createElement('p');
    displaySentence.innerHTML = generatedSentence;
    let inputField = document.createElement('p');
    inputField.innerHTML = "<input>  </input>"
    let russianTranslation = document.createElement('p');
    russianTranslation.innerHTML = generatedRussianTranslation;
    let germanTranslation = document.createElement('p');
    germanTranslation.innerHTML = generatedGermanTranslation;
    
    
    sentenceLabel.appendChild(displaySentence);
    translationRussianLabel.appendChild(russianTranslation);
    translationGermanLabel.appendChild(germanTranslation);
    inputLabel.appendChild(inputField);

    
}


// Language switch
switchLanguage.onclick =  function() {
    var russian = document.getElementById("translationRussianLabel");
    
    if (russian.style.display === "none") {
      russian.style.display = "block";
      switchLanguage.setAttribute("class", "germanFlag");
    } else {
      russian.style.display = "none";
    }
    var german = document.getElementById("translationGermanLabel");
    if (german.style.display === "none") {
      german.style.display = "block";
      switchLanguage.setAttribute("class", "russianFlag");
    } else {
      german.style.display = "none";
    }

    
  };

  //showTranslation
  showTranslation.onclick =  function() {
    var translationLabel = document.getElementById("translationsLabel");
    
    if (translationLabel.style.display === "none") {
        translationLabel.style.display = "block";
        switchLanguage.style.display = "inline";
    } else {
        translationLabel.style.display = "none";
        switchLanguage.style.display = "none";
    } };