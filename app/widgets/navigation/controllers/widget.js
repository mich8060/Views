var args = arguments[0] || {};
var navigation = args.navigation;

var stack = [];
var speed = 300;

$.back.addEventListener('click',function(){
	$.popView();
});

$.resetTitlebar = function() {
	if(!(stack.length - 1)) {
		$.back.visible = false;
	}else{
		$.back.visible = true;
	}
}

$.resetTitlebar();

$.loadView = function(controller) {
	var controllerView = controller.getView();
	controllerView.top = 65;
	$.getView().add(controllerView);
	stack.push(controller);
	$.resetTitlebar();
}

$.pushView = function(controller) {
	var controllerView = controller.getView();
	controllerView.top = 65;
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
            left: '-40%',
            right: '40%',
            duration: speed * 2,
			curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
	}
	
	$.resetTitlebar();
};

$.swapView = function() {
	
};

$.popView = function() {
	var controller = stack.pop();
	var controllerView = controller.getView();
	var indexView = stack[stack.length - 1];
	if(indexView) {
		indexView.getView().animate({
            left: 0,
            right: 0,
            duration: speed,
			curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
	}
	
	controllerView.animate({
		left:"100%",
		right:"-100%",
		duration: speed,
		curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
	}, function(){
		$.getView().remove(controllerView);
	});
	
	$.resetTitlebar();
};