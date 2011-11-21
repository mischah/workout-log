(function () {
	
	$(document).bind("mobileinit", function(){
		// True fixed toolbars in iOS5 
		$.mobile.touchOverflowEnabled = false;
		// Disable toggling toolbars on tap
		$.mobile.fixedToolbars.setTouchToggleEnabled(false);
		
		
	});
	
	
	/* Functionalities for page '#training-3' */
	$('#training-3').live('pageinit',function(event){
		
		
		/* Disabling submitting the form */
		$('#exercise').submit(function() {
			//alert('huhu');
			return false;
		});
		
		/* Handling of the stopWatch */
		var stopWatchButton = $('.startTimer', '#stopWatch');
		var stopWatchTimer = $('.timer', '#stopWatch');
		
		stopWatchButton.bind('start', function(){
			var button = $(this);
			stopWatch.start();
			$('.ui-btn-text', button).text('Stop');
		});
		
		stopWatchButton.bind('stop', function(){
			var button = $(this);
			stopWatch.stop();
			$('.ui-btn-text', button).text('Start');
		});
		
		stopWatchButton.bind('update', function(e,data){
			stopWatchTimer.text(data.time);
		});
		
		stopWatchButton.bind('click', function(){
			if (stopWatchButton.hasClass('active')) {
				stopWatchButton.trigger('stop');
			}
			else {
				stopWatchButton.trigger('start');
			}
			stopWatchButton.toggleClass('active');
		});
		
	});
	
	
	
	var stopWatch = {};
	stopWatch.initialTime = 60;
	stopWatch.actualTime = stopWatch.initialTime;
	
	stopWatch.start = function () {
		//Start 
		stopWatch.running = setInterval(stopWatch.run,1000); 
	};
	
	stopWatch.stop = function () {
		//Stop
		clearInterval(stopWatch.running);
		stopWatch.actualTime = stopWatch.initialTime;
		$('.startTimer', '#stopWatch').trigger('update',{ time: stopWatch.actualTime });
	};
		
	stopWatch.run = function () {
		stopWatch.actualTime = stopWatch.actualTime - 1;
		//console.log(stopWatch.actualTime);
		$('.startTimer', '#stopWatch').trigger('update',{ time: stopWatch.actualTime });
	};	
	
	
})();


