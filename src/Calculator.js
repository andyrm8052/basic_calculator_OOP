const Calculation = require('./models/Calculation');
const Sum = require('./Operations/Sum');
const Difference = require('./Operations/Difference');
const Product = require('./Operations/Product');
const Quotient = require('./Operations/Quotient');
const Square = require('./Operations/Square');
const SquareRoot = require('./Operations/SquareRoot');

class Calculator {
    static Calculation = [];

    static addCalculation(calculation){
        Calculator.Calculation.push(calculation);
    }

    static getLastCalculation(){
        return this.Calculation[this.Calculation.length-1];
    }

    static Sum(a,b){
        //Factory Method
        //let calculation = new  Calculation(a,b,Sum);
        let calculation = Calculation.Create(a,b,Sum);
        //Calculator.Calculation.push(Calculation.Create(a,b,Sum));
        this.addCalculation(calculation);
        return calculation.GetResults();
    }

    static Difference(a,b){
        let calculation = Calculation.Create(a,b,Difference);
        this.addCalculation(calculation);
        return calculation.GetResults();
    }

    static Product(a,b){
        let calculation = Calculation.Create(a,b,Product);
        this.addCalculation(calculation);
        return calculation.GetResults();
    }

    static Quotient(a,b){
        let calculation = Calculation.Create(a,b,Quotient);
        this.addCalculation(calculation);
        return calculation.GetResults();
    }

    static Square(a,b){
        let calculation = Calculation.Create(a,b,Square);
        this.addCalculation(calculation);
        return calculation.GetResults();
    }

    static SquareRoot(a,b){
        let calculation = Calculation.Create(a,b,SquareRoot);
        this.addCalculation(calculation);
        return calculation.GetResults();
    }

}

module.exports = Calculator;