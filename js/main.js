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

	// $('.tlt').textillate({
	// 	in: {
	// 	    // set the delay factor applied to each consecutive character
	// 	    delayScale: 1.5,

	// 	    // set the delay between each character
	// 	    delay: 50,

	// 	    // set to true to animate all the characters at the same time
	// 	    sync: true,
	// 	    // callback that executes once the animation has finished
	// 	    callback: function () {}
	// 	}
	// });
});



$(document).ready(function(){
	$(".pleasework.a").mouseenter(function(){
		$(".housemenu.a").slideDown(500);
	});

	$(".pleasework.a").mouseout(function(){
		$(".housemenu.a").slideUp(400);
	});
});

$(document).ready(function(){
	$(".pleasework.b").mouseenter(function(){
		$(".housemenu.b").slideDown(500);
	});

	$(".pleasework.b").mouseout(function(){
		$(".housemenu.b").slideUp(400);
	});
});

$(document).ready(function(){
	$(".pleasework.c").mouseenter(function(){
		$(".housemenu.c").slideDown(500);
	});

	$(".pleasework.c").mouseout(function(){
		$(".housemenu.c").slideUp(400);
	});
});

$(document).ready(function(){
	$(".pleasework.d").mouseenter(function(){
		$(".housemenu.d").slideDown(500);
	});

	$(".pleasework.d").mouseout(function(){
		$(".housemenu.d").slideUp(400);
	});
});


// end ready

