console.log("Ready.");
var timings = []; // Create array
var subTimings = [];
var cont = 0;
var i = 0;
var str = "";
var strDiff = "";
const totale = document.getElementById('totale');
const differenze = document.getElementById('differenze');
const btnTime = document.getElementById('btnTime');
const clickDiv = document.getElementById('clickValues');
var endCountdown = false;
var clickValues = [];

// Count time
var start = Date.now(); // Get system date
function count() {
    timings[cont] = (Date.now() - start);
    document.getElementById("out").innerHTML="Sono passati " + (timings[cont]) + " millisecondi dal click.";
    cont++;
    for(i=1;i<cont;i++) {
        subTimings[i] = (timings[i] - timings[i-1]);
        clickValues[i] = subTimings[i];
        if(subTimings[i] < 500) {
            clickDiv.style.background = 'red';
        }
        else {
            clickDiv.style.background = 'green';
        }
        console.log(subTimings[i]);
    }
    console.log('Il contatore è a ' + cont);
}

function printTimings() {
    for(i=0;i<cont;i++) {
        str = str + " " + timings[i] + "ms";
        totale.innerHTML = 'Tutti i tempi: ' + str;
    }
}

function printSubTimings() {
    for(i=1;i<cont;i++) {
        strDiff = strDiff + " " + subTimings[i] + "ms";
        differenze.innerHTML = 'Differenze tra i tempi: ' + strDiff;
    }
}

window.onload = function() {
    var i = 3;
    setTimeout(function() {
        btnTime.style.display = "block";
    }, 3000);
};