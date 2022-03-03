let coloreArray=[];
coloreArray[0] = "red";
coloreArray[1] = "green";
coloreArray[2] = "blue";
coloreArray[3] = "grey";
const textTent = ["Primo", "Secondo", "Terzo", "Quarto", "Quinto", "Sesto", "Settimo", "Ottavo", "Nono", "Decimo"];
let arraytempiclick=[];
let coloreprecendente=0;
let casuale;
let prendoiltempo;
const miointervallo = setInterval(cambiacolore, 1000);
var cont = 0;
var scoreP = 0;

function cambiacolore() {
    if(cont == 10) {
        return;
    }
    console.log(cont);
    do {
        casuale = parseInt(Math.random()*4);
    }
    while(casuale == coloreprecendente);

    document.getElementById("gameDiv").style.backgroundColor = coloreArray[casuale];
    document.getElementById("test").innerText += casuale + " ";
    coloreprecendente = casuale;
    
    if (casuale==1) {
        prendoiltempo=Date.now();
        cont++;
    }
}
function prendiilcolore() {
    let tempoDifferenza;
    tempoDifferenza = Date.now()-prendoiltempo;
    arraytempiclick.push(tempoDifferenza);
    console.log(tempoDifferenza);
    document.getElementById("click").innerText = tempoDifferenza;
    if(cont == 10) {
        for(i=0;i<10;i++) {
            score.innerHTML += "<li>" + textTent[i] + " tentativo: " + arraytempiclick[i] + "ms.</li>";
        }
        return;
    }
}
