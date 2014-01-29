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
    $.__views.navigation = Ti.UI.createView({
        width: 320,
        id: "navigation"
    });
    $.__views.navigation && $.addTopLevelView($.__views.navigation);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var stack = [];
    var speed = 300;
    $.loadView = function(controller) {
        var controllerView = controller.getView();
        $.getView().add(controllerView);
        stack.push(controller);
    };
    $.pushView = function(controller) {
        var controllerView = controller.getView();
        controllerView.left = "100%";
        controllerView.right = "-100%";
        indexView = stack[stack.length - 1];
        stack.push(controller);
        $.getView().add(controllerView);
        controllerView.animate({
            left: 0,
            right: 0,
            duration: speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        indexView && indexView.getView().animate({
            left: "-30%",
            right: "30%",
            duration: 2 * speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
    };
    $.swapView = function() {};
    $.popView = function() {};
    $.slideupView = function(controller) {
        var controllerView = controller.getView();
        controllerView.top = "100%";
        controllerView.bottom = "-100%";
        controllerView.zIndex = 9999;
        stack.push(controller);
        $.getView().add(controllerView);
        controllerView.animate({
            top: 0,
            bottom: 0,
            duration: speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;