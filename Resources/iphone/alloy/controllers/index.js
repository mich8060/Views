function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window1 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "window1"
    });
    $.__views.lbl_one = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "First window",
        id: "lbl_one"
    });
    $.__views.window1.add($.__views.lbl_one);
    $.__views.navMenu = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.window1,
        id: "navMenu"
    });
    $.__views.navMenu && $.addTopLevelView($.__views.navMenu);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.lbl_one.addEventListener("click", function() {
        var win = Alloy.createController("window2").getView();
        $.navMenu.openWindow(win, {
            animated: true
        });
        Alloy.Globals.navMenu = $.navMenu;
    });
    $.navMenu.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;