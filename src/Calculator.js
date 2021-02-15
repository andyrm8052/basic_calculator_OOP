const Calculation = require('./models/Calculation');
const Sum = require('./Operations/Sum');
const Difference = require('./Operations/Difference');
const Product = require('./Operations/Product');
const Quotient = require('./Operations/Quotient');
const Square = require('./Operations/Square');
const SquareRoot = require('./Operations/SquareRoot');

class Calculator {
    static Calculation = [];
    static Sum(a,b){
        let calculation = new  Calculation(a,b,Sum);
        Calculator.Calculation.push(calculation);
        return calculation.GetResults();
    }

    static Difference(a,b){
        let calculation = new  Calculation(a,b,Difference);
        Calculator.Calculation.push(calculation);
        return calculation.GetResults();
    }

    static Product(a,b){
        let calculation = new  Calculation(a,b,Product);
        Calculator.Calculation.push(calculation);
        return calculation.GetResults();
    }

    static Quotient(a,b){
        let calculation = new  Calculation(a,b,Quotient);
        Calculator.Calculation.push(calculation);
        return calculation.GetResults();
    }

    static Square(a,b){
        let calculation = new  Calculation(a,b,Square);
        Calculator.Calculation.push(calculation);
        return calculation.GetResults();
    }

    static SquareRoot(a,b){
        let calculation = new  Calculation(a,b,SquareRoot);
        Calculator.Calculation.push(calculation);
        return calculation.GetResults();
    }

}

module.exports = Calculator;