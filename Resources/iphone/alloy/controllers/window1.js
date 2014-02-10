function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "window1";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window1 = Ti.UI.createScrollView({
        backgroundColor: "#FFFFFF",
        id: "window1"
    });
    $.__views.window1 && $.addTopLevelView($.__views.window1);
    $.__views.lbl_one = Ti.UI.createButton({
        color: "#FFFFFF",
        backgroundColor: "#3399cc",
        left: 10,
        right: 10,
        height: 45,
        width: Ti.UI.FILL,
        id: "lbl_one",
        title: "First Window"
    });
    $.__views.window1.add($.__views.lbl_one);
    $.__views.lbl_four = Ti.UI.createButton({
        color: "#FFFFFF",
        backgroundColor: "#3399cc",
        left: 10,
        right: 10,
        height: 45,
        width: Ti.UI.FILL,
        id: "lbl_four",
        bottom: "150",
        title: "First Popup Window"
    });
    $.__views.window1.add($.__views.lbl_four);
    $.__views.lbl_five = Ti.UI.createButton({
        color: "#FFFFFF",
        backgroundColor: "#3399cc",
        left: 10,
        right: 10,
        height: 45,
        width: Ti.UI.FILL,
        id: "lbl_five",
        bottom: "100",
        title: "Second Popup Window"
    });
    $.__views.window1.add($.__views.lbl_five);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Zinc = Alloy.Globals.Zinc;
    Zinc.ready($);
    Zinc.click($.lbl_one, function() {
        Zinc.pushView("window2");
    });
    Zinc.click($.lbl_four, function() {
        Zinc.openWindow("window4");
    });
    Zinc.click($.lbl_five, function() {
        Zinc.openWindow("window5");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;