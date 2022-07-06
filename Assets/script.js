// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericsArr = ["1","2","3","4","5","6","7","8","9","0"];
var specialCharacterArr = ["!","@","#","$","%","^","&","*","(",")","-","="]


function generatePassword() {
  var criteria = []
  var length = prompt("How many characters between 8-128?")

  if (length > 128 || length < 8) {
    alert("Needs to meet specified length!")
  }

  var uppercase = confirm("Would you like Uppercase letters?");
  var lowercase = confirm("Would you like Lowercase letters?")
  var numerics = confirm("Would you like Numerics?")
  var specialCharacter = confirm("Provide a special character?")
  var passwordResult = "";

  length = Number(length);

  if (!uppercase && !lowercase && !numerics && !specialCharacter) {
    alert("Needs to select at least one character type.")
  }

  if (uppercase) {
    criteria = criteria.concat(uppercaseArr)
  }

  if (lowercase) {
    criteria = criteria.concat(lowercaseArr)
  }

  if (numerics) {
    criteria = criteria.concat(numericsArr)
  }

  if (specialCharacter) {
    criteria = criteria.concat(specialCharacterArr)
  }

  var passWord = ("")

  for (var i = 0; i < length; i++) {
    var passWord = passWord + criteria[Math.floor(Math.random()*criteria.length)]
  } return passWord

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);