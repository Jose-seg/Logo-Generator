const { generateSVG } = require('../logo-generator');
// Here we start with the first test which is for the circle option and its properties
describe('generateSVG', () => {
    test('generates a valid SVG with the given options', () => {
        const options = {
            color: 'red',
            shape: 'circle',
            text: 'Circle Logo',
        };

        const svg = generateSVG(options);
       // Here we let the test know what we should be expecting in order to pass
        expect(svg).toContain('<svg');
        expect(svg).toContain('</svg>');
        // here we expect to return to color of the shape and properties that was chosen
        expect(svg).toContain(`<circle r="100" cx="100" cy="100" fill="${options.color}"></circle>`);
        // This code will search for the text content thats inside the tspan element, which is nested inside of  the <text> element
        expect(svg).toMatch(/<text[^>]*>[^<]*<tspan[^>]*>[^<]*Circle Logo[^<]*<\/tspan>[^<]*<\/text>/)
    });
// this generates our second test for the square shape
    test('generates a valid SVG with a square shape', () => {
        const options = {
            color: 'blue',
            shape: 'square',
            text: 'Square Logo',
        };

        const svg = generateSVG(options);

        expect(svg).toContain('<svg');
        expect(svg).toContain('</svg>');
         // here we expect to return to color and properties of the shape that was chosen
        expect(svg).toContain(`<rect width="200" height="200" fill="${options.color}"></rect>`)
         // This code will search for the text content thats inside the tspan element, which is nested inside of  the <text> element
        expect(svg).toMatch(/<text[^>]*>[^<]*<tspan[^>]*>[^<]*Square Logo[^<]*<\/tspan>[^<]*<\/text>/)
    });
// this generates our second test for the triangle shape
    test('generates a valid SVG with a triangle shape', () => {
        const options = {
            color: 'green',
            shape: 'triangle',
            text: 'Triangle Logo',
        };

        const svg = generateSVG(options);

        expect(svg).toContain('<svg');
        expect(svg).toContain('</svg>');
         // here we expect to return to color of the shape and properties that was chosen
        expect(svg).toContain(`<polygon points="100,0 200,200 0,200" fill="${options.color}"></polygon>`);
         // This code will search for the text content thats inside the tspan element, which is nested inside of  the <text> element
        expect(svg).toMatch(/<text[^>]*>[^<]*<tspan[^>]*>[^<]*Triangle Logo[^<]*<\/tspan>[^<]*<\/text>/)
    });
});