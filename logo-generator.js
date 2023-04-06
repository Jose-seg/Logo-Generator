// imports the packages we will use for this backend app
const { SVG, registerWindow } = require('@svgdotjs/svg.js');
const {createSVGWindow} = require('svgdom');
// function for generating the svg according to the user's selected options
function generateSVG(options) {
    const {color, shape, text} = options;
    const width = 200;
    const height = 200;

// used different packages such as svgdom and svgdotjs to be able to make the svg file
    const window = createSVGWindow();
    const document = window.document;
    registerWindow(window, document);

    const canvas = SVG(document.documentElement).size(width, height);
// if statements for the choices in shape the user may choose
    if (shape === 'circle') {
        canvas.circle(width).fill(color).center(width/ 2, height / 2); 
    } else if (shape === 'square') {
        canvas.rect(width, height).fill(color);
    } else if (shape === 'triangle') {
        canvas.polygon([
            [width/ 2, 0],
            [width, height],
            [0, height],
        ]).fill(color);
    }
   // Code for putting the text onto the canvas 
    canvas.text(text)
    .font({family: 'Arial', size: 24, anchor: 'middle', leading: '1.5em'})
    .fill('white')
    .move(width / 2, height / 2 - 12);

    return canvas.svg();
}
// here we export the generate svg function to import it to the index.mjs
module.exports = { generateSVG };