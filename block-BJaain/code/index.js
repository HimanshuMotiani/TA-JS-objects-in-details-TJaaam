console.log(this.document === document); // true

// ------------

console.log(this === window); //Output
//true
// ------------

var myFunction = function () {
  console.log(this);
};
myFunction(); // Output window object

// ------------

function f1() {
  'use strict';
  return this;
}
console.log(f1() === window); //false 

// ------------

function foo() {
  console.log('Simple function call');
  console.log(this === window);
}

foo(); //Output ?? true

// ------------

// This for IIFE
(function () {
  console.log('Anonymous function invocation');
  console.log(this === window);
})(); //true

// ------------

var myObject = {};
myObject.someMethod = function () {
  console.log(this);
};
myObject.someMethod(); //Value Of This --->{someMethod: ƒ}

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person('John', 'Reed');
person.displayName(); //  Name: John Reed

let person2 = new Person('Paul', 'Adams');
person2.displayName(); //  Name: Paul Adams

// ------------

function foo() {
  'use strict';
  console.log('Simple function call');
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function () {
    console.log(this === window);
  },
};

user.foo(); //  false
let fun1 = user.foo1;
fun1(); // true 
user.foo1(); // false 

// ------------

this.x = 9;
var obj = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

obj.getX(); // 81 

var retrieveX = obj.getX;
retrieveX(); //9 

var boundGetX = retrieveX.bind(obj);
boundGetX(); // 81 

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person('John', 'Reed');
person.displayName(); // Name: John Reed
let person2 = new Person('Paul', 'Adams');
person2.displayName(); // Name: Paul Adams

person.displayName.call(person2); // Name: Paul Adams


// ------------

const a = {
  a: 'a',
};
const obj = {
  getThis: () => this,
  getThis2() {
    return this;
  },
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

// Output
obj.getThis(); //window object

// Output
obj.getThis.call(a); //window object

// Output
obj.getThis2(); //{getThis: ƒ, getThis2: ƒ, getThis3: ƒ, getThis4: ƒ}

// Output
obj.getThis2.call(a); //{a: "a"}

// Output
obj.getThis3(); //window object

// Output
obj.getThis4(); //{getThis: ƒ, getThis2: ƒ, getThis3: ƒ, getThis4: ƒ}

// -------------

let person = {
  name: 'Jay',
  greet: function () {
    console.log('hello, ' + this.name);
  },
};

person.greet(); // hello, Jay

let greet = person.greet;
greet(); // hello, 

// -------------

let name = 'Jay Global';
let person = {
  name: 'Jay Person',
  details: {
    name: 'Jay Details',
    print: function () {
      return this.name;
    },
  },
  print: function () {
    return this.name;
  },
};
console.log(person.details.print()); // Jay Details
console.log(person.print()); // Jay Person

let name1 = person.print;
let name2 = person.details;

console.log(name1()); // output? -- "Empty string"-no value
console.log(name2.print()); // Jay Details


// --------

let outerFn = function () {
  let n = 5;
  console.log(innerItem);
  let innerFn = function () {
    let innerItem = 'inner';
    console.log(n);
  };
  return innerFn;
};

outerFn()();

// -----------

let object = {
  data: [1, 2, 3],
  dataDouble: [1, 2, 3],
  double: function () {
    console.log('this inside of outerFn double()');
    console.log(this);
    return this.data.map(function (item) {
      console.log(this); // Output ???
      return item * 2;
    });
  },
  doubleArrow: function () {
    console.log('this inside of outerFn doubleArrow()');
    console.log(this);
    return this.dataDouble.map((item) => {
      console.log(this); // Output ???
      return item * 2;
    });
  },
};

object.double();
object.doubleArrow();

// this inside of outerFn double()
// VM458:6 {data: Array(3), dataDouble: Array(3), double: ƒ, doubleArrow: ƒ}data: (3) [1, 2, 3]dataDouble: (3) [1, 2, 3]double: ƒ ()doubleArrow: ƒ ()[[Prototype]]: Object
// VM458:8 Window {0: Window, window: Window, self: Window, document: document, name: "", location: Location, …}
// VM458:8 Window {0: Window, window: Window, self: Window, document: document, name: "", location: Location, …}
// VM458:8 Window {0: Window, window: Window, self: Window, document: document, name: "", location: Location, …}
// VM458:13 this inside of outerFn doubleArrow()
// VM458:14 {data: Array(3), dataDouble: Array(3), double: ƒ, doubleArrow: ƒ}
// VM458:16 {data: Array(3), dataDouble: Array(3), double: ƒ, doubleArrow: ƒ}data: (3) [1, 2, 3]dataDouble: (3) [1, 2, 3]double: ƒ ()doubleArrow: ƒ ()[[Prototype]]: Object
// VM458:16 {data: Array(3), dataDouble: Array(3), double: ƒ, doubleArrow: ƒ}
// VM458:16 {data: Array(3), dataDouble: Array(3), double: ƒ, doubleArrow: ƒ}
// (3) [2, 4, 6]

// --------------

let bobObj = {
  name: 'Bob',
};

print = () => {
  return this;
}

let printNameBob = print.bind(bobObj);
console.log(printNameBob()); // Bob

// -------------------

let obj1 = {
  data: [1, 2, 3],
  printFirstData: function () {
    if (this.data.length) return this.data[0];
  },
};

let obj2 = {
  data: [4, 5, 6],
  printSecondData: function () {
    if (this.data.length > 1) return this.data[1];
  },
};

let getSecondData = obj2.printSecondData.bind(obj1);
console.log(getSecondData()); // 2 as obj1 is bound to this , so this.data is from obj1

// --------------

const call = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

call.says(); // Hey, mom just called.

// -----------------

const call = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.says;
newCall(); // Hey, undefined just called.

//  -----------------

function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const calls = {
  caller: 'mom',
  anotherCaller: anotherCaller,
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = calls.anotherCaller;

newCall(); // undefined called, too!
