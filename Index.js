
// shirt kleur
document.querySelector('.navy-shirt').onclick = function (shirtKleur) {
    document.getElementById('shirt').style.fill = 'navy';
};

document.querySelector('.beige-shirt').onclick = function (shirtKleur) {
    document.getElementById('shirt').style.fill = 'beige';
};

document.querySelector('.groen-shirt').onclick = function (shirtKleur) {
    document.getElementById('shirt').style.fill = 'green';
};
// shirt kleur

// Broek kleur
document.querySelector('.navy-broek').onclick = function (broekKleur) {
    document.getElementById('broek').style.fill = 'navy';
};

document.querySelector('.beige-broek').onclick = function (broekKleur) {
    document.getElementById('broek').style.fill = 'beige';
};

document.querySelector('.groene-broek').onclick = function (broekKleur) {
    document.getElementById('broek').style.fill = 'green';
};
// broek kleur


// haar kleur
document.querySelector('.bruin-haar').onclick = function (haarKleur) {
    document.getElementById('haar').style.fill = 'rgb(139, 69, 19)';
};

document.querySelector('.blond-haar').onclick = function (haarKleur) {
    document.getElementById('haar').style.fill = 'rgb(255, 223, 150)';
};

document.querySelector('.rood-haar').onclick = function (haarKleur) {
    document.getElementById('haar').style.fill = 'rgb(165, 42, 42)';
};
// haar kleur


// Verdwijnen en tevoorschijn komen van keuzes
document.querySelector('#shirts').onclick = function (stapTwee) {
    document.querySelector('#shirts').style.display = 'none';
    document.querySelector('#broeken').style.display = 'flex';
}

document.querySelector('#broeken').onclick = function (stapDrie) {
    document.querySelector('#broeken').style.display = 'none';
    document.querySelector('#haar-kleuren').style.display = 'flex';
}

// eindresultaat melding 1 of 2 komt tevoorschij door de onderstaand code

document.querySelector('#haar-kleuren').onclick = function (eindresultaat) {
    document.querySelector('#haar-kleuren').style.display = 'none';

    if (
        document.getElementById('shirt').style.fill === 'beige' &&
        document.getElementById('broek').style.fill === 'navy'&&
        document.getElementById('haar').style.fill === 'rgb(139, 69, 19)'
    ) {
        document.querySelector('#keuze-een').style.display = 'flex'
    } else {
        document.querySelector('#keuze-twee').style.display = 'flex'
    }
    }