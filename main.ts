import inquirer from "inquirer"

const answer:{ Sentence:string} = await inquirer.prompt(
    [
        {
            name:"Sentence",
            type:"input",
            message: "Enter your sentence to count the words :"
        }
    ]
)
const words = answer.Sentence.trim().split(" ")
console.log(words)
console.log(`Your sentence contain ${words.length} word`)