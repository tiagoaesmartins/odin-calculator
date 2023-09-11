const add = (sum1, sum2) => {
    return sum1 + sum2;
};

const subtract = (sub1, sub2) => {
    return sub1 - sub2;
};

const multiply = (times1, times2) => {
    return times1 * times2;
};

const divide = (div1, div2) => {

    if(div2 === 0) {
        return "You think you're so clever, huh?";
    } else {
        return div1 / div2;
    };
};

let firstNum = 0;
let secondNum = 0;
let operator = "";

const operate = (num1, num2, op) => {
    if (op == "+") {
        let addition = add(num1, num2);
        num1 = addition;
        return num1;
    } else if (op == "-") {
        let subtraction = subtract(num1, num2);
        num1 = subtraction;
        return num1;
    } else if (op == "*") {
        let multiplication = multiply(num1, num2);
        num1 = multiplication;
        return num1;
    } else if (op == "/") {
        let division = divide(num1, num2);
        num1 = division;
        return num1;
    };

    
}

console.log(operate(0, 3, "/"))