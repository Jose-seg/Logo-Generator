const { generateSVG } = require('../logo-generator');
const fs = require('fs');

describe('generateSVG', () => {
    test('generates a valid SVG with the given options', () => {
        const options = {
            color: 'red',
            shape: 'circle',
            text: 'Test Logo',
        };

        const svg = generateSVG(options);

        expect(svg).toContain('<svg');
        expect(svg).toContain('</svg>');
        expect(svg).toContain(`<circle fill-"${options.color}"`);
        expect(svg).toContain(`<text>${options.text}</text>`);
    });
    
})