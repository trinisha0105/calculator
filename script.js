// script.js const display = document.getElementById('display');

function appendNumber(number) { display.value += number; }

function appendOperator(operator) { const lastChar = display.value.slice(-1); if (display.value !== '' && !isNaN(lastChar)) { display.value += operator; } }

function clearDisplay() { display.value = ''; }

function deleteLast() { display.value = display.value.slice(0, -1); }

function calculateResult() { try { display.value = eval(display.value); } catch (e) { display.value = 'Error'; } }

// Optional: Keyboard support document.addEventListener('keydown', function(event) { const key = event.key; if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) { appendNumber(key); } else if (key === 'Enter') { calculateResult(); } else if (key === 'Backspace') { deleteLast(); } else if (key === 'Escape') { clearDisplay(); } });