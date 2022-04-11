document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleToDo(e.target.new_task_description.value);
  })
})


function handleToDo (todo) {
  const list = document.createElement('li');
  list.textContent = todo;
  const ul = document.querySelector('ul');
  ul.append(list);
}