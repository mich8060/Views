function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "window4";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window4 = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        id: "window4"
    });
    $.__views.window4 && $.addTopLevelView($.__views.window4);
    $.__views.close = Ti.UI.createImageView({
        top: 0,
        right: 0,
        id: "close",
        image: "/images/close@2x.png"
    });
    $.__views.window4.add($.__views.close);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        text: "Popup Window Example",
        id: "__alloyId2"
    });
    $.__views.window4.add($.__views.__alloyId2);
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