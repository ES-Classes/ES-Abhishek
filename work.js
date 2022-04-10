//store Prabin's and Ram's mass and height in variables
let prabinMass= 60;
let ramMass= 65;

let prabinHeight= 1.5;
let ramHeight= 2;

let prabinBMI = prabinMass/(prabinHeight*prabinHeight)
let ramBMI = ramMass/(ramHeight*ramHeight)

let prabinHigherBMI = prabinBMI > ramBMI

console.log(prabinBMI);
console.log(ramBMI);

console.log(prabinHigherBMI);
