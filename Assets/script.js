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
    alert("Needs to select at least one character type.")
    return ""
  } 
  // For 4 Positive options
  else if (uppercase && lowercase && numerics && specialCharacter) {
    criteria = criteria.concat(uppercaseArr, lowercaseArr, numericsArr, specialCharacterArr)
  }
  // For 3 Positive options
  else if (uppercase && lowercase && numerics){
    criteria = criteria.concat(uppercaseArr, lowercaseArr, numericsArr)
  }
  // For 3 Positive options
  else if (uppercase && lowercase && specialCharacter){
    criteria = criteria.concat(uppercaseArr, lowercaseArr, specialCharacterArr)
  }
  // For 3 Positive options
  else if (uppercase && numerics && specialCharacter){
    criteria = criteria.concat(uppercaseArr, numericsArr, specialCharacterArr)
  }
  // For 3 Positive options
  else if (uppercase && lowercase && numerics){
    criteria = criteria.concat(uppercaseArr, lowercaseArr, numericsArr)
  }
  // For 2 Positive options
  else if (uppercase && lowercase){
    criteria = criteria.concat(uppercaseArr, lowercaseArr)
  }
  // For 2 Positive options
  else if (uppercase && numerics){
    criteria = criteria.concat(uppercaseArr, numericsArr)
  }
  // For 2 Positive options
  else if (uppercase && specialCharacter){
    criteria = criteria.concat(uppercaseArr, specialCharacterArr)
  }
  // For 2 Positive options
  else if (lowercase && numerics){
    criteria = criteria.concat(lowercaseArr, numericsArr)
  }
  // For 2 Positive options
  else if (lowercase && specialCharacter){
    criteria = criteria.concat(lowercaseArr, specialCharacterArr)
  }
  // For 2 Positive options
  else if (numerics && specialCharacter){
    criteria = criteria.concat(numericsArr, specialCharacterArr)
  }
  // For 1 Positive options
  else if (uppercase){
    criteria = criteria.concat(uppercaseArr)
  }
  // For 1 Positive options
  else if (lowercase){
    criteria = criteria.concat(lowercaseArr)
  }
  // For 1 Positive options
  else if (numerics){
    criteria = criteria.concat(numericsArr)
  }
  // For 1 Positive options
  else if (specialCharacter) {
    criteria = criteria.concat(specialCharacterArr)
  }
  else ("")


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