function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "window2";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window2 = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        id: "window2"
    });
    $.__views.window2 && $.addTopLevelView($.__views.window2);
    $.__views.lbl_two = Ti.UI.createLabel({
        text: "Second window",
        id: "lbl_two"
    });
    $.__views.window2.add($.__views.lbl_two);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.lbl_two.addEventListener("click", function() {
        var win = Alloy.createController("window3").getView();
        var nav = Alloy.Globals.navMenu;
        nav.openWindow(win);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;