const form = document.querySelector(".todoList__form")
const input = document.querySelector(".todoList__input")
const todoList = document.querySelector(".allTodoList")

let newTodoList = [];

form.addEventListener("submit", (formSubmitHandler))

function formSubmitHandler(event) {
    event.preventDefault();
    const newTodo = input.value;
    newTodoList.push(newTodo);
    localStorage.setItem("todoList", JSON.stringify(newTodoList))
    renderTodosToUI();
    input.value = "";
}

function renderTodosToUI() {
    newTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
    todoList.innerHTML = "";
    newTodoList.forEach((todo) => {
        todoList.innerHTML += `<li class="allTodoList__programs"><span>${todo}</span><a class="delete-button" style="cursor:pointer;">Delete</a></li>`;
    });

const deletebtn = document.querySelectorAll(".delete-button");

deletebtn.forEach((btn) => {
    btn.addEventListener("click", deleteButtonHandler)
});
}

function deleteButtonHandler (event){
    const todo = event.target.previousSibling.textContent;
    newTodoList.findIndex((item,index) =>{
        if(item === todo) {
            newTodoList.splice(index, 1);
        localStorage.setItem("todoList",JSON.stringify(newTodoList))  
        renderTodosToUI(); 
        }
    });
}
renderTodosToUI();

// <i class="fa-solid fa-trash"></i>
// <i class="fa-solid fa-trash"></i>
