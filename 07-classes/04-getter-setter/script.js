/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {

        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        get name() {
            return this.firstName + " " + this.lastName;
        }

        set name(fullName) {
            let names = fullName.split(" ");
            this.firstName = names[0];
            this.lastName = names[1];
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        myPerson = new Person("Victor", "Ortega");
        console.log(myPerson.name);
        myPerson.name = "Henry Ford";
        console.log("o%", myPerson);

    })
})();
