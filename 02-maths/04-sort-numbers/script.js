/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {        
        // your code here
        let strNumbers=document.getElementById("numbers").value;
        let resultant="";        

        //converting the string to array
        secNumbers= strNumbers.split(",");           
        
        //Ordening        
        secNumbers.sort(function(a, b) {
            return a - b;
          });

          alert(secNumbers);        
          resultant = parseFunction(resultant);        
        
        document.getElementById("result").innerHTML="<br/> *** RESULT *** <br/>"+ resultant +"<br/>";

    });

})();
function parseFunction(result) {
    for (i = 0; i < secNumbers.length; i++) {
        result = result + secNumbers[i] + "<br/>";        
    }
    return result;
}

