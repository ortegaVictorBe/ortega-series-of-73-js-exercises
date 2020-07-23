/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    //Getting the original color
    let originalColor = document.getElementById("pass-one").style.borderColor;

    document.getElementById("run").onclick = () => {

        let inputPassOne = document.getElementById("pass-one");
        let inputPassTwo = document.getElementById("pass-two");

        if (inputPassOne.value == inputPassTwo.value) {
            //Equals
            inputPassOne.style.borderColor = originalColor;
            inputPassTwo.style.borderColor = originalColor;
        } else {
            inputPassOne.style.borderColor = "red";
            inputPassTwo.style.borderColor = "red";
        }

    }

})();
