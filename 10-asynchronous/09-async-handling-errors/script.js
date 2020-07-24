/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by oretgaVictorBE@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").onclick = () => {
        const myAsyncPerson = async () => {

            return await window.lib.getPersons();
        }

        myAsyncPerson().then(myPerson => {
            console.table(myPerson);
        }).catch(error => {
            console.error(error);
        });
    }
})();
