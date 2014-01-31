var navigation = Alloy.Globals.navigation;

$.lbl_one.addEventListener('click', function(){
	navigation.pushView("window2");
});

$.lbl_four.addEventListener('click', function(){
	navigation.popupWindow("window4");
});

$.lbl_five.addEventListener('click', function(){
	navigation.popupWindow("window5");
});