function Person(name, age) {
   this.name = name;
   this.age = age;

   this.hello = function () {
      console.log("Hi " + this.name);
   };
}

function Person(name, age) {
   this.name = name;
   this.age = age;
}

Person.prototype = {
   hello: function () {
      console.log("hi" + this.name);
   },
   print: function () {
      console.log(this.name, this.age);
   },
};

let p1 = new Person("Mohammad khubaib", 19);
let p2 = new Person("Al-habib Mondol", 19);

Person.prototype.hello = function () {
   console.log("Hi " + this.name);
};

Person.prototype.email = "somthing@gmail,com";

Person.prototype.print = function () {
   console.log(this.name, this.age);
};

console.log(p1);
console.log(p2);

console.log(Person.prototype);

p1.print();
p2.print();
