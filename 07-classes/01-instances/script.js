/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    //Declaring Cats     
    const fisrtCat = new Cat("Skitty", 9);
    const secondCat = new Cat("Pixel", 6);

    document.getElementById("run").addEventListener("click", () => {
        console.group("The Cats");
        console.log("Fisrt : %o", fisrtCat);
        console.log("Second : %o", secondCat);
        console.groupEnd();
    })

})();
