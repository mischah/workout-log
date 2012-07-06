function renderPlansWindow() {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	var plansWindow = defaultWindow(Ti.Locale.getString('plans'));
	
	/* First level:
	*  List of plans and first row for adding a plan
	* */
	var tableData = [
		{ title: 'Ganzkörpertraining', header:Ti.Locale.getString('plans'), hasChild: true },
		{ title: 'Zweiersplit - Tag 1', hasChild: true },
		{ title: 'Zweiersplit - Tag 2', hasChild: true }
	];
	
	var row = Ti.UI.createTableViewRow({
		title: 'Neuen Plan anlegen',
		height: 43
	});

	var image = Ti.UI.createImageView({
		left: 264,
		url: 'images/icon-add.png'
	});
	
	row.add(image);
	tableData.unshift(row);

	var renderDefaultTableView  = require('ui/defaults/defaultTableView');
	var table = renderDefaultTableView(tableData);
	plansWindow.add(table);
	
	var editButton = Ti.UI.createButton({
		title: 'Bearbeiten'
	});
	plansWindow.setRightNavButton(editButton);
	
	/* Second level:
	*  List of exercises
	* */
	
	table.addEventListener('click', function(e) {
		//var renderListWindow = require('ui/workOut/exercisesList');
		//renderListWindow(workOutWindow, e);
	});
	
	return plansWindow;
}

module.exports = renderPlansWindow;
