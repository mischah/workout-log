function renderWorkOutWindow() {
	var workOutWindow = Ti.UI.createWindow({
		title:L('workOut'),
		backgroundColor:'white'
	});
	
	/* First level:
	*  List of plans 
	* */
	var tableData = [ 
		{ title: 'Ganzkörpertraining', hasChild: true },
		{ title: 'Zweiersplit - Tag 1', hasChild: true },
		{ title: 'Zweiersplit - Tag 2', hasChild: true }
	];

	var table = Ti.UI.createTableView({
		data: tableData
	});
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
