// side nav-Bar 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


function formSubmit() {

    if (!document.getElementById("u_name").value) {
        alert("Name Feild Should Not be Empty...")
    } else if (!document.getElementById("u_Acc_No").value) {
        alert("Account Number Feild Should Not be Empty...")
    } else if (!document.getElementById("u_Mob_No").value) {
        alert("Mobile Number Feild Should Not be Empty...")
    } else if (!document.getElementById("u_Address").value) {
        alert("Address Feild Should Not be Empty...")
    } else {
        alert("Appliction Form Submitted.");

    }

}

function myFunction() {
    var x = document.getElementById("u_name");
    x.value = x.value.toUpperCase();
    var w = document.getElementById("u_Acc_No");
    w.value = w.value.toUpperCase();
    var y = document.getElementById("u_Mob_No");
    y.value = y.value.toUpperCase();
    var z = document.getElementById("u_Address");
    z.value = z.value.toUpperCase();
}