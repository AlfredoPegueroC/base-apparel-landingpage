const btn = document.querySelector(".btn");
const input = document.querySelector("#email");
const form = document.querySelector("#form");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!input.value || !emailRegex.test(input.value)) {
    form.classList.add("error");
    input.classList.add("error");
  }
});
input.addEventListener("focus", () => form.classList.remove("error"));
