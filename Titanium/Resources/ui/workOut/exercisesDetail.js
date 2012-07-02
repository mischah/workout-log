function renderDetailWindow(workOutWindow, e) {
	
	// get default window
	var defaultWindow = require('ui/defaults/defaultWindow');
	detailWindow = defaultWindow(e.row.title);
	
	// get default view and add him to the window
	var defaultView = require('ui/defaults/defaultView');
	var view = defaultView(); 
	detailWindow.add(view);
	
	// begin of stopwatch ui code
	var stopWatch = {};
	stopWatch.container = Titanium.UI.createView({
	   layout: 'horizontal'
	});
	
	stopWatch.pause = Ti.UI.createLabel({
		left: 4,
		font: { fontSize: 19 },
		text: L('stopWatch.pause')
	});
	
	stopWatch.timer = Ti.UI.createLabel({
		left: 4,
		font: { fontSize: 19 },
		text: '60'
	});
	
	stopWatch.seconds = Ti.UI.createLabel({
		left: 4,		
		font: { fontSize: 19 },
		text: L('stopWatch.seconds')
	});
	
	stopWatch.button = Ti.UI.createButton({
		
	});
	
	stopWatch.button = Titanium.UI.createButton({
		color: '#000',
		font: { fontSize: 19, fontWeight: 'bold' },
		title: 'Go',
	 	left: '30',
	 	width: 'auto',
	 	height: 'auto'
	});
	
	stopWatch.button.addEventListener('click',function(e) {
		alert("You clicked the button");
	});
	
	stopWatch.divider = Titanium.UI.createView({
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
	enterSet.container = Titanium.UI.createView({
	   heigh: 'auto',
	   layout: 'horizontal',
	   top: 60
	});
	
	enterSet.labelWeight = Ti.UI.createLabel({
		left: 4,
		color: '#444444',
		font: { fontSize: 19 },
		text: L('enterSet.labelWeight'),
		width: 238
	});
	
	enterSet.enterWeight = Ti.UI.createTextField({
		color: '#444444',
		height: 40,
		hintText: L('enterSet.placeholderWeight'),
		left: 4,
		width: 51,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
		appearance: Ti.UI.KEYBOARD_APPEARANCE_ALERT,
		autocorrect: false,
		returnKeyType: Ti.UI.RETURNKEY_DONE
    });
    
    enterSet.labelReps = Ti.UI.createLabel({
		left: 4,
		top: 13,
		color: '#444444',
		font: { fontSize: 19 },
		text: L('enterSet.labelReps'),
		width: 238
	});
	
	enterSet.enterReps = Ti.UI.createTextField({
		color: '#444444',
		height: 40,
		hintText: L('enterSet.placeholderReps'),
		left: 4,
		top: 6,
		width: 51,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
		appearance: Ti.UI.KEYBOARD_APPEARANCE_ALERT,
		autocorrect: false,
		returnKeyType: Ti.UI.RETURNKEY_DONE
    });
    
    enterSet.button = Titanium.UI.createButton({
		color: '#000',
		font: { fontSize: 19, fontWeight: 'bold' },
		title: L('enterSet.button'),
	 	left: 0,
	 	top: 8,
	 	width: Ti.UI.FILL,
	 	height: 'auto'
	});
    
    enterSet.container.add(enterSet.labelWeight);
    enterSet.container.add(enterSet.enterWeight);
    enterSet.container.add(enterSet.labelReps);
    enterSet.container.add(enterSet.enterReps);
    enterSet.container.add(enterSet.button);
    
	view.add(enterSet.container);
	
	//containingTab attribute must be set by parent tab group on
	//the window for this work
	var openDetailWindow = workOutWindow.containingTab.open(detailWindow);
	return openDetailWindow;
};

module.exports = renderDetailWindow;
