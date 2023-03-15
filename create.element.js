// create element

let a = document.createElement("h1");

// add text

let b = document.createTextNode("heading 3");
a.appendChild(b);

// location 

let c = document.getElementById("My-id");
c.appendChild(a);
