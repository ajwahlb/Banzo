// off screen nav

$('.fly-in').click(function(){
	$('.nav-container').toggleClass('slide');
	$('.nav-bg').toggleClass('show');
});

$('.hp-cater').click(function(){
	$('.collapse').slideToggle().toggleClass('open d-flex');
});

// var topofDiv = $(".full-height").offset().top; //gets offset of header
// var height = $(".full-height").outerHeight(); //gets height of header
//
// $(window).scroll(function(){
//     if($(window).scrollTop() > (topofDiv + height - 100)){
//        $("#navbar").addClass('navbar-fixed');
//     }
//     else{
//        $("#navbar").removeClass('navbar-fixed');
//     }
// });
$( 'a[href^="#"]' ).on( 'click', function( event ) {
  event.preventDefault();

  var target = $( this ).attr( 'href' );

  $( '[canvas="container"]' ).animate( {
    scrollTop: target.offset().top;
  }, 1000 );
} );
