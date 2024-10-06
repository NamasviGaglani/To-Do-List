document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');

    // Create checkbox to mark task as complete
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', () => listItem.classList.toggle('completed'));

    // Create task text element
    const task = document.createElement('span');
    task.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => listItem.remove());

    // Append everything to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(task);
    listItem.appendChild(deleteBtn);

    // Add list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
}