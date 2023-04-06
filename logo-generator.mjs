import { SVG, registerWindow } from '@svgdotjs/svg.js';
import { createSVGWindow } from 'svgdom';

function generateSVG(options) {
    const {color, shape, text} = options;
    const width = 200;
    const height = 200;

    const window = createSVGWindow();
    const document = window.document;
    registerWindow(window, document);

    const canvas = SVG(document.documentElement).size(width, height);

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
    .move(width / 2, height / 2 - 12);

    return canvas.svg();
}

export { generateSVG };