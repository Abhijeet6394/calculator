var calculator={
  //  'num1':0,
    ////'num2':0,
    'res':0,
    'sum':function(){
        let num1=prompt("Enter first number");
        num1=parseInt(num1);
        let num2=prompt("Enter second number");
        num2=parseInt(num2);
        this.res=num1 + num2;
        return this.res;
   },
    'diff':function(){
        let num1=prompt('Enter first number');
        num1=parseInt(num1);
        let num2=prompt("Enter second number");
        num2=parseInt(num2)
        this.res=num1 - num2;
        return this.res;
    },
    'mul':function(){
        let num1=prompt("Enter first number");
        num1=parseInt(num1);
        let num2=prompt("Enter second number");
        num2=parseInt(num2);
        this.res=num1 * num2;
        return this.res;
    },
    'division':function(){
        let num1=prompt("Enter first number");
        num1=parseInt(num1);
        let num2=prompt("Enter second number");
        num2=parseInt(num2);
        this.res=num1/num2;
     return this.res;         
    }
}