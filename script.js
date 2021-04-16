// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword("");
  var passwordText = document.querySelector("#password");
  
  function generatePassword() {
    //YYY
    var answer = prompt("Do you want to inlcude lowercase letters?")
     if (answer == "yes") {
      var up = prompt("Do you want to inlcude Uppercase letters?")
      if (up == "yes") {
        var number = prompt("Do you want to inlcude numbers?")
        if (number == "yes") {
        var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
      if (gnum > 7 && gnum < 129) {
      var length = gnum,
     charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      retVal = "";
      for (var i =0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));  
      }}
    } 
    return retVal
    //YNY
    } else {
      var number = prompt("Do you want to inlcude numbers?")
      if (number == "yes") {
        var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
        if (gnum > 7 && gnum < 129) {
          var length = gnum,
         charset = "abcdefghijklmnopqrstuvwxyz0123456789",
          retVal = "";
          for (var i =0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));  
          }
      }
   //YNN
    } else{
      var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
      if (gnum > 7 && gnum < 129) {
        var length = gnum,
       charset = "abcdefghijklmnopqrstuvwxyz",
        retVal = "";
        for (var i =0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));  
        }
    }
    }}
     return retVal
     //NYY
    } else {
     var up = prompt("Do you want to include Uppercase letters?")
     if (up == "yes") {
       var number = prompt("Do you want to include numbers?")
       if (number == "yes")
       var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
       if (gnum > 7 && gnum < 129) {
        var length = gnum,
       charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
        for (var i =0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));  
        }
      }
      return retVal
      //NNY
      } else {
       var number = prompt("Do you want to include numbers?")
       if(number == "yes")
       var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
       if (gnum > 7 && gnum < 129) {
        var length = gnum,
       charset = "0123456789",
        retVal = "";
        for (var i =0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));  
        }
      }
      //else
     // { alert("Try Again")}

        return retVal
      }
    } }
   
  
      passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
