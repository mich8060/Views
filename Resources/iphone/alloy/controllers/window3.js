function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "window3";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window3 = Ti.UI.createView({
        width: 320,
        backgroundColor: "#FFFFFF",
        id: "window3"
    });
    $.__views.window3 && $.addTopLevelView($.__views.window3);
    $.__views.lbl_three = Ti.UI.createLabel({
        text: "Third window",
        id: "lbl_three"
    });
    $.__views.window3.add($.__views.lbl_three);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;