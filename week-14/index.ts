let x: number = 10;

console.log(x);

function sum(a: number, b: number){
    return a + b;
}

let ans = sum(10,30);
console.log(ans);

function delayedCall(fn : () => void)
{
    setTimeout(fn, 3000)
}

delayedCall(function()
{
    console.log("Hi , there")
})

function greet (user: {
    name : string,
    age : number
})
{
    console.log("Heloo" + user.name)
}

let user = {
    name : "swaraj",
    age : 21
}

greet(user)


interface studyType {
    name : string,
    class : string,
    roll ?: number // the roll field is optional now
}

function demo(study : studyType)
{
    console.log("hey roll no. " + study.roll)
}

let study : studyType = {
    name : "king",
    class : "10",
    roll : 55
}

demo(study)

// type add = number | string;

// function addition(a: add, b:add)
// {
//     console.log("sum is " + (a+b))
// }

// addition(5,4)

type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager;

  function getDetails(teamLead : TeamLead)
  {
    console.log(teamLead.department)
  }
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };

  getDetails(teamLead)

  interface person{
    name : string,
    greet() : string
  }

  class employees implements person{
    constructor(public name:string){}

    greet()
    {
        return "hi" + this.name
    }
  }

 const e = new employees(" abc")
 console.log(e.greet())
 

 // arrays in ts

 interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));