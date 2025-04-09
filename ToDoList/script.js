let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Clear list

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    if (task.completed) li.classList.add('done');

    li.innerHTML = `
      <div>
        <span onclick="toggleDone(${index})">${task.text}</span>
        <div class="task-time">${task.time || ''}</div>
        <div class="task-priority">Priority: ${task.priority || 'Medium'}</div>
      </div>
      <button class="delete-btn" onclick="deleteTask(${index})">X</button>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const prioritySelect = document.getElementById('prioritySelect');
  const priority = prioritySelect.value;

  const now = new Date();
  const timestamp = now.toLocaleString(); // Example: "4/5/2025, 10:15:23 AM"

  tasks.push({text: taskText, completed: false, time: timestamp, priority: priority});
  localStorage.setItem('tasks', JSON.stringify(tasks));
  taskInput.value = '';
  renderTasks();
}

function toggleDone(index) {
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

document.getElementById('addBtn').addEventListener('click', addTask);

// Optional: Add "Enter" key support
document.getElementById('taskInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTask();
});

// Initial render
renderTasks();