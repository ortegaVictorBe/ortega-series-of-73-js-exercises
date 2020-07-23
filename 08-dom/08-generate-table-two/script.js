/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let tagcontainer = document.getElementById("target");
    let myTable = document.createElement("table");
    let myBodyTable = document.createElement("tbody");



    //Creating the rows and cells
    for (i = 0; i < 10; i++) {
        let myRow = document.createElement("tr");
        for (j = 0; j < 10; j++) {
            let myColumn = document.createElement("td");
            myColumn.innerHTML = (i + 1) * (j + 1);
            myRow.appendChild(myColumn);
        }
        myBodyTable.appendChild(myRow);
    }

    myTable.appendChild(myBodyTable);
    myTable.border = 5;
    tagcontainer.appendChild(myTable)

})();
