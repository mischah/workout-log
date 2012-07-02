function renderDefaultWindow(title) {
	
	var defaultWindow = Ti.UI.createWindow({
		title: title,
		backgroundImage: 'images/bg.png'
		//backgroundColor:'#b7eec8'
	});
	
	return defaultWindow;
};

module.exports = renderDefaultWindow;