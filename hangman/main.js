const word = ['mitten', 'kitten', 'kitchen', 'maze'];
let randomWord = Math.floor(Math.random() * word.length);
let chosenWord = word[randomWord];
console.log(chosenWord);
let underScore = [];
let correctLetter =[];
let incorrectWord = [];


let webpageUnderScore = document.getElementsByClassName('underscore')

let createUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
       
    }
    return underScore;
}

console.log(createUnderscore());

document.addEventListener('keypress'), (event) =>{
    let keyCharacter = String.fromCharCode(event.keyCode);
    if (chosenWord.indexOf(keyCharacter) > -1){
        correctLetter.push(keyCharacter);
        underScore[chosenWord.indexOf(keyCharacter)] = keyCharacter;
        webpageUnderScore[0].innerHTML = underScore.join(' ');
       

        if(underScore.join('')== chosenWord){
            alert('You win')
        }
    }
    else{
        incorrectWord.push(keyCharacter);
    }

    
}