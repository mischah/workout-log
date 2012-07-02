function renderDetailWindow(workOutWindow, e) {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	detailWindow = defaultWindow(e.row.title);
	
	// get default view and add him to the window
	var defaultView = require('ui/defaults/defaultView');
	var container = defaultView(); 
	detailWindow.add(container);
	
	
	
	
	var label1 = Ti.UI.createLabel({
		backgroundColor: '#ffd2d2',		
		color: '#000',
		font: {
			fontSize: 18
		},
		text: 'Satzpause: 60 Sekunden',
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		left: 0,
		top: 0,
		height: 'auto',
		width: 'auto'
	});
	
	container.add(label1);
	//containingTab attribute must be set by parent tab group on
	//the window for this work
	var openDetailWindow = workOutWindow.containingTab.open(detailWindow);
	return openDetailWindow;
};

module.exports = renderDetailWindow;
