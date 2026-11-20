const input = document.getElementById("input");
const list = document.getElementById("items");
const storageKey = "list";

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
    saveList();
}

function removeTask(idx){
    tasks.splice(idx, 1);
    renderTask(); 
    saveList();
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

function loadList(){
    const stringList = localStorage.getItem(storageKey);
    if(stringList) tasks = JSON.parse(stringList);
    renderTask();
}

function saveList(){
    const stringList = JSON.stringify(tasks);
    localStorage.setItem(storageKey, stringList);
}

document.addEventListener("DOMContentLoaded", loadList);

document.addEventListener("keydown", () => {
    if(event.key == "Enter") addTask();
});