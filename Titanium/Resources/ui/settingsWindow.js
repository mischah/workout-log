function renderSettingsWindow() {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	var settingsWindow = defaultWindow(Ti.Locale.getString('settings'));
	
	var button = Ti.UI.createButton({
		height: 44,
		width: 200,
		title: Ti.Locale.getString('openWindow'),
		top: 20
	});
	//settingsWindow.add(button);
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		settingsWindow.containingTab.open(Ti.UI.createWindow({
			title: Ti.Locale.getString('newWindow'),
			backgroundColor: 'white'
		}));
	});
	
	
	
	return settingsWindow;
}

module.exports = renderSettingsWindow;
