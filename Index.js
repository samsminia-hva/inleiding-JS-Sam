


//t-shirts
const shirtElement = document.getElementById('shirt'); //shirt uit de svg slecteren
const shirtsSectie = document.getElementById('shirts'); //sectie met shirts selecteren

const navyShirt = document.querySelector('.navy-shirt'); //gekleurde optie
const beigeShirt = document.querySelector('.beige-shirt'); //gekleurde optie
const groenShirt = document.querySelector('.groen-shirt'); //gekleurde optie
//t-shirts

//broeken
const broekElement = document.getElementById('broek'); //broek uit de svg slecteren
const broekenSectie = document.getElementById('broeken'); //sectie met broeken selecteren

const navyBroek = document.querySelector('.navy-broek'); //gekleurde optie
const beigeBroek = document.querySelector('.beige-broek'); //gekleurde optie
const groeneBroek = document.querySelector('.groene-broek'); //gekleurde optie
//broeken

//haar
const haarElement = document.getElementById('haar');
const haarSectie = document.getElementById('haar-kleuren');

const bruinHaar = document.querySelector('.bruin-haar');
const blondHaar = document.querySelector('.blond-haar');
const roodHaar = document.querySelector('.rood-haar');
//haar

//keuzes
const eerste = document.getElementById('keuze-een');
const tweede = document.getElementById('keuze-twee');
//keuzes

//geluid

const klikGeluid = new Audio('./content/klikgeluideffect.mp3');
const eindGeluid = new Audio('./content/partyeffects.mp3')

//geluid

//t-shirt functies

navyShirt.addEventListener('click', function (shirtKleur) {
    shirtElement.classList.remove('shirt');
    shirtElement.classList.add('navy');

    // Shirts verbergen en broeken tonen
    shirtsSectie.classList.add('hidden'); // Shirts verdwijnen
    broekenSectie.classList.remove('hidden'); // Broeken verschijnen

    klikGeluid.play();
});

beigeShirt.addEventListener('click', function (shirtKleur) {
    shirtElement.classList.remove('shirt');
    shirtElement.classList.add('beige');

    // Shirts verbergen en broeken tonen
    shirtsSectie.classList.add('hidden'); // Shirts verdwijnen
    broekenSectie.classList.remove('hidden'); // Broeken verschijnen
    
    klikGeluid.play();
});

groenShirt.addEventListener('click', function (shirtKleur) {
    shirtElement.classList.remove('shirt');
    shirtElement.classList.add('groen');

    // Shirts verbergen en broeken tonen
    shirtsSectie.classList.add('hidden'); // Shirts verdwijnen
    broekenSectie.classList.remove('hidden'); // Broeken verschijnen

    klikGeluid.play();
});

//t-shirt functies

// Broeken functies

navyBroek.addEventListener('click', function (broekKleur) {
    broekElement.classList.remove('broek');
    broekElement.classList.add('navy');

    // Broeken verbergen en haar tonen
    broekenSectie.classList.add('hidden');
    haarSectie.classList.remove('hidden');

    klikGeluid.play();
});

beigeBroek.addEventListener('click', function (broekKleur) {
    broekElement.classList.remove('broek');
    broekElement.classList.add('beige');

    // Broeken verbergen en haar tonen
    broekenSectie.classList.add('hidden');
    haarSectie.classList.remove('hidden');

    klikGeluid.play();
});

groeneBroek.addEventListener('click', function (broekKleur) {
    broekElement.classList.remove('broek');
    broekElement.classList.add('groen');

    // Broeken verbergen en haar tonen
    broekenSectie.classList.add('hidden');
    haarSectie.classList.remove('hidden');

    klikGeluid.play();
});

//broeken functies

// Haar keuze
bruinHaar.addEventListener('click', function (haarkleur) {
    haarElement.classList.remove('haar');
    haarElement.classList.add('bruin');

    // Haar opties verbergen en resultaat tonen
    haarSectie.classList.add('hidden');
    eerste.classList.remove('hidden');

    klikGeluid.play();
});

blondHaar.addEventListener('click', function (haarkleur) {
    haarElement.classList.remove('haar');
    haarElement.classList.add('blond');

    // Haar opties verbergen en resultaat tonen
    haarSectie.classList.add('hidden');
    tweede.classList.remove('hidden');

    klikGeluid.play();
});

roodHaar.addEventListener('click', function (haarkleur) {
    haarElement.classList.remove('haar');
    haarElement.classList.add('rood');

    // Haar opties verbergen en resultaat tonen
    haarSectie.classList.add('hidden');
    tweede.classList.remove('hidden');

    klikGeluid.play();
});

// eindresultaat melding 1 of 2 komt tevoorschij door de onderstaand code
haarSectie.addEventListener('click', function (eindresultaat) {
    if (
        shirtElement.classList.contains('beige') &&
        broekElement.classList.contains('navy') &&
        haarElement.classList.contains('bruin')
    ) {
        eerste.classList.add('flex');   // Als de juiste opties geklikt zijn toont deze keuze
        eindGeluid.play();
    } else {
        tweede.classList.add('flex'); //anders toont deze
        eindGeluid.play();
    }
});




//Bronnen
    //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else - if else statements
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener - eventlisteners
    //developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions - functies
    //developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio - audio toevoegen
    //chatgpt - prompt: hoe vervang style elementen in mijn javascript code met classes
    //chatcpt - prompt: {code} voldoet deze code aan de bijgevoegde eisen (rubrioek met eisen voor voldoende)
    