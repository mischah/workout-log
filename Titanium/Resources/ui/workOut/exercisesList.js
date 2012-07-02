function renderListWindow(workOutWindow, e) {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	listWindow = defaultWindow(e.row.title);
	
	// get default view and add him to the window
	var defaultView = require('ui/defaults/defaultView');
	var view = defaultView(); 
	listWindow.add(view);
	
	var tableData = [ 
		{ title: 'Kniebeugen', hasDetail: true },
		{ title: 'Beinpresse', hasDetail: true },
		{ title: 'Wadenheben im stehen', hasDetail: true },
		{ title: 'Wadenheben im sitzen', hasDetail: true },
		{ title: 'Latziehen', hasDetail: true },
		{ title: 'Rudern am Block', hasDetail: true },
		{ title: 'Bandrücken', hasDetail: true },
		{ title: 'Butterfly', hasDetail: true },
		{ title: 'Schulterdrücken', hasDetail: true },
		{ title: 'Nosebreaker', hasDetail: true },
		{ title: 'SZ-Curls', hasDetail: true },
		{ title: 'Scott-Curls', hasDetail: true },
		{ title: 'Crunches', hasDetail: true },
		{ title: 'Beinheben', hasDetail: true }
	];

	var renderDefaultTableView  = require('ui/defaults/defaultTableView');
	var table = renderDefaultTableView(tableData);  
	view.add(table);
	
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
