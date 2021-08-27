// Assignment Code
var generateBtn = document.querySelector("#generate");

// Why do we have these strings here?
// we use these strings to pull data from for the password generator. 
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "0123456789";
var special = "!@#$%^&*()_+";

function getRandom(str) {
  // What is going on here?
  // it is going to generate a random number for our password
  var randomIndex = Math.floor(Math.random() * str.length);
  // and here?
  // this is going to give us a random element from an array
  return str[randomIndex];
}

// Write password to the #password input
function writePassword() {
  // What is the difference between return and console log?
  // return will give us something and the console log is just in the console 
  // What happens if we console log our password instead of returning it?
  // it will just run in the console and not actually give us anything in the web page
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Ask the user for their password criteria
  // 8 characters and no more than 128 characters
  // Prompt the user for the password length
  var length = prompt("How long would you like your password to be?");

  // If the length is less than 8 or more than 128
  if (length < 8 || length > 128) {
    // alert the user that they messed up
    alert("Your password must be between 8 and 128");
    // exit the function early, (use the return keyword)
    return "";
  }

  // What are we doing here?
  // we are creating the variables to prompt a pop up when generating the password to select all the options for it.
  var useLowercase = confirm("Would you like to use lower case characters?");
  var useUppercase = confirm("Would you like to use upper case characters?");
  var useNumeric = confirm("Would you like to use numeric characters?");
  var useSpecial = confirm("Would you like to use special characters?");

  var pass = "";
  for (var i = 0; i < length; i++) {
    if (useLowercase) {
      pass += getRandom(lowercase);
    }
    if (useUppercase) {
      pass += getRandom(uppercase);
    }
    if (useNumeric) {
      pass += getRandom(numeric);
    }
    if (useSpecial) {
      pass += getRandom(special);
    }
  }

  // Why is this if statement necessary? - to prevent the user from going through the prompts and not selecting any of the variables.
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("We need at least one option to be chosen.");
    return "";
  }

  // `return` that password
  return pass.substr(0, length);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
