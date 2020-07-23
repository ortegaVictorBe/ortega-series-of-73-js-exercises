/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by ortegaVictorBe@BeCode
 * started at 16/07/2020
 */


(function () {

    document.getElementById("run").addEventListener("click", function () {

        let usrYear = document.getElementById("year").value;

        if (!isNaN(usrYear) && usrYear > 1970) {
            let dateTest = new Date(usrYear, 00, 13);
            let result = "";

            // Evaluating each month
            for (i = 0; i <= 11; i++) {
                dateTest.setMonth(i);

                if (dateTest.getDay() == 5) {
                    if (result == "") {
                        result += dateTest.toLocaleString('en-Us', { month: 'long' });
                    } else {
                        result += ", " + dateTest.toLocaleString('en-Us', { month: 'long' });
                    }
                }
            }

            if (result == "") { result = "No Fridays 13th in :" + dateTest.getFullYear(); }
            document.getElementById("year").value = dateTest.getFullYear() + " : " + result;

        } else {
            document.getElementById("year").value = "Enter a valid year !!"
        }

    })


})();
