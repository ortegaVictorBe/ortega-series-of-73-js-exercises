/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by OrtegaVictorBe@BeCode
 * started at 28/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var theSlider = document.getElementById("slider");
    var theTarget = document.getElementById("target");

    theSlider.oninput = () => {
        theTarget.innerHTML = "0" + theSlider.value;
    }

})();
