function registerform() {
    event.preventDefault();
    var name=document.getElementById('name');
    var email=document.getElementById('email');
    var createPassword=document.getElementById('cre-password');
    var confirmPassword=document.getElementById('con-password');
    if (name.value === " ".trim()) {
        Swal.fire({
            icon: 'error',
            title: 'Name should not be empty',
            text: 'Something went wrong!',
          })
    
    } else if(email.value===" ".trim()) {  
        Swal.fire({
            icon: 'error',
            title: 'email should not be empty',
            text: 'Something went wrong!',
          })
    }else if(createPassword.value===" ".trim()) {  
        Swal.fire({
            icon: 'error',
            title: 'Create password should not be empty',
            text: 'Something went wrong!',
          })
    }else if(createPassword.value !== confirmPassword.value) {  
        Swal.fire({
            icon: 'error',
            title: 'Confirm password should be same',
            text: 'Something went wrong!',
          })
    }else{
        Swal.fire({
            icon: 'success',
            title: `${name.value} You register successfully `,
            showConfirmButton: false,
            timer: 1500,
          })
          var userData={
            name:name.value,
            email:email.value,
            createPassword:createPassword.value,
            confirmPassword:confirmPassword.value
        }
        localStorage.setItem("userData",JSON.stringify(userData));
        setTimeout(() =>{
            window.location.href="./home.html"
        },2000)         

    }
}
function getData(){
     var getUserData=document.getElementById("getData");
     var userLocalStorageData = JSON.parse(localStorage.getItem("userData"))
     getUserData.innerHTML=`<h1>Welcome to ${userLocalStorageData.name}</h1>`
}
getData();

function logOut(){
    setTimeout(()=>{
        window.location.href="./login.html"
    },1000)
}

function login(){
    event.preventDefault();
    var email=document.getElementById('email');
    var createPassword=document.getElementById('cre-password');
    var loginData = JSON.parse(localStorage.getItem("userData"));
    if(!loginData){
        Swal.fire({
            icon: 'error',
            title: 'User Not Found',
          })
    }
    if(loginData.email !== email.value){
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
          })
    }else if(loginData.createPassword !== createPassword.value){
        Swal.fire({
            icon: 'error',
            title: 'Incorrect Password'
          })
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Successfully Login',
          })
        setTimeout(() => {
            window.location.href ="./home.html"
            
        },2000)
    }

}
