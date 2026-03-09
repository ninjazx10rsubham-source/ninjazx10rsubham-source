function validateForm(){

var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var phone=document.getElementById("phone").value;

if(name==""){
alert("Please enter your name");
return false;
}

if(email==""){
alert("Please enter email");
return false;
}

if(phone.length<10){
alert("Enter valid phone number");
return false;
}

alert("Form submitted successfully!");

return true;

}
