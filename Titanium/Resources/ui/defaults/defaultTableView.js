function renderDefaultTableView(tableData) {
	
	var defaultTableView = Ti.UI.createTableView({
		data: tableData,
		style: Ti.UI.iPhone.TableViewStyle.GROUPED,
		selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
		backgroundImage: 'images/bg-brighter.png'
	});
	
	return defaultTableView;
}

module.exports = renderDefaultTableView;