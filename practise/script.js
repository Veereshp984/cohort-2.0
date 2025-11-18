// let arr = ["yellow","red","blue"];
// console.log(arr[2])

// for(let i =0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// let nums = [10,20,30];

// nums[0] = 5;
// nums.push(3);
// nums.pop();
// nums.unshift(4);
// nums.shift();
// console.log(nums);


// 1.question
// let = nums =[1,2,3];
// nums.push(4);
// nums.pop();
// console.log(nums);


// 2.question
//  let fruits = ["apples","banana","mango"];
// fruits.shift();
// fruits.unshift("grapes");
// console.log(fruits);


// 3.question
// let arr = [10,20,30,40,50];
// arr.splice(2,1);
// console.log(arr);


// 4.question
// let items = ["a","b","d","e"];
// items.splice(2,0,"c");
// console.log(items);


// 5.question
// let nums = [1,2,3,4,5,6];
// nums.splice(2,3,"x","y");
// console.log(nums)



// let nums = [1,2,3,4,5];
// let nums2 = nums.map((n)=>{
//      return n * n;
// })
// console.log(nums)
// console.log(nums2);

// let nums3 = nums2.filter(n => n % 2 === 0);
// console.log(nums3)

// let sum = nums.reduce((acc , curr)=>{
//     return acc+curr;
// },0)
// console.log(sum)

// let num = nums.slice(1,3);
// console.log(num)
// num = num.concat([3,4,5,6,7,8,9,10]);
// console.log(num)

// question 1
// let num = [1,2,3,4,5];
// let newNum = num.map(n => n * 2);
// console.log(newNum);

// question 2
// let nums = [5,10,15,20,25];
// let newNums = nums.filter((n)=>{
//     return n > 10;
// })
// console.log(newNums)

// question 3
// let ages = [12,17,19,25];

// let newAge = ages.find((n)=>{
//  return n > 18;
// })
// console.log(newAge)

// question 4
// let nums = [1,2,3,4,5];
// let sum = nums.reduce((acc,curr)=>{
//     return acc+ curr;
// },0)
// console.log(sum)

// question 5
// let arr = [1,2,3,4,5];
// let arr1 = arr.slice(1,4);
// console.log(arr1);

// let sliced = arr1.concat([99,100]);
// console.log(sliced) 

// let a  = [1,2,3];
// let copy  = [...a];
// console.log(copy);
// let b = [4,5,6];
// let merged = [...a , ...b];
// console.log(merged);

// let newArr = [0, ...a ,4];
// console.log(newArr);

// let sum = (...nums)=>{
//     return nums.reduce((a,b) => a+b);
// }

// console.log(sum(1,2,3,4));

// let arr = [10,20,30];
// let [a,b,c] = arr;
// console.log(c);
// let [x, , y] = [1,2,3];
// console.log(x,y);

// let users = [
//     {name : "a" , age : 20},
//     {name: "b" , age : 25}
// ];

// let user1 = users.map(user => user.name);
// let user2 = users.filter(user => user.age >  21);
// let user3 = users.find(n => n.name === "b");

// console.log(user1);
// console.log(user2);
// console.log(user3);
// -------------------------------------------------------------------------------------------------------------------------------------------------
// question 1
// let a  = [1,2,3];
// let b = [4,5];
// let c = [...a ,...b];
// console.log(c)

// question 2
// let arr = [10,20,30,40];

// let [a , , b] = arr;
// console.log(a);
// console.log(b);

// question 3
// let multiplyAll = (...nums)=>{
//     return nums.reduce((acc, curr)=>{
//         return acc * curr;
//     }, 1)
// }

// console.log(multiplyAll(2,3,4));
// console.log(multiplyAll(1, 5)); 
// console.log(multiplyAll());    // 5

// question 4
// let users = [
//   {name:"John", age:25},
//   {name:"Sara", age:19},
//   {name:"Mike", age:30}
// ];

// let users2 = users.filter((n)=>{
//     return n.age > 20
// })
// console.log(users2);

// question 5
// let arr = [1,[2, [3,4],5],6];
// let flatArr = arr.flat(Infinity);
// console.log(flatArr);


// let user = {
//     name : "john",
//     age : 25
// };
// console.log(user["age"]);

// user.city = "delhi";
// user.age = 30;

// console.log(user)

// delete user.age;


// let obj = Object.keys(user);
// console.log(obj);

// console.log(Object.values(user));
// console.log(Object.keys(user));
// console.log(Object.entries(user));


// let user = {
//   name: "Alice",
//   address: {
//     city: "Mumbai",
//     pin: 400001
//   }
// };

// console.log(user.address.pin)


// let person = { name: "Sam", age: 22 };
// console.log(person.name)
// person.city ="delhi";
// console.log(person.city)

// let car = { brand:"BMW", model:"X5", year:2020 };
// delete car.model;
// console.log(car)
// console.log(Object.keys(car))

// let users = [
//   {name:"A", score:50},
//   {name:"B", score:90},
//   {name:"C", score:70}
// ];

// let result = users.map((n)=>{
//     return n.name;
// })
// console.log(result)
// let arr = [10,20,30];

// let [x ,y,z] = arr;
// console.log(x);
// console.log(y);
// console.log(z);

// let [a , , ,d ] = [1,2,3,4];
// console.log(a);
// console.log(d);

// let [a = 5, b = 10] =[7,11];
// console.log(a);
// console.log(b);

// let [a ,b, ...rest] = [1,2,4,5,6];
// console.log(a);
// console.log(b);
// console.log(rest);

// let a = 1;
// let b = 2;
// [a,b] = [b,a];
// console.log(a,b);

// let user = {
//   name :"sam",
//   age : 25
// };
// let {name , age} = user;

// console.log(name)
// console.log(age)

// let user = {
//   name: "sam",
//   age: 25,
//   city: "Delhi",
//   country: "India",
//   hobbies: ["cricket", "music"],
//   isAdmin: false,
//   contact: {
//     phone: "12345",
//     email: "sam@gmail.com"
//   }
// };


// let user = {
//   name: "sam",
//   age: 25,
//   address: {
//     city: "Delhi",
//     pin: 110001,
//     location: {
//       lat: 123,
//       long: 456
//     }
//   }
// };

// let {address:{city , pin}} = user;

// console.log(city);
// console.log(pin)

// let {address :{city : uru,pin : num}} = user;
// console.log(user);
// console.log(uru)
// console.log(num)

// let user = {name:"Sam", age:20, city:"Delhi"};
// let{name , ...others} = user;

// console.log(name);

// console.log(others);



// let arr1 = [1,2];
// let arr2 = [...arr1 , 3,4];
// console.log(arr2);

// let obj1 = {a:1};
// obj2 = {...obj1 , b:2};
// console.log(obj2);

// function sum(...nums){
//   return nums.reduce((a,b)=>a+b);
// }
// console.log(sum(1,2,3,4,5,6,7,8,8,4));

// let nums = [1,2,3];
// let newArr = [...nums]
// console.log(newArr);

// let arr = [10,20,30,40];

// let [first, ...rest] = arr;
// console.log(first);
// console.log(rest)

// let user = {name:"Sam", age:22};
// let newUser ={...user};
// console.log(newUser)

// let person = {name:"John", age:25, city:"Delhi"};

// let{name , ...rest } = person
// console.log(name);
// console.log(rest)


// let a = [1,2];
// let b = [3,4];
//  let c = [...a , ...b]
//  console.log(c)

// let sum = (...nums)=>{
//   return nums.reduce((acc , curr)=>{
//     return acc+ curr;
//   })
// }
// console.log(sum(1,2,3,4));

// let arr = ["a","b","c","d","e"];
//  let [ , , ...rest] = arr;
//  console.log(rest);

// let nums = [10,20,30];
// let num1 = [5 , ...nums]
// console.log(num1);


// let emp = {
//   id:101,
//   name:"Amit",
//   salary:50000,
//   position:"Manager"
// };

// let {id , ...rest} = emp;
// console.log(id);
// console.log(rest);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// let user = {name:"John", age:25};

// console.log(user.name);

// console.log(user.age);
// user.brand = "apple";
// console.log(user)



// let user = {name:"Aman", age:20};
// age = 20;
// console.log(user)

// let car = {model:"X5", year:2020};

// delete car.year;
// console.log(car)

// let emp = {id:101, salary:50000};

// for(let key in emp){
//   console.log(emp[key]);
// }
// for(let values in emp){
//   console.log(emp[values]);
// }


// let student = {name:"Rita", age:21};

// console.log(student.hasOwnProperty("age"));


// let obj = { a: 1, b: 2 };

// let arr = Object.entries(obj);
// console.log(arr);


// let user = {name:"Sam", address:{city:"Delhi", pin:110001}};
// console.log(user.address.pin);



// let emp1 = {id:101, salary:40000};
// emp1 = {empId : emp.id, empSalary : emp.salary};
// console.log(emp1)


// let user = {name:"John", age:25, city:"Mumbai"};

// let {name , ...rest } = user;
// console.log(name);
// console.log(rest)



// let a = {x:10};
// let b = {y:20};
// let c = {...a , ...b};
// console.log(c)

// let data = {info:{title:"Developer", exp:2}};
// console.log(data.info.title);



// let book = {title:"ABC", price:300};
// for(let key in book ){
//   console.log(`${key} : ${book[key]}`);
// }


// let obj = {a:1, b:2, c:3};
// let count = 0;
// for(let key in obj){
//   if(obj.hasOwnProperty(key)){
//     count++;
//   }
// }
// console.log(count);

// let users = [
//  {name:"A", age:20},
//  {name:"B", age:25}
// ];
// let users2 = users.map((n)=>{
//   return n.name;
// });
// console.log(users2);


// let students = [
//  {name:"Rita", marks:40},
//  {name:"Raju", marks:70}
// ];



// for (let student of students) {
//   if (student.marks > 50) {
//     console.log(student.name); // Output: Raju
//   }
// }

// let student2 = students.filter((n)=>{
//      return n.marks > 50
// }).map((n)=>{
//     return n.name;
// })
// console.log(student2);


// let user = {
//   username:"xyz",
//   password:"secret123",
//   email:"x@y.com"
// };

// let {password , ...securePassword} = user;
// console.log(securePassword);

// let users = [
//  {name:"A", score:50},
//  {name:"B", score:90},
//  {name:"C", score:40},
//  {name:"D", score:70}
// ];

// let users1 = users.filter((n)=>{
//     return n.score >= 60;
// });
// let users2 = users.filter((n)=>{
//     return n.score <= 60;
// });
// console.log(users1);
// console.log(users2);



// let people = [
//  {name:"A", age:30},
//  {name:"B", age:20},
//  {name:"C", age:25}
// ];
// people.sort((a, b) => a.age - b.age);

// console.log(people);


// let user = {name:"Sam", address:{city:"Delhi"}};

// let user1 = JSON.parse(JSON.stringify(user));
// console.log(user1);
// console.log(user1.address.city);

// let obj = {name:"Rita", age:25, city:"Delhi"};

// let {age , ...rest} = obj;
// let newObj = {years:age , ...rest};
// console.log(newObj)


// let obj = {a:1, b:2, c:3};
// let keys = Object.entries(obj).reduce((acc,curr)=>{
//   acc.push(curr[0]);
//   return acc;
// }, []);
// console.log(keys);
