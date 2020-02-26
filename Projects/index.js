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

    //append li to ul
    taskList.append(li);

    //clear input
    taskInput.value = ''



    e.preventDefault();
}

