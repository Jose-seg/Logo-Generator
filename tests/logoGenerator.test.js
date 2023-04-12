const { LogoGenerator } = require('../logo-generator');

describe('LogoGenerator', () => {
    const logoGenerator = new LogoGenerator(200, 200);

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

    // tests for square and traingle go here
});