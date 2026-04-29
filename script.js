class Task {
constructor(name, dueDate, priority){
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false; //will change to true if the task is completed
}
};

const taskList = document.getElementById("taskList"); //gets taskList 
const progressText = document.getElementById("progress"); // shows progress in tasks over time

document.getElementById("addTaskBtn").addEventListener("click", addTasks ); //event listener for button that adds tasks

function addTasks(){ // make function that will add all tasks to do to dashboard
    const name = document.getElementById("taskName").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("dueDate").value;

    if (name == " "){
        const newTask = new Task(name, dueFDpriority); //object that creates new task based on what the user enters 
    }

}


//can use JSON.parse 
//Storage.setItem() -> setItem(keyName, keyValue)
// used like this -> localStorage.setItem("image", "myCat.png")
//there is a fetch API which uses the fetch() method 
