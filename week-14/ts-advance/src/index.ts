// pick

interface user{
    name : string,
    age : number,
    id : number,
    mail : string,
    pass : string
}

type update = Pick<user, 'age' | 'name' | 'pass'>

function updateUser(updatedValues : update)
{
    console.log("hit the database to update the user");
}



// partial 

interface user1{
    name : string,
    age : number,
    id : number,
    mail : string,
    pass : string
}

type update1 = Pick<user, 'age' | 'name' | 'pass'>

type updateOptional = Partial<update1>

function updateUser1(updatedValues1 : updateOptional)
{
    console.log("hit the database to update the user");
}



// read only

type person = {
    readonly name : string,
    readonly age : number
}

const p : person = {
    name : "abc",
    age : 20
}

// p.age = 20 --> Not allowed

// OR

type person1 = {
    name : string,
    age : number
}

const p1 : Readonly <person1> = {
    name : "abc",
    age : 20
}

 // p1.age = 20 --> not allowed




 // record 

 interface User {
    id: string;
    name: string;
  }
  
  type Users = { 
    [key: string]: User 
  };
  
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };


  interface User2{
    id : string,
    name : string
  }

  type UserType = Record<string,User2>

  const temp : UserType = {
    "0x1" : {id : "01", name : "harkirat"},
    "0x2" : {id : "02", name : "swaraj"}
  }

  console.log(temp["0x2"])



// map

interface User3{
    id : string,
    name : string
  }

  const User1Type = new Map<string,User3>()

  User1Type.set("0x1", {id : "01", name : "harkirat"})
  User1Type.set("0x2", {id : "02", name : "swaraj"})

  console.log(User1Type.get("0x1"))



  // exclude

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
  


