//import {expect} from "@jest/globals";

const Calculator = require('../src/Calculator');
//const MathOperations = require('../src/Operations/MathOperations')
/*
test('Calculator adding two numbers', () => {

    let calculator = new Calculator();

    let result = calculator.Sum(1,2);

    expect(result).toBe(expected:3);

});
*/

test('Calculator adding two numbers', () => {
   // let op = MathOperations.Sum();
    let result = Calculator.Sum(1,2,"Sum");
    expect(result).toBe(3);
});

test('Calculator substracting two numbers', () => {
    // let op = MathOperations.Sum();
    let result = Calculator.Difference(1,2,"Difference");
    expect(result).toBe(-1);
});

test('Calculator multiplying two numbers', () => {
    // let op = MathOperations.Sum();
    let result = Calculator.Product(1,2,"Product");
    expect(result).toBe(2);
});

test('Calculator dividing two numbers', () => {
    // let op = MathOperations.Sum();
    let result = Calculator.Quotient(1,2,"Quotient");
    expect(result).toBe(0.5);
});

test('Calculator adding to calculations', () => {
    // let op = MathOperations.Sum();
    let result = Calculator.Quotient(1,2);
    let calculations = Calculator.Calculation;

    calculations.forEach(function(calculation){
        console.log(calculation.GetResults());
        //console.log(calculation);
    });
    expect(result).toBe(0.5);
});