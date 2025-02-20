$(document).ready(function(){
    let $pokeCont =$(".poke-cont");

    $pokeCont.isotope({
        itemSelector: ".card",
        layoutMode: "fitRows",
        getSortData:{
            name: ".name",
            number: ".number parseInt",
        }
    });


    $(".btns-cont .filter").on("click", function() {
        let filterVal = $(this).data("filter");
        $pokeCont.isotope({
            filter: filterVal
        })
    });

    // INSTRUCCIONS:

    // Boton: "Todos"
    // Solo es añadir el filtro "*" en el html
    
    // Botones de orden: por número y orden alfabético

    $(".btns-cont .sort").on("click", function(){
        let sortByValue = $(this).data("sortby");
        $pokeCont.isotope({
            sortBy: sortByValue
        })
    })
    });