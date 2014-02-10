Alloy.Globals.Zinc = {
    document: null,
    globals: {},
    navigation: null,
    ready: function(xml) {
        this.document = xml;
        var document = this.document;
        var views = document.__views;
        for (var key in views) {
            var obj = views[key];
            obj.children.length && Ti.API.info(obj.children);
        }
    },
    json: function(json) {
        return JSON.stringify(json);
    },
    json_decode: function(json) {
        obj = JSON.stringify(json);
        return JSON.parse(obj);
    },
    parse: function(element, callback, options) {
        var document = Alloy.Globals.zinc.document;
        var views = document.__views;
        var type = null;
        var options = options || {};
        var callback = callback || null;
        if (!element) return null;
        if (element.indexOf(".")) {
            if (element.indexOf("#")) return null;
            type = "id";
        } else type = "class";
        element = element.replace(".", "").replace("#", "");
        for (var key in views) {
            var obj = views[key];
            for (var prop in obj) "class" == type && "classname" == prop && obj[prop] == element && obj.addEventListener(callback, function() {
                this.applyProperties(options);
            });
        }
    },
    click: function(element, callback) {
        if (!element) return null;
        return element.addEventListener("click", callback);
    },
    tss: function(element, options) {
        if (!element) return null;
        element.applyProperties(options);
    },
    pushView: function(element) {
        if (!element) return null;
        this.navigation.pushView(element);
    },
    popView: function() {
        this.navigation.popView();
    },
    openWindow: function(element) {
        if (!element) return null;
        this.navigation.openWindow(element);
    },
    closeWindow: function() {
        this.navigation.closeWindow();
    }
};