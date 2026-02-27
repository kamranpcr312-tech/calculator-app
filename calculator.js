// Advanced Calculator JavaScript File

class AdvancedCalculator {
    constructor() {
        this.memory = 0;
        this.history = [];
    }

    // Memory Operations
    memoryAdd(value) {
        this.memory += value;
    }

    memorySubtract(value) {
        this.memory -= value;
    }

    memoryClear() {
        this.memory = 0;
    }

    memoryRecall() {
        return this.memory;
    }

    // Basic Operations
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if(b !== 0) return a / b;
        throw new Error('Cannot divide by zero');
    }

    // Scientific Calculations
    square(a) {
        return a * a;
    }

    squareRoot(a) {
        return Math.sqrt(a);
    }

    power(a, b) {
        return Math.pow(a, b);
    }

    // Shape Area Calculators
    areaOfCircle(radius) {
        return Math.PI * radius * radius;
    }

    areaOfSquare(side) {
        return side * side;
    }

    areaOfRectangle(length, width) {
        return length * width;
    }

    // Number to Words Converter
    numberToWords(num) {
        const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
        if (num < 0) return 'negative ' + this.numberToWords(-num);
        if (num < 11) return words[num];
        return 'number too large'; // Extend as necessary
    }

    // History Management
    addToHistory(operation) {
        this.history.push(operation);
    }

    getHistory() {
        return this.history;
    }

    clearHistory() {
        this.history = [];
    }

    // Simple Equation Solver
    solveEquation(equation) {
        // For simplicity, using eval() - be cautious with this method in production!
        return eval(equation);
    }

    // Export Features
    exportHistory() {
        const blob = new Blob([JSON.stringify(this.history)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'history.json';
        a.click();
        URL.revokeObjectURL(url);
    }
}

// Example Usage
const calculator = new AdvancedCalculator();
console.log(calculator.add(5, 10)); // 15
console.log(calculator.areaOfCircle(5)); // 78.54
