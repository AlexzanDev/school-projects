/* Let the console know that the script has loaded.
   This code sucks lol
*/
console.log("Loaded!");

// Initialize some variables
var paragraph = document.createElement("p"); // Create a paragraph
paragraph.className = "output-str"; // Add class to element
const element = document.getElementById("output");

// Decimal to binary
function convert() {
    var decimal = document.getElementById("f-field").value;
    var binary = Number(decimal).toString(2);
    var text = document.createTextNode(binary + "\n");
    paragraph.appendChild(text);
    element.appendChild(paragraph);
}

// On input click, execute functions
document.getElementById("submit").addEventListener("click", function() {
    convert();
});