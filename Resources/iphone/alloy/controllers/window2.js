function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "window2";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window2 = Ti.UI.createView({
        width: 320,
        backgroundColor: "#CCCCCC",
        color: "#FFFFFF",
        id: "window2"
    });
    $.__views.window2 && $.addTopLevelView($.__views.window2);
    $.__views.lbl_two = Ti.UI.createButton({
        color: "#FFFFFF",
        backgroundColor: "#3399cc",
        left: 10,
        right: 10,
        height: 45,
        width: Ti.UI.FILL,
        id: "lbl_two",
        title: "Second Window"
    });
    $.__views.window2.add($.__views.lbl_two);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Zinc = Alloy.Globals.Zinc;
    Zinc.document = $;
    Zinc.click($.lbl_two, function() {
        Zinc.pushView("window3");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;