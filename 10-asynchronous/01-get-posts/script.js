/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").onclick = () => {
        window.lib.getPosts((error, myArticle) => {
            if (error) { console.log(error) } else {
                console.table(myArticle);
            }
        });
    }

})();
