let name = prompt("What is you name")
let amount = prompt("How Much do you earn");
// let amount = "N" + (Amount);
// console.log (amount);
let investment = (5/10)*amount;
let savings = (1/10)*amount;
let gift = (1/10)*amount;
let upkeep = (3/10)*amount;
console.log(name,",You should invest:","N"+investment);
console.log("You should save:","N"+savings);
console.log("You should use:","N"+upkeep ," for your Upkeep");
console.log("You should give:","N"+gift ," as charity");