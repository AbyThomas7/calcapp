let currentInput = '';

function appendValue(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function calculate() {
  try {
    let result = eval(currentInput);
    document.getElementById('display').value = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}
