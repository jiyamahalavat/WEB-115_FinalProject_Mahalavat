class Task {
constructor(name, dueDate, priority){
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false; //will change to true based on whether the task is completed or not
    tasks = []; //array that will have tasks in it 
}
};

// load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskList = document.getElementById("taskList"); //gets taskList 
const progress = document.getElementById("progress"); // shows progress in tasks over time

document.getElementById("addTaskBtn").addEventListener("click", addTasks ); //event listener for button that adds tasks

function addTasks(){ // make function that will add all tasks to-do to dashboard
    const name = document.getElementById("taskName").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("dueDate").value;

    if (name === " "){
        const newTask = new Task(name, dueDate, priority); //object that creates new task based on what the user enters 
    }

}

// display tasks
function displayTasks() {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const div = document.createElement("div");
    div.className = "task";
   
    if (task.completed) div.classList.add("completed");
    if (task.priority === "High")div.classList.add("high");
    if (task.priority === "Medium")div.classList.add("medium");
    if (task.priority === "Low")div.classList.add("low");
    div.innerHTML = ` //formatting
      <p>${task.name} (Due: ${task.dueDate})</p>
      <button onclick="completeTask(${i})">Complete</button>
      <button onclick="deleteTask(${i})">Delete</button>
    ;
    taskList.appendChild(div);
  }

  updateProgress();
}

//complete task
function completeTask(){
    task[index].completed = true;
    saveTasks(); //calling function here -> need to make function to save the tasks
    displayTasks(); //calling function here to display the tasks -> need to make function for this 
}

//delete task
function deleteTask(){
    tasks.splice(index,1);
    saveTasks(); //calling function here -> need to make function to save the tasks
    displayTasks(); //calling function here to display the tasks -> need to make function for this
}

//shows progress in tasks
function updateProgress(){
    let completedTasks = 0;

    for(let i = 0; i < tasks.length; i++) { //iterates through all the tasks 
        if(tasks[i].completed) completed++;
    }

    if (tasks.length === 0) {
        progress.textContent = "No tasks yet.";
    } else {
        progress.textContent = "Progress:" + completed + "/" + tasks.length; //these many completed out of total
    }
};

// save
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// load on start
displayTasks();
