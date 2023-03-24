let obj = 
{
   name:'khubaib',
   print: function ()
   {
      console.log(this);
   }
}

obj.print();

function myfunction()
{
   // console.log(this)
   function inner ()
   {
      console.log(this);
   }
   inner()

}

myfunction()
function myfunction()
{
   // console.log(this)
   function inner ()
   {
      console.log(this);
   }
   new inner()

}

myfunction()

let person = 
{
   name:'khubaib sarker',
   print: function()
   {
      console.log('Hi, '+ this.name);   
   }
}

person.print();

let myname = function() 
{
   console.log(this);
   console.log('Hi, '+ this.name);   
}
console.log(myname)

// let myName = person.print;
// console.log(myName)

let myName = person.print.bind(person);
console.log(myName)

myName();

function add(num)
{
   return this.value + num
}

let obj1 = {
   value:20
}

let obj2 ={
   value: 50
}

let binded = add.bind(obj1);
let result =binded(10)

console.log (result)

let Person ={
   name: 'Twinkle cats',

   print: function () 
   {
      // let name = this.name;
      setTimeout(function()
      {
         
         console.log(this);
         console.log('Hi, ' + this.name)

      }.bind(this) , 2000)
   }
}
Person.print();
