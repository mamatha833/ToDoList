let taskList = document.getElementById("taskList");

document.getElementById("taskInput").addEventListener('keydown',function(event){
    if(event.key === 'Enter'){

        addTask();
    } 
})

function addTask(){
    
    var taskInput = document.getElementById("taskInput").value.trim();
    if(taskInput === ''){
        alert("Enter the Task")
        return;
    }

    taskInput = capitalize(taskInput);

    

    var completeButton = document.createElement("button");
    completeButton.id  = "completeButton"
    completeButton.classList.add("listButtons")
    completeButton.innerText = 'Complete';
    
    var deleteButton = document.createElement("button");
    deleteButton.id = "deleteButton"
    deleteButton.classList.add("listButtons")
    deleteButton.innerText = "Delete"

    var task = document.createElement("span");
    task.id = "task";
    task.classList.add("listButtons")
    task.innerText = taskInput;

    var listItem = document.createElement("li");
    listItem.append(task,completeButton,deleteButton);

    taskList.prepend(listItem)

    deleteButton.addEventListener("click",deleteTask);
    completeButton.addEventListener('click',completeTask);
    
    document.getElementById("taskInput").value = '';

}

function deleteTask(event){

     listItem = event.target.parentElement;
     taskList.removeChild(listItem);

}


function completeTask(event){

    event.target.previousSibling.style.textDecoration = 'line-through'
    event.target.innerText = 'Completed'
    event.target.style.backgroundColor = '#4CAF50'; 
    
}

function capitalize(str) {
    if (str.length === 0) return str; 
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}







