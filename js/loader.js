var myVar;
var myVar1;
function myFunction() {
    myVar = setTimeout(showPage, 200);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myPage").style.display = "block";
}

function myFunction1() {
    myVar1 = setTimeout(showPage, 200);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myPage").style.display = "block";
}