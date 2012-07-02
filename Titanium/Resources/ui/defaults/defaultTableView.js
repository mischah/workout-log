function renderDefaultTableView(tableData) {
	
	var defaultTableView = Ti.UI.createTableView({
		data: tableData,
		style: Ti.UI.iPhone.TableViewStyle.GROUPED,
		backgroundImage: 'images/bg-brighter.png'
	});
	
	return defaultTableView;
};

module.exports = renderDefaultTableView;