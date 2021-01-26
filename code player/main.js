var winWidth = $(window).width();
var winHeight = $(window).height();
var menuHeight = $("header").height();
var mainHeight = winHeight - menuHeight;
// $(document).ready(function() {
//     if (winWidth < 767) {
//         $(".codeContainer").height(Math.floor(mainHeight / 2));
//     } else{
//         $(".codeContainer").height(mainHeight);
//     }
// })
$(".codeContainer").height(mainHeight);
if (winWidth < 767) {
    $(".codeContainer").height(Math.floor(mainHeight / 2));
}

$(".codeList-btn").on("click", function(){
    $(this).toggleClass("selected");
    let activeDiv = $(this).html();
    $("#"+activeDiv).toggleClass("hide");

    var isDivShowing = $(".codeContainer").filter(function(){
        return ($(this).css("display") != "none");
    }).length; 
    if (isDivShowing == 1) {
        $(".codeContainer").width("100%");
    }
});

$("#run").click(function() {
    // $("iframe").contents().find("html").html($("#HTMLcode").val());
    $("iframe").contents().find("html").html(
        '<style>' + $("#CSScode").val() + '</style>' + $("#HTMLcode").val()
    );

    // this poses a security threat
    document.querySelector("#RESULTframe").contentWindow.eval($("#JScode").val());
});