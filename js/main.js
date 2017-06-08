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
});



$(document).ready(function(){
	$(".perks").mouseover(function(){
		$(".slidemenu").slideDown("slow");
	});
});