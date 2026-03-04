const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos"
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTodo(data))
};

const displayTodo = (todos) => { };
loadTodo();