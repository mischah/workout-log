function workOutWindow() {
	var self = Ti.UI.createWindow({
		title:L('workOut'),
		backgroundColor:'white'
	});
	
	var tableData = [ 
		{ title: 'Ganzkörpertraining', hasChild: true },
		{ title: 'Zweiersplit - Tag 1', hasChild: true },
		{ title: 'Zweiersplit - Tag 2', hasChild: true }
	];

	var table = Ti.UI.createTableView({
		data: tableData
	});
	self.add(table);
	
	table.addEventListener('click', function(e) {
		//alert('You clicked row '+e.row.title);
		
		var childWindow = Ti.UI.createWindow({
			title: L(e.row.title),
			backgroundColor:'white'
		});
		
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(childWindow);
		
		var tableData = [ 
			{ title: 'Beinpresse', hasCheck: true },
			{ title: 'Latziehen', hasDetail: true, hasCheck: true },
			{ title: 'Rudern am Block', hasDetail: true, hasCheck: true },
			{ title: 'Bandrücken', hasDetail: true },
			{ title: 'Butterfly', hasDetail: true },
			{ title: 'Schulterdrücken', hasDetail: true },
			{ title: 'Nosebreaker', hasDetail: true },
			{ title: 'SZ-Curls', hasDetail: true },
			{ title: 'Scott-Curls', hasDetail: true }
		];
	
		var table = Ti.UI.createTableView({
			data: tableData
		});
		childWindow.add(table);
		
	});
	
	return self;
};

module.exports = workOutWindow;
