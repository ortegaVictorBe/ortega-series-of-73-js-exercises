/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let myInit = {
        method: "GET",
        mode: "cors",
        cache: "default",
    };

    //Api published Locally ina Json server
    let myRequest = new Request("http://localhost:3000/heroes", myInit);

    document.getElementById("run").onclick = () => {

        let heroName = document.getElementById("hero-name").value;
        let alterEgo = document.getElementById("hero-alter-ego").value;
        let heroPowers = document.getElementById("hero-powers").value;


        if (heroName === "" || alterEgo === "" || heroPowers === "") { alert("Hey Human !!, We need complete info for the new X-man") }
        else {

            fetch(myRequest).then(response => {
                response.json().then(myHeroes => {
                    // Clonnig a Heroe
                    let newHeroe = JSON.parse(JSON.stringify(myHeroes[0]));

                    //Setting a newHeroe
                    newHeroe.id = Math.max(...myHeroes.map(heroe => heroe.id)) + 1;
                    newHeroe.name = heroName;
                    newHeroe.alterEgo = alterEgo;
                    newHeroe.abilities = heroPowers.split(",");

                    //Adding to the Xavier's Clan :) 
                    myHeroes.push(newHeroe);

                    console.table(myHeroes);

                }).catch(error => { console.error(error) })

            }).catch(error => {
                console.error(error)

            })
        }
    }
})();
