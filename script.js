const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";
    let resetNext = false;

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.textContent;

        if (button.classList.contains("clear")) {
          currentInput = "";
          display.textContent = "0";
          return;
        }

        if (button.classList.contains("delete")) {
          currentInput = currentInput.slice(0, -1);
          display.textContent = currentInput || "0";
          return;
        }

        if (value === "=") {
          try {
            currentInput = eval(currentInput).toString();
          } catch {
            currentInput = "Error";
          }
          display.textContent = currentInput;
          resetNext = true;
          return;
        }

        if (resetNext) {
          currentInput = "";
          resetNext = false;
        }

        currentInput += value;
        display.textContent = currentInput;
      });
    });