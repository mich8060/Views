var stack = [];
var speed = 300;

$.loadView = function(controller) {
	var controllerView = controller.getView();
	$.getView().add(controllerView);
	stack.push(controller);
}

$.pushView = function(controller) {
	var controllerView = controller.getView();
	controllerView.left = '100%';
    controllerView.right = '-100%';
	
	// IndexView must be loaded before we push the new view to stack.
	indexView = stack[stack.length - 1];
	stack.push(controller);
	
	$.getView().add(controllerView);
	
	controllerView.animate({
		left:0,
		right:0,
		duration: speed,
		curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
	
	if(indexView){
		indexView.getView().animate({
            left: '-30%',
            right: '30%',
            duration: speed * 2,
			curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
	}
};

$.swapView = function() {
	
};

$.popView = function() {
	
};