var args = arguments[0] || {};
var navigation = args.navigation;

var stack = [];
var speed = 300;
var menu = false;
var menuWidth = 240;
var locked = false;

$.backBtn.addEventListener('click',function(){
	$.popView();
});

$.menuBtn.addEventListener('click',function(){
	(!menu) ? $.menuState(menuWidth) : $.menuState(0) 
	menu = !menu;
});

$.navigation.addEventListener('swipe', function(e){
	if(!locked){
		if(e.direction == "right"){
			$.menuState(menuWidth);
	    }else if(e.direction == "left"){
			$.menuState(0);
	    }
	}
});

$.menuState = function(point){
	$.navigation.animate({
		left:point,
		duration: speed,
		curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
}

$.resetTitlebar = function() {
	if(!(stack.length - 1)) {
		$.backBtn.visible = false;
	}else{
		$.backBtn.visible = true;
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
            left: '-60%',
            right: '60%',
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