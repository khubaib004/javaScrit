let o = {
   a:1,
   b:2,
   c:3
}

let pairs = '';
for(let [k,v] of Object.entries(o)){
   pairs+=k+v;
}
console.log(pairs)
