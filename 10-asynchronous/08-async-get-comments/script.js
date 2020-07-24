/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        const myAsyncPost = async () => {
            return await window.lib.getPosts();
        };

        const myAsyncComments = async (id) => {
            return await window.lib.getComments(id);
        }

        myAsyncPost().then(myPosts => {

            let commentedPosts = myPosts.map(onePost => {
                myAsyncComments(onePost.id).then(myComment => {
                    onePost.comment = myComment;
                    return onePost;
                }).catch(error => { console.error(error) })

            })
            console.table(myPosts);

        }).catch(error => { console.error(error) })

    })
})();
