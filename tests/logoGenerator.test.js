const { LogoGenerator } = require('../logo-generator');
const { Square, Triangle } = require('../shapes');

describe('LogoGenerator', () => {
    const logoGenerator = new LogoGenerator(200, 200);
// test for the square shape
    test('generateSVG generates a valid SVG with a circle shape', () => {
        const options = {
            color: 'red',
            shape: 'circle',
            text: 'Circle Logo',
        };

        const svg = logoGenerator.generateSVG(options);
        expect(svg).toContain('<svg');
        expect(svg).toContain('</svg>');
        expect(svg).toContain(`<circle r="100" cx="100" cy="100" fill="${options.color}"></circle>`);
        expect(svg).toContain(`<text x="100" y="100" text-anchor="middle" font-family="Arial" font-size="24" fill="white">${options.text}</text>`);
    });

    // tests for square goes here
    test('Square shape should have the correct width and height', () => {
        const options = {
            color: 'blue',
            shape: 'square',
            text: 'Square Logo',
        };
        const logoGenerator = new LogoGenerator(200, 200);
        const svg = logoGenerator.generateSVG(options);

        const square = logoGenerator.shapes.find((shape)  => shape instanceof Square); 
        expect(square).toBeDefined();
        expect(square.width).toBe(200);
        expect(square.height).toBe(200);
    });

    // Here is the test for the triangle
    test('Triangle shape should have the correct points', () => {
        const options = {
            color: 'green',
            shape: 'triangle',
            text: 'Triangle Logo',
        };

        const logoGenerator = new LogoGenerator(200, 200);
        const svg = logoGenerator.generateSVG(options);

        const triangle = logoGenerator.shapes.find((shape) => shape instanceof Triangle);
        expect(triangle).toBeDefined();
        expect(triangle.points).toEqual([
            [100, 0],
            [200, 200],
            [0, 200],
        ]);
    });
});