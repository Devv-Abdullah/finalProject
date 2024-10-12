var RegistrationForm = document.getElementById('submit');
// console.log(RegistrationForm);

var username = document.getElementById('form3Example1cg');
var email = document.getElementById('form3Example3cg');
var password = document.getElementById('form3Example4cg');
var repeatPassword = document.getElementById('form3Example4cdg');
// console.log(repeatPassword)
var allUsersData = JSON.parse(localStorage.getItem('userDataStorage')) || [];


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
    if(password.value == repeatPassword.value){
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Password and repeatpassword are the same",
            showConfirmButton: false,
            timer: 2000
          });
    allUsersData.push(userDataStorage);
    window.location.href = 'login.html'
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Password and repeatpassword are not the same",
            text: "Something went wrong!",
          });
    }
    
    localStorage.setItem('userDataStorage', JSON.stringify(allUsersData))
})