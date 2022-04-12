// math functions

function add(...numsToAdd) {
    return numsToAdd.reduce((add1, add2) => {
        return add1 + add2;
    });
};
//console.log(add(10, 5));

function subtract(...numsToSub) {
    return numsToSub.reduce((sub1, sub2) => {
        return sub1 - sub2;
    });
};
//console.log(subtract(10, 5));

function multiply(...numsToMult) {
    return numsToMult.reduce((mult1, mult2) => {
        return mult1 * mult2;
    });
};
//console.log(multiply(10, 5));

function divide(...numsToDiv) {
    return numsToDiv.reduce((div1, div2) => {
        return div1 / div2;
    });
};
//console.log(divide(10, 5));

function operate(operator, num1, num2) {
var total;
    if (operator == "+") {
        return total = add(+num1, +num2);
    } else if (operator == "-") {
        return total = subtract(+num1, +num2);
    } else if (operator == "x") {
        return total = multiply(+num1, +num2);
    } else if (operator == "/") {
        return total = divide(+num1, +num2);
    } else {
        return "error!";
    }

};
//console.log(operate("/", 200, 2));

// button functions to output numbers in the display

const display = document.querySelector(".display");
display.textContent = "";

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
        document.querySelector(".display").textContent += "x";
    } else if (buttonPressedDisplay == "/") {
        document.querySelector(".display").textContent += "\u00f7";
    } else if (buttonPressedDisplay == ".") {
        document.querySelector(".display").textContent += ".";
    } else if (buttonPressedDisplay == "clear") {
        document.querySelector(".display").textContent = "";
    }
}

/* you can store the numbers and operators as name : value pairs in an object, but it includes a lot of manual work

let calculations = {}

function numberButton(e) {
    let storedNum = e.target.value;
    calculations.firstNum = storedNum;
}

function operatorButton(e) {
    let storedOperator = e.target.value;
    calculations.operator = storedOperator;
}

function numberButton2(e) {
    let storedNum2 = e.target.value;
    calculations.secondNum = storedNum2;
}
  
btn1.addEventListener("click", numberButton);
btn2.addEventListener("click", numberButton);
btn3.addEventListener("click", numberButton);
btn4.addEventListener("click", numberButton);
btn5.addEventListener("click", numberButton);
btn6.addEventListener("click", numberButton2);
btn7.addEventListener("click", numberButton2);
btn8.addEventListener("click", numberButton2);
btn9.addEventListener("click", numberButton2);
btn0.addEventListener("click", numberButton2);
btnadd.addEventListener("click", operatorButton);
btnsub.addEventListener("click", operatorButton);
btnmult.addEventListener("click", operatorButton);
btndiv.addEventListener("click", operatorButton);

calculate(calculations.operator, calculations.firstNum, calculations.secondNum);

*/

/*

// first time a number is inputted, it is assigned to the firstNum variable, first operator is the firstOp, second number is secondNum

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
btnequal.addEventListener("click", pressEquals);
btnclr.addEventListener("click", pressClear);

function calculate(e) {
    if (e.target.value == "+" || e.target.value == "/" || e.target.value == "-" || e.target.value == "x") {
        firstOp = e.target.value;
        console.log(firstOp);
    } else if (e.target.value == "1" || e.target.value == "2" || e.target.value == "3" || e.target.value == "4" || e.target.value == "5" || e.target.value == "6" || e.target.value == "7" || e.target.value == "8" || e.target.value == "9" || e.target.value == "0") {
        if (firstOp == undefined) {
            firstNum += e.target.value;
            console.log(firstNum);
        } else if (firstOp != undefined) {
            secondNum += e.target.value;
            console.log(secondNum);
        }
    }
}

// when equals is pressed, the three variables are entered as paraemters to the function which will calculate the arithmetic, and then output it in the display area

function pressEquals() {
    var equalsDoesCalc = operate(firstOp, firstNum, secondNum);
    console.log(equalsDoesCalc);
    document.querySelector(".display").textContent = equalsDoesCalc;
}

// and pressing clear will reset the variables

function pressClear() {
    firstNum = "";
    secondNum = "";
    firstOp = undefined;
}

*/

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
btnequal.addEventListener("click", pressEquals);
btnclr.addEventListener("click", pressClear);

function calculate(e) {
    if (e.target.value == "+" || e.target.value == "/" || e.target.value == "-" || e.target.value == "x") {
        if (firstOp == undefined) {
            firstOp = e.target.value;
        } else if (firstOp != undefined) {
            var firstTotal = operate(firstOp, firstNum, secondNum);
            firstNum = firstTotal;
            secondNum = "";
            firstOp = e.target.value;
        }    
    } else if (e.target.value == "1" || e.target.value == "2" || e.target.value == "3" || e.target.value == "4" || e.target.value == "5" || e.target.value == "6" || e.target.value == "7" || e.target.value == "8" || e.target.value == "9" || e.target.value == "0") {
        if (firstOp == undefined) {
            firstNum += e.target.value;
        } else if (firstOp != undefined) {
            secondNum += e.target.value;
        }
    }
}

function pressEquals() {
    var equalsDoesCalc = operate(firstOp, firstNum, secondNum);
    if (secondNum == '') {
        document.querySelector(".display").textContent = "error!";
    } else if (secondNum == 0 && firstOp == "/") {
        document.querySelector(".display").textContent = "can't compute!";
    } else if (equalsDoesCalc % 1 != 0) {
        document.querySelector(".display").textContent = Math.round(equalsDoesCalc * 100) / 100;        
        console.log(equalsDoesCalc);
    } else {
        document.querySelector(".display").textContent = equalsDoesCalc;
    }
}

function pressClear() {
    firstNum = "";
    secondNum = "";
    firstOp = undefined;
}

// other issues
// after a certain amount of characters (no more than 11) entered the calculator should stop accepting input