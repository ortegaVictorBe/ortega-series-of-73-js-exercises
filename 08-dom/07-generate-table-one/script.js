/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
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
        let myColumn = document.createElement("td");

        myColumn.innerHTML = "BeCode in the House!!";
        myRow.appendChild(myColumn);
        myBodyTable.appendChild(myRow);
    }

    myTable.appendChild(myBodyTable);
    myTable.border = 5;
    tagcontainer.appendChild(myTable)

})();
