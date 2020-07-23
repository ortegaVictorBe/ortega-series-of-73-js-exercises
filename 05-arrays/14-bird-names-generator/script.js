/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        { name: "seagull", num: 1 },
        { name: "raven", num: 3 },
        { name: "chickadee", num: 2 },
        { name: "owl", num: 4 },
        { name: "buzzard", num: 8 },
        { name: "pigeon", num: 1 },
        { name: "magpie", num: 3 },
        { name: "vulture", num: 2 },
        { name: "falcon", num: 1 },
        { name: "robin", num: 2 },
        { name: "dove", num: 1 },
        { name: "crow", num: 5 },
    ];
    const adjectives = new Set([
        "gray",
        "hoopoe",
        "singing",
        "howling",
        "perched",
        "tall",
        "small",
        "blue",
        "panting",
        "tangent",
        "sported",
    ]);

    document.getElementById("run").addEventListener("click", () => {
        let bird = [];
        let adjetive = [];
        let arrAdjetives = Array.from(adjectives);


        bird.push(birds[Math.floor(Math.random() * (birds.length))]);
        adjetive.push(arrAdjetives[Math.floor(Math.random() * (arrAdjetives.length))]);

        if (bird[0].num > 1) { document.getElementById("target").innerHTML = "<h2>" + "A few " + adjetive + " " + bird[0].name + "s" + " </h2>"; } else { document.getElementById("target").innerHTML = "<h2>" + "A " + adjetive + " " + bird[0].name + " </h2>" }

    })
})();
