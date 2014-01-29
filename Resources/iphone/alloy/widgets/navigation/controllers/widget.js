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
        backgroundColor: "#ededed",
        id: "navigation"
    });
    $.__views.navigation && $.addTopLevelView($.__views.navigation);
    $.__views.titlebar = Ti.UI.createView({
        backgroundColor: "#EDEDED",
        height: 65,
        top: 0,
        zIndex: 99,
        id: "titlebar"
    });
    $.__views.navigation.add($.__views.titlebar);
    $.__views.back = Ti.UI.createLabel({
        backgroundColor: "#FF0000",
        height: 45,
        width: 80,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        top: 20,
        left: 0,
        id: "back",
        text: "back"
    });
    $.__views.titlebar.add($.__views.back);
    $.__views.title = Ti.UI.createLabel({
        bottom: 10,
        id: "title",
        text: "Titlebar"
    });
    $.__views.titlebar.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args.navigation;
    var stack = [];
    var speed = 300;
    $.back.addEventListener("click", function() {
        $.popView();
    });
    $.resetTitlebar = function() {
        $.back.visible = stack.length - 1 ? true : false;
    };
    $.resetTitlebar();
    $.loadView = function(controller) {
        var controllerView = controller.getView();
        controllerView.top = 65;
        $.getView().add(controllerView);
        stack.push(controller);
        $.resetTitlebar();
    };
    $.pushView = function(controller) {
        var controllerView = controller.getView();
        controllerView.top = 65;
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
            left: "-40%",
            right: "40%",
            duration: 2 * speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        $.resetTitlebar();
    };
    $.swapView = function() {};
    $.popView = function() {
        var controller = stack.pop();
        var controllerView = controller.getView();
        var indexView = stack[stack.length - 1];
        indexView && indexView.getView().animate({
            left: 0,
            right: 0,
            duration: speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        controllerView.animate({
            left: "100%",
            right: "-100%",
            duration: speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        }, function() {
            $.getView().remove(controllerView);
        });
        $.resetTitlebar();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;