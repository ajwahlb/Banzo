// off screen nav

$('.fly-in').click(function(){
	$('.nav-container').toggleClass('slide');
	$('.nav-bg').toggleClass('show');
});


var topofDiv = $(".full-height").offset().top; //gets offset of header
var height = $(".full-height").outerHeight(); //gets height of header

$(window).scroll(function(){
    if($(window).scrollTop() > (topofDiv + height - 60)){
       $("#navbar").addClass('navbar-fixed');
    }
    else{
       $("#navbar").removeClass('navbar-fixed');
    }
});
