'use strict';


const todoControl = document.querySelector('.todo-control'),
  headerInput = document.querySelector('.header-input'),
  todoList = document.querySelector('.todo-list'),
  todoCompleted = document.querySelector('.todo-completed'),
  headerBtn = document.querySelector('.header-button');

let todoData = JSON.parse(localStorage.getItem('toDoList'));



//JSON.parse(localStorage.getItem('toDoList'));
const addToStorage = () => {
  localStorage.setItem('toDoList', JSON.stringify([...todoData]))
};

const render = () => {



  todoList.textContent = '';
  todoCompleted.textContent = '';
  headerInput.textContent = '';

  if (todoData && todoData) {
    todoData.forEach((item) => {

      const li = document.createElement('li');

      li.classList.add('todo-item');
      li.innerHTML = `
      <span class="text-todo">${item.value}</span>
				<div class="todo-buttons">
					<button class="todo-remove"></button>
					<button class="todo-complete"></button>
    `;
      if (item.completed) {
        todoCompleted.append(li)
      } else {
        todoList.append(li);
      }



      const deletedBtn = li.querySelector('.todo-buttons');


      deletedBtn.addEventListener('click', (e) => {
        console.log(e.target)
        if (e.target.matches('button.todo-complete')) {
          // console.log(item)
          completedItem(item);
        }
        if (e.target.matches('button.todo-remove')) {
          // console.log(item)
          deleteItem(item);
        }


        render();
      })

      const completedItem = (elem) => {
        console.log(elem)
        if (elem.value === item.value) {
          item.completed = !item.completed;
        }
      }

      const deleteItem = (elem) => {

        if (elem.value === item.value) {
          todoData.splice(elem, 1);
          console.log(todoData.length);
          if (todoData.length === 0) {
            localStorage.removeItem('toDoList')
          }
        }
      }
      addToStorage();
    })

  } else {
    todoData = [];
  }


};

todoControl.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!headerInput.value) {
    return;
  }

  const newTodo = {
    value: headerInput.value,
    completed: false,
  };
  console.log(todoData)
  todoData.push(newTodo);
  render();
  todoControl.reset();
  addToStorage();
});

render();