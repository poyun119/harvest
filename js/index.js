function index_logo() {
    $(".index_logo").css("opacity", "1");
    $(".cheese-fv").css("opacity", "0");
    $(".ear-fv").css("opacity", "0");
    $(".holi-fv").css("opacity", "0");
    $(".aptinet-fv").css("opacity", "0");
    $(".aptinet-fv").css("opacity", "0");
    $(".b1").css("opacity", "1");
    $(".b2").css("opacity", "0.3");
    $(".b3").css("opacity", "0.3");
    $(".b4").css("opacity", "0.3");
    $(".b5").css("opacity", "0.3");
}
function cheesefv() {
    $(".index_logo").css("display", "none");
    $(".cheese-fv").css("display", "block");
    $(".aptinet-fv").css("display", "none");
    $(".ear-fv").css("display", "none");
    $(".holi-fv").css("display", "none");
    $(".aptinet-fv").css("display", "none");
    $(".b2").css("opacity", "1");
    $(".b1").css("opacity", "0.3");
    $(".b3").css("opacity", "0.3");
    $(".b4").css("opacity", "0.3");
    $(".b5").css("opacity", "0.3");
}
function earfv() {
    $(".index_logo").css("display", "none");
    $(".cheese-fv").css("display", "none");
    $(".holi-fv").css("display", "none");
    $(".aptinet-fv").css("display", "none");
    $(".ear-fv").css("display", "block");
    $(".b1").css("opacity", "0.3");
    $(".b2").css("opacity", "0.3");
    $(".b3").css("opacity", "1");
    $(".b4").css("opacity", "0.3");
    $(".b5").css("opacity", "0.3");
}
function holifv() {
    $(".index_logo").css("display", "none");
    $(".cheese-fv").css("display", "none");
    $(".ear-fv").css("display", "none");
    $(".holi-fv").css("display", "block");
    $(".aptinet-fv").css("display", "none");
    $(".b1").css("opacity", "0.3");
    $(".b2").css("opacity", "0.3");
    $(".b3").css("opacity", "0.3");
    $(".b4").css("opacity", "1");
    $(".b5").css("opacity", "0.3");
}
function aptinetfv() {
    $(".index_logo").css("display", "none");
    $(".cheese-fv").css("display", "none");
    $(".ear-fv").css("display", "none");
    $(".holi-fv").css("display", "none");
    $(".aptinet-fv").css("display", "block");
    $(".b1").css("opacity", "0.3");
    $(".b2").css("opacity", "0.3");
    $(".b3").css("opacity", "0.3");
    $(".b4").css("opacity", "0.3");
    $(".b5").css("opacity", "1");
}
// var festival = ['index_logo', 'cheesefv', 'earfv', 'holifv','aptinetfv']
// var waittime = 0 ;
// setInterval(function() {
//     waittime += 1 ;
//     if(waittime <= 5)
//     {
//         setTimeout('index_logo()',1);
//     }
//     else if(waittime <= 10)
//     {
//         setTimeout('cheesefv()', 1);
//     }
//     else if (waittime <= 15) {
//         setTimeout('earfv()', 1);
//     }
//     else if (waittime <= 20) {
//         setTimeout('holifv()', 1);
//     }
//     else if (waittime <= 25) {
//         setTimeout('aptinetfv()', 1);
//     }
//     else if (waittime > 25) {
//         waittime = 0 ;
//     }
// }, 1000);

$(document).ready(function () {
    $(".b1").click(
        function () {
            $(".index_logo").css("display", "block");
            $(".cheese-fv").css("display", "none");
            $(".ear-fv").css("display", "none");
            $(".holi-fv").css("display", "none");
            $(".aptinet-fv").css("display", "none");
            $(".b1").css("opacity", "1");
            $(".b2").css("opacity", "0.3");
            $(".b3").css("opacity", "0.3");
            $(".b4").css("opacity", "0.3");
            $(".b5").css("opacity", "0.3");
        }
    );
    $(".b2").click(
        function () {
            $(".index_logo").css("display", "none");
            $(".cheese-fv").css("display", "block");
            $(".aptinet-fv").css("display", "none");
            $(".ear-fv").css("display", "none");
            $(".holi-fv").css("display", "none");
            $(".aptinet-fv").css("display", "none");
            $(".b2").css("opacity", "1");
            $(".b1").css("opacity", "0.3");
            $(".b3").css("opacity", "0.3");
            $(".b4").css("opacity", "0.3");
            $(".b5").css("opacity", "0.3");
        }
    );
    $(".b3").click(
        function () {
            $(".index_logo").css("display", "none");
            $(".cheese-fv").css("display", "none");
            $(".holi-fv").css("display", "none");
            $(".aptinet-fv").css("display", "none");
            $(".ear-fv").css("display", "block");
            $(".b1").css("opacity", "0.3");
            $(".b2").css("opacity", "0.3");
            $(".b3").css("opacity", "1");
            $(".b4").css("opacity", "0.3");
            $(".b5").css("opacity", "0.3");
        }
    );
    $(".b4").click(
        function () {
            $(".index_logo").css("display", "none");
            $(".ear-fv").css("display", "none");
            $(".cheese-fv").css("display", "none");
            $(".ear-fv").css("display", "none");
            $(".holi-fv").css("display", "block");
            $(".aptinet-fv").css("display", "none");
            $(".b1").css("opacity", "0.3");
            $(".b2").css("opacity", "0.3");
            $(".b3").css("opacity", "0.3");
            $(".b4").css("opacity", "1");
            $(".b5").css("opacity", "0.3");
        }
    );
    $(".b5").click(
        function () {
            $(".index_logo").css("display", "none");
            $(".ear-fv").css("display", "none");
            $(".cheese-fv").css("display", "none");
            $(".ear-fv").css("display", "none");
            $(".holi-fv").css("display", "none");
            $(".aptinet-fv").css("display", "block");
            $(".b1").css("opacity", "0.3");
            $(".b2").css("opacity", "0.3");
            $(".b3").css("opacity", "0.3");
            $(".b4").css("opacity", "0.3");
            $(".b5").css("opacity", "1");
        });
});
