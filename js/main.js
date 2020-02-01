var numRoses = 0;

function start() {
    //alert("start");


    $("#addRose").click(function() {
        numRoses++;
        if (numRoses < 2)
            $("#numRoses").text(numRoses+ " rose");
        else
            $("#numRoses").text(numRoses+ " roses");
        $("#roses").append("<img src='images/rose.jpg'>")

    })


    $("#reset").click(function(){
        numRoses = 0;
        $("#roses").html("");
        $("#numRoses").text("");
    })


}