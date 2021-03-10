// allows the validation function to be ran using the enter key, rather than pressing the button every time.
function handleEnter(e) {
    if(e.keyCode === 13){
        validate()
    }
  }
// checks both the username and password fields to see if it has the acceptable content. If it does, you can enter the rest of
// the website, if you don't it asks you to check your information again, and doesn't let you in.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "admin" && password === "westmec"){
        alert("Login successful.");
        location.replace("home");

        return false;
    }else{
        alert("Username or password is incorrect, please try again.");
    }
}
