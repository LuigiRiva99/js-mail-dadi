console.log('ciao')

//Generare un numero random da 1 a 6 per il giocatore e per il computer
    //genero un numero random per il giocatore
        //creo costante per numero random
const randomUserNumber= Math.floor(Math.random() * 6) + 1   //number
console.log('il tuo numero:', randomUserNumber);
    //genero un numero random per la cpu
        //creo costante per numero random
const randomCpuNumber= Math.floor(Math.random() * 6) + 1   //number
console.log('il numero della cpu:', randomUserNumber);
//Stabilire un vincitore
    //SE numero giocatore > numero cpu 
if (randomUserNumber > randomCpuNumber) {
    //allora giocatore vince
    console.log(randomUserNumber, '>', randomCpuNumber);
    console.log('hai vinto!');
    //SE ALTRIMENTI numero giocatore < numero cpu 
} else if (randomUserNumber < randomCpuNumber) {
    //cpu vince
    console.log(randomUserNumber, '<', randomCpuNumber);
    console.log('hai perso :(');
    //ALTRIMENTI 
} else {
    //pareggio
    console.log(randomUserNumber, '=', randomCpuNumber);
    console.log('pareggio...');
}
    

    

   
