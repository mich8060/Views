$.window.open();

Alloy.Globals.navigation = $.navigation;

$.navigation.loadView(Alloy.createController("window1", { navigation: $.navigation }));
