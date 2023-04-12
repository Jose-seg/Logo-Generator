class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    render() {
        return `<circle r="${this.radius}" cx="${this.radius}" cy="${this.radius}" fill="${this.color}"></circle>`;
    }
}

class Square {
    constructor(sideLength, color) {
        this.sideLength = sideLength;
        this.color = color;
    }

    render() {
        return `<rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}"></rect>`;
    }
}

class Triangle {
    constructor(baseLength, color) {
        this.baseLength = baseLength;
        this.color = color;
    }

    render () {
        return `<polygon points="${this.baseLength / 2},0 ${this.baseLength},${this.baseLength} 0,${this.baseLength}" fill="${this.color}"></polygon>`;
    }
}

module.exports = { Circle, Square, Triangle };