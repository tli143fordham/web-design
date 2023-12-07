$(document).ready(function(){

    $(".green-leaf, .pink-leaf, .yellow-leaf").click(function(){
        $(this).hide();
    });

// comment     
    $(".reset").click(function(){
        $(".green-leaf, .pink-leaf, .yellow-leaf").show();
    });

    $(".purple-leaf").click(function(){
        $(".purple-leaf2").fadeIn(6000);
    });

    $(".purple-leaf").mouseenter(function(){
        $(".yellow-leaf,.pink-leaf,.green-leaf").fadeOut('slow');
    }).mouseleave(function(){
        $(".yellow-leaf,.pink-leaf,.green-leaf").fadeIn('fast');
    });

// flowers

    $(".div1").click(function(){
        $(".div2,.div3,.div4").toggle();
        $(".div1-text").toggle();
        $(this).toggleClass("front");
    });

    $(".div2").click(function(){
        $(".div1,.div3,.div4").fadeToggle("slow");
        $(".div2-text").fadeToggle("slow");
        $(this).toggleClass("front","slow");
    });

    $(".div3").click(function(){
        $(".div1,.div2,.div4").toggle();
        $(".div3-text").toggle();
        $(this).toggleClass("front");
    });

    $(".div4").click(function(){
        $(".div1,.div3,.div2").toggle();
        $(".div4-text").toggle();
        $(this).toggleClass("front");
    });


//tree interaction

    $("h4").click(function(){
        $(this).next(".tree-text").slideToggle();
        $(this).addClass("amogis");
        $(this).siblings().removeClass("amogis");
        $(this).parent("li").siblings("li").find(".tree-text").slideUp();
    });
//header
    $(".link").click(function(){
        $(this).addClass("hilight");
        $(this).siblings().removeClass("hilight");

        $($(this).attr("href")).addClass("active").siblings().removeClass("active");
    })
});