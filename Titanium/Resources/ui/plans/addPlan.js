function renderAddPlanWindow(myWindow, e) {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	var AddPlanWindow = defaultWindow(e.row.title);
	
	// get default view and add him to the window
	var defaultView = require('ui/defaults/defaultView');
	var view = defaultView();
	AddPlanWindow.add(view);
	
	var output = Ti.UI.createLabel({
		top: 0,
		font: { fontSize: 19 },
		text: Ti.Locale.getString('Neuen Trainingsplan anlegen …')
	});
	
	view.add(output);
	
	//containingTab attribute must be set by parent tab group on
	//the window for this work
	var openAddPlanWindow = myWindow.containingTab.open(AddPlanWindow);
	return openAddPlanWindow;
}

module.exports = renderAddPlanWindow;
