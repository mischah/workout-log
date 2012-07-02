function renderWorkOutWindow() {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	workOutWindow = defaultWindow(L('workOut'));
	
	// get default view and add him to the window
	var defaultView = require('ui/defaults/defaultView');
	var view = defaultView(); 
	workOutWindow.add(view);
	
	/* First level:
	*  List of plans 
	* */
	var tableData = [ 
		{ title: 'Ganzkörpertraining', hasChild: true },
		{ title: 'Zweiersplit - Tag 1', hasChild: true },
		{ title: 'Zweiersplit - Tag 2', hasChild: true }
	];

	var renderDefaultTableView  = require('ui/defaults/defaultTableView');
	var table = renderDefaultTableView(tableData);  
	view.add(table);
	
	/* Second level:
	*  List of exercises 
	* */
	
	table.addEventListener('click', function(e) {
		var renderListWindow = require('ui/workOut/exercisesList');
		renderListWindow(workOutWindow, e);
	});
	
	return workOutWindow;
};

module.exports = renderWorkOutWindow;
