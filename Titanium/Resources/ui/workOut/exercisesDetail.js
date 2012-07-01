function renderDetailWindow(workOutWindow, e) {
	var detailWindow = Ti.UI.createWindow({
		title: e.row.title,
		backgroundColor:'white'
	});
	
	/*
	var view = Titanium.UI.createView({
	   backgroundColor:'white'
	});
	childWindow.add(view);
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
