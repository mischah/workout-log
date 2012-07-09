var defaults = require('ui/defaults/defaultProperties');

function renderAddPlanWindow(myWindow, e) {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	var AddPlanWindow = defaultWindow(e.row.title);
	
	// get default view and add him to the window
	var defaultView = require('ui/defaults/defaultView');
	var view = defaultView();
	AddPlanWindow.add(view);
	
	// begin of the forms ui code
	var form = {};
	
	form.keyboardToolbar = {
		flexSpace: Ti.UI.createButton({
			systemButton:Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
		}),
		done: Ti.UI.createButton({
			title: 'Fertig',
			style: Ti.UI.iPhone.SystemButtonStyle.DONE
		})
	};
	form.keyboardToolbar.done.addEventListener('click', function(e) {
		form.enterPause.blur();
	});
	
	form.container = Ti.UI.createView({
		heigh: 'auto',
		layout: 'horizontal'
	});
	
	form.labelName = Ti.UI.createLabel({
		left: 4,
		color: defaults.forms.labelColor,
		font: defaults.forms.labelFont,
		text: Ti.Locale.getString('form.labelName'),
		width: defaults.forms.fullWidth
	});
	
	form.enterName = Ti.UI.createTextField({
		color: defaults.forms.TextColor,
		height: defaults.forms.TextFieldHeight,
		font: defaults.forms.TextFieldFont,
		width: defaults.forms.fullWidth,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		//appearance: Ti.UI.KEYBOARD_APPEARANCE_ALERT,
		returnKeyType: Ti.UI.RETURNKEY_DONE
		//keyboardToolbar : [form.keyboardToolbar.cancel, form.keyboardToolbar.flexSpace, form.keyboardToolbar.done]
    });
    
    form.labelPause = Ti.UI.createLabel({
		top: 10,
		left: 4,
		color: defaults.forms.labelColor,
		font: defaults.forms.labelFont,
		text: Ti.Locale.getString('form.labelPause'),
		width: defaults.forms.fullWidth
	});
	
	form.enterPause = Ti.UI.createTextField({
		color: defaults.forms.TextColor,
		height: defaults.forms.TextFieldHeight,
		font: defaults.forms.TextFieldFont,
		width: defaults.forms.fullWidth,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		//appearance: Ti.UI.KEYBOARD_APPEARANCE_ALERT,
		keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		keyboardToolbar : [form.keyboardToolbar.flexSpace, form.keyboardToolbar.done]
		//keyboardToolbarColor : '#c6c8ce',
    });
    
    form.buttonSave = Ti.UI.createButton({
		color: defaults.forms.buttonColor,
		font: defaults.forms.buttonFont,
		title: Ti.Locale.getString('form.buttonSave'),
		top: 15,
		width: defaults.forms.fullWidth
	});
    
    form.container.add(form.labelName);
    form.container.add(form.enterName);
    form.container.add(form.labelPause);
    form.container.add(form.enterPause);
    form.container.add(form.buttonSave);
    
	view.add(form.container);
	
	//containingTab attribute must be set by parent tab group on
	//the window for this work
	var openAddPlanWindow = myWindow.containingTab.open(AddPlanWindow);
	return openAddPlanWindow;
}

module.exports = renderAddPlanWindow;
