let a = ["img/pic2.jpg", "img/pic3.jpg", "img/pic1  .jpg"];

let b = document.querySelector("img");

let c = 0;

function nex() {
  c++;
  if (c >= a.length) {
    c = 0;
    b.src = a[c];
  } else {
    b.src = a[c];
  }
}

function prev() {
  c--;
  if (c < 0) {
    c = a.length - 1;
    b.src = a[c];
  } else {
    b.src = a[c];
  }
}
