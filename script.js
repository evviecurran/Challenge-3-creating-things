// var generateBtn = document.querySelector("#generate");

//   var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"
//   var passwordLength = 0;
//   var newPassword = "";
 


// function generatePassword() {
//   let passwordLength = prompt("How long would you like your password to be? Must be between 8 and 128 characters")
//   confirm("Click ok to go on")
//   newPassword = "";
//   for (var i =0; i < passwordLength; i++) {
//     var randomNumber = Math.floor(Math.random() *chars.length);
//     newPassword += chars[randomNumber];

//   }
//   return newPassword
// }


// function writePassword() {

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
// console.log(password)

//   passwordText.value = password;

// }

// generateBtn.addEventListener("click", writePassword);

// let text; 
// if(confirm("Press Generate Password") == true) {
//   text = "Ok!"
// }else {
//   text= "cancelled"
// }

var generateBtn = document.querySelector("#generate");

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()";

function generatePassword() {
  var passwordLength = parseInt(prompt("How long would you like your password to be? Must be between 8 and 128 characters"));
  
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  var includeLowercase = confirm("Do you want to include lowercase characters?");
  var includeUppercase = confirm("Do you want to include uppercase characters?");
  var includeNumeric = confirm("Do you want to include numeric characters?");
  var includeSpecial = confirm("Do you want to include special characters?");
  
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type.");
    return;
  }

  var selectedChars = "";
  if (includeLowercase) selectedChars += lowercaseChars;
  if (includeUppercase) selectedChars += uppercaseChars;
  if (includeNumeric) selectedChars += numericChars;
  if (includeSpecial) selectedChars += specialChars;

  var newPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * selectedChars.length);
    newPassword += selectedChars[randomNumber];
  }
  
  return newPassword;
}

function writePassword() {
  var password = generatePassword();
  if (password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", writePassword);
