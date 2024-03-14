//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.


//Chiediamo all'utente se sceglie pari o dispari
const playerOddOrEven = prompt("Scegli: dispari o pari");

//Chiediamo all'utente di inserire un numero da 1 a 5.
const playerNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

//assegno a cpu la funzione creta per generare numeri random.
let cpuChoice = randomNumber();

//Genera un numero casuale da 1 a 5 per la CPU
function randomNumber(min, max) { 
    return Math.floor(Math.random() * 5) + 1; 
}



console.log(cpuChoice);

    


