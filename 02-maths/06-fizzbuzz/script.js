/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by ortegaVictorBe@BeCode
 * started at 20/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    for (i = 1; i <= 100; i++) {
        let fizz = i % 3;
        let buzz = i % 5;

        if (!fizz || !buzz) {

            if (!fizz && !buzz) {
                console.log("fizzbuzz");
            } else if (!fizz) {
                console.log("fizz");
            } else {
                console.log("buzz");
            }
        } else {
            //not fizz or buzz         
            console.log(i);
        }

    }

})();
