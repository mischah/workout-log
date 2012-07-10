var defaults = require('ui/defaults/defaultProperties');

function renderFillPlanWindow(plansWindow, planName) {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	var fillPlanWindow = defaultWindow(planName);
	
	// get default view and add him to the window
	var defaultView = require('ui/defaults/defaultView');
	var view = defaultView();
	fillPlanWindow.add(view);
	
	var output = Ti.UI.createLabel({
		text: 'fillPlanWindow'
	});
    
	view.add(output);
	
	//containingTab attribute must be set by parent tab group on
	//the window for this work
	var openFillPlanWindow = plansWindow.containingTab.open(fillPlanWindow);
	return openFillPlanWindow;
}

module.exports = renderFillPlanWindow;
