var navigationController = [];

$.pushController = function(controller) {
	navigationController.push(controller);
	var controllerView = Alloy.createController(controller).getView();
	controllerView.left = "100%";
	controllerView.right = "-100%";
	controllerView.open();
	controllerView.animate({
		left:0,
		right:0,
		duration: 300
	});
}