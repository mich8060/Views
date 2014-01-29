function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "navigation/" + s : s.substring(0, index) + "/navigation/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("navigation");
    this.__widgetId = "navigation";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.toolbar = Ti.UI.createView({
        backgroundColor: "#ededed",
        top: 0,
        height: 65,
        zIndex: 999,
        id: "toolbar"
    });
    $.__views.toolbar && $.addTopLevelView($.__views.toolbar);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        text: "Titlebar",
        id: "__alloyId0"
    });
    $.__views.toolbar.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var navigationController = [];
    $.pushController = function(controller) {
        navigationController.push(controller);
        var controllerView = Alloy.createController(controller).getView();
        controllerView.left = "100%";
        controllerView.right = "-100%";
        controllerView.open();
        controllerView.animate({
            left: 0,
            right: 0,
            duration: 300
        });
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;