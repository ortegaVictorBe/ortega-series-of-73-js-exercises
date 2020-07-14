/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by ortegaVictorBe@BeCode
 * started at 10/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {
        let sqrtNumbers = "";
        for (i = 1; i <= 21; i++) {
            sqrtNumbers = sqrtNumbers + "SQRT of [" + i + "] = " + Math.sqrt(i) + "<br/>";
            //sqrtNumbers = sqrtNumbers + "SQRT of [" + i + "] = " + i * i + "<br/>";
        }

        document.getElementById("result").innerHTML = "<br/> *** RESULT *** <br/>" + "<p style=\"text-align : left;\">" + sqrtNumbers + "</p>";

    });

})();
