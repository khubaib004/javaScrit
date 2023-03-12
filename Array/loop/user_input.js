let num = new Array();

for (let i=0; i < 5; i++)
{
    num[i]=Number(prompt("Enter the numbers : "));
}

let sum=0;

for (let i=0; i < 5; i++)
{
    
    sum=sum + num[i];

}
document.write("Sum is : " + sum);
