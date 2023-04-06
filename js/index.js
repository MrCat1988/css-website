    $("#btn-mobile").click(function(){
        let menu = document.querySelector("#general-menu");
        if (menu.style.display == "none") {
            menu.style.display = "block";
          } else {
            menu.style.display = "none";

          }
    }); 
    screen.orientation.lock("portrait");