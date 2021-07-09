// Assignment code here

//random number generator
var randomNumber = function (min,max){
  var value = Math.floor(Math.random()*(max - min + 1) + min);
  
  return value;
};

//shuffle and array
var shuffle = function (array) {
  for (var i = 0; i < array.length; i++){
  var j = randomNumber(0,array.length-1)
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  }
  return array;
};

//Basic Sets
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["`"+"~"+"!"+"@"+"#"+"$"+"%"+"^"+"&"+"*"+"("+")"+"_"+"-"+"+"+"="+"["+"{"+"}"+"]"+"|"+":"+";"+"'"+"<"+">"+"?"+","+"."+"/"];
var possibleSets = null;

//The selected character options
var character = {
  length: null,
  upper: null,
  lower: null,
  number: null,
  special: null,
} ;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  //Number of characters between 8 and 128 inclusive.
  while (character.length < 8 || character.length > 128 || typeof character.length !== "number") {
character.length = window.prompt("How many characters is your password? \n (Passwords should be between 8 and 128 characters.)");
}
  //uppercase, lowercase, numeric, and/or special characters
character.upper = window.confirm("Does your password contain UPPERCASE letters?");
character.lower = window.confirm("Does your password contain LOWERCASE letters?");
character.number = window.confirm("Does your password contain NUMBERS?");
character.special = window.confirm("Does your password contain SPECIAL characters?");

var generatePassword = function (){

  //If it contains uppercase, add one random uppercase to the password and add the uppercase set to possible sets
  if(character.upper === 'true' || character.upper === 'TRUE') {
    var randomUpperLetter = upperCase[randomNumber(0,25)];

  }

  //If it contains lowercase, add one to the password and add the set to possible sets
  //If it contains numeric, add one to the password and add the set to possible sets
  //If it contains special characters, add one to the password and add the set to possible sets
  //Finish randomly drawing the remaining characters from the possible sets.
  //Scramble the characters and present as password.

};
  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

shuffle(numeric);
