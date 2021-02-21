//import {expect} from "@jest/globals";

const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    let result = Calculator.Sum(1,2,"Sum");
    expect(result).toBe(3);
});

test('Calculator substracting two numbers', () => {
    let result = Calculator.Difference(1,2,"Difference");
    expect(result).toBe(-1);
});

test('Calculator multiplying two numbers', () => {
    let result = Calculator.Product(1,2,"Product");
    expect(result).toBe(2);
});

test('Calculator dividing two numbers', () => {
    let result = Calculator.Quotient(1,2,"Quotient");
    expect(result).toBe(0.5);
});

test('Calculator square of a number', () => {
    let result = Calculator.Square(2,2,"Square");
    expect(result).toBe(4);
});

test('Calculator square of a number', () => {
    let result = Calculator.SquareRoot(81,0.5,"SquareRoot");
    expect(result).toBe(9);
});

test('Calculator adding to calculations', () => {
    let result = Calculator.Quotient(1,2);
    let calculations = Calculator.Calculation;

    calculations.forEach(function(calculation){
        console.log(calculation.GetResults());
    });
    expect(result).toBe(0.5);
});

test('Calculator Get Last Calculation', () => {
    Calculator.Product(1,2,"Product");
    let result = Calculator.getLastCalculation();
    expect(result).toBe(2);
});
