 
const numberInput = prompt("Inserisci un numero di 4 cifre");

let count = 0;

let sum = 0;

do {
    sum += parseInt(numberInput[count]);
    count++;

} while ( count < numberInput.length)

alert(`${sum} è stata la somma totale `);

