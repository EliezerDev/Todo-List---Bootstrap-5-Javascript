const form = document.querySelector("form");
const inputUser = document.getElementById("input-user");
const listGroup = document.querySelector(".list-group");

form.addEventListener("submit", function (event) {

  listGroup.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <h3>${inputUser.value}</h3> <span class="fs-3"><i class="bi bi-x-square-fill text-danger" id="delete-btn"></i></span>
    </li>
  `

  inputUser.value = "";

  event.preventDefault();
});

listGroup.addEventListener("click", function (event) {
  if (event.target.id == "delete-btn") {
    event.target.parentElement.parentElement.remove();
  }
});