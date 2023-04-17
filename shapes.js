// Using class method for the Circle Shape
class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    render() {
        return `<circle r="${this.radius}" cx="${this.radius}" cy="${this.radius}" fill="${this.color}"></circle>`;
    }
}
// Using class method for the Square Shape
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
// Using class method for the Triangle Shape
class Triangle {
    constructor(points, color) {
        this.points = points;
        this.color = color;
    }

    render () {
        return `<polygon points="${this.points.map(point => point.join(',')).join(' ')}" fill="${this.color}"></polygon>`;
    }
}

export { Circle, Square, Triangle };