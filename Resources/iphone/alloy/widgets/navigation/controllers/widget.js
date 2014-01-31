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
    var stack = [];
    var speed = 300;
    var back = false;
    var menu = false;
    var menuWidth = 240;
    var locked = false;
    $.backBtn.addEventListener("click", function() {
        $.popView();
    });
    $.menuBtn.addEventListener("click", function() {
        menu ? $.menuState(0) : $.menuState(menuWidth);
        menu = !menu;
    });
    $.navigation.addEventListener("swipe", function(e) {
        if (!locked) {
            "right" == e.direction ? $.menuState(menuWidth) : "left" == e.direction && $.menuState(0);
            menu = !menu;
        }
    });
    $.menuState = function(point) {
        $.navigation.animate({
            left: point,
            duration: speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
    };
    $.resetTitlebar = function() {
        if (stack.length - 1) {
            if (!back) {
                $.backBtn.left = 60;
                $.backBtn.visible = true;
                $.backBtn.animate({
                    left: 40,
                    opacity: 1
                });
                back = true;
            }
        } else $.backBtn.animate({
            left: 20,
            opacity: 0
        }, function() {
            $.backBtn.visible = false;
            back = false;
        });
    };
    $.loadView = function(controller) {
        var controllerView = controller.getView();
        controllerView.top = 65;
        $.getView().add(controllerView);
        stack.push(controller);
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
            duration: speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        indexView = stack[stack.length - 1];
        stack.push(view);
        indexView && indexView.getView().animate({
            left: "-60%",
            right: "60%",
            duration: 2 * speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        $.resetTitlebar();
    };
    $.swapView = function() {};
    $.popView = function() {
        var view = stack.pop().getView();
        var indexView = stack[stack.length - 1];
        indexView && indexView.getView().animate({
            left: 0,
            right: 0,
            duration: speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        view.animate({
            left: "100%",
            right: "-100%",
            duration: speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        }, function() {
            $.getView().remove(view);
        });
        $.resetTitlebar();
    };
    $.popupView = function(controller) {
        var win = Alloy.createController(controller);
        var winController = win.getView();
        winController.top = "100%";
        winController.bottom = "-100%";
        winController.open();
        winController.animate({
            top: 20,
            bottom: 0,
            duration: speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        stack.push(win);
    };
    $.popdownView = function() {
        var win = stack.pop();
        Ti.API.info(win);
        win.getView().animate({
            top: "100%",
            bottom: "-100%",
            duration: speed,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        }, function() {
            win.getView().close();
        });
        Ti.API.info(win);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;