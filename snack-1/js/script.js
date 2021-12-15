let count = 0;

let sum = 0;


while ( count < 10){
    let inputUser = parseInt(prompt(`Inserici il ${count + 1} numero`))
    sum += inputUser;
    count++;
}

alert(`Il risultato della somma è ${sum}`);