$(document).ready(function(){
    let $pokeCont =$(".poke-cont");

    $pokeCont.isotope({
        itemSelector: ".card",
        layoutMode: "fitRows"
    });


    $(".btns-cont button").on("click", function() {
        let filterVal = $(this).data("filter");
        $pokeCont.isotope({
            filter: filterVal
        })
    });
});