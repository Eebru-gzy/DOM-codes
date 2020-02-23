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

document.querySelector('#task-title'); //selects the element id
document.querySelector('.task-title'); //selects the element class
document.querySelector('h5'); //selects the first h5

//styling
document.querySelector('li').style.color = 'green'; 
document.querySelector('ul li').style.color = 'blue'; 

document.querySelector("li:last-child").style.color = "blue"; 
document.querySelector("li:nth-child(4)").style.color = "blue"; 

// because querySelector is a single element selector, if we use even and odd on the nth-child, it would only select the first

document.querySelector("li:nth-child(even)").style.background = "blue"; 


//////Mulltiple Selectors: getElementsByClassName

const list = document.getElementsByClassName('collection-item');
console.log(list);



 























