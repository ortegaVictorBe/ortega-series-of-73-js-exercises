/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by ortegaVictorBe@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click", function () {

        let thereIsApple = fruits.find(fruit => { return fruit === "apple"; })
        if (thereIsApple === "apple") {
            console.log("There is an Apple.. :)");
        } else {
            console.log("There is NOT an Apple.. :(");
        }
    })

})();
