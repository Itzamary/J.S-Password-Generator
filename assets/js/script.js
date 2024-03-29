// Assignment code here



function generatePassword(){
  var spclCharacters = "!,#,$,%,&,/,:,<,=,?,@,],~,_,>,^";
  var password = "";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var char = "";

  var passwordPrompt = window.prompt("Please choose password length, password must be between 8 and 128 characters long");

  passwordLength = parseInt(passwordPrompt);

  if(passwordLength < 8 || passwordLength> 128 || isNaN(passwordLength) === true) {
    window.alert("You need to provide an accepted length. Please try again.")
    return generatePassword();
  }

 

  



  function pickAndChoose(){
    var promptMe =  window.prompt("Please choose one at a time: Type 1 for uppercase, 2  for lowercase, 3 for numbers, 4 for special characters.");
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
      return pickAndChoose();

    }

    var pickAgain = window.prompt("Do you want to pick one more? type 1 for yes and 2 for no.");
    pickAgain = parseInt(pickAgain);

    if (pickAgain === 1 || pickAgain === true){
      return pickAndChoose();
    };
    
    return char;
  }

  pickAndChoose();


  

  for (var i = 0; i <= passwordLength -1; i++){
    password += char.charAt(Math.floor(Math.random() * char.length -1));
    

  }
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
