const input = document.getElementById("input");
const list = document.getElementById("items");

let tasks = [];

function addTask(){
    const value = input.value.trim();
    if(value == ""){
        input.value = "";
        return;
    }
    input.value = "";
    tasks.push(value);
    renderTask();
}

function removeTask(idx){
    tasks.splice(idx, 1);
    renderTask(); 
}

function renderTask(){
    list.innerHTML = null;
    for(let i=0; i<tasks.length; i++){
        const li = document.createElement("li");
        const p = document.createElement("p");
        const btn = document.createElement("button");
        p.className = "task-text";
        btn.className = "remove-btn";
        li.className = "item";
        p.style.marginRight = "10px";

        p.textContent = tasks[i];
        btn.textContent = "remove";
        btn.onclick = () => removeTask(i);

        li.appendChild(p);
        li.appendChild(btn);

        list.appendChild(li);
    }
}

document.addEventListener("DOMContentLoaded", renderTask);