function renderDefaultWindow(title) {
	
	var defaultWindow = Ti.UI.createWindow({
		title: title,
		backgroundImage: 'images/bg-brighter.png',
		barColor: '#2c2c2c'
	});
	
	return defaultWindow;
};

module.exports = renderDefaultWindow;