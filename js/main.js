//Remover los title de los a

window.onload = function () {
    
    
    
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.onmouseover = function () {
            this.setAttribute("org_title", this.title);
            this.title = "";
        };
        link.onmouseout = function () {
            this.title = this.getAttribute("org_title");
        };
    }
};

// JavaScript
window.sr = ScrollReveal({
    reset: false
});

var hero = {
    origin: "top",
    distance: "24px",
    duration: 900,
    scale: 1.05,
}


var clientes = {
    origin: "top",
    distance: "24px",
    duration: 1200,
    scale: 1.05,
    delay: 900,
}

var intro = {
    origin: "bottom",
    distance: "64px",
    duration: 900,
    delay: 800,
    scale: 1,
}

var resaltado = {
    origin: "left",
    distance: "32px",
    duration: 1200,
    delay: 400,
    scale: 0,
}


var aplicaciones = {
    origin: "top",
    distance: "24px",
    duration: 1000,
    scale: 1.05,
    delay: 900
}


var titulo = {
    origin: "bottom",
    distance: "32px",
    duration: 1000,
    delay: 0,
    scale: 0,
}

var subtituloH3 = {
    origin: "bottom",
    distance: "32px",
    duration: 900,
    delay: 200,
    scale: 0,
}

var subtituloH4 = {
    origin: "bottom",
    distance: "32px",
    duration: 900,
    delay: 300,
    scale: 0,
}



var contenido = {
    origin: "bottom",
    distance: "32px",
    duration: 1000,
    delay: 400,
    scale: 0,
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//Animación en general
sr.reveal('.template-section h1, .template-section h2', titulo);
sr.reveal('.template-section h3', subtituloH3);
sr.reveal('.template-section h4', subtituloH4);




function addCommasToNum(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


//smooth scroll
jQuery(function ($) {

    // Smooth scrolling when clicking on a hash link
    $('a[href*="#"]').on('click', function (e) {
        

        var target = this.hash;
        var $target = $(target);
        var clase = $(target).attr("class");

        if (clase == "template-section") {
            e.preventDefault();
            
            if ($(window).width() > 1023) {
                var $scrollTop = $target.offset().top - 140;
            } else {
                var $scrollTop = $target.offset().top;
            }

            $('html, body').stop().animate({
                'scrollTop': $scrollTop
            }, 900, 'swing');
        }
    });

    
    function cambiarfondo (src) {
        for (x=1; x<=9; x++) {
            celda = ".banner"+x;
            //console.log(celda);
            $(celda).css("background-image", src); 
           
       }
    }
  
   
  $('.banner1').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)");}
  );
      $('.banner2').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)");}
  );
      $('.banner3').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)");}
  );
      $('.banner4').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)");}
  );
      $('.banner5').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)");}
  );
      $('.banner6').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)");}
  );
      $('.banner7').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)");}
  );
      $('.banner8').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)");}
  );
      $('.banner9').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)");},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)");}
  );
    

    
    
    
     /*   $('.banner1').toggle(function (e) {
    cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)");
}, function () {
    cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)");
});
        
      */  
   
  
/*    $('.banner2').on('click', function (e)  {
    cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)");
    } );
*/


});
