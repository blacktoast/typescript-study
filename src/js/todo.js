const todoform = document.querySelector('#todo-form');
const todoInput = todoform.querySelector('.todo-input');
const sub = todoform.querySelector('submit');
const todoList = document.querySelector('.todo-list');

function printTodo(todo) {
  let li = document.createElement('li');
  let span = document.createElement('span');
  li.appendChild(span);
  span.innerText = todo;
  console.log(li);
  todoList.appendChild(li);
}

function addTodo(e) {
  const content = todoInput.value;
  todoInput.value = '';
  e.preventDefault();
  printTodo(content);
}

todoform.addEventListener('submit', addTodo);
