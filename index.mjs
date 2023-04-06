import fs from 'fs'; // imports the fs package needed to create the svg file

import { generateSVG } from './logo-generator.mjs'; // imports the code that will generate the shape, color, and text according to the prompts

//
async function main() {
    const inquirer = await import('inquirer'); // I imported the inquirer using await because the original way I did this didn't work for me
// prompt questions the user will be asked before the logo is generated
    const questions = [
      {
        type: 'list',
        name: 'color',
        message: 'Select a color:',
        choices: ['red', 'green', 'blue'], // these are the choices for the color
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['circle', 'triangle', 'square'], // these are the choices for the shapes
      },
      {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the logo:',
      },
      {
        type: 'input',
        name: 'filename',
        message: 'Enter a filename to save your logo (without extension ex: .js, .svg):',
      },
    ];

    // Here we correlate the answers given with the questions and those answers will be used the generate the svg 
    const answers = await inquirer.default.prompt(questions);
    const svg = generateSVG(answers);
// This line of code creates the file under svg and as well the file name such as pollo.svg
    fs.writeFileSync(`${answers.filename}.svg`, svg);
    console.log(`SVG file has been saved as ${answers.filename}.svg`);  
}

main();