/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by ortegaVictorBe@BeCode
 * started at 27/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var lastValue = localStorage.getItem("counter");
    console.log(lastValue);
    if (lastValue == null) { lastValue = 0 } else { document.getElementById("target").innerHTML = lastValue; }


    document.getElementById("increment").onclick = () => {
        lastValue++;
        document.getElementById("target").innerHTML = lastValue;
        localStorage.setItem("counter", lastValue);
    }

})();
