let input = document.querySelector("form");
let checkBox = document.querySelectorAll(".task input:first-of-type");
let tasksName = document.querySelectorAll(".task p");
let tasks = document.querySelectorAll('.task');
let deleteButton = document.querySelectorAll('.delete');

input.onsubmit = ((e) => {
    e.preventDefault();
    const inputInformation = e.target.elements;
    const taskName = inputInformation[0].value;
    inputInformation[0].value = '';
    addTask(taskName,e);
});


function addTask(taskName,e) {
    e.preventDefault();
    document.querySelector(".tasks ").innerHTML += `
    <div class="task">
    <input type="checkbox" name="task-name">
        <p > ${taskName}</p>
        <input type="button" value='delete' class = "delete">
    
    
</div>
    `;
    tasksName = document.querySelectorAll(".task p");
    checkBox = document.querySelectorAll(".task input:first-of-type");
    tasks = document.querySelectorAll('.task');
    deleteButton = document.querySelectorAll('.delete');
    console.log(tasks.length + ' '+ checkBox.length);
    console.log(checkBox[0]);
    for (let i = 0; i < tasks.length; i++) {
        checkBox[i].onclick = ((e) => {
           
            ifChecked(i);
        });

        deleteButton[i].onclick =((e)=>{
            e.preventDefault();
            deleteTask(i);
        });

    }
}



function ifChecked(i) {

    if (checkBox[i].checked) {

        tasksName[i].classList.add("line-through");


    }
    else {
        tasksName[i].classList.remove("line-through");
    }
}

function deleteTask (i){
    const task = tasks[i];
    task.parentNode.removeChild(task);
}

