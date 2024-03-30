const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${taskText}</span>
        <span class="delete-btn" onclick="deleteTask(this)">Delete</span>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
function deleteTask(deleteBtn) {
    const li = deleteBtn.parentElement;
    taskList.removeChild(li);
}        