var defaults = require('ui/defaults/defaultProperties');

function renderDetailWindow(workOutWindow, e) {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	var detailWindow = defaultWindow(e.row.title);
	
	// get default view and add him to the window
	var defaultView = require('ui/defaults/defaultView');
	var view = defaultView();
	detailWindow.add(view);
	
	// begin of stopwatch ui code
	var stopWatch = {};
	stopWatch.container = Ti.UI.createView({
		layout: 'horizontal'
	});
	
	stopWatch.pause = Ti.UI.createLabel({
		left: 4,
		font: defaults.forms.labelFont,
		text: Ti.Locale.getString('stopWatch.pause')
	});
	
	stopWatch.timer = Ti.UI.createLabel({
		left: 4,
		font: defaults.forms.labelFont,
		text: '60'
	});
	
	stopWatch.seconds = Ti.UI.createLabel({
		left: 4,
		font: defaults.forms.labelFont,
		text: Ti.Locale.getString('stopWatch.seconds')
	});
	
	stopWatch.button = Ti.UI.createButton({
		color: defaults.forms.buttonColor,
		font: defaults.forms.buttonFont,
		title: 'Go',
		left: '30',
		width: 'auto',
		height: 'auto'
	});
	
	stopWatch.button.addEventListener('click',function(e) {
		alert("You clicked the button");
	});
	
	stopWatch.divider = Ti.UI.createView({
		height: 1,
		width: 320,
		top: 10,
		backgroundColor: '#818181'
	});
	
	stopWatch.container.add(stopWatch.pause);
	stopWatch.container.add(stopWatch.timer);
	stopWatch.container.add(stopWatch.seconds);
	stopWatch.container.add(stopWatch.button);
	stopWatch.container.add(stopWatch.divider);
	
	view.add(stopWatch.container);
	
	// begin of "entering set data" ui code
	var enterSet = {};
	
	enterSet.container = Ti.UI.createView({
		heigh: 'auto',
		layout: 'horizontal',
		top: 60
	});
	
	enterSet.keyboardToolbarItems = {
		flexSpace: Ti.UI.createButton({
			systemButton:Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
		}),
		done: Ti.UI.createButton({
			title: Ti.Locale.getString('done'),
			style: Ti.UI.iPhone.SystemButtonStyle.DONE
		})
	};
	
	enterSet.keyboardToolbarItems.done.addEventListener('click', function() {
		enterSet.enterWeight.blur();
		enterSet.enterReps.blur();
	});
	
	enterSet.keyboardToolbar = Ti.UI.iOS.createToolbar({
		items: [enterSet.keyboardToolbarItems.flexSpace, enterSet.keyboardToolbarItems.done]
	});
	
	enterSet.labelWeight = Ti.UI.createLabel({
		left: 4,
		color: defaults.forms.labelColor,
		font: defaults.forms.labelFont,
		text: Ti.Locale.getString('enterSet.labelWeight'),
		width: 238
	});
	
	enterSet.enterWeight = Ti.UI.createTextField({
		color: defaults.forms.TextColor,
		height: defaults.forms.TextFieldHeight,
		font: defaults.forms.TextFieldFont,
		hintText: Ti.Locale.getString('enterSet.placeholderWeight'),
		left: 4,
		width: 51,
		borderStyle: defaults.forms.TextFieldBorderStyle,
		keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
		//appearance: Ti.UI.KEYBOARD_APPEARANCE_ALERT,
		autocorrect: false,
		keyboardToolbar : enterSet.keyboardToolbar,
		keyboardToolbarHeight : 44
    });
    
    enterSet.labelReps = Ti.UI.createLabel({
		left: 4,
		top: 13,
		color: defaults.forms.labelColor,
		font: defaults.forms.labelFont,
		text: Ti.Locale.getString('enterSet.labelReps'),
		width: 238
	});
	
	enterSet.enterReps = Ti.UI.createTextField({
		color: defaults.forms.TextColor,
		height: defaults.forms.TextFieldHeight,
		font: defaults.forms.TextFieldFont,
		hintText: Ti.Locale.getString('enterSet.placeholderReps'),
		left: 4,
		top: 6,
		width: 51,
		borderStyle: defaults.forms.TextFieldBorderStyle,
		keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		//appearance: Ti.UI.KEYBOARD_APPEARANCE_ALERT,
		autocorrect: false,
		keyboardToolbar : enterSet.keyboardToolbar,
		keyboardToolbarHeight : 44
    });
    
    enterSet.button = Ti.UI.createButton({
		color: defaults.forms.buttonColor,
		font: defaults.forms.buttonFont,
		title: Ti.Locale.getString('enterSet.button'),
		left: 0,
		top: 8,
		width: Ti.UI.FILL
	});
    
    enterSet.container.add(enterSet.labelWeight);
    enterSet.container.add(enterSet.enterWeight);
    enterSet.container.add(enterSet.labelReps);
    enterSet.container.add(enterSet.enterReps);
    enterSet.container.add(enterSet.button);
    
	view.add(enterSet.container);
	
		// begin of "history" ui code
	var history = {};
	history.container = Ti.UI.createView({
		heigh: 'auto',
		layout: 'vertical',
		top: 202
	});
	
	history.headline = Ti.UI.createLabel({
		bottom: 5,
		left: 10,
		color: '#4C566C',
		font: { fontSize: 16, fontWeight: 'bold' },
		shadowColor: '#FFF',
		shadowOffset: { x:1, y:1 },
		text: 'History'
	});
	
	history.createCustomView = function () {
		var tableHeader = Ti.UI.createView({
			backgroundColor: '#999999',
			height: 20
		});
		
		var date = Ti.UI.createLabel({
			text: 'Datum',
			left: 10
		});
		
		var set = Ti.UI.createLabel({
			text: 'Satz',
			left: 110
		});
		
		var reps = Ti.UI.createLabel({
			text: 'WH',
			left: 170
		});
		
		var weight = Ti.UI.createLabel({
			color: '#000',
			text: 'Gewicht',
			left: 225
		});
		
		tableHeader.add(date);
		tableHeader.add(set);
		tableHeader.add(reps);
		tableHeader.add(weight);
		
		return tableHeader;
	};
	
	var tableData = [];
	
	history.table = Ti.UI.createTableView({
		objName: 'table',
		rowHeight: 20,
		headerView: history.createCustomView(),
		separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
		selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	});
	
	for (var i = 0; i <= 20; i++) {
		var row = Ti.UI.createTableViewRow({
			className: 'row',
			objName: 'row'
		});
	
		var wrapperView = Ti.UI.createView({
			backgroundColor: '#FFF',
			objName: 'enabledWrapperView',
			rowID: i,
			width: Ti.UI.FILL,
			height: 20
		});
	
		var date = Ti.UI.createLabel({
			color: '#000',
			objName: 'date',
			text: '4.11.2011',
			left: 10
		});
		
		var set = Ti.UI.createLabel({
			color: '#000',
			objName: 'set',
			text: '1.',
			left: 110
		});
		
		var reps = Ti.UI.createLabel({
			color: '#000',
			objName: 'set',
			text: '8',
			left: 170
		});
		
		var weight = Ti.UI.createLabel({
			color: '#000',
			objName: 'set',
			text: '45 KG',
			left: 225
		});
		
		wrapperView.add(date);
		wrapperView.add(set);
		wrapperView.add(reps);
		wrapperView.add(weight);
	
		row.add(wrapperView);
		tableData.push(row);
	}
	
	history.table.setData(tableData);
	
	history.container.add(history.headline);
	history.container.add(history.table);
	view.add(history.container);
	
	//containingTab attribute must be set by parent tab group on
	//the window for this work
	var openDetailWindow = workOutWindow.containingTab.open(detailWindow);
	return openDetailWindow;
}

module.exports = renderDetailWindow;
