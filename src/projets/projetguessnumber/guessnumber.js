import "nes.css/css/nes.css";
import "nes.css/css/nes.min.css";
const max = 10;
const  onSubmit = document.getElementById('btSubmit');
const true_confirm = document.getElementById('btConfirmTrue');
const false_confirm = document.getElementById('btConfirmFalse');
let iaNbr = Math.floor(Math.random() * Math.floor(max));
console.log(iaNbr);
let isGuessing = true;

// onclick="document.getElementById('dialog-custom').showModal();"

onSubmit.addEventListener('click', ()=> {
    const getValue = document.getElementById('valueTag').valueAsNumber;
    if ( getValue == iaNbr ) {
        document.getElementById('dialog-vrai').showModal();
        console.log('GG');
    } else if ( getValue != iaNbr ) {
        document.getElementById('wrong').innerText = "FAUX! C'était " + iaNbr;
        document.getElementById('dialog-faux').showModal();
    }
});


true_confirm.addEventListener('click', ()=> {
    rdmNbr();
    console.log(iaNbr);
    console.log('Retry');
});

false_confirm.addEventListener('click', ()=> {
    rdmNbr();
    console.log(iaNbr);
    console.log('Retry');
});



function rdmNbr() {
    iaNbr = Math.floor(Math.random() * Math.floor(max));
    console.log(iaNbr);
    return iaNbr
}