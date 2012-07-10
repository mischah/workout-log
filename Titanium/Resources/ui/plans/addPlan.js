var defaults = require('ui/defaults/defaultProperties');

function renderAddPlanWindow(myWindow, e) {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	var planWindow = defaultWindow(e.row.title);
	
	// get default view and add him to the window
	var defaultView = require('ui/defaults/defaultView');
	var view = defaultView();
	planWindow.add(view);
	
	// begin of the forms ui code
	var form = {};
	
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
		borderStyle: defaults.forms.TextFieldBorderStyle,
		//appearance: Ti.UI.KEYBOARD_APPEARANCE_ALERT,
		returnKeyType: Ti.UI.RETURNKEY_DONE
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
		enabled: false,
		touchEnabled: true,
		color: defaults.forms.TextColor,
		height: defaults.forms.TextFieldHeight,
		font: defaults.forms.TextFieldFont,
		width: defaults.forms.fullWidth,
		borderStyle: defaults.forms.TextFieldBorderStyle
    });
    
    form.pickerView = Ti.UI.createView({
		height: 210,
		bottom: -210,
		zIndex: 99
	});
	 
	form.pickerCancel = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.CANCEL
	});
	 
	form.pickerDone = Ti.UI.createButton({
		title: Ti.Locale.getString('done'),
		style: Ti.UI.iPhone.SystemButtonStyle.DONE
	});
	 
	form.pickerSpacer = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	 
	form.pickerToolbar = Ti.UI.iOS.createToolbar({
		top: 0,
		items: [form.pickerCancel, form.pickerSpacer, form.pickerDone]
	});
	 
	form.picker = Ti.UI.createPicker({
		top: 43
	});
	
	form.picker.selectionIndicator = true;
	 
	//form.pickerData = [ '30', '60', '90', '120' ];
	
	form.pickerColumn1 = Ti.UI.createPickerColumn();

	for (var i = 30, len = 240; i <= len; i = i + 30) {
		var row = Ti.UI.createPickerRow({
			title: i+''
		});
		form.pickerColumn1.addRow(row);
	}
	
	form.pickerColumn2 = Ti.UI.createPickerColumn();
	form.pickerColumn2.addRow(Ti.UI.createPickerRow({title: Ti.Locale.getString('seconds')}));
	
	form.picker.add([form.pickerColumn1,form.pickerColumn2]);
	 
	form.pickerView.add(form.pickerToolbar);
	form.pickerView.add(form.picker);
	
	form.pickerSlideIn =  Ti.UI.createAnimation({ bottom: 0 });
	form.pickerSlideOut =  Ti.UI.createAnimation({ bottom: -251 });
	planWindow.add(form.pickerView);
    
    form.enterName.addEventListener('focus', function(){
		form.pickerView.animate(form.pickerSlideOut);
    });
    
    form.enterPause.addEventListener('click', function(){
		form.enterName.blur();
		form.pickerView.animate(form.pickerSlideIn);
    });
    
    form.pickerCancel.addEventListener('click', function () {
		form.pickerView.animate(form.pickerSlideOut);
	});
	
	form.pickerDone.addEventListener('click', function () {
		form.enterPause.value = form.picker.getSelectedRow(0).title + ' ' + form.picker.getSelectedRow(1).title;
		form.pickerView.animate(form.pickerSlideOut);
	});
    
    form.buttonSave = Ti.UI.createButton({
		color: defaults.forms.buttonColor,
		font: defaults.forms.buttonFont,
		title: Ti.Locale.getString('form.buttonSave'),
		top: 15,
		width: defaults.forms.fullWidth
	});
	
	form.buttonSave.addEventListener('click', function () {
		var renderFillPlanWindow = require('ui/plans/fillPlan');
		renderFillPlanWindow(myWindow, form.enterName.value);
	});
    
    form.container.add(form.labelName);
    form.container.add(form.enterName);
    form.container.add(form.labelPause);
    form.container.add(form.enterPause);
    form.container.add(form.buttonSave);
    
	view.add(form.container);
	
	//containingTab attribute must be set by parent tab group on
	//the window for this work
	var openAddPlanWindow = myWindow.containingTab.open(planWindow);
	return openAddPlanWindow;
}

module.exports = renderAddPlanWindow;
