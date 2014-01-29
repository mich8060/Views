var panels = [];

$.pushView = function(controller) {
	var controllerView = Alloy.createController(controller, {navigation:$}).getView();
	panels.push(controller);
	controllerView.left = "100%";
	controllerView.right = "-100%";
	controllerView.open();
	controllerView.animate({
		left:0,
		right:0,
		duration: 300
	});
	
};

$.swapView = function() {
	
};

$.popView = function() {
	
};

$.indexView = function () {
    return (panels.length > 0 && panels[panels.length - 1]) || null;
};