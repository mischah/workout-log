function renderWorkOutWindow() {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	workOutWindow = defaultWindow(L('workOut'));
	
	/* First level:
	*  List of plans 
	* */
	var tableData = [ 
		{ title: 'Ganzkörpertraining', header:L('plans'), hasChild: true },
		{ title: 'Zweiersplit - Tag 1', hasChild: true },
		{ title: 'Zweiersplit - Tag 2', hasChild: true }
	];

	var renderDefaultTableView  = require('ui/defaults/defaultTableView');
	var table = renderDefaultTableView(tableData);  
	workOutWindow.add(table);
	
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
