let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();
    
    if (text === "") {
        alert("Please enter a task!");
        return;
    }
    
    tasks.push({
        id: Date.now(),
        text: text,
        completed: false
    });
    
    input.value = "";
    saveTasks();
    renderTasks();
}

function toggleTask(id) {
    tasks = tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

function setFilter(value) {
    filter = value;
    
    document.querySelectorAll('.filters button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";
    
    const filtered = tasks.filter(task => {
        if (filter === "all") return true;
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
    });
    
    filtered.forEach(task => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";
        li.innerHTML = `
            <span onclick="toggleTask(${task.id})">${task.text}</span>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        list.appendChild(li);
    });
    
    const active = tasks.filter(t => !t.completed).length;
    document.getElementById("taskCounter").textContent = `Tasks: ${active}`;
}

renderTasks();
