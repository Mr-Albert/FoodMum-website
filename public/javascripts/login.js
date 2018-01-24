
 // Get the modal
 $(function() {
var logmodal = document.getElementById('loginModal');
var signmodal = document.getElementById('signupModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == logmodal) {
        logmodal.style.display = "none";
    }
    if (event.target == signmodal) {
        signmodal.style.display = "none";
    }
}
});