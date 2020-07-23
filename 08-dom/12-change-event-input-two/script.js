/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by ortegaVictor@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("pass-one").oninput = () => {
        let myValue = document.getElementById("pass-one").value;
        let regExp = /\d/g;
        let findNumbers;


        if (myValue.length >= 8) {
            findNumbers = myValue.match(regExp);
            if (findNumbers !== null) { numNumbers = findNumbers.length } else { numNumbers = 0 };
            if (numNumbers >= 2) {
                document.getElementById("validity").innerHTML = "ok";
            } else {
                document.getElementById("validity").innerHTML = "Not ok";
            }
        } else {
            document.getElementById("validity").innerHTML = "Not ok";
        }
    }

})();
