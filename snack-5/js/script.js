
const myArray = [];

let currentNumber = 0;

let index = 0;

do {
    let userInput = parseInt(prompt(`Inserisci un numero, siamo a ${currentNumber}`));
    myArray[index] = userInput;
    currentNumber += userInput;
    index++;
} while ( currentNumber < 50 )


if( currentNumber > 50) {
    alert("Finito, hai superato il numero 50!");
} else if( currentNumber === 50) {
    alert("Finito, hai fatto proprio 50!");
} 