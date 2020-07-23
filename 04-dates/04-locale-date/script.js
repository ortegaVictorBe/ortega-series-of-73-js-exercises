/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by ortegaVictorBe@BeCode
 * started at 16/07/2020
 */

(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    document.getElementById("target").innerHTML = now.toLocaleString('en-US', options);



})();
