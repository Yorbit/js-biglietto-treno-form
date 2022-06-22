let messagePrice;

const outputNomeCognome = document.getElementById('Namehost');

const outputType = document.getElementById('Type');

const outputTrain = document.getElementById('Train');

const outputPrice = document.getElementById('Price');

const genTicket = document.querySelector('#button-gen');


genTicket.addEventListener('click', function () {
    console.log(document.getElementById('Km').value);
    console.log(document.getElementById('Age').value);
    console.log(document.getElementById('Nome-Cognome').value);


    outputNomeCognome.innerText = (document.getElementById('Nome-Cognome').value);

    const Km = document.querySelector('#Km').value;

    const Age = document.querySelector('#Age').value;

    let ticketFinalPrice = (Km * 0.21);

    let ticketPriceDecimals = ticketFinalPrice.toFixed(2);

    console.log('il prezzo originale è: ' + ticketPriceDecimals + '€');


    if (userAge < 18) {

        ticketFinalPrice = ticketFinalPrice - ((ticketFinalPrice * 20) / 100);

        messagePrice = 'Hai diritto ad uno sconto: ' + ticketFinalPrice.toFixed(2) + '€';
    }

    else if (userAge >= 65) {

        ticketFinalPrice = ticketFinalPrice - ((ticketFinalPrice * 40) / 100);

        messagePrice = 'Hai diritto ad uno sconto: ' + ticketFinalPrice.toFixed(2) + '€';

    } else {

        messagePrice = 'il prezzo finale è: ' + ticketFinalPrice.toFixed(2) + '€';

    }

    console.log(messagePrice)


})