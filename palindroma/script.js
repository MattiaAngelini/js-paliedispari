//Palindroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma
//Su internet ci sono soluzioni con join e reverse, non potete usarle!

//Chiedere all’utente di inserire una parola
const userWord = prompt("Inserisci una parola");

//Creo costante 'risultato' in cui evoco funzione con parametro il valore
//inserito dall'utente
const result = isPalindrome(userWord)

//Infine creo alert, se il risultato della funzione per la parola palindroma 
//applicata a userWord restituisce 'true', alert dirà "La parola è palindroma"
//altrimenti la parola non è palindroma.
if (result === true){
    alert("La parola è palindroma")
}
else {
    alert("la parola non è palindroma")
}

//FUNCTIONS:

// Funzione per capire se la parola inserita è palindroma:
function isPalindrome(word) {
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        
        // Creo condizione in cui se i caratteri non corrispondono, 
        // il ritorno restituisce 'false' altrimenti se è palindroma 'true'
        if (word[i] !== word[word.length - 1 - i]) {  
            return false;
        }
        else {
            return true;
        }
    }  
}

//verifica:
console.log(userWord, result);