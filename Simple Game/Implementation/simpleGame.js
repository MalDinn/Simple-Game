var united = require("kaeon-united");

console.log("Welcome, player! Ready to battle?")

let goku = 100
let vegeta = 100

while(goku > 0 && vegeta > 0) {

    console.log("Goku's HP is", goku)
    console.log("Vegeta's HP is", vegeta)

    console.log("Enter 1 for Kamehameha -20 damage")
    console.log("Enter 2 for Sledgehammer -10 damage")

    let move = united("io").getInput("Choose your move: ");

    if(move == "1") {

        console.log("Goku fired a Kamehameha wave! Vegeta lost 20 HP!")

        vegeta = vegeta - 20;
    }
    
    if(move == "2") {

        console.log("Goku just smashed Vegeta's head in! Vegeta lost 10 HP!")

        vegeta = vegeta - 10;
    }

    if(vegeta > 0) {

        console.log("Vegeta launched a Galick Gun at Goku, almost vaporizing the Earth! Goku lost 15 HP!")

        goku = goku - 15;
    }
}

if(vegeta < goku) {
    console.log("Goku wins! The Earth has been saved!")
}

else {
    console.log("Vegeta has defeated Earth's last hope and vaporized the planet!")
}