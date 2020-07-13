/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by ortegaVictorBe@BeCode
 * started at 10/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let result = 0;

    document.getElementById("addition").addEventListener("click", function () {
        // Validating operands
        if (isNaN(document.getElementById("op-one").value) || isNaN(document.getElementById("op-two").value)) {
            document.getElementById("result").value = "Enter Valid operands"
        } else {
            // perform an addition
            result = parseFloat(document.getElementById("op-one").value) + parseFloat(document.getElementById("op-two").value);
            document.getElementById("result").value = result;
        }
    });

    document.getElementById("substraction").addEventListener("click", function () {

        // Validating operands
        if (isNaN(document.getElementById("op-one").value) || isNaN(document.getElementById("op-two").value)) {
            document.getElementById("result").value = "Enter Valid operands"

        } else {
            // perform an substraction
            result = parseFloat(document.getElementById("op-one").value) - parseFloat(document.getElementById("op-two").value);
            document.getElementById("result").value = result;
        }
    });

    document.getElementById("multiplication").addEventListener("click", function () {

        // Validating operands

        if (isNaN(document.getElementById("op-one").value) || isNaN(document.getElementById("op-two").value)) {
            document.getElementById("result").value = "Enter Valid operands"
        } else {

            // perform an multiplication
            result = parseFloat(document.getElementById("op-one").value) * parseFloat(document.getElementById("op-two").value);
            document.getElementById("result").value = result;
        }
    });

    document.getElementById("division").addEventListener("click", function () {

        // Validating operands

        if (isNaN(document.getElementById("op-one").value) || isNaN(document.getElementById("op-two").value)) {
            document.getElementById("result").value = "Enter Valid operands"
        } else {
            // perform an division
            if (parseFloat(document.getElementById("op-two").value) == 0) {
                document.getElementById("result").value = "Division by 0";
            } else {
                result = parseFloat(document.getElementById("op-one").value) / parseFloat(document.getElementById("op-two").value);
                document.getElementById("result").value = result;
            }
        }
    });
})();
