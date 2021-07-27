const body = document.querySelector("body");

// Fonts links
const fonts = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Knewave&display=swap" rel="stylesheet">
`;

// Inyecting the links into the head tag
document.head.insertAdjacentHTML("beforeend", fonts);

// Layout elements
const title = document.createElement("h1");
const form = document.createElement("form");
const input = document.createElement("input");
const small = document.createElement("small");

// Styles
body.style.boxSizing = "border-box";
body.style.background = "#222";
body.style.color = "#f3f3f3";
body.style.height = "100vh";
body.style.width = "100vw";
body.style.padding = "0 10%";
body.style.textAlign = "center";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";

// Title
title.innerHTML = "Todos app";
title.style.color = "#FF8066";
title.style.fontSize = "3rem";
title.style.fontFamily = "Knewave";
title.style.marginTop = "2em";

// Form
form.style.width = "90%";
form.style.display = "flex";
form.style.alignItems = "center";
form.style.minWidth = "250px";
form.style.maxWidth = "500px";
form.style.minHeight = "40px";
form.style.height = "auto";
form.style.background = "#fefefe";
form.style.margin = "0 auto";
form.style.padding = ".5em 0";
form.style.borderRadius = "5px";

// Input
input.style.width = "90%";
input.style.color = "#333";
input.style.height = "auto";
input.style.fontFamily = "Arial";
input.style.border = "none";
input.style.outline = "none";
input.style.marginLeft = "20px";
input.style.fontSize = "1.5em";

// Small
small.innerHTML = "Left click toogle complete/uncomplete.";
small.style.color = "#FF8066";
small.style.fontSize = "1.3em";
small.style.fontFamily = "Arial";
small.style.marginTop = "2em";

// Inserting elements to the DOM
body.appendChild(title);
body.appendChild(form);
form.appendChild(input);
body.appendChild(small);

// Functions

const createTodo = (task) => {
  // Div creation
  const todo = document.createElement("div");
  const todoText = document.createElement("span");
  const closeTodo = document.createElement("button");

  // Just to grab them with the clicks
  todoText.classList.add("text");
  closeTodo.classList.add("btn");

  styleTodos(todo, closeTodo);

  // Insert new todo
  todoText.textContent = task;
  todo.appendChild(todoText);
  todo.appendChild(closeTodo);
  form.insertAdjacentElement("afterend", todo);

  // Reset input
  input.value = "";
};

const styleTodos = (todo, close) => {
  todo.style.width = "90%";
  todo.style.color = "#333";
  todo.style.minWidth = "250px";
  todo.style.maxWidth = "500px";
  todo.style.minHeight = "40px";
  todo.style.height = "auto";
  todo.style.display = "flex";
  todo.style.justifyContent = "space-between";
  todo.style.alignItems = "center";
  todo.style.background = "#fefefe";
  todo.style.padding = "1em";
  todo.style.border = "none";
  todo.style.borderRadius = "5px";
  todo.style.outline = "none";
  todo.style.fontSize = "1.5em";
  todo.style.textAlign = "left";
  todo.style.margin = "10px auto 0";
  todo.style.boxSizing = "border-box";

  // Close btn
  close.innerHTML = "x";
  close.style.fontSize = "14px";
  close.style.background = "transparent";
  close.style.border = "none";
  close.style.cursor = "pointer";
};

const todoToggle = (todo) => {
  if (
    todo.style.textDecoration === "" ||
    todo.style.textDecoration === "none"
  ) {
    todo.style.textDecoration = "line-through";
    todo.style.color = "#FF8066";
    todo.closest("div").style.border = "2px solid #FF8066";
  } else if (todo.style.textDecoration === "line-through") {
    todo.style.textDecoration = "none";
    todo.style.color = "#FF8066";
    todo.closest("div").style.border = "none";
  }
};

const deleteTodo = (button) => {
  button.closest("div").remove();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createTodo(input.value);
});

body.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    deleteTodo(e.target);
  }

  if (e.target.classList.contains("text")) {
    todoToggle(e.target);
  }
});
