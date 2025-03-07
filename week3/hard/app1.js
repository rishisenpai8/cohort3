const draggables = document.querySelectorAll('li')
const container = document.querySelectorAll('.item')

//"New todo here"
const taskInputBtn = document.getElementById('todo-btn')
const taskInput = document.getElementById('todo-input')
const taskList = document.getElementById('todo-list')
//"Active variables"
const activeInputBtn = document.getElementById('active-btn')
const activeInput = document.getElementById('active-input')
const activeList = document.getElementById('active-list')
//"New todo here"
const progressInputBtn = document.getElementById('progress-btn')
const progressInput = document.getElementById('progress-input')
const progressList = document.getElementById('progress-list')
//"New todo here"
const completeInputBtn = document.getElementById('complete-btn')
const completeInput = document.getElementById('complete-input')
const completeList = document.getElementById('complete-list')

document.querySelector('.container').addEventListener('dblclick', (e) => {
    if (e.target.tagName === 'LI' || e.target.closest('li')) {
        e.target.closest('li').remove();
    }
})

//Adding todo To "New todo Here"
taskInputBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {

        const newLi = document.createElement('li');
        newLi.textContent = taskText;
        newLi.draggable = true;

        taskList.insertBefore(newLi, taskList.lastChild)

        taskInput.value = '';
        makeDraggable(newLi);
    }
})

//Adding todo To "Active"
activeInputBtn.addEventListener('click', () => {
    const activeText = activeInput.value.trim();

    if (activeText !== '') {

        const newLi = document.createElement('li');
        newLi.textContent = activeText;
        newLi.draggable = true;

        activeList.insertBefore(newLi, activeList.lastChild)

        activeInput.value = '';
        makeDraggable(newLi);
    }
})
//Adding todo To "in Progress"
progressInputBtn.addEventListener('click', () => {
    const progressText = progressInput.value.trim();

    if (progressText !== '') {

        const newLi = document.createElement('li');
        newLi.textContent = progressText;
        newLi.draggable = true;

        progressList.insertBefore(newLi, progressList.lastChild)

        progressInput.value = '';
        makeDraggable(newLi);
    }
})

//Adding todo To "completed"
completeInputBtn.addEventListener('click', () => {
    const completeText = completeInput.value.trim();

    if (completeText !== '') {

        const newLi = document.createElement('li');
        newLi.textContent = completeText;
        newLi.draggable = true;

        completeList.insertBefore(newLi, completeList.lastChild)

        completeInput.value = '';
        makeDraggable(newLi);
    }
})

//Functionality to add task when pressed 'Enter' key
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        taskInputBtn.click(); // Trigger the button click event
    }
});
activeInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        activeInputBtn.click(); // Trigger the button click event
    }
});
progressInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        progressInputBtn.click(); // Trigger the button click event
    }
});
completeInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        completeInputBtn.click(); // Trigger the button click event
    }
});


//dragging logic 
let draggedItem = null;

document.addEventListener('dragstart', (e) => {
    if (e.target.tagName = 'LI') {
        draggedItem = e.target
        e.target.classList.add('dragging')
        console.log('dragstart');
    }
})
document.addEventListener('dragend', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.remove('dragging')
        console.log('dragend');

    }
})

// Allow dropping inside any div with class 'item'
document.querySelectorAll(".item").forEach((box) => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault(); // Necessary to allow dropping
    });

    box.addEventListener("drop", (e) => {
        e.preventDefault();
        if (draggedItem) {
            box.querySelector("ul").appendChild(draggedItem); // Move item into the new div's <ul>
            draggedItem = null;
        }
    });
});