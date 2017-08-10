/* Different wayts to use the Arrow function */

let square = (x) => {
  let result = x * x;
  return result;
};
console.log(square(9));

let square2 = (x) => x * x;
console.log(square2(9));

let square3 = x => x * x;
console.log(square2(9));

let user = {
  name: 'David',
  sayHi: () => {
    console.log(arguments);
    console.log(`O hai there, ${this.name}.`) // will not work - 'undefined
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`O hai there, ${this.name}`)
  }
};

user.sayHi(1,2,3);