/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by ortegaVictorBe@BeCode
 * started at 10/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function () {

        let resultant = "";

        //converting the string to array
        secNumbers = document.getElementById("numbers").value.split(",");

        //Ordening        
        secNumbers.sort(function (a, b) {
            return a - b;
        });

        //Preparing the output
        let size = secNumbers.lenght;

        secNumbers.forEach(function (value, index) {
            resultant += value;
            if (index < size - 1) { resultant += ","; }
        });
        document.getElementById("result").value = resultant;
    });

})();


