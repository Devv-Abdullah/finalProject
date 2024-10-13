var Registrationlogin = document.getElementById('Registrationlogin');
var username = document.getElementById('username');
var password = document.getElementById('password');
// console.log(Registrationlogin);
// console.log(username);
// console.log(password);

var allUsersData = JSON.parse(localStorage.getItem('userDataStorage')) || [];

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

Registrationlogin.addEventListener('submit', function(event){
    // console.log(Registrationlogin);
    event.preventDefault();
    // console.log(allUsersData)

    var foundUsers = null;
    for(var i=0; i<allUsersData.length; i++){
        if(allUsersData[i].username === username.value){
            foundUsers = allUsersData[i];
            break;
        }
      }
      if(foundUsers === null){
        Swal.fire({
          icon: "error",
          title: "Wrong username",
          text: "Incorrect username!",
      });
      }
      else if(foundUsers.password !== password.value){
        Swal.fire({
          icon: "error",
          title: "Wrong password",
          text: "Incorrect password!",
      });
      }
      else {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login successful!",
            showConfirmButton: false,
            timer: 2500
        });
        sleep(2500).then(() => {
            window.location.href = 'phone.html';
        });
    }
    });

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

var forgot = document.getElementById('forgot');
forgot.addEventListener('click', function(){
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
      window.location.href = 'forgot.html'
  })
})


/*Registrationlogin.addEventListener('submit', function(event){
  // console.log(Registrationlogin);
  event.preventDefault();
  // console.log(allUsersData)

  for(var i=0; i<allUsersData.length; i++){
      if(allUsersData[i].username != username.value){
          Swal.fire({
                      icon: "error",
                      title: "wrong username",
                      text: "Something went wrong!",
                    });
      }
      else if(allUsersData[i].password != password.value){
          Swal.fire({
                      icon: "error",
                      title: "wrong password",
                      text: "Something went wrong!",
                    });
      }
      else{
          Swal.fire({
                      position: "top-center",
                      icon: "success",
                      title: "username and password are correct",
                      showConfirmButton: false,
                      timer: 2500
                    });
                    sleep(2500).then(() =>{
                      window.location.href = 'phone.html'
                  })
      }
  }
})*/