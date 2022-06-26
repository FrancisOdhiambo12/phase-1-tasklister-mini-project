document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    tasks(e.target.value)
    document.querySelector('form').reset();
  })
});

function tasks() {
  const input = document.getElementById("new-task-description");
  let list = document.createElement("li");
  let button = document.createElement("button")
  button.addEventListener('click', removeTask)
  button.textContent = 'DELETE';
  list.innerHTML = `${input.value} `;
  list.appendChild(button)
  document.querySelector("#tasks").appendChild(list);
}

function removeTask(e) {
  e.target.parentNode.remove();
}
