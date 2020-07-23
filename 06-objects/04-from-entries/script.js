/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];

    // Mapping the two arrays
    let myMap = new Map();
    keys.forEach((item, index) => { myMap.set(item, values[index]); })

    //Creating the Object
    const myAnimal = Object.fromEntries(myMap);

    document.getElementById("run").addEventListener("click", () => {

        //Printing Keys
        console.log("  *** Keys  ***   ");
        Object.keys(myAnimal).forEach(myKey => { console.log(myKey); })

        //Printing Values
        console.log(" *** Values ***  ");
        Object.values(myAnimal).forEach(myValue => { console.log(myValue); })

    })

})();
