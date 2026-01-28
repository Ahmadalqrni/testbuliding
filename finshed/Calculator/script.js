const calculatorDisplay = document.getElementById('Calculator-Display');
const calculatorbuttons = document.querySelectorAll('.Buttons button');
let currentInput = '';

calculatorbuttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            calculatorDisplay.textContent = '0';
            
        } else if (value === '←') {    
            currentInput = currentInput.slice(0, -1);
            calculatorDisplay.textContent = currentInput || '0';

         } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                calculatorDisplay.textContent = currentInput;
            } catch {
                calculatorDisplay.textContent = 'Error';
                currentInput = '';
            }
        } else {
            currentInput += value;
            calculatorDisplay.textContent = currentInput;
        }
    });
});
