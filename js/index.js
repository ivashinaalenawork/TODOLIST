const inputElement = document.querySelector(".password");
const buttonElement = document.querySelector(".control");
const mailElement = document.querySelector(".input");
const logbuttonElement = document.querySelector(".button");
const MIN_INPUT_LENGTH = 10;

// текущее время
function showTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const formatHours = hours.toString().padStart(2, "0");
  const formatMinutes = minutes.toString().padStart(2, "0");
  const currentHours = formatHours + ":" + formatMinutes;
  document.querySelector(".time").textContent = currentHours;
}
setInterval(showTime, 1000);

/* // удаление строки по корзине
const element = document.querySelector(".deletebtn");
const parent = element.closest(".todo");
element.addEventListener("click", function () {
  parent.remove();
}); */

// console.log(document.querySelectorAll("#deletebtn"));
const allDeleteButton = document.querySelectorAll("#deletebtn");

const callback = (elem) => {
  const parent = elem.closest(".todo");
  elem.addEventListener("click", function () {
    parent.remove();
  });
};
allDeleteButton.forEach(callback);
// buttonElement.addEventListener("click", function () {
//   if (inputElement.type === "password") {
//     inputElement.type = "text";
//     buttonElement.classList.add("alena");
//   } else {
//     inputElement.type = "password";
//     buttonElement.classList.remove("alena");
//   }
// });
// logbuttonElement.addEventListener("click", () => {
//   alert(mailElement.value + " " + inputElement.value);
// });
// logbuttonElement.disabled = true;
// mailElement.addEventListener("input", (event) => {
//   checkValidForm();
// });

// inputElement.addEventListener("input", (event) => {
//   checkValidForm();
// });

() => {
  if (
    mailElement.value.length < MIN_INPUT_LENGTH ||
    inputElement.value.length < MIN_INPUT_LENGTH
  ) {
    logbuttonElement.disabled = true;
  } else {
    logbuttonElement.disabled = false;
  }
};

// ---------------------------------------
const svgElement = document.querySelector("#test");

svgElement.addEventListener("click", (event) => {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = "Hello World!";

  document.body.appendChild(modal);
});

// добавление новой задачи

/* newTodo.addEventListener("click", (event) => {
  const newTitle = document.createElement("div");
  newTitle.className = "dsffd";
  newTitle.innerHTML = "hello";
  document.main.appendChild(newTitle);
});
 */
const newTodo = document.querySelector(".add_button");
console.log(newTodo);

newTodo.addEventListener("click", (event) => {
  addForm();
});
function addForm() {
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Title");

  const subinput = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Subtitle");
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.textContent = "Отправить";
  form.appendChild(input);
  form.appendChild(subinput);
  form.appendChild(button);
  const todoList = document.querySelector(".todo_list");
  todoList.appendChild(form);
  document.body.appendChild(form);
}
button.addEventListener("click", (event) => {
  const newTitle = document.createElement("div");
  newTitle.className = ".todo";
});
