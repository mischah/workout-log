function renderDefaultWindow(title) {
	
	var defaultWindow = Ti.UI.createWindow({
		title: title,
		backgroundImage: 'images/bg-brighter.png',
		barColor: '#000'
	});
	
	return defaultWindow;
};

module.exports = renderDefaultWindow;