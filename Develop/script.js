// Assignment code here

//random number generator
var randomNumber = function (min,max){
  var value = Math.floor(Math.random()*(max - min + 1) + min);
  
  return value;
};

//shuffle an array
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
const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numeric = ["0","1","2","3","4","5","6","7","8","9"];
const special = ["`","~","!","@","#","$","%","^","&","*","(",")","_","-",",","=","[","{","}","]","|",":",";","'","<",">","?",",",".","/"];


//The selected character options with dummy values

var character = {
  long: null,
  upper: null,
  lower: null,
  numeric: null,
  special: null,
} ;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  //Number of characters between 8 and 128 inclusive. While loop rejects bad answers.
  while (character.long < 8 || character.long > 128 || isNaN(character.long)) {
character.long = window.prompt("How many characters is your password? \n (Passwords should be between 8 and 128 characters.)");
  }

//upper, lower, numeric, and/or special characters
character.upper = window.confirm("Does your password contain upper letters?");
character.lower = window.confirm("Does your password contain lower letters?");
character.numeric = window.confirm("Does your password contain NUMBERS?");
character.special = window.confirm("Does your password contain SPECIAL characters?");

//Add one random character from currentSet to the prescrambled password and add the currentSet to possible sets to draw from.
var charAdd = function (currentSet) {
    var randomChar = currentSet[randomNumber(0, currentSet.length-1)];
    prescrambled.push(randomChar);
    possibleSets = possibleSets.concat(currentSet);
}

//Begin the generatePassword function which explains how to find pwd
var generatePassword = function (){
  //Empty sets. We will construct the characters of the password in prescramble and all possible sets to draw from in possibleSets
  const prescrambled =[];
  var possibleSets =[];
  password = null;

  //Check and add if true for each set.
  if(character.upper){
    charAdd(upper); 
  }
  if(character.lower){
    charAdd(lower); 
  }
  if(character.numeric) {
    charAdd(numeric);
  }
  if(character.special) {
    charAdd(special);
  }
  
  //Finish randomly drawing the remaining characters from the possible sets.
  
  for (var i = prescrambled.length ; i < character.long; i++) {
    var moreRandChar = possibleSets[randomNumber(0,possibleSets.length-1)];
    prescrambled.push(moreRandChar);
  }
  //Scramble the characters and present as password.
  password = shuffle(prescrambled);
  password = password.toString();
  return password;
};
  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);