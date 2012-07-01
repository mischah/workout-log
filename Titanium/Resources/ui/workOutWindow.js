function workOutWindow() {
	var self = Ti.UI.createWindow({
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
	self.add(table);
	
	/* Second level:
	*  List of exercises 
	* */
	table.addEventListener('click', function(e) {
		var childWindow = Ti.UI.createWindow({
			title: e.row.title,
			backgroundColor:'white'
		});
		
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(childWindow);
		
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
	
		var table = Ti.UI.createTableView({
			data: tableData
		});
		childWindow.add(table);
		
		/* Third level:
		*  Detailview of exercises 
		* */
		table.addEventListener('click', function(e) {
			
			var detailView = require('ui/workOut/detailView');
			detailView(self, e);
			
		});
		
	});
	
	return self;
};

module.exports = workOutWindow;
