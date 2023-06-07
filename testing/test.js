/* toggle between showing and 
hiding the nav menu links when user clicks
 on the burger menu / bar icon */

 function myFunction() {
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
 }