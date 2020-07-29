/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by ortegaVictorBe@BeCode
 * started at 27/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let myInit = {
        method: "GET",
        mode: "cors",
        cache: "default",
    };

    let myTarget = document.getElementById("target");

    document.getElementById("run").onclick = () => {
        //Getting x-man id (Typed by user)
        let idXman = document.getElementById("hero-id").value;

        //Building custom request
        let myRequest = new Request(`http://localhost:3000/heroes/${idXman}`, myInit);

        //Getting data from API
        fetch(myRequest).then(response => {
            response.json().then(myHeroe => {
                //Creating the li item
                let item = document.createElement("li");

                //Fill the new list item
                item.innerHTML = myTemplate(myHeroe);

                //adding the child to <ol>
                myTarget.appendChild(item);

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
