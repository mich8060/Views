var args = arguments[0] || {};
var navigation = args.navigation;

$.lbl_two.addEventListener('click', function(){
	navigation.pushView("window3");
});