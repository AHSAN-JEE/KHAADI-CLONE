
// var name="ahsan";
// console.log(name);
// var name="ali";
// console.log("the updated name is "+name);


// let name="abdullah";
// console.log(name);
// name="aslam";
// console.log("the updated name is "+name)


// const name="saif";
// console.log(name);
// name="asgar";
// console.log("the updated name is "+name);

//*********************************************************************************************** */
// if else
// let marks=55;
// if(marks>=80)
//     console.log("Grade A");
// else if(marks>=60&& marks<80)
//     console.log("Grade B");
// else
// console.log("Grade C");

//*********************************************************************************************** */
// for loop
// var number=5;
// for(let i=1;i<=10;i++){
//     let multiple=i*number;
//     console.log(i+ "*"+ number+"="+multiple);
// }

//Nested for loop
// for(let i=1;i<=5;i++){
//     var number=i;
// for(let i=1;i<=5;i++){
//     let multiple=i*number;
//     console.log(i+ "*"+ number+"="+multiple);
// }
// }


/*********************************************************************************************** */
//Arrays
// var names=["ahsan","zain","attiq","abeer","adnan","kashif"];
// console.log(names);

// for(let i=0;i<names.length;i++)
//     console.log(i+1+". "+names[i]);

// names.forEach((i)=>{
//     console.log(i);
// })


/*********************************************************************************************** */

//functions
//es5 functions
//  function sum(a,b){
// return a+b;
//  }

//  function minus(a,b){
//     return a-b;
//  }

//  function multiply(a,b){
//     return a*b;
//  }

//  function divide(a,b){
// return a/b;
//  }


//  let value1=10;
//  let value2=5;
//  let suum=sum(value1,value2);
//  console.log("sum = "+suum);
//  suum=minus(value1,value2);
//  console.log("minus = "+suum );
//  suum=multiply(value1,value2);
//  console.log("multiple = "+suum);
//  suum=divide(value1,value2);
//  console.log("divide = "+suum);

/*********************************************************************************************** */
// API 
// Filters

const readline = require('readline');

const getValueFromUser = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a value: ', (answer) => {
    const value = parseInt(answer, 10);
    if (isNaN(value)) {
      console.log('Invalid input. Please enter a number.');
      getValueFromUser();
    } else {
      rl.close();
      return value;
    }
  });
};

const value = getValueFromUser();

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => {
    const filtered = json.filter(user => user.id === value);
    console.log(filtered);
  })
  .catch(err => console.error('Error fetching data:', err));



