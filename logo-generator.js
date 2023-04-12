const { Circle, Square, Triangle } = require('./shapes.js');

class LogoGenerator {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    generateSVG(options) {
        const { color, shape, text } = options;
        let shapeObject;

        if (shape === 'circle') {
            shapeObject = new Circle(this.width / 2, color);
        } else if (shape === 'square') {
            shapeObject = new Square(this.width, color);
        } else if (shape === 'triangle') {
            shapeObject = new Triangle(this.width, color);
        }

        return `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${this.width} ${this.height}">
            ${shapeObject.render()}
            <text x="${this.width / 2}" y="${this.height / 2}" text-anchor="middle" font-family="Arial" font-size="24" fill="white">${text}</text>
            </svg>`;
    }
}

module.exports = {LogoGenerator};