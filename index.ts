import { log } from "console";
import inquirer from "inquirer";
const answer: {
  sentence: string;
} = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: "Enter any sentence :",
  },
]);

const words = answer.sentence.trim().split(" ");

console.log(words);

console.log(`Your total words in your given sentence is ${words.length}.`);
