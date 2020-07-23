/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //Testiing Strict mode
    "use stric";

    //Definig the Class
    class Person {
        constructor(firstName, lastname) {
            //Members
            this.firstName = firstName;
            this.lastName = lastname;
        }

        sayHello() {
            console.log("Hello, " + this.firstName + " " + this.lastName + "!")
        }
    }

    document.getElementById("run").addEventListener("click", () => {

        objPerson = new Person("Nikola", "Tesla");
        objPerson.sayHello();

    })

})();
