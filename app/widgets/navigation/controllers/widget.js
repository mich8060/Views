var options = {
	panels: 	[],
	speed: 		300,
	history:	false,
	menu: 		{
		state: false,
		width: 240
	}
}
var stack = [];
var speed = 300;
var back = false;
var menu = false;
var menuWidth = 240;
var locked = false;
var obj;

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
		menu = !menu;
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
	if(stack.length - 1) {
		if(!back){
			$.backBtn.left = 60;
			$.backBtn.visible = true;
			$.backBtn.animate({
				left:40,
				opacity:1
			});
			back = true;
		}
	}else{
		$.backBtn.animate({
			left: 20,
			opacity:0,
		},function(){
			$.backBtn.visible = false;
			back = false;
		});
	}
}

$.loadView = function(controller) {
	var controllerView = controller.getView();
	controllerView.top = 65;
	$.getView().add(controllerView);
	stack.push(controller);
}

$.pushView = function(controller) {
	var view = Alloy.createController(controller);
	var controllerView = view.getView();
		controllerView.applyProperties({
			top: 65,
			left: "100%",
			right: "-100%"
		});
		
		$.getView().add(controllerView);
		
		controllerView.animate({
			left:0,
			right:0,
			duration: speed,
			curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
		});
		
		indexView = stack[stack.length - 1];
		
		stack.push(view);
	
		if(indexView){
			indexView.getView().animate({
            	left: '-60%',
            	right: '60%',
            	duration: (speed * 2),
				curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        	});
		}
		
		$.resetTitlebar();
};

$.swapView = function() {
	
};

$.popView = function() {
	var view = stack.pop().getView();
	var indexView = stack[stack.length - 1];
	if(indexView) {
		indexView.getView().animate({
            left: 0,
            right: 0,
            duration: speed,
			curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
	}

	view.animate({
		left:"100%",
		right:"-100%",
		duration: speed,
		curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
	}, function(){
		$.getView().remove(view);
	});
	
	$.resetTitlebar();
};

$.popupView = function(controller) {
	
	// Create Controller, open, and animate Window
	var win = Alloy.createController(controller)
	var winController = win.getView();
		winController.top = '100%';
    	winController.bottom = '-100%';
		winController.open();
		winController.animate({
			top:20,
			bottom:0,
			duration: speed,
			curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
		});

	// Add new view to the stack
	stack.push(win);
};

$.popdownView = function() {
	var win = stack.pop();
	Ti.API.info(win);
	win.getView().animate({
    	top: "100%",
    	bottom: '-100%',
    	duration: speed,
		curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
    }, function(){
		win.getView().close();
	});
	Ti.API.info(win);

}