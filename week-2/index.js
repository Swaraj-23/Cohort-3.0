// const fs = require('fs');

// const data = fs.readFileSync("week-2/a.txt","utf-8");
// console.log(data);





// const fs = require("fs");

// const contents = fs.readFileSync("week-2/a.txt", "utf-8");
// console.log(contents);

// const contents2 = fs.readFileSync("week-2/b.txt", "utf-8");
// console.log(contents2);






// function sum(a, b) {
//     return a + b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   function divide(a, b) {
//     return a / b;
//   }
  
//   function doOperation(a, b, op) {
//     return op(a, b)
//   }
  
//   console.log(doOperation(7, 2, sum))






class Rectangle {
  constructor(width, height, color) {
     this.width = width;
     this.height = height;
     this.color = color; 
  }
  
  area() {
    const area = this.width * this.height;
    return area;
  }
  
  paint() {
     console.log(`Painting with color ${this.color}`);
  }
  
}

const rect = new Rectangle(2, 4)
const area = rect.area();
console.log(area)


const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));