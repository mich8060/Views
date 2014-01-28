$.lbl_one.addEventListener('click', function(){
	
	var win = Alloy.createController("window2").getView();
	$.navMenu.openWindow(win, {animated:true});
	Alloy.Globals.navMenu = $.navMenu;

});

$.navMenu.open();
