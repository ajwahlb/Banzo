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

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('[canvas="container"]').animate({
          scrollTop: target.offset().top
        }, 1000, function()
    }
  });

// $( 'a[href^="#"]' ).on( 'click', function( event ) {
//   event.preventDefault();
//
//   var target = $( this ).attr( 'href' );
//
//   $( '[canvas="container"]' ).animate( {
//     scrollTop: target.offset().top;
//   }, 1000 );
// } );
