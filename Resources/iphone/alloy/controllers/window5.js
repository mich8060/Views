function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "window5";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window5 = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        id: "window5"
    });
    $.__views.window5 && $.addTopLevelView($.__views.window5);
    $.__views.close = Ti.UI.createImageView({
        top: 0,
        right: 0,
        id: "close",
        image: "/images/close@2x.png"
    });
    $.__views.window5.add($.__views.close);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        text: "Popup Window Example #2",
        id: "__alloyId3"
    });
    $.__views.window5.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Zinc = Alloy.Globals.Zinc;
    Zinc.document = $;
    Zinc.click($.close, function() {
        Zinc.closeWindow();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;