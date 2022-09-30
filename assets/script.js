// Assignment Code
var generateBtn = document.querySelector("#generate");

// Object of different character types
let pwdModifiers = {
  characters: 'abcdefghijklmnopqrstuvwxyz',
  specialChar: '!@#$%^&*()-_',
  numbers: '1234567890',
}

//initialized variable to store a string of all character types
let concatArr = '';

//Initialized variable to push random characters to and store resulting randomized password
let pwd = "";


// This function generates the entire password and then returns the end result to the function writePassword() at the end of the file.
let generatePassword = () => {
  // Emptys the pwd variable everytime the function generatePassword() runs
  pwd = '';

  // Emptys the concatArr variable just like pwd on line 21
  concatArr = '';

  // This asks the user how many characters their password should be
  let pwdLengthPrompt = prompt('How many characters do you want you password to be?');

  // This converts the variable on line 27 to an integer
  let pwdLength = parseInt(pwdLengthPrompt);
    
  // This is validating that the password length is between 8 and 128 characters
  if (pwdLength < 8 || pwdLength > 128) {
    alert('Password must be between 8 and 128 characters!')
    return;
    // Else if below is validating that User either did not enter a string. 
    //It also serves to end the function if user presses cancel instead of entering a number.
  } else if (isNaN(pwdLength)) {
    alert('Must enter a number!');
    return;
  }
  
  // The next 4 variables ask the user if they want the various character types in their password. These are stored as boolean values in the variable.
  let upperCaseOption = confirm('Do you want uppercase characters?');
  let lowerCaseOption = confirm('Do you want lowercase characters in your password?');
  let specialCharOption = confirm('Do you want special characters in your password?');
  let numbersOption = confirm('Do you want to include numbers in your password?');


  // These 4 if statements check to see if the user accepted the various character types
  if (upperCaseOption === true) {
    concatArr += pwdModifiers.characters.toUpperCase();
  }

  if (lowerCaseOption === true) {
    concatArr += pwdModifiers.characters;
  }

  if (specialCharOption === true) {
    concatArr += pwdModifiers.specialChar;
  }

  if (numbersOption === true) {
    concatArr += pwdModifiers.numbers;
  }

  // This verifies that the User accepted at least ONE character type for the password
  if (!upperCaseOption && !lowerCaseOption && !specialCharOption && !numbersOption) {
    alert('Must select at least one type of character!')
    return;
  }

  // This logs the concatArr array to the console to verify that the User selected character types are the only types in the array.
  console.log(concatArr);


  // This for loop iterates through the concatArr variable by the length of User-specified password length and randomly selects a character from the concatArr.
  for (let i = 0; i < pwdLength; i++) {
    pwd += concatArr.charAt(Math.floor(Math.random() * concatArr.length));
    console.log(pwd)
  }

  // This verifies the length of the password by logging the length to the console
  console.log(pwd.length);

  // This returns the pwd variable as a string to the writePassword() function to output to the textarea element
  return pwd;
}


// This function enables the user to click on the textarea in the HTML doc and select the whole password string with one click
function selectText() {
  const input = document.getElementById('password');
  input.focus();
  input.select();
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


