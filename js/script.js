$(document).ready(function () {

    // toggle
    $('#design').click(function () {
        $(this).hide();
        $('.design').show();
    });
    $('.design').click(function () {
        $(this).hide();
        $('#design').show();
    });
    $('#dev').click(function () {
        $(this).hide();
        $('.dev').toggle();
    });
    $('.dev').click(function () {
        $(this).hide();
        $('#dev').toggle();
    });
    $('#product').click(function () {
        $(this).hide();
        $('.product').toggle();
    });
    $('.product').click(function () {
        $(this).hide();
        $('#product').toggle();
    });

    // overlays
    $(".one").mouseover(function () {
        $("#one").show();
    });
    $(".one").mouseout(function () {
        $("#one").hide();
    });

    $(".two").mouseover(function () {
        $("#two").show();
    });
    $(".two").mouseout(function () {
        $("#two").hide();
    });
    $(".three").mouseover(function () {
        $("#three").show();
    });
    $(".three").mouseout(function () {
        $("#three").hide();
    });
    $(".four").mouseover(function () {
        $("#four").show();
    });
    $(".four").mouseout(function () {
        $("#four").hide();
    });
    $(".five").mouseover(function () {
        $("#five").show();
    });
    $(".five").mouseout(function () {
        $("#five").hide();
    });
    $(".six").mouseover(function () {
        $("#six").show();
    });
    $(".six").mouseout(function () {
        $("#six").hide();
    });
    $(".seven").mouseover(function () {
        $("#seven").show();
    });
    $(".seven").mouseout(function () {
        $("#seven").hide();
    });
    $(".eight").mouseover(function () {
        $("#eight").show();
    });
    $(".eight").mouseout(function () {
        $("#eight").hide();
    });

    //submit message
    $("form#feedbackform").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        alert("Dear " + name + " we have received your message. Thank you for reaching out to Delani Studio");
        document.getElementById("feedbackform").reset();
    })
});













/*function myFunction() {
    var x = document.getElementById("myText");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}*/



/*$ (document).ready(function() {

    //What we do:
    $('.des').click(){
        $('.text-1').toggle();
        $('.des1').toggle();
    });

    $('.dev').click(function(){
        $('.text-2').toggle();
        $('.dev1').toggle();
    });

    $('.prod').click(function () {
        $('.text-3').toggle();
        $('.prod1').toggle();
    });


});*/
