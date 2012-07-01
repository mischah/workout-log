function renderSettingsWindow() {
	var settingsWindow = Ti.UI.createWindow({
		title:L('settings'),
		backgroundColor:'white'
	});
	
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('openWindow'),
		top:20
	});
	settingsWindow.add(button);
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		settingsWindow.containingTab.open(Ti.UI.createWindow({
			title: L('newWindow'),
			backgroundColor: 'white'
		}));
	});
	
	return settingsWindow;
};

module.exports = renderSettingsWindow;
