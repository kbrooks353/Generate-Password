// created arrays

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// create an array with the other arrays in it

var allArr = [lowerCase, nums, specialChar, upperCase];

// create a function that randomizes an index in an array

function randomIndex(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// create a function that calls randomIndex with a random arr the number of times the user selected
var newPass = "";
// function that asks user for a password length and returns that number
function userPassLength() {
    var passLength = prompt("Choose a password length between 8 and 28 characters.");
    for (var i = 0; i < 10; i++) {
        if (isNaN(passLength)) {
            passLength = prompt("Enter a number between 8 and 28!");
        } else if (passLength < 8) {
            passLength = prompt("I said BETWEEN 8 and 28!");
        } else if (passLength > 28) {
            passLength = prompt("I said BETWEEN 8 and 28!");
        }
    }
    return passLength;

}

function generatePass() {
    
    var newPassLength = userPassLength();
    for (var j = 0; j < newPassLength; j++) {
        var whichArr = randomIndex(allArr);
        newPass = newPass + randomIndex(whichArr);
        console.log(newPass);
    }

}
function copyText(){
    var copiedText = document.getElementById("password");
    copiedText.select();
    document.execCommand("copy");
}


generatePass();
document.getElementById("password").value = newPass;
document.addEventListener("click", copyText());
