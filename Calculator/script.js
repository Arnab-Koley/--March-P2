let expression = "";
let currentExpression = "";
let ans = "0";
let calculatorOn = false;

function changeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");
  const hexColor = `#${hexR}${hexG}${hexB}`;
  document.querySelector(".calculator").style.backgroundColor = `${hexColor}`;
}

function appendToDisplay(value) {
  if (!calculatorOn) return;
  currentExpression += value;
  expression = currentExpression;
  document.getElementById("expression").innerText = expression;
  document.getElementById("result").innerText = expression;
}

function clearDisplay() {
  if (!calculatorOn) return;
  currentExpression = "";
  expression = "";
  document.getElementById("expression").innerText = "0";
  document.getElementById("result").innerText = "0";
}

function deleteLast() {
  if (!calculatorOn) return;
  currentExpression = currentExpression.slice(0, -1);
  expression = currentExpression;
  if (expression.length == 0) {
    expression = 0;
  }
  document.getElementById("expression").innerText = expression;
  document.getElementById("result").innerText = expression;
}

function calculate() {
  if (!calculatorOn) return;
  try {
    currentExpression = currentExpression.replace(/\^/g, "**");
    currentExpression = currentExpression.replace(/√/g, "Math.sqrt");
    ans = eval(currentExpression);
    let truncatedResult = ans.toString();
    if (truncatedResult.length > 13) {
      truncatedResult = truncatedResult.slice(0, 13);
    }
    document.getElementById("result").innerText = truncatedResult;
    currentExpression = "";
  } catch (error) {
    document.getElementById("result").innerText = "Error";
  }
}

function togglePower() {
  calculatorOn = !calculatorOn;
  if (calculatorOn) {
    document.getElementById("expression").innerText = "0";
    document.getElementById("result").innerText = "0";
    expression = "";
    currentExpression = "";
    ans = "0";
  } else {
    document.getElementById("expression").innerText = "";
    document.getElementById("result").innerText = "";
  }
}

