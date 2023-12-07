$(document).ready(function(){

    $(".emu").click(function(){
        $(".rui,.nene,.tsukasa").toggle(); 
        $(".emu-text").toggle();
        $(".emu-img").toggle();
    });

    $(".emu-img").click(function(){
        $(".rui,.nene,.tsukasa").toggle(); 
        $(".emu-text").toggle();
        $(".emu-img").toggle();
    });

    $(".rui").click(function(){
        $(".emu,.nene,.tsukasa").toggle();
        $(".rui-text").toggle();
        $(".rui-img").toggle();
    });

    $(".rui-img").click(function(){
        $(".emu,.nene,.tsukasa").toggle();
        $(".rui-text").toggle();
        $(".rui-img").toggle();
    });

    $(".nene").click(function(){
        $(".emu,.rui,.tsukasa").toggle();
        $(".nene-text").toggle();
        $(".nene-img").toggle();
    });

    $(".nene-img").click(function(){
        $(".emu,.rui,.tsukasa").toggle();
        $(".nene-text").toggle();
        $(".nene-img").toggle();
    });

    $(".tsukasa").click(function(){
        $(".emu,.rui,.nene").toggle();
        $(".tsukasa-text").toggle();
        $(".tsukasa-img").toggle();
    });

    $(".tsukasa-img").click(function(){
        $(".emu,.rui,.nene").toggle();
        $(".tsukasa-text").toggle();
        $(".tsukasa-img").toggle();
    });
        
});