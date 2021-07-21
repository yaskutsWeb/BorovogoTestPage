$(".burger").on("click", function (event) {
    $("nav ul").slideToggle("200");
});

// hide navigation bar when the choise is made
$("nav ul a").on("click", function () {
    if(	$(window).width()<960)
    $("nav ul").slideToggle("200");
});
