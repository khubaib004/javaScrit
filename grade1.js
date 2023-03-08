let mark=parseInt(prompt("Enter the marks : "));

if (mark>=90 && mark<=100)
    console.log("A+");
else if (mark>=80 && mark <= 89)
    console.log("A");
else if (mark>=70 && mark <= 79)
    console.log("A-");
else if (mark>=60 && mark <=69)
    console.log("B");
else if (mark>=50 && mark <= 59)
    console.log("C");
else if (mark>=40 && mark <= 49)
    console.log("D");
else if (mark<=33 && mark >= 0)
    console.log("F");
else
    console.log("invalid marks")
