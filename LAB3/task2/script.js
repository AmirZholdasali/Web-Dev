const todoForm = document.querySelector('#todoForm');
const taskInput = document.querySelector('#taskInput');
const todoList = document.querySelector('#todoList');


const createTodoItem = (text) => {
  const li = document.createElement('li');
  li.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'delete'; 
  deleteBtn.className = 'del-btn';


  checkbox.addEventListener('change', () => {
    span.classList.toggle('completed');
  });

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.append(checkbox, span, deleteBtn);
  return li;
};

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const taskText = taskInput.value.trim();
  
  if (taskText !== '') {
    const newItem = createTodoItem(taskText);
    todoList.appendChild(newItem);
    taskInput.value = '';
    taskInput.focus();
  }
});