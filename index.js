import { addTask } from "./modules/addTask.js";

const btnTask = document.querySelector("[data-from-btn]");

btnTask.addEventListener("click", addTask);
