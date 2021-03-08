//import {expect} from "@jest/globals";

const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    let CalculationObject = Calculator.Sum(1,2,"Sum");
    expect(CalculationObject.GetResults()).toBe(3);
});

test('Calculator substracting two numbers', () => {
    let CalculationObject = Calculator.Difference(1,2,"Difference");
    expect(CalculationObject.GetResults()).toBe(-1);
});

test('Calculator multiplying two numbers', () => {
    let CalculationObject = Calculator.Product(1,2,"Product");
    expect(CalculationObject.GetResults()).toBe(2);
});

test('Calculator dividing two numbers', () => {
    let CalculationObject = Calculator.Quotient(1,2,"Quotient");
    expect(CalculationObject.GetResults()).toBe(0.5);
});

test('Calculator square of a number', () => {
    let CalculationObject = Calculator.Square(2,2,"Square");
    expect(CalculationObject.GetResults()).toBe(4);
});

test('Calculator square of a number', () => {
    let CalculationObject = Calculator.SquareRoot(81,0.5,"SquareRoot");
    expect(CalculationObject.GetResults()).toBe(9);
});

test('Calculator adding to calculations', () => {
    let CalculationObject = Calculator.Quotient(1,2);
    let calculations = Calculator.Calculation;

    calculations.forEach(function(calculation){
        console.log(calculation.GetResults());
    });
    expect(CalculationObject.GetResults()).toBe(0.5);
});

test('Calculator Get Last Calculation', () => {
    Calculator.Product(1,2,"Product");
    let CalculationObject = Calculator.getLastCalculation();
    expect(CalculationObject.GetResults()).toBe(2);
});

test('Calculator test static Constructor', () => {
    let CalculationObject = Calculator.getLastCalculation();
    expect(CalculationObject.GetResults()).toBe(2);
});

/*
//Flyweight
test('Calculator of sum using Flyweight', () => {
    let CalculationObject = Calculate.Sum(1,2,"Sum");
    expect(CalculationObject.GetResults()).toBe(3);
});

//Behavioral Pattern - Strategy
test('Calculator of sum using Strategy', () =>{
    let Strategy = operation.Sum(1,2);
    expect(CalculationObject.GetResults()).toBe(3);
});
 */