var defaults = require('ui/defaults/defaultProperties');

function renderNewPlanWindow(plansWindow, planName) {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	var newPlanWindow = defaultWindow(planName);
	
	// get default view and add him to the window
	var defaultView = require('ui/defaults/defaultView');
	var view = defaultView();
	newPlanWindow.add(view);
	
	var output = Ti.UI.createLabel({
		text: 'newPlanWindow'
	});
    
	view.add(output);
	
	//containingTab attribute must be set by parent tab group on
	//the window for this work
	var openNewPlanWindow = plansWindow.containingTab.open(newPlanWindow);
	return openNewPlanWindow;
}

module.exports = renderNewPlanWindow;
