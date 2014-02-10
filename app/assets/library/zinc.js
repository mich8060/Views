Alloy.Globals.Zinc = { 
	document: null,
	globals: { },
	navigation: null,
	ready: function(xml) {
		
		// 	Pass the primary object out
		this.document = xml;
		
		//	Define Relative Page Structures
		var document = this.document;
		var views = document.__views;
		var dom = { }
		
		//Ti.API.info(this.json_decode(views));
		
		//	Parse through objects to create the dom structure.
		for(var key in views) {
			var obj = views[key];
			if(obj.children.length){
				Ti.API.info(obj.children);
			}
		}
		
	},
	json: function(json){
		return JSON.stringify(json);
	},
	json_decode: function(json){
		obj = JSON.stringify(json);
		return JSON.parse(obj);
	},
	parse: function(element, callback, options){
		var document = Alloy.Globals.zinc.document;
		var views = document.__views;
		var el, type = null;
	    var options = options || {};
	    var callback = callback || null;
		if(!element) return null;
		if(!element.indexOf(".")){
			type = "class";
		}else if(!element.indexOf("#")){
			type = "id";
		}else{
			return null;
		}
		element = element.replace('.','').replace('#','');

		// Parse through Titanium Object
		for(var key in views) {
			var obj = views[key];
		   	for (var prop in obj) {
				if(type == "class"){
					if(prop == "classname"){
						if(obj[prop] == element){
							obj.addEventListener(callback, function(){
								this.applyProperties(options);
							});
						}
					}
				}
		   	}
		}

	},
	click: function(element, callback) {
		if (!element) return null;
		return element.addEventListener('click', callback);
	},
	tss: function(element, options) {
		if (!element) return null;
		element.applyProperties(options);
	},
	pushView: function(element){
		if (!element) return null;
		this.navigation.pushView(element);
	},
	popView: function(){
		this.navigation.popView();
	},
	openWindow: function(element){
		if (!element) return null;
		this.navigation.openWindow(element);
	},
	closeWindow: function(){
		this.navigation.closeWindow();
	},
};