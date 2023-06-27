// const form = document.querySelector(".login-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const emailInput = form.elements.email;
//   const passwordInput = form.elements.password;
//   if (emailInput.value === "" || passwordInput.value === "") {
//     alert("Все поля должны быть заполнены.");
//     return;
//   }
//   const formData = {
//     email: emailInput.value,
//     password: passwordInput.value,
//   };
//   console.log(formData);
//   form.reset();
// });


const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = event.target.elements.email;
  const passwordInput = event.target.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Всі поля повинні бути заповнені.");
    return;
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(formData);
  event.target.reset();
});

