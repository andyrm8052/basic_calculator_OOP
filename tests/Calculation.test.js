const Calculation = require('../src/models/Calculation');
const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');
const Square = require('../src/Operations/Square');
const SquareRoot = require('../src/Operations/SquareRoot');

test('Test of Calculation Instantiation', () => {
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});

test('Test Get results for Sum function', () => {
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(3);
});

test('Test Get results for Difference function', () => {
    let op = Difference;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(-1);
});

test('Test Get results for Product function', () => {
    let op = Product;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(2);
});

test('Test Get results for Quotient function', () => {
    let op = Quotient;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(0.5);
});

test('Test Get results for Square function', () => {
    let op = Square;
    let calculation = new Calculation(2,2,op);
    expect(calculation.GetResults()).toBe(4);
});

test('Test Get results for Square function', () => {
    let op = SquareRoot;
    let calculation = new Calculation(81,0.5,op);
    expect(calculation.GetResults()).toBe(9);
});

//Structural Pattern - Flyweight
test( 'Test Get results for Sum using Flyweight', () =>{
   let op = Sum;
   let Calculate = new Calculation(1, 2, op);
    expect(CalculationObject.GetResults()).toBe(3);
});

//Behavioral Pattern - Strategy
test('Test Ger Results for Sum using Strategy', () =>{
   let Strategy = new Calculation(1, 2, Sum);
   expect(CalculationObject.GetResults()).toBe(3);
   return Strategy.operation(1, 2);
});