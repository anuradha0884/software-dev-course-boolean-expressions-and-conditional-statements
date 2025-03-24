/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

// Define items that the player can have
const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = false;

console.log("You wake up in a dark forest. There are two paths ahead of you: one leads to the mountains, the other to the village.");
const choice1 = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice1 === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains with your torch.");
  console.log("You find a hidden cave with a treasure chest.");
  const choice2 = readline.question("Do you open the chest? ('yes' or 'no') ");
  
  if (choice2 === "yes" && hasSword) {
    console.log("You open the chest and find a powerful sword!");
  } else if (choice2 === "yes" && !hasSword) {
    console.log("You open the chest, but it’s empty.");
  } else {
    console.log("You decide not to open the chest and continue your journey.");
  }
  
} else if (choice1 === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed without a torch. You decide to turn back.");
  const choice2 = readline.question("Do you go to the 'village' instead? ('yes' or 'no') ");
  if (choice2 === "yes") {
    console.log("You head towards the village, hoping for a better path.");
  } else {
    console.log("You decide to stay in place, waiting for the sun to rise.");
  }
  
} else if (choice1 === "village" || hasMap) {
  console.log("You find your way to the village.");
  const choice2 = readline.question("There is a market. Do you want to buy a compass? ('yes' or 'no') ");
  
  if (choice2 === "yes" && !hasCompass) {
    console.log("You buy a compass from the market. Now you can always find your way.");
  } else if (choice2 === "yes" && hasCompass) {
    console.log("You already have a compass, so you decide not to buy one.");
  } else {
    console.log("You decide to leave the market and explore the village.");
  }
  
} else {
  console.log("You get lost and wander aimlessly.");
}

// Final scenario after completing the first choices
const finalChoice = readline.question("You come to a fork in the road. Do you go 'left' or 'right'? ");
if (finalChoice === "left" && (hasSword || hasCompass)) {
  console.log("You take the left path and find a hidden garden with rare flowers!");
} else if (finalChoice === "right" && !hasSword && !hasCompass) {
  console.log("You take the right path, but it leads you to a dead-end. You're stuck.");
} else {
  console.log("The path you took leads you into the unknown, but you don't mind the adventure.");
}
