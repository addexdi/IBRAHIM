console.log("Hello");
       // console.log("hello");
       // alert("yooo")
       // This is inline comment

       // variable
       // var b = "smoothie";
       // console.log(b);

      // var someNumber = 45;
      // console.log(someNumber);

      // var age = prompt("what is your age?")

     //  document.getElementById('someText').innerHTML = age;

       // Number in Javascript.
       var num1 = 10;

       // Increment num by 1
       num1++;

       // Decrement num1 by 1
       num1--;
       console.log(num1);

       // Divide /, multiply *, remainder %
       console.log(num1 %  6);

       // Increment/Decrement by any number.
       num1 += 10;
       console.log(num1);

       /* Functions
       1. create a function
       2. call a function
       */

       //create
       function fun() {
           console.log('this is a function');
       }

       // Call
       fun();

       /* Let's create a function that take in a name and says hello followed by your name

       for example

       Name: "Adam"
       Return: "Hello Adam"
       */

       function greeting(yourName) {
           var result = 'Hello' + ' ' + yourName;  // String Concatenation
           console.log(result);
       }
       
       var name = prompt('What is your name');
       greeting(name);

       // How do arguments work in functions?
       // How do we add two numbers together in a function?

       function sumNumbers(num1, num2) {
           var result = num1 + num2;
           console.log(result);
       }

       sumNumbers(10, 10);



