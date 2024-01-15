document.addEventListener("DOMContentLoaded", function() {
  const display = document.getElementById("display");
  const keys = document.querySelectorAll("button");

  let currentInput = "";
  let firstValue = null;
  let operator = null;
  let awaitingNextInput = false;

  keys.forEach(key => {
    key.addEventListener("click", function() {
      const keyValue = this.value;

      if (keyValue === "+" || keyValue === "-" || keyValue === "*" || keyValue === "/") {
        if (awaitingNextInput) {
          operator = keyValue;
        } else {
          firstValue = parseFloat(currentInput);
          operator = keyValue;
          awaitingNextInput = true;
        }
      } else if (keyValue === "=") {
        const secondValue = parseFloat(currentInput);
        let result;

        switch (operator) {
          case "+":
            result = firstValue + secondValue;
            break;
          case "-":
            result = firstValue - secondValue;
            break;
          case "*":
            result = firstValue * secondValue;
            break;
          case "/":
            result = firstValue / secondValue;
            break;
          default:
            break;
        }

        display.value = result;
        currentInput = result.toString();
        awaitingNextInput = false;
        firstValue = null;
        operator = null;
      } else if (keyValue === "C") {
        display.value = "";
        currentInput = "";
        firstValue = null;
        operator = null;
        awaitingNextInput = false;
      } else {
        if (awaitingNextInput) {
          display.value = keyValue;
          currentInput = keyValue;
          awaitingNextInput = false;
        } else {
          display.value += keyValue;
          currentInput += keyValue;
        }
      }
    });
  });
});