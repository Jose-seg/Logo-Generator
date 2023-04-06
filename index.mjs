import fs from 'fs';

import { generateSVG } from './logo-generator.mjs';

async function main() {
    const inquirer = await import('inquirer');

    const questions = [
      {
        type: 'list',
        name: 'color',
        message: 'Select a color:',
        choices: ['red', 'green', 'blue'],
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['circle', 'triangle', 'square'],
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

    const answers = await inquirer.default.prompt(questions);
    const svg = generateSVG(answers);

    fs.writeFileSync(`${answers.filename}.svg`, svg);
    console.log(`SVG file has been saved as ${answers.filename}.svg`);  
}

main();