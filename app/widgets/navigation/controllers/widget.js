var options = {
	panels: 	[],
	speed: 		300,
	history:	false,
	menu: 		{
		state: false,
		width: 240
	}
}

$.backBtn.addEventListener('click',function(){
	$.popView();
});

$.menuBtn.addEventListener('click',function(){
	(!options.menu.state) ? $.menuState(options.menu.width) : $.menuState(0);
});

$.navigation.addEventListener('swipe', function(e){
	if(e.direction == "right"){
		$.menuState(options.menu.width);
    }else if(e.direction == "left"){
		$.menuState(0);
    }
});

$.menuState = function(point){
	$.navigation.animate({
		left:point,
		duration: options.speed,
		curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
	options.menu.state = !options.menu.state;
}

$.resetTitlebar = function() {
	if(options.panels.length - 1) {
		if(!options.history){
			$.backBtn.left = 60;
			$.backBtn.visible = true;
			$.backBtn.animate({
				left:40,
				opacity:1
			});
			options.history = true;
		}
	}else{
		$.backBtn.animate({
			left: 20,
			opacity:0,
		},function(){
			$.backBtn.visible = false;
			options.history = false;
		});
	}
}

$.loadView = function(controller) {
	var controllerView = controller.getView();
	controllerView.top = 65;
	$.getView().add(controllerView);
	options.panels.push(controller);
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
			duration: options.speed,
			curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
		});
		
		indexView = options.panels[options.panels.length - 1];
		
		options.panels.push(view);
	
		if(indexView){
			indexView.getView().animate({
            	left: '-60%',
            	right: '60%',
            	duration: (options.speed * 2),
				curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        	});
		}
		
		$.resetTitlebar();
};

$.swapView = function() {
	
};

$.popView = function() {
	var view = options.panels.pop().getView();
	var indexView = options.panels[options.panels.length - 1];
	if(indexView) {
		indexView.getView().animate({
            left: 0,
            right: 0,
            duration: options.speed,
			curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
	}

	view.animate({
		left:"100%",
		right:"-100%",
		duration: options.speed,
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
			duration: options.speed,
			curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
		});

	// Add new view to the stack
	options.panels.push(win);
};

$.popdownView = function() {
	var win = options.panels.pop();
	win.getView().animate({
    	top: "100%",
    	bottom: '-100%',
    	duration: options.speed,
		curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
    }, function(){
		win.getView().close();
	});

}