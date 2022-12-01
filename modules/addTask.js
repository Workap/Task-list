import deleteBtn from "./deleteBtn.js";
import ckeckComplete from "./checkComplete.js";

const addTask = (evento) => {
  const lista = document.querySelector("[data-list]");
  const task = createTask(evento);
  lista.appendChild(task);
};

const taskList = JSON.parse(localStorage.getItem("task")) || [];


const createTask = (e) => {
  e.preventDefault();
  console.log(taskList);
  // Calls
  const calendar = document.querySelector("[data-from-date]");
  const input = document.querySelector("[data-from-input]");
  const dateElement = document.createElement("span");
  //Formatos
  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");
  if (dateFormat == "Invalid date") {
    dateElement.innerHTML = " ";
  } else {
    dateElement.innerHTML = dateFormat;
  }

  const taskObj = {
    value,
    dateFormat,
  };

  taskList.push(taskObj);

  localStorage.setItem("task", JSON.stringify(taskList));

  // Add card
  if (input.value != "") {
    const task = document.createElement("li");
    task.classList.add("card");
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = input.value;
    taskContent.appendChild(ckeckComplete());
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteBtn());
    input.value = " ";
    return task;
  }
};

export { addTask }