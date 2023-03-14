var generateBtn = document.querySelector("#generate");

  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"
  var passwordLength = 0;
  var newPassword = "";
 


function generatePassword() {
  let passwordLength = prompt("How long would you like your password to be? Must be between 8 and 128 characters")
  confirm("Click ok to go on")
  newPassword = "";
  for (var i =0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() *chars.length);
    newPassword += chars[randomNumber];

  }
  return newPassword
}


function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
console.log(password)

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

let text; 
if(confirm("Press Generate Password") == true) {
  text = "Ok!"
}else {
  text= "cancelled"
}