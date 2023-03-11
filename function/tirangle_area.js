// create a function 
function name(num1,num2,num3){
    if ((num1+num2)>num3 && (num2+num3)>num1 && (num1+num3)>num2){
        let s= (num1+num3+num2)/2;
        let area=(s*(s-num1)*(s-num2)*(s-num3))*.5;
        document.write("Area is : " + area + '<br>' );
    }
    else{
        document.write("Triangle not possiable.. <br> ");
    }
}
// calling a function

name(3,3,5);
name(3,2,3);
