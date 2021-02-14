//Arrays for Special Charachters, Numerical Characters, lowercase and uppercase Characters
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '[', ']', '{', '}', ':', ',', '.', '~', '`', '/', '\\', '?', '<', '>', '|'];
var numericChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lowCaseChar = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var uppCaseChar = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

//Function that allows a random element from an array to be selected
function randomElement(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randChar = arr[randIndex];

    return randChar;
}

//Function that displays the user a series of prompts for their password options
function passwordPrompts(){
    //Stores user's choice of password length
    var length = parseInt(prompt('How many characters would you like your password to have? (8 Characters MIN, 128 Characters MAX)'));

    //Makes sure that input is indeed a number
    if (isNaN(length) === true){
        alert('Please make sure that password length is a number');
        return;
    }

    //Ensures that password length meets the character length criteria
    if (length < 8 || length > 128){
        alert('Please make sure that password meets the criteria. (8 Characters MIN, 128 Characters MAX)');
        return;
    }

    //Ask's user if they'd like to include Special, Numeric, Lowercase, and/or Uppercase characters in their password
    var incSpecialChar = confirm("Click OK if you'd like to include special characters in your password");
    var incNumericChar = confirm("Click OK if you'd like to include numerical characters in your password");
    var incLowCaseChar = confirm("Click OK if you'd like to include lowercase characters in your password");
    var incUppCaseChar = confirm("Click OK if you'd like to include upper characters in your password");

    //Ensures that user at least selects one type of character for their password
    if (incLowCaseChar === false && incUppCaseChar === false && incNumericChar === false && incSpecialChar === false){
        alert('Please make sure to include AT LEAST one character type.');
    }

    //Saves user's choices for their password
    var userPassPrompts = {
        length: length,
        incSpecChar: incSpecialChar,
        incNumChar: incNumericChar,
        incLowCaseChar: incLowCaseChar,
        incUppCaseChar: incUppCaseChar
    };

    return userPassPrompts;
}

//Function that generates password depending on the user's input
function passwordGenerator(){
    //Calls in the passwordPrompts function to use information for this passwordGenerator function
    var userOpt = passwordPrompts();
    
    //Final array to be displayed as password.
    var final = [];

    //Includes all possible charachters depending on what the user's options were.
    var possChar = [];

    //Includes at least one of the characters from the user's options ensuring that the parameters chosen are met.
    var fixedChar = [];

    //'If' statements are used to include the parameters that the user wants for their password.
    //It makes sure to go through the 4 character types before putting it into the possChar array and choose elements for the fixed array.
    if (userOpt.incSpecChar){
        possChar = possChar.concat(specialChar);
        fixedChar.push(randomElement(specialChar));
    }
    if (userOpt.incNumChar){
        possChar = possChar.concat(numericChar);
        fixedChar.push(randomElement(numericChar));
    }
    if (userOpt.incLowCaseChar){
        possChar = possChar.concat(lowCaseChar);
        fixedChar.push(randomElement(lowCaseChar));
    }
    if (userOpt.incUppCaseChar){
        possChar = possChar.concat(uppCaseChar);
        fixedChar.push(randomElement(uppCaseChar));
    }
    
    //For loop chooses characters from possChar array and pushes it into the final array
    for (var i = 0; i < userOpt.length; i++) {
        var possChar1 = randomElement(possChar);

        final.push(possChar1);
    }

    //For loop makes sure to include the chosen characters from the fixed array and puts it into the final array
    for (var i = 0; i < fixedChar.length; i++) {
        final[i] = fixedChar[i];
    }

    //Returns the final array
    return final.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
