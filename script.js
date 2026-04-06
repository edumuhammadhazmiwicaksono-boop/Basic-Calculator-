let currentInput = "0";
const display = document.getElementById('display');
const historyList = document.getElementById('history-list');

// Updates the black screen at the top
function updateDisplay() { 
    display.innerText = currentInput; 
}

// Adds numbers or operators to the current equation
function append(char) {
    if (currentInput === "0" && char !== ".") {
        currentInput = char;
    } else {
        currentInput += char;
    }
    updateDisplay();
}

// Clears everything (C button)
function clearDisplay() { 
    currentInput = "0"; 
    updateDisplay(); 
}

// Deletes the last character entered (← button)
function backspace() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = "0";
    }
    updateDisplay();
}

// Performs the math when = is pressed
function calculate() {
    try {
        // eval() processes the string (e.g., "5+5") as math
        let result = eval(currentInput);
        
        // Don't add to history if it's just a single number
        if (currentInput !== result.toString()) {
            addHistory(currentInput + " = " + result);
        }
        
        currentInput = result.toString();
        updateDisplay();
    } catch (e) {
        display.innerText = "Error";
        currentInput = "0";
    }
}

// Creates a new line in the History section
function addHistory(entry) {
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerText = entry;
    
    // prepend() puts the newest calculation at the top
    historyList.prepend(div);
}

// Wipes the history list
function clearHistory() { 
    historyList.innerHTML = ""; 
}