var mql = window.matchMedia("(max-width: 1250px)");
function matches()
{
    var heading = document.getElementById("s2k");
    heading.innerHTML = mql.matches ? "S2K" : "Step2Knowledge";
    var search = document.getElementById("search-box");
    search.style.display = mql.matches ? "none" : "inline";
}
mql.onchange = matches;

var nql = window.matchMedia("(max-width: 800px)");
function matche()
{
    var classes = document.getElementById("hidec");
    classes.style.display = nql.matches ? "none" : "inline";
    var notes = document.getElementById("hiden");
    notes.style.display = nql.matches ? "none" : "inline";
    var pay = document.getElementById("hidep");
    pay.style.display = nql.matches ? "none" : "inline";
    var setting = document.getElementById("hides");
    setting.style.display = nql.matches ? "none" : "inline";
    var logout = document.getElementById("hidel");
    logout.style.display = nql.matches ? "none" : "inline";
    var help = document.getElementById("hidehelp");
    help.style.display = nql.matches ? "none" : "block";
    var contact = document.getElementById("hidecontact");
    contact.style.display = nql.matches ? "none" : "block";
    var show = document.getElementById("show");
    show.style.display = nql.matches ? "block" : "none";

   
}
nql.onchange = matche;
var show = document.getElementById("show");
    show.style.display = "none";
