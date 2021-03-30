const inputUser = document.getElementById("input-user");
const listGroup = document.getElementById("list-group");
const form = document.querySelector("form");
let list_item = [];
const switchDarkMode = document.getElementById('dark-mode');

function renderTodo(item) {
  return listGroup.innerHTML += `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <h4>${item}</h4>
    <span class="fs-4 text-danger"><i class="bi bi-x-square-fill" id="remove"></i></span>
  </li>`;
}

// Local Storage
if (localStorage.getItem("TO DO ITEMS")) {
  const itemLocalStorage = JSON.parse(localStorage.getItem("TO DO ITEMS"));
  itemLocalStorage.forEach(function (itemTodo) {
    renderTodo(itemTodo);
    list_item.push(itemTodo);
  });
}


function manageLocalStorage(action, item) {
  switch (action) {
    case 'TAMBAH':
      list_item.push(item);
      break;
    case 'HAPUS':
      list_item = list_item.filter(function (todoItem) {
        return todoItem != item
      });
      break;
  }

  localStorage.setItem("TO DO ITEMS", JSON.stringify(list_item));
}

// Todo List
form.addEventListener("submit", function (event) {

  renderTodo(inputUser.value);

  // Menambahkan item baru ke local storage
  manageLocalStorage("TAMBAH", inputUser.value);

  inputUser.value = "";
  event.preventDefault();

});

listGroup.addEventListener("click", function (event) {
  if (event.target.id == "remove") {
    event.target.parentElement.parentElement.remove();
    manageLocalStorage("HAPUS", event.target.parentElement.parentElement.textContent.trim());
  }
});

// dark mode
switchDarkMode.addEventListener('change', function () {

  document.body.classList.toggle('darkMode');
  document.querySelector('.card').classList.toggle('darkMode');
  document.querySelector('.btn').classList.toggle('darkMode');
  switchDarkMode.classList.toggle('darkMode');

});