/*
 * A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.  
 * A starting point for tab-based application with multiple top-level windows. 
 * Requires Titanium Mobile SDK 1.8.0+.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

// This is a single context application with mutliple windows in a stack
(function() {
	
	// opaque black status bar
	Ti.UI.iPhone.statusBarStyle = Ti.UI.iPhone.StatusBar.OPAQUE_BLACK
	
	// Require the windows for the tabs 	
	var workOutWindow = require('ui/workOutWindow'),
	plansWindow = require('ui/plansWindow'),
	settingsWindow = require('ui/settingsWindow');
	
	// Require and create the tabgroup
	var ApplicationTabGroup = require('ui/ApplicationTabGroup');
	new ApplicationTabGroup(workOutWindow, plansWindow, settingsWindow).open({
		transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});
})();
