
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define variable. From Sandesh - TA (Slack)
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

var characterLength = 10;
const length = characterLength;
const allChars = upperCase + lowerCase + numbers + specialCharacters;

const passwordText = document.getElementById('password');
// Define generatePassword() & Test Button
// function generatePassword() {
//   var passwordText = [];
//   console.log("you have clicked the button")

// Functions for Password generate.
function generatePassword()  {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  while(characterLength > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  return password;  
}


//  1. Prompt the user for the password criteria
//    a. Password length 8 < 128 charactes
      characterLength = prompt ('Password length between 8 and 128 charactes');

//      ensure the character length  between 8 - 128 and ensure once character length is selected
        if (characterLength >= 8 && characterLength <= 128) {
        } else {
          prompt ('Password must be between 8 and 128 characters');
        }


//    b. Lowercase, 
      confirmLowercase = confirm ('Would you like to have LOWERCASE?');



   
//    c. Uppercase
      confirmUppercase = confirm ('Would you like to have UPPERCASE?');



//    d. Numbers
      confirmNumbers = confirm ('Would you like to have NUMBERS?');



//    e. Special characters
      confirmSpecialCharacters = confirm ('Would you like to have SPECIAL CHARACTERS?');
  




//  2. Generate password based on criteria.
//      a. input should be validated and at least one character type selected.

        if (characterLength === false && confirmLowercase === false && confirmUppercase === false && confirmNumbers === false && confirmSpecialCharacters === false) {
          alert ( "Please ensure to choose at lease one criteria");
        }

//  5. Display password to the page . 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

