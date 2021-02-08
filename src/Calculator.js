const Calculation = require('./models/Calculation');
const Sum = require('./Operations/Sum');
const Difference = require('./Operations/Difference');
const Product = require('./Operations/Product');
const Quotient = require('./Operations/Quotient');

class Calculator {
    static Calculation = [];
    static Sum(a,b){
        let calculation = new  Calculation(a,b,Sum);
        this.Calculation.push(Calculation);
        return calculation.GetResults();
    }

    static Difference(a,b){
        let calculation = new  Calculation(a,b,Difference);
        this.Calculation.push(Calculation);
        return calculation.GetResults();
    }

    static Product(a,b){
        let calculation = new  Calculation(a,b,Product);
        this.Calculation.push(Calculation);
        return calculation.GetResults();
    }

    static Quotient(a,b){
        let calculation = new  Calculation(a,b,Quotient);
        this.Calculation.push(Calculation);
        return calculation.GetResults();
    }
}

module.exports = Calculator;