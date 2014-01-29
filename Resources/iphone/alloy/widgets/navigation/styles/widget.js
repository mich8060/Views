function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "navigation/" + s : s.substring(0, index) + "/navigation/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isClass: true,
    priority: 10000.0001,
    key: "container",
    style: {
        backgroundColor: "#FFFFFF"
    }
}, {
    isId: true,
    priority: 100000.0002,
    key: "toolbar",
    style: {
        backgroundColor: "#ededed",
        top: 0,
        height: 65,
        zIndex: 999
    }
} ];