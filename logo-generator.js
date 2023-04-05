const SVG = require('svg.js');

function generateSVG(options) {
    const {color, shape, text} = options;
    const width = 200;
    const height = 200;

    const canvas = SVG().size(width, height);

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
    canvas.text(text)
    .font({family: 'Arial', size: 24, anchor: 'middle', leading: '1.5em'})
    .fill('white')
    .move(width / 2, height / 2 -12);

    return canvas.svg();
}

module.exports = {
    generateSVG,
};