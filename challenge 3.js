// Assignment code here
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
var lowerCase = "qwertyuiopasdfghjklzxcvbnm"
var specialCharacter = "!@#$%^&*"
var Q1 = "What criteria would you like for you password (ex. lowercase, uppercase, special characters)?"

if (Q1 !== "lowercase" && Q1 !== "uppercase" && Q1 !== "special characters") {
  alert("please enter a valid criteria");
} else {
  // Creates element based on tag entered by user
  var password = document.createElement(Q1);
  var password = document.createElement(Q1);
  var password = document.createElement(Q1);
  
  // Appends tag as child of document body
  document.body.appendChild(password);
  document.body.appendChild(password);
  document.body.appendChild(password);
}
var Q2 = confirm("Would you like any other criteria");

if (Q2 === true) {
  var Q2 = prompt("What other criteria would you like for you password (ex. lowercase, uppercase, special characters):", "enter tag here");
  if(Q2 !== "lowercase" && Q2 !== "uppercase" && Q2 !== "speical characters") {
    alert("please enter a valid criteria");
  } else {
    var Q2 = document.createElement(Q2);
    document.body.appendChild(Q2);
  }
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
  document.addEventListener("click", function(){
    prompt(Q1)
    
  })
  generateBtn.addEventListener("click", writePassword);
  document.addEventListener("click", function(){
    prompt(Q2)
    
  })
  