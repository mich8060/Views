var args = arguments[0] || {};
var navigation = args.navigation;

Ti.API.info(navigation);

$.lbl_two.addEventListener('click', function(){
	navigation.pushController("window3");
});