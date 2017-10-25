// off screen nav

$('.fly-in').click(function(){
	console.log("mobile categories clicked!");
	$('.nav-container').toggleClass('slide');
});


var topofDiv = $(".full-height").offset().top; //gets offset of header
var height = $(".full-height").outerHeight(); //gets height of header

$(window).scroll(function(){
    if($(window).scrollTop() > (topofDiv + height - 60)){
       $("#navbar").addClass('navbar-fixed');
       $("#navbar").fadeIn('slow');
    }
    else{
       $("#navbar").removeClass('navbar-fixed');
    }
});