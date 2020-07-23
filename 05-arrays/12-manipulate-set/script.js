/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);
    document.getElementById("run").addEventListener("click", () => {

        if (fruits.has("apple")) { fruits.delete("apple"); } else { console.log("We have not Apple :(") }
        if (fruits.has("cherry")) { fruits.delete("cherry"); } else { console.log("We have not Cherry :(") }


        //Adding
        fruits.add("banana");
        fruits.add("kiwi");

        console.log(fruits);

    })
})();
