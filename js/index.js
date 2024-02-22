console.log("External JS file LINKED!!!!");

//smooth scrolling to My Work and My Skills Sections
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 300, function(){
          window.location.hash = hash;
        });
      }
    });
  });

//animates button to become larger when clicked
  $(".primarybtn").click(function(){
    $(this).animate({fontSize: '1em'});
  });

//nav links hover styling
  $("a").mouseenter(function(){
    $(this).css({
      "color": "gold",
      "font-weight":"500"
    });
  });
  $("a").mouseleave(function(){
    $(this).css({
      "color": "white",
      "font-weight":"300"
    });
  });


  // BACK TO TOP BUTTON
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
