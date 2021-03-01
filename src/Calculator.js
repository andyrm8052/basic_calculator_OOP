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
        let calculation = new Calculation();  //extends this to the class Calculation to get the constructor
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

    static SquareRoot(a,b){
        let calculation = Calculation.Create(a,b,SquareRoot);
        this.addCalculation(calculation);
        return calculation;
    }

}

//Flyweight Pattern
class sum implements Calculate{
    private int x;
    private int y;
    public void left(x){
        this.x = x;
    }

    public void right(y){
        this.y = y;
    }

    public void result(){
        let calculation = Calculation.Create(x,y,Sum);
        this.Calculate(calculation);
        return calculation;
    }
}

//Strategy Pattern
class add implements Strategy{
    public int operation(int a, int b){
        return a + b;
    }
}

module.exports = Calculator;