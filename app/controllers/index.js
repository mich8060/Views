$.lbl_one.addEventListener('click', function(){
	
	var win = Alloy.createController("window2").getView();
	$.win1.openWindow(win, {animated:true});
	Alloy.Globals.navMenu = $.win1;

});

$.win1.open();
