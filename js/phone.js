var photo1 = document.getElementById('photo1');

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

photo1.addEventListener('click', function(event){
    event.preventDefault();

    sleep(1000).then(() => {
        window.location.href = 'photo1.html';
    });
})

var photo2 = document.getElementById('photo2');

photo2.addEventListener('click', function(event){
    event.preventDefault();

    sleep(1000).then(() => {
        window.location.href = 'photo2.html';
    });
})

var photo3 = document.getElementById('photo3');

photo3.addEventListener('click', function(event){
    event.preventDefault();

    sleep(1000).then(() => {
        window.location.href = 'photo3.html';
    });
})

var photo4 = document.getElementById('photo4');

photo4.addEventListener('click', function(event){
    event.preventDefault();

    sleep(1000).then(() => {
        window.location.href = 'photo4.html';
    });
})

var photo5 = document.getElementById('photo5');

photo5.addEventListener('click', function(event){
    event.preventDefault();

    sleep(1000).then(() => {
        window.location.href = 'photo5.html';
    });
})

var photo6 = document.getElementById('photo6');

photo6.addEventListener('click', function(event){
    event.preventDefault();

    sleep(1000).then(() => {
        window.location.href = 'photo6.html';
    });
})


var price1 = document.getElementById('price1');
price1.addEventListener('click', function(event){
    event.preventDefault();

    sleep(1000).then(() => {
        window.location.href = 'credit1.html';
    });
})

var price2 = document.getElementById('price2');
price2.addEventListener('click', function(event){
    event.preventDefault();

    sleep(1000).then(() => {
        window.location.href = 'credit2.html';
    });
})

var price3 = document.getElementById('price3');
price3.addEventListener('click', function(event){
    event.preventDefault();

    sleep(1000).then(() => {
        window.location.href = 'credit3.html';
    });
})

var price4 = document.getElementById('price4');
price4.addEventListener('click', function(event){
    event.preventDefault();

    sleep(1000).then(() => {
        window.location.href = 'credit4.html';
    });
})

var price5 = document.getElementById('price5');
price5.addEventListener('click', function(event){
    event.preventDefault();

    sleep(1000).then(() => {
        window.location.href = 'credit5.html';
    });
})

var price6 = document.getElementById('price6');
price6.addEventListener('click', function(event){
    event.preventDefault();

    sleep(1000).then(() => {
        window.location.href = 'credit6.html';
    });
})