import{ Circle, Square, Triangle } from './shapes.js';

class LogoGenerator {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.shapes = [];
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    generateSVG(options) {
        const { color, shape, text } = options;
        // let shapeObject;

        if (shape === 'circle') {
            const circle = new Circle(100, color);
            this.addShape(circle);
        } else if (shape === 'square') {
            const square = new Square(200, 200, color);
            this.addShape(square);
        } else if (shape === 'triangle') {
            const triangle = new Triangle([[100, 0], [200, 200], [0, 200]], color);
            this.addShape(triangle);
        }

        const shapesSvg = this.shapes.map(shape => shape.render()).join('');

        return `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${this.width} ${this.height}">
            ${shapesSvg}
            <text x="${this.width / 2}" y="${this.height / 2}" text-anchor="middle" font-family="Arial" font-size="24" fill="white">${text}</text>
            </svg>`;
    }
}

export {LogoGenerator};