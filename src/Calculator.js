const Calculation = require('./models/Calculation');
const Sum = require('./Operations/Sum');
const Difference = require('./Operations/Difference');
const Product = require('./Operations/Product');
const Quotient = require('./Operations/Quotient');
const Square = require('./Operations/Square');
const SquareRoot = require('./Operations/SquareRoot');

class Calculator extends Calculation{
    static Calculation = [];

    static Calculator(a,b,op){
        this.Calculation.push((a,b,op));
    }

    static addCalculation(calculation){
        Calculator.Calculation.push(calculation);
    }

    static getLastCalculation(){
        return this.Calculation[this.Calculation.length-1];
    }

    static Sum(a,b){
        let calculation = new Calculation(a,b,Sum);  //extends this to the class Calculation to get the constructor
        this.addCalculation(calculation);
        return calculation;
    }

    static Difference(a,b){
        let calculation = Calculation.Create(a,b,Difference);
        this.addCalculation(calculation);
        return calculation;
    }

    static Product(a,b){
        let calculation = Calculation.Create(a,b,Product);
        this.addCalculation(calculation);
        return calculation;
    }

    static Quotient(a,b){
        let calculation = Calculation.Create(a,b,Quotient);
        this.addCalculation(calculation);
        return calculation;
    }

    static Square(a,b){
        let calculation = Calculation.Create(a,b,Square);
        this.addCalculation(calculation);
        return calculation;
    }

    //static SquareRoot(a,b){
    //    let calculation = Calculation.Create(a,b,SquareRoot);
    //    this.addCalculation(calculation);
    //    return calculation;
    //}

}

//Singleton Pattern
let Singleton = (function () {
    let instance;

    function SquareRoot(a,b) {
        let calculation = Calculation.Create(a,b,SquareRoot);
        return calculation;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = Sum();
            }
            return instance;
        }
    };
})();

function run() {

    let instance1 = Singleton.getInstance();
    let instance2 = Singleton.getInstance();

    //Checks whether the function Sum and SquareRoot are the same. If they are it equals to true
    alert("Same instance? " + (instance1 === instance2));
}

module.exports = Calculator;