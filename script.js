// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword("");
  var passwordText = document.querySelector("#password");
  
  function generatePassword() {
    var answer = prompt("Do you want to inlcude lowercase letters?")
     if (answer == "yes") {
      var up = prompt("Do you want to inlcude Uppercase letters?")
      if (up == "yes") {
        var number = prompt("Do you want to inlcude numbers?")
        if (number == "yes")
        var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
      if (gnum > 7 && gnum < 129) {
      var length = gnum,
     charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      retVal = "";
      for (var i =0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));  
      }
    } 
    } 
     return retVal
    } else {
     alert("Try Again")
    } }
   
  
      passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
