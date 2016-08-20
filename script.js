var things = ['Sim', 'Não', 'Talvez'];
var thing = things[Math.floor(Math.random()*things.length)];
document.getElementById("vou").innerHTML = thing;
document.getElementById("bodi").className = thing;