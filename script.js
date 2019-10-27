var things = ['Sim', 'N&atilde;o', 'Talvez'];
var thing = things[Math.floor(Math.random()*things.length)];
document.getElementById("vou").innerHTML = thing;
document.getElementById("bodi").className = thing;