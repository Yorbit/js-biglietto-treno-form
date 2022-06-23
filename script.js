let messagePrice;

const outputNomeCognome = document.getElementById('Namehost');

const outputType = document.getElementById('Type');

const outputTrain = document.getElementById('Train');

const outputCP = document.getElementById('CP');

const outputPrice = document.getElementById('Price');

const genTicket = document.querySelector('#button-gen');


genTicket.addEventListener('click', function () {
    console.log(document.getElementById('Km').value);
    console.log(document.getElementById('Age').value);
    console.log(document.getElementById('Nome-Cognome').value);
    console.log(document.getElementById('Type').value);
    console.log(document.getElementById('CP').value);


    outputNomeCognome.innerText = (document.getElementById('Nome-Cognome').value);

    outputType.innerText = (document.getElementById('Type').value);

    outputTrain.innerText = (document.getElementById('Train').value);

    outputCP.innerText = (document.getElementById('CP').value);

    outputPrice.innerText = (document.getElementById('Price').value);

    const Km = document.querySelector('#Km').value;

    const Age = document.querySelector('#Age').value;

    let ticketFinalPrice = (Km * 0.21);

    let ticketPriceDecimals = ticketFinalPrice.toFixed(2);

    console.log('il prezzo originale è: ' + ticketPriceDecimals + '€');


    if (Age < 18) {

        ticketFinalPrice = ticketFinalPrice - ((ticketFinalPrice * 20) / 100);

        messagePrice = 'Hai diritto ad uno sconto: ' + ticketFinalPrice.toFixed(2) + '€';


    }

    else if (Age >= 65) {

        ticketFinalPrice = ticketFinalPrice - ((ticketFinalPrice * 40) / 100);

        messagePrice = 'Hai diritto ad uno sconto: ' + ticketFinalPrice.toFixed(2) + '€';

    } else {

        messagePrice = 'Il prezzo finale è: ' + ticketFinalPrice.toFixed(2) + '€';

    }

    console.log(messagePrice)

    outputPrice.innerText = (ticketFinalPrice.toFixed(2) + '€');

    outputTrain.innerText = Math.floor((Math.random() * 8) + 1);

    outputCP.innerText = Math.floor((Math.random() * 1000) + 1);

    outputType.innerText = ('Biglietto Singolo');
})