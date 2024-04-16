//ELEMENTOS
const todoForm = document.querySelector("#todo-form");
const editForm = document.querySelector("#edit-form");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const todoList = document.querySelector("#todo-list");
const editInput = document.querySelector("#edit-input");
const todoInput = document.querySelector("#todo-input");

//FUNÇÕES

const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML =  '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML =  '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);
    todoInput.focus();
    //todoInput.value = "";

}

const toggleForms = () => {
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

//EVENTOS

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

   const inputValue = todoInput.value
   if(inputValue){
    saveTodo(inputValue);
   } else {
    alert("Preencha o formulario!");
   }
});

document.addEventListener("click", (e) =>{
    const targetEl = e.target;
    const parentEl = targetEl.closest("div")

    if(targetEl.classList.contains("remove-todo")) {
        parentEl.remove();
        alert("Registro apagado!")
    }
    if(targetEl.classList.contains("edit-todo")) {
        toggleForms();
    }

});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
});
