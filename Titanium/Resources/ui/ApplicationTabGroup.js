function ApplicationTabGroup(workOutWindow, plansWindow, settingsWindow) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var workOutWindow = new workOutWindow(),
		plansWindow = new plansWindow(),
		settingsWindow = new settingsWindow();
	
	var workOutTab = Ti.UI.createTab({
		title: L('workOut'),
		icon: '/images/nav_workout.png',
		window: workOutWindow
	});
	workOutWindow.containingTab = workOutTab;
	
	var plansTab = Ti.UI.createTab({
		title: L('plans'),
		icon: '/images/nav_plans.png',
		window: plansWindow
	});
	plansWindow.containingTab = plansTab;
	
	var settingsTab = Ti.UI.createTab({
		title: L('settings'),
		icon: '/images/nav_settings.png',
		window: settingsWindow
	});
	settingsWindow.containingTab = settingsTab;
	
	self.addTab(workOutTab);
	self.addTab(plansTab);
	self.addTab(settingsTab);
	
	return self;
};

module.exports = ApplicationTabGroup;
