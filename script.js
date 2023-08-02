const form = document.querySelector("form");
const errorMsg = document.querySelector("#errorMsg");
const email = document.querySelector(".email");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!email.value.includes("@")) {
    console.log("hello", errorIcon);
    email.style.border = "2px solid hsl(0, 93%, 68%)";
    errorMsg.style.visibility = "visible";
    errorIcon.style.visibility = "visible";
  } else {
    email.value = "";
    email.style.border = "1px solid hsl(0, 36%, 70%)";
    errorMsg.style.visibility = "hidden";
    errorIcon.style.visibility = "hidden";
  }
});
