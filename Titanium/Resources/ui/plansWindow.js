function renderPlansWindow() {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	var plansWindow = defaultWindow(Ti.Locale.getString('plans'));
	
	/* First level:
	*  List of plans and first row for adding a plan
	* */
	var tableData = [
		{ title: 'Ganzkörpertraining', header:Ti.Locale.getString('availablePlans'), hasChild: true },
		{ title: 'Zweiersplit - Tag 1', hasChild: true },
		{ title: 'Zweiersplit - Tag 2', hasChild: true }
	];
	
	var addRow = Ti.UI.createTableViewRow({
		title: Ti.Locale.getString('newPlan'),
		height: 43,
		editable: false,
		moveable: false
	});

	var addIcon = Ti.UI.createImageView({
		left: 264,
		image: 'images/icon-add.png'
	});
	
	addRow.add(addIcon);
	tableData.unshift(addRow);

	var renderDefaultTableView  = require('ui/defaults/defaultTableView');
	var table = renderDefaultTableView(tableData);
	plansWindow.add(table);
	
	table.setEditable(true);
	table.setMoveable(true);
	
	var editButton = Ti.UI.createButton({
		title: Ti.Locale.getString('edit')
	});
	
	plansWindow.setRightNavButton(editButton);
	
	editButton.addEventListener('click', function () {
		plansWindow.setRightNavButton(cancelButton);
		table.editing = true;
	});
	
	var cancelButton = Ti.UI.createButton({
		title: Ti.Locale.getString('cancel'),
		style: Ti.UI.iPhone.SystemButtonStyle.DONE
	});
	
	cancelButton.addEventListener('click', function () {
		plansWindow.setRightNavButton(editButton);
		table.editing = false;
	});
	
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
