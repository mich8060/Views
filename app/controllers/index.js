$.window.open();

Alloy.Globals.Zinc.navigation = $.navigation;

$.navigation.loadView(Alloy.createController("window1", { navigation: $.navigation }));
