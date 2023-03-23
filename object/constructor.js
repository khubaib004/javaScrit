let book = [
{
   name:'functional JavaScript'
},
{
   name:'JavaScript Definitive Guide'
}
]

function person (){
   console.log('I have nothing to say....');
}

let p = new person();


function Person (name,email){
   this.name=name;
   this.email=email;
   this.print=function(){      
      console.log('name : ' + this.name)
   }
}

let p1=new Person('khabbab','khabbab609342@gmail.com');
let p2=new Person('Al-Habib','ah18bd@gmail.com');
let p3=new Person('Mahid Hasan','mdmahidhasan@gmail.com');
console.log(p1.email);
console.log(p1.name)
console.log(p1)

let ary = [p1,p2,p3]

console.log(ary)

ary.forEach(function(person)
{
   person.print();
   console.log('email : '+ person.email)
})


for(let props in p1){
   console.log('properties = '+ props)
}


function Book(name,author,price){
   this.name=name;
   this.author=author;
   this.price=price;
}

let book1 = new Book('JavaScrip The Defination Duid','David Flanagan',600)

console.log(book.constructor)
