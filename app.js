let add=document.querySelector("#task-form");
let ul=document.querySelector("ul")
let button=document.querySelector(".clear-tasks")
let search=document.querySelector("#filter");

search.addEventListener("input",()=>{

let inputValue=search.value.trim()
getTodo(inputValue)

})
let getTodo=(todo)=>{
  Array.from(ul.children).filter(items=>{return !(items.textContent.includes(todo))}).forEach(item=>{
    item.classList.add("delete")
  })
  Array.from(ul.children).filter(items=>{return (items.textContent.includes(todo))}).forEach(item=>{
    item.classList.remove("delete")
  })
  
}


add.addEventListener("submit",(e)=>{
e.preventDefault();
let addTask=add.task.value.trim();
if(addTask.length){
  addingTask(addTask)
  add.reset();
}

});
let addingTask=(todo)=>{
  let html=` <li style="display: flex; justify-content: space-between; padding: 3px; align-items: center; margin: 2px;border:2px solid black"><span>${todo}</span><i class="fas fa-trash-alt"></i></li>`;;
  ul.innerHTML+=html;
  ul.append()

}
ul.addEventListener("click",(e)=>{
  if( e.target.classList.contains("fa-trash-alt")){
    e.target.parentElement.remove()
  }
});
button.addEventListener("click",()=>{
  Array.from(ul.children).forEach((item)=>{
    item.remove();
  })

})

