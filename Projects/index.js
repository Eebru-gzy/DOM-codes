//Define UI Vars

const form = document.getElementById('task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.getElementById('task');


//load all event listeners

loadEventListeners();

function loadEventListeners() {
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks)

    //Add task event
    form.addEventListener('submit', addTask);

    //remove task event
    taskList.addEventListener('click', removeTask);

    //Clear Tasks
    clearBtn.addEventListener('click', clearTasks);

    //filter through tasks
    filter.addEventListener('keyup', filterTasks);

}

function getTasks () {
    let tasks;

    if (localStorage.getItem("tasks") === null) {
     tasks = [];
    } else {
     tasks = JSON.parse(localStorage.getItem("tasks"));
    } 

    tasks.forEach((task) => {
     //create li element
    const li = document.createElement('li');
    //give it a class name
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(task));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon to link
    link.innerHTML = '<i class = "fa fa-remove"></a>';
    //append link to li
    li.appendChild(link);

    //append li to ul, if its not empty
    if(task.value !== '') {
        taskList.append(li);
    }
    })
}

function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a Task');
    }

    //create li element
    const li = document.createElement('li');
    //give it a class name
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon to link
    link.innerHTML = '<i class = "fa fa-remove"></a>';
    //append link to li
    li.appendChild(link);

    //append li to ul, if its not empty
    if(taskInput.value !== '') {
        taskList.append(li);
    }
    //store in local storage
    storeTasksInLocalStorage(taskInput.value);

    //clear input
    taskInput.value = ''

    e.preventDefault();
}


function storeTasksInLocalStorage(task) {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    if(task !== ''){
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

//Remove Tasks

function removeTask (e) {
    if(e.target.classList.contains('fa')) {
        if(confirm('Are You Sure ?')) {
            e.target.parentElement.parentElement.remove();


            //remove from ls
            removeTasksFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

function removeTasksFromLocalStorage(taskItem) {
    let tasks;

    if (localStorage.getItem("tasks") === null) {
     tasks = [];
    } else {
     tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach((task, index) => {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });


    localStorage.setItem("tasks", JSON.stringify(tasks));
    

}



//Clear Tasks
function clearTasks() {
    //this works, but while loop is faster
    // taskList.innerHTML = '';

    if(confirm('Clear All ?')) {
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        //clear from localstorage
        clearTasksFromLocalStorage();
    }

}

function clearTasksFromLocalStorage() {
    localStorage.clear();
}


function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach((task) => {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) !== -1){
            task.style.display = 'block';
        }else {
            task.style.display = 'none';
        }
    })
}