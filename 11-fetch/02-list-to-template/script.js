/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
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

    //local Api (Fake Server)
    // let myRequest = new Request("../../shared/api.json", myInit);

    //Relative url, assuming Api was published in the same server that the webApp
    // let myRequest = new Request("/heroes", myInit);


    let myTarget = document.getElementById("target");

    document.getElementById("run").onclick = () => {
        //Getting data from API
        fetch(myRequest).then(response => {
            response.json().then(myHeroe => {

                myHeroe.forEach(oneHeroe => {
                    let item = document.createElement("li");

                    //Fill the new list item
                    item.innerHTML = myTemplate(oneHeroe);

                    //adding the child to <ol>
                    myTarget.appendChild(item);
                });

            }).catch(error => { console.error(error) })

        }).catch(error => {
            console.error(error)
        })
    };

    //Generating the structure
    function myTemplate(oneHeroe) {
        return ` <li class="hero">
                    <h4 class="title">
                        <strong class="name">${oneHeroe.name}</strong>
                        <em class="alter-ego">${oneHeroe.alterEgo}</em>
                    </h4>
                        <p class="powers">${oneHeroe.abilities}</p>
                </li>`
    }
})();
