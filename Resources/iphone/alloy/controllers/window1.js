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
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var navigation = args.navigation;
    $.lbl_one.addEventListener("click", function() {
        navigation.pushView(Alloy.createController("window2", {
            navigation: args.navigation
        }));
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;