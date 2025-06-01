function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remover";
  removeBtn.className = "btn btn-danger btn-sm ms-2";
  removeBtn.onclick = function () {
    li.parentNode.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(removeBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}