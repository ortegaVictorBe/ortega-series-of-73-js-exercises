/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // coded by ortegaVictorBe@BeCode
    // started at 09/07/2020

    let confirmation=false;
    let age="";
    let gender="";
    let town="";

    while(!confirmation){
       alert("Hello, Welcome to mi site, please fill some info.!!")
       age=prompt("what is your age?","your age here");
       gender=prompt("Your Gender?","your gender here (M/F)");
       town=prompt("Town where you live is?","Town where you live here");
       
       confirmation=confirm("Do you confirm this info ?"); 
    }
    alert("Thank you!! ");

})();
