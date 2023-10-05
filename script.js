const operButtons = document.querySelectorAll(".oper_button");

let beforeNumber = null,
    currentNumber = "",
    currentOperator = null;

operButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
        const display = document.querySelector(".result_text");
        const id = e.target.id;

        if (id === "clear") {
            currentNumber = "";
            beforeNumber = null;
            currentOperator = null;
            display.innerText = 0;
        } else if (id === "toggle") {
            currentNumber = currentNumber * -1;
            display.innerText = currentNumber;
        } else if (id === "%") {
            currentNumber = currentNumber * 0.01;
            display.innerText = currentNumber;
        } else if (id === "left") {
            currentNumber = currentNumber.slice(0, -1);
            display.innerText = currentNumber;
        } else if (id === "+" || id === "-" || id === "x" || id === "divide") {
            currentOperator = id;
            beforeNumber = display.innerText;
            currentNumber = "";
        } else if (id === "=") {
            if (currentOperator === "+") {
                currentNumber =
                    parseFloat(beforeNumber) + parseFloat(currentNumber);
            }
            if (currentOperator === "-") {
                currentNumber =
                    parseFloat(beforeNumber) - parseFloat(currentNumber);
            }
            if (currentOperator === "x") {
                currentNumber =
                    parseFloat(beforeNumber) * parseFloat(currentNumber);
            }
            if (currentOperator === "divide") {
                currentNumber =
                    parseFloat(beforeNumber) / parseFloat(currentNumber);
            }
            display.innerText = currentNumber;
            currentOperator = null;
        } else if (id === ".") {
            if (!currentNumber.includes(".")) {
                currentNumber = currentNumber + ".";
            }
            display.innerText = currentNumber;
        } else {
            currentNumber = currentNumber + id;
            display.innerText = currentNumber;
        }
    });
});
