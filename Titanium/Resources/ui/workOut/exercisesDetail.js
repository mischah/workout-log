function renderDetailWindow(workOutWindow, e) {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	detailWindow = defaultWindow(e.row.title);
	
	/*
	var view = Titanium.UI.createView({
	   backgroundColor:'white'
	});
	detailWindow.add(view);
	*/
	
	var label1 = Ti.UI.createLabel({
	  color: '#000',
	  font: { fontSize:20 },
	  text: 'Detailview',
	  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	  top: 30,
	  height: 'auto',
	  width: 'auto'
	});
	
	detailWindow.add(label1);
	//containingTab attribute must be set by parent tab group on
	//the window for this work
	var openDetailWindow = workOutWindow.containingTab.open(detailWindow);
	return openDetailWindow;
};

module.exports = renderDetailWindow;
