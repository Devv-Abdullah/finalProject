var forgotform = document.getElementById('forgotform');

// forgotform.addEventListener('submit', function(){

// })

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}


var login = document.getElementById('login');
login.addEventListener('click', function(){
    let timerInterval;
Swal.fire({
  title: "loading",
//   html: "I will close in <b></b> milliseconds.",
  timer: 1000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    // console.log("I was closed by the timer");
  }
});
      sleep(1000).then(() =>{
        window.location.href = 'login.html'
    })
})


var register = document.getElementById('register');
register.addEventListener('click', function(){
    let timerInterval;
Swal.fire({
  title: "loading",
//   html: "I will close in <b></b> milliseconds.",
  timer: 1000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    // console.log("I was closed by the timer");
  }
});
      sleep(1000).then(() =>{
        window.location.href = 'index.html'
    })
})