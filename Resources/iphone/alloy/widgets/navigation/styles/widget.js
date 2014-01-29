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
        backgroundColor: "#ededed"
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
    key: "back",
    style: {
        backgroundColor: "#FF0000",
        height: 45,
        width: 80,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        top: 20,
        left: 0
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "title",
    style: {
        bottom: 10
    }
} ];