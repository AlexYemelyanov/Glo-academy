'use strict';


class Todo {
  constructor(form, input, todolist, todoCompleted, todoContainer) {
    this.form = document.querySelector(form);
    this.input = document.querySelector(input);
    this.todoList = document.querySelector(todolist);
    this.todoCompleted = document.querySelector(todoCompleted);
    this.todoContainer = document.querySelector(todoContainer);
    this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));

  }

  addToStorage() {
    localStorage.setItem('toDoList', JSON.stringify([...this.todoData]))
  }


  render() {
    this.todoList.textContent = '';
    this.todoCompleted.textContent = '';
    this.input.textContent = '';
    this.todoData.forEach(this.createItem);
    this.addToStorage();

  }

  createItem = (todo) => {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.key = todo.key;
    li.insertAdjacentHTML('beforeend', `
    <span class="text-todo">${todo.value}</span>
				<div class="todo-buttons">
					<button class="todo-remove"></button>
					<button class="todo-complete"></button>
				</div>
    `);

    if (todo.completed) {
      this.todoCompleted.append(li);
    } else {
      this.todoList.append(li);
    }
  }

  addTodo(e) {
    e.preventDefault();
    if (this.input.value.trim()) {
      const newTodo = {
        value: this.input.value,
        completed: false,
        key: this.generateKey(),
      };
      this.todoData.set(newTodo.key, newTodo);
      this.render();

    }
  }


  generateKey() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  deleteItem(elem) {
    const liItem = elem.parentNode.parentNode;

    this.todoData.forEach((todoItem) => {

      if (todoItem.key === liItem.key) {

        this.todoData.delete(todoItem.key);


      }
      this.render();

    })

  }

  completedItem(elem) {
    const liItem = elem.parentNode.parentNode

    this.todoData.forEach((todoItem) => {
      if (todoItem.key === liItem.key) {
        todoItem.completed = !todoItem.completed;
      }
    })

    this.render();
  }

  handler() {

    this.todoContainer.addEventListener('click', () => {

      if (event.target.matches('button.todo-complete')) {

        this.completedItem(event.target);
      }
      if (event.target.matches('button.todo-remove')) {
        this.deleteItem(event.target);
      }
    })

  }



  init() {
    this.form.addEventListener('submit', this.addTodo.bind(this));
    this.render();
  }

}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed', '.todo-container');


todo.init();
todo.handler();