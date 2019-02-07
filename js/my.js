// off screen nav

$('.fly-in').click(function(){
	$('.nav-container').toggleClass('slide');
	$('.nav-bg').toggleClass('show');
});

$('.hp-cater').click(function(){
	$('.collapse').slideToggle().toggleClass('open d-flex');
});

var topofDiv = $(".full-height").offset().top; //gets offset of header
var height = $(".full-height").outerHeight(); //gets height of header

$(window).scroll(function(){
    if($(window).scrollTop() > (topofDiv + height - 100)){
       $("#navbar").addClass('navbar-fixed');
    }
    else{
       $("#navbar").removeClass('navbar-fixed');
    }
});

// left and right slide in doodads
( function ( $ ) {
	// Initialize Slidebars
	var controller = new slidebars();
	controller.init();
	// Toggle Slidebars
	 $( '.toggle-slidebar-1' ).on( 'click', function ( event ) {
		 // Stop default action and bubbling
		 event.stopPropagation();
		 event.preventDefault();

		 // Toggle the Slidebar with id 'slidebar-1'
		 controller.toggle( 'slidebar-1' );
	 } );
	// Toggle Slidebars
	 $( '.toggle-slidebar-2' ).on( 'click', function ( event ) {
		 // Stop default action and bubbling
		 event.stopPropagation();
		 event.preventDefault();

		 // Toggle the Slidebar with id 'slidebar-2'
		 controller.toggle( 'slidebar-2' );
	 } );
} ) ( jQuery );

// scroll to function?
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('.wrap').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
