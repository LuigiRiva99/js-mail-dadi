console.log('ciao')


const button= document.getElementById('button');
const containerElement= document.querySelector('.container')
const resultElement= document.querySelector('.result')


//div box user
const boxElementUser= document.createElement('div');
containerElement.append(boxElementUser);
boxElementUser.classList.add('square', 'dado');

//div box cpu
const boxElementCpu= document.createElement('div');
containerElement.append(boxElementCpu)
boxElementCpu.classList.add('square', 'dado');

//div risultato
const result= document.createElement('div');
resultElement.append(result);


button.addEventListener('click', function(){
        //Generare un numero random da 1 a 6 per il giocatore e per il computer
        //genero un numero random per il giocatore
            //creo costante per numero random
    const randomUserNumber= Math.floor(Math.random() * 6) + 1   //number
    console.log('il tuo numero:', randomUserNumber);
    boxElementUser.innerHTML= '<p>TU</p>' + randomUserNumber
        //genero un numero random per la cpu
            //creo costante per numero random
    const randomCpuNumber= Math.floor(Math.random() * 6) + 1   //number
    console.log('il numero della cpu:', randomCpuNumber);
    boxElementCpu.innerHTML= '<p>CPU</p>' + randomCpuNumber
    //Stabilire un vincitore
        //SE numero giocatore > numero cpu 
    if (randomUserNumber > randomCpuNumber) {
        //allora giocatore vince
        console.log(randomUserNumber, '>', randomCpuNumber);
        console.log('hai vinto!');
        result.innerHTML= '<p class="green">HAI VINTO!</p>'
        //SE ALTRIMENTI numero giocatore < numero cpu 
    } else if (randomUserNumber < randomCpuNumber) {
        //cpu vince
        console.log(randomUserNumber, '<', randomCpuNumber);
        console.log('hai perso :(');
        result.innerHTML= '<p class="red">HAI PERSO :( </p>'
        //ALTRIMENTI 
    } else {
        //pareggio
        console.log(randomUserNumber, '=', randomCpuNumber);
        console.log('pareggio...');
        result.innerHTML= '<p>PAREGGIO</p>'
    }
})

    

    

   
