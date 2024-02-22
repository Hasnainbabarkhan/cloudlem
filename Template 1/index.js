let name;
name = "Hasnain Babar";
alert(name);

// promt / Alert

let age = prompt("how old are you", 100);
alert(`you are ${age} years old`);

// unary operand

let  x = 1;
x = -x;
alert(x);

// binary operand

x = 1, y = 2;
z = x + y;
alert(z);

// equality
alert(1 == 2); 
// false

// not equal
alert(2 != 1);
// true

// comparision
alert(a < b); 
// less than 
alert(a > b);
// grater than

//  if , else statement
let year = prompt("when the company is established");
if(year == 2021){
    alert("you are write");
}else{
    alert("sorry, try again");
}

// else if
let marks = prompt("Please enter your marks");
if(marks <= 100 && marks >= 90){
    alert("you have score A+ Grade");
}
else if(marks <= 89 && marks >= 80){
    alert("you have score A Grade");
}
else if(marks <= 79 && marks >= 70){
    alert("you have score B Grade");
}
else if(marks <= 69 && marks >= 50){
    alert("you have score C Grade");
}
else if(marks <= 49 && marks >= 30){
    alert("you have score D Grade");
}
else if(marks <= 29 && marks >= 0){
    alert("you have score F Grade");
}

// else
let access = prompt("how old are you?");
if(access > 20){
    alert('you are eligible');
}
else{
    alert('sorry you are not eligible');
}

// login.
let device = prompt("Who's there");
if(device === 'Admin'){
    let pass = prompt('password');
    if(pass === "" || pass === null){
        alert('Canceled');
    }
    else if(pass === 'Hasnain'){
        alert('Welcome');
    }
    else{
        alert('Wrong Password');
    }
}else if(device === '' || device === null){
    alert('canceled');
}else{
    alert('I dont know you')
}

// login password
let passKey = prompt('whose there');
    if (passKey === 'Admin'){
        let passK = prompt('Password');
        if(passK === 'Hasnain'){
            alert('Welcome Hasnain');
        }
        else if(passK === '' || passK === null){
            alert('Canceled');
        }
        else{
            alert('Wrong Password');
        }
    }
    else if(passKey === '' || passKey === null){
        alert('Canceled');
    }
    else{
        alert('I dont know you');
    }

// nullish coalescing ?? same as OR ||
// || returns the first truthy value.
// ?? returns the first defined value.
 let firstName;
 alert(firstName ?? "Hanain"); 
// in this case a is not defined then b

let firstNamee = "hasnain";
alert(firstNamee ?? "babar");
// in this case a is defined so ?? not work


// breaking the rules
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );

// continue

for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    alert(i); // 1, then 3, 5, 7, 9
  }

//   label for break / continue

outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
  
      // do something with the value...
    }
  }
  
  alert('Done!');


//   practice

for(let i = 2; i <= 10; i++){
    if(i % 2 == 0){
        alert(i);
    }
}
 
// for to while loop

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }

//   rewrite

let i = 0;
while( i < 3){
    alert( `number ${i}!`);
    i++;
}

// repeat untill the input is correct

let num;
do {
    num = prompt("Enter the number greater than 1000", 0);
} while (num <= 1000 && num)

// for loop practice
 
for(let i = 2; i < 10; i++){
    if( i % 2 === 0);
    console.log(i)
}
let k = 0;
while (k < 100) {
    if (k % 2 === 0) {
        console.log(k);
    }
    k++;
}
for (j = 0; j < 100; j++){
    console.log(j);
}
for (j = 0; j < 100; ++j){
    if(j % 2 === 0)
    console.log(j);
}

// function
function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable
  
    alert( message );
  }
  showMessage();
  alert(message);

//   outer variable

let userName = 'Hasnain';
function showMessage(){
    let message = 'Hello,' + userName;
    alert(message);
}
showMessage();
