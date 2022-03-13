// Assignment code here
  var spclCharacters = "!, #, $, %, &, /, :, <, =, ?, @, ], ~, _, >, ^";
  var password = "";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var char = "";


function generatePassword(){

  var passwordPrompt = window.prompt("Please choose password length, password must be between 8 and 128 characters long");

  passwordLength = parseInt(passwordPrompt);

  if(passwordLength < 8 || passwordLength> 128) {
    window.alert("You need to provide an accepted length. Please try again.")
    return generatePassword();
  } else if (passwordPrompt === typeof("string")) {
    return generatePassword();
  }

  var promptMe =  window.prompt("Type 1 for uppercase, 2  for lowercase, 3 for numbers, 4 for special charachters.");
  var promptNum = parseInt(promptMe);
  if (promptNum === 1){
    char += letters.toUpperCase();
    
  } else if( promptNum === 2) {
    char += letters;

  } else if ( promptNum === 3) {
    char += numbers;

  } else if ( promptNum === 4) {
    char += spclCharacters;

  } else {
    window.alert("please pick a number");

  }

  for (var i = 0; i <= passwordLength; i++){
    password += char.charAt(Math.floor(Math.random() * char.length -1));
    

  }

console.log(char);
  console.log(passwordLength);
  console.log(char);
   return password;
} 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
