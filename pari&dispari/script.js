//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//Chiediamo all'utente se sceglie pari o dispari
const playerOddOrEven = prompt("Scegli: DISPARI O PARI");

//Chiediamo all'utente di inserire un numero da 1 a 5.
const playerNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

//Assegno a una variabile la scelta cpu la funzione creata per generare numeri random.
const cpuChoice = randomNumber();

//Creo variabile somma: Sommiamo i due numeri (valore prompt e numero random cpu)
const sum = cpuChoice + playerNumber;

// Assegno pari o dispari,
// nella funzione argomento con la variabile somma per determinare appunto se pari o dispari. 
const result = isEvenOrOdd(sum);

//verifica:
console.log(cpuChoice, playerNumber, sum, result)

//Creo condizione in cui se la scelta pari/dispari del player è uguale a 'result'
//(somma numero random cpu + numero scelto player) compare alert 'hai vinto' altrimenti 'hai perso.
if (playerOddOrEven === result) {
    alert("Hai vinto!")}
    else {
    alert("Hai perso")
    }

// FUNCTIONS:
//Genera un numero casuale da 1 a 5 per la CPU
function randomNumber(min, max) { 
    return Math.floor(Math.random() * 5) + 1; 
}

//Funzione dispari o pari
function isEvenOrOdd(num) {
    let gameResult = "DISPARI";
    // se è pari
    if (num % 2 == 0) {
        gameResult = "PARI";
    }
    return gameResult;
}




