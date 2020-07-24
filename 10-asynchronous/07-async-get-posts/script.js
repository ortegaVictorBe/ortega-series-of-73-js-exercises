/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").onclick = () => {

        const myAsyncPosts = async () => {
            return await window.lib.getPosts();
        };

        myAsyncPosts().then(myPost => { console.table(myPost) }).catch(error => { console.error(error) })

    }
})();
