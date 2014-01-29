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
    priority: 100000.0006,
    key: "panels",
    style: {
        backgroundColor: "#ededed",
        top: 65
    }
} ];