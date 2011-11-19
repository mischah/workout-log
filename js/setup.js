(function () {
	
	$(document).bind("mobileinit", function(){
	  	// True fixed toolbars in iOS5 
	  	$.mobile.touchOverflowEnabled = false;
	  	// Disable toggling toolbars on tap
	  	$.mobile.fixedToolbars.setTouchToggleEnabled(false);
	});
	
	
	
	$('#training-1').live('pageinit',function(event){
  		//alert( 'This page was just enhanced by jQuery Mobile!' );
	});
	//alert( 'Nur so' );
	
	
	
	
})();


