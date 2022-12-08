import { createTask } from "./addTask.js";
import { uniqueDates, datesOrder } from "../services/date.js";
import dateElement from "./dateElement.js";

const readTask = () => {
  const lista = document.querySelector("[data-list]");

  const taskList = JSON.parse(localStorage.getItem("task")) || [];
  const dates = uniqueDates(taskList);
  datesOrder(dates);

  dates.forEach((date) => {
    const dateMoment = moment(date, "DD/MM/YYYY");

    lista.appendChild(dateElement(date));
    taskList.forEach((task) => {
      const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
      const diff = dateMoment.diff(taskDate);

      if (diff === 0) {
        lista.appendChild(createTask(task));
      }
    });
  });
};
export { readTask };
