
var search=document.getElementById("search");

function get(){
    var input=document.getElementById("input").value;
    window.location.href=`https://www.youtube.com/results?search_query=${input}`
}
