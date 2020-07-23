/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by ortegaVictorBe@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        let objPerson = { lastname: "", fisrtname: "", age: 0, city: "", country: "" };

        objPerson.lastname = prompt("Please introduce your lastname: ");
        objPerson.fisrtname = prompt("Please introduce your fisrtname: ");
        objPerson.age = prompt("Please introduce your age: ");
        objPerson.city = prompt("Please introduce teh city where you live: ");
        objPerson.country = prompt("Please introduce teh country where you live: ");

        console.log(objPerson);
    })
})();
