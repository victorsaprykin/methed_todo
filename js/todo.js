export const todo = () => {
  const todoForm = document.getElementById('form-todo');
  const author = document.getElementById('author');
  const post = document.getElementById('post');
  const list = document.querySelector('.todo__list');
  const todoCount = document.querySelector('.todo__count');

  const base = {
    init() {
      this.todo = this.getTodoLS();
      todoCount.textContent = this.todo.length;
    },
    employee: 'Петров Сергей Иванович',
    todo: [],
    check(id) {
      for (let i = 0; i < this.todo.length; i++) {
        if (this.todo[i].id === id) {
          this.todo[i].ready = true;
        }
      }
      this.setTodoLS();
    },
    addTodo(author, post) {
      const todo = {
        id: 'td' + Date.now(),
        author,
        post,
        ready: false,
      };
      this.todo.push(todo);
      this.setTodoLS();
      todoCount.textContent = this.todo.length;
      return todo;
    },
    getTodoLS() {
      if (localStorage.getItem('todo')) {
        return JSON.parse(localStorage.getItem('todo'));
      }

      return [];
    },

    setTodoLS() {
      localStorage.setItem('todo', JSON.stringify(this.todo));
    },
  };

  const addTodo = (event) => {
    event.preventDefault();
    const authorText = author.value;
    const postText = post.value;

    const objTodo = base.addTodo(authorText, postText);
    const todoLi = createTodo(objTodo);

    list.append(todoLi);

    todoForm.reset();
  };

  const createTodo = (objTodo) => {
    const todoItem = `
      <article class="post ${objTodo.ready ? 'post_complete' : ''}">
                  <h3 class="post__author">${objTodo.author}</h3>
                  <p class="post__todo">${objTodo.post}</p>
                  ${
                    !objTodo.ready
                      ? `<button
                   class="post__ready"
                    type="button"
                    data-id="${objTodo.id}"
                    >✔</button>`
                      : ''
                  }
                </article>
  `;

    const li = document.createElement('li');
    li.innerHTML = todoItem;
    li.classList.add('todo__list-item');

    return li;
  };

  const renderTodo = () => {
    base.init();
    for (let i = 0; i < base.todo.length; i++) {
      const todoLi = createTodo(base.todo[i]);
      list.append(todoLi);
    }
  };

  const checkTodo = (event) => {
    const btn = event.target.closest('.post__ready');

    if (btn) {
      const post = btn.closest('.post');
      btn.remove();
      
      post.classList.add('post_complete');
      const id = btn.dataset.id;
      base.check(id);
    }
  };

  todoForm.addEventListener('submit', addTodo);

  list.addEventListener('click', checkTodo);

  renderTodo();
};
