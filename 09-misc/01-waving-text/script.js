/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by ortegaVictorBe@BeCode
 * started at 27/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var text = 'Loves like ours are already very few, stars fall from the sky without hearing desires, defoliating a rose is a silly thing, here feelings don\'t interest anymore.';

    var textArray = text.split('');
    var theTarget = document.getElementById("target");
    var spansArray = [];
    var originalsize = 16;

    theTarget.innerHTML = ""
    theTarget.style.fontSize = originalsize;


    //Inserting span's array iinto the Target
    textArray.forEach((letter, index) => {
        let elementLetter = document.createElement("span");
        elementLetter.id = 'letter-' + index;
        elementLetter.innerHTML = letter;
        spansArray[index] = elementLetter
        theTarget.appendChild(elementLetter);
    })


    //Waving function Definition
    let waving = () => {
        var size = originalsize;
        var i = 0; //Index of the span's array for looping
        var limit = textArray.length;

        let printMessage = setInterval(() => {
            for (let j = 1; j <= 5; j++) {
                size += (j + 4)
                if (i < limit) { document.getElementById(`letter-${i}`).style.fontSize = size + "px"; } else { break; }
                i++
            }

            for (let j = 5; j >= 1; j--) {
                size -= (j + 4)
                if (i < limit) { document.getElementById(`letter-${i}`).style.fontSize = size + "px"; } else { break; }
                i++
            }

            //Stopping the  effect
            if (i >= limit) { clearInterval(printMessage) }
        }, 200);
    }

    let iterations = setInterval(() => {
        //restauring the text
        textArray.forEach((l, index) => { document.getElementById(`letter-${index}`).style.fontSize = originalsize + "px"; })

        //Calling waving function
        waving();
    }, 5000)

})();


