/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    document.getElementById("run").addEventListener("click", function () {

        let currentDate = new Date();
        let birthdayDay = new Date(document.getElementById("dob-year").value, document.getElementById("dob-month").value - 1, document.getElementById("dob-day").value);

        let age = currentDate.getFullYear() - birthdayDay.getFullYear();
        let months = currentDate.getMonth() - birthdayDay.getMonth();


        // if we are in a differnt month or/and day of birthday. 
        if (months < 0 || (months === 0 && currentDate.getDate() < birthdayDay.getDate())) {
            age--;
        }

        document.getElementById("result").innerHTML = " <h2 style=\"text-align: center;\"> His/Her age is: " + age + " Years old!! </h2>";

    });


})();
