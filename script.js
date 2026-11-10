let text=[]

const taskEl = document.getElementById("taskInput")
const ulEl = document.getElementById("list")


const btnEl = document.getElementById("addBtn")
const delallEL = document.getElementById("delallBtn")

let localstoretask = JSON.parse(localStorage.getItem("text"))

if (localstoretask){
    text = localstoretask
    render()
}

function render(){
    ulEl.innerHTML = ""
    for (i=0 ;i < text.length; i++){
    ulEl.innerHTML += `<li>${text[i]} <button type="button" onclick="del(${i})">delete</button></li>`

}
}

function del(i) {
  text.splice(i, 1)   // remove from array
  save() 
  render()            // redraw
}

function save() {
  localStorage.setItem("text", JSON.stringify(text))
}

delallEL.addEventListener("click",function(){
    localStorage.clear()
    text =[]
    render()
})


btnEl.addEventListener("click", function(){
    text.push(taskEl.value)
    taskEl.value = ""   
    
    save() 
    render()
    

})

render()
