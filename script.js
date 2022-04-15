// math functions

function add(...numsToAdd) {
    return numsToAdd.reduce((add1, add2) => {
        return add1 + add2;
    });
};

function subtract(...numsToSub) {
    return numsToSub.reduce((sub1, sub2) => {
        return sub1 - sub2;
    });
};

function multiply(...numsToMult) {
    return numsToMult.reduce((mult1, mult2) => {
        return mult1 * mult2;
    });
};

function divide(...numsToDiv) {
    return numsToDiv.reduce((div1, div2) => {
        return div1 / div2;
    });
};

function operate(operator, num1, num2) {
var total;
    if (operator == "+") {
        return total = add(+num1, +num2);
    } else if (operator == "-") {
        return total = subtract(+num1, +num2);
    } else if (operator == "x" || operator == "*") {
        return total = multiply(+num1, +num2);
    } else if (operator == "/") {
        return total = divide(+num1, +num2);
    } else {
        return "error!";
    }
};

// button functions to output numbers in the display

const display = document.querySelector(".display");
display.textContent = "";

const btnback = document.querySelector(".calcbuttonback");
const btnclr = document.querySelector(".calcbuttonclr");
const btn1 = document.querySelector(".calcbutton1");
const btn2 = document.querySelector(".calcbutton2");
const btn3 = document.querySelector(".calcbutton3");
const btn4 = document.querySelector(".calcbutton4");
const btn5 = document.querySelector(".calcbutton5");
const btn6 = document.querySelector(".calcbutton6");
const btn7 = document.querySelector(".calcbutton7");
const btn8 = document.querySelector(".calcbutton8");
const btn9 = document.querySelector(".calcbutton9");
const btn0 = document.querySelector(".calcbutton0");
const btnadd = document.querySelector(".calcbuttonadd");
const btnsub = document.querySelector(".calcbuttonsub");
const btnmult = document.querySelector(".calcbuttonmult");
const btndec = document.querySelector(".calcbuttondec");
const btndiv = document.querySelector(".calcbuttondiv");
const btnequal = document.querySelector(".calcbuttonequal");

btn1.addEventListener("click", buttonDisplay);
btn2.addEventListener("click", buttonDisplay);
btn3.addEventListener("click", buttonDisplay);
btn4.addEventListener("click", buttonDisplay);
btn5.addEventListener("click", buttonDisplay);
btn6.addEventListener("click", buttonDisplay);
btn7.addEventListener("click", buttonDisplay);
btn8.addEventListener("click", buttonDisplay);
btn9.addEventListener("click", buttonDisplay);
btn0.addEventListener("click", buttonDisplay);
btnadd.addEventListener("click", buttonDisplay);
btnsub.addEventListener("click", buttonDisplay);
btnmult.addEventListener("click", buttonDisplay);
btndec.addEventListener("click", buttonDisplay);
btndiv.addEventListener("click", buttonDisplay);
btnclr.addEventListener("click", buttonDisplay);

function buttonDisplay(e) {
    var buttonPressedDisplay = e.target.value;
    if (buttonPressedDisplay == 1) {
        document.querySelector(".display").textContent += 1;
    } else if (buttonPressedDisplay == 2) {
        document.querySelector(".display").textContent += 2;
    } else  if (buttonPressedDisplay == 3) {
        document.querySelector(".display").textContent += 3;
    } else if (buttonPressedDisplay == 4) {
        document.querySelector(".display").textContent += 4;
    } else if (buttonPressedDisplay == 5) {
        document.querySelector(".display").textContent += 5;
    } else if (buttonPressedDisplay == 6) {
        document.querySelector(".display").textContent += 6;
    } else if (buttonPressedDisplay == 7) {
        document.querySelector(".display").textContent += 7;
    } else if (buttonPressedDisplay == 8) {
        document.querySelector(".display").textContent += 8;
    } else if (buttonPressedDisplay == 9) {
        document.querySelector(".display").textContent += 9;
    } else if (buttonPressedDisplay == 0) {
        document.querySelector(".display").textContent += 0;
    } else if (buttonPressedDisplay == "+") {
        document.querySelector(".display").textContent += "+";
    } else if (buttonPressedDisplay == "-") {
        document.querySelector(".display").textContent += "-";
    } else if (buttonPressedDisplay == "x") {
        document.querySelector(".display").textContent += "*";
    } else if (buttonPressedDisplay == "/") {
        document.querySelector(".display").textContent += "\u00f7";
    } else if (buttonPressedDisplay == ".") {
        document.querySelector(".display").textContent += ".";
    } else if (buttonPressedDisplay == "clear") {
        document.querySelector(".display").textContent = "";
    }
};

// the calculations... first time a number is entered, it is assigned to the firstNum variable, first operator is the firstOp, second number is secondNum. If the user wants to keep calculating, these variables are all reassigned

let firstNum = [];
let secondNum = [];
let firstOp;

btn1.addEventListener("click", calculate);
btn2.addEventListener("click", calculate);
btn3.addEventListener("click", calculate);
btn4.addEventListener("click", calculate);
btn5.addEventListener("click", calculate);
btn6.addEventListener("click", calculate);
btn7.addEventListener("click", calculate);
btn8.addEventListener("click", calculate);
btn9.addEventListener("click", calculate);
btn0.addEventListener("click", calculate);
btnadd.addEventListener("click", calculate);
btnsub.addEventListener("click", calculate);
btnmult.addEventListener("click", calculate);
btndiv.addEventListener("click", calculate);
btndec.addEventListener("click", calculate);
btnequal.addEventListener("click", pressEquals);
btnclr.addEventListener("click", pressClear);

function calculate(e) {
    if (e.target.value == "+" || e.target.value == "/" || e.target.value == "-" || e.target.value == "x") {
        if (firstOp == undefined) {
            firstOp = e.target.value;
            document.querySelector(".calcbuttondec").disabled = false;
//            console.log(firstOp);
        } else if (firstOp != undefined) {
            var firstTotal = operate(firstOp, firstNum, secondNum);
            firstNum = firstTotal;
            secondNum = "";
            firstOp = e.target.value;
        }
    } else if (e.target.value == "1" || e.target.value == "2" || e.target.value == "3" || e.target.value == "4" || e.target.value == "5" || e.target.value == "6" || e.target.value == "7" || e.target.value == "8" || e.target.value == "9" || e.target.value == "0" || e.target.value == ".") {
        if (firstOp == undefined) {
            firstNum += e.target.value;
//            console.log(firstNum);
        } else if (firstOp != undefined) {
            secondNum += e.target.value;
//            console.log(secondNum);
        }
    }
};

// when equals is pressed, the three variables are entered as parameters to the function which will calculate the arithmetic, and then output it in the display area

function pressEquals() {
    var equalsDoesCalc = operate(firstOp, firstNum, secondNum);
    if (secondNum == '') {
        document.querySelector(".display").textContent = "error!";
    } else if (secondNum == 0 && firstOp == "/") {
        document.querySelector(".display").textContent = "can't compute!";
    } else if (equalsDoesCalc % 1 != 0) {
        document.querySelector(".display").textContent = Math.round(equalsDoesCalc * 100) / 100;        
    } else {
        document.querySelector(".display").textContent = equalsDoesCalc;
        console.log(equalsDoesCalc);
    }
};

// coding to disable decimal button so that user doesn't add a shit ton of decimals in one number

btndec.addEventListener("click", disableDecButton);

function disableDecButton() {
    document.querySelector(".calcbuttondec").disabled = true;
};

// pressing clear resets the variables

function pressClear() {
    firstNum = "";
    secondNum = "";
    firstOp = undefined;
    document.querySelector(".calcbuttondec").disabled = false;
};

// backspace functionality, applies to numbers only

btnback.addEventListener("click", goBack);

function goBack() {
    if (firstNum.length =! 0 && firstOp == undefined && secondNum.length == 0) {
        let newFirstNum = firstNum.slice(0, firstNum.length -1);
        firstNum = newFirstNum;
        console.log(newFirstNum);
        document.querySelector(".display").textContent = firstNum;
    } else if (secondNum.length =! 0) {
        let newSecondNum = secondNum.slice(0, secondNum.length -1);
        secondNum = newSecondNum;
        console.log(newSecondNum);
        document.querySelector(".display").textContent = `${firstNum}${firstOp}${secondNum}`;
    }
}

// keyboard support for calculations

document.addEventListener("keydown", logkey);

function logkey(e) {
    if (e.key == "Escape") {
        pressClear();
    } else if (e.key == "+" || e.key == "/" || e.key == "-" || e.key == "*") {
        if (firstOp == undefined) {
            firstOp = e.key;
            document.querySelector(".calcbuttondec").disabled = false;
            console.log(firstOp);
        } else if (firstOp != undefined) {
            var firstTotal = operate(firstOp, firstNum, secondNum);
            firstNum = firstTotal;
            secondNum = "";
            firstOp = e.key;
        }
    } else if (e.key == 0 || e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5 || e.key == 6 || e.key == 7 || e.key == 8 || e.key == 9 || e.key == ".") {
        if (firstOp == undefined) {
            firstNum += e.key;
            console.log(firstNum);
        } else if (firstOp != undefined) {
            secondNum += e.key;
            console.log(secondNum);
        }
    } else if (e.key == "Enter" || e.key == "=") {
        var enterDoesCalc = operate(firstOp, firstNum, secondNum);
        if (secondNum == '') {
            document.querySelector(".display").textContent = "error!";
        } else if (secondNum == 0 && firstOp == "/") {
            document.querySelector(".display").textContent = "can't compute!";
        } else if (enterDoesCalc % 1 != 0) {
            document.querySelector(".display").textContent = Math.round(enterDoesCalc * 100) / 100;        
        } else {
            document.querySelector(".display").textContent = enterDoesCalc;
            console.log(enterDoesCalc);
        }
    } else if (e.key == "Backspace") {
        goBack();
    }
}

// keyboard display coding

document.addEventListener("keydown", displaykey);

function displaykey(e) {
    if (e.key == 0 || e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5 || e.key == 6 || e.key == 7 || e.key == 8 || e.key == 9 || e.key == "+" || e.key == "-" || e.key == "/" || e.key == "*" || e.key == ".")  {
        document.querySelector(".display").textContent += `${e.key}`;
    } else if (e.key == "Escape") {
        document.querySelector(".display").textContent = "";
    }
}