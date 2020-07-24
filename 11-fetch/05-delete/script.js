/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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



    document.getElementById("run").onclick = () => {

        //Getting x-man id (Typed by user)
        let idXman = document.getElementById("hero-id").value;

        //Building custom request
        let myRequest = new Request("http://localhost:3000/heroes/", myInit);

        //Getting data from API
        fetch(myRequest).then(response => {
            response.json().then(myHeroes => {

                //Getting the hero to delete 
                let indexByeHeroe = myHeroes.indexOf(myHeroes.find(oneHeroe => { return oneHeroe.id == idXman }));
                if (indexByeHeroe >= 0) {

                    //Heroe found it
                    console.log("Heroe found it: ");
                    console.table(myHeroes[indexByeHeroe]);

                    //Deleting the Heroe :(
                    myHeroes.splice(indexByeHeroe, 1);
                    console.log("Heroes without their Friend..sniff !! snif!! :( : ");
                    console.table(myHeroes);

                } else { alert("Heroe not found!!"); }

            }).catch(error => { console.error(error) })

        }).catch(error => {
            console.error(error)
        })
    };
})();
