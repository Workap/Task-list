import { addTask } from "./modules/addTask.js";
import { readTask } from "./modules/readTask.js";
readTask();
const btnTask = document.querySelector("[data-from-btn]");

btnTask.addEventListener("click", addTask);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask;
  }
});
// readTask();
