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

/*
//Strategy Pattern
interface Strategy{
    public int operation(int a, int b);
}
 */

module.exports = Calculation;