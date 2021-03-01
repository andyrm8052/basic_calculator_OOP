[![Build Status](https://travis-ci.org/andyrm8052/basic_calculator_OOP.svg?branch=main)](https://travis-ci.org/andyrm8052/basic_calculator_OOP) [![Coverage Status](https://coveralls.io/repos/github/andyrm8052/basic_calculator_OOP/badge.svg?branch=main)](https://coveralls.io/github/andyrm8052/basic_calculator_OOP?branch=main)

OOP Design Patterns
<i>In this homework I will show one pattern from each Structural,
Behavioral and Creational Category Pattern.</i>

## Creational Pattern
### Prototype
Prototype is a creational design pattern that lets you copy 
existing objects without making your code dependent on their 
classes.

In order for this to work we must create an abstract class that can implements the cloning part of the codes.

For example, we could implement and extend a certain class or
constructor so that we can clone its codes:
```
In my case adding abstract and implements to the class return
an error. Instead I left it the way it is and extended the class
I want to clone from the Calculator.js

public abstract class Calculation implements Clone{
    constructor(a, b, op){
        this.a = a;
        this.b = b;
        this.op = op;
    }

```
then using concrete class from Calculator.js to extend it to Calculation and using GetResults as the clone()
For example, GetResults would work similar to clone since we are taking the line of codes from GetResults into another class.
```
class Calculator extends Calculation{
       static Sum(a,b){
           let calculation = new Calculation();
           this.addCalculation(calculation);
           return calculation.GetResults();
       }
    //more codes
```

## Structural Pattern
### Flyweight
Flyweight is a structural design pattern that lets you fit 
more objects into the available amount of RAM by sharing 
common parts of state between multiple objects instead of 
keeping all of the data in each object.

Flyweight basically reuses existent codes to store and create new ones.
IT allows to reduce the number of codes as well.
```

```
## Behavioral Pattern
### Strategy
Strategy is a behavioral design pattern that lets you define 
a family of algorithms, put each of them into a separate 
lass, and make their objects interchangeable.

In this case, strategy could use multiple operation classes to execute.
For my example, I'll only use one operation, which is Sum.

By creating an interface Strategy to be implemented in the sum class.
```
Calculation.js
interface Strategy{
    public int operation(int a, int b);
}

Calculator.js
class add implements Strategy{
    public int operation(int a, int b){
        return a + b;
    }
}

```
This pattern does the opposite of what our original codes do.
For example, we created multiple constructor for different operations
inside a single class. For strategy, we try to make multiple
classes independently for the codes to be interchangeable. 

So, basically Strategy will take a class with many constructor or lines of codes
and allows it to extract them into separate classes. In my case for example,
all of our operations are implemented inside of one class. It we would have done it
the strategy way then each operation would be in separated calculator classes.

-----------------------------------------------------------------
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
