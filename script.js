// created arrays

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];

// create an array with the other arrays in it

var allArr = [lowerCase, nums];

// create a function that randomizes an index in an array

function randomIndex(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// create a function that calls randomIndex with a random arr the number of times the user selected
var newPass = "";
function generatePass() {
    var passLength = prompt("Choose a password length between 8 and 128 characters.");
    for (var i = 0; i < 10; i++) {
        if (isNaN(passLength)) {
            passLength = prompt("Enter a number between 8 and 128!");
        } else if (passLength < 8) {
            passLength = prompt("I said BETWEEN 8 and 128!");
        } else if (passLength > 128) {
            passLength = prompt("I said BETWEEN 8 and 128!");
        }
    }
    for (var j = 0; j < passLength; j++){
        var whichArr = randomIndex(allArr);
        newPass = newPass + randomIndex(whichArr);
        console.log(newPass);
    }

}
 generatePass();
