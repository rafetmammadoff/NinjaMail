
$(function(){
    $("#dark").click(function(){
        $(".dark-mode").toggleClass("siyah")
        $(".green-zone").toggleClass("green")
        $("#started").toggleClass("green")

        $(".dark-text").toggleClass("white-text")

    });
  });