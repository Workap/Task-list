const deleteBtn = () => {
  const i = document.createElement("i");
  i.classList.add("fas", "fa-trash-alt", "icon", "trashIcon");
  i.addEventListener("click", deleteTask);
  return i;
};
const deleteTask = (e) => {
  const parent = e.path[1];
  parent.remove();
};

export default deleteBtn;