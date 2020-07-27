/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    //Clear the target
    document.getElementById("target").innerHTML = "";

    let messageTyped = text => {
        let arrayMessage = text.split('');

        let i = 0;
        let printMessage = setInterval(() => {
            document.getElementById("target").innerHTML += arrayMessage[i];
            i++;
            // console.log("este es i:" + i + "Len :" + arrayMessage.length)
            if (i === arrayMessage.length) { clearInterval(printMessage) }
        }, 100)
    }

    messageTyped('Get the garbage out of your mind and focus on the now.');
})();
