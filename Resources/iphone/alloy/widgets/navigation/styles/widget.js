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
        backgroundColor: "#EDEDED",
        height: 65,
        top: 0,
        zIndex: 99
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "menuBtn",
    style: {
        backgroundColor: "#0000FF",
        height: 45,
        width: 45,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        top: 20,
        left: 0
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "backBtn",
    style: {
        backgroundColor: "#FF0000",
        height: 45,
        width: 45,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        top: 20,
        left: 45,
        visible: false
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "title",
    style: {
        bottom: 10
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "menu",
    style: {
        backgroundColor: "#EDEDED",
        left: 0,
        width: 240,
        zIndex: 0
    }
} ];