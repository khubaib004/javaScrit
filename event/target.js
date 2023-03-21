const input = document.querySelector("input[name=name]");
input.addEventListener("change",changeHandeler);

 console.clear()
function changeHandeler(e){
    
   console.log(e)
   console.log(e.type)
   console.log(e.target)
   console.log(e.target.className)
   console.log(e.target.id)
   console.log(e.target.value)

}
