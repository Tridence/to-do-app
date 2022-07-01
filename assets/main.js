//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener("click", addTodo);

//functions
function addTodo(event){ 
    //Prevent the form from submitting

    event.preventDefault();
    //Todo DiV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create LI
    const newTodo= document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Checkmark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class= "fas fa-check"></i>'; 
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton); 

     //Trash Button
     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class= "fas fa-trash"></i>'; 
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton); 

     //APPEND to list
     todoList.appendChild(todoDiv)

     //Clear Input Value
     
}