"use strict";
let x = 10;
console.log(x);
function sum(a, b) {
    return a + b;
}
let ans = sum(10, 30);
console.log(ans);
function delayedCall(fn) {
    setTimeout(fn, 3000);
}
delayedCall(function () {
    console.log("Hi , there");
});
function greet(user) {
    console.log("Heloo" + user.name);
}
let user = {
    name: "swaraj",
    age: 21
};
greet(user);
function demo(study) {
    console.log("hey roll no. " + study.roll);
}
let study = {
    name: "king",
    class: "10",
    roll: 55
};
demo(study);
function getDetails(teamLead) {
    console.log(teamLead.department);
}
const teamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
};
getDetails(teamLead);
