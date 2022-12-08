import { addTask } from "./modules/addTask.js";
import { readTask } from "./modules/readTask.js";

const btnTask = document.querySelector("[data-from-btn]");

btnTask.addEventListener("click", addTask);
readTask();
