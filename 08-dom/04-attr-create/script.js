/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    //Getting the old element
    let oldElement = document.getElementById("source");

    //Getting the container
    let containerElement = document.getElementById("target");

    //Creating image 
    let img = document.createElement("img");

    img.src = oldElement.getAttribute("data-image");
    img.id = "myKitten";
    img.style.display = "block";
    img.style.margin = "auto";

    //Adding the new one
    containerElement.appendChild(img);

    //Removing the old element
    oldElement.remove();


})();
