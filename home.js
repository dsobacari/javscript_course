//console.log('hello');
        // console.log('hello');
        // alert('yooooooooooo');

//how to write a comment

        //variables
        //var b='smoothie';
        //console.log(b);

       // var someNumber=45;
        //console.log(someNumber);
        
//Manipulate DOM with Javascript
/*Its just a fancy way of saying 
change HTML with Javascript*/

       // var age = prompt('What is your age?');
    
       // document.getElementById('someText').innerHTML = age;

//Numbers in Javascript
    /*
    var num1 = 10;
    num1 = num1 + 1;
    num1++;
    console.log(5*10);
    console.log(num1);
    */

    //increment
   
    /*
    var num2 = 2; 
    num2++;
    console.log(num2);
    */

    //decrement
   
   /*
    var num3 = 2; 
    num3--;
    console.log(num3);
    */

    //divide, multiply *, remaninder %
   
   /*    
    var num4 = 20; 
    console.log(num4 / 6);
    */

    //increment by any number you want in this case 200
   
       
   /*
    var num5 = 2; 
    num5 += 200;
    console.log(num5);
    */
    
/*Functions
    1.create a fuction
    2.call the function
*/
    
    
    //create
    /*
    function fun() {
    alert('this is a function');
    }
    */

    //call
    /*
    fun();

    /* lets creat a function that takes in a name
    and says hello followed by your name
    Name: "Johnny"
    Return: "Hello Johnny"
    */
   
    /* 
        function greeting() {
        var name = prompt ('What is your name');
        var result = 'Hello' + ' ' + name;                  //string concatenation
        console.log(result);
    }

    greeting();
    */

    //How do arguments work in a function
    //How do we add 2 numbers in a function

    /*
    function greeting(yourName) {
        var result = 'Hello' + ' ' + yourName;             //string concatenation
        console.log(result);
    }
    var name = prompt ('What is your name?');
    greeting(name);



    function sumNumbers(num1, num2) {
        var result = num1 + num2;
        console.log(num1+num2);
    }
    sumNumbers(400, 10);
    */


/*while loops


     var num = 0;

     while (num < 100) {
        num+=1;
        console.log(num);
     }
*/

/*For loops
    // let=var
     for (let num = 0; num <= 100; num++) {
        console.log(num);
     }
*/

/*Data types
    let yourAge = 18;                                       //number
    let yourName = 'Denis';                                 //string
    let name = {first: 'Johnny', last: 'Cash'};             //object
    let truth = false;                                      //boolean
    let groceries = ['apple', 'banana', 'oranges'];         //array
    let random;                                             //undefined
    let nothing = null;                                     //value null

*/

/*strings in Javascript (common methods)
    let fruit = 'banana';
    let moreFruits ='banana\napple';                        //new line


    console.log(fruit.length);                              //word count in variable fruit
    console.log(fruit.indexOf('nan'));                      //index of a char in this case result will be 2, count starts from 0
    console.log(fruit.slice(2,6));                          //shows from index 2 to index 6
    console.log(fruit.replace('ban', '123'));               //replaces first arg with the second argument
    console.log(fruit.toUpperCase(fruit));                  //selfexplain, everthing to uppercase
    console.log(fruit.toLowerCase(fruit));                  //selfexplain, everthing to lowercase
    console.log(fruit[2]);
    console.log(fruit.charAt(2));
    console.log(fruit.split(','));                          //split by a comma
    console.log(fruit.split(''));                           //split by a character
*/

/*Array

    let fruits = ['banana', 'apple', 'orange', 'pineapple'];
    fruits = new Array('banana', 'apple', 'orange', 'pineapple');

    console.log(fruits[2]);                                 //access value at index 2nd

    fruits[0] = 'pear';

    console.log(fruits); 
    
    for(let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }

    //array common methods

    console.log('to string', fruits.toString());
    console.log(fruits.join(' * '));
    console.log(fruits.pop(), fruits);                      //removes last item
    console.log(fruits.push('blackberries'), fruits);       //appends
    console.log(fruits[4]);
    fruits[fruits.length] = 'new fruit';                    //same as push
    console.log(fruits);
    fruits.shift();                                         //removes first element from an array
    console.log(fruits);
    fruits.unshift('kiwi');                                 //add first elemnt to an array
    console.log(fruits);

    let vegetables = ['asparagus', 'tomato', 'broccoli'];
    let allGroceries = fruits.concat(vegetables);           //combine array
    console.log(allGroceries);
    console.log(allGroceries.slice(1,4));
    console.log(allGroceries.reverse());
    console.log(allGroceries.sort());


    let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
    console.log(someNumbers.sort(function(a, b) {return a-b})); //sorting assending order
    console.log(someNumbers.sort(function(a, b) {return b-a})); //sorting decending order

    let emptyArray = new Array();
    for (let num =0; num < 10; num++) {
        emptyArray.push(num);

    }
    console.log(emptyArray);

*/
/*Objects in JavaScript
//dictionaries in Python
    let student ={
        first: 'Rafeh',
        last: 'Quazimoto',
        age:30,
        height:190,
        studentInfo: function(){
                return this.first +'\n' + this.last +'\n' + this.age;
        }
    };
    //console.log(student.first);
    //console.log(student.last);

    //student.first = 'notRafeh';                     //change value
    //console.log(student.first);
    student.age++;
    console.log(student.age);

    console.log(student.studentInfo());
*/
/*Conditionals, Control flows (if else)
    //18-35 is my target demographic
    
    var age = prompt('what is your age?');

    if ( (age >= 18) && (age <=35) ) {
        status = 'target demo';
        console.log(status);
    } else{
        status = 'not my audience';
        console.log(status);
    }    
*/

// Switch statements
    // differentiate between weekday vs. weekend
    // day 0 --> Sunday     --> weekend
    // day 1 --> Monday     --> weekday
    // day 2 --> Tuesday    --> weekday
    // day 3 --> Wednesda   --> weekday
    // day 4 --> Thursday   --> weekday
    // day 4 --> Friday     --> weekend
    // day 6 --> Saturday   --> weekend

    switch (2) {
        case 0: 
            text = 'weekend';
            break;
        case 5:
            text = 'weekend';
            break;
        case 6:
            text = 'weekend';
        break;
        default:
            text = 'weekday';
    }
    console.log(text);