/*
let val;

val = document;
val = document.all;
val = document.all[3];
val = document.all.length;
val = document.all.head;
val = document.all.body;
val = document.all.doctype;
val = document.all.domain;
val = document.all.URL;
val = document.all.characterSet;
val = document.all.contentType;

//selecting element wither selectors

val = document.forms; //returns all the forms available on the document in an array like
val = document.forms[0]; //selects the only form on the doc
val = document.forms[0].id; //selects the its id
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2];
val = document.scripts[2].getAttribute('src');


////////////

let scriptt = document.scripts;

let scriptsArr = Array.from(scriptt);

scriptsArr.forEach((cur) => {
    console.log(cur.getAttribute("src"));
})



console.log(val); 
*/

//single element selectors:

// 1) document.getElementById( )
// 2) document.querySelector(): when using it to select tag name, it would jsut selct only the first one

// document.querySelector('#task-title'); //selects the element id
// document.querySelector('.task-title'); //selects the element class
// document.querySelector('h5'); //selects the first h5

// //styling
// document.querySelector('li').style.color = 'green';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector("li:last-child").style.color = "blue";
// document.querySelector("li:nth-child(4)").style.color = "blue";

// // because querySelector is a single element selector, if we use even and odd on the nth-child, it would only select the first

// document.querySelector("li:nth-child(even)").style.background = "blue";

//////Mulltiple Selectors: getElementsByClassName
//on Global scale
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.background = 'yellow';
// items[0].textContent = 'Eebru';

// //this is more particular to the class names inside of the ul
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// // getElementByTagName:
// document.getElementsByTagName('li');

//querySelectorAll: returns a nodeList

// document.querySelectorAll('ul.collection li.collection-item'); //it accepts typical css selection, somearray methods can be used on it, but it's stilla not an array

//   const liEven = document.querySelectorAll('li:nth-child(even)');
//   const liOdd = document.querySelectorAll('li:nth-child(odd)');

// liEven.forEach(cur => {
//     cur.style.background = '#f4f4f4'
// })

// for (let i = 0; i < liOdd.length; i++) liOdd[i].style.background = '#ccc'

/////////////Traversing the DOM
//  let val;

// const list = document.querySelector('ul.collection');
// const listItems = document.querySelector('li.collection-item:first-child');

// val = listItems;
// val = list;

// //childnodes, which includes all the line-breaks
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;
// val = list.childNodes[1].nodeType;

// //meaning of numbers that nodeType returns
// //1: Element
// //2: Attribute (deprecated)
// //3: Text node
// //8: comment
// //9: Document itself
// //10: Doctype

// //children, which returns HTML collection
// val = list.children;
// val = list.children[1].textContent = 'Eebru'; //on index 1

// ///Children of children
// val = list.children[0].children[0].id = 'Test';
// val = list.children[0].children[0];

// //firstChild
// val = list.firstChild;
// val = list.firstElementChild;

// //lastchild
// val = list.lastChild;
// val = list.lastElementChild;

// //counting child element
// val = list.childElementCount;

// ///////////Parent Nodes
// val = listItems.parentNode;
// val = listItems.parentElement;
// val = listItems.parentElement.parentElement;

// ////Next siblings
// val = listItems.nextSibling;
// val = listItems.nextElementSibling;
// val = listItems.nextElementSibling.nextElementSibling;

// //Previous sibling
// val = listItems.previousSibling;
// val = listItems.previousElementSibling;
// // val = listItems.previousElementSibling.nextElementSibling;

// console.log(val);

/////////Create Element

// const li = document.createElement("li");

// //add class
// li.className = "collection-item";

// //add id
// li.id = "new-item";

// //add attribute
// li.setAttribute("title", "New-Item");

// // create TextNode and append
// li.appendChild(document.createTextNode('from Js'));

// //creating the link tag
// const link = document.createElement('a');
// link.className = "delete-item secondary-content";
// link.innerHTML = '<i class="fa fa-remove">';
// link.setAttribute('href', '#');
// //apend the to the li
// li.appendChild(link);
// //append li as child to the ul in html
// document.querySelector('ul').appendChild(li);

// console.log(li);

//////Removoing and replacing element in DOM

//Replacing

// const newHeading = document.createElement('h2');

// newHeading.id = 'task-title';

// newHeading.appendChild(document.createTextNode('Task Title'));

// // getting the old element
// const oldHeading = document.getElementById('task-title');
// // replace, well call the parent node, so we select its parent
// const parent = document.querySelector('.card-action');

// //replace
// parent.replaceChild(newHeading, oldHeading);

// const lis = document.querySelectorAll('li');
// const ul = document.querySelector('ul');

// //Removing element

// lis[0].remove();
// lis[1].remove();

// //removing child element
// ul.removeChild(lis[3])

/////// CLASSES AND ATTRIBUTE

// const firstLi = document.querySelector("li:first-child");

// const link = firstLi.children[0];

// let val;

// val = link.className;
// val = link.classList;
// val = link.classList[0];
// //to add a class
// link.classList.add("testtt");
// link.classList.remove("testtt");
// val = link;

// // Attribute

// val = link.getAttribute("href");
// val = link.setAttribute("href", "http://google.com");

// link.setAttribute("title", "google");
// val = link.hasAttribute("title");
// link.removeAttribute("title");

// val = link;
// console.log(val);

////////////EVENT LISTENER: The Event Object

// document.querySelector('.clear-tasks').addEventListener('click', (e) => {
//     console.log('Hello');

//     //e.preventDefault();
// })
// // or
// document.querySelector(".clear-tasks").addEventListener("click", onClick);

// function onClick (e) {
//     let val;

//     val = e;

//     //event target element
//     val = e.target;
//     val = e.target.className;
//     val = e.target.classList;

//     // val = e.target.innerText = 'Eebru'

//     //Event Type
//     val = e.type;

//     //event Timestamp
//     val = e.timeStamp;

//     //event coordinate relative to the window
//     val = e.clientX;
//     val = e.clientY;

//     //event coordinate relative to the element itself
//     val = e.offsetX;
//     val = e.offsetY;

//     console.log(val);
// }

/////////MOUSE EVENT:

// const clearBtn = document.querySelector(".clear-tasks");
// const card = document.querySelector(".card");
// const heading = document.querySelector("h5");

// //click event
// // clearBtn.addEventListener('click', runEvent);
// //double click event
// // clearBtn.addEventListener('dblclick', runEvent);
// //mouse Down
// // clearBtn.addEventListener("mousedown", runEvent);
// //mouse up
// // clearBtn.addEventListener("mouseup", runEvent);
// //mouse enter 
// // card.addEventListener("mouseenter", runEvent);
// // //mouse leave 
// // card.addEventListener("mouseleave", runEvent);
// // //mouse over 
// // card.addEventListener("mouseover", runEvent);
// // //mouse out 
// // card.addEventListener("mouseout", runEvent);
// //difference between mouse over and mouse enter is that mouseenter fires on when a mouse enters an element, but mouse over fires when mouse enters an element, and also the elements inside of the element selected, same as mouse leave and out.
// //mouse move
// card.addEventListener('mousemove', runEvent);






// //event handler
// function runEvent(e) {
//  console.log(`EVENT TYPE: ${e.type}`);

// //making use of the mouse move event
// heading.textContent = `MOUSE Y: ${e.offsetY} MOUSE X: ${e.offsetX}`
// document.body.style.backgroundColor = `rgb(${e.offsetY} ${e.offsetX} 250)`;
// }


////////////KEYBOARD EVENTS

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');

// //submit event
// // form.addEventListener('submit', runEvent);
// //keydown event
// // taskInput.addEventListener('keydown', runEvent);
// //keyup event
// // taskInput.addEventListener('keyup', runEvent);
// //keypress event
// // taskInput.addEventListener('keypress', runEvent);
// //focus event
// // taskInput.addEventListener('focus', runEvent);
// //blur event
// // taskInput.addEventListener('blur', runEvent); //opposite of focus
// //cut event
// // taskInput.addEventListener('cut', runEvent); 
// //paste event
// // taskInput.addEventListener('paste', runEvent);
// //input event
// // taskInput.addEventListener('input', runEvent);
// //change event: works on select element so when you change select option, the event fires.





  
// function runEvent (e) {
//     console.log(`EVENT TYPE: ${e.type}`);

   
   
   
   
   
   
   
//     // console.log(e.target.value);

//     // heading.innerText = e.target.value;

//     // getting value from input 
//     // console.log(taskInput.value);

//     // e.preventDefault();
// }





////////////////EVENT BUBBLING and DELEGATION:

// document.querySelector('.card-title').addEventListener('click', function() {
//     console.log('card-title');
// });
// document.querySelector('.card-content').addEventListener('click', function() {
//     console.log('card-content');
// });
// document.querySelector('.card').addEventListener('click', function() {
//     console.log('card');
// });
// document.querySelector('.col').addEventListener('click', function() {
//     console.log('col');
// });
//bubbling here means that one event fired on the card title(child) bubbled up through its parent divs and all of them console logged


// Delegation: oppsite; event put in parent, and delegated to its child elements

//so we put the event on the body 

// document.body.addEventListener('click', deleteItem);

// function deleteItem (e) {
//     // if (e.target.className === 'fa fa-remove') {
//     //     console.log('deletedddd');
//     // }

//     // if (e.target.parentElement.className === 'delete-item secondary-content') console.log('deletttedd');

//     //using className isn't really effective as if anything is added to the className in future would make it not match the condition, best to use is classList with contains method

//     if (e.target.parentElement.classList.contains('delete-item')) {
//         console.log('deleted')
//         e.target.parentElement.parentElement.remove();
//     }
// }



/////////LOCAL STORAGE AND LOCAL SESSION

//they re window's members that allow us to store data through the window's api. when data are stored in local storage it would still be there even afte closing the browser, until we manually delete it from the local storage, local session keeps data, until the browser is closed. other than this, everything else is the same


//set item 
// localStorage.setItem('name', 'eebru')
// localStorage.setItem('age', '20')
// sessionStorage.setItem('name', 'eebru')

//remove
// localStorage.removeItem('name');

//get from storage
// console.log(localStorage.getItem('name'))
// console.log(localStorage.getItem('age'))

//to clear
// localStorage.clear();


document.querySelector('form').addEventListener('submit', function(e) {
    const task = document.getElementById('task').value;

    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task saved');


    e.preventDefault();
})


const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach((task) => {
    // console.log(task);
})





 