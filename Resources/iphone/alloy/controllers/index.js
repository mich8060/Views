function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.navigation = Alloy.createWidget("navigation", "widget", {
        id: "navigation",
        __parentSymbol: $.__views.window
    });
    $.__views.navigation.setParent($.__views.window);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.window.open();
    Alloy.Globals.navigation = $.navigation;
    $.navigation.loadView(Alloy.createController("window1", {
        navigation: $.navigation
    }));
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;