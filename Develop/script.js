// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericsArr = ["1","2","3","4","5","6","7","8","9","0"];
var specialCharacterArr = ["!","@","#","$","%","^","&","*","(",")","-","="]
var criteria = []

function generatePassword() {

  var length = prompt("How many characters between 8-128?")

  if (length > 128 || length < 8) {
    alert("Needs to meet specifications.")
    return ""
  }

  var uppercase = confirm("Uppercase?");
  var lowercase = confirm("Lowercase?")
  var numerics = confirm("Numerics?")
  var specialCharacter = confirm("Provide a special character?")
  var passwordResult = "";

  length = Number(length);


  if (!uppercase && !lowercase && !numerics && !specialCharacter) {
    alert("Needs to meet specifications.")
    return ""
  }

  if (uppercase) {
    criteria = criteria.concat(uppercaseArr)
    console.log(criteria)
  }

  if (lowercase) {
    criteria = criteria.concat(lowercaseArr)
    console.log(criteria)
  }

  if (numerics) {
    criteria = criteria.concat(numericsArr)
    console.log(criteria)
  }

  if (specialCharacter) {
    criteria = criteria.concat(specialCharacterArr)
    console.log(criteria)
  }

  var passWord = ("")

  for (var i = 0; i < length; i++) {
    passWord = passWord + criteria[Math.floor(Math.random()*criteria.length)]
  }



  return passWord
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);