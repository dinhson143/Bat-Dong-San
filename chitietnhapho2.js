var map;

function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
center: {
lat: 0,
lng: 50
},
zoom: 8
});
}


var sort = $(".searchBlock__sort");

sort.click(function()
{
    $(".sortList").toggle();
    $(".iconup").toggle();
    $(".icondown").toggle();
});


var list = $(".mapPosition__item--list");
list.click(function()
{
    window.location="http://127.0.0.1:5501/chitietnhapho1.html";
});