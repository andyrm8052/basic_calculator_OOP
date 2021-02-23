### Travis
[![Build Status](https://travis-ci.org/andyrm8052/basic_calculator_OOP.svg?branch=main)](https://travis-ci.org/andyrm8052/basic_calculator_OOP)
### Coveralls
[![Coverage Status](https://coveralls.io/repos/github/andyrm8052/basic_calculator_OOP/badge.svg?branch=main)](https://coveralls.io/github/andyrm8052/basic_calculator_OOP?branch=main)

###OOP Tutorial
<i>I will explain the concept of OOP using S.O.L.I.D.</i>
<br>
* ####Single Responsibility Principe:
    <i>Basically this principle states that a class should
    have one job.</i>
    
    For example:
    ```
    static Calculator(a,b,op){
            this.Calculation.push((a,b,op));
        }
    ```
    Another example:
    ```
      static Create(a,b,op){
              return new Calculation(a,b,op);
          }
    ```
* ####Open Close Principle:
    <i>A class that can be extended without modifying it.</i>
    
    For example:
    ```
      class Calculator {
         static Sum(a,b){
                 let calculation = Calculation.Create(a,b,Sum);
                 this.addCalculation(calculation);
                 return calculation;
         }
      }
    ```
* ####Liskov Substitution Principle:
    <i>This principle I do not understand it and won't be able to give
    a clear explanation. Although, I believe that the following code might
    represent this principle.</i>
    
    For example:
    
    ```
       class Calculator {
                //Do something    
       }
        
       class Operations extends Calculator{
            //Take each operation and use the Calculator class
            //to do the math.
        }
    ```
* ####Interface Segregation Principle:
    <i>Implementing a function or any sort of code that might break
    or has no use to a class. Sometimes there are codes that we can
    make them look neat and shorter.</i>
    
    For example:
     ```
    test('Calculator adding two numbers', () => {
        let CalculationObject = Calculator.Sum(1,2,"Sum");
        expect(calculation.a).toBe(1);
        expect(calculation.b).toBe(2);
        expect(calculation.op).toBe(op);
        expect(CalculationObject.GetResults()).toBe(3);
    });
     ```
* ####Dependency Inversion Principle:
    <i>Making a class depend on "abstraction", which violates the 
    Dependency Inversion Principle. Similar to the principle L,
    I don't understand this one as much compared to the others.
    However, I do believe I have some idea as to what I might
    mean in regards to the Calculator program.</i>

    For example:
    
    Instead of having this (which would be correct)
    ```
    class Calculation{
        constructor(a, b, op){
            this.a = a;
            this.b = b;
            this.op = op;
        }
        static Create(a,b,op){
            return new Calculation(a,b,op);  //SOLID
        }
    
        GetResults(){
            return this.op(this.a,this.b);
        }
    }
    ```
    You have something like this.
    ```
    class Calculation{
        static Create(this.a,this.b,this.op){
            return new Calculation(a,b,op);
        }
    
        GetResults(){
            return this.op(this.a,this.b);
        }
    }
    ```
    Even though this code won't work. I believe what the
    principle explains is that in this case this you are
    forcing the parameters into the static class without
    having a high-level module.       