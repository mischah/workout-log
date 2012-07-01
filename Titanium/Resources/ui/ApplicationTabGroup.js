function ApplicationTabGroup(workOutWindow, plansWindow, settingsWindow) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win1 = new workOutWindow(),
		win2 = new plansWindow(),
		win3 = new settingsWindow();
	
	var tab1 = Ti.UI.createTab({
		title: L('workOut'),
		icon: '/images/nav_workout.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: L('plans'),
		icon: '/images/nav_plans.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	var tab3 = Ti.UI.createTab({
		title: L('settings'),
		icon: '/images/nav_settings.png',
		window: win3
	});
	win3.containingTab = tab3;
	
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	
	return self;
};

module.exports = ApplicationTabGroup;
