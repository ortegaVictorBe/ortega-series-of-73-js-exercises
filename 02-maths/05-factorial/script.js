/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by ortegaVictorBe@BeCode
 * started at 10/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {
        let naturalNumber=document.getElementById("number").value;
            
        if (!isNaN(naturalNumber)){
            let factorial=1;
            for(i=1;i<=naturalNumber;i++){
                factorial*= i;    
            }
             
            document.getElementById("result").innerHTML="<br/> Factorial of "+naturalNumber+" ["+naturalNumber+"!] : "+ factorial+". <br/>"
            
        }else{
            document.getElementById("result").innerHTML="<br/> Enter an integer number.. !! <br/>"
        }        

    });

})();
