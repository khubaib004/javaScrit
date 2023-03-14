console.clear();
let wonNumber = 0,
  lostNumber = 0;

for (let i = 1; i <= 5; i++) {
  let guessNumber = parseInt(prompt("Enter the number : "));
  let randomNumber = Math.floor(Math.random() * 5) + 1;

  if (guessNumber == randomNumber) {
    console.log("You won");
    wonNumber++;
  } else {
    console.log("You lost. The Number is : " + randomNumber);
    lostNumber++;
  }
}
document.write("You won " + wonNumber + " times" + "<br>");
document.write("You lost " + lostNumber + " times");
