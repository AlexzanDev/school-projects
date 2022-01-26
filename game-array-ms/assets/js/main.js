console.log("Ready.");
var timings = []; // Create array
var cont = 0;
var i = 0;
var str = "";
var totale = document.getElementById('totale');

// Count time
var start = Date.now(); // Get system date
function count() {
    timings[cont] = (Date.now() - start);
    document.getElementById("out").innerHTML="Sono passati " + (timings[cont]) + " millisecondi dal click.";
    cont++;
}

function printTimings() {
    for(i=0;i<cont;i++) {
        str = str + " " + timings[i] + "ms";
        totale.innerHTML = 'Tutti i tempi: ' + str;
    }
}
