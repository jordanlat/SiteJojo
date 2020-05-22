
import moment from 'moment'

import css from "./index.css"
import "nes.css/css/nes.css";
import numberPrev from "./assets/img/number.png";
import teamderPrev from "./assets/img/teamder.png";

document.getElementById('teamderPrev').src = teamderPrev;
document.getElementById('numberPrev').src = numberPrev;

var showText = function (target, message, index, interval) {   
    
  if (index < message.length) {
    document.querySelector(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}
// showText("#text", textadded, 0, 100);  
/*
const intros = "Bonjour nouveau Joueur";
const intros2 = "Tu démarre une nouvelle aventure";

showText("#main",intros,0,100);
showText("#main",intros2,0,100);

//async function test () {
  showText("#main",intros,0,100);
//}
//test();
// await wait(100);
//async function test2 () {
  showText("#main",intros2,0,100);
//}
//test2();
*/