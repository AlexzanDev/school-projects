console.log("Loaded!");

let s1 = [];
let s2 = [];
let s3 = []; // Initialize arrays

// Don't refresh page on submit
var form = document.getElementById("form");
function handleForm(event) { 
    event.preventDefault(); 
} 
form.addEventListener('submit', handleForm);

function showArray() {
    var s1C = document.getElementById("s1").value;
    var s2C = document.getElementById("s2").value;
    var s3C = document.getElementById("s3").value;
    s1.push(s1C); // Add elements to array
    s2.push(s2C);
    s3.push(s3C);
    console.log(s1, s2, s3);
    // Get three strings' lenght
    let s1L = s1.lenght;
    let s2L = s2.lenght;
    let s3L = s3.lenght;
    // Generate what?
    let s1I = Math.floor(Math.random() * s1L - 1);
    let s2I = Math.floor(Math.random() * s2L - 1);
    let s3I = Math.floor(Math.random() * s3L - 1);
    // Concatenate the strings
    var content = s1 + " " + s2 + " " + s3;    
    document.getElementById("output-text").innerHTML = content; // Output array content to page
}