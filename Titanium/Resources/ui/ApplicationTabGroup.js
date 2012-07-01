function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win1 = new Window(L('WorkOut')),
		win2 = new Window(L('WorkoutPlans')),
		win3 = new Window(L('settings'));
	
	var tab1 = Ti.UI.createTab({
		title: L('WorkOut'),
		icon: '/images/nav_workout.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: L('WorkoutPlans'),
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
