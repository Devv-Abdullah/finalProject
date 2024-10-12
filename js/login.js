var Registrationlogin = document.getElementById('Registrationlogin');
var username = document.getElementById('username');
var password = document.getElementById('password');
// console.log(Registrationlogin);
// console.log(username);
// console.log(password);

var allUsersData = JSON.parse(localStorage.getItem('userDataStorage'));

Registrationlogin.addEventListener('submit', function(event){
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
                        timer: 2000
                      });
        }
    }
})