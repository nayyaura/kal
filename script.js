let historyList = [];

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let currentDisplayValue = document.getElementById("display").value;
  document.getElementById("display").value = currentDisplayValue.slice(0, -1);
}

function appendValue(value) {
  document.getElementById("display").value += value;
}

function appendOperator(operator) {
  let currentDisplayValue = document.getElementById("display").value;

  // Check for consecutive operators
  if (!isOperator(currentDisplayValue.slice(-1))) {
    document.getElementById("display").value += operator;
  }
}

function calculatePercentage() {
  let currentDisplayValue = document.getElementById("display").value;
  let percentage = parseFloat(currentDisplayValue) / 100;
  document.getElementById("display").value = percentage;
}

function calculate() {
  let currentDisplayValue = document.getElementById("display").value;
  let result = eval(currentDisplayValue);

  // Display the result
  document.getElementById("display").value = result;

  // Store the expression and result in history
  historyList.push({ expression: currentDisplayValue, result: result });
  updateHistory();
}

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}

function updateHistory() {
  let historyTextContainer = document.getElementById("historyTextContainer");
  historyTextContainer.innerHTML = "";

  historyList.forEach((item, index) => {
    let historyEntry = document.createElement("p");
    historyEntry.textContent = `${index + 1}. ${item.expression} = ${item.result}`;
    historyTextContainer.appendChild(historyEntry);
  });
}
