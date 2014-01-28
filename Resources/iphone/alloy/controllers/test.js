function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "test";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.test = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        id: "test"
    });
    $.__views.test && $.addTopLevelView($.__views.test);
    $.__views.label = Ti.UI.createLabel({
        text: "Hello, New World",
        id: "label"
    });
    $.__views.test.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.test.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;