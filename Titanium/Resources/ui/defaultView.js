function renderDefaultView() {
	
	var defaultView = Titanium.UI.createView({
	   borderRadius: 10,
	   backgroundColor: '#eeb7b7',
	   width: 300,
	   height: 346
	});
	
	return defaultView;
};

module.exports = renderDefaultView;