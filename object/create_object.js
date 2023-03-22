let book={
   name:'Fundamental javaScript',
   author: 'Michek Fogus',
   publisher : 'O\'Reilly',
   pages: '984',
   print: function (){
      console.log(this.name , this.author);
   }
}
console.log(book)
book.print();
console.log("Book name is : "+ book.name)
console.log("Author name is : "+ book['author'])

console.log('Publish year : '+ book.publishYear);

book.publishYear = 2018;

console.log('Publish year : ' + book.publishYear)

book['price'] = '30$';

console.log('The price is : ' + book['price'] )


for (let props in book){
   console.log(props);
}

for (let props in book){
   console.log(props + " = " + book[props]) 
}
