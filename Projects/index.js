//Define UI Vars

const form = document.getElementById('task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.getElementById('task');


//load all event listeners

loadEventListeners();

function loadEventListeners() {
    //Add task event
    form.addEventListener('submit', addTask);

    //remove task event
    taskList.addEventListener('click', removeTask);

    //Clear Tasks
    clearBtn.addEventListener('click', clearTasks);

    //filter through tasks
    filter.addEventListener('keyup', filterTasks);

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

    //clear input
    taskInput.value = ''



    e.preventDefault();
}


//Remove Tasks

function removeTask (e) {
    if(e.target.classList.contains('fa')) {
        if(confirm('Are You Sure ?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

//Clear Tasks
function clearTasks() {
    //this works, but while loop is faster
    // taskList.innerHTML = '';

    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
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