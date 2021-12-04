/* Let the console know that the script has loaded.
   This code sucks lol
*/
console.log("Loaded!");

// Initialize some variables
var concat = "";
var reverseText = "";
var paragraph = document.createElement("p"); // Create a paragraph
paragraph.className = "output-str"; // Add class to element
const element = document.getElementById("output");

// Function to reverse strings
function reverseString(str) {
    var splitString = str.split(""); // Split the string
    var reverseArray = splitString.reverse(); // Reverse the array
    var joinArray = reverseArray.join(""); // And join them
    reverseText = document.createTextNode(joinArray + "\n"); // Output
    paragraph.appendChild(reverseText);
    console.log(paragraph);
    element.appendChild(paragraph); // Display output
}

// Have fun with the strings
function stringMod() {
    var f1 = document.getElementById("f-field").value;
    var f2 = document.getElementById("s-field").value;
    var f3 = document.getElementById("t-field").value;
    console.log(f1, f2, f3);
    // Concatenate input fields value
    concat = f1 + f2 + f3;
    concat = document.createTextNode(concat);
    console.log(concat);
    // Reverse strings
    reverseString(f1);
    reverseString(f2);
    reverseString(f3);
}

function returnConcat() {
    paragraph.appendChild(concat); // Add the concatenation
    element.appendChild(paragraph); // Display output
}

// On input click, execute functions
document.getElementById("submit").addEventListener("click", function() {
    stringMod();
    returnConcat();
});