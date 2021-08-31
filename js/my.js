// off screen nav

$('.fly-in').click(function(){
	$('.nav-container').toggleClass('slide');
	$('.nav-bg').toggleClass('show');
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
