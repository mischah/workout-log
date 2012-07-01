function renderDetailView(workOutWindow, e) {
	var childWindow = Ti.UI.createWindow({
		title: e.row.title,
		//title: 'detailview',
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
	
	childWindow.add(label1);
	//containingTab attribute must be set by parent tab group on
	//the window for this work
	var detailWindow = workOutWindow.containingTab.open(childWindow);
	return detailWindow;
};

module.exports = renderDetailView;
