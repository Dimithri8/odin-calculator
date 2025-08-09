const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let userInput = "";
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "reset") {
      userInput = "";
      screen.textContent = "";
    } else if (button.value === "delete") {
      userInput = userInput.slice(0, -1);
      screen.textContent = userInput;
    } else if (button.value === "=") {
      try {
        userInput = math.evaluate(userInput).toString();
        screen.textContent = userInput;
      } catch (error) {
        screen.textContent = "Error";
        userInput = "";
      }
    } else {
      userInput += button.value;
      screen.textContent = userInput;
    }
  });
});
