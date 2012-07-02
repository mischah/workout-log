function renderPlansWindow() {
	
	// get default window
	var defaultWindow = require('ui/defaultWindow');
	plansWindow = defaultWindow(L('plans'));
	
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('openWindow'),
		top:20
	});
	//plansWindow.add(button);
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		plansWindow.containingTab.open(Ti.UI.createWindow({
			title: L('newWindow'),
			backgroundColor: 'white'
		}));
	});
	
	return plansWindow;
};

module.exports = renderPlansWindow;
