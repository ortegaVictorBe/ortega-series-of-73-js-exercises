/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var hiddenNumber = Math.round(Math.random() * (100 - 1) + 1);
    var guessNumber = 3; //tries  (Y)
    var tries = 1;
    var right = false;

    alert("Welcome Friend, this is a fun game /Instructions: Try to guess the hidden number!!")
    alert("Hidden Number:" + hiddenNumber)
    while (!right) {
        alert(`This is your attempt #${tries}, go for it!! `)
        let answer = prompt("Shooot !!, do your best..");

        if (!answer.toString().isNaN) {
            if (parseInt(answer) == hiddenNumber) {
                right = true;
                document.getElementById("result").innerHTML = "<strong>That's Right.. Good Job!!, Indeed the number is: " + hiddenNumber + "</strong>";
            } else if (parseInt(answer) < hiddenNumber) {
                alert("Nice shoot.. the hidden number is HIGHER");
                tries++
            } else {
                alert("Nice shoot.. the hidden number is LOWER");
                tries++
            }
        }
        else {
            alert("Your shoot is not a number!");
            tries++
        }

        if (guessNumber == (tries - 1)) {
            alert("That was your last shoot.. Maybe next time.. Bye");
            right = true;
        }
    }//End While

})();
