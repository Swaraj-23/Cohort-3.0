"use strict";
// pick
function updateUser(updatedValues) {
    console.log("hit the database to update the user");
}
function updateUser1(updatedValues1) {
    console.log("hit the database to update the user");
}
const p = {
    name: "abc",
    age: 20
};
const p1 = {
    name: "abc",
    age: 20
};
const users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
const temp = {
    "0x1": { id: "01", name: "harkirat" },
    "0x2": { id: "02", name: "swaraj" }
};
console.log(temp["0x2"]);
const User1Type = new Map();
User1Type.set("0x1", { id: "01", name: "harkirat" });
User1Type.set("0x2", { id: "02", name: "swaraj" });
console.log(User1Type.get("0x1"));
const handleEvent = (event) => {
    console.log(`Handling event: ${event}`);
};
handleEvent('click'); // OK
