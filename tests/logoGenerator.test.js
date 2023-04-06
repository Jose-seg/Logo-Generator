const { Circle } = require('@svgdotjs/svg.js');
const { generateSVG } = require('../logo-generator.mjs');

describe('generateSVG', () => {
    test('generates a valid SVG with the given options', () => {
        const options = {
            color: 'red',
            shape: 'circle',
            text: 'Circle Logo',
        };

        const svg = generateSVG(options);
       
        expect(svg).toContain('<svg');
        expect(svg).toContain('</svg>');
        expect(svg).toContain(`<circle r="100" cx="100" cy="100" fill="${options.color}"></circle>`);
        expect(svg).toMatch(/<text[^>]*>[^<]*<tspan[^>]*>[^<]*Circle Logo[^<]*<\/tspan>[^<]*<\/text>/)
    });

    test('generates a valid SVG with a square shape', () => {
        const options = {
            color: 'blue',
            shape: 'square',
            text: 'Square Logo',
        };

        const svg = generateSVG(options);

        expect(svg).toContain('<svg');
        expect(svg).toContain('</svg>');
        expect(svg).toContain(`<rect width="200" height="200" fill="${options.color}"></rect>`)
        expect(svg).toMatch(/<text[^>]*>[^<]*<tspan[^>]*>[^<]*Square Logo[^<]*<\/tspan>[^<]*<\/text>/)
    });

    test('generates a valid SVG with a triangle shape', () => {
        const options = {
            color: 'green',
            shape: 'triangle',
            text: 'Triangle Logo',
        };

        const svg = generateSVG(options);

        expect(svg).toContain('<svg');
        expect(svg).toContain('</svg>');
        expect(svg).toContain(`<polygon points="100,0 200,200 0,200" fill="${options.color}"></polygon>`);
        expect(svg).toMatch(/<text[^>]*>[^<]*<tspan[^>]*>[^<]*Triangle Logo[^<]*<\/tspan>[^<]*<\/text>/)
    });
});