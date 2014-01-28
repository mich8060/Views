$.lbl_two.addEventListener('click', function(){
	
	var win = Alloy.createController("window3").getView();
	var nav = Alloy.Globals.navMenu;
	nav.openWindow(win);

});