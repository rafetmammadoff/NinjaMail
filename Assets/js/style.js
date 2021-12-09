
$(function(){

    let isOn = localStorage.getItem("dark");

    if(isOn == "on"){
        darkClick();
    }else if(isOn == "off"){
        whiteClick();
    }


    $("#dark").click(function(){
        let isOnClick = localStorage.getItem("dark");
        
        if(isOnClick == "on"){
            localStorage.setItem("dark","off")
        }else{
            localStorage.setItem("dark","on")
        }

        $(".dark-mode").toggleClass("siyah")
        $(".green-zone").toggleClass("green")
        $("#started").toggleClass("green")
        $(".dark-text").toggleClass("white-text")
    });


    
    function darkClick(){
        $(".dark-mode").addClass("siyah")
        $(".green-zone").addClass("green")
        $("#started").addClass("green")

        $(".dark-text").addClass("white-text")
    }

    function whiteClick(){
        $(".dark-mode").removeClass("siyah")
        $(".green-zone").removeClass("green")
        $("#started").removeClass("green")

        $(".dark-text").removeClass("white-text")
    }

  });




























// $(function(){
//     var isOnClick=localStorage.getItem("dark")
//     if(isOnClick=="on"){
//         darkin();
//     }else{
//         whitein();
//     }







//     $("#dark").click(function(){
//         var isOn=localStorage.getItem("dark")
//         if(isOn=="on"){
//             localStorage.setItem("dark","off")
//         }else{
//             localStorage.setItem("dark","on")
//         }
    
    

//         $(".dark-mode").toggleClass("siyah")
//         $(".green-zone").toggleClass("green")
//         $("#started").toggleClass("green")
//         $(".dark-text").toggleClass("white-text")
//     });
// })


// function darkin(){
//         $(".dark-mode").addClass("siyah")
//         $(".green-zone").addClass("green")
//         $("#started").addClass("green")
//         $(".dark-text").addClass("white-text")

// }
// function whitein(){
//     $(".dark-mode").removeClass("siyah")
//     $(".green-zone").removeClass("green")
//     $("#started").removeClass("green")
//     $(".dark-text").removeClass("white-text")

// }
















// $(function(){
//     var isOn=localStorage.getItem("dark")
//     if(isOn=="on"){
//         white()
//     }else{
//         dark()
//     }

//     $("#dark").click(function(){
//         var isOnClick=localStorage.getItem("dark")
//         if(isOnClick=="on"){
//             localStorage.setItem("dark","off")
//         }else{
//             localStorage.setItem("dark","on")
//         }
        

//         $(".dark-mode").toggleClass("siyah")
//         $(".green-zone").toggleClass("green")
//         $("#started").toggleClass("green")
//         $(".dark-text").toggleClass("white-text")
//     });
// })

// function white(){
//     $(".dark-mode").removeClass("siyah")
//         $(".green-zone").removeClass("green")
//         $("#started").removeClass("green")
//         $(".dark-text").removeClass("white-text")
// }
// function dark(){
//     $(".dark-mode").addClass("siyah")
//         $(".green-zone").addClass("green")
//         $("#started").addClass("green")
//         $(".dark-text").addClass("white-text")
// }