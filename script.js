// script.js

// Basic Calculator Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    }
    throw new Error("Cannot divide by zero.");
}

// Memory Operations
let memory = 0;

function memoryStore(value) {
    memory = value;
}

function memoryRecall() {
    return memory;
}

function memoryClear() {
    memory = 0;
}

// Scientific Calculations
function sin(value) {
    return Math.sin(value);
}

function cos(value) {
    return Math.cos(value);
}

function exp(value) {
    return Math.exp(value);
}

function log(value) {
    return Math.log(value);
}

// Shape Area Calculator
function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}

function areaOfRectangle(length, width) {
    return length * width;
}

function areaOfTriangle(base, height) {
    return (base * height) / 2;
}

// Number to Words Converter
function numberToWords(num) {
    // Implementing basic version for numbers 1-99 for simplicity
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  
    if (num < 10) return ones[num];
    else if (num < 20) return teens[num - 10];
    else {
        let ten = Math.floor(num / 10);
        let one = num % 10;
        return tens[ten] + (one ? " " + ones[one] : "");
    }
}

// History Management
let history = [];

function addToHistory(entry) {
    history.push(entry);
}

function getHistory() {
    return history;
}