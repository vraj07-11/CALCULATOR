const output = document.getElementById('output');
const buttons = document.querySelectorAll('.buttons');

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;
        const buttonText = button.innerText;
        if (buttonId === 'AC') {
            currentInput = "";
            output.innerText = "0";
        } 
        else if (buttonId === 'backspace') {
            currentInput = currentInput.slice(0, -1);
            output.innerText = currentInput || "0";                 
        } 
        else if (buttonId === 'ans') {
            try {
                let calculation = currentInput
                    .replace(/×/g, '*')                             /*  ! imp  */
                    .replace(/÷/g, '/');
                
                currentInput = eval(calculation).toString();        /*  ! imp  */
                output.innerText = currentInput;
            } catch (error) {
                output.innerText = "Error";
                currentInput = "";
            }
        } 
        else {
            if (currentInput === "0" && buttonId !== ".") {
                currentInput = buttonText;
            } else {
                currentInput += buttonText;
            }
            output.innerText = currentInput;
        }
    });
});