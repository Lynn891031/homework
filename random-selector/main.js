/*
window.onload=function(){
    //document.write("Hello JavaScript!");
};
*/

$(document).ready(function(){
    $("input").click(function(){
        //alert("Hi");
        //$("H1").text("Hello");
        //Math.random(): 0 ~ 0.999xxx
        //0~0.999xxx * 3 = 0 ~ 2.999xxx
        //Math.floor:向上整數 => 0,1,2
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());               
        $("#random-pic").attr("src","random-selector/"+randomChildNumber+".jpg");
    });
});