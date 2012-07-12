var defaults = require('ui/defaults/defaultProperties');

function renderExercisesWindow(plansWindow) {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	var exercisesWindow = defaultWindow(Ti.Locale.getString('exercises'));
	
	// get default view and add him to the window
	var defaultView = require('ui/defaults/defaultView');
	var view = defaultView();
	exercisesWindow.add(view);
	
	var output = Ti.UI.createLabel({
		text: 'exercisesWindow'
	});
    
	view.add(output);
	
	//containingTab attribute must be set by parent tab group on
	//the window for this work
	var openExercisesWindow = plansWindow.containingTab.open(exercisesWindow);
	return openExercisesWindow;
}

module.exports = renderExercisesWindow;