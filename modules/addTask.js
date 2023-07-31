import deleteBtn from "./deleteBtn.js";
import ckeckComplete from "./checkComplete.js";
import { readTask } from "./readTask.js";
import { uniqueDates } from "../services/date.js";

const addTask = (evento) => {
  evento.preventDefault();
  // Calls
  const lista = document.querySelector("[data-list]");
  const input = document.querySelector("[data-from-input]");
  const calendar = document.querySelector("[data-from-date]");
  const value = input.value;
  const date = calendar.value;
  let dateFormat = moment(date).format("DD/MM/YYYY");
  if (value === "") {
    return;
  }

  if (date === "") {
    dateFormat = moment(Date()).format("DD/MM/YYYY");
  }

  input.value = "";
  calendar.value = "";
  lista.innerHTML = "";

  const complete = false;

  const taskObj = {
    value,
    dateFormat,
    complete,
    id: uuid.v4(),
  };
  const taskList = JSON.parse(localStorage.getItem("task")) || [];
  taskList.push(taskObj);
  localStorage.setItem("task", JSON.stringify(taskList));

  readTask();
};
const createTask = ({ value, dateFormat, complete, id }) => {
  const task = document.createElement("li");
  task.classList.add("card");

  const taskContent = document.createElement("div");

  const check = ckeckComplete(id);

  if (complete) {
    check.classList.toggle("fas");
    check.classList.toggle("completeIcon");
    check.classList.toggle("far");
  }

  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(check);
  taskContent.appendChild(titleTask);

  const dateElement = document.createElement("span");

  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteBtn(id));
  return task;
};

export { addTask, createTask };
