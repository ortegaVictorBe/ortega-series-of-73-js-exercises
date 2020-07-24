/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by oretgaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").onclick = () => {

        let myInit = {
            method: "GET",
            mode: "cors",
            cache: "default",
        };

        //Api published Locally ina Json server
        let myRequest = new Request("http://localhost:3000/heroes", myInit);

        //local Api (Fake Server)
        // let myRequest = new Request("../../shared/api.json", myInit);

        //Relative url, assuming Api was published in the same server that the webApp
        // let myRequest = new Request("/heroes", myInit);

        fetch(myRequest).then(response => {
            response.json().then(myHeroe => {
                console.table(myHeroe);
            }).catch(error => { console.error(error) })

        }).catch(error => {
            console.error(error)

        })
    }
})();
