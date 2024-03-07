console.log('ciao');

//A.Chiedere all'utente la sua email
 //2. prendo l'input dal DOM 
const inputEmail = document.getElementById('email');

//3. prendo l-input del bottone
const inputButton= document.querySelector('.button');

//B.controllare che sia nella lista di chi puo accedere
//1. creo lista(array) di chi puo accedere 
const mailList = ['luigi@gmail.com', 'luca@gmail.com', 'marco@gmail.com' ];  

 

//al click del bottone 'invia' avvio il riconoscimento
inputButton.addEventListener('click', function(){
    //creo variabile per prendere la value dell'input email
    const mail= inputEmail.value;
    
    //2. creo variabile per controllare che l'email sia tra quelle che possono accedere
    let insideEmailList= false; 

    //3. creo un ciclo che mi controlli tutta la lista(array)
    for (let i = 0; i <= mailList.length; i++) {

        //salvo l'elemento dell'array in una variabile
        const acceptedMail = mailList[i];

        // SE l'input dell'utente coincide con un'elemento della lista, allora 'insideEmailList' cambia valore in 'true'
        if (mail === acceptedMail) {
            insideEmailList = true
        }
    }

    //  controllo se la mail è presente nella lista fuori dal ciclo for
        // SE presente (insideEmailList===true), stampo 'email nella lista'
    if (insideEmailList === true) {
        console.log("Email nella lista");
        // ALTRIMENTI stampo 'non sei nella lista'
    } else {
        console.log("non sei nella lista");
    }
})




