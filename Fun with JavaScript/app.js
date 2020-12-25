//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//EVENT LISTNER
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//FUNCTIONS
function addTodo(event) {
    // prevents page from refreshing(form from submitting);
    event.preventDefault();
    // make Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create list(LI)
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
      // trash button
      const trashButton = document.createElement('button');
      trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
      trashButton.classList.add('trash-btn');
      todoDiv.appendChild(trashButton);
      //append to list
      todoList.appendChild(todoDiv);
      //Clear todo input value(clearing the search bar on site)
      todoInput.value = "";
}
function deleteCheck(e){
    const item = e.target;
    // delete the todo
    if(item.classList[0] === 'trash.btn'){
        item.remove();
    }
}