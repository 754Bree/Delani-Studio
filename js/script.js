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