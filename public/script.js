let currentInput = "";
let history = [];

function appendNumber(number) {
    currentInput += number;
    document.getElementById("display").value = currentInput;
}

function clearInput() {
    currentInput = "";
    document.getElementById("display").value = "";
}

function calculate() {
    if (currentInput === "") return;

    const result = eval(currentInput);
    history.push({ input: currentInput, result });
    document.getElementById("display").value = result;
    currentInput = "";
}
