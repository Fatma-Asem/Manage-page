$(document).ready(function() {

    // Function that validates email address through a regular expression.
function validateEmail(sEmail) {
    var exp = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return exp.test(sEmail);
    }
    
$('#btnValidate').click(function() {
var sEmail = $('#txtEmail').val();

// Checking Empty Fields
if ($.trim(sEmail).length == 0) {
   $('.footer-section .validate').css('display','block');
}
if (validateEmail(sEmail)) {
    $('.footer-section .validate').css('display','none');
}
else {
    $('.footer-section .validate').css('display','block');
}
});

$("#txtEmail").tooltip("disable");

});

