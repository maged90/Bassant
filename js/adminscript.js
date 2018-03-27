    function inpfocus(x) {
    x.placeholder = "";

}
    function inpblur(x) {
    x.placeholder = x.getAttribute("placehoolder");
}


$( document ).ready(function() {
    $('.login h3').css("top","0px");
    $('.in-left').css("left","0px");
    $('.in-right').css("right","0px");
    $('.inputs').css("bottom","0px");
    $('form').css({"background-color":"#f3f2f2",
					"padding" : "40px",
					"border-radius": "4px",
					 "opacity" : ".9"});
    $('.log-body').css("background-image", "url(bg.jpg)");
    $('.log-body').css("background-repeat", "no-repeat, repeat");
    $('.log-body').css("background-size", "cover");
    $('.log-body').css("background-size", "cover");
    $('.managetable td').slideDown(700);
    $('.converttobtn').css("font-size", "17px");
    $('.stat').slideDown(1000);
    $('.tazbit2').css({"right":"0px", "transform" : "rotate(0deg)"});
    $('.tazbit1').css({"left":"0px", "transform" : "rotate(0deg)"});

});