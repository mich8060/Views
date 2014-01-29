var args = arguments[0] || {};
var navigation = args.navigation;

$.lbl_one.addEventListener('click', function(){
	navigation.pushView(Alloy.createController("window2", { navigation: args.navigation }));
});