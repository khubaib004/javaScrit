let btn = document.querySelector("#btn");
let para = document.querySelector("#para");

let display = false;

btn.addEventListener("click", function () {
   if (display) {
      para.style.visibility = "hidden";
      display = false;
      btn.innerHTML = "Show";
   } else {
      para.style.visibility = "visible";
      display = true;
      btn.innerHTML = "Hide";
   }
});
