$(function(){
	var options = [
	    ["a CIO"],
	    ["a talent accelerator"],
	    ["a non-profit"],
	    ["fun"],
	    ["professional"],
	    ["a startup hub"],
	    ["for education"]
	];

	var interval = 4000;

	var holder1 = $(".holder-1");
	var currentIndex = 0;

	function doIt() {
		holder1.fadeIn(2000);
	    holder1.fadeOut(2000);
	    holder1.html(options[currentIndex][0]);
	    currentIndex = (currentIndex + 1) % options.length;
	    setTimeout(doIt, interval);
	}

	doIt();

	$("nav").find("a").click(function(e) {
	    e.preventDefault();
	    var section = $(this).attr("href");
	    $("html, body").animate({
	        scrollTop: $(section).offset().top -60
	    },500, 'easeInOutExpo');
	});
});



$(document).ready(function(){
	$("img#house").mouseover(function(){
		$(".housemenu").slideDown("slow");
	});

	$("img#house").mouseleave(function(){
		$(".housemenu").slideUp("slow");
	})
});

