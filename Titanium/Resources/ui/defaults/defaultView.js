function renderDefaultView() {
	
	var defaultView = Titanium.UI.createView({
	   borderRadius: 8,
	   backgroundColor: '#eeb7b7',
	   top: 8,
	   right: 8,
	   bottom: 8,
	   left: 8
	});
	
	return defaultView;
};

module.exports = renderDefaultView;