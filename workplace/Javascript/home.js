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

      /* function greeting(yourName) {
           var result = 'Hello' + ' ' + yourName;  // String Concatenation
           console.log(result);
       }

       var name = prompt('What is your name');
       greeting(name);
       */

       // How do arguments work in functions?
       // How do we add two numbers together in a function?

       function sumNumbers(num1, num2) {
           var result = num1 + num2;
           console.log(result);
       }

       sumNumbers(10, 10);

       /* While loops
         var num = 0;
          
         while (num < 100) {
             num += 2;
             console.log(num);
         }
         
         */

        // For loops
         for (let num = 0; num <= 100; num++) {
             console.log(num);
         } 

         // Data types

         let yourName = "Adam"; // String
         let yourAge = 21; // Number
         let name = {first: "Adam", last: "Ibrahim"}; // Object
         let truth = true; // Boolean
         let grocerires = ["apple", "banana", "orandes"]; // Array
         let random; // undefined
         let nothing = null; // Value null

         // String in Javascript (common methods)
         let fruit = "banana,apple,orange,blackberry";
         let moreFruit = "banana\napple";

         console.log(fruit.length);
         console.log(fruit.indexOf('nan'));
         console.log(fruit.slice(2, 6));
         console.log(fruit.replace('ban', '123'));
         console.log(fruit.toUpperCase());
         console.log(fruit.toLowerCase());
         console.log(fruit.charAt(2));
         console.log(fruit[2]);
         console.log(fruit.split(','));  // Split by comma
         console.log(fruit.split(''));  // Split by character

        // Array
        let fruits = ['banana', 'apple', 'orange', 'pineapple'];
        fruits = new Array('banana', 'apple', 'orange', 'pineapple');

        console.log(fruits[2]); // access value at 2nd

        fruits[0] = 'peer';
        console.log(fruits);

        for (let i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }

        // array common methods
        console.log('to string', fruits.toString());
        console.log(fruits.join('*'));
        console.log(fruits.pop(), fruits); // removes last element
        console.log(fruits.push('blackberries'), fruits);  // appends
        console.log(fruits[4]);
        fruits[fruits.length] = 'new fruit';  // same as push
        console.log(fruits);
        fruits.shift();  // removes first element from an array
        console.log(fruits);
        console.log(fruits.unshift('kiwi'));  // add first element to an array
        console.log(fruits);

        let vegetables = ['asparagus', 'tamatoes', 'brocoli'];
        let allGroceries = fruits.concat(vegetables);  // combine arrays
        console.log(allGroceries);
        console.log(allGroceries.slice(1, 4));
        console.log(allGroceries.reverse());
        console.log(allGroceries.sort());

        let someNumbers = [5, 53, 66, 66, 33, 2, 6, 4, 7, 2, 0, 6767, 4];
        console.log(someNumbers.sort(function(a, b) {return a-b;}));  // sort in ascending order
        console.log(someNumbers.sort(function(a, b) {return b-a;}));  // sort in decending order

        let emptyArray = [];
        for (let num = 0; num <= 10; num++) {
            emptyArray.push(num);
        }
        console.log(emptyArray);

        // Object in javascript
        // Dictionaries in python

        let student = {
            first: 'Adam',
            last: 'Ibrahim',
            age: 21,
            height: 150,
            studentInfo: function(){
                return this.first + '\n' + this.last;
            } 
        };

        // console.log(student.first);
        // console.log(student.last);
        // student.first = 'notAdam';  // change value
        // console.log(student.first);
        student.age++;
        console.log(student.age);

        console.log(student.studentInfo());

        // conditionals, control flow (if else)
        // 18 - 35 is my target demographic
        // && and
        // || or
        var age = prompt('what is your age');
        if ( (age >= 18) && (age <= 35)) {
            status = 'target demo';
            console.log(status);
        } else {
            status = 'not my audience';
            console.log(status);
        }

        // switch ststement
        // differentiate between weedays vs. weekend 
        // day 0 --> Sunday --> weekend
        // day 1 --> Monday --> weekday
        // day 2 --> Tuesday --> weekday
        // day 3 --> Wednesday --> weekday
        // day 4 --> Thursday --> weekday
        // day 5 --> Friday --> weekend
        // day 6 --> Saturday --> weekend

        switch (2) {
            case 0:
                text = "weekend";
                break;
            case 5:
                text = "weekend";
                break;
            case 6:
                text = "weekend";
                break;
            default:
                text = "weekday";
        }

        console.log(text);