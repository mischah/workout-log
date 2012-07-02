function renderDetailWindow(workOutWindow, e) {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	detailWindow = defaultWindow(e.row.title);
	
	// get default view and add him to the window
	var defaultView = require('ui/defaults/defaultView');
	var view = defaultView(); 
	detailWindow.add(view);
	
	// begin of stopwatch ui code
	var stopWatch = {};
	stopWatch.container = Titanium.UI.createView({
	   layout: 'horizontal'
	});
	
	stopWatch.pause = Ti.UI.createLabel({
		left: 4,
		font: { fontSize: 19 },
		text: L('stopWatch.pause')
	});
	
	stopWatch.timer = Ti.UI.createLabel({
		left: 4,
		font: { fontSize: 19 },
		text: '60'
	});
	
	stopWatch.seconds = Ti.UI.createLabel({
		left: 4,		
		font: { fontSize: 19 },
		text: L('stopWatch.seconds')
	});
	
	stopWatch.button = Ti.UI.createButton({
		
	});
	
	stopWatch.button = Titanium.UI.createButton({
		color: '#000',
		font: { fontSize: 19, fontWeight: 'bold' },
		title: 'Go',
	 	left: '30',
	 	width: 'auto',
	 	height: 'auto'
	});
	
	stopWatch.button.addEventListener('click',function(e) {
		alert("You clicked the button");
	});
	
	stopWatch.divider = Titanium.UI.createView({
	   height: 1,
	   width: 320,
	   top: 10,
	   backgroundColor: '#818181'
	});
	
	stopWatch.container.add(stopWatch.pause);
	stopWatch.container.add(stopWatch.timer);
	stopWatch.container.add(stopWatch.seconds);
	stopWatch.container.add(stopWatch.button);
	stopWatch.container.add(stopWatch.divider);
	
	view.add(stopWatch.container);
	
	
	
	//containingTab attribute must be set by parent tab group on
	//the window for this work
	var openDetailWindow = workOutWindow.containingTab.open(detailWindow);
	return openDetailWindow;
};

module.exports = renderDetailWindow;
