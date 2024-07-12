let todo = [];

function populateTodoList(){
    let listTag = document.getElementById('list');
    listTag.innerHTML = ''; let command = '<li><span>ID</span>Name<span>Deadline</span><i class="nocolor"></i></li>';
    for(i=0;i<todo.length;i++){
        let task = todo[i];
        let expr = `<li><span> ${task[0]} </span> ${task[1]} <span> ${task[2]} </span><i onclick="deleteTask(${task[0]})">X</i></li>`;
        command += expr;
    }
    listTag.innerHTML = command;
}

function addTask(){
    let name = document.getElementById('name').value;
    let dl = document.getElementById('date').value;
    let newTask = new Array(3); 
    newTask[0] = todo.length==0?0:todo[todo.length-1][0]+1; newTask[1] = name,newTask[2] = dl;
    todo.push(newTask);
    populateTodoList();
}

function deleteTask(id){
    console.log(id);
    for(i=0;i<todo.length;i++){
        console.log(todo[i][0]);
        if(todo[i][0]==id) {
            todo.splice(i,1);
            populateTodoList();
            return;
        }
    }
}