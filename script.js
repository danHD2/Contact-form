const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const email = document.getElementById("email");
const qType1 = document.getElementById("qtype");
const qType2 = document.getElementById("qtype2");
const msg = document.getElementById("msg");
const check = document.getElementById("check");
const submit = document.getElementById("submit");
const success = document.getElementById("success");
const fNameerr = document.getElementById("fnameerr");
const formCheck = (event) => {
    event.preventDefault();
    if(fName.value.trim() === "") {        
        fNameerr.style.display = "block";
        fName.style.borderColor = "hsl(0, 66%, 54%)";
        return false;
    } else {
        fNameerr.style.display = "none";
        fName.style.borderColor = "hsl(169, 82%, 27%)";
        show();
        return true;
    }

}

const show = () => {
    

    success.style.display = "block";    // Make the div visible
    setTimeout(() => {
        success.style.opacity = 1;      // Fade in
    }, 10);  // Small delay to trigger the CSS transition

    setTimeout(function() {
        success.style.opacity = 0;      // Fade out
    }, 3000);  // Start fading out after 3 seconds

    setTimeout(function() {
        success.style.display = "none"; // Set display to none after fade out
    }, 3500);  // Wait for fade out to complete before hiding
}

submit.addEventListener("click", formCheck);

