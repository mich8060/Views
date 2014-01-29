function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.navigation = Alloy.createWidget("navigation", "widget", {
        id: "navigation",
        __parentSymbol: $.__views.index
    });
    $.__views.navigation.setParent($.__views.index);
    $.__views.lbl_one = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "First window",
        id: "lbl_one"
    });
    $.__views.index.add($.__views.lbl_one);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    $.lbl_one.addEventListener("click", function() {
        $.navigation.pushView("window2");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;