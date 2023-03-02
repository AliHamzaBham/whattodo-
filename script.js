const body = document.querySelector('body');
const menuIcon = document.querySelector('.menu');
const parent = document.querySelector('#parent');
const mainContainer = document.querySelector('#main-container');
const container = document.querySelector('.container');
const sideMenu = document.querySelector('#side-menu');
let n = 0;
if (window.screen.width <= 768) {
    container.style.display = "none";
}
menuIcon.addEventListener('click', () => {
    if(n == 0) {
        sideMenu.style.transform =  "translateX(-300px)";
        sideMenu.style.diplay = "none";
        if (window.screen.width <= 768) {
            container.style.display = "block";
        }
        n++;
    }else {
        sideMenu.style.transform =  "translateX(0px)";
        sideMenu.style.diplay = "block";
        if (window.screen.width <= 768) {
            container.style.display = "none";
        }
        n--;
    }
});

const dateText = document.querySelector('.date');
let today = new Date;
let days = ["Mon", "tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
if(today.getDay() == 0) {
    dateText.innerText = `${days[6]} ${today.getDate()} ${months[today.getMonth()]}`;
}else {
    dateText.innerText = `${days[today.getDay() - 1]} ${today.getDate()} ${months[today.getMonth()]}`;
}


// 

// Add Task Form Handling
let title = "";
let desc = "";
const addTaskForm = document.querySelector('.add-task-form');
const taskFormSubmitBtn = document.querySelector('.modal-add-task-btn');
const taskTitleInput = document.querySelector('.task-title-input');
const taskDescInput = document.querySelector('.task-desc-input');
const taskCross = document.querySelector('.task-cancel-btn');
addTaskForm.addEventListener('submit', () => {
    event.preventDefault();
});

const tasks = document.querySelector('.tasks');
let i = 1;
let row = {};
taskFormSubmitBtn.addEventListener('click', () => {
    title = taskTitleInput.value;
    taskCross.click();
    row[i] = document.createElement('div');
    row[i].setAttribute('class', "row");
    row[i].innerHTML = `
    <div class="dragger">
        <img src="assets/dots.svg" alt="">
    </div>
    <div class="circle">
        <div class="tick-div">
            <img class="tick" onclick="done()" onmouseover="tickForDone()" onmouseout="noTickForDone()" src="assets/tick-transparent.svg" alt="">
        </div>
    </div>
    <div class="task">
        <p>${title}</p>
    </div>
    <div class="operations">
        <div>
            <img class="edit" onmouseover="bluePencil()" onmouseout="normalPencil()" src="assets/pencil-blue.svg" alt="">
            <img class="delete" onclick="Delete()" onmouseover="redBin()" onmouseout="normalBin()" src="assets/delete-red.svg" alt="">
        </div>
    </div>`;
    tasks.appendChild(row[i]);
});
taskCross.addEventListener('click', () => {
    taskTitleInput.value = "";
    taskDescInput.value = "";
});

// To listen for row Events , Red bin, Blue Pencil, Tick
function redBin() {
    event.target.src = "assets/delete-red.svg";
}
function normalBin() {
    event.target.src = "assets/delete-red.svg";
}
function bluePencil() {
    event.target.src = "assets/pencil-blue.svg";
}
function normalPencil() {
    event.target.src = "assets/pencil-blue.svg";
}
function tickForDone() {
    event.target.src = "assets/tick.svg";
}
function noTickForDone() {
    event.target.src = "assets/tick-transparent.svg";
}

// For completion of task
let numOfCompletedTasks = 0; let numOfDailyTasks = 5;
function done() {
    event.target.parentNode.parentNode.parentNode.style.display = "none";
    numOfCompletedTasks++;
    if(numOfCompletedTasks == numOfDailyTasks) {
        const successBtn = document.querySelector('.success-btn');
        successBtn.click();
    }
}
// To delete Task
function Delete() {
    let a = confirm("Are you sure you want to delete this task?");
    if(a == true) {
        event.target.parentNode.parentNode.parentNode.style.display = "none";
    }
}
// For Dark Mode
const toggleInput = document.querySelector('.dark-mode-switch');
const active = document.querySelector('.active');
const bin = document.querySelector('.delete');
console.log(active);
toggleInput.addEventListener('click', () => {
    if(toggleInput.checked == true) {
        body.style.backgroundColor = "#171717";
        body.style.color = "white";
        sideMenu.style.backgroundColor = "#0D0D0D";
        active.style.backgroundColor = "#171717";
        bin.src = "assets/delete-red.svg";
    }else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        sideMenu.style.backgroundColor = "rgb(245, 245, 245)";
        active.style.backgroundColor = "#e9e9e9";
    }
});


