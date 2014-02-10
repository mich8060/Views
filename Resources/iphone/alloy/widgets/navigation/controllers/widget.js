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
        backgroundColor: "#ededed",
        zIndex: 1,
        id: "navigation"
    });
    $.__views.navigation && $.addTopLevelView($.__views.navigation);
    $.__views.titlebar = Ti.UI.createView({
        width: 320,
        backgroundColor: "#000000",
        height: 65,
        top: 0,
        zIndex: 99,
        id: "titlebar"
    });
    $.__views.navigation.add($.__views.titlebar);
    $.__views.menuBtn = Ti.UI.createImageView({
        height: 45,
        width: 40,
        top: 20,
        left: 0,
        id: "menuBtn",
        image: "/images/menu@2x.png"
    });
    $.__views.titlebar.add($.__views.menuBtn);
    $.__views.backBtn = Ti.UI.createImageView({
        height: 45,
        width: 40,
        top: 20,
        left: 0,
        opacity: 0,
        visible: false,
        id: "backBtn",
        image: "/images/back@2x.png"
    });
    $.__views.titlebar.add($.__views.backBtn);
    $.__views.title = Ti.UI.createLabel({
        bottom: 10,
        color: "#FFFFFF",
        id: "title",
        text: "Titlebar"
    });
    $.__views.titlebar.add($.__views.title);
    $.__views.menu = Ti.UI.createView({
        width: 240,
        backgroundColor: "#666666",
        left: 0,
        zIndex: 0,
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        text: "This is the menu",
        id: "__alloyId0"
    });
    $.__views.menu.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var options = {
        panels: [],
        speed: 300,
        history: false,
        menu: {
            state: false,
            width: 240
        }
    };
    $.backBtn.addEventListener("click", function() {
        $.popView();
    });
    $.menuBtn.addEventListener("click", function() {
        options.menu.state ? $.menuState(0) : $.menuState(options.menu.width);
    });
    $.navigation.addEventListener("swipe", function(e) {
        "right" == e.direction ? $.menuState(options.menu.width) : "left" == e.direction && $.menuState(0);
    });
    $.menuState = function(point) {
        $.navigation.animate({
            left: point,
            duration: options.speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        options.menu.state = !options.menu.state;
    };
    $.resetTitlebar = function() {
        if (options.panels.length - 1) {
            if (!options.history) {
                $.backBtn.left = 60;
                $.backBtn.visible = true;
                $.backBtn.animate({
                    left: 40,
                    opacity: 1
                });
                options.history = true;
            }
        } else $.backBtn.animate({
            left: 20,
            opacity: 0
        }, function() {
            $.backBtn.visible = false;
            options.history = false;
        });
    };
    $.loadView = function(controller) {
        var controllerView = controller.getView();
        controllerView.top = 65;
        $.getView().add(controllerView);
        options.panels.push(controller);
    };
    $.pushView = function(controller) {
        var view = Alloy.createController(controller);
        var controllerView = view.getView();
        controllerView.applyProperties({
            top: 65,
            left: "100%",
            right: "-100%"
        });
        $.getView().add(controllerView);
        controllerView.animate({
            left: 0,
            right: 0,
            duration: options.speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        indexView = options.panels[options.panels.length - 1];
        options.panels.push(view);
        indexView && indexView.getView().animate({
            left: "-60%",
            right: "60%",
            duration: 2 * options.speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        $.resetTitlebar();
    };
    $.swapView = function() {};
    $.popView = function() {
        var view = options.panels.pop().getView();
        var indexView = options.panels[options.panels.length - 1];
        indexView && indexView.getView().animate({
            left: 0,
            right: 0,
            duration: options.speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        view.animate({
            left: "100%",
            right: "-100%",
            duration: options.speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        }, function() {
            $.getView().remove(view);
        });
        $.resetTitlebar();
    };
    $.openWindow = function(controller) {
        var win = Alloy.createController(controller);
        var winController = win.getView();
        winController.top = "100%";
        winController.bottom = "-100%";
        winController.open();
        winController.animate({
            top: 20,
            bottom: 0,
            duration: options.speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        options.panels.push(win);
    };
    $.closeWindow = function() {
        var win = options.panels.pop();
        win.getView().animate({
            top: "100%",
            bottom: "-100%",
            duration: options.speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        }, function() {
            win.getView().close();
        });
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;