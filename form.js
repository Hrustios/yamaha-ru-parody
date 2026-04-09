const form = document.getElementById("feedback-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "") {
    status.textContent = "Введите имя";
    status.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    status.textContent = "Введите корректный email";
    status.style.color = "red";
    return;
  }

  if (message === "") {
    status.textContent = "Введите сообщение";
    status.style.color = "red";
    return;
  }

  status.textContent = "Сообщение успешно отправлено!";
  status.style.color = "lightgreen";

  form.reset();
});
