const todoform = document.querySelector('#todo-form');
const todoInput = todoform.querySelector('.todo-input');
const sub = todoform.querySelector('submit');
const todoList = document.querySelector('.todo-list');

const TODOS_KEY="todos";
let todos=[];


function saveToDos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
}

function deleteTodo(e){
  const li = e.target.parentNode;
  li.remove();
  todos=todos.filter((item)=>item.id!==parseInt(li.id))
  console.log(todos);
  saveToDos();
}

function printTodo(todo) {
  let li = document.createElement('li');
  li.classList.add("todoItem");
  let span = document.createElement('span');
  li.appendChild(span);
  span.classList.add("todoContent");
  span.innerText = todo.text;
  let btn=document.createElement('button');
  btn.innerText="❌";
  btn.classList.add("btn-style")
  btn.addEventListener('click',deleteTodo);
  li.appendChild(btn);
  li.id=todo.id;
  console.log(li);
  todoList.appendChild(li);
}

function addTodo(e) {
  e.preventDefault();
  const content = todoInput.value;
  todoInput.value = '';
  const newTodoobj={
    text: content,
    id: Date.now()
  };
  todos.push(newTodoobj);
  printTodo(newTodoobj);
  saveToDos();
}

todoform.addEventListener('submit', addTodo);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  todos = parsedToDos;
  parsedToDos.forEach(printTodo);
}