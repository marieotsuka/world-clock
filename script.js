$(document).ready(function(){
	var type = $('body').attr('id');

	// $('#switch').click(function(){
	// 	type = "PM";
	// 	$('img').each(function(){
	// 		var oldsrc = $(this).attr('src');
	// 		var newsrc = oldsrc.replace("AM", "PM");
	// 		$(this).attr('src', newsrc);
	// 	});

	// });



	var ms = 0, seconds = 0, minutes = 0, hours = 0, t;
	
	function add() {
	    ms++;
	    if (ms >= 60) {
	    	ms = 0;
	   		seconds++;
		    if (seconds >= 60) {
		        seconds = 0;
		        minutes++;
		        if (minutes >= 60) {
		            minutes = 0;
		            hours++;
		        }
		    }
		 }

	    showImage(ms,seconds,hours);

	    if(minutes<1){
	    	timer();
	    }
	    else if(minutes===1){
	    	end();
	    }
	}

	function timer() {
	    t = setTimeout(add, 16.67);
	}

	timer();


	function showImage(m,s,h){
		if(m<10){
			m = "0" + m; 
		}
		if(s<10){
			s = "0" + s; 
		}

		if(type =="both"){
			$("img[src^='images/AM/"+s+m+"']").addClass("show");
			$("img[src^='images/PM/"+s+m+"']").addClass("show");
		}else{
			$("img[src^='images/"+type+"/"+s+m+"']").addClass("show");
		}

		console.log(s+" "+m)

		$('.ms').text(m);
		$('.s').text(s);

	}

	var locations = [
	"Deakin, Australia",
	"Nagasaki, Japan",
	"Hsinchu, Taiwan",
	"Mordovia, Russia",
	"Naples, Italy",
	"Utrecht, The Netherlands",
	"Leontica, Switzerland",
	"Oliveira, Brazil",
	"Massachusetts, US",
	"Philadelphia, US",
	"Arizona, US",
	"Alaska, US"
	];

	$('.frame').each(function( index) {
	   	$(this).append('<div class="label">'+ locations[index]+ '</div>');
	 });


	function end(){
		if (type =="AM"){
			$('.h').text("02");
		}else if(type=="PM"){
			$('.h').text("14");
		}else{
			$('.h').text("2");
		}
		$('img').fadeOut(600);
		$('.label').fadeIn(600);

	}

});