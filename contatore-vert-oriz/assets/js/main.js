/* Variables */
var counterVert = 0;
var counterHorz = 0;
var contVertElem = document.getElementById( 'cont-vert' );
var contHorzElem = document.getElementById( 'cont-horz' );

/* Get button ID. */
var btnId = null;
document.addEventListener( 'click', (e) => {
    btnId = e.target.id;
    console.log( btnId );
});

function negativeCheck() {
    if ( counterVert == 0 || counterHorz == 0 ) {
        alert( 'Un contatore è già a zero.' );
        return true;
    }
}

/* On button click... do the count. Not the best. */
onclick = () => {
    switch( btnId ) {
        case 'minus-hv':
            if ( negativeCheck() ) {
                return;
            }
            else {
                counterVert--;
                counterHorz--;
            }
            break;
        case 'plus-h':
            counterHorz++;
            break;
        case 'plus-hv':
            counterVert++;
            counterHorz++;
            break;
        case 'minus-v':
            if ( counterVert == 0 ) {
                alert( 'Il contatore è già a zero.' );
                return;
            }
            else {
                counterVert--;
            }
            break;
        case 'nothing':
            alert( 'Questo bottone non serve a niente.' );
            break;
        case 'plus-v':
            counterVert++;
            break;
        case 'minus-h':
            if ( counterHorz == 0 ) {
                alert( 'Il contatore è già a zero.' );
                return;
            }
            else {
                counterHorz--;
            }
            break;
    }
    contVertElem.innerHTML = counterVert;
    contHorzElem.innerHTML = counterHorz;
}
