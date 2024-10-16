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