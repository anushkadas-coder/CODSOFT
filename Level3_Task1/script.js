function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("task-list");
  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="deleteTask(this)">❌</button>
  `;
  taskList.appendChild(li);
  input.value = "";
}

function deleteTask(btn) {
  const task = btn.parentElement;
  task.remove();
}

function toggleComplete(span) {
  span.classList.toggle("completed");
}

