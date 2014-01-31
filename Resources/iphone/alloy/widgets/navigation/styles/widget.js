function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "navigation/" + s : s.substring(0, index) + "/navigation/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "window",
    style: {
        layout: "vertical"
    }
}, {
    isApi: true,
    priority: 1000.0003,
    key: "Button",
    style: {
        color: "#FFFFFF",
        backgroundColor: "#3399cc",
        left: 10,
        right: 10,
        height: 45,
        width: Ti.UI.FILL
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "View",
    style: {
        width: 320
    }
}, {
    isClass: true,
    priority: 10000.0002,
    key: "container",
    style: {
        backgroundColor: "#FFFFFF"
    }
}, {
    isId: true,
    priority: 100000.0002,
    key: "navigation",
    style: {
        backgroundColor: "#ededed",
        zIndex: 1
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "titlebar",
    style: {
        backgroundColor: "#000000",
        height: 65,
        top: 0,
        zIndex: 99
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "menuBtn",
    style: {
        height: 45,
        width: 40,
        top: 20,
        left: 0
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "backBtn",
    style: {
        height: 45,
        width: 40,
        top: 20,
        left: 0,
        opacity: 0,
        visible: false
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "title",
    style: {
        bottom: 10,
        color: "#FFFFFF"
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "menu",
    style: {
        backgroundColor: "#666666",
        left: 0,
        width: 240,
        zIndex: 0
    }
} ];