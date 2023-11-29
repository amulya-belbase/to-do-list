let todo_list = [];

function addTask() {
  const userTask = document.getElementById("task_input");
  if (userTask.value === "") {
    alert("Please enter a task!!!");
  } else {
    const taskObj = {
      taskName: userTask.value,
      taskStatus: false,
    };
    todo_list.push(taskObj);
    console.log(todo_list);
    userTask.value = "";

    updateTasks();
  }
}

function updateTasks() {
  const addToDo = document.getElementById("usertasks");
  const updateToDo = document.getElementById("completed_task_list");

  addToDo.innerHTML = "";
  updateToDo.innerHTML = "";

  for (let i = 0; i <= todo_list.length; i++) {
    // creates a todo job div
    const job = document.createElement("div");
    job.setAttribute("class", "job_class");
    job.innerHTML = todo_list[i].taskName;

    // creates a checkbox div
    const check_box = document.createElement("div");
    check_box.setAttribute("name", i);
    // console.log(check_box)
    check_box.onclick = () => toggleCheck(i, check_box);

    // creates a delete button
    const del_button = document.createElement("button");
    del_button.innerText = "Delete";
    del_button.setAttribute("class", "delete_button");
    del_button.onclick = () => deleteAction(i);

    if (todo_list[i].taskStatus) {
      // const done = document.createElement("p");
      // done.innerHTML = "Done";
      check_box.setAttribute("id", "status_check_true");
      job.appendChild(check_box);
      updateToDo.appendChild(job).appendChild(del_button);
    } else {
      // const done = document.createElement("p");
      // done.innerHTML = "Added";
      check_box.setAttribute("id", "status_check_false");
      job.appendChild(check_box);
      addToDo.appendChild(job).appendChild(del_button);
    }
  }
}

function toggleCheck(index) {
  todo_list[index].taskStatus = !todo_list[index].taskStatus;

  updateTasks();
}

function deleteAction(index) {
  let indexToRemove = index;
  todo_list.splice(indexToRemove, 1);
  updateTasks();
}
updateTasks();
