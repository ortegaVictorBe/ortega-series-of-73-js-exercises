/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").onclick = () => {

        window.lib.getPersons((error, myPeople) => {
            if (error) {
                console.error(error);
            } else {
                console.table(myPeople);
            }
        });
    }

})();
