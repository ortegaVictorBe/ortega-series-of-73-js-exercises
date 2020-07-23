/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let myImg = document.getElementsByTagName("img")[0];
    let currentImg = 0;

    document.getElementById("next").onclick = () => {
        if (currentImg === 4) { currentImg = 0; } else { ++currentImg; }
        myImg.src = gallery[currentImg];
    }

})();
