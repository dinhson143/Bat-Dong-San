
var locnangcao = $(".search_item--pro")
locnangcao.click(function()
{
    $(".navCTNP1__dettailNav").toggle();
});


var sort = $(".mainbody__nav--itemSort");

sort.click(function()
{
    $(".mainbody__nav--itemSortdetail").toggle();
});

var btnNhucau = $(".search_item--nhucau");
btnNhucau.on('change', function () {
    let nhucau = document.querySelector(".search_item--nhucau");
    let giaTri = nhucau.options[nhucau.selectedIndex].text;
    if(giaTri.indexOf('Mua')>=0)
    {
       document.querySelector(".search_item--mucgiaTemp").style.display="none";
       document.querySelector(".search_item--thue").style.display = "none";
        document.querySelector(".search_item--mua").style.display = "block";
    }
    else if(giaTri.indexOf('Thuê')>=0)
    {
        document.querySelector(".search_item--mucgiaTemp").style.display="none";
        document.querySelector(".search_item--mua").style.display = "none";
        document.querySelector(".search_item--thue").style.display = "block";
    }
    else
    {
        document.querySelector(".search_item--mucgiaTemp").style.display="block";
        document.querySelector(".search_item--mua").style.display = "none";
        document.querySelector(".search_item--thue").style.display = "none";
    }
});


var btnTatca = $(".mainbody__nav--itemAll");
btnTatca.click(function()
{
    $(".mainbody__all").toggle();
})

