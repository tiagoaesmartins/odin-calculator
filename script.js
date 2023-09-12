let firstNumber = "";
let operator = "";
let secondNumber = "";
let result = "";

const screen = document.querySelector(".screen");

function updateScreen() {
    if (operator === "") {
      screen.textContent = firstNumber;
    } else if (secondNumber === "" && operator !== "") {
      screen.textContent = "";
    } else if (secondNumber === "0" && operator === "/") {
        screen.textContent = "Can't be done, mate. Click C!";
    } else {
      screen.textContent = secondNumber;
    };
  };
  

function clearScreen() {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    result = "";
    updateScreen();
}

function operate() {
    let tempResult;
    switch (operator) {
      case "+":
        tempResult = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case "-":
        tempResult = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case "x":
        tempResult = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case "/":
        if(secondNumber == "0") {
        updateScreen();
        };
        tempResult = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
      default:
        tempResult = "";
    };

    result = (tempResult % 1 !== 0) ? tempResult.toFixed(2) : String(tempResult);
    firstNumber = result;
    operator = "";
    secondNumber = "";
  };

document.querySelectorAll(".btn-num").forEach(button => {
    button.addEventListener("click", function() {
    if (operator === "") {
        firstNumber += this.textContent;
    } else {
        secondNumber += this.textContent;
    };
    updateScreen();
    });
});

document.querySelectorAll(".btn-op").forEach(button => {
    button.addEventListener("click", function() {
    if (firstNumber !== "" && secondNumber !== "") {
        operate();
    };
    operator = this.textContent;
    updateScreen();
    });
});

document.getElementById("equal").addEventListener("click", function() {
    if (firstNumber !== "" && secondNumber !== "") {
    operate();
    screen.textContent = result;
    };
});

document.getElementById("clear").addEventListener("click", function() {
    clearScreen();
});

