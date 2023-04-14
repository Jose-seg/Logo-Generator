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
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render() {
        return `<rect width="${this.width}" height="${this.height}" fill="${this.color}"></rect>`;
    }
}

class Triangle {
    constructor(points, color) {
        this.points = points;
        this.color = color;
    }

    render () {
        return `<polygon points="${this.points.map(point => point.join('')).join('')}" fill="${this.color}"></polygon>`;
    }
}

module.exports = { Circle, Square, Triangle };