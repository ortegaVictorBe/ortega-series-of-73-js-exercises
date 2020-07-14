/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by ortegaVictorBe@BeCode
 * started at 14/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    //     const randomColor = Math.floor(Math.random()*16777215).toString(16);
    //   document.body.style.backgroundColor = "#" + randomColor;
    //     color.innerHTML = "#" + randomColor;


    document.getElementById("run").addEventListener("click", function () {
        let anycolor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + anycolor;
        document.getElementById("randomColor").innerHTML = "<strong> Color Generated :#" + anycolor + " </strong>";

    });

})();
