function renderListWindow(workOutWindow, e) {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	listWindow = defaultWindow(e.row.title);
	
	var tableData = [ 
		{ title: 'Kniebeugen', header: 'Beine', hasDetail: true },
		{ title: 'Beinpresse', hasDetail: true },
		{ title: 'Wadenheben im stehen', hasDetail: true },
		{ title: 'Wadenheben im sitzen', hasDetail: true },
		{ title: 'Latziehen', header: 'Rücken', hasDetail: true },
		{ title: 'Rudern am Block', hasDetail: true },
		{ title: 'Bandrücken', header: 'Brust', hasDetail: true },
		{ title: 'Butterfly', hasDetail: true },
		{ title: 'Schulterdrücken', header: 'Schultern', hasDetail: true },
		{ title: 'SZ-Curls', header: 'Bizeps', hasDetail: true },
		{ title: 'Crunches', header: 'Bauch', hasDetail: true },
		{ title: 'Beinheben', hasDetail: true }
	];

	var renderDefaultTableView  = require('ui/defaults/defaultTableView');
	var table = renderDefaultTableView(tableData);  
	listWindow.add(table);
	
	//containingTab attribute must be set by parent tab group on
	//the window for this work
	var openListWindow = workOutWindow.containingTab.open(listWindow);
	
	/* Third level:
	*  Detailview of exercises 
	* */
	table.addEventListener('click', function(e) {
		var renderDetailWindow = require('ui/workOut/exercisesDetail');
		renderDetailWindow(workOutWindow, e);
	});
	
	return openListWindow;
};

module.exports = renderListWindow;
