function Student(a, b, c, d) {
  this.name = a;
  this.age = b;
  this.cgpa = c;
  this.lang = d;
}

let student1 = new Student("khubaib sarker", 28, 3.5, [
  "bangla",
  "English",
  "Arabic",
]);

console.log(student1.lang);
console.log(student1);
