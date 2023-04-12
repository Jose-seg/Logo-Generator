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
        expect(svg).toContain
    });

});