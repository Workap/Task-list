const ckeckComplete = (id) => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", (evento) => completeTask(evento, id));
  return i;
};

const completeTask = (e, id) => {
  const element = e.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
  const tasks = JSON.parse(localStorage.getItem("task"));
  const index = tasks.findIndex((item) => item.id === id);
  tasks[index]["complete"] = !tasks[index]["complete"];
  localStorage.setItem("task", JSON.stringify(tasks));
};

export default ckeckComplete;
