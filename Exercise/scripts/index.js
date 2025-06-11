const myForm = document.getElementById("todoForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const whatToDoMissingInput = document.getElementById("todoInput");
  const whatToDoMissing = whatToDoMissingInput.value;

  const thingsToDo = document.createElement("li");
  thingsToDo.classList.add("itemList");
  thingsToDo.innerHTML = `<span>${whatToDoMissing}</span>
  <button onclick="deleteList(event)">ELIMINA</button>`;

  thingsToDo.addEventListener("click", toggleStrikeThrough);

  const container = document.getElementById("todoList");
  container.appendChild(thingsToDo);
  myForm.reset();
});

const deleteList = function (e) {
  e.target.parentElement.remove();
};

const toggleStrikeThrough = function (e) {
  e.currentTarget.classList.toggle("completed");
};
