var defaults = require('ui/defaults/defaultProperties');

function renderNewPlanWindow(plansWindow, planName) {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	var newPlanWindow = defaultWindow(planName);
	
	/* First level:
	*  Just the button for adding new exercises
	* */
	var tableData = [];
	
	var addRow = Ti.UI.createTableViewRow({
		title: Ti.Locale.getString('addExercises'),
		height: 43,
		editable: false,
		moveable: false
	});

	var addIcon = Ti.UI.createImageView({
		left: 264,
		image: 'images/icon-add.png'
	});
	
	addRow.add(addIcon);
	tableData.push(addRow);

	var renderDefaultTableView  = require('ui/defaults/defaultTableView');
	var table = renderDefaultTableView(tableData);
	newPlanWindow.add(table);
	
		// Second level
	table.addEventListener('click', function(e) {
			// List of exercises
		var renderExercisesWindow = require('ui/plans/exercises');
		renderExercisesWindow(plansWindow);
	});
	
	//containingTab attribute must be set by parent tab group on
	//the window for this work
	var openNewPlanWindow = plansWindow.containingTab.open(newPlanWindow);
	return openNewPlanWindow;
}

module.exports = renderNewPlanWindow;
