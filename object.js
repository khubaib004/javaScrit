function Student(a, b, c, d) {
  this.name = a;
  this.age = b;
  this.cgpa = c;
  this.lang = d;
  this.display = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
  };
}

let student1 = new Student("khubaib sarker", 28, 3.5, [
  "bangla",
  "English",
  "Arabic",
]);

student1.display();
