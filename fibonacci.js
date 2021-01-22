function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆

    //Write your code here:

    var fibonacciArray = [];

      if(n==1){
          fibonacciArray.push(0);
        return fibonacciArray;
    } else if(n==2){
      fibonacciArray.push(0,1);
        return fibonacciArray;
    } else{
        for(var i = 1; i<n; i++){
          var fibonacci = fibonacciArray[i]+fibonacciArray[i-1];
        fibonacciArray.push(fibonacci);
    }
       return fibonacciArray;
    }

    //Return an array of fibonacci numbers starting from 0.

//Do NOT change any of the code below 👇
}

output = fibonacciGenerator(1);
console.log(output);
