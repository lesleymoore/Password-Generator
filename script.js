// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword("");
  var passwordText = document.querySelector("#password");
  
  function generatePassword() {
    //YYYY
    var answer = prompt("Do you want to include lowercase letters? Type yes or no")
     if (answer == "yes") {
      var up = prompt("Do you want to inlcude Uppercase letters? Type yes or no")
      if (up == "yes") {
        var number = prompt("Do you want to include numbers? Type yes or no")
        if (number == "yes") {
        var special = prompt("Do you want to include special characters? Type yes or no")
        if (special == "yes") {
        var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
      if (gnum > 7 && gnum < 129) {
      var length = gnum,
     charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()",
      retVal = "";
      for (var i =0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));  
        }}}
    } else{
      var special = prompt("Do you want to include special characters? Type yes or no")
      if (special == "yes") {
      var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
    if (gnum > 7 && gnum < 129) {
    var length = gnum,
   charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()",
    retVal = "";
    for (var i =0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));  
      }}}
      else {
        var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
    if (gnum > 7 && gnum < 129) {
    var length = gnum,
   charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    retVal = "";
    for (var i =0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));  
      }}
      }
    }
    return retVal
    //YNYY
    } else {
      var number = prompt("Do you want to include numbers? Type yes or no")
      if (number == "yes") {
        var special = prompt("Do you want to include special characters? Type yes or no")
        if (special == "yes"){
        var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
        if (gnum > 7 && gnum < 129) {
          var length = gnum,
         charset = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()",
          retVal = "";
          for (var i =0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));  
          }}
          return retVal
       //YNYN 
        } else {
          var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
        if (gnum > 7 && gnum < 129) {
          var length = gnum,
         charset = "abcdefghijklmnopqrstuvwxyz0123456789",
          retVal = "";
          for (var i =0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));  
          }}
          return retVal
       }
   //YNNY
    } else{
      var special = prompt("Do you want to include special characters? Type yes or no")
      if(special == "yes") {
      var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
      if (gnum > 7 && gnum < 129) {
        var length = gnum,
       charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()",
        retVal = "";
        for (var i =0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));  
        }}
    } //YNNN
     else {
      var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
      if (gnum > 7 && gnum < 129) {
        var length = gnum,
       charset = "abcdefghijklmnopqrstuvwxyz",
        retVal = "";
        for (var i =0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));  
        }}
    }
    }}
     return retVal
     //NYYY
    } else {
     var up = prompt("Do you want to include Uppercase letters? Type yes or no")
     if (up == "yes") {
       var number = prompt("Do you want to include numbers? Type yes or no")
       if (number == "yes") {
       var special = prompt("Do you want to inlcude special characters? Type yes or no")
       if (special == "yes") {
       var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
       if (gnum > 7 && gnum < 129) {
        var length = gnum,
       charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
        retVal = "";
        for (var i =0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));  
        }} //NYYN
      } else {
        var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
        if (gnum > 7 && gnum < 129) {
         var length = gnum,
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
         retVal = "";
         for (var i =0, n = charset.length; i < length; ++i) {
         retVal += charset.charAt(Math.floor(Math.random() * n));  
         }}
      }
    } else {
        //NYNY
        if(number == "no") {
        var special = prompt("Do you want to include special charcters? Type yes or no")
        if(special == "yes"){
        var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
        if (gnum > 7 && gnum < 129) {
         var length = gnum,
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()",
         retVal = "";
         for (var i =0, n = charset.length; i < length; ++i) {
         retVal += charset.charAt(Math.floor(Math.random() * n));  
         }}} //NYNN
        else{
          var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
        if (gnum > 7 && gnum < 129) {
         var length = gnum,
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
         retVal = "";
         for (var i =0, n = charset.length; i < length; ++i) {
         retVal += charset.charAt(Math.floor(Math.random() * n));  
         }}
        } 
      }}
      return retVal
      //NNYY
      } else {
       var number = prompt("Do you want to include numbers? Type yes or no")
       if(number == "yes") {
       var special = prompt("Do you want to include special characters? Type yes or no")
       if(special == "yes") {
       var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
       if (gnum > 7 && gnum < 129) {
        var length = gnum,
       charset = "0123456789!@#$%^&*()",
        retVal = "";
        for (var i =0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));  
        }}
        return retVal
      } //NNYN
      else {
        var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
       if (gnum > 7 && gnum < 129) {
        var length = gnum,
       charset = "0123456789",
        retVal = "";
        for (var i =0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));  
        }}
        return retVal
      }
    } //NNNY
      else {
        var special = prompt("Do you want to include special characters? Type yes or no")
        if(special=="yes") {
          var gnum = prompt("How many characters would you like your password to have? Choose 8-128")
          if (gnum > 7 && gnum < 129) {
            var length = gnum,
           charset = "!@#$%^&*()",
            retVal = "";
            for (var i =0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));  
            }}
            return retVal
        }
     else
      { alert("Try Again")}

        return retVal
      
    } 
    }}}
  
      passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
  