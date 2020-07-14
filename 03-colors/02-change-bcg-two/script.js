/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by ortegaVictorBe@BeCode
 * started at 14/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {
        //Getting the color
        let usrColor = document.getElementById("color").value;
        usrColor.toLowerCase();
        document.body.style.backgroundColor = usrColor;
    });


})();
