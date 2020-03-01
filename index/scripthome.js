$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    //this is dumb code i would'nt normally write it :
    $("#flexonthem").children().attr({
        style: "order : 50"
    });
    $('#at1').on('click', function () {
        var rank = $("#art1").attr("style").substring(8);
        rankint = parseInt(rank);
        rankint--;
        $("#art1").attr({
            style: "order : " + rankint.toString(10)
        });
    });
    $('#at2').on('click', function () {
        var rank = $("#art2").attr("style").substring(8);
        rankint = parseInt(rank);
        rankint--;
        $("#art2").attr({
            style: "order : " + rankint.toString(10)
        });
    });
    $('#at3').on('click', function () {
        var rank = $("#art3").attr("style").substring(8);
        rankint = parseInt(rank);
        rankint--;
        $("#art3").attr({
            style: "order : " + rankint.toString(10)
        });
    });
    $('#at4').on('click', function () {
        var rank = $("#art4").attr("style").substring(8);
        rankint = parseInt(rank);
        rankint--;
        $("#art4").attr({
            style: "order : " + rankint.toString(10)
        });
    });
    $('#at5').on('click', function () {
        var rank = $("#art5").attr("style").substring(8);
        rankint = parseInt(rank);
        rankint--;
        $("#art5").attr({
            style: "order : " + rankint.toString(10)
        });
    });
    $('#at6').on('click', function () {
        var rank = $("#art6").attr("style").substring(8);
        rankint = parseInt(rank);
        rankint--;
        $("#art6").attr({
            style: "order : " + rankint.toString(10)
        });
    });
    $('#at7').on('click', function () {
        var rank = $("#art7").attr("style").substring(8);
        rankint = parseInt(rank);
        rankint--;
        $("#art7").attr({
            style: "order : " + rankint.toString(10)
        });
    });
    $('#at8').on('click', function () {
        var rank = $("#art8").attr("style").substring(8);
        rankint = parseInt(rank);
        rankint--;
        $("#art8").attr({
            style: "order : " + rankint.toString(10)
        });
    });
})