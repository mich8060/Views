var Zinc = Alloy.Globals.Zinc;
	Zinc.ready($);

Zinc.click($.lbl_one, function(){
	Zinc.pushView("window2");
});

Zinc.click($.lbl_four, function(){
	Zinc.openWindow("window4");
});

Zinc.click($.lbl_five, function(){
	Zinc.openWindow("window5");
});