$(window).scroll(function (e) {
    if ($(window).scrollTop() <= 0)
        $(".explore,.navbar").addClass("at_top");
    else
        $(".explore,.navbar").removeClass("at_top");
});


$(document).on('click', 'a', function (event) {
    var target = $(this).attr("href");
    $('html,body').animate({
        scrollTop: $(target).offset().top
    }, 500);
});   

// 睡魔看滑鼠

$(window).mousemove(function (evt) {
    var pagex = evt.pageX;
    var pagey = evt.pageY;
    $(".holi_about_back_cloud").css("transform", "translateX(" + (pagex / -40 + 50) + "px)")
    $(".holi_about_front_lcloud").css("transform", "translateX(" + (pagex / -50 + 50) + "px)")
    $(".holi_about_front_rcloud").css("transform", "translateX(" + (pagex / -50 + 50) + "px)")

    var x = pagex - $("#section_aptinet_about").offset().left;
    var y = pagey - $("#section_aptinet_about").offset().top;

    var nebutasaiplace = $("#nebutasai_face").offset().left + $("#nebutasai_face").width()/2 ;
    var nebutasaitop = $("#nebutasai_face").offset().top + $("#nebutasai_face").height() / 1.5;
    
    if (pagex < nebutasaiplace - 50)
        $("#nebutasai_face").attr("src","./image/nebutasai_face_left.svg")
    else if (pagex > nebutasaiplace + 50)
        $("#nebutasai_face").attr("src", "./image/nebutasai_face_right.svg")
    else
        $("#nebutasai_face").attr("src", "./image/nebutasai_face_top.svg")
    if (pagex < nebutasaiplace - 50 && pagey > nebutasaitop + 50)
        $("#nebutasai_face").attr("src","./image/nebutasai_face_left_down.svg")
    if (pagex > nebutasaiplace + 50 && pagey > nebutasaitop - 50)
        $("#nebutasai_face").attr("src","./image/nebutasai_face_right_down.svg")
});

//鹿
$(document).ready(function () {
    $(".mala_about_deer").mouseover(function () {
        $(".mala_about_deer").css("background-image", "url(../../image/mala_deer.svg)");
        $(".mala_about_deer").css("width",29.4 + "%");
        $(".mala_about_hunter1").css("top",28 + "%");
        $(".mala_about_hunter1").css("left", 31 + "%");
        $(".mala_about_hunter2").css("top", 34 + "%");
        $(".mala_about_hunter2").css("right", 35 + "%");
        $(".mala_about_hunter3").css("bottom", 30 + "%");
        $(".mala_about_hunter3").css("left", 14 + "%");
    });
    $(".mala_about_deer").mouseout(function () {
        $(".mala_about_deer").css("background-image", "url(../../image/mala_deer_lookback.svg)");
        $(".mala_about_deer").css("width", 17.4 + "%");
        $(".mala_about_hunter1").css("top", 30 + "%");
        $(".mala_about_hunter1").css("left", 28 + "%");
        $(".mala_about_hunter2").css("top", 30 + "%");
        $(".mala_about_hunter2").css("right", 32 + "%");
        $(".mala_about_hunter3").css("bottom", 22 + "%");
        $(".mala_about_hunter3").css("left", 9 + "%");
    });
});