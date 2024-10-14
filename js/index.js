var RegistrationForm = document.getElementById('submit');
// console.log(RegistrationForm);

var username = document.getElementById('form3Example1cg');
var email = document.getElementById('form3Example3cg');
var password = document.getElementById('form3Example4cg');
var repeatPassword = document.getElementById('form3Example4cdg');
// console.log(repeatPassword)
var allUsersData = JSON.parse(localStorage.getItem('userDataStorage')) || [];

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

RegistrationForm.addEventListener('click', function(event){
    event.preventDefault(); // prevent default behavior
    // console.log(userName.value);
    // console.log(email.value);
    // console.log(password.value);
    // console.log(repeatPassword.value);

    var userDataStorage = {
        username: username.value,
        email: email.value,
        password: password.value,
        repeatPassword: repeatPassword.value
    }
    // console.log(userDataStorage);
    if(password.value == [] || repeatPassword.value == [] || username.value == [] || email.value == []){
        Swal.fire({
            icon: "error",
            title: "Enter  fields are required",
            text: "Please fill in all the fields!",
          });
    }
    else if(password.value == repeatPassword.value){
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Registration Successful",   
            showConfirmButton: false,
            timer: 2500
          });
          allUsersData.push(userDataStorage);
          sleep(2500).then(() =>{
            window.location.href = 'login.html'
        })
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Passwords do not match",
            text: "Please ensure both passwords are the same!",
          });
    }
    
    localStorage.setItem('userDataStorage', JSON.stringify(allUsersData))
})

var loginHere = document.getElementById('loginHere');
loginHere.addEventListener('click', function(){
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

var create = document.getElementById('create');
var yourname = document.getElementById('yourname');
var youremail = document.getElementById('youremail');
var pass = document.getElementById('pass');
var rep = document.getElementById('rep');
var lang = localStorage.getItem('lang');
var gree = document.getElementById('gree');
var submit = document.getElementById('submit');
changeLanguage(lang);

function changeLanguage(lang) {
    if (lang === 'eng') {
      create.innerText = "Create an account";
        yourname.innerText = "Your Name";
        youremail.innerText = "Your Email";
        pass.innerText = "Password";
        rep.innerText = "Repeat your password";
        gree.innerText = "I agree all statements in Terms of service";
        submit.innerText = "REGISTER";
        localStorage.setItem('lang', lang);
    } 
    else if (lang === 'ar') {
      create.innerText = "إنشاء حساب";
        yourname.innerText = "اسم المستخدم";
        youremail.innerText = "البريد الإلكتروني";
        pass.innerText = "كلمة المرور";
        rep.innerText = "كرر كلمة المرور";
        gree.innerText = "أوافق على جميع البيانات الواردة في شروط الخدمة";
        submit.innerText = "يسجل";
        localStorage.setItem('lang', lang);
    }
}