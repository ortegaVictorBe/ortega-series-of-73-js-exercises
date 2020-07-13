/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by ortegaVictorBe@BeCode
 * started at 10/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let operandA = document.getElementById('op-one');
    let operandB = document.getElementById('op-two');

    const performOperation = operation => {
        // perform the operation
        let result = "";

        if (isNaN(operandA.value) || isNaN(operandB.value)) {
            document.getElementById("result").value = "Enter Valid operands"
        }
        else {
            switch (operation) {
                case 'addition':
                    result = parseFloat(operandA.value) + parseFloat(operandB.value);
                    break;
                case 'substraction':
                    result = parseFloat(operandA.value) - parseFloat(operandB.value);
                    break;
                case 'multiplication':
                    result = parseFloat(operandA.value) * parseFloat(operandB.value);
                    break;
                case 'division':
                    if (operandB.value == "0") {
                        result = "Division by 0";
                    } else {
                        result = parseFloat(operandA.value) / parseFloat(operandB.value);
                    }
                    break;
                default:
            }
            document.getElementById("result").value = result;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
