console.log("Loaded!");

let arrayContent = ['prova', 'test']; // Initialize array

function showArray() {
    let text = "";
    let formInput = "";
    formInput = document.getElementById("field").value; // Get form value
    arrayContent.push(formInput); // Add elements to array
    text = text + ", " + formInput; // Create final text
    document.getElementById("output-text").innerHTML = arrayContent; // Output array content to page
    return false; // Don't refresh page on submit
}