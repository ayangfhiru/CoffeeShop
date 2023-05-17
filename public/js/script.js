$(document).ready(function () {
    // index.html
    $("#btnMenu").on("click", function() {
        $("#menu").toggleClass("hidden");
    });


    // order.html
    // quantity
    let qty = 0;
    $("#qtyPlus").on("click", () => {
        qty++;
        console.log(qty);
        $("#lblQuantity").text(qty);
        $("#quantity").val(qty);
    });

    $("#qtyMinus").on("click", () => {
        if(qty >= 1){
            qty--;
            console.log(qty);
            $("#lblQuantity").text(qty);
            $("#quantity").val(qty);
        }
    });

    // Select a Size
    $("input[type='radio'][name='size']").on("click", function() {
        if(this.value == "small"){
            console.log("small");
            $(".sizeMedium").removeClass('bg-sky-300');
            $(".sizeSmall").addClass("bg-sky-300");
            $("#price").text("$15,0")
            $("#size").text("/250G")
        }
        else if(this.value == "medium"){
            console.log("medium");
            $(".sizeSmall").removeClass("bg-sky-300");
            $(".sizeMedium").addClass('bg-sky-300');
            $("#price").text("$30,0")
            $("#size").text("/500G")
        }
    });

    // Keep in mind
    $("input[type='radio'][name='keep']").on("click", function() {
        if(this.value == "dry"){
            console.log("dry");
            $(".lblOrigin").removeClass('bg-sky-300');
            $(".lblRoaster").removeClass("bg-sky-300");
            $(".lblDry").addClass("bg-sky-300");
        }
        else if(this.value == "origin"){
            console.log("origin");
            $(".lblDry").removeClass("bg-sky-300");
            $(".lblRoaster").removeClass("bg-sky-300");
            $(".lblOrigin").addClass('bg-sky-300');
        }
        else if(this.value == "roaster"){
            console.log("roaster");
            $(".lblDry").removeClass("bg-sky-300");
            $(".lblOrigin").removeClass("bg-sky-300");
            $(".lblRoaster").addClass("bg-sky-300");
        }
    });
});