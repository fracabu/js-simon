/*
Visualizzare in pagina (html) 5 numeri casuali.
Avviare un timer di 30 secondi
Dopo 30 secondi, nascondere i numeri.
L’utente deve inserire, uno alla volta, i numeri che ha visto 
precedentemente, tramite un prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
e quali dei numeri da indovinare sono stati individuati.
*/

let generateRandomNumber = Math.floor(Math.random() * 6);
console.log(generateRandomNumber);
let secondiRimanenti = 30;
document.getElementById('listanumeri');

// Genero cinque numeri casuali nella pagina html
for (let i = 0; i<5; i++){
    generateRandomNumber = document.createElement("container");
    generateRandomNumber.innerText = (Math.floor(Math.random() * 6));
    document.body.append(generateRandomNumber);
    if(secondiRimanenti === 0){
        //generateRandomNumber === "" ;
    }
}

// Timer 30 secondi
const timerSecondi = setInterval (function(){
    console.log(secondiRimanenti);

secondiRimanenti--;
}, 1000);

setTimeout(function(){
    clearInterval(timerSecondi);
},1000*31);
