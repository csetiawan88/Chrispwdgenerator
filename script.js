// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define variable. From Sandesh - TA (Slack)
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];


// Functions for Password generate.
function generatePassword() {
  var characterLength = prompt("Password length between 8 and 128 charactes");

  // Ensure the character length  between 8 - 128 and ensure once character length is selected
  if (characterLength < 8 || characterLength > 128) {
  alert("Please pick a number between 8 and 128 characters")
  return;
  }

  //    b. Lowercase,
  var confirmLowercase = confirm("Would you like to have LOWERCASE?");

  //    c. Uppercase
  var confirmUppercase = confirm("Would you like to have UPPERCASE?");

  //    d. Numbers
  var confirmNumbers = confirm("Would you like to have NUMBERS?");

  //    e. Special characters
  var confirmSpecialCharacters = confirm(
    "Would you like to have SPECIAL CHARACTERS?"
  );

  //  Generate password based on criteria.
  //  Input should be validated and at least one character type selected.
  if (
    confirmLowercase == false &&
    confirmUppercase == false &&
    confirmNumbers == false &&
    confirmSpecialCharacters == false
  ) {
    alert("Please ensure to choose at lease one criteria");
    return;
  }

  let password = "";
  let allChars = [];

  if (confirmUppercase){
    allChars = allChars.concat(upperCase);
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
  }

  if (confirmLowercase){
    allChars = allChars.concat(lowerCase);
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }

  if (confirmNumbers){
    allChars = allChars.concat(numbers);
    password += numbers[Math.floor(Math.random() * numbers.length)];
  }

  if (confirmSpecialCharacters){
    allChars = allChars.concat(specialCharacters);
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }
  console.log(password);
  console.log(allChars);
  while (characterLength > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  return password;
}

// Display password to the page .
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
