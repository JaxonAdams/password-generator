// When Button is Pressed
  // Prompt Criteria
      // Choose length between 8 and 128 characters
      // Choose character types: uppercase, lowercase, numeric, and/or special characters
  // Generate Password Based on Criteria
  // Display Password


var promptCriteria = function() {
  window.alert("Please select the criteria you would like to meet for this password.");

  // Prompt Length
  var promptedLength = function() {
    // Prompt length, and keep prompting if a response other than a number between 8 and 128 is given
    var length = "";
    while (length === "" || length === null || length < 8 || length > 128) {
      var length = window.prompt("How long would you like your password to be? Please enter the desired number of characters. Please enter a value of at least 8 characters, and no more than 128 characters.");
    }

    return length;
  }

  // Prompt uppercase, lowercase, or both
  var promptedUpperOrLower = function() {
    // keep prompting if a response other than 1, 2, or 3 is given
    var caseType = "";
    while (caseType === "" || caseType === null || caseType < 1 || caseType > 3) {
      var caseType = window.prompt("Would you like to include uppercase letters, lowercase letters, or both? Please enter 1 for uppercase, 2 for lowercase, or 3 for both.");
    }

    return caseType;
  }

  // Prompt numbers, special characters, both, or neither
  var promptedOther = function() {
    // keep prompting if a response other than 1, 2, 3, or 4 is given
    var other = "";
    while (other === "" || other === null || other < 1 || other > 4) {
      var other = window.prompt("Would you like to include numbers and/or special characters(!, $, etc.)? Please enter 1 for numbers, 2 for special characters, 3 for both, or 4 for neither.");
    }

    return other;
  }

  // Store password criteria in an object titled passwordCriteria
  var passwordCriteria = {
    length: promptedLength(),
    upperOrLowerCase: promptedUpperOrLower(),
    other: promptedOther()
  }

  // Check stored values
  console.log(passwordCriteria);
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
generateBtn.addEventListener("click", promptCriteria); // temporarily changed writePassword to promptCriteria
