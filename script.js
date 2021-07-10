let operator; // initially defines operator for operating buttons;

function add(x, y) { // simple arithmetic functions
    return x+y;
}

function subtract(x, y) {
    return x-y;
}

function multiply(x, y) {
    return x*y;
}

function divide(x, y) {
    let solution = x/y;
    return solution.toFixed(2);
}

const screen = document.getElementById("screen"); // Sets initial calculator screen content to empty
screen.textContent = "";

const one = document.getElementById("one"); // Buttons changes screen content when clicked
one.addEventListener("click", function() {
    screen.textContent += "1";
})

const two = document.getElementById("two");
two.addEventListener("click", function() {
    screen.textContent += "2";
})

const three = document.getElementById("three");
three.addEventListener("click", function() {
    screen.textContent += "3";
})

const four = document.getElementById("four");
four.addEventListener("click", function() {
    screen.textContent += "4";
})

const five = document.getElementById("five");
five.addEventListener("click", function() {
    screen.textContent += "5";
})

const six = document.getElementById("six");
six.addEventListener("click", function() {
    screen.textContent += "6";
})

const seven = document.getElementById("seven");
seven.addEventListener("click", function() {
    screen.textContent += "7";
})

const eight = document.getElementById("eight");
eight.addEventListener("click", function() {
    screen.textContent += "8";
})

const nine = document.getElementById("nine");
nine.addEventListener("click", function() {
    screen.textContent += "9";
})

const zero = document.getElementById("zero");
zero.addEventListener("click", function() {
    screen.textContent += "0";
})

// sets operator for operate() when clicked, sets "a" value with on screen content, and resets screen content
const addition = document.getElementById("addID");
addition.addEventListener("click", adding);

function adding() {
    if (operator != undefined) {
        result();
    }
    a = Number(screen.textContent);
    operator = "adding";
    resetScreen();
}

const subtraction = document.getElementById("subtractID");
subtraction.addEventListener("click", subtracting);

function subtracting() {
    if (operator != undefined) {
        result();
    }
    a = Number(screen.textContent);
    operator = "subtracting";
    resetScreen();
}

const multiplication = document.getElementById("multiplyID");
multiplication.addEventListener("click", multiplying);

function multiplying(){
    if (operator != undefined) {
        result();
    }
    a = Number(screen.textContent);
    operator = "multiplying";
    resetScreen();
}

const division = document.getElementById("divideID");
division.addEventListener("click", dividing);

function dividing(){
    if (operator != undefined) {
        result();
    }
    a = Number(screen.textContent);
    operator = "dividing";
    resetScreen();
}

const equal = document.getElementById("equalID");
equal.addEventListener("click", result); // Runs the process when equal button is clicked

function result() {
    if (operator === undefined) {
        alert("Oops, try again");
        location.reload();    
    }
    else {
        b = Number(screen.textContent);
        screen.textContent = operate(operator, a, b);
    }
}

function operate(operator, x, y) {
    switch(operator) {
        case "adding":
        return add(x, y);
        break;
        case "subtracting": 
        return subtract(x, y);
        break;
        case "multiplying":
        return multiply(x, y);
        break;
        case "dividing":
        return divide(x, y);
        break;
    }
}

function resetScreen() { // resets screen content for when operator is clicked
    screen.textContent = "";
}

const clear = document.getElementById("clear");
clear.addEventListener("click", clearHistory); // clears memory

function clearHistory() {
    operator = undefined;
    screen.textContent = "";
    isEqualsClicked = false;
}

// Key down, run function;
window.addEventListener("keydown", function(e) {
    switch (e.which){
        case 49: screen.textContent += "1";
        break;
        case 50: screen.textContent += "2";
        break;
        case 51: screen.textContent += "3";
        break;
        case 52: screen.textContent += "4";
        break;
        case 53: screen.textContent += "5";
        break;
        case 54: screen.textContent += "6";
        break;
        case 55: screen.textContent += "7";
        break;
        case 56: screen.textContent += "8";
        break;
        case 57: screen.textContent += "9";
        break;
        case 48: screen.textContent += "0";
        break;
        case 187: adding();
        break;
        case 189: subtracting();
        break;
        case 191: dividing();
        break;
        case 88: multiplying();
        break;
        case 67: clearHistory();
        break;
    }
    if (e.which === 13) {
        result();
    }
})