(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.nuages = function() {
	this.initialize(img.nuages);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,940,609);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbole3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.text = new cjs.Text("Une erreur est survenue", "20px 'Franklin Gothic Heavy'", "#535354");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 349;
	this.text.parent = this;
	this.text.setTransform(195.5,23.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole3, new cjs.Rectangle(19,21.8,353,51.4), null);


(lib.Symbole2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.text = new cjs.Text("Erreur 500", "40px 'Franklin Gothic Heavy'", "#535354");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 330;
	this.text.parent = this;
	this.text.setTransform(187,33.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole2, new cjs.Rectangle(20,31.5,334,68.8), null);


(lib.Interpoler26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE570C").s().p("AuoD6Qg/AAAAgvIAAmVQAAgvA/AAIdRAAQA/AAAAAvIAAGVQAAAvg/AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Interpoler25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.nuages();
	this.instance.parent = this;
	this.instance.setTransform(-548.5,-355.3,1.167,1.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-548.5,-355.3,1097.1,710.8);


(lib.Interpoler24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.nuages();
	this.instance.parent = this;
	this.instance.setTransform(-548.5,-355.3,1.167,1.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-548.5,-355.3,1097.1,710.8);


(lib.Interpoler17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdClQgGgBgDgEQgPgWgBgQQgBgSANgUQAHgMgEgLQgKgUAEgRQAEgQARgQIAEgCIAIgJQAJgJgEgKQgWgmAlgfQACgBABgCQgCgVAGgJQAFgKAVgNIAFgBQAKAAAAAKQAAAEgBACIAAACIgWAtIgJAcQgNAxAGAnQADALgJALQgLARAKAPQAJAPgDAQQgDARgNAJQgJAIgEAGQgDAEgDAOQgCAGgGABgAAXiHQgEAJAEAUIgDADIgGAEQgfAZARAfQAIARgOAPIgMAKQgPANgCANQgDANAHATQAHARgKAPQgLATABAOQABAOAOASQAEgOAEgHQAFgHAMgIQAJgHACgOQADgMgHgKQgOgYAQgVQAFgHgBgHQgIgpAOgxIAIggIAXgwQgTAMgEAHg");
	this.shape.setTransform(-0.3,-0.2,1.535,1.535,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7EC2CA").s().p("AgiCeQgPgVgBgPQgBgQANgTQAJgNgHgPQgIgUADgPQADgOAQgNIAEgEIAIgHQALgNgFgMQgTgjAhgcIAEgFIABgBIABgBQgDgTAFgJQAEgJAVgLIADgBIADABQACABgBAEIgXAyIgJAcQgNAzAHAmQABAHgGALQgNASALAUQAIANgCAPQgDAOgLAJQgKAHgEAGQgEAHgEAOQAAACgFABQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1.setTransform(-0.3,-0.2,1.535,1.535,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-24.3,22.4,48.6);


(lib.Interpoler16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIDNQgBgEgMgJQgNgLgBgKQgBgLALgMQANgNAAgHQAAgHgMgOIgFgGQgJgJgCgEQgRgXAUgXIAHgHQAFgDADgFQAGgIAAgHQAAgGgHgHIgMgLIgDgCQgQgNgDgNQgDgOAJgUIAGgKIAKgWQAHgSgIgNQgXgfAXgpQACgFAFAAIABAAQAEAAADADQASASATAMQAOAJADASQADAWgMANIgKAKIgJAJQgJAMAAALQAAAKALALIAYATQAWARADAVQAEAWgRAXIgGAJQgHAKABAFQAAAFAKAHQARAMABAOQABANgOARQgGAHgCADIAHALQAGAJgHAJQgPATgPAOQgFAFgFAAQgIAAgEgKgAgdiOQAMAQgJAYQgDALgMAVQgHAQACAKQADALANALQAJAGAHAIQASAUgRAVIgPAQQgQASAPAPQAFAHALALQANAQAAALQAAAKgOARQgJAJABAGQAAAGAKAIQAMAJADAJQABAEACAAIAEgDQANgLAPgUIABgDQAAAAAAgBQABAAgBAAQAAgBAAAAQAAgBAAAAQgKgNAAgEQAAgEALgMQALgNgBgJQgBgJgNgKQgOgJgBgJQgBgJAJgNIAGgJQAcgngmgeIgZgTQgOgNgBgPQgBgQAOgPQANgOAGgHQAIgJgCgQQgCgPgKgGQgVgNgSgTQgVAjAUAbg");
	this.shape.setTransform(0,0,1.6,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#73C7D0").s().p("AgCDLQgEgHgKgIQgMgJAAgJQgBgIAKgLQAOgPAAgIQAAgJgNgQIgRgSQgPgUASgUIAGgHIAIgJQAQgSgRgQQgIgIgFgDIgDgCQgPgMgDgMQgCgNAIgRIAFgJQAJgRABgGQAHgWgJgOQgTgcAVgmIAEgDIABAAIAEABQAQASAUANQAOAIABAQQADASgLAMIgUAVQgMAOACANQABAOAMALIAQAMIAJAHQAUAPADAUQADAUgPAVIgGAJQgIALABAHQABAHALAJQAQALAAAMQACALgOAPQgIAKAAADQAAADAHAKQADADgBAEIgCADQgOAVgPAMQgEAEgDAAQgFAAgCgHg");
	this.shape_1.setTransform(0,0.1,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-34.3,19,68.7);


(lib.Interpoler9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F1920").s().p("AgEgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIACAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABg");
	this.shape.setTransform(1.2,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#322327").s().p("AAAAHQACgGgHgHIAGABQAIAFgHAHg");
	this.shape_1.setTransform(-0.8,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#34152A").s().p("AgBAIQgFgBgEgGIABgBQAFAFAEgBQADAAAEgGIAAgDQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAABIACABIABAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABIgCAFQgDAFgEAAIAAAAg");
	this.shape_2.setTransform(-0.5,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#160B0F").s().p("AgDAIQgDgCgBgDIABgDIAFgIQABAAAAAAQAAgBAAAAQABAAAAABQAAAAABAAQACAEABABQADABAAADQgBAHgGABIgBABIgDgCg");
	this.shape_3.setTransform(-0.6,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D0BAC7").s().p("AAAACIgBgBIAAgBQABgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAQgBABAAABIgBAAIAAAAg");
	this.shape_4.setTransform(-0.6,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#402E35").s().p("AgEAAIgBgDQAIADADgDIAAAEQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAgBABIgDgCQgDgBABAEQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_5.setTransform(-1.9,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5F1F3").s().p("AgFAAQAAgCADgDQACgCACAAQAFAAgBAHIgCABQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgFAEQgEgBAAgHg");
	this.shape_6.setTransform(1,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5F6F8").s().p("AgHAKIgCgCQgBgGAHgJIAHgFIAAAAQAJAGgDAHQgDAJgDABQgDACgCAAQgDAAgDgDg");
	this.shape_7.setTransform(-1.7,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6F4E6E").s().p("AgCALQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBABAAAAQgNAAgBgNIgBgEIADAAQABAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAMAMAFgQQACgDADAAQAHACADAEQABAFgCAGIgCABQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIABgDQAAgDgBgBQgDgBgCACQgHAFAHAHQgEAEgFAAIgFgCg");
	this.shape_8.setTransform(-0.3,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AFA4AC").s().p("AgDADQADgFAEAAIAAACQgEACgCABg");
	this.shape_9.setTransform(-1.8,-1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#210E12").s().p("AAPAUIABgGQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIAAgBIgIgGIgCAAIgCABQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQgCgFgDgBQgBgBAAgBQgBAAAAgBQAAAAgBAAQAAAAAAAAIABgDQACgFgBgCQgBgCgEgBIgDgBIgBgBIAAgCQAMgFAQAMQAFADACAOIgCANg");
	this.shape_10.setTransform(0.5,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C2BAC1").s().p("AgDACQAAgEACgDIAEgFIACAAIAAACQgDADgCAEIgBAGQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAABABIAAADQgCgCABgHg");
	this.shape_11.setTransform(-2.5,-0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3D3033").s().p("AAAAGIgDABIABgKIABgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAEIABgEQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBABAAIABAAQABAHgFAIQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape_12.setTransform(2,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#29171D").s().p("AgGAOQgKgEgDgHQgCgCgBgJQgDgEADgDIADACIADAIQADAMAKAAIADABQAEADAIgEIAGgEIACgBIADgBQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgBACIgNAIIgHACQgEAAgFgCg");
	this.shape_13.setTransform(-0.4,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D7CFD1").s().p("AAdAXQACgHgCgIIgEgDQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAABAAgBQgDgTgWgFIgJABQgDAAgCADIgEADIgBAAQgEAAgDAGIgDADIABgHIABgCIAGgFQAMgLAQAEQAQAEAFAQQAGANgDAJIgBADIAAACg");
	this.shape_14.setTransform(-0.2,-0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#230E12").s().p("AAbAUQAAgVgMgLQgHgGgKgBQgLAAgJAGQgEADgDADIgDABIABgEQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIABAAIAFgFIAHgDIAEgDIAGAAQAJAAAKAGQALAFAFAKIACADIAAABIABAEQABACgBADIAAAGIgFALg");
	this.shape_15.setTransform(0.1,-0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F5F8FA").s().p("AgFAZIgFgBIgEgCIgGgDIgGgGIgCgEIgBgDIAAgCQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAAgQQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBIAHgHIACgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABABAAQgGAIAAAJIgBAFIABACQACAQAVADQADACAEgCQALgEACgEQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQABgCADgMQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQADAFgBAIQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIgBABIgFAFQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBABIgUAHg");
	this.shape_16.setTransform(-0.2,0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FCE5D3").s().p("AgPgIQAUABALAPg");
	this.shape_17.setTransform(1.1,-2.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FCE5D3").s().p("AAAABIgBgEIABABQACADAAADg");
	this.shape_18.setTransform(2.9,-1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FCE5D3").s().p("AgDABIADgBIAAAAIACAAIABABg");
	this.shape_19.setTransform(-0.8,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-3.4,6.7,6.8);


(lib.Interpoler7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DCC5D1").s().p("AgBABQABgBABgCIABABQAAACgCABIAAABIgBgCg");
	this.shape.setTransform(0,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4EDF1").s().p("AgDAAIACgEQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAQABABAAAAQABAAAAABQAAAAABABQAAABAAAAQAAAEgFAEIAAABQgFgCACgFg");
	this.shape_1.setTransform(1.1,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E4E6E").s().p("AgBALIAAgDIgCAAQgLgBgEgIIAAgCIAAgDIAFgBQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAEAGAEgBQAHAAABgGIABgDQABAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQAKAEgBAFIgHAJIgCAAIACgFQABAAAAAAQAAgBABAAQAAAAAAgBQAAgBAAAAQAAgDgFACQgCABAAADQgBAFADACIgIABIgCAAg");
	this.shape_2.setTransform(0.1,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#301F22").s().p("AgEgFQAEgCABADIAAgCQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQADACgBADQAAAGgEADIgCABQACgIgFgFg");
	this.shape_3.setTransform(0.1,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#140B0F").s().p("AgDAIQgEgCAAgDIAAgEQADAAAEgEIAAgCIACAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAABABIADADQABAEgEADQgDACgCAAIgDAAg");
	this.shape_4.setTransform(0,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#311D24").s().p("AgFAMQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgGAAgDgHIgCgDIgCgCQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAAgDQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIABABQABACADAAIAGgBIABADQAAAEAFACQAEABADgFIADgGQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACAAQAFAAAFAFQABABAAAAQABABAAAAQAAABAAAAQAAAAAAABQgEABgBAIIgDABIgBACIgCAAQgGADgFAAIgGgBgAgQgDQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABIABABQADAGAKACIADABIAKAAIABABQABgDACgCIADgEQAAgCgCgDQgBgBAAAAQgBgBAAAAQgBgBgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAABgBABQgCAEgGABQgFAAgDgDIgDgCIgDgBIgCABg");
	this.shape_5.setTransform(0.2,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7F8F9").s().p("AgDALQgEAAAAgDQgFgGAFgGQACgFAHgCIAEABQAGAEgCAJQgFAGgDABIgEACIgBgBg");
	this.shape_6.setTransform(-1,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#30181B").s().p("AAAACIgBgCIAAgFIACABIABAKIgCgEg");
	this.shape_7.setTransform(-3.3,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#241118").s().p("AAAAQQgOgEgEgKIgBgFIAAgGIADgHIADAFQAAAGgBAAIAAABQAAADAEAEQAEAFADABIAHACQAEACAKgEIABAAIAAACQAAAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAQgFAEgHAAQgEAAgEgBg");
	this.shape_8.setTransform(-0.4,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#220E13").s().p("AAGAVQAFgGAAgGQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBgBAAIgFgDQgFgCgCAAIgEgCIgCgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABgBQABgBAAgFIAAgBIgEAAIgEgCQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQARAAAHAHQADADADAKQACAFgFANQgDAGgEABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_9.setTransform(0.9,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D6CBD0").s().p("AggAYQgCgHACgDQADgQACgEQAMgSAQABQAVABAIASQACAHACABIgDAGIAAABIgBAAIgEgGIAAgBIgBABQAAAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBQgCgGgHgFQgHgEgHAAIgFAAQgHAAgIAIIABABQgCAFACAHIgCAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgDAFQgBgDACgEIACgFQgKAHAAAQIAAAGg");
	this.shape_10.setTransform(0.1,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#230E12").s().p("AgiAQIAEgSIABgBIADgHIAIgGIACgCIAHgCIALgCIAMADIAGAGIABAAQAHAGAGAJQABAEAAAFQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBgBAAgBIgDgGQgJgSgVABQgQABgIARQgDAFgCANIgDACg");
	this.shape_11.setTransform(0,-1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F5F7F9").s().p("AgDAVIgGgBIgBAAIgEgCIgJgDIgHgEIgBgCIAAgLQACgLAIgGQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIAAADQgDAIAAACIAAAFQgBAIAJAHQARAMAMgKQAIgHACgNIAAgFIACgCQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAABABQADACAAADQABAHgGAKQgFAHgEACg");
	this.shape_12.setTransform(0,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.3,7,6.6);


(lib.Interpoler5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#535354").s().p("ApPCQQj1g8AAhUQAAhTD1g7QD1g8FaAAQFbAAD1A8QD1A7AABTQAABUj1A8Qj1A7lbAAQlaAAj1g7g");
	this.shape.setTransform(0,0,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.8,-32.4,267.7,64.9);


(lib.Interpoler3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7B3F12").s().p("AhABrQgIgmAFgpQAHhfA4g+QALgMAKgIQAGgFgBgEIAQgKQAKgFAJACQAIAbAFAaQAAAJgHAEQgfAWgTAcQgPAWgEAbQgGAlAFAlQABAIAEAKIACAGQAAADgBADQgaAigJAoQgSgcgKglg");
	this.shape.setTransform(-130,-11.9,1.6,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241812").s().p("AAAAKQgDgBgCgDQgDgCABgEIAAAAQAAgKAIABQAIAAgBAJIgCAHQgBADgEAAIgBAAg");
	this.shape_1.setTransform(-56.2,-33.7,1.6,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D140E").s().p("AAAAKQgKAAABgIQABgMAIAAQAKAAAAALQgCAKgHAAIgBgBg");
	this.shape_2.setTransform(-54.6,-28.4,1.6,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#19120F").s().p("AgIAKQgEgFAAgGQABgOALAAQALACACANQgCANgLACIAAABQgEAAgEgGg");
	this.shape_3.setTransform(-59.8,-29.6,1.6,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5C3A1").s().p("AguBxQgQgBgPgHQgHAAgIgFQgIgCgIgFQgagNgRgXQgTgXgHgeQgDgGAGgGQAjgrA2gIQAYgDATgNQAUgNALgUQAMgDAPgCIARgBQAMAAALABQANABAPAFQALADAHADQAIADAIAFQAZAMASAVQAQAPABADQADAFgFANQgJAfgTAYQgOATgHAGIggAYQgRAOgUAFIgEABQgiAPgngBIgLABQgIAAgIgCg");
	this.shape_4.setTransform(-61.8,-28.2,1.6,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B110D").s().p("AgLAlQgDgCABgDIADgEQAQgWgFgZQgBgJACgKQAPAMgDARQgBAYgPASIgEAEIgCACIgDgCg");
	this.shape_5.setTransform(-82,-107.4,1.6,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0F0705").s().p("AAVA7QgSgUAAgaIgKARQgOAXgbAFIgGABQgEgBAAgDQgBgEAIgDQAWgHAMgTQANgTgEgVIgEgjIABgGQAAgDAEgBQADAAACADIACAFQAGAOACATQAMgTAJgJQANgNARgEIgNAOQgaASgGAfQgHAgAWAYIABABIAFAHQADAEgCACIgDACQgEAAgIgJg");
	this.shape_6.setTransform(-66.4,-111.9,1.6,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CA6A26").s().p("AAUBOQgSgMgGgUQgCgFgCAAIgGACQgYAQgcAAIgGAAQgDAAgCgDQgBgFAGgGQAHgGAMgOQALgRABgUQABgUgJgTQgKgYAOgJQAKgEAKACQAKADAHAIIAFAFQAMAggJAeQgIAgggAKQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAVABAPgRQAGgHAFgKQAFgGADABQABAAABAAQAAAAABABQAAAAAAABQABAAAAAAIAAAFQADAVAOAPQADADADABQgBgGgFgEQgQgUABgZQABgaARgUIAIgKQAFgFAGABQAFABABAFIgBAIQgBAIgGALIgLASQgNAfAVAjQAFAJALADIAJADQAEADgBAHQgBAGgFAFQgFAEgHAAIgHABQgSAAgPgKg");
	this.shape_7.setTransform(-67.9,-109.1,1.6,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#19120F").s().p("AASALQgOgHgNgDQgHgBgCABQgHAFgDgGQgCgHAIgCIAJgCQAUACARAKQAHAFgDAEQgBACgDAAIgGgBg");
	this.shape_8.setTransform(-87.7,15.1,1.6,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#130C09").s().p("AAiANQghgWgnAEQgGAAgBgEQAAgDAGgBIARgCQAqABAUASIAFAEQACADgCADQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgFgDg");
	this.shape_9.setTransform(-88.1,11.9,1.6,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDFDFD").s().p("AgGAyQgFgDgCgGQgFgSADgRQACgeALgbQASAqABArQABAGgDAFQgEAFgGABIgEAAQgDAAgEgBg");
	this.shape_10.setTransform(-9.2,177.6,1.6,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCFCFC").s().p("AAAAlQgKAAgCgPQgBgeANgdQAQAcgDAfQgBAGgDAEQgEAGgFAAIAAgBg");
	this.shape_11.setTransform(57.3,180.4,1.6,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AgHAuQgSgFACgPQAGgnAZghQAPAmAAAlQABAFgBAEQgDAGgKACIgJABIgIgBg");
	this.shape_12.setTransform(21.4,179.3,1.6,1.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5C3A1").s().p("AhUE7QgpgTAIg1IAIghIACgFQAAgDgEgCQgFgCgEAIQgRAdAEAiQADAJgIAGQgnAcghgVQgRgMgIgUQgIgUAFgVQAEgQAIgSQAEgIgGgDQgDgCgCADIgEAEQgSAYAAAdQAAAEgBAEQgDAHgHADQgHADgHgCQgYgGgLgXQgTggAQgwIAEgIQABgFgEgCQgFgCgDAEIgFAIQgGAHgCAIQgCAIgEABQgCAAgHgDQgQgLgBgTQgKhFAug+IAFgIQAHgHgKgEQgYATgOAdIgCAFQgCADgCAAQgEABgFgIQgKgTABgUQgBgeASgYIAWgjQANAWANAQQAEACADAFQAYATAeALQAYAJAHAZIABAIQAAAHgFAEQgFAFgHgBQgfADgTAWIgEAHQgGANADAPQADAJAHgBQAIAAAAgKQABgTAIgIQAHgIAUgCQA3gGA1AVIA8AXIA8AXQAjAMAdAEQAjAEAggHQAtgJAfghQAfghAFgtIADgYIAAgwQgEgkgEgTQgGgegNgWQgBgDAAgEQALhHgig/QAZAAAZgFQADgBADACQArATAdATQAlAYAYAfQAhAkAGAyQACAKgEAJQgFAKgIAFIgBABQgDADgFgBQgFgBgDgEQgigjgugZIgGgDQgDgBgDADQgCADADADIAFAEQA+AsAdAoQASAagBAfQgBAQgLAMQgKAMgQAEQgIADgDgHIgWgZIgfgbQgLAAAHAKIAOARQAbAYARAgQADADABAFQALAWABAZQABAZgJAXQgDALgKAGQgJAGgMgCQgFgBgCgCQgCgCgBgFQgCgggNgcQgIgTgQgKQgHgEgCAEQgCADAFAFQAUAXAIAeQAHAegHAeIgCAHQgIAYgWALQgXALgXgIQgFgCAAgDIACgFQALghgHgkQgDgNgHgJQgDgFgDABQgEACAAAFQAAAUAEARQADAegMAdQgJATgSAKQgSAKgUgCQALgXgBgZIgBgHQgBgEgDAAQgEgBgCADIgDAHIgMAlQgKAfgWALQgWAMgdgKQgFgBgBgCQgCgDAEgFQAGgIADgNQABgEgEgDQgDgCgEAFQgLAPgLAMQgPAPgUAEIgNABQgOAAgNgGg");
	this.shape_13.setTransform(-59.2,-8.1,1.6,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0C3A5").s().p("AgYAiQgNgfgDgwQAfgUAlgEQANAbAAAwQAABAgqAAQgRgXgGgNg");
	this.shape_14.setTransform(-112.2,-36.3,1.6,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1A0F0E").s().p("AgGApQgPgSAGgaQAFgcAUgLQADgCACABQADACAAAEIgBAFIAAAAQgMAGgFALQgGALACAMIAEAeIAAADQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgBAAQgCAAgDgDg");
	this.shape_15.setTransform(-50.6,-103.8,1.6,1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7B3F12").s().p("AgbAcQgEgCABgDIANgYQAIgOAJgIQAJgJAMAGQAJADABAKQgEAXgQALQgLAIgNAAQgHAAgHgBg");
	this.shape_16.setTransform(-89.9,-107.3,1.6,1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7B3F13").s().p("AgiAOQgFgLADgKQAEgMAJgGQAKgHAMAAQALABAJAIQAPALAEARQgNgGgOACQgOACgKAMQgDADgBAGIgEAJQgIgJgFgKg");
	this.shape_17.setTransform(-42,-103.5,1.6,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C96A26").s().p("Ag9CVQgPgPgbgBQgagCgVAKQgEACABgJIAAgNIADgfQAEgUAlhWQAFgIADgDQAFgFAIACQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgDgBIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgDAFgCIAKgCQAEgCgJgHQgBgBACgFQAbgxAfgqQgBAPgIATIgPAgQgOAggEAZQgFAeAJAdQAFASAUAOQAUAOAVABQAlABAhgTQAkgUAmgbIAKgEIgpCFQgCAGgCABQgDABgFgDQgbgTghgFQgggFgfAJQgTAEgLARQgDADgCABQgBAAgDgDg");
	this.shape_18.setTransform(-83.1,-72.2,1.6,1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C86926").s().p("AAcAkIghgQQgTgKgLgKQgBgKAFgIQAGgJAJgDQANgGAHAAQALgBAJAJQAJAcADAdQABAFgDACIgCABIgEgBg");
	this.shape_19.setTransform(-39.7,-98.2,1.6,1.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BC3125").s().p("ABCAgIgFgBQgVgHgfgMIgzgUIgXgIQgFgBAAgDQAAgCAFgDQARgHARAAQAeABAaAPQAaAOARAZIADAEQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAAAAAQgBABgBAAIgBgBg");
	this.shape_20.setTransform(-71.8,2.2,1.6,1.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F08D41").s().p("AgyAJQAfhSA2grQAHgGgGgGQACgJAKgDIAbgBQgEAKgIAHIgSAfIgMAWQgIAPgHASQgNAZgGAWQgKAZgGAaQgEAYABALQACAQAMAHQgBAGhDASQgDhFAbhAg");
	this.shape_21.setTransform(-106.6,-66.4,1.6,1.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C96927").s().p("AhFEeIAIgOQAGgJgCgLQgDgLgJgHQgMgLgBgGQgBgHAKgNIAGgJQAMgWgGgXQgHgZgWgMQgIgEgJgJQgLgLgBgKQgBgJAKgMIADgEQAggagGgbIAAAAQgBgHAEgFQAEgGAHgCQALAAAJgIQAJgGAAgFQAAgDgGgIIgGgGIgIgKIAKgJIABgBQAFgEAHACQAHAAADAGQAKANAPADQAQADANgJQAOgHAKgPQAGgJAJgUQARgoABhDQAAgMgCgRIgCgdIgBgHQAAgFADgDQAcAqAFA1QAIBDgMBIQgSBUg0AlQggAVghADQgsAHgVgMQAyBAgEBEQgBA0gbApQgFgEAFgKg");
	this.shape_22.setTransform(-25.4,-74.4,1.6,1.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F18C3F").s().p("AAXBmQgJgEgEAAQgZgCgbAGQgFADgEgFQALgaAMgsIAVhGQAIgeARggQABAPAJANQAHALAAANQAAANgHALQgKAPgGARQgDALADAMQAEALAKAHIAMALQAPAMAAAKQAAALgPAMIgDAAIgMgBg");
	this.shape_23.setTransform(-55.3,-61.6,1.6,1.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CA6926").s().p("AglCWQgDgBgCgHQgRg0ALg2QAQhiBEhJQAHgJAKgFIgQAlQgRAigHAoQgFAZAQARIgLAWQgHANgJAGQgBABgCAJIAAADIgFANQAAAIAFAGQABABgEAFQgLAQARAJQAFADgCAHQgEAHgHAFQgLABgHAIQgFADgCAAIgBAAg");
	this.shape_24.setTransform(-98.9,-109,1.6,1.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C33024").s().p("AgjA4IgjgdQgFgEgCgOQgCgOADgFQAEgJgEgDQgDgDgGAFQgMAJgEgCQgFgBgFgNIgEgNQgDgDAEgDIACgBIAMgDQAGgDAFABQAPAAANAKQAMAKADAPQAAAFAEABQAEAAABgFQANgnAygCQAugCAnAaQAFAEABADQAAADgEAFQgXAdgpgQQgNgGgJgHQgGgFgFAEQgFADADAGIABABQADADgBACIgCAEIgEAIQACAKgGAHQgCAEgKAJQgKAHgIAKQgDADgDAAIAAAAQgDAAgDgCg");
	this.shape_25.setTransform(-86,-41.3,1.6,1.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F5C3A1").s().p("AghBLQgLgKgJgNQgUgfAGgLQABgDAXgPIALgHQAXgRgQgYQgIgJgDgLQgBgOAIgIQALAeAWAaQASAUAeAWQAHAFADAEQAEAFgCAIQgBAPAFANQAFAQgIANQgIAOgPAEIgEABIgNABQgdAAgdgYg");
	this.shape_26.setTransform(-102.9,-31.6,1.6,1.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A12323").s().p("AApB+QgIAAgCgHQgZg4hHgUQgUgFgOAAQgSABgNAJQgUAQgXgKQgIgDgLAAQgOAAADgOQACgMgHgMIgOgUQAmgHANgXQADgFACACIAEAEQAdAkAsAQQAcAMAbAAQAuAFAwgPQAygSAlgkQAkgmASgxIADgGQAMAiAFAnQAGAygNAsQgGAcgTAWQgTAVgbAKQgeALgfAAQgVAAgUgEg");
	this.shape_27.setTransform(-62.3,-11.3,1.6,1.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F28C3F").s().p("AjUDyQgTgJgMgSQgLgTAAgVQgDgyAYguIANgfIAMgfIAGgMQACgGgBgHQgCgGAJgJQAKgKAFgNQAFgKgCgLQgDgLgIgIQgJgHgMAAQgMAAgJAHQgQANgJAQQgGAAgEgKQgGgQADgTQALg0AXguQAGgGACgEQAXgUAfgFQAegFAcAMQAMAEAVALQAGADgEAEQgEADADAFIABAAQAEAEAGgEQAggUANgHQBMgnBTAXQBUAYAsBKQAFAmAAAeQACBUgfAzQgOAcgdAHQgOAEgOgGQgNgGgHgNIgCgMQgGgPgEgaIgHgqQgJgngggKQgNgDgNACQgNADgKAJIAAgBQgOANgCATQgCAUALAOQAEAEgDAGQgGAIAGAIIAAABQgEAFgBAMQgBALgCAFQgdAygUA7IgCADQgNANgOAHQgiAagnARQgYAKgXAAQgVAAgTgJgAAUALIgFgcQgCgWAQgSQAFgGAGADQgEgIgJAHQgQAPgCAUQgCAVANAQg");
	this.shape_28.setTransform(-54.3,-99.3,1.6,1.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0B0706").s().p("AgdA3QgFgOACgOQAAgnAQgjIAEgIQAAgFgJABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAIAAgBQABgFAEgBQAHgCAFAEQADACAEAHQATAkAEAoIABAHQABADAFAAQAFAAgCAKQgGANgLAJQgMAJgOACQgOgBgFgPg");
	this.shape_29.setTransform(-8.7,176.7,1.6,1.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0B0706").s().p("AALA0IAAgBQgBgEgHgBQgOgBgGgHQgHgHgBgPQAAgeAPgcQgDgBgFADIgFADQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAgBQgDgEAFgHQAIgHALABQAJABAHAIIACACQAVAggFAjIgFAbQAAAFgFACIgCABQgEAAgBgFg");
	this.shape_30.setTransform(57.1,180.9,1.6,1.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0A0606").s().p("AAbA/QgCgFgDAAIgGABQgMADgNgCQghgFAGgjQAIglAWgfIgIABQgEABgBgFQgBgFADgEQADgEAFgBIADAAQAJAAAEABQAHADAEAJQAXAugDAyQAAAJgDAIQgBADgDACIgBAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_31.setTransform(21.6,179.2,1.6,1.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F18C3F").s().p("AARCRQgQgGgDAAQgIAAgZgUQgZgTgJADQgCAAgDgkQgDgmgBgBQALgYABghQABglAHgVQANggARgeQABAGAyAEQA1ADACAEQAKAPhICDQgDAFAEgCQAGgCgCAGQgCAKACABIANAIQACACAHARQAHARACACQANALgHAZQgGAXgPANIgCAAQgGAAgMgFg");
	this.shape_32.setTransform(-43.1,-63.9,1.6,1.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1B0F0B").s().p("AgvAAQgGgCABgFQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAEAAQAsAJAoAAQAPAAAAADQAAAEgFABIgKABIgPABQgkAAgjgKg");
	this.shape_33.setTransform(-80.7,147.4,1.6,1.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#140906").s().p("AA4ARIgGgCIgcgKQgSgIgTgBQgGgDgKABIgRAAIgIAAQgEAAAAgFQgBgFAFAAIAJAAIAgAAIAoAIQAQAHAOAJIAFADQAAAAABABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgCAAg");
	this.shape_34.setTransform(40.5,134.2,1.6,1.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#130D0C").s().p("AACAMQgYgCgpgLQgHgDACgFQACgFAHADQAsAMAwgCIAbAAIAGABQADAAAAADQgYAKgdAAIgOgBg");
	this.shape_35.setTransform(-79.6,144.1,1.6,1.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#080505").s().p("Ah9JrQgggEgSgdQgDgFgCAAQgDgBgFAEQgNALgRAEQgSADgQgGIgKgBQgbgQgNgcQgCgHgJADQgPAFgQgEQgPgEgLgNQgVgagEgiQgBgHgDgDQgCgEgHABQgDAAgEgCQgHgEgDgDQgTgcAEghIABgaQACgOAEgLQACgEgEgCQgGgCgFgGIgIgLQgZhEA3hAQAGgEABgHQABgHgEgGIgIgRQgIgZgEgcQgDgXAAgLQABgqAMgsIAFgSQAPgqAXgrQANgXATgUQAHgIgFgGQgFgKgEgFIgFgQQgEgSgBgTQABhKAfhDQAXg5AtgqQApgpA5ABQA2ABAcAcQAFAFAFgGQA1hOBmgaQAOgDAPABIAEAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAIgEACQgcAFgeAJQg2AVgpAoQgDAEAAACQAdgPAdgFQA0gMAzAMQA8ANAuApQAuAoAVA6QAIAXADAUQABAGACACQACAAAFgCQAegQAtAJQANACALAJQAEAEgBACQgBADgFgBQgQgDgSgFQgPgDgRADQgLACgUAHQgIADACAMQADAWgBAdIgEAyQgDAkgLAgQgKAegSAZQgEAEACAEQAqgJAtAEQBIAFAtAeQAMAIgCAEQgCAEgFgCIgIgEQgngQgpgLQhAgNhDAOQgGABgEADQgRAPgUAKQBDAcAxAzQAtAyAHAtIABAWIgGAUQgFAMgIAFQgJAFAAAGQAAADAFAJQAPAagCAbQgCAdgTASQgLAKgOADQgKABAFAIQAPAcACAgQADATgHAYQgIAcgPAHQgPAIgQgCQgFAAgDACQgCABgBAGQgHAfgaARQgaASgfgHIgJgCQgHgEgFAHQgeAjgggEQgLgBgHAEQgGADgIAJQgSATgWAEQgYAGgXgRQgCgCgEgBQgEAAgDADIgBABQgQAKgPAEIgRACIgFAAQgHAAgFgCg");
	this.shape_36.setTransform(-50.7,-53.4,1.6,1.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CB9163").s().p("AAAADQgLgDgDABQAOgIAPAHQgEAEgGAAIgFgBg");
	this.shape_37.setTransform(-4.4,144.9,1.6,1.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EE8C40").s().p("AgYgUQAXgpAogCQgmArgKAUQgMATgLAtQgPgtAXgng");
	this.shape_38.setTransform(-14.7,158.6,1.6,1.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BF3325").s().p("AgcASQgFgSAHgPQAHgOAOgHQANgIAPABQAGAAABACQABACgDAFIgMAVIgFAIQgDACgGgDQgBgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQgBACABADQACAEADAEQgCABgCgCQgDgCgCAAIgEADQAAABgBAAQAAAAAAABQABAAAAABQAAAAABABQAJAFgBAIQAAAEgFAKIgCAHQgPgKgFgRg");
	this.shape_39.setTransform(-112.2,-132.5,1.6,1.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C86A27").s().p("AgTA8IgHgBQgEAAgCgDQgLgfALgfQAKgkAhgPQAHgEAIABQAHABAFAFQgfAGgMAnQgMAfADAhQACAGgEAAIgDgBg");
	this.shape_40.setTransform(-90.1,159.1,1.6,1.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C86929").s().p("AgyAAQAHgPAVgOQAfgXAuAXIgbAgQgFAGgEgCQgWgGgTALQgPAIgOAWQgHgYAIgSg");
	this.shape_41.setTransform(-109.7,-142.5,1.6,1.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7B3E12").s().p("AgvBSQgDgEABgEQgEgZAHgYQAHgZAQgSQASgTAJgWQAFgLALgGQAFgEAPgFQALgEgBAQQAFALgKAIQgYAVgWAcQgUAWgJAgQgCANACAMQAAAMgKABQgEgBgDgEg");
	this.shape_42.setTransform(-126.9,-50.2,1.6,1.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#572D14").s().p("AgGBVQgXgoAGguQAEgaAGgTQABgEAEgFIAGgJQACgMgDgLIgBgHIABACQAOAOAIAGQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBAFQgHAfAAAVQABAbAMAXQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgHACgEAHIgHAMQAAABAAAAQgBABAAABQAAAAABAAQAAABAAAAIADACIADAEIgDAKIAAgGQAAgFgDAAQgCAAgBAEIgHARQgBgGgCgEg");
	this.shape_43.setTransform(-122.7,11.2,1.6,1.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#562D13").s().p("AgrBGQAIgJgBgLQABgnAXgcQAUgZAXgYIAGgFQADgCAEAEQgBARgHAhQgDAZACAeIABAGQAAAEgEADQgGAAgKAGQgLAGgFAAQgFgDgFABQgFABgEAEQgHAGgEACIgFABQgEAAgEgDg");
	this.shape_44.setTransform(-126.4,-47.5,1.6,1.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7D3F12").s().p("AgcBHQgLgIgOgOQgHhDA9gqQAVgRAbAIQAFACAAACQABACgDAEQgLAOgGASQgIgFgGAHQgiAegEAeIgEARQgBAJACAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCABIgFgCg");
	this.shape_45.setTransform(-79.1,-173.6,1.6,1.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#572D13").s().p("AguAxQgCgBABgKQACgfAPgcQADgHAIgIQAKgJADgEQAkASANAmQAFAOAAAOQAAAMgKgBQgMAEgHgCQgagGgbAGIgJACIgDgBg");
	this.shape_46.setTransform(27.1,-179.3,1.6,1.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C96A26").s().p("AgmAvQgIgPAJgdQAHgVAFgLQAKgRAOgKQAJgGAKgCQAHgDAHADQAHAEADAHIAAABQgbATAEApQABAVAIATQADAFgGACQgOAKgTABQgXgHgHgMg");
	this.shape_47.setTransform(-76,161.7,1.6,1.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CA6927").s().p("AAdAjQgogNgUgIIgbgKQgOgGgIgMQAHgCAJAEQAMAFAEABQgLgKgKgEIgFgDQgDgBAAgDQAZgQAlAEQAiAEAYATQAXARAPAeIAAAEQgMgHgKgDQgKgCgCAEQgCADADADIAEAFIABADQgNAAgLgGg");
	this.shape_48.setTransform(57.1,137.4,1.6,1.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F18D3F").s().p("AhUBRIgFgCQgDgCgBgDQBKAXAsg1QATgXAGgcQAGgdgJgdQgDgLABgEQACgGAKgCQAIgCAGgFQAOAdAJAhQgHAHgBALQgSBGgxAbQgXAOgcAAQgcAAgYgPg");
	this.shape_49.setTransform(121.4,101,1.6,1.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#572D13").s().p("AAvBHQgGgHgEAAQAAgQgLgLIguhAQgZgggQgeQgEgGABgCQACgDAHADQAuANAeAkQAuAygCBGIAAAbg");
	this.shape_50.setTransform(92.8,-6.5,1.6,1.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F18C3F").s().p("AgXBcIgDgBQgcgQgUgZQgVgeAIgiQAIgiAigVQAdgTAkgDQAegCAoAJIgaAYQgLAAgJgFQgagIgYAMQgZAMgJAbQgDAGABALQAAAMgBAEQgPAuAjAcQAEADgCADIgCABIAAAAg");
	this.shape_51.setTransform(-111,-137.6,1.6,1.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7C3F12").s().p("AANAuQgbgKgggBQgHAAgBgCQgCgDABgGQAHglAagSQAYgSAnADQAHAAAAAGIADASQgCAaAHAYIgcARQgEADgEAAQgEAAgDgCg");
	this.shape_52.setTransform(-97.8,-160.6,1.6,1.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7C3F12").s().p("Ag2AzQgOgdAJgaQAIgcAdgOQANgGAPgCQAFgCADAFQAVAUAWAMQAEACACAFQACAEgCAFIgBABQgdgCgTAeQgDAGgGgBIgFAAQgDAAgBAEQgVAFgTAOQgCACgCAAQgEAAgCgFg");
	this.shape_53.setTransform(-125.7,-117.7,1.6,1.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4F2B15").s().p("AguBAQgBgRACgdQACgSAGgSQANgiAagYQALgMAPgKQAGgCAAgHQAKAGADANQACAMgIALIAAABQgPAQgKAVQgUAnAMAtIABAGQACADAAADQgLADgIAIIgbAdQgJgUgCgZg");
	this.shape_54.setTransform(-124.7,-14.1,1.6,1.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C96A26").s().p("AAmApQgZAAgWAIQgHACgEgFQgdgygwgmQAGgHAJAAIARACQAvAIAcAKQApAOAcAYQAVAPgCAaQgggIgcgBg");
	this.shape_55.setTransform(39.1,-133.8,1.6,1.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#572D13").s().p("AAjBaIgJgEQghgMgcgXQgTgPgJgWQgIgWADgYQAGgYgEgYQgBgEgEgEQgFgFAAgDQANgCAEADQAEACACAMQAEAfATAYQANAOAMAFQANAGAQgGQALgEADAIQANAZAYAPQADACgBADIAAABIgOAAQgHACgDAHQgKARgCAUQAAAHgDACQAAgFgDgDg");
	this.shape_56.setTransform(-105,34.9,1.6,1.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7C3F12").s().p("AgPBqQgWgmAAguQgBg3AdgvQAMgXARgTQAJgJgPgDQAEgQAOACQAGAIAAAJQAAAKgGAHQgbAtAMA9QADARAJAPQAGAGgEAJQgJAhgEAhQgBAIABANIABAXQgWgTgMgYg");
	this.shape_57.setTransform(-128.3,20.2,1.6,1.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7C3E12").s().p("ABWBBQABgMgCgIQgFgPgMgMQgOgOgQACQgQAEgJAMIgDAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIABgFQABgVAUgJQAJgDgDgIQgDgKgJgGQgJgGgLgBQgHAAgHAEQgGAEgDAIQgBAEgEADQgEADgEgBIgDgBQgQgFgKALQgLAKAFARQACAKgCAGQgDAGgKAHQAAgJgGgBQgJgBgCgFQgCgEABgJQACgQALgNQAKgNAQgGQAJgDADgKQADgNAKgJQAKgKANgCQAQgDAQAHQAPAHAKAOQAFAJAMABQAWABAKAPQALAOgFAUIgEAPQgDAIABADQABAFAJABQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIAAAFQADAbgWASIABgUg");
	this.shape_58.setTransform(125.1,69.9,1.6,1.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C96A26").s().p("AABBhQgFgCgDgFQgBgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgJgWgSgPQgSgQgWgHQgOgFgMACQgEACgEgBQgDgCgCgDIAAgCQgKgegEgZQAcAgAnARQAlAYAqgHQA5gKAcg7QAJgUAEgWIADgJQACgEAFgBQAJAkgIAkQgIAigXAcQgiAqgwAQQgEADgEAAIgEgBg");
	this.shape_59.setTransform(116.4,111.2,1.6,1.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C96A26").s().p("Ag/AXIAbgEIAEgBQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgFgHgBQgUgFgTAHIgSAIIAKghQAhgXApgJQAsgNArAMQAXAEAQATQgEAEgFAAIgKAAQgJgBgJADIAaABIAFABQAEABACAEIhAAGQgmAEgYAGIgNAEQAOAAAGACQAJAEAFAJQAIALgGAKQgIANgOgEQgSgEgUAFQgigFgkAGQAVgaAggGg");
	this.shape_60.setTransform(19.3,135.7,1.6,1.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C86927").s().p("AhSBQQgFAAABgIIADgaQAAgFAEgBIAGgBQAdABAZgPQAXgPAMgaQAPgZgGgeIgBgLQAQAIAKAXQAKAYgJASIgDAGQgBADADABQAEACAIgHQALgNgHgZQgIgWgOgSQAjALAHAiQAGAdgRAcQgXAmgoAPIgDAAIADACQgUAIgaAAQgPAAghgDg");
	this.shape_61.setTransform(57.2,-106.4,1.6,1.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#562D13").s().p("ABMBIIgIgKQgagYgjgRQgHgDgFgFQAAgFgFgCIgHgDQgLgJgVgMIghgUIgIgEQgEgCABgEQAAgHAMgHQAlgVApALQAYAGAUAQQATAQALAWQAOAXABAcIAAAIQACAFAGgBQgCAVgHAEIgCABQgEAAgDgFg");
	this.shape_62.setTransform(60.5,-143.3,1.6,1.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#562D13").s().p("AhOAlQACgZANgVQAMgWAUgPQAbgTA0gKIABAAQAMAFADgHQACgDgBgMQAKAFADAJQAEAKgGAFQgWAXgRAgQgMAXgPAmIgCAHQgBADgEABQgDgHgEgBQgEgBgHADQgQAIgLAMQAAgOgKAJIgVAUQgGgbABgdg");
	this.shape_63.setTransform(-119.2,-72.2,1.6,1.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#7B3F12").s().p("AiSCBQgSgFADgNQAOgnAQgiQAZg3AvgsQAlgkAwgSQAxgSA0AFIAiAFQAEAHgFAGIgJAJIgIAIQgEADgIgDQgggMgiALQg0APgpAjQgtAkggAzQgVAigLAnIgCAJQgDAFgDAAIgBgBg");
	this.shape_64.setTransform(-87.7,-136.8,1.6,1.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7C3F12").s().p("Ah4BQIgIgZQAOgrAagiQASgYAcgOQAXgMAggHQAdgGAgABQAdAEAaAQQgqAbgaAVQgHABgLgCQgOgEgFAAQgegCgcANQgcAMgTAZQgUAYgKAdQgBAFgDAAQgEAAgBgFg");
	this.shape_65.setTransform(-53.2,-180,1.6,1.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C33024").s().p("AgTBJQgFAAgCgBQgDgCAAgFIgBgIQgCgPADgDQACgDAPgCQAJgBAFgIQgOgDgPAEIgEACQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgDAGAAIAQAAQAGAAAAgEQABgEgHgBIgGAAQgHADgIgDQgHgEgDgGIgBgGQgJgdgQgeQA+gRA7AZQALAFADAMQANAqgbAlQgZAigoAAIgGAAg");
	this.shape_66.setTransform(48.5,-113.6,1.6,1.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#7C3F12").s().p("AhOBcQgUgzASgyQATg0AxgZQANgJAPgDQAVgBASAHIAPADQAJABAFACIAEABQAAAAABABQAAAAAAAAQAAABABAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAIgDABQgzAPghArQgKANgDAQQgDARAFARQggAUgVAfQgEAGgDAAQgEAAgDgIg");
	this.shape_67.setTransform(-127.2,-94.6,1.6,1.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#572D13").s().p("AAhA8QgLg2gTgxIgDgGQgBgEgCAAQgEACABAEIAAAAQADAGgBAGQgGgCAAgGIgCgJQgZgygMgZIgTgiQgCgEACgCIAFgCQAMgCALAHQAxASAZAwQASAlAIAlQAHAfACATQADAdgGAYQgEAYgQATQgCACgBAEIAAAGIAAATQABALgEAHQADg3gKg4g");
	this.shape_68.setTransform(88,17.5,1.6,1.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#7C3F12").s().p("AASB3QgugggagyQgXgqgDgvQgCgoAGgjQADgLgJAAQABgJAGgDQAGgCAKAEQAMAHACANQABAFAAASQgDAoARAlQATAsAqAYQANAIAQAFQAFAHgCAQQAGAoAOAjQghgLgggVg");
	this.shape_69.setTransform(-83.2,65.5,1.6,1.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#7C3F12").s().p("AhdB3QgQgsAIgvQAIgyAagoQAegwA0gTIArgOIAUAAQALAAAIAFQAEACACAFIACAKIAAALQAAAKgMAAQhMADgnA4QgPAXgBAbQgDAVAGAUQACAIgEAFQgdAlgKAsQgLgLgGgOg");
	this.shape_70.setTransform(-125.1,-67.4,1.6,1.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#7C3F12").s().p("AigBZQgIgaAOgZQA4gxBDgpQAkgVAcgKQAkgMAiACQAiACAbASQhKAdhNBEQgDgBgDgCQgNgOgUgDQgPgCgWAFQgaAFgVAVQgKAKgXAfIgDAJQgCAFgDADIgFAEIAAAAQgCAAgCgGg");
	this.shape_71.setTransform(-26.3,-179.6,1.6,1.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#572D13").s().p("AAFBfQghgGgGgeQgCgLgMAEQgLAEgMgFQgLgFgFgLQgCgEAAgGQgEgQAJgNIADgFIADgGQAHgHgDgJQgEgOADgIQADgIAKgHQAKgGALAEQAEABAFgCQAEgCACgEQAEgJAJgFQAJgEAJACQAVAEAHAUQAEAJgLAGQgTAJAAAVQAEAAADgDIAFgFQAJgIALgBQAMgBAKAHQAUAMAHAWQAHAVgKAWQgFAHgJADQgHAEgFgGQgDgDABgDIAEgGQAPgVgFgZIgCgGQgCgEgEABQgDAAgBADIAAAHQgCAQgBAFQgDANgGAIQgIALgMAEQgNAFgNgDQgMgDgJgJQgJgKgDgNIgBgEIgBgFQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAABQAAAAgBABQAAAAAAABIAAAFQgBASAMAOQALAOARAEIAGABQABAAAAAAQABAAABABQAAAAAAABQAAAAAAABQADANAAAMQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgCAAg");
	this.shape_72.setTransform(125,76.9,1.6,1.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#7C3F12").s().p("AAPB6QgfgKgXgVQgighgDguQgDgtAPgxIACgIIACgGQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgFgEQgDgEADgDIAHgMQAEgHAIgBQAIABAEAHQARASgGAXIgDAiQgBAzAyAfQAWANAXAKQAHACACACQAEAEgCAGQgBA0ABALQgngDgXgIg");
	this.shape_73.setTransform(-111,39.3,1.6,1.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#562D13").s().p("AAsBtQgjgNgZgcQgZgcgKglQgGgZABgbIgBgWQgCgLgJgIQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAHgDAGADQAfAJAZgUQAIgGADAAQADABAHAIQAPAVAWAHQAGACADAEQgFAJgCAQIgFAbQgCAJAHABQAEABAAAEIAAAGIgDgGQgBgCgEAAQgDABAAADIgBAFQgEASACASIAABCIgEACIgEgCg");
	this.shape_74.setTransform(-81.8,56.5,1.6,1.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#7B3F12").s().p("AhABrQgIgpAFgmQAHhfA4g/IAVgUQAGgEgBgEQALgIAFgCQAKgFAJACQAIAbAFAaQAAAJgHAEQgeAUgUAeQgPAWgEAbQgHAlAGAlQACALADAHQACAIgBADQgZAigKApQgSgdgKgkg");
	this.shape_75.setTransform(-130,-12.4,1.6,1.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C96A26").s().p("AgTBlQgUgBgQgOQgPgPgDgVQgPhJAlhAIASgKQALgGAKABQANABAKAJQATASAKAcIAfBVQACgCgBgHQAAgHACgDIAAAoIACAPQADAMgCADQgCACgNAEQgaAHgbAAQgNAAgPgCg");
	this.shape_76.setTransform(-5.5,173.4,1.6,1.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#572D13").s().p("AgYA/QAGgqgDgrQgDgugNguIgQgwQAlgCAaAbQAoAjAEBCQACA1gXAwQgXA1guAiIgHAHQgEAEgEABQAVgwAGg1g");
	this.shape_77.setTransform(51.7,34,1.6,1.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F28C3F").s().p("AA7CZQgBgEAFgBQAPgHAPgLQAsgggCgvQABgdgYgQIgQgKQgZgagigNQgGgcgXgSQgOgNghgNQgmgPgogHQgWgDgTAEQgEgBgEgDIgIgGQAqgHAuAAQBYABBQAqQBCAlATA2QAQAtgTAuQgSAtgsAWQgRAKgVAEIgDABIgCgBg");
	this.shape_78.setTransform(48.8,-118.8,1.6,1.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#7C3F12").s().p("AAIBSQAQgUACgbQACgagOgVQggg9g3gnIgNgKQgIgEgJAEIgBgDQAMgZADgZQAAgFACgBQABAAAFACQA4AlAvAyQA5A/AQA7QATA8gRA8QgFASgNAOQgeg1gpgvg");
	this.shape_79.setTransform(93.9,-84.3,1.6,1.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#7C3F12").s().p("AA0C4QhxgigahuQgOhBADhFIAAgTIgCgHQgBgEgFgBQgGAAACgHIADgaQACgPAFgKQABgEADgCQASgDAQAEQASAAACADQACADgFASQgUBIAJAzQAGAiALAcQAJAWAQAUQAeApAwAWIAFACIASAeQALARALAJQAEADgCACIgGABIgKABQgVAAgWgHg");
	this.shape_80.setTransform(-55.3,75.8,1.6,1.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#562D13").s().p("AgOCvQgbglgNgsQgEgNAGgMQAcg9AFg/QAGg5gQg4IgIgVQAkAYASAlQAXApAHAnQAMAwgEAyQgDAxgUAwQgEAJgKANIgPAVQgKgEgHgLg");
	this.shape_81.setTransform(75.1,35.1,1.6,1.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C96A26").s().p("Ag6BoQgNgDgHgGQgGgGgCgNQgDgyADgxQgBgSAGgPQADADACgCIACgEQALgVASgOQAVgPAYADQAVACAWASQAlAdAHA6IACAFQgEApgcAhQgXAZggABQgMACgMAAQgTAAgRgEg");
	this.shape_82.setTransform(60.2,175.3,1.6,1.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#7C3F12").s().p("ABADpQgFgBgIgOIgyhUQAfgjgJg2QgEgdgJgiQgPgygSglQghhDg1g3IgEgFQAaABAPAUQAtAuAiAtQBVBxATByQAMBIgqArQgLALgFAAIgBAAg");
	this.shape_83.setTransform(96.2,-45.5,1.6,1.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C96A26").s().p("AgwBkQg0gJgEg0QgGgzANgzQAFgDAHgKQAHgJAEgDQAVgTAcgBQAYgBASAOQAPALAPAWQAgA1AUA6QABAVAGAQQACAFgCADQgBACgFACQgaAKgfABIgFAAQgqAAgsgJg");
	this.shape_84.setTransform(26.7,176.1,1.6,1.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#7C3F12").s().p("AjMBbQgDgCADgFQAPgbAXgZQADgCADACQADAFAEAAIAHgFQA+gxAXgPQAzgnA+gOQBNgPAzAgQABAEgDADIgFAFQgOAOgIAVQgEAOgEAZQgCAMANgEQAUgDAYABQAIAAAAAGIg2ALQgxAJgmAOIgHACQgGgBgEgGQgZgqg3gBQgaABgZAIQgUAGgXANIgpAXQgRALgNALIgDACIgCAAIgCAAg");
	this.shape_85.setTransform(-2.8,-176.3,1.6,1.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#7C3F12").s().p("Ag/CFQAEgdAAgaQAGgDAAgFIgCgJQgGgTAOgNQAfgiANgtQAJgjAEgnQACgQAAgZIAAgqIAAgFQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIADAEQARAYAJAUIAJA+QALBTgBBOQAAAdgEASQgGAZgNASQgYAggkAPIgyAXQgCgqAFgqg");
	this.shape_86.setTransform(6,67.7,1.6,1.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F28C3F").s().p("ABYCbQgEgUgRgNQgGgFgIAAQgIABgGAHIgCACQgUAegigJQgggIgRgdQgjhBgFhKQgJhXAfhSQAEgSAPgJQANBnAaA9QAFATgBATQgBAPADALQACAEACAAQACAAACgEQADgKAAgMQAIAFABgDQACgCAAgIQAAgNACgCQACgBANADQAfAHASAbQAjAzAEA/QAGA5gOAiQgFANgNAMQAOgigHgkg");
	this.shape_87.setTransform(99.2,124.2,1.6,1.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C96A26").s().p("AgaEvQgEgCABgIQAAgHgEgBQgFAAAAAIIAAAIQAAADgEAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAgEIABgIQAAgFgEAAQgEgBgBAFIAAAIQgBAHgHgCQgRgFgLgGQgEgCgBgHQgFgbgLgaQgDgGACgJIAEgOQADgXAEg9QAEhUgDhSQgChZgPhcIgLhBQAxAoAqguQgEBDAJBJQgcApgJBMQgLBbAhBXQAQAvAcASQAOAMATgCQATgBANgOIAJgIQAHgIALAAQAKAAAIAIIAAAAQAKAJAFANQANAwgVAgQgSASgjgBIgWgCQAWgUAJgKQAQgRAIgXQACgFAAgGQABgGgGgDQgEgBgEAGIgSAcQgNAXgWAQQgWAPgZAFIgGABIgEgBg");
	this.shape_88.setTransform(93.8,114.4,1.6,1.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#7C3F12").s().p("AAfDGQg9gIgmgyQgSgZgQgiQgGgQgSgwQgRgqABgrQgCgPAAgYIAAgnIADAAIAaA1QAeA4AsArQAlAlApAcQAKAGADgCQAEgCADgLIARhLQAFgiAEgQQAFgTAEggQAEglADgPIACgNIAAgNQAAgGADgBQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIACADQAOAcAKAeQAJAfACAcQgBAHgCACQgHAAAAAJQAAA3gHA5QgFAoAAAtQAAAZAHAaIAAAHQgBACgFAAIgvABIgPABQgTAAgNgCg");
	this.shape_89.setTransform(-27.2,79.2,1.6,1.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F28C3F").s().p("AgwDrQgLgBgHgIQgHgIAAgLQgCgiAFgTQAIgbAXgQQAHgEgFgHQgZgKgXAZQgRARgGAXQgGAXAHAXIACAGQAAADgDABQgMgEgHgKQgIgJgBgNQgHgpASgmQAKgWAWgJQAGgCABgDQABgDgDgGIgehDQgSgpgHgeQgIgjgCgTQgDgfAFgZQARgTAQgKQATgMAXAAQAXAAAQAOQAPANAHAVQAFAOADAYIAHAmQAIAnAXAfQAXAgAiAUIAHAFQAGADACADIgqAHIgyAKQgHACAFAEQAJAKANAEIgIAEQgKAFgNgBIgXgCQgUgBgTgGQgFgDgFADQAPAGAOADQA2AMAlgMQAGgCAEACQAhAKAegQQAOgHADABQAEABAIAOIAFAIQgLgBgLABQgOAEgLAKQgKALgDAPQgLAoAPAlQADAIAIAGIAOAKQgTAMgWAAQgMACgLgIQgLgHgCgNQgHgTADgUQADgTANgQQAJgKgOAAQgOgKgNACQgPADgLANQgZAfgCAoQgBAMAGAKQAHAJALADIAEACQACABAAADIgRACQgRAAgRgEg");
	this.shape_90.setTransform(-77.9,134.3,1.6,1.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#562D13").s().p("AASB8QgFgIgFADQgDACABADIADAGIAoBNQgMgIgMgMQgzgvg9gdIgLgGQgMgFAAgDQgBgDAIgLQAVgdAJgjQAJgigGgkQgFgagIgUQgNgjgagaQgDgDABgEIABgHIAmgRQAogVAXgpQAQgEALAMQAvAiAhAuQAfArgGAqQgCAWgSAOIgZgXQgPgQgKgHIgKgIQgGgEgBAIQgPgLgQgHQAaAfARAZQAsA8AWBEQAQAvAGA0QAGAmgVAhQgDAGgHADg");
	this.shape_91.setTransform(80.9,-64.4,1.6,1.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F28C3F").s().p("ABFCdIgBgFQgQgpgTglQgPghgZgWQgOgMgSgDQgSgDgQAIQgaALgPAWIgDAEQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAEgpAbgfQAWgcAjACIAIAAQAEAAABgGQAAgGgEgCIgIgCQgfgFgYAUQgoAdgNA8QgIAogCAmIgBALQAAAHgBAEQgEgBgBgDIgCgGQgUg6gMgdQgIgTgOgOQgJgJgOgCQgOgCgMAHIgGAFQgEACgEgBQASgkAkgaQAIgHAKAAQAEAAAFgEQAFgFAEgBQAcgFAgAAQAMAAgCgJQABgGAJAAIAbAAQATACACgMQABgIgDgGQgEgHgIgDIgSgEQgDgBgBgDQABgDAEgBIAHgCQA3gNA1gBIAKgCQAGgBADAAQAXAAARAKQALANASAIIAhAMIAkAMQAWAHAOAGQAbATAQAeQAQAeABAhQADAugJArQgDgBgBgEIgBgGQgLgzgagYQgegageACQgfAEgWAgQgEAIgGAHQgBABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABAAQAHgnAhgRIAHgEQADgEgDgEQgDgFgEABQgDAAgFADQgnARgMAxQgGAWgCAgIgCA2IAAAFQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_92.setTransform(30.8,158.5,1.6,1.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C96A26").s().p("ADHCuQgKgqgLgbQgOgkgVgbQgUgagbgIQgegIghANQgsAVgjAfQgvAlgpArQgoArgiAuIgFAGIAOg2QACgMAMgCIAHAAQADgBAAgFQAAgGgMABIgGABQABgFAEgDIAIgDIAJgCQAEgCgBgFQgBgEgFAAIgJABIgFABIAKgxQAGgbADgbQACgMAGgJQAMgQAEgTQABgHAHAAQAigFAcgXQAUgRAagiQANgQAMgWQACgJAJABQA4ADAyg1QARgTAPgXIAHAeQAEAPAHAKQARAWAIAhQADANAGAuQAJBCAGBgQADA4gCBLIgCAZQgGgvgGgXg");
	this.shape_93.setTransform(41.5,89.1,1.6,1.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F28C3F").s().p("AC4CdIgQgZQgKgPgLgIQg4gpg8AZIgHACQgWgCgRgGQgdgYglgDQgfgDgpAMQgbAHgZAPQgIAFgDgBQADgRAHgTQAWglAbgcQA/hIBMg6QAdgZAmgNQAegJAbAKQAbAKAVAaQAPAUAMAcQAIASALAhQALAmAGAoIgBAMQgBAHACAEQgBAZgIBbg");
	this.shape_94.setTransform(40.5,117.9,1.6,1.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C96A26").s().p("AhyDyQgFgcAFgdQADgUAQgOQAQgOAVAAQAAAAAAgBQABAAAAgBQAAAAgBgBQAAgBAAAAIgCgDQgFgNgMAHQgaAQgfgEQgHAAgHgDQgDgDgGAAIgKAAQgHABgGgEQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAIADAAQgLgCgHgIQgLgLAPgFQAqgKAkgDQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIgYgQQgjgagUglQgWglgEgrQgBgfgOgdQgMgZgagFQgXgGgXAKQgUALgPAPQgFAGgDAAQAAgYAHgVQACgJAHAFQAFAFADgEQADgDgGgGIgFgEQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAIAFADIACACQAJAFACgFQADgGgJgDQgJgDAAgGQgBgEAFgIQAQgcAVgbQAEgEADAAQACAAAEAEQA0A+A8APQAYAHANATQBJBZBigGQAcgCAZAOQAaAPA0ABIBNgBQALAAADgDQACgEgDgJQgFgRgDgRQAAgHAGAAQA3gNArgnIgLA0QgXBqgUA+QgLAegHAeQgBALgKgFQgVgJgVAKQhaAnheg7IgMgGQgPgFgJgSIgLggQgJgcgRgrQgDgOAAgOIgBgJQgCgEgHABQgDAAgCgDIgDgFQgGgMgMgKQgFgFgDADQgEACAEAHIARAkQAqBaAVBiQANAqgLArQgGAYgVANIgKAGQgGACgFgIQgEgFgFAKQgLAWgWAKQgagGgIgig");
	this.shape_95.setTransform(-45,123.8,1.6,1.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#562D13").s().p("AizGKIgFgDQg5gcgfg1QgYgqgGgxQgHgxANgvQADgSAFgPQAEgNgNABQgEAAgCgCQgBgEADgCIAFgBQANgFAIgFQAEgEAGAAQAGAAAEAEQAVANAYgEQAZgFAOgTQAFgIAIgEQAIgDAJABQAcADAVgTIANgOQAGgHAJAEQAWAGAWgFQAVgHAOgRQAMgOADgSQACgMAMABQAsAGAKg4QAHgsgUgpQgFgLABgDQABgCALgEQAWgHAKgUQAKgTgCgYQgDgXgMgRQgFgIABgEQAAgDAJgGQAMgKAFgRIABgHQACgDAEgBQAAAGACACIASADQALABAGADQAcANAWAXIAYAbQANAQAGAPQAKATgGAVQgDAKgJgFIghgPQAAAFAEAEIAGAGQAdAiAOAqQAWA8gHA/QgDAcgJAZQgMAcgIAPQgOAXgQAQIgaAXIgUhiQgCgGgDABQgBAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABIAAAEIABAMQACAHgBAFQgEgBgCgDIgDgGQgJgSgMgPQgEAGABAHQADAzgIAzQgKBFgqA0QgQAPAFAWIABAJQAAAFgIABIAAgmQgBgWgEgPQgDg6gag1QgCgIgFgEQgEABAAAHQgIBQgPBJIgUBfQgDANgFACQgFACgMgHQhxhIg3h7QgDgJgFgHQAAAuABAOIAAAFQAAADgCACQgFgDgCABQgCABgBAFQgDAQADATIAIAhQAOAzAXAvIABAFIgFABIgCAAg");
	this.shape_96.setTransform(-16.6,33.6,1.6,1.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#562D13").s().p("AFcHlIgBgFQABgsgjgwQgwg/hIggIgFgDIgFgCQgDgBgBgDQAAgDAIgFQAPgJALgJQAIgHALgBQBbgTBYAjQAQAIATAFQgRgRgXgHQgpgPgqgBQgmgCgkAFIgGAAQgEAAgBgCQgDgEAGgHQAkg3AFhVQADgjgBgZIAAgQQgCgMADgEQADgFAMgEQAkgOAlAMQAIAEAHgCQgOgMgTgBQgggEgcAMQgIAEgDgCQgDgCgCgJQgKg5gjguQhNhgh1ADQgvABguAVIgFACIgGgBQgBgBABgEQAGgIAEgDQA3gzBJgNIAPgEQADAAABgEQgNgBgQACQguAKgmAaQgoAagbAlQgFAGgDABQgEABgFgEQgdgWgkgEQglgEghAPQgqAUgaAmQhDBZgEBxQAAAOADAOIABAHQgBAFgDACQgEgCgOAAQgNgBgGgDQAAgFgDgBIgGgCQgmAAgeAUIgHAEQgEgBgBgEIgBgHQgDgdASgXQAbgnAwgRIAFgCQAEgBACgDQgLgBgRgEIgbgGQgKgBgCgDQABgBAHgCQAGgCgDgFQgBgDgFABIgKACIgGABQgDgGAIgBQAJgBAFgIQAKgOASgJQAEgCAGAAQAFAAAFACIAAAIQAAAGADAAQAFABABgGQABgIAEgFIAEAGQACAHAIAAQADAAABgDIADgGQASg/AqgzQAxg+BKgdQAYgKAQgCQAXgEAUAHQAMADAIgFQAJgFAEgNIACgFIAGAAQAHAAABgDQABgFgGgEQgWgKgZgCQhEgEg+AeQgIgLgBgNQgBgOAGgMIADAEQADAGAEgBQAEgBAAgIIgCgKQAEAAAEAEIAGAGIANAJQABgiAPgcQALgTATgPQAJgHAGAHIgLAiQgBAGACACQACACAGAAQAEADACAIQADAJADAEQALgXALgRQAvhEBGAEQASAAAUAIQgXASgcAdQgJAKAMAAQACAEgCAGIgDAJQgDANADAMQAAAFAEAAQADAAABgEQAFgOAMgPIAXgaQAVgUAdgGQAdgFAbALQALAGAGAKQgKANgKAHQgFACgCAHQgZAWgPAgQAQgJAbgTQAdgTAcgMQBBgaAwAVQARAIAMAOIARAVQgGAEgLAEIgRAHIgLAFQgGADgCAGQgOAFgPANIgaAXQgKAJgOARIgXAcQgFAHACAEQACACADAAIAFgCQAzgIAwAPQAuARAiAhQANARAHALQACAEgBACIgGAEQgbANgYAWQgLAJgHAKQgDAEABABQABACAFgBQA2gMAuAfQAPALAMAQQAaAfAMAlIALAmQADAIgLABQhDAFg9AiQgWAOgVAQQgEAEABACQABACAFAAQAkgDAgANQAUAHAUAPQAtAkANA6QALA1gRA1QgCAGgCABQgDABgFgEQgYgUgUgMQgYgOgzgZIgbgLQAFAQANALQAUAZALAcQAHASgGASQgFATgQALQgHAFgBAKIAAAQQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_97.setTransform(-49.2,-106.1,1.6,1.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#7C3F12").s().p("AikMWQgBgBAAgEQADgugChJIgHhBQAEgIAJgIIAOgOQAkgrAOg1QAPg1gKg2QgHg2gfguIgWgdQgFgHACgDQACgDAKAEIASAIQAIADADgCQADgCABgIQAAgWgMgTQgVgjgfgZQgYgZgigCQgGAAgEgFQgEgNACgIQACgHAKgIQAUgOgDgZQAAgTgKgTQgHgOgPgUQgJgJgGgJQgDgGABgCQADgEAHADQArAQAoAXQAdARAZATQAEADADAAQACgBACgGQANgngGgqQgEg0gjgmQgcghgogLQgcgJgdAAQgIAAgCgEQgBgFAHgFQA1gtBDgPQAWgGAagDQAIAAgCgJQgKgngOgbQgRghgagXQglgeguADIgVACQgFADgEgFQgBgDADgGQARgWAWgNQAQgMANgHQAFgCgBgEIgEgGQgTgcgcgTQgugeg3gDQgJAAgNABIgVACIgHAAQgDAAgCgDQgCgHAFgFQAlg0AyglIAIgFQAFgDAEACQAIACAJgEIAQgGQBJgYBHgLQAxgIAfgDQAogEAnAPQA7AWAqAsQA9BBgOBLQgFAFgEgIIgDgNQgIhMhFgaQgWgJgWACQgXACgTANQgIAFAAAEQAAADAIAFQAjAUAjAZIAFAEQADACgBAEIgDAAIgegLQgTgGgNgDQhKgShPAKIgPAEQgcAHgegJQgUgJgWAFIgGABQgDABAAAEQAAAEADABIAGAAQA0AHAqAdQAsAfAcAwQAeAvANA5QAOA7gOAoQgBAIABAHQABADACACQAAAAABAAQAAAAABAAQABAAAAAAQABgBAAAAQAGgHAJABIANAEQAvAFAsgNIAFAAQAFALANARQAOASAFAKQAbA1gHA6QgFAzgfApQgHAKALAGQAqASAjAYQAlAYAiAlQAWAhA4BfQAgAyASA4QARA3gZA0QgJgsgUgqQgEgQABgQQAAgngRgkQgRgjgegZQgbgWgggHQADAMAIALIA3BNIAcAmQAFAEABAHQABAGgDAFQgBANAGAPIALAaQAPAlAFAWQAJAhgCAdQgCAcgOAZQgNAZgYARIgIAIQgFAEgEgCQgEgCACgHIACgLIAAgDQACgTgBgUQgBgHAEgFQAagmgGg5QgFg1gUgzQgLgfgZgXQgZgXgggJQgIgCgCACQgDADAFAHQAJAPAPAeQAPAfAJAOQADAFABAKQACALACAEQAPA8AGAiQAJA0AAAsQAAA+gZA5QgFANgKALQgbAegigbQgDgHAHgEQAMgJAHgQIAKgcQAZhHgMhJQgGgygVgtQgPghgbgaIgSgRIgLgYQgDgGgEABQgEACACAGQAPAvAGA0QAGA3gPA5QgXBXg0AuQggAegnAHIgFACQgDABgCgDQgCgCACgDIACgDIACgGQAEgHAIgHIAPgMQAzgvARhFQAQg2gTg4QgIgYgTgTQgSgSgYgJQgEgCgJAAQgIgBgFgDQgNgZgRgZIgEgHQgDgEgEADQgEACACAEIAFAGQAaAvAQA2QALApADApQAIBbghBUQgkBdg+AqQgSANgVAHIgEABIgBAAg");
	this.shape_98.setTransform(45.5,-43.7,1.6,1.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#060405").s().p("ACmTSIgrgHQgYgFgSgIIgTgOQgKgHgKAFQgyATg2gMQgRgDgQgLQgZgTgFgeQgFgRAAgUQgCgLgFgJQgchBAag3QAMgYAYgRQgdADgcgHQgygLgtgeQACAQAGAbIAAAkQgBAbgSAaQgTAagXADQgIACgGAHQgcAdgnAIQgQAFgRgHQgEgDgGABQgFAAgDAEQgMAJgPACQgfAEgfgEQgIAAgIgDQgKgHgRgGIgdgKIgKgGQgRgJgJgSQgJgRABgTIAAgSQABgLAFgHQAEgVAIgTQALgaAbgIQg5hTgLhiQgOh9BGhVQAJgLAJgHQAEgDAAgDQABgDgFgGQgTgZgGghQgCgJgDgDIgIgBQg0gDgugbQgOgJgOgNQgTgTgJgZIgEgHIgBgBQgJgDgJgGQgXgSgNgZIgEgJQgVgzAGg6IAAAAQgMgWgKgZQgTgwAAgqIAEhJQAFggASgkIAagtQAAgEgCgDQgEgEgDgJIgNgsQgZgOgIgsIgEgtQACgOAAgSQAFgjAPghIADgEQABgDgDgDQgYgcABg2QABg9AugsIAEgDQABgCgCgEQgTgcAFggQAGghAcgUQAKgIALgEIAYgGQgRgYABgeQAEhABCghQAVgIAUgDQAGgBACgCQACgDAAgGQABgtAhgaQAggZAsAIQAFABABgCIACgFQAGgdARgYQASgYAagPQAegRAgANQAHAEAEgGQAZgaAlgNQAcgLArgFQAfgFAeAJQAMADAHAFQAIAFAHAHIAEACQAEACAGgEQAzgdA5gEQAqgDAjAXIAKAIIACACQADACAEgBIAIgCQBDgQA/AdQAOAGAMAJQAkAZALAuQACAKgBALQAAAFACABIADAAQBMgIBTA3IAUANIABAAIACADIACACQA1AvANA3QAPA3gaA0QgDAGADAGQASAdABAiQAAAEACABIACABQASAHAQALQAbAUAVAUQBPBDAdBMQAQAoABAqQABArgOAoQgEANgJAIQgGAFAAAFQAAADADAHQAiBCAOBIQAMBLgnAuQgKAOgPAGQgFACgBADQAAADACAEQAhA3gCBAQgCAvgWAXQgDAEAAALQACAggLAeQgMAfgWAXQgQARgYAFIgEABQgEACgBADIgCAFQAAAGgDAIQgMAcgBAnQgBAXACAuQAABEASBDQAAADACAEQAYAhAgAXQAUAOAZAEQAjAGAdgTQAdgUAIgjIACgNQACgKgCgKQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIgHgBIgHgBQgMgEgLgIQgJgHgGgNQgBgDgDgCQgDgBgDAAQgQABgOgJQgLgIgFgMQgFgMACgNQADgNgKgKQgLgLAGgYQAEgRALgNQAKgNAQgHQAIgDACgHQADgIAGgIQAPgVAZgEQAZgEAUAPIAKAHQAHAHAJAGQAJAFALACQAHABAGAEQAOAKAGARQAGAQgEARQgEANAHAKQALARgIAYQgIAYgVAMQgJAFgBAEQgBAEADAJQAfBNgjBHQgiBFhMAZIgJABQgGAAgBAEQgBAEAGAMQALAoACAfQACAmgJAiQgGAYgTAUQgBAHgMAHQgsAagxgQQgKgDgLACQgpANgqgQQgGgCgCADQgCABAAAHQgCAjgCASQgEAdgJAXQgdBMhQAFQgnAFglgNQgGgCgGADQgiAPgxAAQgQAAgSgBg");
	this.shape_99.setTransform(0,0,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.1,-197.6,288.4,395.2);


(lib.Interpoler2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFCFC").s().p("AgbAMQgGgHAIgJQAGgJALgDQAHgCAMAAIATACQgTAbgVAGIgGACQgHAAgEgHg");
	this.shape.setTransform(-4.4,-18.3,1.6,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C96A26").s().p("AF0GeQg8gIg8gRQgZgHhageQhRgag5gZQhKggg5gmQgtgfgegdQAyAQAtgIQBCgNASgwQAUg1gpgyQg2hFhWADQgvABgdAlQgdAkAKAvIAPArQgagRgYgmQgLgTgKghQgMgpgFgKQgFgNgRgJQgCgBgCgEIANgHQAHgDADgFIADgFQAAAAABgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBABAAAAIgFACQgOAJgHACIAIgQQACgGgDgDQgEgEgFAFIgPAPQgdAdgdAAQgTAAgQgLQgHgFgBgDQgDgGAFgGQADgFgCgDIgMgfQgIgQgNgKQAIgcAbALQAJADAFAGQAaAXAfADQAcADAigMIAfgMQAFgDADACQACABABAFQAGASATAVQAIAIAFADIAFADQAEABACgDQADgEgHgGQgGgIgEgDQgJgJgGgJQgJgNABgCQABgDAPgBQAUgCALgMQAHgFgDgDQgCgEgIADIgRAHQgOAEgGAAIAUgQQAIgHAFgLIACgGQABgDgDgCQgDgDgHAHQghAfgmAQQgxAUgZgtQgGgMALACQALABAEgGQACgDADgLQALgugVgxQADgDAKAAQBkADAzBbQAJAQAMARQASAWAcAAQAGgBAHgEQAIgGADgBIAGACQADABACgCQACgDgBgDIgEgFIgMgUQgGgLgCgLIAMACQAHACAEAAIAHgBQAFgBAAgEQABgFgEgBIgIAAQgNAAgJgJIAYgHQAIgCgBgHQgBgHgKACQgoAIgUgBQgtgCgRgyQgCgIAIACQAQADALgCQARgFADgPQAKgqgIghQAJgGANAAIAXACQBdANAvBUQAMATAAAWQADAggfAWIgYANQgjAUgLAlIgEAPQgDAJAAAGQgCAnAVAeQARAYAkAWQAKAEADgFQABgDgCgDIgEgFQgZgVgLgLQgdgcABgfQAAgfAegbIAUgOQAKgCAIAFIARAKQAIAFABAEIgQAAQgUgCgOAHQgJAEgFAHQgLAPAIANQAKANARgEQARgEATgUIAIgKQAEgHAFgCQAGACAGAIIAIAOQA2Bmg4BlQgHALgPAUQgIALAAAJQAAAKAKALQArAzA2AhQAcATAcAKIAuASIAbAFQAVAEAIABIAJACIAOACIAKABIBPgBIAjgDQAFAAAGgDQAIgFAHgKIALgYQAFgIAGgSQAGgOACgNIABgQIgCgXIgEgPQgIgegRgaQgEgEAAgFIAjAQQAUAJAOAFIAYAHIAaAFIgCBuIgCCsIAAAmQhPgChSgMg");
	this.shape_1.setTransform(3.5,5.2,1.6,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F0A0A").s().p("AgfAlQgKgEgEgJQgFgJAEgKQADgKAJgHQAPgLAeACIAKABQAGADADgDIAGgJIAEgGQADgDADACQAEACgBAEIgDAHQgDAIgEAFIgQAUQgKAMgIAFIgOAIQgHADgGAAIgJgBg");
	this.shape_2.setTransform(-3.4,-19.3,1.6,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B46A32").s().p("AAFAIIgFgCQgIgCgDACIABgIQAAgIAHAFIAPALQgDACgCAAIgCAAg");
	this.shape_3.setTransform(52.3,5,1.6,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B66F38").s().p("AgJAAQABAAABAAQAAAAABAAQABAAAAAAQABAAAAAAIACgFQAFgIAHgCIgRAfQgEgNACgDg");
	this.shape_4.setTransform(-70.9,-41.9,1.6,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("AgbAfIgBgFQAGgcAFgLQAEgIADgDQAGgHAFAAQAHAAAFAIIANAVQAHALgMAIQgNAIgeAGIgDABIgCgBg");
	this.shape_5.setTransform(-83.9,-13,1.6,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDFDFC").s().p("AgNAoQgHgEAAgMQAAgjAfgcQAEgDABABIACAFQADAKAAATQAAATgDAKQgDANgLAEQgFADgFAAQgEAAgDgCg");
	this.shape_6.setTransform(-36.4,-55.5,1.6,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("AgRAsQgNgCAEgNIAIgdQAFgRAHgLIAJgMQAGgFAFACQAFABACAHQAIATgCAUQgCAcgHAHQgGAFgRAAIgMAAg");
	this.shape_7.setTransform(-67.6,-36.7,1.6,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F28C3F").s().p("AgeAtQgQgNgKABQgJACgMAQQgLAAgBgNQgDgiAQgcQAQgcAigUIAEAWQADANgFAJQgDAKAAAIQAAAQARAAIANgBQAGAAADAGQAJAbARAMQARALAcgBIAIAAQgHAHgMADIgUACIgOABQglAAgfgcg");
	this.shape_8.setTransform(-70.3,-28.7,1.6,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C96A26").s().p("Ag3ApQgZgNgOgcQAEAAAAgDQACgbgRgbQgSgdAVgRQADAEAAAIIACAPIABAEQABABAAAAQAAABABAAQAAAAABAAQAAABABAAQAEgBAAgFIACgXIAlAnQBFBHBPA6QANAJACAGQACAGgGANQhXgYhOgng");
	this.shape_9.setTransform(28.6,-12.3,1.6,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F28C3F").s().p("AB6B0QgYgDgNgRQgHgKgMgVQgLgVgIgJQgog1hCgMQgNgCgaAAQgKgRgKgFIgFgDQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQgCADADAGIAMARQgKABgLAJIgNANIgEADQgCACgCgEQgCgOAFgmQAGgpArgMQAUgGAZACQAPABAeAGQAUAEAEAFQAEAEACAWQADAiAOAcQAZAxA/gDQAGAAACABQADACAAAGQADAfAUAbQgHAPgTAAIgIgBg");
	this.shape_10.setTransform(-47.6,-41,1.6,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F28C3F").s().p("AAKB0QAPgTAagNQBDgfgmhGQgkhGhSgUQgfgHgfAGQgHgUgLgIQgFgFgDADQgFACAGAGQAGAGAAAEQgBAEgIAGQgfAUgDAwQgNg9AagpQAVggApAAQBbgCBNBBQBEA6ASBpQAEAbgMAYQgEAIgGgFQgSgUgdABQgWAAgXAMQgnAVgUAoIgGAUQgCgkAUgag");
	this.shape_11.setTransform(-15.7,-44.8,1.6,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F28C3F").s().p("ADOGPIhwAAIh9gaQgNgDgbgJQgggMgGgEQiGhQg+hEIgYgYQgqgkAngwQArgyAQgxQAfhQgShcQgBgIgOgiQgPgngPgeQgCgFgJgIQgIgHgGgCQAGgHAFgJIAGgKQADgGgDgFQgEAAgEAFIgGAIQgGAGgEACQgGABgGgGQgUgUgegHIgKgCQgGgBgDgEQATgNATgHQAngPAfAMQAfAMATAlQAPAbAQA6QAJAaADAEIAGADQAWAiAoAWQASALA6AXQBiAqBJAUQANAEADAGQABACgEAIQgDAHAIACQAGADAEgFIAGgLIAIgbIACAnQAAAIAIAAQAGAAAAgMQAEgIAPAEIATAEICiBkQAoAsASBWQALAzgLArIgLAjQgDALgKASQgKAagMAHIgKAJIgMAHQgvAKgOAAIgyAAIgNACIgQAAg");
	this.shape_12.setTransform(35.2,10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C33024").s().p("AANBkQgUACgYgIQgQgFgYgMQgOgHgJgQQgGgKgHgUQgUg1AeglQARgVAhgKQAsgNAxAeQAwAdAPApQALAcgGAYQgGAbgaAPQgaAQgcABg");
	this.shape_13.setTransform(-22,15.7,1.6,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#060505").s().p("AFCHEQiogmiihIQh2g0hQhSQgQgOgPgKQhXg9gchyQgDgJgIgNIgPgVQgEgGgJAHQgYAPgTACQgpAFgVgeQgDgDgCgBQgCgBgEABIgpALQgIACgFgEQgFgEABgJQADgiASggQAEgHgBgEQgLgjATgmQASgmAlgVQAHgDADgIQADgIgDgIQgGgPAHgTQAKgmAegSQAegTArAFQAlAEAcAKQAFACACgBQACgCABgGQADgaAQgcQAZgoAyAAQB7AABWBlQA8BIAABVQAAAIAEAEQASARAxAyQAqAqAbAXQCPB5B4A0QAnASApAIIgFFdIggACIgOABQhaAAhogZg");
	this.shape_14.setTransform(0,0,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.6,-76.2,181.3,152.5);


(lib.Interpoler1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFCFC").s().p("AgbAMQgGgHAIgJQAGgJALgDQAHgCAMAAIATACQgTAbgVAGIgGACQgHAAgEgHg");
	this.shape.setTransform(-4.4,-18.3,1.6,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C96A26").s().p("AF0GeQg8gIg8gRQgZgHhageQhRgag5gZQhKggg5gmQgtgfgegdQAyAQAtgIQBCgNASgwQAUg1gpgyQg2hFhWADQgvABgdAlQgdAkAKAvIAPArQgagRgYgmQgLgTgKghQgMgpgFgKQgFgNgRgJQgCgBgCgEIANgHQAHgDADgFIADgFQAAAAABgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBABAAAAIgFACQgOAJgHACIAIgQQACgGgDgDQgEgEgFAFIgPAPQgdAdgdAAQgTAAgQgLQgHgFgBgDQgDgGAFgGQADgFgCgDIgMgfQgIgQgNgKQAIgcAbALQAJADAFAGQAaAXAfADQAcADAigMIAfgMQAFgDADACQACABABAFQAGASATAVQAIAIAFADIAFADQAEABACgDQADgEgHgGQgGgIgEgDQgJgJgGgJQgJgNABgCQABgDAPgBQAUgCALgMQAHgFgDgDQgCgEgIADIgRAHQgOAEgGAAIAUgQQAIgHAFgLIACgGQABgDgDgCQgDgDgHAHQghAfgmAQQgxAUgZgtQgGgMALACQALABAEgGQACgDADgLQALgugVgxQADgDAKAAQBkADAzBbQAJAQAMARQASAWAcAAQAGgBAHgEQAIgGADgBIAGACQADABACgCQACgDgBgDIgEgFIgMgUQgGgLgCgLIAMACQAHACAEAAIAHgBQAFgBAAgEQABgFgEgBIgIAAQgNAAgJgJIAYgHQAIgCgBgHQgBgHgKACQgoAIgUgBQgtgCgRgyQgCgIAIACQAQADALgCQARgFADgPQAKgqgIghQAJgGANAAIAXACQBdANAvBUQAMATAAAWQADAggfAWIgYANQgjAUgLAlIgEAPQgDAJAAAGQgCAnAVAeQARAYAkAWQAKAEADgFQABgDgCgDIgEgFQgZgVgLgLQgdgcABgfQAAgfAegbIAUgOQAKgCAIAFIARAKQAIAFABAEIgQAAQgUgCgOAHQgJAEgFAHQgLAPAIANQAKANARgEQARgEATgUIAIgKQAEgHAFgCQAGACAGAIIAIAOQA2Bmg4BlQgHALgPAUQgIALAAAJQAAAKAKALQArAzA2AhQAcATAcAKIAuASIAbAFQAVAEAIABIAJACIAOACIAKABIBPgBIAjgDQAFAAAGgDQAIgFAHgKIALgYQAFgIAGgSQAGgOACgNIABgQIgCgXIgEgPQgIgegRgaQgEgEAAgFIAjAQQAUAJAOAFIAYAHIAaAFIgCBuIgCCsIAAAmQhPgChSgMg");
	this.shape_1.setTransform(3.5,5.2,1.6,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F0A0A").s().p("AgfAlQgKgEgEgJQgFgJAEgKQADgKAJgHQAPgLAeACIAKABQAGADADgDIAGgJIAEgGQADgDADACQAEACgBAEIgDAHQgDAIgEAFIgQAUQgKAMgIAFIgOAIQgHADgGAAIgJgBg");
	this.shape_2.setTransform(-3.4,-19.3,1.6,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B46A32").s().p("AAFAIIgFgCQgIgCgDACIABgIQAAgIAHAFIAPALQgDACgCAAIgCAAg");
	this.shape_3.setTransform(52.3,5,1.6,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B66F38").s().p("AgJAAQABAAABAAQAAAAABAAQABAAAAAAQABAAAAAAIACgFQAFgIAHgCIgRAfQgEgNACgDg");
	this.shape_4.setTransform(-70.9,-41.9,1.6,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("AgbAfIgBgFQAGgcAFgLQAEgIADgDQAGgHAFAAQAHAAAFAIIANAVQAHALgMAIQgNAIgeAGIgDABIgCgBg");
	this.shape_5.setTransform(-83.9,-13,1.6,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDFDFC").s().p("AgNAoQgHgEAAgMQAAgjAfgcQAEgDABABIACAFQADAKAAATQAAATgDAKQgDANgLAEQgFADgFAAQgEAAgDgCg");
	this.shape_6.setTransform(-36.4,-55.5,1.6,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("AgRAsQgNgCAEgNIAIgdQAFgRAHgLIAJgMQAGgFAFACQAFABACAHQAIATgCAUQgCAcgHAHQgGAFgRAAIgMAAg");
	this.shape_7.setTransform(-67.6,-36.7,1.6,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F28C3F").s().p("AgeAtQgQgNgKABQgJACgMAQQgLAAgBgNQgDgiAQgcQAQgcAigUIAEAWQADANgFAJQgDAKAAAIQAAAQARAAIANgBQAGAAADAGQAJAbARAMQARALAcgBIAIAAQgHAHgMADIgUACIgOABQglAAgfgcg");
	this.shape_8.setTransform(-70.3,-28.7,1.6,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C96A26").s().p("Ag3ApQgZgNgOgcQAEAAAAgDQACgbgRgbQgSgdAVgRQADAEAAAIIACAPIABAEQABABAAAAQAAABABAAQAAAAABAAQAAABABAAQAEgBAAgFIACgXIAlAnQBFBHBPA6QANAJACAGQACAGgGANQhXgYhOgng");
	this.shape_9.setTransform(28.6,-12.3,1.6,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F28C3F").s().p("AB6B0QgYgDgNgRQgHgKgMgVQgLgVgIgJQgog1hCgMQgNgCgaAAQgKgRgKgFIgFgDQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQgCADADAGIAMARQgKABgLAJIgNANIgEADQgCACgCgEQgCgOAFgmQAGgpArgMQAUgGAZACQAPABAeAGQAUAEAEAFQAEAEACAWQADAiAOAcQAZAxA/gDQAGAAACABQADACAAAGQADAfAUAbQgHAPgTAAIgIgBg");
	this.shape_10.setTransform(-47.6,-41,1.6,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F28C3F").s().p("AAKB0QAPgTAagNQBDgfgmhGQgkhGhSgUQgfgHgfAGQgHgUgLgIQgFgFgDADQgFACAGAGQAGAGAAAEQgBAEgIAGQgfAUgDAwQgNg9AagpQAVggApAAQBbgCBNBBQBEA6ASBpQAEAbgMAYQgEAIgGgFQgSgUgdABQgWAAgXAMQgnAVgUAoIgGAUQgCgkAUgag");
	this.shape_11.setTransform(-15.7,-44.8,1.6,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F28C3F").s().p("ADOGPIhwAAIh9gaQgNgDgbgJQgggMgGgEQiGhQg+hEIgYgYQgqgkAngwQArgyAQgxQAfhQgShcQgBgIgOgiQgPgngPgeQgCgFgJgIQgIgHgGgCQAGgHAFgJIAGgKQADgGgDgFQgEAAgEAFIgGAIQgGAGgEACQgGABgGgGQgUgUgegHIgKgCQgGgBgDgEQATgNATgHQAngPAfAMQAfAMATAlQAPAbAQA6QAJAaADAEIAGADQAWAiAoAWQASALA6AXQBiAqBJAUQANAEADAGQABACgEAIQgDAHAIACQAGADAEgFIAGgLIAIgbIACAnQAAAIAIAAQAGAAAAgMQAEgIAPAEIATAEICiBkQAoAsASBWQALAzgLArIgLAjQgDALgKASQgKAagMAHIgKAJIgMAHQgvAKgOAAIgyAAIgNACIgQAAg");
	this.shape_12.setTransform(35.2,10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C33024").s().p("AANBkQgUACgYgIQgQgFgYgMQgOgHgJgQQgGgKgHgUQgUg1AeglQARgVAhgKQAsgNAxAeQAwAdAPApQALAcgGAYQgGAbgaAPQgaAQgcABg");
	this.shape_13.setTransform(-22,15.7,1.6,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#060505").s().p("AFCHEQiogmiihIQh2g0hQhSQgQgOgPgKQhXg9gchyQgDgJgIgNIgPgVQgEgGgJAHQgYAPgTACQgpAFgVgeQgDgDgCgBQgCgBgEABIgpALQgIACgFgEQgFgEABgJQADgiASggQAEgHgBgEQgLgjATgmQASgmAlgVQAHgDADgIQADgIgDgIQgGgPAHgTQAKgmAegSQAegTArAFQAlAEAcAKQAFACACgBQACgCABgGQADgaAQgcQAZgoAyAAQB7AABWBlQA8BIAABVQAAAIAEAEQASARAxAyQAqAqAbAXQCPB5B4A0QAnASApAIIgFFdIggACIgOABQhaAAhogZg");
	this.shape_14.setTransform(0,0,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.6,-76.2,181.3,152.5);


(lib.btnhover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Interpoler26("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(100,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,50);


(lib.Symbole4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.text = new cjs.Text("Retour à l'accueil", "15px 'Franklin Gothic Heavy'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 193;
	this.text.parent = this;
	this.text.setTransform(127.5,15.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC6C0F").s().p("AunD6QhAAAAAguIAAmWQAAgvBAAAIdQAAQA/AAAAAvIAAGWQAAAug/AAg");
	this.shape.setTransform(128,25);

	this.instance = new lib.btnhover();
	this.instance.parent = this;
	this.instance.setTransform(128,25,1,1,0,0,0,100,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28,0,200,56.5);


// stage content:
(lib._500 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.gotoAndPlay(29);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// erreur 404
	this.instance = new lib.Symbole2();
	this.instance.parent = this;
	this.instance.setTransform(281.5,213.4,1,1,0,0,0,167,34.4);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({x:287.5,y:204.9,alpha:0.25},0).wait(3).to({alpha:0.5},0).wait(3).to({alpha:0.75},0).wait(3).to({alpha:1},0).wait(88));

	// cette page n'existe pas
	this.instance_1 = new lib.Symbole3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(288.6,260.8,1,1,0,0,0,176.5,39.3);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(3).to({alpha:0.25},0).wait(3).to({alpha:0.5},0).wait(3).to({alpha:0.75},0).wait(3).to({alpha:1},0).wait(87));

	// bouton
	this.instance_2 = new lib.Symbole4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(280.8,309,1,1.02,0,0,0,100,25.1);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).wait(3).to({regY:25,alpha:0.25},0).wait(3).to({alpha:0.5},0).wait(3).to({alpha:0.75},0).wait(3).to({alpha:1},0).wait(73));

	// oeuil-droit.svg
	this.instance_3 = new lib.Interpoler9("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(792,254.9,1.118,1.118,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:734.5,alpha:1},19).to({regX:0.2,x:734.8},10).to({regY:0.2,x:734.5},10).to({regX:0.3,scaleX:1.12,scaleY:1.12,x:735,y:255},10).to({x:734.6,y:254.9},10).to({x:734.9,y:255},10).to({x:734.6,y:254.9},10).to({scaleX:1.12,scaleY:1.12,x:734.9,y:255},10).to({regX:0.1,regY:0.1,x:734.4,y:254.8},10).wait(1));

	// oeuil-gauche.svg
	this.instance_4 = new lib.Interpoler7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(740.3,251.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:682.8,alpha:1},19).to({x:682.6,y:251},10).to({x:682.9,y:251.1},10).to({x:682.6,y:251},10).to({x:682.9,y:251.1},10).to({x:682.6,y:251},10).to({x:682.9,y:251.1},10).to({x:682.6,y:251},10).to({x:682.9,y:251.1},10).wait(1));

	// larme-gauche.svg
	this.instance_5 = new lib.Interpoler17("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(667.6,290.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({alpha:1},10).to({x:668.1},5).to({x:667.6},5).to({x:668.1},5).to({x:667.5,alpha:0},5).to({x:667.6},10).to({alpha:1},10).to({x:668.1},5).to({x:667.5},5).to({x:668},5).to({x:667.4},5).to({x:668},5).to({x:667.6},5).wait(1));

	// larme-droite.svg
	this.instance_6 = new lib.Interpoler16("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(732.3,295.7,1.09,1.091,4.6,0,0,0.1,0.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({rotation:4.5,x:732.4,alpha:1},10).to({regY:0.4,scaleX:1.09,scaleY:1.09,x:733.3,y:295.8},5).to({scaleX:1.09,x:732.3},5).to({scaleX:1.09,x:733.1},5).to({x:732.3,alpha:0},5).to({regY:0.3,scaleX:1.09,scaleY:1.09,rotation:4.6,y:295.7},10).to({regY:0.5,scaleX:1.09,scaleY:1.09,rotation:4.5,x:732.4,y:295.8,alpha:1},10).to({x:733,y:295.9},5).to({regX:0.2,x:732,y:295.8},5).to({x:733},5).to({x:732},5).to({regX:0.3,regY:0.6,x:733,y:296},5).to({regX:0.1,regY:0.3,scaleX:1.09,scaleY:1.09,rotation:4.6,x:732.3,y:295.7},5).wait(1));

	// corps.svg
	this.instance_7 = new lib.Interpoler3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(834.8,346.6);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:777.3,alpha:1},19).to({startPosition:0},70).to({startPosition:0},10).wait(1));

	// patte.svg
	this.instance_8 = new lib.Interpoler1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(604.1,313.6,1,1,-4.5);
	this.instance_8.alpha = 0;

	this.instance_9 = new lib.Interpoler2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(552.2,303.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_8}]},19).to({state:[{t:this.instance_8}]},30).to({state:[{t:this.instance_9}]},50).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:0.1,regY:0.1,rotation:-2.3,x:549.5,y:309.4,alpha:1},19).to({rotation:6.5,x:561.4,y:289.8},30).to({_off:true,regX:0,regY:0,rotation:0,x:552.2,y:303.2},50).wait(1));

	// ombre.svg
	this.instance_10 = new lib.Interpoler5("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(838.6,525.6);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:781.1,alpha:1},19).wait(80).to({startPosition:0},0).wait(1));

	// Calque 6
	this.instance_11 = new lib.Interpoler24("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(498.5,393.4);

	this.instance_12 = new lib.Interpoler25("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(500.5,393.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_11}]},91).to({state:[{t:this.instance_12}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:500.4},91).to({_off:true,x:500.5},8).wait(1));

	// fond1.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC02").s().p("AgHATQgrgLgFgOQgFgNAXgHQgQAUA1ANQAuANAGgSQALAQgNAGQgGADgJAAQgQAAgagIg");
	this.shape.setTransform(199.5,662.4,1.227,1.227);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF100").s().p("AgHAWQg9gQAPgUQAOgVAsALQAuAKAGAbQADAQgYAAQgQAAgbgHg");
	this.shape_1.setTransform(199.5,662.3,1.227,1.227);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAsQgWgJAUgoIAYgnIAPAEIgGAvQgJAmgPAAIgHgBg");
	this.shape_2.setTransform(197.4,669.4,1.227,1.227);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKAIIgigrIANgFIAtAgQAqAjgPAMQgDACgFAAQgPAAgcghg");
	this.shape_3.setTransform(207.6,669.2,1.227,1.227);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAUQgKgZgCgmIARAAIAXAnQAUAogSAHQgEABgDAAQgNAAgKgYg");
	this.shape_4.setTransform(203.2,670.2,1.227,1.227);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAMIg1gdIAGgKIA3APQA2ASgEAQQgCAGgJAAQgPAAgggQg");
	this.shape_5.setTransform(210.5,666.7,1.227,1.227);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AABALIgxgLIAAgNIAwAAQAxADAAAOQABAKgUAAQgLAAgSgDg");
	this.shape_6.setTransform(210.4,663.7,1.227,1.227);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsAKIApgSQAqgQAGAOQAFANgnAJIgnAGg");
	this.shape_7.setTransform(207.7,660.3,1.227,1.227);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiAVQAPgSATgOQAagXAIALQAGAJgSANQgMAIgPAGIgTAPg");
	this.shape_8.setTransform(205.3,658.3,1.227,1.227);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6ANQgHgRA6gKQAcgFAegBIAJALQgbAMgcAJQgcAJgQAAQgQAAgDgIg");
	this.shape_9.setTransform(189.3,664.3,1.227,1.227);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpAcQgLgPApgZIAqgWIAOAIQgTAegaATQgQAMgLAAQgJAAgFgHg");
	this.shape_10.setTransform(192.9,667.3,1.227,1.227);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgBAPQg/gFAEgQQAEgRA6ANQAeAGAdAIIAAAMIgVABIgpgCg");
	this.shape_11.setTransform(187.9,660.3,1.227,1.227);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAKQg2gSAIgNQAIgNAyAYQAaAMAYAPIgIAKQgcgHgagKg");
	this.shape_12.setTransform(190.3,658.2,1.227,1.227);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AARAeQgRgLgOgNQgegZANgJQAMgKAcAjQAPAQAMATg");
	this.shape_13.setTransform(193.3,656.3,1.227,1.227);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAfQABgRAEgQQAJgiAMACQANACgKAhQgFASgIAQg");
	this.shape_14.setTransform(200.9,656.4,1.227,1.227);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgCAQQgKgOgGgMQgIgUAKgEQAMgFANAgQALAYACASIgOABIgKgUg");
	this.shape_15.setTransform(196.6,655.8,1.227,1.227);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFBD7").s().p("AgUAVQAHgNAJgLQAPgXAHADQALAGgkApg");
	this.shape_16.setTransform(203.5,656.3,1.227,1.227);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE9CE").s().p("AgEAaQgQgSgHgsIAOAAIAZAgQAYAfgMAGQgFAEgGAAQgJAAgIgLg");
	this.shape_17.setTransform(205.4,670.4,1.227,1.227);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE9CE").s().p("AgDAHIgngeIAPgDIAlARQAmASgGANQgCAFgFAAQgLAAgbgUg");
	this.shape_18.setTransform(209.8,669.2,1.227,1.227);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE9CE").s().p("AABAJIgsgNIgBgJIAsAFQAsAGABAHQABAJgPAAQgKAAgUgFg");
	this.shape_19.setTransform(212.3,665.6,1.227,1.227);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE9CE").s().p("AgjAEIAhgJQAhgIAEAJQAGALgjACIgkABg");
	this.shape_20.setTransform(210.3,661.5,1.227,1.227);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFE9CE").s().p("AgaAJQAMgJAMgHQAYgOAFAHQAGAMg1AUg");
	this.shape_21.setTransform(206.9,659.1,1.227,1.227);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE9CE").s().p("AgRAYQAFgOAGgNQANgaAIAFQAIAEgPAXQgHAMgJALg");
	this.shape_22.setTransform(203.5,656.6,1.227,1.227);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE9CE").s().p("AgnAQQgGgLAkgQQASgIATgGIAMAHQgcAjgWAIQgFABgFAAQgMAAgHgKg");
	this.shape_23.setTransform(190.5,666.4,1.227,1.227);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE9CE").s().p("AgvAAQACgNApADQAUABAVAEIALAJQgZAFgXACIgSABQgfAAACgMg");
	this.shape_24.setTransform(187.2,662.4,1.227,1.227);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE9CE").s().p("AgGAGQgqgLAKgJQAGgGAlAPIAkAPIgFAHQgXgFgTgGg");
	this.shape_25.setTransform(187.3,658.7,1.227,1.227);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE9CE").s().p("AgIAEQgcgSAKgHQAHgDAYAWQANAKALAMIgHACQgQgIgOgKg");
	this.shape_26.setTransform(190.3,656.2,1.227,1.227);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFE9CE").s().p("AgHADQgRgZAHgEQAHgFAQAbQAIANAGAOIgKAFQgKgMgHgNg");
	this.shape_27.setTransform(194.5,655.4,1.227,1.227);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE9CE").s().p("AgCAbQgEgPgCgNQgDgcANABQAJAAgCAdQgBAOgDAPg");
	this.shape_28.setTransform(198.6,655.3,1.227,1.227);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFE9CE").s().p("AgQAAIAJgpIAPAFIAJAmQAFAngWAAQgVAAAFgpg");
	this.shape_29.setTransform(200.1,670.5,1.227,1.227);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFE9CE").s().p("AgaAhQgQgJAbgeIAcgdIAUAFQgPAlgLAOQgKAPgMAAQgFAAgGgDg");
	this.shape_30.setTransform(194.6,669,1.227,1.227);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC02").s().p("AgiAFQgFgHAMgIQgDAGAFADQAGAEATgBQAfgBAAgLQAJAHgGAFQgIAIgaABIgIAAQgUAAgGgGg");
	this.shape_31.setTransform(377.8,682.4,1.227,1.227);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFF100").s().p("AgjACQAFgOAdgCQAcgCAIAPQAJAOgsACIgJAAQgeAAAEgNg");
	this.shape_32.setTransform(377.8,681.9,1.227,1.227);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAAAdQgOgBAEgcIAIgbIAIgBIAFAcQADAdgOAAIAAAAg");
	this.shape_33.setTransform(377.8,686.4,1.227,1.227);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAIIgcgTIAHgHIAgALQAgAMgHALQgDADgFAAQgKAAgSgLg");
	this.shape_34.setTransform(383.6,684.5,1.227,1.227);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgDAOQgKgNgJgVIAKgEIAVATQAUATgKAIQgDADgDAAQgIAAgIgLg");
	this.shape_35.setTransform(381.2,685.9,1.227,1.227);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAAAIIgkgIIACgHIAjgBQAkABAAAJQAAAHgQAAIgVgBg");
	this.shape_36.setTransform(385,682.6,1.227,1.227);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgeACIAdgIQAdgHADAIQADAIgeAFIgfACg");
	this.shape_37.setTransform(384.3,680.5,1.227,1.227);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgYAPQAKgKALgIQAVgSAGAIQAGAHgVAMQgKAGgMAFg");
	this.shape_38.setTransform(382.2,679.1,1.227,1.227);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgQAUQAEgNAJgNQALgSAHAFQAJAHgYAWIgIAMg");
	this.shape_39.setTransform(380.3,678.3,1.227,1.227);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgfATQgIgIAggQIAhgQIAIAFIgdAXQgUAPgKAAQgEAAgCgDg");
	this.shape_40.setTransform(372.2,684.9,1.227,1.227);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgSAYQgJgGAUgWIAUgWIAJACQgFAWgLAPQgJAOgIAAQgEAAgDgDg");
	this.shape_41.setTransform(374.5,686.1,1.227,1.227);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgmAGQAAgKAlgEQASgCATAAIADAHQgTAGgTAEQgRAEgKAAQgLAAgBgFg");
	this.shape_42.setTransform(370.5,683.3,1.227,1.227);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgCAIQgjgBACgIQACgKAjAFQARADARADIgDAIIgWABIgNgBg");
	this.shape_43.setTransform(371.5,681.2,1.227,1.227);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgIAGQgWgJAGgIQAFgIAXAPQAMAGALAJIgMADQgMgDgLgFg");
	this.shape_44.setTransform(372.9,679.5,1.227,1.227);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgEAWIgDgVQgBgUAIgCQAHgBABAWQAAALgBALg");
	this.shape_45.setTransform(377.5,678,1.227,1.227);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AABAKQgagSAJgIQAGgFANAQQALALAFALIgIACg");
	this.shape_46.setTransform(374.8,678.7,1.227,1.227);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFBD7").s().p("AgIARIAFgRQAFgQAEABQAIACgOAeg");
	this.shape_47.setTransform(378.9,677.5,1.227,1.227);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFE9CE").s().p("AADAQQgMgHgNgZIAIgCIAVANQAUAOgGAGQgEAEgFAAQgEAAgFgDg");
	this.shape_48.setTransform(382.6,685.6,1.227,1.227);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFE9CE").s().p("AAAAGIgdgKIAIgFIAZACQAaAFgBAIQAAAEgHAAQgIAAgOgEg");
	this.shape_49.setTransform(385.1,684,1.227,1.227);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFE9CE").s().p("AgZAHIgDgFIAbgFQAbgGADAGQAEAIgdACg");
	this.shape_50.setTransform(385.8,681.3,1.227,1.227);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFE9CE").s().p("AgUAJIASgLQARgLAEAEQAJAJgsALg");
	this.shape_51.setTransform(384,679.4,1.227,1.227);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFE9CE").s().p("AgNAKIALgNQALgOAEAEQAGAGgbAWg");
	this.shape_52.setTransform(381.3,678.7,1.227,1.227);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFE9CE").s().p("AgGASIABgSQADgRAFABQAKACgNAgg");
	this.shape_53.setTransform(379,677.7,1.227,1.227);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFE9CE").s().p("AgTARQgGgFASgQIATgQIAJADQgJAZgMAJQgFAEgFAAQgFAAgEgEg");
	this.shape_54.setTransform(373.1,686,1.227,1.227);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFE9CE").s().p("AgcAIQgCgIAagGQALgDANgBIAJADIgcAMQgPAGgHAAQgGAAgBgDg");
	this.shape_55.setTransform(370.4,684.5,1.227,1.227);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFE9CE").s().p("AgZgBQADgEAYABIAYADIgBADQgWADgLAAQgUAAADgGg");
	this.shape_56.setTransform(369.7,682.1,1.227,1.227);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFE9CE").s().p("AgTgHQADgDATAIIASAIIgDADQgsgIAHgIg");
	this.shape_57.setTransform(371.1,680,1.227,1.227);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFE9CE").s().p("AgDADQgPgLADgEQAEgFAOANIANANIgFAFIgOgLg");
	this.shape_58.setTransform(373.4,678.9,1.227,1.227);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFE9CE").s().p("AAEARIgIgQQgHgPAIgCQAFgBAEARIADARg");
	this.shape_59.setTransform(375.7,677.8,1.227,1.227);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFE9CE").s().p("AgKACIgDgZIAKAAIAMAVQALAVgOAFIgDAAQgJAAgEgWg");
	this.shape_60.setTransform(379.7,686.8,1.227,1.227);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFE9CE").s().p("AgIAYQgLgCAJgXIALgXIAOAAQgDAxgRAAIgDgBg");
	this.shape_61.setTransform(376,687,1.227,1.227);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFCC02").s().p("AgiAEQgFgGAMgIQgDAFAFAEQAGAEATgBQAfgBAAgLQAJAHgGAFQgIAHgaACIgIAAQgVAAgFgHg");
	this.shape_62.setTransform(13.7,691.5,1.227,1.227);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFF100").s().p("AgjADQAFgOAdgDQAcgCAIAPQAIAOgsACIgIAAQgeAAAEgMg");
	this.shape_63.setTransform(13.7,690.9,1.227,1.227);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAAAdQgOAAAFgdIAHgbIAIgBIAFAcQADAdgOAAIAAAAg");
	this.shape_64.setTransform(13.8,695.6,1.227,1.227);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgEAHIgcgTIAHgGIAgALQAgAMgHAKQgDAEgFAAQgKAAgSgMg");
	this.shape_65.setTransform(19.7,693.7,1.227,1.227);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgDAOQgLgNgIgVIAKgEIAVATQAUATgKAIQgDADgEAAQgHAAgIgLg");
	this.shape_66.setTransform(17.2,695,1.227,1.227);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAAAIIgkgIIACgHIAjgBQAkABAAAJQAAAHgRAAIgUgBg");
	this.shape_67.setTransform(21,691.7,1.227,1.227);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgeACIAdgIQAdgHADAIQADAIgfAFIgeACg");
	this.shape_68.setTransform(20.3,689.7,1.227,1.227);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgYAPQAKgKALgIQAVgSAGAIQAGAHgVAMQgKAGgMAFg");
	this.shape_69.setTransform(18.1,688.3,1.227,1.227);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgQAUQAEgMAJgOQALgSAHAFQAGAEgIALIgNAOIgIAMg");
	this.shape_70.setTransform(16.3,687.5,1.227,1.227);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgfATQgIgIAggQIAhgQIAIAFIgdAXQgUAPgKAAQgEAAgCgDg");
	this.shape_71.setTransform(8.1,694.1,1.227,1.227);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgSAYQgJgGAUgWIAUgVIAJABQgFAWgLAPQgJANgIAAQgEAAgDgCg");
	this.shape_72.setTransform(10.4,695.2,1.227,1.227);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AglAGQgBgKAmgEQASgCATAAIACAHQgTAGgTAEQgRAEgKAAQgLAAAAgFg");
	this.shape_73.setTransform(6.5,692.5,1.227,1.227);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgCAIQgjgBACgIQACgKAiAFQASADARADIgDAIIgWABIgNgBg");
	this.shape_74.setTransform(7.3,690.2,1.227,1.227);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgIAGQgWgJAGgIQAFgIAXAPQAMAGALAJIgMADQgNgDgKgFg");
	this.shape_75.setTransform(8.9,688.7,1.227,1.227);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgEAWQgCgKgBgLQgBgUAIgCQAHgBABAWQABALgCALg");
	this.shape_76.setTransform(13.4,687.2,1.227,1.227);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AABAKQgagSAJgIQAGgFANAQQALALAFALIgIACQgJgIgBgBg");
	this.shape_77.setTransform(10.8,687.9,1.227,1.227);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFBD7").s().p("AgIARIAFgRQAEgQAFABQAHACgNAeg");
	this.shape_78.setTransform(14.9,686.7,1.227,1.227);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFE9CE").s().p("AADAQQgMgHgNgZIAJgCIAUANQAUAOgGAGQgEAEgFAAQgEAAgFgDg");
	this.shape_79.setTransform(18.6,694.8,1.227,1.227);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFE9CE").s().p("AAAAGIgdgKIAIgFIAZACQAaAFgBAIQAAAEgHAAQgIAAgOgEg");
	this.shape_80.setTransform(21,693.2,1.227,1.227);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFE9CE").s().p("AgaAHIgCgFIAbgFQAbgGACAGQAEAIgdACg");
	this.shape_81.setTransform(21.7,690.5,1.227,1.227);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFE9CE").s().p("AgUAJIASgLQARgLAEAEQAJAJgsALg");
	this.shape_82.setTransform(19.9,688.6,1.227,1.227);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFE9CE").s().p("AgNAKIALgNQALgOAEAEQAGAGgbAWg");
	this.shape_83.setTransform(17.4,687.8,1.227,1.227);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFE9CE").s().p("AgGASIABgSQADgRAFABQAKACgNAgg");
	this.shape_84.setTransform(15,686.9,1.227,1.227);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFE9CE").s().p("AgTARQgGgFATgQIASgQIAJADQgJAZgMAJQgFAEgFAAQgFAAgEgEg");
	this.shape_85.setTransform(8.9,695.2,1.227,1.227);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFE9CE").s().p("AgcAHQgCgHAagGIAZgFIAIADQglAUgNAAQgGAAgBgFg");
	this.shape_86.setTransform(6.4,693.8,1.227,1.227);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFE9CE").s().p("AgZgBQADgEAYABIAZADIgCADQgWADgLAAQgVAAAEgGg");
	this.shape_87.setTransform(5.6,691.3,1.227,1.227);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFE9CE").s().p("AgTgHQADgDASAIIATAIIgEADQgsgIAIgIg");
	this.shape_88.setTransform(7,689.2,1.227,1.227);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFE9CE").s().p("AgDADQgPgLADgEQAEgEAOANIAOAMIgFAFIgPgLg");
	this.shape_89.setTransform(9.3,688,1.227,1.227);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFE9CE").s().p("AAEARQgEgHgEgJQgHgPAIgCQAFgBAEARIADARg");
	this.shape_90.setTransform(11.6,687,1.227,1.227);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFE9CE").s().p("AgKACIgDgZIAKAAIAMAVQAKAVgNAFIgDAAQgJAAgEgWg");
	this.shape_91.setTransform(15.7,696,1.227,1.227);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFE9CE").s().p("AgIAZQgMgDAKgXIALgXIAPAAQgDAYgEALQgFAOgKAAIgCAAg");
	this.shape_92.setTransform(11.9,696.1,1.227,1.227);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFCC02").s().p("AgCAMQgbgDgFgIQgFgHAOgGQgIANAhADQAdACACgKQAJAHgHAGQgGAEgPAAIgOgBg");
	this.shape_93.setTransform(64.1,648.5,1.227,1.227);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFF100").s().p("AgDAPQgngEAHgNQAHgOAcACQAeABAGAQQAEANgZAAIgSgBg");
	this.shape_94.setTransform(64.1,648.2,1.227,1.227);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgDAcQgOgDAJgaIAKgbIAJACIACAcQgCAbgLAAIgDgBg");
	this.shape_95.setTransform(63.4,652.7,1.227,1.227);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgFAHIgZgXIAHgFIAfAQQAeAQgIAJQgDACgEAAQgKAAgSgPg");
	this.shape_96.setTransform(69.7,651.8,1.227,1.227);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgFAOQgJgOgEgXIAKgCIARAWQAQAWgJAGQgDABgDAAQgIAAgHgMg");
	this.shape_97.setTransform(67.1,652.7,1.227,1.227);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAAAHIgkgMIAEgHIAiAEQAkAGgBAJQgBAGgJAAQgKAAgRgGg");
	this.shape_98.setTransform(71.2,650,1.227,1.227);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AACAIIgfgCIgCgHIAfgFQAdgEACAKQACAIgcAAIgDAAg");
	this.shape_99.setTransform(70.9,647.9,1.227,1.227);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgaALIAXgPQAYgOAFAIQAFAIgXAIIgXAIg");
	this.shape_100.setTransform(68.8,646.2,1.227,1.227);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgTARQAHgMALgLQAOgRAGAGQAGAHgaATIgJALg");
	this.shape_101.setTransform(67.2,645.2,1.227,1.227);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgiAOQgGgKAigLQARgGASgEIAHAHQgPAKgRAIQgTAKgKAAQgHAAgCgEg");
	this.shape_102.setTransform(58,650.4,1.227,1.227);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgWAVQgIgIAXgSIAXgSIAJADQgIAUgOAOQgKAKgHAAQgEAAgEgDg");
	this.shape_103.setTransform(60.5,652,1.227,1.227);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AglAAQAAgJAlABQATABATADIABAHQgUAEgTABIgOABQgYAAABgJg");
	this.shape_104.setTransform(56.8,648.4,1.227,1.227);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgDAIQgjgHAEgIQADgJAhAKQARAFAQAGIgEAHQgSgBgQgDg");
	this.shape_105.setTransform(58,646.7,1.227,1.227);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgIAFQgVgMAHgHQAHgHAUASQALAIAJAKIgMACQgMgFgJgHg");
	this.shape_106.setTransform(59.7,645.1,1.227,1.227);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgHAVQgBgLABgKQABgVAIAAQANAAgNArg");
	this.shape_107.setTransform(64.5,644.5,1.227,1.227);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAAAKQgXgXAKgGQAGgFALASQAKAOADALIgIACg");
	this.shape_108.setTransform(61.6,644.6,1.227,1.227);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFBD7").s().p("AgJAPIAGgQQAHgQAFACQAHADgRAcg");
	this.shape_109.setTransform(65.9,644.2,1.227,1.227);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFE9CE").s().p("AAAARQgLgKgIgaIAJgBIASAQQARARgGAFQgEADgEAAQgFAAgGgEg");
	this.shape_110.setTransform(68.4,652.7,1.227,1.227);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFE9CE").s().p("AgBAFIgbgOIAJgDIAYAGQAZAIgCAIQAAADgFAAQgIAAgQgIg");
	this.shape_111.setTransform(71,651.3,1.227,1.227);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFE9CE").s().p("AACAFIgcgEIgCgEIAcgCQAbAAABAFQACAGgRAAIgLgBg");
	this.shape_112.setTransform(72.1,649.1,1.227,1.227);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFE9CE").s().p("AgVAGIATgJQATgIAEAFQAIAKguAFg");
	this.shape_113.setTransform(70.7,646.9,1.227,1.227);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFE9CE").s().p("AgPAIIAOgLQANgMADAEQAFAHgeARg");
	this.shape_114.setTransform(68.2,645.6,1.227,1.227);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFE9CE").s().p("AgIAQIAEgQQAFgSAFACQAJAEgSAdg");
	this.shape_115.setTransform(66.2,644.3,1.227,1.227);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFE9CE").s().p("AgVAOQgFgGAVgNIAVgMIAHACQgOAZgMAGQgFACgEAAQgFAAgEgEg");
	this.shape_116.setTransform(58.9,651.7,1.227,1.227);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFE9CE").s().p("AgdAEQAAgIAagDQAMgBANABIAIAFQgPAEgPAEQgMADgIAAQgJAAAAgFg");
	this.shape_117.setTransform(56.5,649.8,1.227,1.227);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFE9CE").s().p("AgDAFQgbgEAGgFQADgFAXAGIAYAFIgCAFQgPAAgMgCg");
	this.shape_118.setTransform(56.2,647.3,1.227,1.227);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFE9CE").s().p("AgEADQgTgIAFgFQADgDARALIASALIgEACIgUgIg");
	this.shape_119.setTransform(57.9,645.4,1.227,1.227);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFE9CE").s().p("AgDADQgNgNADgEQAEgDAMAOIAMAPIgFAEIgNgNg");
	this.shape_120.setTransform(60.3,644.6,1.227,1.227);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFE9CE").s().p("AABARQgDgIgCgJQgFgQAJgBQAJAAgCAjg");
	this.shape_121.setTransform(62.8,643.9,1.227,1.227);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFE9CE").s().p("AgLABIACgZIAJAAIAKAXQAHAXgOADIgCAAQgLAAgBgYg");
	this.shape_122.setTransform(65.4,653.3,1.227,1.227);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFE9CE").s().p("AgMAXQgLgEAOgVIAOgVIANACQgGAYgFAJQgGAMgJAAIgEgBg");
	this.shape_123.setTransform(61.6,652.9,1.227,1.227);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFCC02").s().p("AgCAMQgbgDgFgIQgFgHAOgGQgHANAgADQAdACADgKQAIAIgIAFQgGAEgPAAIgNgBg");
	this.shape_124.setTransform(210.8,704.2,1.227,1.227);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFF100").s().p("AgCAPQgngEAHgNQAGgOAcACQAdABAGAQQAFANgaAAIgQgBg");
	this.shape_125.setTransform(210.8,703.9,1.227,1.227);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgDAdQgOgDAJgbIAKgbIAJACIABAdQgBAagLAAIgDAAg");
	this.shape_126.setTransform(210,708.5,1.227,1.227);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgFAHIgagXIAIgFIAfAPQAeARgIAJQgDACgEAAQgKAAgSgPg");
	this.shape_127.setTransform(216.2,707.3,1.227,1.227);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgFAOQgJgOgEgXIAKgCIARAWQARAWgKAGQgEABgDAAQgIAAgGgMg");
	this.shape_128.setTransform(213.7,708.3,1.227,1.227);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAAAHIgkgMIAEgHIAiAEQAkAGgBAJQgBAGgJAAQgKAAgRgGg");
	this.shape_129.setTransform(217.8,705.6,1.227,1.227);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AACAIIgfgCIgCgHIAfgFQAdgEACAKQACAIgcAAIgDAAg");
	this.shape_130.setTransform(217.5,703.5,1.227,1.227);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgaALIAXgPQAYgOAFAIQAFAIgXAIIgXAIg");
	this.shape_131.setTransform(215.4,701.9,1.227,1.227);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgTARQAHgMALgLQAOgRAFAGQAHAHgbATIgJALg");
	this.shape_132.setTransform(213.8,700.8,1.227,1.227);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgiAOQgGgKAigLQAQgGATgEIAHAGQgPALgRAHQgTALgLAAQgGAAgCgEg");
	this.shape_133.setTransform(204.7,706.2,1.227,1.227);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgWAVQgJgIAXgSIAYgSIAJADQgIAUgOAOQgJAKgIAAQgEAAgEgDg");
	this.shape_134.setTransform(207.1,707.6,1.227,1.227);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgmABQACgKAlACQATABASADIABAGQgUAEgTABIgPABQgXAAAAgIg");
	this.shape_135.setTransform(203.3,704,1.227,1.227);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgDAHQgjgGAEgIQAEgJAhAKQARAFAQAGIgEAHQgSgCgRgDg");
	this.shape_136.setTransform(204.7,702.2,1.227,1.227);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgIAFQgVgMAHgHQAHgHAUASQALAIAJALIgMABQgMgFgJgHg");
	this.shape_137.setTransform(206.2,700.7,1.227,1.227);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgHAVQgBgLABgKQABgVAIAAQANAAgMArg");
	this.shape_138.setTransform(211.1,700.2,1.227,1.227);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAAAKQgHgHgFgHQgHgLAGgEQAGgFALATQAJANAEALIgJACg");
	this.shape_139.setTransform(208.3,700.3,1.227,1.227);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFBD7").s().p("AgJAPIAGgQQAHgQAEACQAHADgRAcg");
	this.shape_140.setTransform(212.6,699.8,1.227,1.227);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFE9CE").s().p("AAAAQQgLgJgIgaIAIgBIASAQQASARgHAFQgDADgFAAQgFAAgFgFg");
	this.shape_141.setTransform(215,708.2,1.227,1.227);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFE9CE").s().p("AgBAFIgbgOIAJgDIAYAGQAZAIgCAIQAAADgFAAQgIAAgQgIg");
	this.shape_142.setTransform(217.6,707.1,1.227,1.227);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFE9CE").s().p("AACAFIgcgEIgCgEIAcgCQAbAAABAFQACAGgRAAIgLgBg");
	this.shape_143.setTransform(218.9,704.7,1.227,1.227);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFE9CE").s().p("AgVAFIATgIQATgIAEAFQAIAKguAFg");
	this.shape_144.setTransform(217.3,702.4,1.227,1.227);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFE9CE").s().p("AgPAIIANgMQANgLAEAEQAFAHgeARg");
	this.shape_145.setTransform(214.9,701.1,1.227,1.227);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFE9CE").s().p("AgIAQIAEgRQAFgRAFACQAJADgSAeg");
	this.shape_146.setTransform(212.8,700,1.227,1.227);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFE9CE").s().p("AgVAOQgGgGAWgNIAVgNIAIADQgOAZgNAGQgFADgEAAQgFAAgEgFg");
	this.shape_147.setTransform(205.5,707.2,1.227,1.227);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFE9CE").s().p("AgdAEQAAgIAagDQAMgBANAAIAIAFQgPAFgPADQgNAEgHAAQgJAAAAgFg");
	this.shape_148.setTransform(203.1,705.4,1.227,1.227);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFE9CE").s().p("AgYgEQADgEAXAFIAYAFIgDAFQg4gCAJgJg");
	this.shape_149.setTransform(202.7,702.9,1.227,1.227);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFE9CE").s().p("AgEADQgTgIAFgFQADgDARALIASALIgFACIgTgIg");
	this.shape_150.setTransform(204.6,701.1,1.227,1.227);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFE9CE").s().p("AgDADQgNgNADgEQAEgDAMAOIALAPIgFAEIgMgNg");
	this.shape_151.setTransform(206.9,700.2,1.227,1.227);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFE9CE").s().p("AABARQgDgIgDgJQgEgQAJgBQAJgBgCAkg");
	this.shape_152.setTransform(209.4,699.7,1.227,1.227);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFE9CE").s().p("AgLABIACgZIAJABIAKAXQAHAWgOADIgDAAQgKAAgBgYg");
	this.shape_153.setTransform(212.1,709,1.227,1.227);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFE9CE").s().p("AgMAXQgLgEAOgVIAOgVIANACQgGAZgFAJQgGALgIAAIgFgBg");
	this.shape_154.setTransform(208.2,708.6,1.227,1.227);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFCC02").s().p("AgCAMQgbgDgFgIQgFgHAOgGQgIANAhADQAeACACgKQAIAHgHAGQgGAEgQAAIgNgBg");
	this.shape_155.setTransform(1099.8,656.5,1.227,1.227);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFF100").s().p("AgCAPQgngEAHgNQAGgOAcACQAdABAGAQQAFANgZAAIgRgBg");
	this.shape_156.setTransform(1099.8,656.2,1.227,1.227);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgCAcQgPgDAJgaIAKgbIAKACIABAcQgCAbgLAAIgCgBg");
	this.shape_157.setTransform(1098.9,660.7,1.227,1.227);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgFAHIgZgXIAIgFIAeAQQAeAQgIAJQgDACgEAAQgJAAgTgPg");
	this.shape_158.setTransform(1105.3,659.7,1.227,1.227);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgFAOQgJgOgEgXIAKgCIARAWQAQAWgJAGQgDABgDAAQgIAAgHgMg");
	this.shape_159.setTransform(1102.7,660.7,1.227,1.227);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAAAHIgkgMIADgHIAjAEQAkAGgCAJQAAAGgJAAQgKAAgRgGg");
	this.shape_160.setTransform(1106.9,657.9,1.227,1.227);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AACAIIgegCIgCgHIAegFQAegEABAKQACAIgcAAIgDAAg");
	this.shape_161.setTransform(1106.4,655.8,1.227,1.227);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgaALIAYgPQAXgOAFAIQAFAIgXAIIgXAIg");
	this.shape_162.setTransform(1104.5,654.1,1.227,1.227);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgTARQAHgMALgMQANgQAGAGQAHAHgaATIgKALg");
	this.shape_163.setTransform(1102.8,653.1,1.227,1.227);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgiAOQgGgKAigLQARgGASgEIAHAHQgPAKgRAIQgTAKgKAAQgHAAgCgEg");
	this.shape_164.setTransform(1093.7,658.4,1.227,1.227);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgWAVQgIgIAXgTQAKgJANgJIAJAEQgIAUgOAOQgKALgHAAQgEAAgEgEg");
	this.shape_165.setTransform(1096,659.8,1.227,1.227);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AglABQAAgKAlACQATABATADIABAGQgUAEgTABIgPABQgXAAABgIg");
	this.shape_166.setTransform(1092.4,656.3,1.227,1.227);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgDAHQgjgGAEgIQADgJAhAKQARAFAQAGIgDAHQgSgCgRgDg");
	this.shape_167.setTransform(1093.6,654.5,1.227,1.227);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgIAFQgVgMAHgHQAHgHAUASQALAIAJAKIgMACQgMgFgJgHg");
	this.shape_168.setTransform(1095.3,653.1,1.227,1.227);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgHAVIAAgVQACgVAHAAQANAAgNArg");
	this.shape_169.setTransform(1100.1,652.4,1.227,1.227);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AAAAKQgXgXAKgGQAGgFALASQAJANAEAMIgIACg");
	this.shape_170.setTransform(1097.2,652.6,1.227,1.227);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFBD7").s().p("AgKAPIAHgQQAHgQAFACQAHADgRAcg");
	this.shape_171.setTransform(1101.5,652.1,1.227,1.227);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFE9CE").s().p("AAAAQQgLgJgIgaIAJgBIASAQQARAQgGAGQgEADgEAAQgFAAgGgFg");
	this.shape_172.setTransform(1104,660.6,1.227,1.227);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFE9CE").s().p("AAAAFIgcgOIAJgDIAYAGQAZAIgCAIQAAADgFAAQgIAAgPgIg");
	this.shape_173.setTransform(1106.7,659.3,1.227,1.227);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFE9CE").s().p("AACAFIgcgEIgCgEIAcgCQAbgBABAGQACAGgRAAIgLgBg");
	this.shape_174.setTransform(1107.8,657,1.227,1.227);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFE9CE").s().p("AgVAFIATgIQATgIAEAFQAIAKgvAFg");
	this.shape_175.setTransform(1106.4,654.7,1.227,1.227);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFE9CE").s().p("AgPAIIANgLQANgMAEAEQAFAHgeARg");
	this.shape_176.setTransform(1103.9,653.6,1.227,1.227);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFE9CE").s().p("AgIAQIAEgQQAFgSAFACQAJAEgSAdg");
	this.shape_177.setTransform(1101.7,652.3,1.227,1.227);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFE9CE").s().p("AgVANQgFgGAVgMQAJgHAMgGIAHADQgOAYgMAHQgEADgEAAQgGAAgEgGg");
	this.shape_178.setTransform(1094.5,659.5,1.227,1.227);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFE9CE").s().p("AgdAEQAAgIAagDQAMgBANABIAIAFQgPAEgPAEQgMADgIAAQgJAAAAgFg");
	this.shape_179.setTransform(1092.1,657.8,1.227,1.227);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFE9CE").s().p("AgDAFQgbgEAFgFQADgFAYAGIAYAFIgDAFQgOAAgMgCg");
	this.shape_180.setTransform(1091.8,655.3,1.227,1.227);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFE9CE").s().p("AgDADQgUgIAGgFQADgDARALIARALIgEACIgTgIg");
	this.shape_181.setTransform(1093.5,653.4,1.227,1.227);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFE9CE").s().p("AgDADQgNgNADgEQAEgDAMAPIALAOIgFAEIgMgNg");
	this.shape_182.setTransform(1096,652.5,1.227,1.227);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFE9CE").s().p("AABARQgDgJgCgIQgFgQAJgBQAJAAgDAjg");
	this.shape_183.setTransform(1098.4,651.9,1.227,1.227);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFE9CE").s().p("AgLABIABgZIAKAAIAJAXQAHAXgOADIgCAAQgKAAgBgYg");
	this.shape_184.setTransform(1101.1,661.3,1.227,1.227);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFE9CE").s().p("AgMAXQgLgEANgVQAHgLAIgKIANACQgGAYgFAJQgHAMgIAAIgEgBg");
	this.shape_185.setTransform(1097.3,660.9,1.227,1.227);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFCC02").s().p("AgDAMQgagDgFgIQgFgHAOgGQgIANAhADQAeACABgKQAJAHgHAFQgHAFgQAAIgNgBg");
	this.shape_186.setTransform(1059.2,690.5,1.227,1.227);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFF100").s().p("AgCAOQgngEAHgNQAHgNAbABQAeADAGAPQAEANgZAAIgRgCg");
	this.shape_187.setTransform(1059.1,690,1.227,1.227);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgCAcQgPgDAJgaIAKgbIAKACIABAcQgCAbgLAAIgCgBg");
	this.shape_188.setTransform(1058.5,694.7,1.227,1.227);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgFAGIgZgXIAHgFIAfAQQAdARgIAJQgCADgEAAQgJAAgTgRg");
	this.shape_189.setTransform(1064.7,693.6,1.227,1.227);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgFANQgJgOgEgXIAKgBIARAVQARAWgKAGQgDACgDAAQgIAAgHgNg");
	this.shape_190.setTransform(1062.1,694.6,1.227,1.227);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AAAAIIgkgMIADgIIAjAEQAkAGgCAJQAAAGgKAAQgJAAgRgFg");
	this.shape_191.setTransform(1066.3,691.8,1.227,1.227);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgcAGIgCgHIAegFQAegEABAKQACAIgfAAg");
	this.shape_192.setTransform(1065.9,689.7,1.227,1.227);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgaALIAYgPQAXgOAFAIQAFAIgXAIIgXAIg");
	this.shape_193.setTransform(1063.9,688,1.227,1.227);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgTARQAHgNALgKQANgRAGAGQAHAHgbATIgJALg");
	this.shape_194.setTransform(1062.3,687.1,1.227,1.227);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgiAOQgGgKAigLQAQgGATgEIAHAGQgPALgRAHQgTALgLAAQgGAAgCgEg");
	this.shape_195.setTransform(1053.1,692.3,1.227,1.227);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgWAVQgIgIAXgTQAKgJANgJIAJAEQgIAUgOAOQgKALgHAAQgEAAgEgEg");
	this.shape_196.setTransform(1055.5,693.8,1.227,1.227);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgmABQABgKAlACQATABATADIABAGQgUAEgTABIgPABQgXAAAAgIg");
	this.shape_197.setTransform(1051.8,690.2,1.227,1.227);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgDAHQgjgGAEgIQAEgJAhAKQARAFAQAGIgEAHQgSgCgRgDg");
	this.shape_198.setTransform(1053,688.5,1.227,1.227);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgJAFQgUgMAHgHQAGgHAVASQAKAIAKALIgNABQgLgFgKgHg");
	this.shape_199.setTransform(1054.7,687,1.227,1.227);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgHAUIAAgUQACgVAHAAQANAAgMArg");
	this.shape_200.setTransform(1059.5,686.4,1.227,1.227);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AAAAKQgWgXAJgGQAGgEALASQAJANAEALIgIACQgIgKgBgBg");
	this.shape_201.setTransform(1056.7,686.4,1.227,1.227);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFBD7").s().p("AgJAPIAHgQQAGgQAFACQAHADgRAcg");
	this.shape_202.setTransform(1060.9,686,1.227,1.227);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFE9CE").s().p("AAAAQQgLgJgJgaIAKgBIASAQQARAQgGAGQgEADgEAAQgFAAgGgFg");
	this.shape_203.setTransform(1063.4,694.6,1.227,1.227);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFE9CE").s().p("AAAAFIgcgPIAJgCQAyAKgDALQAAAEgFAAQgIAAgPgIg");
	this.shape_204.setTransform(1066,693.3,1.227,1.227);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFE9CE").s().p("AADAFIgcgEIgDgEIAcgCQAbgBACAGQACAGgRAAIgLgBg");
	this.shape_205.setTransform(1067.2,690.9,1.227,1.227);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFE9CE").s().p("AgVAFIATgIQATgIAEAFQAIAKguAFg");
	this.shape_206.setTransform(1065.7,688.7,1.227,1.227);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFE9CE").s().p("AgPAIIAOgLQANgMADAEQAFAIgeAQg");
	this.shape_207.setTransform(1063.3,687.4,1.227,1.227);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFE9CE").s().p("AgIAQIAEgQQAEgSAGACQAJAEgSAdg");
	this.shape_208.setTransform(1061,686.2,1.227,1.227);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFE9CE").s().p("AgWANQgFgGAVgMQAKgHALgGIAIADQgOAYgMAHQgFADgDAAQgGAAgFgGg");
	this.shape_209.setTransform(1053.9,693.4,1.227,1.227);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFE9CE").s().p("AgdAEQAAgIAagCQAMgCANABIAIAFQgPAEgPAEQgMADgIAAQgJAAAAgFg");
	this.shape_210.setTransform(1051.5,691.6,1.227,1.227);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFE9CE").s().p("AgDAFQgbgDAFgGQADgEAYAFIAYAFIgCAFIgbgCg");
	this.shape_211.setTransform(1051.2,689.3,1.227,1.227);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFE9CE").s().p("AgEADQgTgIAGgFQADgDARALIARALIgEACIgUgIg");
	this.shape_212.setTransform(1052.9,687.3,1.227,1.227);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFE9CE").s().p("AgDADQgNgNADgEQAEgDALAOIAMAPIgFAEIgMgNg");
	this.shape_213.setTransform(1055.4,686.4,1.227,1.227);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFE9CE").s().p("AABARQgDgIgCgJQgFgQAJgBQAJgBgCAkg");
	this.shape_214.setTransform(1057.8,685.9,1.227,1.227);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFE9CE").s().p("AgLABIACgZIAJABIAKAXQAHAWgOADIgDAAQgKAAgBgYg");
	this.shape_215.setTransform(1060.5,695.1,1.227,1.227);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFE9CE").s().p("AgMAXQgLgEANgVQAHgLAIgKIANACQgGAYgFAKQgGALgIAAIgFgBg");
	this.shape_216.setTransform(1056.6,694.9,1.227,1.227);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFCC02").s().p("AgCANQgbgEgFgIQgFgHAOgGQgIANAhADQAeACACgKQAIAHgIAFQgGAFgRAAIgLAAg");
	this.shape_217.setTransform(929,683.5,1.227,1.227);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFF100").s().p("AgCAPQgngEAHgNQAGgOAcACQAdACAGAPQAFANgZAAIgRgBg");
	this.shape_218.setTransform(929,683.2,1.227,1.227);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgCAcQgPgDAJgaIAKgbIAKACIABAcQgCAbgLAAIgCgBg");
	this.shape_219.setTransform(928.2,687.7,1.227,1.227);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgFAHIgZgXIAIgFIAeAQQAeAQgIAJQgDACgEAAQgJAAgTgPg");
	this.shape_220.setTransform(934.5,686.7,1.227,1.227);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgFAOQgJgOgEgXIAKgCIARAWQAQAWgJAGQgDABgDAAQgIAAgHgMg");
	this.shape_221.setTransform(932,687.7,1.227,1.227);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAAAHIgkgMIADgHIAjAEQAkAGgCAJQAAAGgKAAQgJAAgRgGg");
	this.shape_222.setTransform(936.2,684.9,1.227,1.227);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AACAIIgegCIgDgHIAfgFQAdgEACAKQACAIgcAAIgDAAg");
	this.shape_223.setTransform(935.6,682.8,1.227,1.227);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgaALIAYgPQAXgOAFAIQAFAIgXAIIgXAIg");
	this.shape_224.setTransform(933.7,681.1,1.227,1.227);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgSARQAHgNAKgKQANgRAGAGQAHAHgaATIgKALg");
	this.shape_225.setTransform(932,680.2,1.227,1.227);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgiAOQgGgKAigLQARgGASgEIAHAHQgPAKgRAIQgTAKgKAAQgHAAgCgEg");
	this.shape_226.setTransform(922.9,685.4,1.227,1.227);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgWAVQgIgIAXgSQAKgKANgIIAJADQgIAUgOAOQgKAKgHAAQgEAAgEgDg");
	this.shape_227.setTransform(925.2,687,1.227,1.227);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AglAAQAAgJAlABQATABASADIACAHQgUAEgTABIgOABQgYAAABgJg");
	this.shape_228.setTransform(921.7,683.4,1.227,1.227);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgDAIQgjgHAEgIQADgJAhAKQARAFAQAGIgDAHQgSgBgRgDg");
	this.shape_229.setTransform(922.9,681.6,1.227,1.227);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgIAFQgVgMAHgHQAHgHAUASQALAIAJAKIgMACQgMgFgJgHg");
	this.shape_230.setTransform(924.6,680.1,1.227,1.227);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgHAVIAAgVQACgVAHAAQAMAAgMArg");
	this.shape_231.setTransform(929.3,679.4,1.227,1.227);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AAAAKQgWgXAJgGQAGgFALASQAJANAEAMIgIACg");
	this.shape_232.setTransform(926.5,679.6,1.227,1.227);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFBD7").s().p("AgJAPIAHgQQAGgQAFACQAHADgRAcg");
	this.shape_233.setTransform(930.7,679.2,1.227,1.227);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFE9CE").s().p("AAAARQgLgKgIgaIAJgBIASAQQARARgGAFQgEADgEAAQgFAAgGgEg");
	this.shape_234.setTransform(933.3,687.6,1.227,1.227);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFE9CE").s().p("AAAAFIgcgOIAKgDIAYAGQAYAIgBAIQgBADgFAAQgHAAgQgIg");
	this.shape_235.setTransform(935.9,686.4,1.227,1.227);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFE9CE").s().p("AACAFIgcgEIgCgEIAcgCQAbgBABAGQACAGgRAAIgLgBg");
	this.shape_236.setTransform(937,684.1,1.227,1.227);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFE9CE").s().p("AgVAGIATgJQATgIAEAFQAHAKguAFg");
	this.shape_237.setTransform(935.6,681.8,1.227,1.227);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFE9CE").s().p("AgPAIIAOgLQANgMADAEQAFAHgeARg");
	this.shape_238.setTransform(933.1,680.5,1.227,1.227);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFE9CE").s().p("AgIAQIAEgRQAEgRAGACQAJADgSAeg");
	this.shape_239.setTransform(930.9,679.4,1.227,1.227);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFE9CE").s().p("AgVAOQgFgGAVgNQAJgHALgFIAIACQgOAYgMAHQgFACgEAAQgFAAgEgEg");
	this.shape_240.setTransform(923.7,686.6,1.227,1.227);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFE9CE").s().p("AgdAEQAAgIAagDQAMgBAOABIAHAFQgPAEgPAEQgMADgIAAQgJAAAAgFg");
	this.shape_241.setTransform(921.3,684.8,1.227,1.227);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFE9CE").s().p("AgDAFQgbgDAFgGQADgEAYAFIAYAFIgDAFIgagCg");
	this.shape_242.setTransform(921.1,682.3,1.227,1.227);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFE9CE").s().p("AgEAEQgTgJAGgFQADgDARALIARALIgEADIgUgIg");
	this.shape_243.setTransform(922.8,680.5,1.227,1.227);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFE9CE").s().p("AgDADQgNgNADgEQAEgDAMAOIALAPIgFAEIgMgNg");
	this.shape_244.setTransform(925.2,679.5,1.227,1.227);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFE9CE").s().p("AABARIgFgRQgFgQAJgBQAJgBgCAkg");
	this.shape_245.setTransform(927.6,679,1.227,1.227);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFE9CE").s().p("AgLABIACgZIAJAAIAKAXQAHAXgOADIgDAAQgKAAgBgYg");
	this.shape_246.setTransform(930.3,688.3,1.227,1.227);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFE9CE").s().p("AgMAXQgKgEANgVQAHgLAHgKIANACQgFAYgGAKQgGALgIAAIgFgBg");
	this.shape_247.setTransform(926.5,688,1.227,1.227);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFCC02").s().p("AgDAMQgagDgFgJQgEgGANgGQgHANAgADQAfACAAgKQAJAHgHAGQgGAEgOAAIgQgBg");
	this.shape_248.setTransform(809.2,673.7,1.227,1.227);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFF100").s().p("AgCAPQgngEAHgNQAHgOAbACQAeABAGAQQAEANgaAAIgQgBg");
	this.shape_249.setTransform(809.2,673.4,1.227,1.227);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgCAcQgPgDAJgaIAKgbIAKABIABAdQgCAbgLAAIgCgBg");
	this.shape_250.setTransform(808.6,678.1,1.227,1.227);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgFAHIgZgXIAIgFIAeAQQAeAQgIAJQgDACgEAAQgJAAgTgPg");
	this.shape_251.setTransform(814.7,676.9,1.227,1.227);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgFAOQgJgOgEgXIAKgCIARAWQARAWgKAGQgDABgEAAQgHAAgHgMg");
	this.shape_252.setTransform(812.2,677.9,1.227,1.227);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AAAAIIgkgMIADgIIAjAEQAkAGgCAJQAAAGgKAAQgJAAgRgFg");
	this.shape_253.setTransform(816.4,675.2,1.227,1.227);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AACAIIgegCIgDgHIAfgFQAdgEACAKQACAIgcAAIgDAAg");
	this.shape_254.setTransform(816,673,1.227,1.227);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgaALIAYgPQAXgOAFAIQAFAIgXAIIgXAIg");
	this.shape_255.setTransform(814,671.4,1.227,1.227);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgSARQAHgNAKgKQANgRAGAGQAHAHgaATIgKALg");
	this.shape_256.setTransform(812.4,670.3,1.227,1.227);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgiAOQgGgKAjgLQAQgGASgEIAHAGQgPALgRAHQgTALgKAAQgGAAgDgEg");
	this.shape_257.setTransform(803.2,675.8,1.227,1.227);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgWAVQgIgIAXgSQAKgKANgIIAJADQgIAUgOAOQgKAKgHAAQgEAAgEgDg");
	this.shape_258.setTransform(805.6,677.2,1.227,1.227);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AglAAQAAgJAlABQATABATADIABAHQgUAEgTABIgOABQgYAAABgJg");
	this.shape_259.setTransform(801.9,673.6,1.227,1.227);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgDAIQgjgHAEgIQAEgJAhAKQARAFAQAGIgEAHQgSgBgRgDg");
	this.shape_260.setTransform(803.1,671.8,1.227,1.227);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgIAFQgVgMAHgHQAHgHAUASQALAIAJALIgMABQgMgFgJgHg");
	this.shape_261.setTransform(804.8,670.3,1.227,1.227);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgHAVIAAgVQACgVAHAAQANAAgMArg");
	this.shape_262.setTransform(809.6,669.8,1.227,1.227);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AAAAKQgXgXAKgGQAGgEALASQAJANAEALIgIACQgIgKgBgBg");
	this.shape_263.setTransform(806.7,669.9,1.227,1.227);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFBD7").s().p("AgKAPIAHgQQAHgQAFACQAHADgRAcg");
	this.shape_264.setTransform(811,669.4,1.227,1.227);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFE9CE").s().p("AAAARQgLgKgIgaIAJgBIASAQQARARgGAFQgEADgEAAQgFAAgGgEg");
	this.shape_265.setTransform(813.5,677.8,1.227,1.227);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFE9CE").s().p("AAAAFIgcgOIAJgDIAYAGQAZAIgCAIQAAADgFAAQgIAAgPgIg");
	this.shape_266.setTransform(816.1,676.6,1.227,1.227);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFE9CE").s().p("AACAFIgcgEIgCgEIAcgCQAbgBABAGQADAGgSAAIgLgBg");
	this.shape_267.setTransform(817.2,674.2,1.227,1.227);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFE9CE").s().p("AgVAGIATgJQATgIAEAFQAIAKguAFg");
	this.shape_268.setTransform(815.8,672,1.227,1.227);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFE9CE").s().p("AgPAIIANgLQANgMAEAEQAFAIgeAQg");
	this.shape_269.setTransform(813.4,670.8,1.227,1.227);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFE9CE").s().p("AgIAQIAEgRQAEgRAGACQAJADgSAeg");
	this.shape_270.setTransform(811.1,669.6,1.227,1.227);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFE9CE").s().p("AgWAOQgFgGAVgNQAKgHALgFIAIACQgOAZgMAGQgFACgEAAQgFAAgFgEg");
	this.shape_271.setTransform(804,676.8,1.227,1.227);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFE9CE").s().p("AgdAEQAAgIAagDQAMgBANABIAIAFQgPAEgPAEQgMADgIAAQgJAAAAgFg");
	this.shape_272.setTransform(801.6,675,1.227,1.227);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFE9CE").s().p("AgDAFQgbgDAFgGQADgEAYAFIAYAFIgDAFIgagCg");
	this.shape_273.setTransform(801.3,672.5,1.227,1.227);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFE9CE").s().p("AgEAEQgTgJAGgFQADgDAQALIARALIgDADIgUgIg");
	this.shape_274.setTransform(803,670.7,1.227,1.227);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFE9CE").s().p("AgDADQgNgNAEgEQADgDAMAOIALAPIgFAEIgMgNg");
	this.shape_275.setTransform(805.5,669.7,1.227,1.227);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFE9CE").s().p("AABARQgDgIgCgJQgFgQAJgBQAJgBgCAkg");
	this.shape_276.setTransform(807.9,669.2,1.227,1.227);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFE9CE").s().p("AgLABIACgZIAJABIAJAXQAHAWgOADIgCAAQgKAAgBgYg");
	this.shape_277.setTransform(810.6,678.6,1.227,1.227);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFE9CE").s().p("AgMAXQgLgEANgVQAHgLAIgKIANACQgGAYgFAKQgGALgIAAIgFgBg");
	this.shape_278.setTransform(806.8,678.2,1.227,1.227);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFCC02").s().p("AgCAMQgbgDgFgIQgEgGANgHQgHANAgAEQAfACABgLQAIAHgHAFQgHAFgRAAIgLgBg");
	this.shape_279.setTransform(705.6,707.1,1.227,1.227);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFF100").s().p("AgCAPQgngEAHgNQAHgOAbACQAdACAGAPQAFANgaAAIgQgBg");
	this.shape_280.setTransform(705.5,706.7,1.227,1.227);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgCAcQgPgDAJgaIALgbIAJABIABAdQgCAbgLAAIgCgBg");
	this.shape_281.setTransform(704.8,711.4,1.227,1.227);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgFAHIgZgXIAIgFIAeAQQAeAQgIAJQgDACgEAAQgJAAgTgPg");
	this.shape_282.setTransform(711.1,710.2,1.227,1.227);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgFAOQgJgOgEgXIAKgCIARAWQARAWgKAGQgDABgEAAQgHAAgHgMg");
	this.shape_283.setTransform(708.6,711.2,1.227,1.227);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AAAAHIgkgMIADgHIAjAEQAkAGgCAJQAAAGgJAAQgKAAgRgGg");
	this.shape_284.setTransform(712.8,708.4,1.227,1.227);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AACAIIgfgCIgCgHIAfgFQAdgEACAKQACAIgcAAIgDAAg");
	this.shape_285.setTransform(712.3,706.4,1.227,1.227);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgaALIAYgPQAXgOAFAIQAFAIgXAIIgXAIg");
	this.shape_286.setTransform(710.4,704.7,1.227,1.227);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgSARQAGgMALgLQANgRAGAGQAHAHgaATIgKALg");
	this.shape_287.setTransform(708.7,703.7,1.227,1.227);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgiAPQgGgLAjgLQAQgGASgEIAHAHQgPAKgRAIQgTAKgLAAQgFAAgDgDg");
	this.shape_288.setTransform(699.5,709,1.227,1.227);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgWAVQgIgIAXgTIAYgSIAIAEQgJAUgNAOQgJALgIAAQgEAAgEgEg");
	this.shape_289.setTransform(701.8,710.5,1.227,1.227);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AglABQAAgKAlACQATABATADIABAGQgUAEgTABIgPABQgXAAABgIg");
	this.shape_290.setTransform(698.3,707,1.227,1.227);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgDAIQgjgHAEgIQAEgJAhAKQARAFAQAGIgEAHQgSgBgRgDg");
	this.shape_291.setTransform(699.4,705.2,1.227,1.227);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgIAGQgVgMAHgIQAHgHAUASQALAIAJALIgMABQgMgFgJgGg");
	this.shape_292.setTransform(701.1,703.7,1.227,1.227);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgHAVIAAgVQACgVAHAAQANAAgMArg");
	this.shape_293.setTransform(706,703.1,1.227,1.227);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AAAAKQgHgHgFgHQgHgLAGgEQAGgFALASQAJAOAEALIgIACIgJgLg");
	this.shape_294.setTransform(703.1,703.1,1.227,1.227);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFBD7").s().p("AgKAPIAHgQQAHgQAFACQAHADgRAcg");
	this.shape_295.setTransform(707.3,702.7,1.227,1.227);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFE9CE").s().p("AAAARQgLgKgIgaIAJgBIASAQQARARgGAFQgEADgEAAQgFAAgGgEg");
	this.shape_296.setTransform(709.9,711.2,1.227,1.227);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFE9CE").s().p("AAAAFIgcgOIAJgDIAYAGQAZAIgCAIQAAADgFAAQgIAAgPgIg");
	this.shape_297.setTransform(712.5,710,1.227,1.227);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFE9CE").s().p("AACAFIgcgEIgCgEIAcgCQAbgBABAGQADAGgSAAIgLgBg");
	this.shape_298.setTransform(713.6,707.6,1.227,1.227);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFE9CE").s().p("AgVAFIATgIQATgIAEAFQAIAKguAFg");
	this.shape_299.setTransform(712.2,705.4,1.227,1.227);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFE9CE").s().p("AgPAIIANgLQANgMAEAEQAFAHgeARg");
	this.shape_300.setTransform(709.7,704,1.227,1.227);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFE9CE").s().p("AgIAQIAEgQQAEgSAGACQAJADgSAeg");
	this.shape_301.setTransform(707.5,702.9,1.227,1.227);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFE9CE").s().p("AgWANQgFgFAVgNIAVgNIAIADQgOAYgMAHQgFADgDAAQgGAAgFgGg");
	this.shape_302.setTransform(700.4,710.2,1.227,1.227);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFE9CE").s().p("AgdAEQAAgIAagCQAMgCANABIAIAFQgPAEgPAEQgMADgIAAQgJAAAAgFg");
	this.shape_303.setTransform(698,708.3,1.227,1.227);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFE9CE").s().p("AgDAFQgbgDAFgGQADgEAYAFIAYAFIgDAFIgagCg");
	this.shape_304.setTransform(697.6,705.9,1.227,1.227);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFE9CE").s().p("AgEADQgTgIAGgFQADgDAQALIARALIgDACIgUgIg");
	this.shape_305.setTransform(699.3,704.1,1.227,1.227);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFE9CE").s().p("AgDADQgNgNAEgEQADgDAMAPIALAOIgFAEIgMgNg");
	this.shape_306.setTransform(701.8,703.1,1.227,1.227);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFE9CE").s().p("AABARQgDgJgCgIQgFgQAJgBQAJAAgCAjg");
	this.shape_307.setTransform(704.3,702.6,1.227,1.227);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFE9CE").s().p("AgLABIACgZIAJABIAJAXQAHAWgOADIgCAAQgKAAgBgYg");
	this.shape_308.setTransform(706.9,711.8,1.227,1.227);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFE9CE").s().p("AgMAXQgLgEANgVQAHgLAIgKIANACQgGAYgFAJQgHAMgIAAIgEgBg");
	this.shape_309.setTransform(703.1,711.5,1.227,1.227);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFCC02").s().p("AghAHQgGgGAMgIQgFAPAhgGQAegCAAgMQAJAHgGAGQgIAIgaADIgNABQgPAAgFgGg");
	this.shape_310.setTransform(578.8,656.2,1.227,1.227);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFF100").s().p("AgjAEQAEgOAcgEQAcgFAKAPQAKAOgtAFIgQABQgWAAADgMg");
	this.shape_311.setTransform(578.8,655.8,1.227,1.227);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgLABIAGgcIAIgBIAIAcQAFAdgPAAQgOAAACgcg");
	this.shape_312.setTransform(579.2,660.4,1.227,1.227);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgDAIIgegRIAHgHIAhAIQAgAKgGALQgCAEgHAAQgKAAgRgJg");
	this.shape_313.setTransform(584.8,658.1,1.227,1.227);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgBAOQgMgMgKgVIAJgEIAWARQAVASgIAIQgDAEgEAAQgHAAgIgKg");
	this.shape_314.setTransform(582.5,659.5,1.227,1.227);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AABAIIglgFIABgGIAjgEQAkgCABAJQABAIgXAAIgOAAg");
	this.shape_315.setTransform(586,655.9,1.227,1.227);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgeAEIAdgKQAcgKAEAJQAEAIgfAHIgeAEg");
	this.shape_316.setTransform(585.1,654,1.227,1.227);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgXARQAJgLAKgJQAUgTAHAHQAHAHgVAOQgJAHgLAFg");
	this.shape_317.setTransform(582.9,652.7,1.227,1.227);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgQAVQAFgOAHgMQAKgUAHAFQAHADgIAMQgFAHgHAHIgHANg");
	this.shape_318.setTransform(581.1,652.2,1.227,1.227);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgdAVQgJgJAfgSIAggRIAHAEIgaAZQgUASgJAAQgEAAgCgDg");
	this.shape_319.setTransform(573.2,659.3,1.227,1.227);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgQAaQgKgGASgYIATgXIAKACQgFAXgKAQQgIAOgIAAQgDAAgDgCg");
	this.shape_320.setTransform(575.9,660.3,1.227,1.227);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AglAIQgCgJAmgHQARgDATgCIADAHQgSAHgTAGQgTAHgJAAQgJAAgBgGg");
	this.shape_321.setTransform(571.6,657.6,1.227,1.227);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AgjAAQACgJAiADQASABARADIgCAHQgSACgQABIgJAAQgbAAABgIg");
	this.shape_322.setTransform(572.3,655.6,1.227,1.227);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgHAHQgXgIAFgIQAFgIAXANQANAGALAIIgLADQgMgCgLgEg");
	this.shape_323.setTransform(573.7,653.7,1.227,1.227);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgHABQgDgUAIgCQAHgCADAWQABAKgBAMIgLABQgDgKgBgLg");
	this.shape_324.setTransform(578.2,652.2,1.227,1.227);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AABAJQgIgFgGgFQgKgKAFgFQAGgGAOAPQAMALAGALIgIADIgLgJg");
	this.shape_325.setTransform(575.6,652.9,1.227,1.227);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFBD7").s().p("AgGARIADgRQADgRAFABQAHABgLAgg");
	this.shape_326.setTransform(579.6,651.4,1.227,1.227);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFE9CE").s().p("AAEAQQgNgHgOgYIAJgDIAVANQAVAMgGAGQgEAGgFAAQgEAAgFgDg");
	this.shape_327.setTransform(583.8,659.3,1.227,1.227);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFE9CE").s().p("AAAAFIgdgIIAIgFIAZABQAaADAAAHQAAAGgJAAQgIAAgNgEg");
	this.shape_328.setTransform(586.2,657.4,1.227,1.227);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFE9CE").s().p("AgbAEIAagHQAagHADAFQAEAHgdAEIgcACg");
	this.shape_329.setTransform(586.7,654.7,1.227,1.227);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFE9CE").s().p("AgTAKIAQgMQARgNAFAFQAKAJgsAOg");
	this.shape_330.setTransform(584.7,653.1,1.227,1.227);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFE9CE").s().p("AgMALIAKgOQAKgPAEAEQAHAFgaAYg");
	this.shape_331.setTransform(582,652.3,1.227,1.227);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFE9CE").s().p("AgEAAQABgRAFAAQAJABgLAhIgFABQAAgJABgJg");
	this.shape_332.setTransform(579.8,651.7,1.227,1.227);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFE9CE").s().p("AgRASQgGgFASgRIARgRIAIABQgIAagLALQgFAFgFAAQgEAAgEgEg");
	this.shape_333.setTransform(574.2,660.3,1.227,1.227);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFE9CE").s().p("AgbAJQgCgIAZgHIAYgGIAJACQgOAJgOAGQgPAIgIAAQgFAAAAgEg");
	this.shape_334.setTransform(571.7,659,1.227,1.227);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFE9CE").s().p("AgZAAQACgFAYAAIAZABIgBAEIgbAFIgLABQgPAAADgGg");
	this.shape_335.setTransform(570.7,656.8,1.227,1.227);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFE9CE").s().p("AgEAFQgUgFAEgFQADgEATAHIATAGIgEAEIgVgDg");
	this.shape_336.setTransform(572.1,654.5,1.227,1.227);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFE9CE").s().p("AgPgLQADgEAOAMIAPALIgEAFQghgRAFgHg");
	this.shape_337.setTransform(574.2,653.1,1.227,1.227);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFE9CE").s().p("AgFACQgIgPAIgDQAFgCAFASQAEAHABAJIgGABIgJgPg");
	this.shape_338.setTransform(576.5,651.9,1.227,1.227);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFE9CE").s().p("AgKADIgEgZIAKgBIANAVQAMAUgMAFIgFABQgIAAgGgVg");
	this.shape_339.setTransform(581,660.5,1.227,1.227);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFE9CE").s().p("AgFAZQgMgBAIgYIAKgXIANgCQAAAZgDALQgEAPgKAAIgCgBg");
	this.shape_340.setTransform(577.1,660.9,1.227,1.227);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFCC02").s().p("AgiAHQgGgGAMgIQgFAOAhgEQAegDAAgLQAKAGgGAGQgHAIgbADIgNAAQgQAAgFgFg");
	this.shape_341.setTransform(523.6,704.3,1.227,1.227);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFF100").s().p("AgjAEQAEgOAcgEQAbgFAKAPQAKAOgsAFIgQABQgVAAACgMg");
	this.shape_342.setTransform(523.7,703.8,1.227,1.227);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AgLABIAGgcIAIgBIAIAcQAFAdgPAAQgOAAACgcg");
	this.shape_343.setTransform(524.1,708.5,1.227,1.227);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgDAIIgegRIAHgHIAhAIQAgAKgGALQgCAEgHAAQgKAAgRgJg");
	this.shape_344.setTransform(529.6,706.1,1.227,1.227);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgBAOQgMgMgKgUIAJgFIAWARQAVASgIAJQgDADgEAAQgHAAgIgKg");
	this.shape_345.setTransform(527.4,707.6,1.227,1.227);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AABAIIglgFIABgGIAjgEQAkgDABAKQABAIgYAAIgNAAg");
	this.shape_346.setTransform(530.9,703.9,1.227,1.227);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AgeAEIAdgKQAcgKAEAJQAEAIgfAHIgeAEg");
	this.shape_347.setTransform(530,702.1,1.227,1.227);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AgXARQAJgLAKgJQAUgTAHAHQAHAIgVANQgJAHgLAFg");
	this.shape_348.setTransform(527.7,700.8,1.227,1.227);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgQAVQAFgOAHgMQAKgUAHAFQALAGgYAYIgHAMg");
	this.shape_349.setTransform(525.9,700.3,1.227,1.227);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AgdAVQgJgIAfgSIAggSIAHAEIgaAZQgUASgJAAQgEAAgCgDg");
	this.shape_350.setTransform(518.2,707.3,1.227,1.227);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgQAaQgKgGASgYIATgXIAKACQgFAXgKAQQgIAOgIAAQgDAAgDgCg");
	this.shape_351.setTransform(520.7,708.4,1.227,1.227);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AglAIQgCgJAlgHQASgDATgCIADAHQgSAHgTAGQgSAHgKAAQgJAAgBgGg");
	this.shape_352.setTransform(516.5,705.7,1.227,1.227);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AgjAAQABgJAjADQASABARADIgCAHQgSACgRABIgJAAQgaAAABgIg");
	this.shape_353.setTransform(517.2,703.7,1.227,1.227);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AgHAHQgXgIAFgIQAFgIAXANQANAGALAIIgLADQgMgCgLgEg");
	this.shape_354.setTransform(518.6,701.8,1.227,1.227);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AgHACQgDgVAIgCQAHgCADAXQABAKAAALIgMABQgDgKgBgKg");
	this.shape_355.setTransform(523.1,700.1,1.227,1.227);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AABAJQgHgFgHgFQgJgKAEgFQAGgGAOAQQANALAFALIgIACIgLgJg");
	this.shape_356.setTransform(520.5,700.8,1.227,1.227);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFBD7").s().p("AgGARIADgRQADgRAFABQAHABgLAgg");
	this.shape_357.setTransform(524.4,699.5,1.227,1.227);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFE9CE").s().p("AAEAQQgNgHgOgYIAJgDIAVANQAVAMgFAGQgEAGgGAAQgEAAgFgDg");
	this.shape_358.setTransform(528.7,707.3,1.227,1.227);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFE9CE").s().p("AAAAFIgdgIIAIgFIAZABQAaADAAAHQAAAGgJAAQgIAAgNgEg");
	this.shape_359.setTransform(531,705.5,1.227,1.227);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFE9CE").s().p("AgbAEIAagHQAagHADAFQAEAHgdAEIgcACg");
	this.shape_360.setTransform(531.5,702.7,1.227,1.227);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFE9CE").s().p("AgTAKIAQgMQARgNAEAFQAKAJgsAOg");
	this.shape_361.setTransform(529.7,701.2,1.227,1.227);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFE9CE").s().p("AgMALIAKgOQAKgOAEADQAHAFgaAYg");
	this.shape_362.setTransform(527,700.4,1.227,1.227);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFE9CE").s().p("AgEAAQABgRAFAAQAJABgLAhIgFABQAAgJABgJg");
	this.shape_363.setTransform(524.6,699.8,1.227,1.227);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFE9CE").s().p("AgRASQgGgFASgRIARgRIAIABQgHAbgMAKQgFAFgFAAQgEAAgEgEg");
	this.shape_364.setTransform(519.1,708.3,1.227,1.227);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFE9CE").s().p("AgbAKQgCgJAZgHIAYgGIAJADQgmAWgNAAQgFAAAAgDg");
	this.shape_365.setTransform(516.5,707.1,1.227,1.227);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFE9CE").s().p("AgZAAQACgFAYAAIAZABIgBAEIgbAFIgLABQgPAAADgGg");
	this.shape_366.setTransform(515.6,704.9,1.227,1.227);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFE9CE").s().p("AgTgFQADgEATAHIATAGIgFAEQgsgEAIgJg");
	this.shape_367.setTransform(516.8,702.5,1.227,1.227);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFE9CE").s().p("AgPgLQADgEAOALIAPAMIgEAFQghgRAFgHg");
	this.shape_368.setTransform(519.1,701.1,1.227,1.227);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFE9CE").s().p("AgFACQgIgPAIgDQAFgCAFARQAEAIABAJIgGABIgJgPg");
	this.shape_369.setTransform(521.4,700,1.227,1.227);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFE9CE").s().p("AgKAEIgEgZIAKgCIANAVQAMAUgMAFIgFABQgIAAgGgUg");
	this.shape_370.setTransform(525.8,708.6,1.227,1.227);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFE9CE").s().p("AgFAZQgMgBAIgYIAKgXIANgCQAAAZgDALQgEAPgKAAIgCgBg");
	this.shape_371.setTransform(522,709,1.227,1.227);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFCC02").s().p("AgFAUQgqgFgIgPQgHgMAVgJQgGAJAHAGQAJAIAfAEQAvAFAEgRQANANgMAIQgJAHgYAAIgYgCg");
	this.shape_372.setTransform(993.9,703.6,1.227,1.227);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFF100").s().p("AgEAXQg+gHALgVQALgWAtADQAuADAKAaQAHAUgoAAQgMAAgQgCg");
	this.shape_373.setTransform(994,703.2,1.227,1.227);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AgFAtQgXgFAOgqIASgrIAPABIABAvQgDArgRAAIgFgBg");
	this.shape_374.setTransform(992.5,710.4,1.227,1.227);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AgJAKIgogmIANgHIAxAaQAvAcgOAOQgDADgGAAQgQAAgegag");
	this.shape_375.setTransform(1002.7,708.9,1.227,1.227);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AgJAVQgOgWgHgmIAQgDIAdAkQAaAkgRAKQgEADgFAAQgNAAgLgWg");
	this.shape_376.setTransform(998.5,710.4,1.227,1.227);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AgBAMIg4gVIAEgLIA4AHQA5AKgCAQQgBAIgOAAQgPAAgdgJg");
	this.shape_377.setTransform(1005.4,706.1,1.227,1.227);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AADANIgxgFIgDgMIAxgHQAwgEACAPQADANgpAAIgJAAg");
	this.shape_378.setTransform(1004.7,702.8,1.227,1.227);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AgrAQIAmgYQAngWAIAOQAIANglAOIgmALg");
	this.shape_379.setTransform(1001.5,700,1.227,1.227);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AgfAaQALgTARgSQAYgaAJAJQAIAJgQAPQgLAJgOAJIgPARg");
	this.shape_380.setTransform(998.9,698.4,1.227,1.227);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("Ag4AWQgJgRA4gRQAbgJAegGIAKAKQgZARgbAMQgfAQgQAAQgLAAgEgGg");
	this.shape_381.setTransform(984.1,706.5,1.227,1.227);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AglAiQgNgNAlgeQASgQAWgNIAPAGQgRAhgVAWQgQAQgMAAQgHAAgGgFg");
	this.shape_382.setTransform(987.9,709.1,1.227,1.227);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("Ag9AAQACgPA8ADQAeACAeAFIABAKQgfAGgfACIgYABQgnAAACgOg");
	this.shape_383.setTransform(982.1,703.2,1.227,1.227);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AgFAMQg4gLAGgOQAFgOA2ARQAbAJAaAKIgGALQgdgCgbgGg");
	this.shape_384.setTransform(984.1,700.3,1.227,1.227);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AgNAIQghgUALgMQALgLAgAeQARANAOARIgSACQgTgIgPgLg");
	this.shape_385.setTransform(986.8,698,1.227,1.227);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AgNAiQgBgRACgRQAEgiAMAAQANAAgFAiQgCASgGASg");
	this.shape_386.setTransform(994.5,697.1,1.227,1.227);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AAAAQQgLgMgIgLQgLgSAJgGQALgHARAdQAPAYAEARIgMACIgOgSg");
	this.shape_387.setTransform(990,697.2,1.227,1.227);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFBD7").s().p("AgRAYIAMgaQAMgZAHADQALAFgbAtg");
	this.shape_388.setTransform(996.8,696.6,1.227,1.227);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFE9CE").s().p("AAAAbQgSgPgNgrIAOgCIAdAbQAcAcgLAIQgGAEgHAAQgIAAgIgHg");
	this.shape_389.setTransform(1000.7,710.4,1.227,1.227);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFE9CE").s().p("AgBAIIgsgZIAPgDIAoALQAnAMgEANQgBAFgHAAQgMAAgagNg");
	this.shape_390.setTransform(1005,708.5,1.227,1.227);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFE9CE").s().p("AACAIIgtgHIgCgHIAtgCQArgBACAJQADAJgZAAIgVgBg");
	this.shape_391.setTransform(1006.8,704.7,1.227,1.227);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFE9CE").s().p("AgiAJIAfgOQAfgNAGAIQAHALgiAHIgjAGg");
	this.shape_392.setTransform(1004.4,701.1,1.227,1.227);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFE9CE").s().p("AgYAMIAWgSQAWgTAFAHQAFAHgYAQIgXAPg");
	this.shape_393.setTransform(1000.7,699,1.227,1.227);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFE9CE").s().p("AgOAaQADgOAEgNQAIgcAJADQAKADgMAZQgGANgHAMg");
	this.shape_394.setTransform(997,697,1.227,1.227);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFE9CE").s().p("AgjAVQgJgJAigVQAQgKATgJIANAFQgXAmgVALQgHADgGAAQgKAAgGgIg");
	this.shape_395.setTransform(985.4,708.4,1.227,1.227);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFE9CE").s().p("AgvAFQAAgNAqgDQAUgCAUABIANAIQgYAHgYAGQgTAEgMAAQgQAAAAgIg");
	this.shape_396.setTransform(981.7,705.4,1.227,1.227);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFE9CE").s().p("AgFAHQgrgGAIgJQAFgHAmAJQAUAFATAFIgEAIQgXgBgUgEg");
	this.shape_397.setTransform(981.2,701.5,1.227,1.227);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFE9CE").s().p("AgHAFQgfgOAKgIQAFgFAbASIAcATIgHAEQgRgGgPgIg");
	this.shape_398.setTransform(984,698.6,1.227,1.227);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFE9CE").s().p("AgHAEQgVgWAHgFQAHgGATAYQAKAMAIANIgJAGQgLgKgKgMg");
	this.shape_399.setTransform(987.9,697.1,1.227,1.227);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFE9CE").s().p("AABAdQgFgOgEgOQgHgbAOgCQAJAAACAcQABAPgBAOg");
	this.shape_400.setTransform(991.7,696.2,1.227,1.227);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFE9CE").s().p("AgSACIADgpIAQABIAPAmQAKAlgWADIgDAAQgSAAgBgmg");
	this.shape_401.setTransform(995.9,711.4,1.227,1.227);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFE9CE").s().p("AgUAkQgSgGAVghQALgSAOgQIAVACQgJAmgJARQgLASgMAAQgEAAgEgCg");
	this.shape_402.setTransform(989.8,710.7,1.227,1.227);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFCC02").s().p("AgFAUQgqgFgIgPQgHgLAVgKQgGAJAHAHQAJAIAfADQAvAFAEgRQANANgMAJQgJAGgWAAIgagCg");
	this.shape_403.setTransform(1103.7,711.4,1.227,1.227);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFF100").s().p("AgEAXQg/gHAMgVQALgWAtADQAvAEAJAZQAHAUgnAAQgNAAgQgCg");
	this.shape_404.setTransform(1103.7,711,1.227,1.227);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AgFAtQgXgFAOgqIASgrIAPABIABAwQgDAqgSAAIgEgBg");
	this.shape_405.setTransform(1102.3,718.3,1.227,1.227);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("AgJAKIgogmIANgIIAxAbQAvAcgOAOQgDAEgGAAQgQAAgegbg");
	this.shape_406.setTransform(1112.5,716.8,1.227,1.227);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AgJAWQgOgXgHgmIAQgDIAdAkQAaAkgRAKQgEADgFAAQgNAAgLgVg");
	this.shape_407.setTransform(1108.3,718.3,1.227,1.227);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgBALIg4gUIAEgLIA4AHQA5AKgCAQQgBAIgOAAQgPAAgdgKg");
	this.shape_408.setTransform(1115.2,713.9,1.227,1.227);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("AADANIgxgFIgDgMIAxgHQAwgEACAPQADANgpAAIgJAAg");
	this.shape_409.setTransform(1114.5,710.7,1.227,1.227);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AgrAQIAmgYQAngVAIANQAIANglANIgmAMg");
	this.shape_410.setTransform(1111.3,707.9,1.227,1.227);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AgfAaQAKgTASgSQAYgaAJAJQAIAIgQAQQgLAJgOAJIgPARg");
	this.shape_411.setTransform(1108.7,706.3,1.227,1.227);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("Ag4AWQgJgRA4gRQAbgJAegGIAKAKQgZARgbAMQgfAQgRAAQgKAAgEgGg");
	this.shape_412.setTransform(1093.9,714.5,1.227,1.227);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AglAiQgNgNAlgfQASgPAWgNIAPAFQgQAigWAWQgQAQgMAAQgHAAgGgFg");
	this.shape_413.setTransform(1097.7,717,1.227,1.227);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("Ag9AAQACgQA8AEQAeACAeAFIABAKQgfAFgfADIgWABQgpAAACgOg");
	this.shape_414.setTransform(1091.9,711.1,1.227,1.227);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgFAMQg4gLAGgOQAFgOA2ARQAbAJAaAKIgGAMQgdgDgbgGg");
	this.shape_415.setTransform(1093.9,708.2,1.227,1.227);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AgNAIQghgUALgMQALgLAgAeQARANAOARIgSACQgTgIgPgLg");
	this.shape_416.setTransform(1096.6,705.8,1.227,1.227);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AgNAiQgBgSACgQQAEgjAMABQANAAgFAiQgCASgGASg");
	this.shape_417.setTransform(1104.3,705,1.227,1.227);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AAAAQQgjgmAOgJQALgHARAdQAPAYAEARIgLABIgPgRg");
	this.shape_418.setTransform(1099.8,705.1,1.227,1.227);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFBD7").s().p("AgRAYIAMgaQAMgZAHADQALAFgbAtg");
	this.shape_419.setTransform(1106.6,704.5,1.227,1.227);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFE9CE").s().p("AAAAbQgSgQgNgqIAOgCIAdAbQAcAbgLAJQgGAEgHAAQgIAAgIgHg");
	this.shape_420.setTransform(1110.5,718.2,1.227,1.227);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFE9CE").s().p("AgBAIIgsgZIAPgEIAoALQAnANgEANQgBAGgHAAQgMAAgagOg");
	this.shape_421.setTransform(1114.8,716.3,1.227,1.227);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFE9CE").s().p("AACAIIgtgHIgCgHIAtgCQArgBACAJQADAJgZAAIgVgBg");
	this.shape_422.setTransform(1116.6,712.6,1.227,1.227);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFE9CE").s().p("AgiAJIAfgOQAfgMAGAIQAHAKgiAIIgjAFg");
	this.shape_423.setTransform(1114.2,708.9,1.227,1.227);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFE9CE").s().p("AgZAMIAWgTQAWgSAFAHQAIALgyAbg");
	this.shape_424.setTransform(1110.5,706.9,1.227,1.227);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFE9CE").s().p("AgOAaQADgPAEgNQAIgcAJAEQAKADgMAZQgGANgHAMg");
	this.shape_425.setTransform(1106.8,704.9,1.227,1.227);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFE9CE").s().p("AgjAVQgJgKAigUQAQgLATgJIANAFQgXAngVALQgHAEgGAAQgKAAgGgJg");
	this.shape_426.setTransform(1095.2,716.3,1.227,1.227);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFE9CE").s().p("AgvAFQAAgNAqgDQAUgCAUABIANAIQgYAHgYAGQgTAEgMAAQgQAAAAgIg");
	this.shape_427.setTransform(1091.5,713.2,1.227,1.227);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFE9CE").s().p("AgFAHQgrgGAIgJQAFgHAmAJQAUAFATAFIgEAIQgXgBgUgEg");
	this.shape_428.setTransform(1091,709.4,1.227,1.227);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFE9CE").s().p("AgHAGQgfgPAKgIQAFgFAbATIAcASIgHAEQgRgGgPgHg");
	this.shape_429.setTransform(1093.8,706.4,1.227,1.227);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFE9CE").s().p("AgHAEQgVgWAHgFQAHgGATAZQAKALAIANIgJAGQgLgKgKgMg");
	this.shape_430.setTransform(1097.7,705,1.227,1.227);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFE9CE").s().p("AABAcQgFgNgEgOQgHgbAOgCQAJAAACAcQABAPgBAOg");
	this.shape_431.setTransform(1101.5,704,1.227,1.227);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFE9CE").s().p("AgSACIADgqIAQACIAPAmQAKAlgWADIgDABQgSAAgBgng");
	this.shape_432.setTransform(1105.7,719.2,1.227,1.227);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFE9CE").s().p("AgUAkQgSgGAVgiQALgRAOgQIAVACQgJAmgJARQgLASgMAAQgEAAgEgCg");
	this.shape_433.setTransform(1099.6,718.5,1.227,1.227);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFCC02").s().p("AgFAUQgrgFgHgPQgHgMAVgJQgGAJAHAGQAJAIAfAEQAvAFAEgRQANANgMAIQgKAHgZAAIgWgCg");
	this.shape_434.setTransform(861.8,705.4,1.227,1.227);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFF100").s().p("AgEAXQg+gHALgVQALgWAtADQAvAEAJAZQAHAUgnAAQgNAAgQgCg");
	this.shape_435.setTransform(861.7,704.9,1.227,1.227);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AgFAtQgXgFAOgqIATgrIAPABIABAwQgEAqgRAAIgFgBg");
	this.shape_436.setTransform(860.4,712.1,1.227,1.227);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AgJAKIgogmIANgIIAxAbQAvAcgOAOQgDAEgHAAQgPAAgegbg");
	this.shape_437.setTransform(870.5,710.6,1.227,1.227);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AgJAWQgOgXgHgmIAQgDIAdAkQAaAkgRAKQgEADgFAAQgNAAgLgVg");
	this.shape_438.setTransform(866.4,712.1,1.227,1.227);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AgBAMIg4gVIAEgLIA4AHQA5AKgCAQQgBAIgOAAQgPAAgdgJg");
	this.shape_439.setTransform(873.3,707.9,1.227,1.227);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AADANIgygFIgCgMIAxgHQAwgEACAPQADANgqAAIgIAAg");
	this.shape_440.setTransform(872.6,704.5,1.227,1.227);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AgrAQIAmgXQAngWAIANQAIANglAOIgmALg");
	this.shape_441.setTransform(869.4,701.7,1.227,1.227);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AgfAaQAKgTASgSQAXgaAKAJQAIAIgQAQQgLAJgOAJIgPARg");
	this.shape_442.setTransform(866.8,700.2,1.227,1.227);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("Ag4AWQgJgRA4gRQAbgJAegGIAKAKQgZARgbAMQgfAQgQAAQgLAAgEgGg");
	this.shape_443.setTransform(851.9,708.4,1.227,1.227);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AglAiQgNgNAlgfQASgPAWgNIAPAFQgQAigXAWQgQAQgMAAQgHAAgFgFg");
	this.shape_444.setTransform(855.8,710.9,1.227,1.227);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("Ag9AAQACgQA8AEQAeACAeAFIABAKQgfAFgfADIgWABQgpAAACgOg");
	this.shape_445.setTransform(850,704.9,1.227,1.227);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AgFAMQg4gLAGgOQAFgOA2ARQAbAJAaAKIgGALQgdgCgbgGg");
	this.shape_446.setTransform(852.1,702.2,1.227,1.227);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgNAIQghgUAKgMQAMgLAgAeQARANAOARIgSACQgTgIgPgLg");
	this.shape_447.setTransform(854.7,699.7,1.227,1.227);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AgMAiQgBgSACgQQADgiANgBQANAAgGAjQgCASgFARg");
	this.shape_448.setTransform(862.4,698.8,1.227,1.227);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AAAAQQgLgNgIgLQgLgSAJgFQALgHARAdQAPAXAEASIgMABg");
	this.shape_449.setTransform(857.8,699,1.227,1.227);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFBD7").s().p("AgRAYIAMgaQAMgZAHADQALAFgcAtg");
	this.shape_450.setTransform(864.8,698.4,1.227,1.227);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFE9CE").s().p("AAAAbQgSgQgNgqIAOgCIAdAbQAcAbgLAJQgGAEgHAAQgIAAgIgHg");
	this.shape_451.setTransform(868.6,712.1,1.227,1.227);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFE9CE").s().p("AgBAIIgsgYIAPgEIAoALQAnANgEANQgBAEgHAAQgMAAgagNg");
	this.shape_452.setTransform(872.7,710.1,1.227,1.227);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFE9CE").s().p("AADAIIgugHIgBgHIAsgCQAsgBABAJQACAJgYAAIgUgBg");
	this.shape_453.setTransform(874.7,706.4,1.227,1.227);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFE9CE").s().p("AgiAJIAfgOQAfgMAGAIQAIAKgjAIIgjAFg");
	this.shape_454.setTransform(872.3,702.8,1.227,1.227);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFE9CE").s().p("AgYAMIAWgTQAWgSAFAHQAFAHgYAQIgXAPg");
	this.shape_455.setTransform(868.5,700.7,1.227,1.227);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFE9CE").s().p("AgOAaQADgPAFgNQAIgcAIAEQAKADgMAZQgGANgGAMg");
	this.shape_456.setTransform(864.8,698.8,1.227,1.227);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFE9CE").s().p("AgjAVQgJgKAigUQAQgLASgJIAOAFQgYAngUALQgHAEgGAAQgKAAgGgJg");
	this.shape_457.setTransform(853.3,710.1,1.227,1.227);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFE9CE").s().p("AgvAFQAAgNAqgDQATgCAVABIANAIQgYAHgYAGQgTAEgMAAQgQAAAAgIg");
	this.shape_458.setTransform(849.6,707.1,1.227,1.227);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFE9CE").s().p("AgFAHQgrgGAIgJQAFgHAnAJQAUAFASAFIgDAIQgXgBgVgEg");
	this.shape_459.setTransform(849,703.2,1.227,1.227);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFE9CE").s().p("AgHAFQgfgOAKgIQAFgFAbASIAbATIgGAEQgRgGgPgIg");
	this.shape_460.setTransform(851.8,700.4,1.227,1.227);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFE9CE").s().p("AgHAEQgVgWAHgFQAHgGATAZQAKALAIANIgJAGQgMgKgJgMg");
	this.shape_461.setTransform(855.8,698.8,1.227,1.227);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFE9CE").s().p("AABAcQgFgNgDgOQgHgbANgCQAJAAACAcIABAdg");
	this.shape_462.setTransform(859.6,697.9,1.227,1.227);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFE9CE").s().p("AgSACIADgqIAQACIAPAmQAKAlgWADIgDABQgSAAgBgng");
	this.shape_463.setTransform(863.8,713.1,1.227,1.227);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFE9CE").s().p("AgUAkQgSgGAWgiQALgRANgQIAWACQgJAmgKARQgKASgNAAQgEAAgEgCg");
	this.shape_464.setTransform(857.7,712.4,1.227,1.227);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFCC02").s().p("AgFAVQgqgGgIgOQgHgMAVgKQgGAJAHAHQAJAIAfADQAvAGAEgSQANANgMAIQgKAHgYAAIgXgBg");
	this.shape_465.setTransform(735.7,663.4,1.227,1.227);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFF100").s().p("AgEAXQg/gHAMgVQALgWAtADQAvAEAJAZQAHAUgnAAQgNAAgQgCg");
	this.shape_466.setTransform(735.7,662.9,1.227,1.227);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFFFFF").s().p("AgFAtQgXgFAOgqIASgrIAPABIABAwQgDAqgSAAIgEgBg");
	this.shape_467.setTransform(734.3,670.2,1.227,1.227);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FFFFFF").s().p("AgJAKIgognIANgHIAxAbQAvAcgOAOQgDAEgGAAQgPAAgfgbg");
	this.shape_468.setTransform(744.4,668.7,1.227,1.227);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFFFFF").s().p("AgJAWQgOgXgHgmIAQgDIAdAkQAaAkgRAKQgEADgFAAQgNAAgLgVg");
	this.shape_469.setTransform(740.3,670.2,1.227,1.227);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFFFF").s().p("AgBAMIg4gVIADgLIA5AHQA5AKgCAQQgBAIgPAAQgOAAgdgJg");
	this.shape_470.setTransform(747,665.9,1.227,1.227);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFFFF").s().p("AADANIgxgFIgDgMIAxgHQAwgEACAPQADANgpAAIgJAAg");
	this.shape_471.setTransform(746.5,662.6,1.227,1.227);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFFFFF").s().p("AgrAQIAmgYQAngWAIAOQAIANglAOIgmALg");
	this.shape_472.setTransform(743.3,659.8,1.227,1.227);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFFFF").s().p("AgfAaQALgTARgSQAYgaAJAJQAIAJgQAPQgLAJgOAJIgPARg");
	this.shape_473.setTransform(740.7,658.1,1.227,1.227);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFFFFF").s().p("Ag3AWQgKgRA4gRQAbgJAegGIAKAKQgZARgbAMQgfAQgQAAQgLAAgDgGg");
	this.shape_474.setTransform(725.7,666.4,1.227,1.227);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFFFFF").s().p("AglAiQgNgNAlgeQASgQAWgNIAPAGQgQAhgWAWQgQAQgMAAQgHAAgGgFg");
	this.shape_475.setTransform(729.7,668.9,1.227,1.227);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("Ag9AAQACgQA7AEQAfACAeAFIABAKQgfAFgfACIgXABQgoAAACgNg");
	this.shape_476.setTransform(723.7,663,1.227,1.227);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFFFFF").s().p("AgFAMQg4gLAGgOQAGgOA1ARQAbAJAaAKIgGALQgdgCgbgGg");
	this.shape_477.setTransform(725.8,660.1,1.227,1.227);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AgNAIQghgUALgMQALgLAgAeQARANAOARIgSACQgTgIgPgLg");
	this.shape_478.setTransform(728.6,657.7,1.227,1.227);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("AgMAiQgBgRABgRQAEgiAMgBQANAAgFAjQgCASgGARg");
	this.shape_479.setTransform(736.2,656.9,1.227,1.227);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AAAAPQgLgMgIgLQgLgSAJgFQALgHARAdQAOAXAFASIgMABg");
	this.shape_480.setTransform(731.6,657,1.227,1.227);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFBD7").s().p("AgRAYIAMgZQAMgaAHADQALAFgbAtg");
	this.shape_481.setTransform(738.6,656.5,1.227,1.227);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFE9CE").s().p("AAAAbQgSgQgNgqIAOgCIAdAbQAcAbgLAJQgGAEgHAAQgIAAgIgHg");
	this.shape_482.setTransform(742.5,670.1,1.227,1.227);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFE9CE").s().p("AgBAHIgsgYIAPgEIAoALQAnANgEANQgBAGgHAAQgMAAgagPg");
	this.shape_483.setTransform(746.6,668.2,1.227,1.227);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFE9CE").s().p("AACAIIgtgHIgCgHIAtgCQArgBACAJQADAJgZAAIgVgBg");
	this.shape_484.setTransform(748.6,664.5,1.227,1.227);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFE9CE").s().p("AgiAJIAfgOQAfgNAGAIQAHALgiAHIgjAGg");
	this.shape_485.setTransform(746.2,660.8,1.227,1.227);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFE9CE").s().p("AgYAMIAWgSQAWgTAFAHQAFAHgXAQIgYAQg");
	this.shape_486.setTransform(742.3,658.8,1.227,1.227);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFE9CE").s().p("AgOAaQADgOAEgNQAIgcAJADQAKADgMAZQgGANgHAMg");
	this.shape_487.setTransform(738.8,656.8,1.227,1.227);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFE9CE").s().p("AgjAVQgIgKAhgUQAQgLATgJIANAFQgXAngVALQgHAEgGAAQgKAAgGgJg");
	this.shape_488.setTransform(727.1,668.2,1.227,1.227);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFE9CE").s().p("AgvAFQAAgNApgDQAVgCAUABIANAIQgYAHgYAGQgUAEgLAAQgQAAAAgIg");
	this.shape_489.setTransform(723.4,665.1,1.227,1.227);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFE9CE").s().p("AgFAHQgrgGAIgJQAFgHAnAJQAUAFASAFIgEAIQgXgBgUgEg");
	this.shape_490.setTransform(722.9,661.2,1.227,1.227);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFE9CE").s().p("AgHAGQgfgPAKgIQAFgFAcATIAbASIgHAEQgRgGgPgHg");
	this.shape_491.setTransform(725.6,658.4,1.227,1.227);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFE9CE").s().p("AgHAEQgUgWAGgFQAHgGATAYQAKAMAIANIgJAGQgLgKgKgMg");
	this.shape_492.setTransform(729.5,656.9,1.227,1.227);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFE9CE").s().p("AABAcQgFgNgEgOQgHgbAOgCQAJAAACAcQABAOgBAPg");
	this.shape_493.setTransform(733.5,656,1.227,1.227);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFE9CE").s().p("AgSACIADgpIAQABIAPAmQAKAlgWADIgDAAQgSAAgBgmg");
	this.shape_494.setTransform(737.6,671.2,1.227,1.227);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFE9CE").s().p("AgUAkQgSgGAVghQALgSAOgQIAVACQgJAmgJARQgLASgMAAQgEAAgEgCg");
	this.shape_495.setTransform(731.6,670.4,1.227,1.227);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFCC02").s().p("AgFAUQgrgFgIgPQgHgMAWgJQgGAJAHAGQAJAIAfAEQAvAFAEgRQAOANgNAIQgJAHgYAAIgYgCg");
	this.shape_496.setTransform(625.3,693.8,1.227,1.227);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFF100").s().p("AgEAXQg+gHALgVQALgWAtADQAuADAKAaQAHAUgoAAQgMAAgQgCg");
	this.shape_497.setTransform(625.3,693.4,1.227,1.227);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AgFAtQgXgEAOgrIATgqIAPAAIABAvQgEAqgSAAIgEAAg");
	this.shape_498.setTransform(624.1,700.6,1.227,1.227);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFFFFF").s().p("AgIAKIgogmIANgHIAwAaQAvAcgOAOQgDADgGAAQgQAAgdgag");
	this.shape_499.setTransform(634.1,699.1,1.227,1.227);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AgJAVQgOgWgHgmIAQgDIAcAkQAaAkgQAKQgEADgFAAQgNAAgLgWg");
	this.shape_500.setTransform(630,700.6,1.227,1.227);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFFFFF").s().p("AgBAMIg4gVIAEgLIA4AHQA5AKgCAQQgBAIgOAAQgPAAgdgJg");
	this.shape_501.setTransform(636.8,696.2,1.227,1.227);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("AADANIgxgFIgDgMIAxgHQAwgEACAPQADANgpAAIgJAAg");
	this.shape_502.setTransform(636.1,693,1.227,1.227);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFFFFF").s().p("AgrAQQATgOATgKQAngWAIAOQAIANglAOIgmALg");
	this.shape_503.setTransform(633,690.2,1.227,1.227);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AgfAaQALgTARgSQAYgaAJAJQAIAJgQAPQgLAJgOAJIgPARg");
	this.shape_504.setTransform(630.2,688.6,1.227,1.227);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFFFFF").s().p("Ag4AWQgJgRA4gRQAbgJAegGIAKAKQgZARgbAMQgfAQgQAAQgLAAgEgGg");
	this.shape_505.setTransform(615.4,696.7,1.227,1.227);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FFFFFF").s().p("AglAiQgNgNAlgeIAngdIAPAGQgPAhgXAWQgPAQgMAAQgHAAgGgFg");
	this.shape_506.setTransform(619.4,699.3,1.227,1.227);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFFFFF").s().p("Ag9AAQACgPA8ADQAeACAeAFIABAKQgfAGgfACIgYABQgnAAACgOg");
	this.shape_507.setTransform(613.4,693.4,1.227,1.227);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FFFFFF").s().p("AgFAMQg4gLAGgOQAFgOA2ARQAbAJAaAKIgGALQgdgCgbgGg");
	this.shape_508.setTransform(615.5,690.5,1.227,1.227);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFFFFF").s().p("AgOAIQgggUAKgMQAMgLAgAeQARANAOARIgTACQgSgIgQgLg");
	this.shape_509.setTransform(618.3,688.2,1.227,1.227);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FFFFFF").s().p("AgNAiQgBgSACgQQAEgiAMgBQANABgFAiQgCASgGASg");
	this.shape_510.setTransform(625.8,687.3,1.227,1.227);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFFFFF").s().p("AAAAQQgLgMgIgLQgLgSAJgGQALgHARAdQAPAYAEARIgMACIgOgSg");
	this.shape_511.setTransform(621.4,687.4,1.227,1.227);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFBD7").s().p("AgRAYQAFgOAHgMQAMgZAHADQALAFgcAtg");
	this.shape_512.setTransform(628.4,686.8,1.227,1.227);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFE9CE").s().p("AAAAbQgSgPgNgrIAOgCIAdAbQAcAcgLAIQgGAEgHAAQgIAAgIgHg");
	this.shape_513.setTransform(632.1,700.5,1.227,1.227);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFE9CE").s().p("AgBAIIgsgZIAPgDIAoALQAnAMgEANQgBAFgHAAQgMAAgagNg");
	this.shape_514.setTransform(636.3,698.6,1.227,1.227);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFE9CE").s().p("AACAIIgtgHIgCgHIAtgCQArgBACAJQADAJgZAAIgVgBg");
	this.shape_515.setTransform(638.2,694.9,1.227,1.227);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFE9CE").s().p("AgiAJIAfgOQAfgMAGAIQAIAKgjAIIgjAFg");
	this.shape_516.setTransform(635.9,691.1,1.227,1.227);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFE9CE").s().p("AgYAMQAKgKAMgIQAWgTAFAHQAFAHgYAQQgKAIgNAHg");
	this.shape_517.setTransform(632,689.2,1.227,1.227);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFE9CE").s().p("AgOAaQADgOAFgNQAIgcAIADQAKADgMAZQgGANgGAMg");
	this.shape_518.setTransform(628.4,687.2,1.227,1.227);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFE9CE").s().p("AgjAVQgJgJAigVIAjgTIANAFQgXAmgVALQgHADgGAAQgKAAgGgIg");
	this.shape_519.setTransform(616.8,698.6,1.227,1.227);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FFE9CE").s().p("AgvAFQAAgNAqgDQAUgCAUABIANAIQgYAHgYAGQgTAEgMAAQgQAAAAgIg");
	this.shape_520.setTransform(613,695.6,1.227,1.227);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFE9CE").s().p("AgFAHQgrgGAIgJQAFgHAmAJQAUAFATAFIgEAIQgXgBgUgEg");
	this.shape_521.setTransform(612.5,691.7,1.227,1.227);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFE9CE").s().p("AgHAFQgfgOAKgIQAFgFAbASIAcATIgHAEQgRgGgPgIg");
	this.shape_522.setTransform(615.3,688.8,1.227,1.227);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFE9CE").s().p("AgHAEQgVgWAHgFQAHgGATAYQAKAMAIANIgJAGQgLgKgKgMg");
	this.shape_523.setTransform(619.3,687.3,1.227,1.227);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FFE9CE").s().p("AABAdQgFgOgDgOQgHgbANgCQAJAAACAcQABAPgBAOg");
	this.shape_524.setTransform(623.2,686.4,1.227,1.227);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFE9CE").s().p("AgSACIADgpIAQABIAPAmQAKAlgWADIgDAAQgSAAgBgmg");
	this.shape_525.setTransform(627.3,701.6,1.227,1.227);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FFE9CE").s().p("AgUAkQgSgGAWghIAYgiIAWACQgJAmgKARQgKASgNAAQgEAAgEgCg");
	this.shape_526.setTransform(621.3,700.9,1.227,1.227);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFCC02").s().p("Ag1AQQgLgKASgPQgDAKAJAEQALAHAegHQAwgJgCgSQARAKgJALQgLAMgsAJQgQADgMAAQgSAAgHgHg");
	this.shape_527.setTransform(448.5,657.4,1.227,1.227);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FFF100").s().p("Ag4AKQAEgWAtgLQAtgLARAXQARAVhIAOQgSADgNAAQgdAAAEgRg");
	this.shape_528.setTransform(448.5,656.9,1.227,1.227);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFFFFF").s().p("AgTACIAGguIAOgCIAQAuQAKAsgYACIgBABQgWAAABgtg");
	this.shape_529.setTransform(449.8,664.1,1.227,1.227);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FFFFFF").s().p("AgFAMIgygYIAKgLIA3AKQA1ANgJARQgDAHgNAAQgPAAgcgMg");
	this.shape_530.setTransform(458.4,659.8,1.227,1.227);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFFFFF").s().p("AgBAXQgUgTgSghIAOgHIAmAaQAkAbgNANQgFAHgHAAQgLAAgOgOg");
	this.shape_531.setTransform(454.8,662.5,1.227,1.227);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FFFFFF").s().p("AABAOIg7gEIABgKIA5gLQA4gHADARQACAPg1AAIgHAAg");
	this.shape_532.setTransform(460.2,655.9,1.227,1.227);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFFFFF").s().p("AgwALIAtgVQAsgTAHAOQAHAOgwAMIgxALg");
	this.shape_533.setTransform(458.6,653.5,1.227,1.227);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FFFFFF").s().p("AglAeQAOgSAPgQQAeghAMAKQAMALgfAYQgPAMgRAKg");
	this.shape_534.setTransform(454.7,651.4,1.227,1.227);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AgXAkQAGgYAKgUQAOggAMAGQAKAFgLAUQgHAMgLANIgGALIgEAJg");
	this.shape_535.setTransform(452,650.7,1.227,1.227);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FFFFFF").s().p("AguAmQgOgNAvgiIAygfIANAHIgoArQgfAfgQAAQgFAAgEgDg");
	this.shape_536.setTransform(440,663.1,1.227,1.227);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFFFFF").s().p("AgXArQgRgIAagoIAcgoIARACQgFAlgOAbQgNAZgOAAQgEAAgEgDg");
	this.shape_537.setTransform(444.3,664.4,1.227,1.227);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FFFFFF").s().p("Ag7ASQgDgRA7gOQAcgHAegEIAFAKQgcAOgdAMQghANgQAAQgLAAgCgHg");
	this.shape_538.setTransform(437.1,660.7,1.227,1.227);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("Ag4ACQABgOA4AAQAdAAAcADIgDALQgcAGgcADQgRACgMAAQgcAAACgLg");
	this.shape_539.setTransform(438.1,657.4,1.227,1.227);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("AgLALQgmgKAHgNQAHgOAoASQAVAIATAMIgSAHQgUgDgSgFg");
	this.shape_540.setTransform(440.2,654.3,1.227,1.227);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("AgLADQgHghAMgEQAMgEAGAkQADAQAAATIgRADQgGgQgDgRg");
	this.shape_541.setTransform(447.2,651,1.227,1.227);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("AAEAPQgOgIgLgJQgQgOAHgIQAIgJAZAWQAVASAKAPIgMAFg");
	this.shape_542.setTransform(443.1,652.5,1.227,1.227);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFBD7").s().p("AgGAAQAEgcAHABQAMABgOA0IgNACQABgPADgNg");
	this.shape_543.setTransform(449.4,649.7,1.227,1.227);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFE9CE").s().p("AAIAaQgVgKgZglIANgGIAkARQAjASgIALQgHAJgKAAQgGAAgHgCg");
	this.shape_544.setTransform(456.8,661.8,1.227,1.227);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFE9CE").s().p("AAAAJIgwgKIAOgJIAogBQAqACAAAMQABAJgTAAQgMAAgSgDg");
	this.shape_545.setTransform(460.3,658.5,1.227,1.227);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFE9CE").s().p("AgsAJIAqgPQApgOAFAIQAHAMgtAJIguAHg");
	this.shape_546.setTransform(461.1,654.3,1.227,1.227);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFE9CE").s().p("AgeASQAMgNANgKQAagVAIAHQALAIgfARQgOAJgSAHg");
	this.shape_547.setTransform(457.8,651.7,1.227,1.227);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFE9CE").s().p("AgTAUIAPgYQAQgZAGAFQAHAFgRAWQgIAMgKAKg");
	this.shape_548.setTransform(453.4,650.8,1.227,1.227);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFE9CE").s().p("AgIAAQAAgcAJAAQAKABgDAbQgCAOgEAOIgIABQgCgOAAgPg");
	this.shape_549.setTransform(449.6,650.1,1.227,1.227);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFE9CE").s().p("AgaAgQgLgHAageIAbgeIAOACQgKAsgRAQQgIAJgJAAQgGAAgGgEg");
	this.shape_550.setTransform(441.7,664.5,1.227,1.227);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFE9CE").s().p("AgrATQgFgOAngOQATgIAUgFIAPAEIgqAaQgbAPgLAAQgHAAgBgEg");
	this.shape_551.setTransform(437.3,662.7,1.227,1.227);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFE9CE").s().p("AgoACQADgHAngDIAogBIgBAIQgXAFgUADQgQADgJAAQgQAAADgIg");
	this.shape_552.setTransform(435.7,659.2,1.227,1.227);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFE9CE").s().p("AgFAIQghgFAGgKQADgHAgAJIAfAKIgFAGQgSAAgQgDg");
	this.shape_553.setTransform(437.4,655.5,1.227,1.227);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FFE9CE").s().p("AgFAFQgagOAEgHQAGgIAYASQANAHAMAKIgHAIQgOgFgMgJg");
	this.shape_554.setTransform(440.7,653,1.227,1.227);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFE9CE").s().p("AgIADQgPgXAMgFQAJgEAKAbQAGANADAOIgJACQgJgLgHgNg");
	this.shape_555.setTransform(444.3,650.8,1.227,1.227);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FFE9CE").s().p("AgQAGIgJgoIAPgDIAZAgQAWAggVAKQgDABgEAAQgOAAgLggg");
	this.shape_556.setTransform(452.5,664.2,1.227,1.227);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFE9CE").s().p("AgHAqQgTgBALgoIAOgmIAUgEQADApgEAQQgGAagTAAIAAAAg");
	this.shape_557.setTransform(446.5,665.2,1.227,1.227);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFCC02").s().p("Ag1AQQgLgKASgPQgDAKAJAEQALAHAegHQAwgIgCgSQARAJgJALQgLANgrAIQgQACgNAAQgSAAgHgGg");
	this.shape_558.setTransform(295.4,702.5,1.227,1.227);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFF100").s().p("Ag5AKQAFgWAsgLQAugLAQAXQARAVhHAOQgSADgNAAQgcAAACgRg");
	this.shape_559.setTransform(295.4,701.9,1.227,1.227);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("AgTACIAGguIAOgCIAPAuQALAsgYACIgBABQgWAAABgtg");
	this.shape_560.setTransform(296.8,709.1,1.227,1.227);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("AgFAMIgygYIAKgLIA3AKQA1ANgJARQgDAHgNAAQgPAAgcgMg");
	this.shape_561.setTransform(305.4,704.8,1.227,1.227);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FFFFFF").s().p("AgBAXQgUgTgSggIAOgIIAmAaQAkAbgNAOQgFAGgHAAQgLAAgOgOg");
	this.shape_562.setTransform(301.7,707.6,1.227,1.227);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFFFFF").s().p("AABAOIg7gEIAAgKIA5gLQA5gHADARQACAPg1AAIgHAAg");
	this.shape_563.setTransform(307.1,701.1,1.227,1.227);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FFFFFF").s().p("AgwALIAsgVQAtgTAHAOQAHAOgwAMIgxALg");
	this.shape_564.setTransform(305.5,698.5,1.227,1.227);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AglAeQAOgSAPgQQAeghAMAKQAMALgfAYQgPAMgSAKg");
	this.shape_565.setTransform(301.6,696.4,1.227,1.227);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFFFFF").s().p("AgXAkQAFgWALgWQAOggAMAGQAJAFgKAUQgHAMgLANIgKAUg");
	this.shape_566.setTransform(298.8,695.9,1.227,1.227);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FFFFFF").s().p("AguAmQgPgNAwgiIAygfIANAHIgoArQgfAfgRAAQgFAAgDgDg");
	this.shape_567.setTransform(286.8,708.1,1.227,1.227);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FFFFFF").s().p("AgXArQgRgIAagoIAdgoIAQACQgFAlgOAbQgNAZgOAAQgEAAgEgDg");
	this.shape_568.setTransform(291.2,709.4,1.227,1.227);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FFFFFF").s().p("Ag7ASQgDgRA7gOQAcgHAegEIAFALQgcAOgdALQghANgQAAQgLAAgCgHg");
	this.shape_569.setTransform(284,705.7,1.227,1.227);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("Ag4ACQABgOA4AAQAdAAAcADIgCALQgdAGgbADIgcACQgdAAABgLg");
	this.shape_570.setTransform(285,702.5,1.227,1.227);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFFFFF").s().p("AgMALQglgKAHgNQAHgOAoASQAUAIATAMIgRAHQgVgDgSgFg");
	this.shape_571.setTransform(287.1,699.3,1.227,1.227);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FFFFFF").s().p("AgLADQgHghAMgEQAMgEAGAkQADAQAAATIgRADQgGgQgDgRg");
	this.shape_572.setTransform(294.1,696.2,1.227,1.227);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFFFFF").s().p("AAEAPQgOgHgMgKQgQgOAIgIQAIgKAZAYQAVARAKAQIgNAFg");
	this.shape_573.setTransform(290,697.5,1.227,1.227);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFBD7").s().p("AgGAAQAFgcAGABQAMABgOA1IgNABQABgOADgOg");
	this.shape_574.setTransform(296.3,694.8,1.227,1.227);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFE9CE").s().p("AAIAaQgVgKgZglIANgGIAjARQAjASgHALQgHAJgKAAQgGAAgHgCg");
	this.shape_575.setTransform(303.8,706.9,1.227,1.227);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFE9CE").s().p("AAAAJIgwgKIAOgJIAogBQAqABABANQAAAJgUAAQgLAAgSgDg");
	this.shape_576.setTransform(307.3,703.6,1.227,1.227);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFE9CE").s().p("AgsAJIAqgPQAqgOAEAIQAHAMgtAJIguAHg");
	this.shape_577.setTransform(307.9,699.3,1.227,1.227);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFE9CE").s().p("AgeASQAMgNANgKQAagVAIAHQAKAIgeARQgPAJgRAHg");
	this.shape_578.setTransform(304.7,696.9,1.227,1.227);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFE9CE").s().p("AgTAUIAPgYQAPgZAHAFQAHAFgRAWQgIAMgKAKg");
	this.shape_579.setTransform(300.3,695.8,1.227,1.227);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFE9CE").s().p("AgHAAQAAgcAIAAQAKABgDAbQgCAOgEAOIgIABQgBgOAAgPg");
	this.shape_580.setTransform(296.6,695.1,1.227,1.227);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFE9CE").s().p("AgaAgQgKgHAZgeIAbgdIAOABQgJAsgSAQQgIAIgJAAQgGAAgGgDg");
	this.shape_581.setTransform(288.6,709.5,1.227,1.227);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FFE9CE").s().p("AgrATQgFgOAngPQASgHAUgGIAPAFIgpAZQgbARgLAAQgGAAgCgFg");
	this.shape_582.setTransform(284.2,707.8,1.227,1.227);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFE9CE").s().p("AgoACQADgHAngDIAogBIgBAIQgXAFgUADQgQADgJAAQgQAAADgIg");
	this.shape_583.setTransform(282.6,704.3,1.227,1.227);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFE9CE").s().p("AgFAIQgigFAGgKQAEgHAfAJIAgAKIgFAGQgSAAgQgDg");
	this.shape_584.setTransform(284.5,700.5,1.227,1.227);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFE9CE").s().p("AgFAFQgagOAEgHQAFgIAZASQANAHAMALIgHAIQgOgHgMgIg");
	this.shape_585.setTransform(287.7,698,1.227,1.227);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFE9CE").s().p("AgIADQgPgXANgFQAIgEAKAbQAGANADAOIgIACQgJgLgIgNg");
	this.shape_586.setTransform(291.2,696.1,1.227,1.227);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFE9CE").s().p("AgQAGIgJgpIAPgCIAZAgQAWAggUAKQgEABgEAAQgOAAgLggg");
	this.shape_587.setTransform(299.4,709.3,1.227,1.227);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFE9CE").s().p("AgHAqQgTgBALgoIAOgmIAUgEQADAogEARQgGAagSAAIgBAAg");
	this.shape_588.setTransform(293.4,710.2,1.227,1.227);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFCC02").s().p("Ag3AGQgJgMAVgMQgLAXA2AAQAwgBACgRQAPAMgLAIQgOALgqAAQgsAAgJgMg");
	this.shape_589.setTransform(88.5,693.7,1.227,1.227);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFF100").s().p("Ag5ABQAJgWAugCQAugDANAaQAMAYhHAAQg/AAAIgXg");
	this.shape_590.setTransform(88.5,693,1.227,1.227);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FFFFFF").s().p("AgBAuQgYgDAJgsIAPgsIAOAAIAHAuQABAtgVAAIgBAAg");
	this.shape_591.setTransform(88.2,700.5,1.227,1.227);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("AgHAMIgtgiIANgJIAzAUQAyAXgLAPQgEAFgIAAQgPAAgfgUg");
	this.shape_592.setTransform(97.7,697.8,1.227,1.227);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FFFFFF").s().p("AgFAWQgRgWgLgjIAPgEIAgAgQAfAhgPALQgGADgFAAQgMAAgMgSg");
	this.shape_593.setTransform(93.8,699.8,1.227,1.227);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FFFFFF").s().p("AAAALIg6gOIADgLIA5AAQA5ADAAAQQAAAKgVAAQgPAAgXgEg");
	this.shape_594.setTransform(100.2,694.8,1.227,1.227);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FFFFFF").s().p("AgyACIAwgMQAwgKAEAPQAFANgyAFIgyACg");
	this.shape_595.setTransform(99,691.4,1.227,1.227);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("AgpAWQARgQASgMQAkgbAKANQAKAMgkASQgQAJgUAGg");
	this.shape_596.setTransform(95.6,689,1.227,1.227);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFFFFF").s().p("AgcAeQAHgTARgVQATgdALAIQANAMgpAiIgNASg");
	this.shape_597.setTransform(92.9,687.7,1.227,1.227);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("Ag0AcQgMgPA1gYQAagMAcgKIANAJIgwAjQghAXgQAAQgIAAgDgGg");
	this.shape_598.setTransform(79.1,697.7,1.227,1.227);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FFFFFF").s().p("AggAmQgPgLAigiIAjgiIAPAFQgKAigUAYQgPAUgNAAQgGAAgFgEg");
	this.shape_599.setTransform(83,699.6,1.227,1.227);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FFFFFF").s().p("Ag9AGQgBgQA9gDQAdgCAfABIADALQgfAIgfAGQgYAFgQAAQgVAAAAgKg");
	this.shape_600.setTransform(76.7,694.8,1.227,1.227);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FFFFFF").s().p("AgDANQg5gFAEgNQAEgPA3ALQAcAFAbAHIgEALIgRABQgVAAgTgCg");
	this.shape_601.setTransform(78.3,691.5,1.227,1.227);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FFFFFF").s().p("AgNAKQgjgRAJgMQAKgNAkAaQASALARAPIgSAFQgUgGgRgJg");
	this.shape_602.setTransform(80.8,689,1.227,1.227);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FFFFFF").s().p("AgIAkQgDgRgBgSQAAghAMgCQANgBAAAjQgBASgDASg");
	this.shape_603.setTransform(88.3,687,1.227,1.227);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FFFFFF").s().p("AABAQQgNgLgIgKQgOgRAJgGQAKgJAVAcQAQAUAIASIgNACg");
	this.shape_604.setTransform(84,687.9,1.227,1.227);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFFBD7").s().p("AgOAaQADgOAFgNQAJgbAIADQAMACgXAxg");
	this.shape_605.setTransform(90.7,686.3,1.227,1.227);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FFE9CE").s().p("AADAaQgUgNgRgpIANgDIAgAYQAfAYgJAJQgHAGgHAAQgIAAgIgGg");
	this.shape_606.setTransform(96,699.4,1.227,1.227);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFE9CE").s().p("AgBAJIgtgTIAOgHIAoAHQApAJgCANQgBAGgKAAQgMAAgZgJg");
	this.shape_607.setTransform(99.9,697,1.227,1.227);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FFE9CE").s().p("AgqAIIgDgIIAsgGQAsgGACAIQAFANguABg");
	this.shape_608.setTransform(101.4,692.9,1.227,1.227);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFE9CE").s().p("AghANQAOgKAPgHQAdgRAHAIQAJAKghAKIgjAKg");
	this.shape_609.setTransform(98.7,689.8,1.227,1.227);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FFE9CE").s().p("AgWAQIATgVQATgVAGAGQAGAGgVATQgKAJgMAJg");
	this.shape_610.setTransform(94.6,688,1.227,1.227);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FFE9CE").s().p("AgLAcQABgPADgOQAGgdAIADQAKACgJAaQgEAOgGANg");
	this.shape_611.setTransform(90.8,686.5,1.227,1.227);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FFE9CE").s().p("AggAZQgKgIAggZIAggXIANACQgRAqgUANQgIAGgHAAQgIAAgHgHg");
	this.shape_612.setTransform(80.5,699.3,1.227,1.227);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FFE9CE").s().p("AguAKQgBgMApgIQATgEAVgCIANAGQgWAKgYAIQgYAJgMAAQgKAAgBgHg");
	this.shape_613.setTransform(76.5,696.8,1.227,1.227);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FFE9CE").s().p("AgEAJQgsgBAHgLQAFgHAnAEIAnAGIgDAHQgSACgRAAIgIAAg");
	this.shape_614.setTransform(75.5,692.9,1.227,1.227);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FFE9CE").s().p("AgGAGQghgKAIgJQAGgGAdAPIAdAQIgGAEQgSgEgPgGg");
	this.shape_615.setTransform(77.9,689.7,1.227,1.227);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FFE9CE").s().p("AgGAEQgXgTAGgGQAGgGAVAVQALAKAKAMIgHAHIgYgTg");
	this.shape_616.setTransform(81.7,687.9,1.227,1.227);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FFE9CE").s().p("AAEAcQgGgNgGgNQgKgbANgCQAJgCAFAdQADAOABAOg");
	this.shape_617.setTransform(85.5,686.4,1.227,1.227);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FFE9CE").s().p("AgSAEIgCgqIAQAAIATAjQAPAkgWAGIgFAAQgQAAgFgjg");
	this.shape_618.setTransform(91.4,701.1,1.227,1.227);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FFE9CE").s().p("AgPAmQgTgEASgkIAUgkIAWAAQgFAngHARQgJAVgOAAIgGgBg");
	this.shape_619.setTransform(85.2,701,1.227,1.227);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#8F8070").s().p("AhzOUQgWj1AtjfQAfiaA4g4QAXgXAEgKQAJgVgGgwQgKhQgegSQgSgJgJgGQgPgNgLgXQgVgzAGi8QALjoAEhvQAFiMAmhvQAxh7AchJQAohnAfiYQgKBKgHCHQgMB4gqBdQg1B3gRDmQgKB7AADiQAABzA4AjQAdASAdgGIAACsIgQA8QgZBFgpAsQgvAzgQCmQgQCaAGE6QAECVBBCFQhah6gZkDg");
	this.shape_620.setTransform(12.2,371.2,1.227,1.227);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#B5D343").s().p("AiLIvQBBovCAloQAohwAqhPIAFgHQhDCPhFG9QgpESgbD/g");
	this.shape_621.setTransform(828.3,672.1,1.227,1.227);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#B5D343").s().p("AARndQAtiDA0hMQAagnAQgMQiUCigZKXQgOFMAQErIiMAPQAbscCRmhg");
	this.shape_622.setTransform(852.4,654.5,1.227,1.227);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#9CCB48").s().p("ABnIMQgWmNh4lsQgnhygrhhIgkhKQC0CpBXHHQAqDjAGDDg");
	this.shape_623.setTransform(1086.2,680.6,1.227,1.227);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#9CCB48").s().p("AhQI1QAAm0BWmYQAbiBAhhuIAPguQgxCtggHRQgREEgGDng");
	this.shape_624.setTransform(1098.7,675.5,1.227,1.227);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#89C43F").s().p("ABaGEQAGg0ADhVQAEiogRieQgSifh3hcQgmgdgrgUIgkgMQEPAEA1GBQAaDCgcDAg");
	this.shape_625.setTransform(1093.8,694.1,1.227,1.227);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#B5D343").s().p("AjlHvQAdi9BIjaQCQmzDWiTQgMAKgUAbQgrA3gtBaQiSEeiBIJg");
	this.shape_626.setTransform(1071,678.8,1.227,1.227);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#B5D343").s().p("AAXIgQAVkSgHkPQgNofiFALIAUgJQAZgGAXANQBJAsAcDhQAcDhAOE7QAHCeABBxg");
	this.shape_627.setTransform(1004.1,674.4,1.227,1.227);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#B5D343").s().p("ABOJIQgakAgqkRQhEm6hCiRIADAGQAqBOAoBxQCBFmBCIxgAibpHQAQASAPAhg");
	this.shape_628.setTransform(926.4,673.4,1.227,1.227);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#B5D343").s().p("Ai1HBQARiuA1jJQBrmRC6iJQgQAVgaAoQgyBRgrBjQiGE6gFF2g");
	this.shape_629.setTransform(989.8,689,1.227,1.227);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#B5D343").s().p("AAKLKQAQkrgNlMQgZp7iJiwIAeAkQA0BNAtCDQCRGiAbMbg");
	this.shape_630.setTransform(905.1,659.5,1.227,1.227);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#9CCB48").s().p("ABJJ0QAGkVgbkoQgzpDibhnIAXAOQAkAdAiA0QBtCmAtFNQAuFNAMDFQAGBjgDAgg");
	this.shape_631.setTransform(1067.3,665.9,1.227,1.227);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#9CCB48").s().p("AgmELQAOmlAvm9IgEHIQACH0AWDiIhUARQgDh6AGjTg");
	this.shape_632.setTransform(963,673.3,1.227,1.227);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#9CCB48").s().p("AidILQAGjCArjjQBVnHC2ipIglBKQgrBhgmByQh5FsgVGMg");
	this.shape_633.setTransform(1045.4,678.8,1.227,1.227);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#9CCB48").s().p("AAXIyQgGjngRkFQgfnIgwivIANApQAhBtAbCAQBWGZAAG0g");
	this.shape_634.setTransform(1033.1,674.1,1.227,1.227);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#9CCB48").s().p("AhgHRQgQihARjEQAimICmi0IgeBBQgkBWgaBkQhUFCAlFkg");
	this.shape_635.setTransform(908.6,686,1.227,1.227);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#9CCB48").s().p("AisG4QgciRAei3QA+lsEni7QhWBDhQCQQifEeAfF+g");
	this.shape_636.setTransform(1021.4,685.9,1.227,1.227);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#9CCB48").s().p("ABNJ0QADjMgakEQg1oHiRkQIAqBDQA0BcArB9QCMGOAMI9g");
	this.shape_637.setTransform(980.9,667.9,1.227,1.227);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#89C43F").s().p("AAiIwQgpjegnj7QhMn1AUiRIA6GAQBJG6BOElg");
	this.shape_638.setTransform(1051.2,671.3,1.227,1.227);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#89C43F").s().p("AiZGEQgcjAAajBQA0mCEQgEQg5AOg8AvQh3BcgSCfQgSCeAFCpQACBUAGA0g");
	this.shape_639.setTransform(1037.9,692.3,1.227,1.227);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#89C43F").s().p("ABOHhQgYi9gpjWQhTmthViBIAoA5QAxBNArBiQCLE7AoGeg");
	this.shape_640.setTransform(971.5,682.3,1.227,1.227);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#89C43F").s().p("AAQLkQAFk7gQlZQgXoghBjOQAqBtAkCTQB0HeAKK0gAhVqiIgkhRQAVAfARA2IgCgEg");
	this.shape_641.setTransform(941.3,652.1,1.227,1.227);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#89C43F").s().p("AgnKPQgCj7AJkhQASpBA3jAIgGHjQgEIaAKEgg");
	this.shape_642.setTransform(926.4,666.6,1.227,1.227);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#76BF45").s().p("Aj8J+QAmkgBSkvQCjpfDdhOQgUAOgfAlQg/BKg6B1Qi5F1hCKVg");
	this.shape_643.setTransform(1092.7,661.2,1.227,1.227);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#9CCB48").s().p("AgqJHQAXjiABn0IgEnIQAvG9AOGlQAGDTgDB6g");
	this.shape_644.setTransform(793.7,669,1.227,1.227);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#89C43F").s().p("AAHmeQAjiTAqhtQARg2AVgfIgkBRIgCAEQhBDOgXIgQgPFZADE7IhoAQQAKq0B1neg");
	this.shape_645.setTransform(815.4,648,1.227,1.227);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#89C43F").s().p("AgnKPQAJkggDoaIgGnjQA2DAASJBQAJEhgCD7g");
	this.shape_646.setTransform(830.3,662.3,1.227,1.227);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#B5D343").s().p("AhlETQAOk8AcjhQAcjhBJgrQAlgWAfAXQiFgLgNIgQgGEPAUESIhXABQABhxAHieg");
	this.shape_647.setTransform(881.4,673.7,1.227,1.227);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#9CCB48").s().p("ABmILQgVmMh5lsQgmhygshhIgkhKQC1CpBWHHQArDjAHDCg");
	this.shape_648.setTransform(840.1,678.2,1.227,1.227);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#9CCB48").s().p("ABsG4QAfl+ifkeQgyhag/hGIg1gzQEnC6A9FtQAfC3gcCRg");
	this.shape_649.setTransform(864.2,685.5,1.227,1.227);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#9CCB48").s().p("AiRJ1QANo+CLmOQAsh8A0hdQAZguASgWQiSESg1IGQgaEDAEDOg");
	this.shape_650.setTransform(904.6,667.3,1.227,1.227);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#89C43F").s().p("ABbGEQAGg0AChUQAFipgSieQgSifh3hcQgmgdgrgUIgkgMQEQAEA0GCQAbDBgdDAg");
	this.shape_651.setTransform(847.6,691.8,1.227,1.227);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#B5D343").s().p("AhkETQANk8AbjhQAcjhBKgrQAkgWAfAXQiEgLgNIgQgGEPATESIhVABQABhxAHieg");
	this.shape_652.setTransform(773.3,673.7,1.227,1.227);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#B5D343").s().p("AgvjfQgqhjgyhQIgqg+QC6CJBrGSQA2DJAQCtIhZAQQgFl2iHk6g");
	this.shape_653.setTransform(787.6,688.3,1.227,1.227);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#9CCB48").s().p("ABnILQgWmMh5lsQgmhygrhhIgkhKQC0CpBXHHQAqDjAGDCg");
	this.shape_654.setTransform(732,678.2,1.227,1.227);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#9CCB48").s().p("AhPIxQAAm0BWmYQAbiAAhhtIANgoQgwCvgfHHQgREFgGDmg");
	this.shape_655.setTransform(744.3,673.5,1.227,1.227);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#9CCB48").s().p("ABsG4QAfl+ifkeQgyhag/hGIg1gzQEnC6A+FtQAfC3gdCRg");
	this.shape_656.setTransform(755.9,685.5,1.227,1.227);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#9CCB48").s().p("AiRJ1QANo+CLmOQAth8AzhdQAZguASgWQiSESg0IGQgaEDACDOg");
	this.shape_657.setTransform(796.5,667.3,1.227,1.227);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#89C43F").s().p("ABaGEQAGg0ADhUQAFipgSieQgSifh3hcQgmgdgrgUIgkgMQEPAEA1GCQAaDBgcDAg");
	this.shape_658.setTransform(739.5,691.8,1.227,1.227);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#89C43F").s().p("AiaHhQAomeCKk6QAshjAwhNQAYgmAPgTQhVCBhSGsQgqDXgYC9g");
	this.shape_659.setTransform(805.9,681.7,1.227,1.227);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#B5D343").s().p("AibJIQBCoxCBlmQAohxAqhOIADgGQAPghAQgSIgfAzQhCCQhEG7QgqERgaEAg");
	this.shape_660.setTransform(450.2,664.6,1.227,1.227);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#B5D343").s().p("AAXnlQAuiCA0hNIAdgjQiICxgZJ4QgNFMAQErIiNAPQAcsbCQmig");
	this.shape_661.setTransform(471.5,650.9,1.227,1.227);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#9CCB48").s().p("ABnILQgVmMh5lsQgnhygrhhIgkhKQC0CpBWHHQArDkAHDBg");
	this.shape_662.setTransform(706.2,676,1.227,1.227);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#9CCB48").s().p("AhPIxQAAm0BWmYQAbiAAhhtIANgoQgwCvgfHHQgREFgGDmg");
	this.shape_663.setTransform(718.6,671.3,1.227,1.227);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#89C43F").s().p("ABaGEQAGg0ADhUQAFipgSieQgSifh3hdQgmgdgrgSIgkgNQEPAEA1GCQAaDBgcDAg");
	this.shape_664.setTransform(713.8,689.7,1.227,1.227);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#B5D343").s().p("AjlHvQAdi9BIjaQCPmzDXiTQgMAKgVAbQgpA3guBaQiREeiCIJg");
	this.shape_665.setTransform(691.1,674.3,1.227,1.227);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#B5D343").s().p("AAXIgQAUkSgGkPQgNofiFALIAUgJQAZgGAYANQBIAsAcDhQAcDgAOE8QAHCeAABxg");
	this.shape_666.setTransform(624.1,669.9,1.227,1.227);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#B5D343").s().p("ABPJIQgakAgrkRQhEm6hCiRIAEAGQApBOApBxQCAFmBBIxgAiapHQAPASAPAhg");
	this.shape_667.setTransform(546.5,668.9,1.227,1.227);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#B5D343").s().p("Ai1HBQAQitA2jJQBrmSC6iJQgRAVgZAoQgyBRgrBjQiGE6gFF2g");
	this.shape_668.setTransform(609.9,684.4,1.227,1.227);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#B5D343").s().p("AAJLJQARkrgOlMQgZp4iHixIAdAjQA0BMAtCDQCQGiAcMbg");
	this.shape_669.setTransform(525.1,655.1,1.227,1.227);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#9CCB48").s().p("ABJJ0QAGkVgbkoQgzpDibhnIAXAOQAkAdAjA0QBsCmAtFNQAuFNAMDFQAGBjgDAgg");
	this.shape_670.setTransform(687.2,661.4,1.227,1.227);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#9CCB48").s().p("AgmELQAOmmAvm8IgEHIQABH0AXDiIhUARQgDh6AGjTg");
	this.shape_671.setTransform(583,668.9,1.227,1.227);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#9CCB48").s().p("AieILQAHjCArjjQBWnHC1ipIgkBKQgsBhgmByQh5FsgVGMg");
	this.shape_672.setTransform(665.4,674.3,1.227,1.227);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#9CCB48").s().p("AAXIyQgGjmgRkFQgfnKgwivIANAqQAhBuAbCAQBWGYAAG0g");
	this.shape_673.setTransform(653.1,669.5,1.227,1.227);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#9CCB48").s().p("AhgHRQgQihARjEQAimICmi0IgeBBQgjBWgbBkQhUFCAlFkg");
	this.shape_674.setTransform(528.5,681.5,1.227,1.227);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#9CCB48").s().p("AisG4QgciRAfi3QA9ltEni6QhWBDhQCQQifEeAfF+g");
	this.shape_675.setTransform(641.4,681.6,1.227,1.227);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#9CCB48").s().p("ABMJ0QAEjMgakFQg1oFiRkSIAqBEQA0BcArB9QCMGPAMI8g");
	this.shape_676.setTransform(600.9,663.4,1.227,1.227);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#89C43F").s().p("AAiIwQgpjegnj7QhMn2AUiQIA6GAQBJG6BOElg");
	this.shape_677.setTransform(671.1,666.9,1.227,1.227);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#89C43F").s().p("AiZGFQgcjBAajBQA0mCEQgFQg5APg8AuQh3BdgSCfQgSCeAFCoQADBVAGA1g");
	this.shape_678.setTransform(657.8,687.9,1.227,1.227);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#89C43F").s().p("ABOHhQgYi9gqjXQhRmshWiBIAoA5QAwBNAsBiQCKE7ApGeg");
	this.shape_679.setTransform(591.5,677.8,1.227,1.227);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#89C43F").s().p("AAQLkQAEk7gPlZQgWodhBjPQApBtAkCRQB0HeAKK0gAhVqiIgjhRQAUAgASA3IgDgGg");
	this.shape_680.setTransform(561.2,647.8,1.227,1.227);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#89C43F").s().p("AgnKPQgCj7AJkhQASpBA3jAIgGHiQgEIbAKEgg");
	this.shape_681.setTransform(546.5,662.2,1.227,1.227);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#76BF45").s().p("Aj7J+QAlkgBSkvQCipeDfhOQgUANggAlQg/BKg7B1Qi4F2hCKUg");
	this.shape_682.setTransform(712.8,656.7,1.227,1.227);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#9CCB48").s().p("AgqJHQAXjiABn0IgEnIQAvG8AOGmQAGDTgDB6g");
	this.shape_683.setTransform(413.7,664.6,1.227,1.227);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#89C43F").s().p("AAGmeQAkiTAqhtQARg2AUgfIgjBRIgCAEQhBDOgXIgQgPFZAEE7IhpAQQAKq0B0neg");
	this.shape_684.setTransform(435.3,643.5,1.227,1.227);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#89C43F").s().p("AgoKPQAKkggEobIgGniQA3DAASJBQAJEhgCD7g");
	this.shape_685.setTransform(450.2,658,1.227,1.227);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#B5D343").s().p("AhlESQAOk8AcjhQAbjgBKgsQAXgNAYAGQANADAHAGQiEgMgNIgQgHEPAVESIhXABQAChxAGieg");
	this.shape_686.setTransform(501.5,669.4,1.227,1.227);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#9CCB48").s().p("ABmIMQgUmOh6lrQgmhygshhIgkhKQC2CpBVHHQArDjAGDDg");
	this.shape_687.setTransform(460.2,673.8,1.227,1.227);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#9CCB48").s().p("ABsG4QAfl+ifkeQgyhag/hGIg1gzQEnC7A+FsQAfC3gdCRg");
	this.shape_688.setTransform(484.1,681,1.227,1.227);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#9CCB48").s().p("AiRJ0QANo9CMmOQArh8A0hdIArhDQiSEQg0IHQgbEDADDNg");
	this.shape_689.setTransform(524.7,662.9,1.227,1.227);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#89C43F").s().p("ABaGEQAGg0ADhUQAEipgRieQgSifh3hcQgmgdgrgTIgkgNQEPAEA1GCQAaDBgcDAg");
	this.shape_690.setTransform(467.7,687.4,1.227,1.227);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#B5D343").s().p("AhkESQANk8AbjhQAcjgBJgsQAXgNAZAGQAMADAIAGQiEgMgNIgQgGEPAUESIhWABQABhxAHieg");
	this.shape_691.setTransform(393.4,669.4,1.227,1.227);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#B5D343").s().p("AgvjfQgqhjgyhRIgqg9QC6CJBrGRQA2DJAQCuIhZAQQgFl2iHk6g");
	this.shape_692.setTransform(407.6,683.9,1.227,1.227);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#9CCB48").s().p("ABnIMQgVmOh6lrQgmhygshhIgkhKQC1CpBWHHQArDjAHDDg");
	this.shape_693.setTransform(352.1,673.8,1.227,1.227);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#9CCB48").s().p("AhPIxQAAm1BWmYQAbiAAhhuIANgmQgxCvgeHGQgREFgGDng");
	this.shape_694.setTransform(364.4,669.2,1.227,1.227);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#9CCB48").s().p("ABsG4QAfl+ifkeQgyhag/hGIg1gzQEnC7A9FsQAfC3gcCRg");
	this.shape_695.setTransform(376,681,1.227,1.227);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#9CCB48").s().p("AiRJ0QANo9CLmOQAsh8A0hdIAqhDQiREQg1IHQgZEDADDNg");
	this.shape_696.setTransform(416.5,662.9,1.227,1.227);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#89C43F").s().p("ABaGEQAGg0AChUQAFipgRieQgSifh3hcQgmgdgrgTIgkgNQEPAEA1GCQAaDBgcDAg");
	this.shape_697.setTransform(359.6,687.4,1.227,1.227);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#89C43F").s().p("AibHhQAomeCLk6QAshjAwhNIAog5QhWCBhRGsQgqDXgYC9g");
	this.shape_698.setTransform(425.9,677.3,1.227,1.227);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#B5D343").s().p("AjmHvQAei9BIjaQCQmzDWiTIggAlQgrA4gtBZQiSEeiBIJg");
	this.shape_699.setTransform(336.8,672.1,1.227,1.227);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#B5D343").s().p("AAXIgQAVkSgGkPQgNofiGALIAVgJQAYgGAYANQBIAsAcDhQAcDhAOE7QAGCeACBxg");
	this.shape_700.setTransform(269.9,667.7,1.227,1.227);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#B5D343").s().p("ABPJIQgakAgrkRQhEm6hCiRIAEAGQApBOApBxQCAFmBBIxgAiapHQAPASAPAhg");
	this.shape_701.setTransform(192.2,666.7,1.227,1.227);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#B5D343").s().p("Ai1HBQARiuA1jJQBrmRC6iJIgqA9QgyBRgqBjQiHE6gFF2g");
	this.shape_702.setTransform(255.5,682.2,1.227,1.227);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#B5D343").s().p("AAJLJQAQkrgNlMQgZp4iIixIAdAjQA0BNAuCCQCQGiAcMbg");
	this.shape_703.setTransform(171,652.9,1.227,1.227);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#9CCB48").s().p("ABIJ0QAGkVgakoQg0pDiahnIAXAOQAkAdAiA0QBtCmAtFNQAuFNAMDFQAGBjgDAgg");
	this.shape_704.setTransform(333.1,659.2,1.227,1.227);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#9CCB48").s().p("AgmELQAOmlAvm9IgEHIQABH0AXDiIhUARQgDh6AGjTg");
	this.shape_705.setTransform(228.9,666.5,1.227,1.227);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#9CCB48").s().p("AieILQAHjCArjjQBWnHC1ipIgkBKQgsBhgmByQh5FsgVGMg");
	this.shape_706.setTransform(311.2,672.1,1.227,1.227);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#9CCB48").s().p("AAXIyQgGjngRkFQgenHgxivIANAnQAhBuAbCAQBWGYAAG1g");
	this.shape_707.setTransform(298.9,667.4,1.227,1.227);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#9CCB48").s().p("AhgHRQgQihARjEQAimICmi0IgeBBQgkBWgaBkQhUFCAlFkg");
	this.shape_708.setTransform(174.3,679.2,1.227,1.227);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#9CCB48").s().p("AisG4QgciRAei3QA+ltEni6Ig1AzQg/BGgyBaQifEeAfF+g");
	this.shape_709.setTransform(287.3,679.4,1.227,1.227);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#9CCB48").s().p("ABMJ0QADjMgakFQg1oFiRkSIArBEQAzBcAtB9QCLGPANI8g");
	this.shape_710.setTransform(246.7,661.2,1.227,1.227);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#89C43F").s().p("AAjIwQgqjegmj8QhNn1AUiQIA6GAQBJG6BOElg");
	this.shape_711.setTransform(316.9,664.7,1.227,1.227);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#89C43F").s().p("AiZGFQgcjBAajBQA0mCEQgFQgOAEgWAKQgrASgmAdQh3BdgSCfQgSCeAFCpQADBUAGA1g");
	this.shape_712.setTransform(303.7,685.7,1.227,1.227);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#89C43F").s().p("ABPHhQgZi9gqjXQhSmshUiBIAnA5QAwBNAsBiQCKE7AoGeg");
	this.shape_713.setTransform(237.4,675.6,1.227,1.227);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#89C43F").s().p("AARLkQADk7gOlZQgXodhBjOQApBsAkCRQB0HeALK0gAhVqiIgjhRQAUAgASA4IgDgHg");
	this.shape_714.setTransform(207,645.5,1.227,1.227);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#89C43F").s().p("AgoKPQgCj7AJkhQATpBA3jAIgGHjQgFIaALEgg");
	this.shape_715.setTransform(192.2,659.9,1.227,1.227);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#76BF45").s().p("Aj8J+QAmkgBSkvQCjpeDdhOIgzAyQg/BKg6B1Qi5F2hCKUg");
	this.shape_716.setTransform(358.5,654.5,1.227,1.227);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#B5D343").s().p("AjmHvQAei9BIjaQCQmzDXiTIghAlQgqA3guBaQiSEeiAIJg");
	this.shape_717.setTransform(148.4,669.9,1.227,1.227);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#B5D343").s().p("AAYIgQAUkSgHkPQgNofiFALIAUgJQAZgGAXANQBJAsAcDhQAcDhAOE7QAHCeABBxg");
	this.shape_718.setTransform(81.3,665.4,1.227,1.227);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#B5D343").s().p("ABPJIQgakAgrkRQhEm7hCiQIADAGQAqBOAoBxQCBFmBBIxgAiapHQAPASAPAhg");
	this.shape_719.setTransform(3.6,664.5,1.227,1.227);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#B5D343").s().p("Ai1HBQAQiuA2jJQBrmRC6iJIgqA9QgyBRgqBjQiHE6gFF2g");
	this.shape_720.setTransform(67.2,680,1.227,1.227);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#B5D343").s().p("AAJLJQAQkrgNlMQgZp4iIixIAdAjQA0BMAuCDQCQGiAbMbg");
	this.shape_721.setTransform(-17.6,650.8,1.227,1.227);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#9CCB48").s().p("ABIJ0QAGkVgakoQg0pDiahnIAXAOQAkAdAiA0QBtCmAtFNQAuFNAMDFQAGBjgDAgg");
	this.shape_722.setTransform(144.5,657,1.227,1.227);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#9CCB48").s().p("AgmELQAOmlAvm9IgEHIQABH0AXDiIhUARQgDh6AGjTg");
	this.shape_723.setTransform(40.3,664.5,1.227,1.227);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#9CCB48").s().p("AidILQAGjBArjkQBVnHC2ipIgkBKQgsBhgmByQh5FsgVGMg");
	this.shape_724.setTransform(122.7,669.9,1.227,1.227);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#9CCB48").s().p("AAXIyQgGjngRkFQgfnIgwivIANApQAhBtAbCAQBWGZAAG0g");
	this.shape_725.setTransform(110.4,665.1,1.227,1.227);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#9CCB48").s().p("AhgHRQgQihARjEQAimICmi0IgeBBQgkBWgaBkQhUFCAlFkg");
	this.shape_726.setTransform(-14.2,677,1.227,1.227);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#9CCB48").s().p("AisG4QgciRAfi3QA9lsEni7Ig1AzQg/BGgyBaQifEeAfF+g");
	this.shape_727.setTransform(98.7,677.2,1.227,1.227);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#9CCB48").s().p("ABMJ0QADjNgZkDQg1oHiRkQIAqBDQA0BdAsB8QCLGOANI9g");
	this.shape_728.setTransform(58.1,659,1.227,1.227);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#89C43F").s().p("AAiIwQgpjegnj8QhMn1AUiQIA6GAQBJG6BOElg");
	this.shape_729.setTransform(128.4,662.5,1.227,1.227);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#89C43F").s().p("AiZGEQgcjAAajBQA0mCEQgEQgOADgWAKQgrASglAdQh4BdgSCfQgSCeAFCpQADBUAGA0g");
	this.shape_730.setTransform(115.1,683.5,1.227,1.227);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#89C43F").s().p("ABPHhQgZi9gpjXQhTmshUiBIAnA5QAwBNAsBjQCKE6AoGeg");
	this.shape_731.setTransform(48.8,673.4,1.227,1.227);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#89C43F").s().p("AARLkQADk7gPlZQgXoghBjOQAqBtAjCTQB1HeAKK0gAhVqiIgkhRQAVAfARA2IgCgEg");
	this.shape_732.setTransform(18.5,643.3,1.227,1.227);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#89C43F").s().p("AgnKPQgCj7AJkhQASpBA3jAIgGHiQgEIbAKEgg");
	this.shape_733.setTransform(3.7,657.8,1.227,1.227);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#76BF45").s().p("Aj8J+QAmkgBSkvQCjpeDdhPIgzAzQg/BKg6B1Qi5F1hCKVg");
	this.shape_734.setTransform(170,652.3,1.227,1.227);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#A0CC3A").s().p("EggWAFSQwYhLkKipQhBgpAthOQAphJBhgyQJghkLVg/QMdhENIgOQUmgVRwCWQHRA+FTBQQE8BKB8BEQAMAHAGAMQAGANgDANQgrDPxsBMQrSAw2DAAQ1JAAtAg6g");
	this.shape_735.setTransform(630.4,533.4,1.227,1.227);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#92BB35").s().p("AgSH/UgkjgBUgNXgBnQm4g2jFhHQi3hCgJhfQgFg4AcgzQANgVAUgQQAUgPAZgGQLiiwNMhmQQpiBSKAAQVHAAR2CuQNPCAKaDVQAWAHA6AjQA9AmALAQQBIBxjyBfQjzBgoKA+QsABcxeAAQo4AAqQgYg");
	this.shape_736.setTransform(628.9,550.1,1.227,1.227);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#7CAB34").s().p("ADLMBQt0gFtmg0QtMgzqwhXQq5hZmZhuQmvhzgsh6Qg0iPCOiHQLWjwOnieQVfjnYfABQf6AAXkGAQHYB4FpCRQC1BIBWAvIAAEFQmOD21kCNQyYB51SAAIigAAg");
	this.shape_737.setTransform(568.3,584.8,1.227,1.227);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#6B9B30").s().p("EhG0ARPQghAAgZgWQgZgVgFghIi90KQgEgfAPgbQAQgbAcgMQJRjtOKi5QYelAc6AAQdCAAWWFBQM4C6HoDsQAXALANAWQAOAWAAAZIAAUNQAAAlgaAaQgaAaglAAg");
	this.shape_738.setTransform(529,633.9,1.227,1.227);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#66A338").s().p("AAeA5IgCAOQgFARgRAHQAFgFAFgHQALgQgBgPIgWgpIgGAWQgLAYgbAMQAKgGALgLQAUgWgBgXIgTgoIgJAZQgOAagfANQAOgHANgNQAZgZgCgaIgVgnIgFAWQgKAagYANQAngdgEglIgOggIAVAcQATAPAbgCQAOgCAOgFQgYANgagFIgVgIIAUAnQAUARAkgIQASgEANgHQgbATgegDIgYgGIAVAnQAUAOAegGQAPgDALgGQgZAQgbgDIgXgHIAXApQANAIASAAQAKAAAGgCQgPAJgQgFIgOgGIAfA/g");
	this.shape_739.setTransform(38.3,197,1.227,1.227);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#7BC043").s().p("AAmB9IgGgGIAAAJQgLgEgJgIIgHgIIgCAIQgJgFgIgLIgGgJIgDAHQgNgIgGgLIgEgJIgFAIQgKgLgHgOIgEgOIgEAJQgKgPgDgOIAAgLIgFAHQgIgOABgNIABgIIgHAEQgDgMAEgKIAEgJIgIAEQAAgKAGgKIAHgJIgJACQADgIAIgJIAIgIIgGABQAEgFAOgPIANgMIASgFQATgEAHAAIgEAEIAMgDQALgCAHACIgHAHIALgBQANAAAHAGIgIAEIAJABQALADAIAIIgHAEIALAEQAMAGAIAPIgIAAIAKAGQAKAJAHASIgJgBIAJAKQAJAOADAOIgKgBIAGAIQAGALAAAQIgHgBIAEAKQAFAMgBAMIgIgEIADAJQADAMgEAMIgGgEIABAIQABAKgCAKIgHgFIgKAYIgagFIAAAJQgIgEgJgHg");
	this.shape_740.setTransform(38.2,198.3,1.227,1.227);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#5C5348").s().p("AluZJMAAdgjSQBwjoBMg6QBCgxAZgpQAWghAEgxQAChAAEgsQAIhSAYhWQA0iuAIj3QABkOAEhzQADhQAKgjQAKgfALAOQAdAhgGCNQgEBagPDYQgMDHADBxQADCJAyAiQAuAgCCghQA7gPACAFQAAAEgoAbQiIBcg/BRQhmCFggBIQgqBcACB4QACBngdCmIhBFtQgeC8APCEQAKBSAjC+QAKBKgLBwQgHBDgWCeQgoFTAwFQQAoEXBwBoQBNBHBkgSIASATIj1DfImABcg");
	this.shape_741.setTransform(-0.1,307.2,1.227,1.227);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#B8C11F").s().p("AAfBfQgQgTgbAAQgQgCgNAFQAZgKAZAIQANAFAIAGIgRgqQgRgUgkADIghAHQAegPAeAHQAOAEAKAFIgRgpQgSgQgfACIgbAGQAbgNAaAGQAOAEAIAFIgRgsQgMgKgSgBIgQAAQAQgIAPAIQAIADAFAFIgXhDIAdBAQAAgGAEgHQAGgQAQgFQgGADgFAIQgMAOgCAOIARAtIAIgVQAOgXAdgJQgMAGgMAJQgXATgCAWIAPArIAMgXQARgYAggJQgPAGgOALQgdAVAAAaIAQAqIAIgWQAOgXAbgKQgrAZgBAjIAJAhg");
	this.shape_742.setTransform(160.7,74.8,1.227,1.227);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#D6DE23").s().p("AACCLIAEgEQgTADgLgEIAIgGQgUACgKgLIAJgDQgQAAgLgQIAHgDQgEgBgFgEQgLgIgHgQIAIABQgDgBgFgGQgJgLgFgSIAJACQgOgRgCgWIAJACQgKgLADgaIAHACQgGgQADgSIAIAFIgCgJQAAgMAFgMIAGAFQgCgNAFgPIAGAGIANgXIAZAIIABgIQAOAHAHALIABgIQAQAIAHAPIADgJQAPAMAGAQIAEgGQAUARAAAPIAGgIQAPASABAWIAFgHQAJARAAAOQABAGgCAEIAGgFQAKAYgMAMIAHgDQACATgLALIAJgDQAAAOgQANIAJgBQgFALgRALIAGAAQgEAGgQAMIgPAKQgbAEgMAAIgGgBg");
	this.shape_743.setTransform(160.5,73.1,1.227,1.227);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#B8C11F").s().p("AAWA1QAAgfgRgPIgrgNIAMAWQAJAdgMAfQAEgPAAgSQAAglgVgPIgrgMIAMATQALAXgHAaQACgNgCgPQgDgbgTgPIgggMIAiAEQAlgEAUgsQgIAbgWAPIgVAJIArAMQAagDATgfQAJgPAFgPQgGAggXAVIgWAMIAsAOQAXgFARgZQAJgMADgMQgFAdgWARIgUAJIAtANQAXgEAOgYQgEARgPAIIgOAGIBCAWIhEgPIAJALQAHAPgFARQAAgHgCgJQgEgSgKgLIgtgNIALAUQAJAZgKAcQADgMgBgQg");
	this.shape_744.setTransform(67.9,-1.7,1.227,1.227);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#D6DE23").s().p("AgRBhIgMgGIACAJQgSgDgMgJIgIgHIACAJQgRgFgJgLQgFgGgBgDIgBAGQgKgGgFgKIgDgJIgDAJQgHgGgEgMIgBgLIgFAIQgDgHgBgNIAAgLIgDAFQgBgHAAgTIAAgSIAJgQQAKgQAFgFIAAAGIAGgJQAIgLAGgEIAAAKIAIgIQAIgJAKgCIgDAJIAHgGQAKgGALABIgCAHIALgEQANgEARAEIgHAGIALgDQANAAARAHIgHAGIANABQAQADAMAIIgGAGIAKACQAMAEANALIgGAEIAJAEQAMAGAIAIIgIADIAJAEQAKAHAGALIgIABIAHAEQAHAHAGAIIgIACIAKAZIgWAPIAGAGQgKAEgJABIgJABIAFAFQgKAGgMABIgKgBIAEAHQgKADgNgBIgLgCIAEAHQgQADgMgDIgJgEIADAJQgOAAgPgGg");
	this.shape_745.setTransform(69.7,-1.8,1.227,1.227);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#B8C11F").s().p("AA0BTQgUgMgbAFQgPADgMAHQAWgPAaACQANABAJAEIgZgkQgXgPghAMQgRAGgNAIQAZgWAfAAQAOAAALAEIgbgkQgVgLgdAJQgOAEgKAHQAWgSAbAAQAOAAAJAEIgcgmQgNgHgSACQgJABgGADQAOgLARADQAIABAGAEIglg7IArA3QgCgHACgIQADgRAPgJQgFAFgEAIQgIAQACAPIAbAmQgBgJAEgNQAHgaAZgOQgJAHgKAMQgRAZADAXIAZAlQAAgLAGgPQALgcAcgQQgMAJgLAOQgXAcAGAaIAbAlQgBgKADgOQAHgaAWgRQgjAkAIAiIAQAeg");
	this.shape_746.setTransform(-22.4,-3.3,1.227,1.227);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#D6DE23").s().p("AAICFIAGgIQgSAGgNgIIAIgFQgPAEgPgNIAGgEQgFAAgGgDQgOgFgJgOIAIgCQgEAAgFgEQgMgIgJgQIAJgCQgSgNgHgWIAKAAQgDgCgEgFQgGgJgCgQIAHAAQgKgPgBgSIAIADQgJgNADgTIAGADQgEgNABgQIAHAFIAIgaIAbABIgBgIQAPAEAKAJIgBgHQATADAKANIAAgJQAQAIAKAOIACgHQAPAHAHAKQAEAFABAEIAEgKQASAPAHAUIADgIQANAOAEAOQABAGAAAEIAEgGQAJANABAOQAAAGgCADIAGgEQAHASgIANIAIgFQADAPgMAQIAJgCQgDAMgNAPIAFgCQgFAKgWAZQgfALgLACIADgFQgQAHgLAAIgDAAg");
	this.shape_747.setTransform(-22.5,-4.3,1.227,1.227);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#B8C11F").s().p("AAcBgQgWgbgxAIQAagJAYAKQANAFAHAGIgOgrQgQgUgkABIghAGQAegOAeAIQAOAEAJAHIgSgqQgRgQgeABIgbAEQAbgMAaAIQANAEAIAGIgPgtQgLgKgSgDIgQgBQARgHAPAIQAIADAEAFIgThDIAaBBIAEgOQAIgPAQgFIgMALQgMANgCAPIAOAtIAKgUQAQgWAdgIQgMAFgMAIQgZASgDAXIAOArIAMgXQATgYAhgHQgPAFgOALQgeAUgBAaIANArIAJgVQAOgXAZgJQgsAWgCAlIAHAig");
	this.shape_748.setTransform(-2.2,-26.5,1.227,1.227);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#D6DE23").s().p("AgBCOIADgEQgTACgLgFIAIgFQgUAAgKgLIAKgEQgPgBgLgQIAHgCQgEgBgFgEQgLgJgGgQIAIABQgDgCgFgFQgJgMgEgSIAJADQgNgSgBgWIAJACIgEgJQgEgMACgQIAIACIgCgKQgCgNACgLIAIAFIgCgKQAAgNAGgKIAFAFIAAgJQAAgKAEgJIAGAGIAQgWIAZAJIABgIQANAIAHALIABgIQARAJAGAPIADgJQANAMAGAQIAEgGQAMALAEAMIACAKIAFgHQAOATAAAWIAGgHQAIARAAAOIgCAKIAGgGQAGAQgEANQgCAIgDABIAGgBQACATgMAKIAJgDQgBAPgQAMIAKAAQgGAKgRALIAGAAQgFAFgQALIgPAKQgZACgNAAIgFAAg");
	this.shape_749.setTransform(-2.1,-28,1.227,1.227);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#B8C11F").s().p("AA2A2QANgEAKABIgmgZQgagEgbAYQgOAMgIANQAPgfAbgMQAOgGALgBIgmgXQgXgCgXATQgMAKgHAKQAOgaAZgJQAMgFAKAAIgogZQgPgBgQAJQgIAFgFAEQAJgPARgEIAOgBIg5gpIA9AjQgDgFgCgJQgEgQAKgPIgDAQQgBASAHANIAoAZQgEgIgBgOQgBgbARgYIgKAaQgIAdAMAUIAlAZQgFgKAAgOQgBgeAVgbIgOAfQgKAiAQAVIAmAYQgFgIgBgOQgEgZAQgWQgHAKgCARQgEAbAOAUIAaAWIgfgPQgYgFgXAPQgMAIgJAMQAOgXAagJg");
	this.shape_750.setTransform(-31.7,34.3,1.227,1.227);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#D6DE23").s().p("AAjBxIAFgIQgMAJgSgGIAFgFQgFACgHAAQgNAAgNgJIAHgFQgEABgHgCQgNgDgPgMIAIgEQgVgFgPgSIAJgEQgDAAgGgEQgLgGgIgPIAHgDQgPgKgIgPIAJgBQgOgKgEgTIAIABQgJgJgFgPIAIABIgDgaIAZgJIgEgHQAKgBAKACIAIABIgEgHQATgEAOAIIgDgJQASABAPAJIgBgHQAQABAKAHQAGADACADIAAgKQAWAGAOARIAAgJQARAIAIALQAFAGABAEIABgIQAOAJAGAMIADALIAEgGQANAOgDAPIAFgJQAJANgGASIAHgGQADAMgIATIAEgDQgBALgLAgQgYAXgKAGIABgFQgOAOgMADIAEgJQgNALgMAAIgFgBg");
	this.shape_751.setTransform(-32.8,34.1,1.227,1.227);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#B8C11F").s().p("AgjA2QgFAFgIACQgRAFgPgKIAQACQATAAAMgIIAXgpQgIAFgOACQgbADgZgRIAaAJQAeAHATgNIAWgoQgJAGgPABQgeADgcgUIAgALQAkAJATgSIAVgnQgIAGgNADQgZAFgYgOQALAGASABQAaACATgPIAUgcIgNAgQgDAYARAWQAKANALAHQgYgMgKgZIgFgXIgVAnQgDAaAZAZQANANAOAHQgfgOgOgaIgIgYIgVAoQAAAXAUAWQALALAKAGQgbgMgLgYIgGgWIgXApQAAAPAKAPQAFAJAFAEQgQgIgFgRIgCgOIgkA8g");
	this.shape_752.setTransform(191,151,1.227,1.227);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#D6DE23").s().p("Ag1CBIgaAGIgKgZIgHAGQgCgKABgKIABgJIgGAEQgDgLACgMIADgKIgJAEQAAgMAFgMIAEgKIgHABQAAgQAGgMIAGgHIgKABQADgOAJgNIAJgLIgJABQAHgRAKgKQAGgEAEgCIgIAAQAHgOAMgHQAKgHgBgBIgHgEQANgOAPACIgIgEQALgJAUAEIgHgHQALgCAUAFIgEgEQAMAAAgAJIANANQAOAOAEAFIgGgBIAIAJQAIAJACAHIgIgCIAHAJQAGAKAAAKIgIgEIAEAIQAEALgDAMIgHgEIADALQABANgIAPIgFgHIAAALQgDAOgKAPIgEgIQgEAWgRAQIgFgIQAAAEgDAGQgGALgOAIIgDgHQgIAQgPAJIgCgJQgIAPgTAFIAAgIQgIAKgPAGg");
	this.shape_753.setTransform(190.6,152.1,1.227,1.227);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#B8C11F").s().p("AArAvIADAPQAAARgNAMQADgGADgJQAFgSgEgOIgighIABAWQgFAbgVAUQAJgJAGgOQAMgbgHgWIgfggIAAAZQgGAfgaAVQAKgLAJgRQARgfgLgYIgggfIADAXQgDAcgSASQAJgLAGgOQAJgagKgWIgWgbIAbAVQAXAJAagKQAOgGAGgHQgQARgaADIgWgBIAfAfQAYAKAggSQAQgJALgLQgWAagdAHIgaABIAhAeQAXAHAagOQAOgHAJgJQgTAWgaAFIgYAAIAiAhQAPAFARgGQAJgDAGgEQgLAOgRABIgPgDIAwAzg");
	this.shape_754.setTransform(218.6,159.8,1.227,1.227);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#D6DE23").s().p("ABJB3IgHgEIADAHQgMAAgLgFIgJgGIABAJQgLgDgKgGIgJgHIgBAHQgOgEgKgKIgGgHIgCAJQgNgIgLgMIgHgLIgCAJQgPgLgHgMIgDgLIgDAIQgLgKgEgOQgEgKgBABIgFAFQgGgLAAgLIACgIIgGAGQgEgIADgNIAEgKIgIAEQABgHAFgLIAFgKIgFADQACgHAJgRIAJgQIAPgKQARgKAHgCIgCAFIAKgFQALgHAIAAIgEAIIALgEQAMgDAJADIgGAHIAJgCQAKgBALAGIgFAFIALAAQAOADAMAMIgIADIAKADQANAFAMAPIgJACIALAIQANAJAHANIgJACIAIAFQAJAKAFAOIgHABIAHAJQAHAKADALIgJgBIAGAIQAGALAAAMIgHgCIAEAHQAEAKABAKIgIgCIgDAaIgaAEIADAIQgKAAgKgEg");
	this.shape_755.setTransform(218.8,160.3,1.227,1.227);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#B8C11F").s().p("AAaA7IgCAOQgFAQgRAIIALgNQALgPAAgPIgVgqQgBAKgFANQgNAYgbALIAWgRQAVgVAAgYIgTgpQgBAMgIANQgPAZgfAMIAbgTQAbgYgDgbIgUgoIgGAXQgKAZgYAMQAMgIAKgMQASgWgDgYIgMgfIATAcQASAQAbgBQAPgCANgEQgYAMgZgGIgWgIIAVAnQASASAlgHQARgDAOgIQgcASgegDIgZgHIAWAnQATAOAegFQAOgCAMgFQgaAPgbgEIgVgIIAVArQAMAIATABQAJAAAHgBQgQAIgQgEIgNgIIAcBAg");
	this.shape_756.setTransform(157.9,131,1.227,1.227);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#D6DE23").s().p("AAjCAIgGgFIAAAIQgMgEgIgJIgHgIIgCAJQgIgGgIgJIgGgJIgDAGQgNgJgGgLIgEgKIgFAIQgKgKgGgQIgEgMIgFAIQgKgQgCgOIAAgLIgFAHQgHgPABgNQADgMgBgBIgHAEQgDgMAEgKIAFgIIgIAEQgBgJAHgLIAHgJIgJACQACgHAJgJIAJgJIgGABQAEgFAOgOIAOgLIASgFQATgDAHAAIgEADIALgCQAMgBAHABIgHAIIALgBQANAAAHAGIgIAFIAJAAQALADAIAJIgHAEIALAEQAMAGAHAQIgIAAIAKAGQAKAKAGASIgJgBIAJALQAJANACAPIgKgBIAGAHQAFAMAAAQIgHgBIAEALQAEAMgBALIgIgEIADALQACAMgEALIgGgFIABAJQABAKgCAJIgHgFIgLAYIgagFIAAAJQgJgEgIgHg");
	this.shape_757.setTransform(157.8,132.2,1.227,1.227);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#B8C11F").s().p("AArAwIACAPQAAAQgNAMQADgGADgJQAFgSgEgOIgighIAAAXQgEAbgVATQAIgJAHgOQANgbgHgWIgfggIgBAaQgGAegZAVQALgLAIgRQARgfgKgYIggggIABAXQgCAYgPARQAGgHAFgNQAJgagJgWIgVgbIAbAVQAWAKAagLQAPgGAJgJQgSATgbADIgXgBIAgAgQAYALAfgSIAbgUQgVAZgeAHIgZABIAhAfQAWAIAbgOIAWgQQgTAWgbAFIgXAAIAiAhQAOAEASgFQAJgDAGgEQgMANgRABIgOgDIAvAzg");
	this.shape_758.setTransform(86.8,153.1,1.227,1.227);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#D6DE23").s().p("ABIB4IgHgEIADAHQgNAAgLgFIgIgGIABAJQgLgDgLgHIgIgHIgBAHQgPgEgJgJIgGgIIgCAJQgNgHgKgMIgIgLIgCAJQgPgMgGgNIgDgKIgDAIQgLgMgEgOIgEgJIgFAFQgGgKAAgLIACgJIgHAHQgDgJADgMIAEgLIgIAFQAAgIAGgLIAFgKIgFACIAVgoIAPgJIAYgMIgCAFIAKgFQAMgGAHAAIgFAIIALgEQAMgDAJADIgHAHIAJgBQALgBAKAGIgFAFIALAAQAOADAMAMIgIADIAKADQANAHAMAOIgJACIALAIQANAJAHANIgJACIAIAGQAJAJAFAPIgHABIAGAJQAIAKADALIgJgBIAFAJQAGALAAAMIgHgCIAEAHQAEAKABAKIgIgDIgDAaIgaADIADAIQgKAAgKgEg");
	this.shape_759.setTransform(86.9,153.5,1.227,1.227);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#B8C11F").s().p("AAFBAQgCAHgEAHQgLANgRABIAOgHQAPgJAFgPIgFgvQgEAJgKAKQgUASgdABIAagIQAcgNAIgWIgFgtQgFAKgMAKQgXATghABIAggIQAhgPAHgZIgGgtQgDAJgKAJQgSATgcACQASgFAJgGQAXgOAHgXIAAgjIAIAiQARAgAxAAQgbAFgXgPIgQgPIAGAtQALAWAkAHQASACAQgBQghAIgbgOIgUgPIAGAtQANATAeAFQAPADAMgBQgeAFgXgMIgSgPIAGAvQAJANARAHQAJADAHABQgSACgNgKIgKgLIAFBHg");
	this.shape_760.setTransform(317.4,88.9,1.227,1.227);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#D6DE23").s().p("AgBCGIgDAIQgHgHgGgJIgDgHIgDAHQgKgIgEgLIgEgJIgFAHQgHgJgDgMIgDgKIgFAFQgJgOgCgMIAAgKIgHAGQgFgNgBgRIABgOIgHAGQgFgQADgOIAEgKIgHAFQgCgQAGgNIAEgKIgIABQACgMAHgJIAIgGIgJABQACgJAKgIIAJgGIgJgBQAJgJASgHIgFgBQAJgGAfgMIARADQAUACAGADIgFADIAMACQAMACAHAFIgJAEIALADQALAFAFAIIgJABIAIAEQAJAHAEALIgHABIAJAIQAJALADAQIgIgDIAGAJQAGANAAASIgIgEIAFANQADAOgCAPIgJgEIACAJQABANgFAPIgHgEIAAAKQAAANgFALIgFgGQAAAQgLAQIgFgGQgBAMgJAOIgFgHIgTATg");
	this.shape_761.setTransform(317.4,90.8,1.227,1.227);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#B8C11F").s().p("AAFBBQgCAGgEAHQgLAOgRABIAOgIQAPgKAFgPIgFgvQgEAKgKAJQgUATgdABIAagJQAcgNAIgVIgFgtQgFAKgMAKQgXATghAAIAggIQAhgOAHgZIgGgtQgDAIgKAKQgSATgcACQASgFAJgGQAXgOAHgXIAAgiIAIAgQARAiAxgBQgbAFgXgPIgQgQIAGAtQALAYAkAFQASAEAQgCQghAHgbgNIgUgQIAGAtQANAUAeAFQAPADAMgCQgeAGgXgNIgSgNIAGAuQAJANARAGQAJAEAHABQgSADgNgKIgKgLIAFBFg");
	this.shape_762.setTransform(316.9,131.6,1.227,1.227);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#D6DE23").s().p("AgCCGIgCAIQgHgHgFgIIgEgIIgDAHQgJgHgGgLIgDgKIgFAIQgHgJgEgMIgCgLIgFAFQgKgOgBgMIAAgKIgHAGQgGgNAAgRIABgNIgHAGQgFgRADgOIAEgKIgHAFQgCgQAGgNIADgKIgGABQABgMAIgJIAGgGIgJABQADgJAKgIIAKgGIgJgBQAHgJAUgHIgHgBQAKgGAggMIARADQASADAIACIgGADIAMACQANADAFAEIgJAEIAMADQALAFAEAIIgJABIAJAFQAJAGAFALIgIABIAJAIQAKALABAQIgIgDIAHAJQAGANABASIgIgEIADANQAEAPgDAOIgIgEIACAKQABAMgGAPIgFgEIAAALQgBANgFAKIgGgGQABARgMAPIgDgGQgDANgHANIgGgHIgSATg");
	this.shape_763.setTransform(316.9,133.5,1.227,1.227);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#B8C11F").s().p("AgeA5QgGAEgIACQgQAGgPgIIAQAAQASAAANgJIATgsQgHAGgOACQgbAGgZgPIAaAHQAeAEASgOIAVgpQgKAHgNACQgfAEgdgRIAgAJQAkAGASgTIATgoQgIAFgNAEQgZAGgZgMQANAFAQABQAbABARgRIASgcIgLAgQgCAlApAcQgYgMgLgYIgGgXIgTAqQgCAbAbAWQAOANAOAGQgfgKgRgaIgKgYIgSAoQABAYAWAVQALAKALAGQgcgLgNgYIgGgVIgUArQABAPALAPQAFAHAFAEQgQgGgFgQIgDgOIghA9g");
	this.shape_764.setTransform(252.4,120.2,1.227,1.227);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#D6DE23").s().p("AgtCDIgbAFIgLgXIgHAEQgDgJAAgKIABgJIgGAGQgDgMABgMIACgKIgIADQAAgLADgMIADgLIgHACQAAgRAFgLIAFgHIgKABQADgPAIgNIAIgMIgJABQAHgRAKgKQAFgFADgBIgIAAQAHgPAMgJQAGgDADAAIgGgEQANgOAPABIgIgFQAHgFAMgBIAMAAIgHgGQALgDATADIgEgDQALAAAhAGIAOAMQAOANAFAGIgGgBIAIAHQAJAKADAGIgJgCIAHAJQAHALAAAJIgIgDIAFAIQAEAJgCAMIgHgCIADALQACANgHAOIgFgHIAAAMQgBAOgKAPIgFgIQgDAXgQAQIgFgHQgBAPgVAPIgDgGQgIARgPAJIgCgJQgHAPgSAHIAAgIQgKAJgNAIg");
	this.shape_765.setTransform(252.3,121.6,1.227,1.227);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#B8C11F").s().p("AgwBUQADgYgRgWQgKgOgLgGQAYANAJAZQAFANAAAKIAWgnQADgagZgZIgagVQAeANAPAbQAHANABALIAUgoQAAgXgUgWIgVgRQAbANALAYQAFANABAKIAXgqQAAgPgKgPIgKgNQAPAIAFAQQADAJgBAGIAlg7IgfA/IANgGQARgFAPAJIgQgBQgTgBgMAJIgXAoIAWgGQAagDAZAQQgLgGgOgDQgegGgUANIgWAnIAYgGQAfgEAbAUQgNgIgSgEQgjgHgTAQIgWAnIAVgHQAZgHAZANIgdgGQgagDgTAPIgUAcg");
	this.shape_766.setTransform(266.2,-2,1.227,1.227);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#D6DE23").s().p("AgtCEIgRgEQgZgXgHgJIAHABQgPgOgEgLIAJACQgOgOACgPIAIAFQgKgMAFgTIAHAEQgDgEAAgHQgCgNAIgPIAFAHQgBgEABgHQACgOAMgPIADAJQABgGAEgHQAGgPALgKIAFAIIADgKQAHgLAPgKIADAHIAGgJQAHgLAJgFIACAJIAGgIQAJgIAMgDIAAAIIAGgFQAIgGAJgEIAAAJIAbgEIAKAZIAHgFQABAPgCANIAGgEQAFASgHAPIAIgFQAAATgHAPIAHgBQAAARgGAKIgGAIIAKgBQgFAXgQAPIAIAAQgGARgLAKIgKAGIAJABQgJAPgMAFQgHAEgDgBIAGAEQgIAJgLACIgJABIAIAFQgHAFgNABIgLgBIAHAHQgIACgLgDIgLgCIADAEQgHAAgTgFg");
	this.shape_767.setTransform(266.3,-3.4,1.227,1.227);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#B8C11F").s().p("AAfA6IgBAOQgFARgPAIIAKgNQAJgQAAgPIgZgpIgEAWQgLAZgbANIAWgSQATgXgBgXIgWgnQAAALgHAOQgNAcgeANIAZgVQAZgagDgaIgYgoIgDAXQgKAZgYANQALgHAKgNQAQgXgDgYIgPgfIAWAbQAcAWAugSQgYAOgagEIgVgIIAWAnQAUARAkgKQARgEANgIQgbAUgegBIgYgGIAXAmQATANAegIQAPgDALgFQgZAQgbgCIgVgGIAXApQAVANAbgIQgPAKgRgEIgNgGIAfA+g");
	this.shape_768.setTransform(220.2,102.4,1.227,1.227);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#D6DE23").s().p("AArB+IgGgFIABAIQgMgDgJgJIgHgHIgBAJQgJgGgJgKIgGgIIgDAHQgOgJgGgLIgEgJIgEAJQgLgJgHgPIgEgMIgEAIQgMgPgDgOIAAgLIgFAHQgIgOAAgNIgBgKIgGAEQgDgMADgLIAEgIIgIAFQgBgKAGgLIAHgJIgJACQACgHAIgKIAIgIIgGABQAEgGANgOIANgNIARgFQATgGAHAAIgEAEIALgDQANgCAGABIgGAHIAKgCQANAAAIAGIgIAFIAJAAQALACAJAJIgGAEIALADQAMAGAJAPIgIABIAJAGQALAJAIAQIgJAAIAJAKQAJANAEAOIgKAAIAGAIQAGAKABAQIgHgBIAEAKQAFAMAAAMIgIgEIADAKQADAMgDAMIgGgFIABAJQABAKgBAKIgHgFIgKAZIgagEIABAJQgKgEgIgGg");
	this.shape_769.setTransform(220.1,103.5,1.227,1.227);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#B8C11F").s().p("AAyBHQADgSgHgOIgmgbIAEAXQABAagTAXQAGgKAFgOQAJgegKgUIgkgbIADAZQgBAfgWAYQAJgMAGgRQAMgigOgWIglgaIAFAWQACAagRAXQAIgMADgPQAFgbgNgUIgZgXIAeAQQAjAJAjgkQgPAWgbAHIgXACIAlAaQAaAHAbgXQAPgLAJgNQgRAdgbALIgaAFIAlAZQAXADAZgRQALgKAIgKQgPAbgaAHIgWAEIAmAbQAPABAQgHQAJgFAFgEQgJAPgRADIgPAAIA3ArIg7gmIAFAOQACARgLAOQADgGABgJg");
	this.shape_770.setTransform(352,123.1,1.227,1.227);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#D6DE23").s().p("AAcBuIgKgGIAAAHQgQgCgJgHIgIgHIAAAKQgNgEgMgLIgKgKIgBAJQgQgIgIgMIgFgKIgCAIQgNgJgGgOIgFgLIgEAGQgIgJgBgLIAAgKIgFAIQgEgIABgMIACgLIgHAGQgBgHADgMIAEgLIgFADQAAgHAHgSIAHgRIAOgLQAPgNAGgDIgCAFIAJgHQALgHAHgCIgDAJIAKgFQANgGAIACIgFAIIAJgDQALgCALAEIgEAGIAKgBQAOAAAOAKIgHAEIALACQANAEAOAMIgIADIAMAGQAOAIAJALIgJAFIAJAEQAJAIAIAOIgHACIAIAHQAKAJAEAKIgJAAIAHAIQAHAJACAMIgIgBIAFAHQAGAJACAJIgIgBIABAbIgaAHIAEAIQgKABgKgCIgIgDIAEAHQgMACgLgEIgKgEIADAJQgLgBgLgFg");
	this.shape_771.setTransform(353,123.3,1.227,1.227);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#B8C11F").s().p("AgqBZQABgYgTgVQgLgMgMgGQAaALAMAYQAFAMABAKIASgpQABgagcgXIgcgSQAgAKARAZQAIANACALIARgqQAAgYgYgUIgXgPQAdAKANAXQAHAMABAKIASgrQgBgPgLgOIgLgMQARAHAFAQQAEAIgBAGIAhg+IgaBBIANgHQAQgGAPAIQgGgBgKABQgRABgMAJIgTArIAUgIQAbgFAbAOQgMgEgPgCQgfgEgRAOIgUApIAYgJQAfgFAdARQgPgGgSgDQgkgFgSATIgSApIAVgKQAZgHAZALQgOgFgPAAQgbAAgRARIgSAdg");
	this.shape_772.setTransform(311,7,1.227,1.227);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#D6DE23").s().p("AgiCIIgSgDQgbgUgHgJIAGAAQgQgLgFgMIAJACQgPgNAAgPIAJAEQgKgLADgTIAHACQgDgEgBgHQgCgOAHgOIAGAHQgBgEABgHQABgOAJgRIAFAIIADgMQAFgPAKgMIAFAIQAAgDACgGQAGgMANgKIAEAGIAFgJQAHgKAKgHIACAJIAFgIQAJgJALgEIAAAIIAGgGQAHgHAJgEIAAAIIAagHIAMAYIAIgEQAEAPgCANIAGgFQAHASgGAPIAIgEQACASgHAQIAHgCQACAbgLAJIAJgCQgDAXgPAQIAJgBQgFASgKALIgJAGIAIAAQgLAZgTABIAHADQgHAKgLADIgJACIAJADQgHAHgNABIgLAAIAHAGQgHADgMgBIgLgCIAEAEQgHAAgTgDg");
	this.shape_773.setTransform(310.9,5.5,1.227,1.227);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#B8C11F").s().p("AAsAuIADAOQAAARgNANQAEgGADgJQAEgRgEgPIgjggIABAXQgEAbgVAUQAJgJAGgOQAMgbgHgWIgggfIAAAZQgGAdgYAXQAKgMAJgQQAQgfgMgZIgggeIACAWQgCAcgSASQAIgKAFgOQAKgbgLgWIgVgaIAcAUQAWAJAagLQAQgGAIgJQgSAUgaACIgYAAIAiAfQAYAKAegSQAQgJALgMQgUAbgfAGIgYACIAgAeQAXAHAbgOQANgIAIgJQgSAWgbAFIgWABIAhAgQAQAEARgGQAJgDAGgEQgLANgRABIgPgCIAvAyg");
	this.shape_774.setTransform(362,43.1,1.227,1.227);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#D6DE23").s().p("AAwB1IgJgGIABAJQgLgCgMgHIgJgHIgBAHQgOgDgKgJIgFgIIgDAJQgNgGgKgNIgJgLIgCAKQgPgMgHgMIgDgLIgDAIQgLgLgEgOIgEgJIgEAFQgIgKABgLIABgJIgFAGQgEgHADgNIADgLIgIAFQAAgHAGgLIAEgLIgEADQABgHAKgRIAJgQIAPgJQARgKAGgDIgBAFIAJgFQAMgGAHgBIgDAIIAKgEQAMgEAIADIgFAHIAJgCQAKAAAKAFIgFAFIAMABQAOACAMALIgIADIALADQANAGAMAOIgJACIALAIQANAKAHAMIgJACIAIAGQAJAJAGAOIgHABIAHAIQAHAKAEALIgJgBIAFAJQAGAKAAAMIgHgCIAFAIQADAJABAKIgHgCIgDAaIgaAEIAEAIQgKAAgKgEIgHgDIACAHIgCABQgLAAgJgFg");
	this.shape_775.setTransform(362.4,43.6,1.227,1.227);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#B8C11F").s().p("AALA8QAGgegNgUIgngVIAHAYQACAegTAbQAHgNAEgRQAHgkgRgUIgmgVIAIAVQAFAZgMAXQAQgwgXgbIgcgUIAhAOQAXADAXgRQANgKAHgLQgNAYgZAKIgXAEIAoAXQAaACAYgZQANgNAIgOQgNAfgbAOIgZAJIApATQAXABAWgUQAKgLAHgKQgMAbgYALIgXAGIAqAWQAPABAPgLQAIgFAFgEQgJAPgPAFIgQADIA8AlIg/gfIAHAOQAEAQgJAPQABgGAAgJQABgTgIgNIgpgWIAGAVQADAbgQAaQAGgMADgOg");
	this.shape_776.setTransform(276.5,54.5,1.227,1.227);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#D6DE23").s().p("AAlBqIgKgEIACAHQgRAAgMgGIgHgGIACAKQgPgDgNgJIgLgJIACAJQgSgHgJgKIgHgKIgBAIQgOgHgHgNQgFgKgBAAIgEAHQgJgIgCgLIgBgJIgEAIQgFgHgBgMIABgMIgHAHQgBgHACgLIACgMIgEAEQAAgHAFgTIAEgSIANgNQAOgOAFgEIgBAGIAJgIQAJgIAHgDIgCAJIAJgHQALgGAJAAIgEAIIAJgEQAKgEAMADIgEAHIALgDQANgBAPAIIgHAFIALAAQAOADAPAKIgIAEIANAEQAPAHAKAKIgIAFIAKAEQAKAHAJANIgHADIAJAGQAKAIAGAJIgJACIAIAHQAJAIADAMIgIAAIAGAGQAHAIADAJIgJAAIAEAaIgYAKIAFAHQgJACgLgBIgIgBIAEAGQgLADgMgCIgKgDIAEAIQgMAAgMgEg");
	this.shape_777.setTransform(277.7,54.8,1.227,1.227);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#B8C11F").s().p("AAKA8QAGgegNgUIgmgVIAGAYQACAegSAbQAHgNAEgRQAHgkgQgUIgngVIAHAUQAGAZgMAYQAQgwgXgbIgbgUIAfAOQAYADAXgRQANgLAHgKQgNAXgZAKIgXAFIAnAWQAbAEAYgaQANgNAHgNQgNAegaAPIgZAIIApATQAWABAXgUQAKgLAHgKQgNAagXAMIgXAGIAqAWQAPABAPgKQAIgFAFgFQgIAQgRAEIgPACIA8AmIg/gfIAGAOQAFAQgKAPQACgGAAgKQABgSgJgMIgogYIAGAXQADAbgRAZQAGgLADgPg");
	this.shape_778.setTransform(324.9,47.7,1.227,1.227);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#D6DE23").s().p("AAkBqIgJgEIAAAHQgQAAgLgGIgIgGIABAKQgOgDgNgJIgLgJIABAJQgRgHgJgKIgGgKIgCAIQgOgIgHgMIgFgMIgDAHQgJgIgCgLIgBgJIgFAIQgFgHAAgMIABgMIgHAHQgBgHABgLIACgMIgDAEQAAgHADgSIAFgRIAMgNQAOgOAFgEIgBAGIAJgIQAJgIAIgDIgCAJIAJgHQAKgGAKAAIgFAIIAJgEQALgEAMADIgFAHIAMgDQANgBAPAIIgIAFIALAAQAOADAQAKIgIAEIAMAEQAPAHALAKIgIAFIAJAEQALAHAIANIgHADIAJAGQALAJAFAIIgJACIAIAHQAKAJACAMIgHAAIAFAFQAHAIADAJIgJAAIAFAaIgZAKIAGAHQgKACgKgBIgIgBIADAGQgLADgMgCIgKgDIAFAIQgMAAgNgEg");
	this.shape_779.setTransform(326.3,48,1.227,1.227);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#B8C11F").s().p("AAMA7QAFgegNgTIgmgWIAGAYQACAegSAcQAHgOAEgRQAIgkgRgTIgngWIAIAVQAFAagOAXQARgvgWgbIgcgUIAfANQAZADAVgRQAOgKAHgLQgNAYgZAKIgWAFIAmAWQAbADAYgZQANgNAHgOQgNAfgaAOIgZAIIApATQAWAAAXgUQAKgKAGgLQgLAbgZALIgWAGIAqAXQAPAAAPgKQAIgFAEgFQgHAQgRAFIgPACIA8AlIg/geIAGANQAFARgJAPQABgHAAgJQABgTgJgMIgogXIAGAWQAEAbgQAZQAFgLAEgPg");
	this.shape_780.setTransform(382.1,30.8,1.227,1.227);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#D6DE23").s().p("AAlBqIgKgEIABAHQgRAAgLgGIgHgGIABAKQgOgDgNgJIgLgJIACAKQgSgHgJgLIgGgKIgBAIQgPgHgHgMQgEgLgBAAIgFAHQgIgIgDgLIgBgJIgDAIQgGgHAAgMIAAgMIgHAHQgBgHACgLIADgMIgFAEQAAgHAFgTIAEgSIAMgNQAPgOAFgEIgBAGIAIgIQAKgIAHgDIgCAJIAJgHQAKgGAKAAIgEAIIAJgEQAKgEAMADIgEAHIALgDQAOgBAOAIIgHAFIALAAQAOADAPAKIgIAEIANAEQAPAHAKAKIgIAFIAJAEQALAHAJANIgHADIAJAGQALAJAFAIIgJADIAIAGQAJAJADAMIgIAAIAGAGQAHAHADAKIgJAAIAEAZIgYAKIAFAHQgJACgKgBIgJgBIAEAGQgLADgMgCIgKgDIAEAIQgMAAgMgEg");
	this.shape_781.setTransform(383.5,31,1.227,1.227);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#B8C11F").s().p("AgeBeQgCgZgVgSQgMgJgNgGQAaAIAPAWQAHAMACAJIANgrQgCgagfgTIgegPQAgAGAUAXQAKAMADALIAMgrQgFgWgYgRIgZgNQAdAGAQAWQAJAKABAKIAOgtQgDgPgNgNIgMgKQAQAEAIAPQAFAHAAAHIAYhCIgRBEIALgJQAPgIARAGQgHgBgJACQgSADgLALIgOAtIAUgLQAagIAbALQgMgDgPAAQgeAAgRARIgOArIAXgMQAegIAeANQgOgEgTgBQgkAAgQAVIgNArIAUgMQAZgLAcAIQgxgIgWAdIgOAfg");
	this.shape_782.setTransform(339.8,14.3,1.227,1.227);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#D6DE23").s().p("AgUCPIgTgBQgdgRgIgIIAGAAQgRgKgGgKIAKAAQgPgLgDgPIAJADQgMgKABgTIAHACQgDgEgCgGQgDgOAEgQIAHAGQgCgEAAgHQgBgNAIgRIAGAHIABgOQADgPAIgMIAHAHIACgKQAEgMALgLIAEAGIAEgKQAGgMAJgHIACAIIAFgJQAIgKAJgGIABAIIAFgHQAHgHAIgGIACAIIAZgKIAPAWIAHgGQAGAPgBANIAFgGQAIARgDAQIAHgFQAEARgFARIAHgCQAFAZgIAMIAIgDQAAAWgMASIAJgCQgDATgJAMIgHAHIAHgBQgHAagUAEIAHACQgKARgPABIAJADQgGAHgMADIgMACIAIAFQgHADgMABIgMAAIAFADQgFABgLAAIgJAAg");
	this.shape_783.setTransform(339.4,12.7,1.227,1.227);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#B8C11F").s().p("AgeBeQgCgYgVgTQgMgJgNgGQAaAHAOAXQAIAMACAJIANgrQgCgagfgTIgegPQAhAGATAYQAKAMADAKIAMgrQgEgXgZgQIgZgNQAeAHAQAVQAIALABAJIAOgtQgCgPgNgNIgMgKQAQAEAIAPQAEAHAAAHIAZhCIgRBEIAKgJQAPgIARAGQgHAAgJABQgSAEgLAKIgOAtIAUgKQAagJAbALQgMgDgPAAQgfAAgQARIgOArIAXgMQAegIAeANQgOgEgTgBQgkAAgQAVIgNArIAVgMQAYgKAcAHQgwgIgXAdIgOAfg");
	this.shape_784.setTransform(290.7,19.6,1.227,1.227);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#D6DE23").s().p("AgUCPIgSgBQgegRgHgIIAFAAQgRgKgGgKIAKAAQgQgLgCgPIAJADQgMgKABgTIAHACQgDgEgCgGQgEgOAFgQIAGAGQgBgEgBgHQAAgNAHgRIAGAHIACgOQADgPAIgMIAGAHIACgKQAEgMALgLIAEAGIAFgKQAGgMAIgHIADAIIAFgJQAIgLAJgFIABAIIAFgHQAHgIAIgFIACAIIAZgKIAPAWIAGgGQAGAPgBANIAFgGQAJARgEAQIAHgFQAEARgFARIAIgCQAFAZgJAMIAJgDQAAAWgNASIAJgCQgDATgJALIgHAIIAIgBQgFAPgLAJIgKAGIAHACQgKARgPABIAJADQgGAHgNADIgLACIAIAFQgHADgNABIgLAAIAFADQgFABgMAAIgJAAg");
	this.shape_785.setTransform(290.6,17.9,1.227,1.227);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#B8C11F").s().p("AgDBkQgJgXgagLQgQgHgMAAQAbgBAVARQAKAJAFAJIAAgtQgKgZgjgKIghgFQAhgDAaARQANAIAGAJIgBgtQgKgUgegJIgbgFQAegCAWAPQALAIAFAIIAAgvQgHgNgQgJIgPgGQASAAAMALQAGAGACAGIADhGIADBGIAJgMQAMgLARAAIgPAGQgQAJgHANIAAAvIARgQQAWgQAdACQgMABgPAEQgcAKgLAUIgBAtIATgSQAagRAhADQgQAAgRAFQgjALgKAYIAAAtIAPgRQAUgRAbABQgMAAgQAHQgZALgJAXIgEAig");
	this.shape_786.setTransform(244.4,32.9,1.227,1.227);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#D6DE23").s().p("AgqCIIAFgCQgTgEgJgIIAJgDQgTgGgGgOIAJAAQgOgFgFgTIAIAAQgEgDgEgFQgHgMAAgRIAIAEQgDgDgCgHQgFgNACgTIAIAFQgHgUAHgWIAIAFQgCgDAAgHQAAgNAIgOIAGAEIABgKQACgNAGgKIAGAHQAAgEACgGQADgLAJgJIADAHIADgIQAEgJAGgIIAEAIIAVgRIAUAQIAEgIQAKAMADANIADgHQAOAOABAQIAGgHQAJAQAAARIAGgEQAIAOAAANQAAAHgBADIAIgFQAHAWgHAUIAIgFQACATgEANQgCAHgDADIAIgEQAAAagQAKIAIAAQgFATgOAGIAJAAQgGAOgTAGIAJADQgFAFgMAFIgLADIAFACQgGADgTAGIgSAEQgggIgKgFg");
	this.shape_787.setTransform(244.3,31,1.227,1.227);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#B8C11F").s().p("AAqBaQgegZgsASQAYgNAZAFQANADAJAFIgVgoQgUgRgkAIIgfALQAbgTAfADQAOACAKAFIgWgnQgUgNgdAGIgaAIQAZgQAbADQANACAJAFIgWgqQgNgIgSAAIgQACQAPgJARAEQAIADAFAEIgeg/IAkA8QgBgGADgJQAFgQAQgHIgLANQgKAPAAAPIAWAqIAGgWQAMgYAbgMQgLAGgLALQgUAWABAXIAUAoIAJgZQAOgaAfgNQgOAIgNANQgaAYADAaIAVAoQABgKAFgNQAKgZAYgNQgLAGgKAOQgRAWACAYIANAgg");
	this.shape_788.setTransform(215,-7.1,1.227,1.227);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#D6DE23").s().p("AAWCFQgUAFgKgDIAHgHQgTAEgMgJIAIgEQgPABgNgOIAHgEQgFgBgGgDQgMgGgIgPIAIAAQgEgBgFgFQgKgJgHgSIAJABQgRgPgFgXIAKABQgDgCgCgGQgGgKAAgRIAIACQgKgQACgSIAIACQgIgOAGgTIAFAEQgDgMADgQIAHAFIAMgYIAaAGIAAgJQAOAGAJAKIAAgIQASAGAJAOIACgJQAOAKAIAPIAEgHQAVAOACAPIADgIQASAQAEAWIAFgIQAKAPADAOQABAHgBAEIAFgHQAHAPgBANQAAAHgCAEIAGgFQAFATgKAMIAIgEQABAPgOAOIAJgCQgEALgPANIAGgBQgGAKgZAWQghAJgLAAg");
	this.shape_789.setTransform(214.9,-8.3,1.227,1.227);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#B8C11F").s().p("AAqBaQgegZgsASQAYgNAaAFQANADAIAFIgVgoQgTgRglAIIgfALQAbgTAfADQAOACAKAFIgWgnQgTgNgeAGIgaAIQAZgQAbADQANACAJAFIgWgqQgNgIgSAAIgQACQAPgJARAEQAIADAFAEIgeg/IAkA8QAAgGACgJQAFgQAQgHIgKANQgLAPAAAPIAWAqIAGgWQAMgYAbgMQgKAGgLALQgVAWABAXIAUAoIAJgZQAOgaAfgNQgOAIgNANQgaAYADAbIAVAnQAAgKAFgMQALgaAYgNQgLAGgKAOQgSAWADAYIANAgg");
	this.shape_790.setTransform(193.9,10.1,1.227,1.227);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#D6DE23").s().p("AAWCFQgUAFgKgDIAHgHQgTAEgMgJIAIgEQgPAAgNgOIAHgDQgEgBgGgEQgNgGgIgPIAIAAQgDAAgGgGQgKgJgHgSIAJACQgQgPgFgXIAKABQgDgDgDgFQgGgLAAgQIAHABQgJgQABgSIAIAEQgIgOAGgTIAGAEQgDgMADgQIAHAFIALgYIAaAFIAAgJQAOAFAJAKIAAgIQASAHAJANIACgIQAPAKAIAPIADgHQANAJAGALQADAFABAEIAFgIQARAQAEAWIAEgIQARAYgEAQIAFgHQAIAOgBANQgBAGgCAFIAHgEQAFATgKAMIAIgEQABAPgOAOIAJgCQgEALgPANIAGgBQgGAKgZAWQghAJgLAAg");
	this.shape_791.setTransform(194,8.9,1.227,1.227);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#B8C11F").s().p("AgiBBQgXgPgYAEIggAOIAbgWQAPgTgDgbQgDgQgGgLQAOAXgEAZQgCANgEAJIAlgYQAQgUgJgjIgOgfQAVAagBAgQgBAOgEAKIAlgYQAMgUgHgeIgJgZQAQAYgCAbQAAANgEAIIAngYQAIgNgBgTIgDgQQAJAQgDAQQgBAJgEAEIA9ghIg6AnIAQABQAQAEAJAPQgGgEgIgFQgPgKgPABIgpAZIAXAGQAaAKANAaQgGgLgMgKQgXgSgXABIgnAWIAZAIQAcAMAOAfQgIgNgNgMQgbgZgaAFIgmAYIAWAEQAZAHANAYQgHgLgNgJg");
	this.shape_792.setTransform(166,48.9,1.227,1.227);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#D6DE23").s().p("Ag4BsIgJgGIACAJQgHgCgKgIIgJgHIABAGQgFgDgPgOIgNgMQgMgggBgLIAFAEQgHgTACgMIAHAGIgBgLQgBgNAFgHIAGAIIAAgJQADgLAHgJIAFAGIADgLQAFgMAOgJIABAIIAGgJQAJgLARgIIAAAJIAKgJQANgKAOgEIAAAKIAIgGQAJgHARgBIgBAHIAKgFQALgFALAAIgCAJIAJgEQAMgDAMADIgEAHIAIgCQAKgBAKABIgEAHIAZAJIgDAaIAIgBQgFAPgJAJIAIgBQgEATgOAJIAJABQgIAPgPAJIAHADQgIAOgLAHIgJAEIAJAEQgKALgOAHIgNAFIAIAEQgOALgOADIgLABIAHAFQgOAJgNgBQgJAAgCgBIAEAFQgMAEgLgDIgJgEIAGAKIgDAAQgIAAgJgFg");
	this.shape_793.setTransform(167.4,48.8,1.227,1.227);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#B8C11F").s().p("AA3A1QANgEAKAAIgmgXQgagEgaAZIgXAZQAPgeAbgNQAOgGALgBIgogWQgWgCgYATIgSAVQANgaAZgLQANgEAKAAIgpgZQgPgBgPAJIgOAKQAKgQAQgEQAIgCAHABIg7gnIA9AhQgDgGgCgIQgFgRAKgOIgCAPQgBATAIANIAnAZQgEgJgBgNQgCgbAQgYIgJAZQgHAeANAUIAlAYQgEgKgBgPQgBgfAVgaIgNAfQgKAjAQAUIAmAXQgFgJgCgNQgEgaAQgXQgTAtAWAdIAbAVIgggOQgXgEgYAQQgOAKgGAJQAOgWAZgJg");
	this.shape_794.setTransform(142.5,20.4,1.227,1.227);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#D6DE23").s().p("AAmBwIAFgIQgNAJgTgGIAFgGQgFACgGABQgNAAgPgJIAHgFQgDABgHgBQgNgDgPgMIAIgEQgVgFgQgRIAJgEQgPgDgNgWIAGgDQgOgJgIgPIAJgBQgOgJgEgTIAIABQgKgJgFgPIAJABIgCgaIAZgJIgFgHQAQgCAMAEIgDgHQASgFAPAIIgEgJQATAAAPAJIgBgHQAQABAKAHQAFADADADIAAgKQAWAFAPARIAAgJQARAHAJALQAEAGABAEIABgIQAPAJAGAMIACAFIABgCQANAOgCAPIAFgIQAJAMgFATIAHgFQACALgGATIAEgEQgBALgKAgQgXAYgKAGIABgGQgOAPgLADIACgJQgNALgMAAIgFAAg");
	this.shape_795.setTransform(140.8,20.2,1.227,1.227);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#B8C11F").s().p("AA3A1QANgEAKAAIgmgXQgagEgaAZIgWAaQAOgfAbgMQAOgHALAAIgngXQgYgCgWAUIgSAVQANgaAYgLQANgEAKgBIgogZQgQgBgQAKIgNAJQAJgPARgFQAIgBAGAAIg6gmIA9AgQgEgFgCgIQgEgRAKgPIgCAQQgBATAHANIAoAYQgEgIgBgNQgCgbAQgZIgJAaQgHAdAMAVIAmAXQgEgJgBgPQAAgfATgbIgMAgQgJAiAQAVIAmAWQgFgIgCgNQgEgaAPgXQgTAtAWAdIAbAVIgfgPQgYgDgXAQQgOAJgGAJQAOgWAYgJg");
	this.shape_796.setTransform(106.1,68.5,1.227,1.227);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#D6DE23").s().p("AAmBwIAFgIQgNAJgSgGIAEgGQgEACgHABQgNAAgOgJIAHgFQgPAEgYgTIAIgEQgVgFgQgRIAJgEQgPgDgNgWIAHgDQgOgJgJgPIAJgBQgNgJgFgTIAIABQgJgJgFgPIAJABIgDgaIAZgJIgEgHQAQgCAMAEIgEgHQASgFAPAIIgDgJQASAAAPAJIgBgHQAZACAJAMIAAgKQAXAFAOARIAAgJQARAHAJALQAFAGABAEIABgIQAOAJAFAMIACAGIACgDQANAOgCAPIAFgIQAJAMgFATIAHgFQACALgGATIAEgEQgBALgKAgQgXAYgKAGIABgGQgOAPgLADIACgJQgOALgNAAIgDAAg");
	this.shape_797.setTransform(104.5,68.4,1.227,1.227);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#B8C11F").s().p("Ag4BQQAJgkglggQAXAOAHAaQAEANgBAKIAZglQAGgagYgbIgYgXQAdARALAbQAGAOAAALIAYgmQADgXgSgYIgTgTQAZAPAJAaQAFANgBAJIAbgnQACgOgJgSIgJgNQAPAKAEARQABAIgBAHIAog5IgkA8IAOgFQAQgCAPAKQgHgCgJgBQgSgDgNAHIgbAnIAXgEQAbgBAXASQgKgHgOgDQgdgJgVALIgaAkIAZgEQAfAAAZAWQgNgIgRgGQgjgMgVAPIgZAlIAXgFQAZgDAXAOQgNgGgNgDQgcgEgUANIgXAZg");
	this.shape_798.setTransform(41.2,16.1,1.227,1.227);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#D6DE23").s().p("AgZCDIgLgEIAGAGQgIAAgSgHIgRgGQgXgZgFgKIAFABQgNgPgDgLIAJADQgNgOADgPIAIAFQgJgOAHgSIAGAEQgCgEAAgHQAAgNAKgOIAEAIQgBgEACgHQADgOANgOIAEAIIAFgNQAIgOALgKIAEAJIAFgJQAHgKAOgIIACAHIAHgIQAHgJALgFIABAJIAHgHQAKgHAMgDIgBAIIAHgFQAJgFAJgDIgBAIIAbgCIAGAbIAIgEQACAQgFAMIAHgEQAEATgJAOIAJgDQgBATgKAOIAHAAQgDAZgMAIIAKAAQgHAXgRANIAJAAQgJARgLAIIgKAFIAIAAQgJAOgOAGIgMAEIAGAEQgJAIgLABIgJAAIAIAFQgIAFgMgBIgLgCIAGAHIgDABQgHAAgJgDg");
	this.shape_799.setTransform(41.6,15.2,1.227,1.227);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#B8C11F").s().p("AASAYQALgMAKgFIgtgEQgWAIgMAcQgGAOgCAMQABgeASgUQAKgKAIgEIgvgFQgOAFgKAPIgIAOQACgRANgLQAGgEAGgCIhFgMIBGAFQgGgDgFgHQgKgNACgSIAFAPQAHARAMAJIAuAGQgHgGgHgMQgMgXAGgeIACAbQAEAeAUANIAtAGQgJgGgGgOQgPgcAIggIABAhQAGAkAXAMIAtAFQgIgGgHgKQgNgVACgXQgBAKAEAOQAIAbAWAKIAhAIIgiAAQgYAHgOAXQgIAOgCANQADgbAUgTQAKgJAJgEIgtgFQgaAHgOAiQgIARgBAPQABghASgYg");
	this.shape_800.setTransform(91.3,47.9,1.227,1.227);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#D6DE23").s().p("AAZBkIAEgIQgDADgHABQgNAEgSgFIAGgHQgWAEgVgJIAGgHQgPAEgVgPIAFgFQgRgCgPgLIAJgFQgQgCgMgQIAHgDQgNgFgLgLIAJgDIgOgVIATgUIgHgFQANgIANgCIgGgEQAQgLAQAAIgGgFQARgIARADIgEgGQAXgJAOAHIgFgKQAYgEATAJIgEgHQATAAAMAGQAGADADADIgEgHQAQABALAJIAIAGIABgHQASAHAEAPIABgJQANAHAEAUIAEgJQAHAKACAUIADgFQAEALAEAgQgMAggGAJIgBgGQgHATgJAIIgBgJQgKASgOAEIABgJQgHAOgUACIABgHQgDADgGADQgKAFgMAAIgHAAg");
	this.shape_801.setTransform(89.6,47.7,1.227,1.227);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#B8C11F").s().p("AAaA5IgCAOQgFARgPAHIAKgMQAJgPAAgQIgXgoQAAAJgGAMQgLAZgbAMIAVgSQAUgVgBgYIgWgnQgBALgHAOQgNAagfANIAagVQAZgagEgaIgWgnIgDAMQABgHgBgIIgNgfIAVAbQAdAWAtgTQgXAOgagEIgWgIIAWAoQAVAQAigIQASgFANgIQgbAUgegCIgZgFIAXAlQAUAOAdgHQAPgEALgFQgYAQgbgDIgWgFIAYAoQAUANAbgHQgPAJgRgFIgNgFIAgA9g");
	this.shape_802.setTransform(109.5,97.9,1.227,1.227);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#D6DE23").s().p("AApB/IgHgFIAAAIQgMgDgJgIIgHgIIgBAJQgJgFgIgKIgHgJIgDAHQgNgJgHgLIgEgJIgEAJQgKgKgHgOIgFgNIgEAIQgLgPgCgOIgBgLIgFAHQgIgOABgNIACgNIgHAEQgDgMADgKIAEgJIgIAFQgBgJAHgLIAGgKIgJACQACgHAIgJIAIgJIgGABQAHgKAYgXIASgEQATgFAHgBIgEAEIAMgCQAMgDAGACIgGAHIAKgBQANAAAHAGIgIAFIAKABQALACAIAJIgHAEIALADQANAHAIAOIgIABIAJAFQALAJAHASIgJAAIAJAKQAKAMADAPIgKAAIAGAIQAHAKAAAQIgHgBIAFAKQAEAMAAALIgIgDIADAJQACAMgDAMIgGgEIACAIQABAKgCAKIgHgFIgKAZIgagEIAAAJQgJgEgIgGg");
	this.shape_803.setTransform(108.7,98.7,1.227,1.227);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#B8C11F").s().p("AAdA5IgCAOQgFARgPAHQAFgEAFgIQAJgQAAgOIgYgqIgFAWQgLAZgbAMQAKgHALgKQAUgXgBgXIgWgoIgIAZQgNAagfAOQANgIANgNQAZgagEgaIgWgmIgEAWQgIAXgTAPQAHgGAIgLQAQgXgDgYIgNgfIAVAbQAdAWAtgTQgXAOgagEIgWgHIAWAnQAUAQAjgIQASgFANgIQgbAVgegDIgZgFIAXAlQAUAOAdgHQAPgEALgFQgYARgbgEIgWgFIAYAoQAUANAbgHQgPAJgQgFIgOgFIAgA+g");
	this.shape_804.setTransform(54.3,174.2,1.227,1.227);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#D6DE23").s().p("AApB/IgHgFIAAAIQgMgDgJgJIgHgHIgBAJQgJgGgIgKIgHgIIgDAHQgOgJgGgLIgEgJIgEAJQgLgKgGgPIgFgMIgEAIQgLgPgDgOIAAgLIgFAHQgJgPABgNIADgMIgHAEQgDgMADgKIAEgJIgIAFQgBgJAHgLIAGgKIgJACQACgHAIgKIAIgIIgGABIASgUIANgNIASgEQATgFAHgBIgEAEIAMgDQAMgCAGACIgGAHIAKgBQANAAAHAGIgIAFIAKABQALACAIAJIgHAEIALADQANAGAIAPIgIABIAJAFQALAJAHASIgJAAIAJAKQAKAMADAPIgKAAIAGAIQAHAKAAAQIgHgBIAFAKQAEAMAAALIgIgDIADAJQACAMgDAMIgGgEIACAIQABAKgCAKIgHgFIgKAZIgagEIAAAJQgJgEgIgGg");
	this.shape_805.setTransform(54,175.1,1.227,1.227);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#B8C11F").s().p("AAPAcIAWgOIgsgMQgXAFgRAZQgIANgEAMQAFgeAWgQIAUgLIgtgNQgOADgNANQgGAGgEAGQAFgQAOgHIAOgGIhCgWIBEAPQgFgEgEgHQgHgPAFgRIACAQQAEATALAKIAtANQgHgHgEgMQgKgaALgcIgDAcQABAeARAQIArAOQgHgJgFgOQgKgeANgfIgEAhQABAlAUAQIArALQgHgHgGgMQgLgYAHgbQgDANACAPQAEAbATAPIAgANIgigFQgYADgSAVQgKAMgFANQAIgaAWgPIAVgKIgrgMQgaADgTAfQgKAQgEAOQAGggAXgUg");
	this.shape_806.setTransform(-26.6,111.3,1.227,1.227);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#D6DE23").s().p("AAvBnIACgHQgDADgHACQgOAEgQgFIAGgGQgEACgGABQgNABgSgIIAGgHQgWABgUgNIAHgGQgPABgTgSIAGgEQgQgFgNgNIAIgDQgQgFgJgRIAIgBQgKgGgKgNIAJgCIgKgZIAWgPIgGgGQAJgEAKgBIAJgBIgGgFQAKgGANAAQAGgBAEABIgFgHQAQgFARAFIgDgGQAQgDAMADIAJAEIgDgJQAXAAASALIgCgJQATADAMAJQAFAEACADIgBgIQAaAIAFASIACgHQAQAKACAPIADgJQAMAJAAAUIAFgIQAFALgBAUIADgFQACAKgBAiIgJAQQgKAQgFAFIAAgGQgKASgKAGIAAgKQgLARgPACIADgJQgJALgRAAIgDAAg");
	this.shape_807.setTransform(-28.3,111.4,1.227,1.227);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#B8C11F").s().p("AAwBUQgVgNgbAFQgPADgLAGQAWgPAaADQAOABAJAFIgZgmQgVgPgiAMIgfAOQAZgWAgAAQAOAAAKAFIgagmQgVgKgcAIIgaAKQAZgQAbAAQANABAIAEIgZgnQgNgIgTACIgPADQAPgKAQADQAIACAGADIgkg7IAqA4QgBgHABgIQAEgQAPgKIgKAOQgIARACAOIAaAoQAAgKAFgNQAIgZAagOIgUATQgRAXACAXIAYAnQAAgLAGgOQALgcAegPIgYAWQgYAcAGAZIAZAmQgBgKAEgNQAIgaAWgQQgkAiAIAkIAMAbg");
	this.shape_808.setTransform(-12.9,67.8,1.227,1.227);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#D6DE23").s().p("AAECFIAGgHQgTAGgMgIIAGgGQgPADgOgNIAGgEQgEAAgHgDQgMgFgKgOIAIgBQgEgBgFgEQgMgIgJgRIAJAAQgRgOgHgWIAKAAQgDgCgDgFQgGgKgBgQIAGAAQgKgPgBgSIAKADQgKgOAFgTIAGAEQgFgMACgQIAHAEIAIgZIAbACIgCgIQAPAEAKAJIgBgIQATAEAKANIABgJQAPAIAKAOIADgHQAOAIAHAKQAEAGABADIAEgJQARAPAHAVIADgJQANAOAEAOQABAHAAAEIAEgHQAJANABAOIABALIAGgEQAGASgIANIAIgFQADAOgNAQIAJgDQgEALgNAPIAFgBQgFAKgXAZQggAMgLABIADgFQgPAFgKAAIgGAAg");
	this.shape_809.setTransform(-12.9,67,1.227,1.227);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#B8C11F").s().p("AgDBjQgOghgxgIQAbAAAUARQALAJAFAIIAAgtQgKgYgjgKIghgGQAhgDAaARQANAIAGAJIgBgtQgLgUgdgJIgbgFQAegCAWAQQALAIAFAIIAAguQgHgOgQgJIgPgGQARAAAMAMQAGAGADAGIADhGIAEBGQADgGAGgGQAMgMARAAIgPAHQgQAJgHANIAAAuQAGgIALgIQAWgQAdACQgMABgPAEQgdAJgLAUIgBAtQAGgJANgIQAagRAhADQgPABgSAFQgjAKgKAYIAAAtQAFgIAKgJQAUgQAagBQgMABgOAGQgaALgJAXIgEAig");
	this.shape_810.setTransform(39.3,112.1,1.227,1.227);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#D6DE23").s().p("AgqCIIAFgBQgTgFgJgJIAJgDQgTgGgGgOIAJAAQgOgGgFgTIAIAAQgEgDgEgGQgHgLAAgRIAIAEQgDgDgDgGQgFgOADgRIAIADQgHgUAHgVIAIAEIgBgKQAAgMAIgPIAGAEQAAgRAJgPIAGAGQABgPAOgPIADAHQADgNAKgMIAEAIIAUgQIAVAQIADgIQAKAMADANIAEgHQAOAOABAQIAFgHQAKAQAAARIAFgEQAMAXgGAOIAJgEQAGAVgGAUIAIgDQACAdgKALIAIgEQAAARgIALQgEAGgEADIAIAAQgFATgOAGIAJAAQgGAOgTAGIAJADQgIAJgUAFIAFABQgKAFghAJQgggJgKgFg");
	this.shape_811.setTransform(39.4,110.4,1.227,1.227);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#8CAF2E").s().p("AggBCQgXgPgYAFIgfAPIAagWQAOgVgFgbQgDgPgGgLQAPAXgDAaQgBANgFAJIAlgZQAPgVgLgiIgOgfQAVAaAAAfQABAOgFAKIAlgZQALgUgIgeIgKgZQASAYgBAbQgBANgEAJIAngaQAHgNgCgTIgDgPQAKAOgDARQgBAJgEAFIA8gjIg4ApIAOAAQARAEAIAPQgFgFgHgEQgQgJgPABIgnAaIAXAFQAYAIAPAaQgHgLgLgJQgYgTgXADIgmAYIAZAGQAbAMAQAeQgIgNgOgMQgbgYgaAGIglAZIAXADQAZAIAPAWQgOgOgIgFg");
	this.shape_812.setTransform(173.5,29.3,1.227,1.227);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#A8CE38").s().p("Ag1BwIgKgGIADAJQgHgCgKgHIgJgIIABAFIgigdQgMgggBgLIAFADQgHgTACgMIAHAGIgCgLQAAgNAFgHIAFAIIAAgJQACgLAIgJIAEAGQAAgFADgGQAFgNAOgJIABAIIAFgKQAIgLARgIIAAAJIAKgKQAMgKAOgEIAAAKIAHgHQAKgGAQgCIAAAHIAKgFQAMgGALAAIgDAJIAJgEQAMgEAMADIgEAHIAIgCQAKgCAKABIgEAHIAZAIIgCAaIAIgBQgFAPgJAKIAIgBQgEATgNAKIAJABQgJAQgOAJIAHACQgHAOgLAHIgJAFIAJAEQgKALgOAIIgMAFIAIAEQgOAMgOAEIgLABIAHAEQgOAIgNABQgKABABABIAEAGQgLAFgLgDIgJgEIAFAIIgEAAQgHAAgJgEg");
	this.shape_813.setTransform(174.7,29.5,1.227,1.227);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#8CAF2E").s().p("AgOBjQgHgYgXgOQgOgIgNgCQAbADATAUQAJAJAEAKIAFgtQgHgaghgOIghgIQAiAAAXATQAMAKAFAKIAEgtQgJgWgbgMIgagIQAeACATARQALAKAEAIIAFgvQgFgNgPgLIgOgIQARABALANQAEAHACAGIAMhFIgGBGIAKgLQAOgKASADQgHABgJADQgQAHgKAMIgFAvIASgOQAXgNAeAGQgMgBgPACQgeAFgNAUIgHAtIAVgQQAbgOAhAIQgQgCgSAEQgjAGgMAXIgFAtIAQgQQAXgPAaADQgPAAgOAEQgaAJgLAVIgIAhg");
	this.shape_814.setTransform(160.6,1.2,1.227,1.227);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#A8CE38").s().p("Ag1CCIAGgBQgTgHgIgJIAJgCQgTgIgEgOIAJABQgNgIgDgTIAHABQgDgDgDgGQgHgNACgQIAHAEQgCgDgCgHQgDgOAEgRIAHAGQgEgWAJgVIAHAGQgBgDABgHQABgNAKgNIAFAFIACgLQAEgMAHgJIAFAIIAEgJQAFgLAJgIIADAHIAEgHQAFgJAHgHIADAIIAWgOIATATIAFgHQAIANACANIAEgGQAMAQgBAQIAGgGQAHARgCARIAGgDQAJAYgHANIAJgEQAEAXgJATIAIgEQAAATgGANQgDAGgDACIAIgDQgCAQgIALQgEAGgCABIAHABQgHASgPAEIAJABQgHANgUAFIAJADQgGAFgMACIgMACIAFACIgaAGIgRACQgggLgJgHg");
	this.shape_815.setTransform(160.7,-0.4,1.227,1.227);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#8CAF2E").s().p("AgGA/QgCAGgHAFQgMAMgRgCIAPgFQARgIAHgNIACgvQgFAIgLAHQgXAPgdgEIAbgDQAcgIAMgUIAEgtQgHAJgNAHQgaAQghgFIAhgEQAkgIAKgYIABgtQgDAIgMAIQgSAOgZACQALgBALgEQAagKAJgWIAFgiIADAiQAMAkAvAIQgbgBgTgSIgOgTIgDAtQAJAZAjAMQARAGAQABQgiACgZgSIgSgTIgBAtQAKAWAcAKQAPAFAMABQgdABgVgRIgQgRIgBAvQAGAOAQAJQAIAFAGACQgRAAgLgMIgIgNIgHBFg");
	this.shape_816.setTransform(202.4,170.7,1.227,1.227);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#A8CE38").s().p("AgbCCIgEAHQgGgHgEgLIgCgIIgEAHQgIgIgEgMIgBgKIgGAGQgGgKgCgNIAAgKIgGADQgHgOAAgNIACgJIgIAFQgEgOADgQIADgMIgIADQgBgSAFgNIAGgKIgIADQABgQAIgLQAEgHADgCIgIAAQAEgKAJgIIAHgFIgJAAQAEgIAMgFIAKgFIgJgDQAJgGAUgEIgFgCQAKgGAggGIASAGQASAGAGADIgFACIALAFQAMAFAFAFIgIABIAKAGQAKAHADAIIgIAAIAHAGQAIAHADAMIgIAAIAHAJQAGAMAAAQIgHgDIAFAJQAEAOgDASIgHgGIACAOQABAQgFAOIgIgHQAEAQgNAVIgGgEQgBARgKAPIgFgGQgDAQgNANIgDgHQgDAMgLAMIgEgIIgVAOg");
	this.shape_817.setTransform(202.5,172.2,1.227,1.227);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#8CAF2E").s().p("AgGA/QgCAGgHAGQgMALgSgCIAQgFQARgIAHgNIACgvQgFAIgMAHQgWAPgegEIAbgEQAegIALgTIAEgtQgHAJgNAIQgaAPghgFIAhgDQAkgJAKgYIACgtQgFAIgLAJQgWARgdgBQAOAAAPgGQAagKAKgWIAFgiIACAiQAMAkAwAIQgbgBgTgTIgPgSIgCAtQAJAZAjAMQARAGAPABQghACgZgTIgSgSIgBAtQAKAWAcAKQAPAFAMABQgdAAgVgQIgQgRIgCAvQAHAOAQAKQAIAEAGACQgRAAgMgMIgIgNIgGBFg");
	this.shape_818.setTransform(180.2,133.7,1.227,1.227);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#A8CE38").s().p("AgbCCIgEAIQgGgIgDgKIgDgIIgEAGQgIgJgDgMIgCgKIgGAHQgFgKgCgOIgBgKIgGAEQgHgPABgMIABgKIgIAFQgEgNADgQIADgNIgIAEQgBgSAFgOIAGgJIgIADQABgRAIgLQAEgGAEgBIgIAAQAEgMAIgGIAIgGIgJAAQAEgIALgGIALgEIgJgCQAJgHAUgFIgFgCQAKgFAggGIARAGQATAGAGAEIgFACIALADQAMAGAFAEIgJADIAKAFQALAHADAIIgJAAIAHAGQAJAIACAMIgIAAIAHAIQAHAMgBARIgHgFIAFALQAEANgDARIgHgEIACANQABAQgFANIgIgFQAEAOgNAXIgGgGQgBATgKAPIgFgIQgCAQgOANIgDgGQgDALgLAMIgEgIIgVAQg");
	this.shape_819.setTransform(180.2,135.3,1.227,1.227);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#8CAF2E").s().p("AAXA1QgBgegQgRIgsgNIAMAXQAJAegNAeQAFgPAAgSQAAgkgVgPIgrgOIANAUQALAYgJAaQAJgwgegXIghgOIAjAGQAXgCATgVQAJgMAFgNQgHAagXAPIgVAKIArANQAagDATgeQAKgPAEgPQgGAhgWAUIgXANIAsAMQAYgFAQgZQAJgNADgLQgFAdgVAQIgUAKIAtANQAPgDANgMQAGgHAEgGQgFAQgOAIIgPAFIBDAXIhFgQIAJAMQAIAOgGARQABgHgCgJQgEgSgKgLIgtgNIAKAUQAJAagLAbQADgMABgPg");
	this.shape_820.setTransform(213.5,136.1,1.227,1.227);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#A8CE38").s().p("AgPBhIgMgGIACAJQgTgDgLgIIgIgIIABAIQgQgFgKgKIgGgKIgCAHQgKgGgFgKIgDgJIgDAJQgIgGgDgMIgBgMIgFAIQgDgHgBgMIAAgMIgDAFQgBgHAAgSIABgTIAJgPQALgRAFgFIAAAGIAGgJQAIgLAGgEIAAAKIAHgIQAJgIAKgCIgDAJIAHgGQAKgFAMAAIgCAHIAKgFQAOgEAQAFIgGAGIAKgCQANgBASAHIgHAGIANABQAPADANAIIgHAGIAKACQAMAEAMALIgGAEIAJAEQALAGAIAIIgIADIAKAFQAKAIAFAKIgIAAIAHAFQAIAHAFAIIgIACIAKAZIgWAPIAGAGQgJAFgKABIgJAAIAHAFQgLAGgMAAIgLgBIAFAHQgKADgNgBIgKgCIADAHQgQADgMgDIgJgEIADAJQgOAAgOgGg");
	this.shape_821.setTransform(214.9,136,1.227,1.227);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#8CAF2E").s().p("Ag1BUQAEgZgQgXQgJgNgJgGQAWAOAIAYQAFAMgBALIAXgmQAFgagZgaIgagXQAeAPANAaQAHAOAAAMIAWgoQACgWgTgYIgVgSQAbANAKAaQAEAMAAAKIAZgoQACgQgKgQIgKgMQAQAIAEARQACAIgBAGIAng5IghA9IAOgGQARgFAOALQgGgCgJgBQgSgBgOAIIgZAnIAWgFQAbgCAZAQQgLgEgPgFQgegHgTANIgYAlIAZgEQAfgCAaAVQgNgIgSgFQgjgIgUAPIgXAlIAWgGQAZgFAXAQQgtgTgdAVIgVAbg");
	this.shape_822.setTransform(270.3,26.4,1.227,1.227);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#A8CE38").s().p("AgRCEIgLgDIAEAEQgHAAgTgFIgRgFQgYgXgGgKIAGAAQgPgOgDgLIAJADQgNgPACgPIAIAFQgJgNAGgSIAGAEQgCgEAAgHQgBgNAJgOIAFAHQgBgEABgHQADgNAMgPIAEAIIAFgNQAHgOALgLIAEAJIAEgJQAHgKAOgIIADAHIAGgIQAJgKAJgFIABAJIAHgHQAJgIAMgDIgBAIIAGgFQAIgGAKgDIgBAJIAagDIAJAZIAHgEQACAQgEAMIAHgEQAFASgIAPIAJgDQAAASgJAPIAHgBQgCAZgMAJIAKAAQgGAXgRAOIAJAAQgHARgLAIIgKAGIAIABQgJAOgMAFIgHACIAEACQgJAIgLADIgJAAIAIAFQgIAGgNAAIgKgCIAFAHIgGABIgNgCg");
	this.shape_823.setTransform(270.4,25.2,1.227,1.227);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#8CAF2E").s().p("Ag0BUQAEgZgQgXQgKgOgJgGQAWAOAJAZQAFAMgBAKIAXglQAEgagZgaIgZgXQAeAPANAbQAGAOABALIAWgoQACgWgTgXIgVgSQAaANALAZQAEANAAAJIAZgoQACgPgKgQIgKgNQAQAJAEARQACAHgBAHIAng6IghA8IAOgFQARgFAOAKQgGgBgJgBQgTgBgNAIIgZAnIAWgFQAbgCAYAQQgKgEgPgFQgegHgUANIgYAlIAZgEQAfgBAaAUQgNgHgSgGQgjgIgUAPIgXAmIAWgHQAagEAXAPQgtgTgdAVIgVAbg");
	this.shape_824.setTransform(316.9,22,1.227,1.227);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#A8CE38").s().p("AgRCEIgLgDIAEAEQgHAAgTgGIgRgFQgYgXgGgKIAGABQgPgOgDgLIAJACQgNgPACgPIAIAFQgJgNAGgSIAGAEQgCgEAAgHQgBgMAJgPIAFAHQgBgDABgHQADgOAMgPIAEAIIAFgMQAHgPALgKIAEAJIAEgJQAHgLAOgIIADAHIAGgIQAJgJAJgGIABAJIAHgHQAJgIAMgDIgCAJIAHgFQAIgGAJgDIgBAJIAagDIAJAZIAHgEQACAQgEAMIAHgEQAFASgIAPIAJgDQAAASgJAPIAHgBQgBAZgNAJIAKAAQgFAWgRAPIAJAAQgIAQgLAJIgJAFIAIABQgJAOgMAGIgGACIADACQgJAIgLADIgJAAIAIAFQgIAGgNAAIgKgCIAFAHIgFABIgOgCg");
	this.shape_825.setTransform(317.1,20.8,1.227,1.227);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#8CAF2E").s().p("AgeBEQgYgOgYAGIgeARIAagXQANgVgGgbQgDgOgHgMQAQAVgCAaQgBAOgEAJIAkgaQAOgXgMghIgQgeQAXAZABAfQABAOgFALIAlgcQAKgUgJgdIgLgZQASAXAAAbQABANgEAJIAlgcQAHgNgCgSIgFgQQAMAPgDAQQgBAJgDAFIA6gmIg2AtIAQAAQAQACAKAQQgGgFgIgEQgQgIgPACIgmAbIAWAEQAaAIAQAaQgIgKgLgJQgZgSgYADIgkAZIAaAGQAcALAQAcQgJgMgPgLQgbgXgaAGIgkAaIAXACQAZAHAOAWQgIgLgOgIg");
	this.shape_826.setTransform(326.4,62,1.227,1.227);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#A8CE38").s().p("AgwBxIgKgGIADAJQgIgCgKgHIgJgHIACAFQgGgDgQgMIgOgMQgMgfgCgLIAFADQgHgSABgMIAIAGIgDgLQgBgMAFgIIAFAIIAAgJQABgLAIgKIAEAGQAAgEACgHQAFgNAOgKIACAIIAFgKQAIgMAQgJIABAJIAJgJQAMgLAOgFIAAAKIAHgGQAKgHAQgDIAAAHIAJgFQAMgFALgCIgCAJIAJgEQAMgEAMACIgEAHIAIgCQAJgCALAAIgEAIIAaAHIgBAbIAHgBQgFAPgHAKIAHgBQgDATgNAKIAJAAQgHAQgOAKIAHACQgLAXgPAEIAJADQgIAMgOAIIgNAFIAIADQgNANgOAEIgLACIAHAEQgNAKgOABIgJgBIAEAGQgLAFgLgDIgJgDIAFAIIgFABQgIAAgIgEg");
	this.shape_827.setTransform(327.4,62.2,1.227,1.227);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#8CAF2E").s().p("AgeBEQgYgOgYAGIgdARIAZgXQANgVgGgbQgDgOgIgMQARAVgCAaQgBAOgFAJIAkgaQAPgXgNghIgOgeQAVAZABAfQABAOgEALIAkgbQALgVgKgdIgKgYQASAWAAAbQABANgEAJIAmgcQAGgNgDgSIgDgQQALAPgCARQgCAIgEAFIA8gmIg2AsIAPAAQAQADAJAQQgEgFgJgEQgQgIgQACIgmAcIAXADQAaAIAPAaQgHgKgMgJQgYgSgXADIglAaIAaAFQAbALARAdQgJgNgPgLQgcgWgZAGIgkAaIAWACQAaAGAPAWQgJgLgOgIg");
	this.shape_828.setTransform(359.1,74.6,1.227,1.227);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#A8CE38").s().p("AgwBxIgKgGIADAJQgIgCgKgHIgJgHIACAFQgGgDgQgMIgOgMQgMgfgCgLIAFADQgHgSABgMIAIAGIgDgLQgBgMAFgIIAFAIIAAgJQABgLAIgKIAEAGQAAgEACgHQAFgNAOgKIACAIIAFgKQAIgMAQgJIABAJIAJgJQAMgLAOgFIAAAKIAHgGQAKgHAQgDIAAAHIAJgFQAMgFALgCIgCAJIAJgEQAMgEAMACIgEAHIAIgCQAKgCAKABIgEAHIAaAHIgBAbIAIgBQgFAPgIAKIAIgBQgEATgNAKIAJAAQgHAQgOAKIAHACQgLAXgPAEIAJADQgIAMgOAIIgNAFIAIADQgNANgOAEIgLABIAHAEQgNAKgNABIgKAAIAEAGQgLAFgLgDIgJgDIAFAIIgGABQgHAAgIgEg");
	this.shape_829.setTransform(360,74.7,1.227,1.227);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#8CAF2E").s().p("Ag0BUQAEgYgRgXQgJgOgJgGQAWAOAJAYQAEANgBAKIAYgmQADgagYgaIgZgWQAdAOANAbQAHAOAAALIAWgnQACgXgTgXIgVgSQAbANALAZQADAMAAAKIAagoQABgPgKgQIgJgNQAPAJAEAQQACAIgBAHIAog6IghA9IANgGQARgEAPAKQgHgCgJgBQgTgBgMAIIgZAoIAVgGQAbgCAYARQgKgFgPgEQgegIgTANIgYAmIAYgFQAfgBAaAUQgNgIgRgFQgkgJgUAQIgWAmIAVgHQAagFAYAPQgugSgcAVIgWAbg");
	this.shape_830.setTransform(359.6,12.9,1.227,1.227);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#A8CE38").s().p("AgRCFIgLgDIADAEQgGAAgTgGIgRgFQgYgXgGgKIAGABQgPgOgDgLIAJACQgNgPACgPIAIAFQgJgNAGgSIAGAEQgCgEAAgHQgBgNAJgOIAFAHQgBgDABgHQADgOAMgPIAEAIIAFgMQAHgPALgKIAEAJIAEgJQAHgLAOgIIACAHIAHgIQAIgKAJgFIABAJIAHgHQAJgIAMgDIgBAIIAHgFQAIgGAJgDIgBAJIAagDIAJAZIAHgEQACAQgEAMIAHgEQAFASgIAPIAJgDQAAASgJAPIAIgBQgCAZgMAJIAKAAQgGAXgRAOIAJAAQgIARgLAJIgJAFIAIABQgKAOgLAFIgGACIADADQgJAIgLACIgJABIAIAFQgIAFgNAAIgKgBIAFAHIgEAAQgHAAgIgBg");
	this.shape_831.setTransform(359.6,11.6,1.227,1.227);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#8CAF2E").s().p("AAxBIQADgSgHgOIgmgcIADAWQAAAbgSAXQAHgKAEgPQAJgdgKgUIgkgbIADAYQgBAfgWAZQAJgNAGgRQAMgigPgWIgkgaIAGAWQADAbgPAVQAHgLADgPQAFgbgMgVIgZgXIAeARQAjAIAjgjQgQAWgaAHIgXACIAkAaQAZAGAcgWQAPgMAJgMQgRAdgcALIgZAFIAlAZQAXADAYgRQAMgJAIgKQgQAZgaAIIgWAEIAmAcQAPACAQgJQAJgEAFgEQgKAPgQADIgPAAIA1AsIg6gmIAEAOQADARgLAOQADgGABgJg");
	this.shape_832.setTransform(297.3,48.7,1.227,1.227);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#A8CE38").s().p("AAbBtIgKgFIAAAHQgQgCgJgHIgIgHIgBAKQgNgFgMgKIgKgKIgBAJQgQgKgIgLIgFgKIgCAIQgNgKgGgNIgCgJIgEAGQgIgKgCgLIABgJIgFAIQgFgIACgMIACgLIgIAGQgBgHADgMIAEgLIgFADQABgHAHgSIAHgRIAOgMQAQgMAGgDIgCAFIAJgHQALgIAHgBIgDAJIAKgGQAMgFAJACIgFAIIAJgDQALgDALAFIgEAGIAKgCQAOABAOAKIgHAEIALABQANAEAOANIgIADIAMAFQAOAIAJAMIgJADIAIAFQAKAHAIAPIgHACIAIAHQAIAIAFALIgJAAIAHAHQAHAKACAMIgIgBIAFAHQAFAIACAKIgIgBIABAbIgaAHIAEAIQgKAAgKgCIgIgCIAEAHQgMACgLgEIgKgEIACAJQgLgBgLgGg");
	this.shape_833.setTransform(298,48.9,1.227,1.227);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#8CAF2E").s().p("AAwBIQADgSgGgOIgmgcIADAWQAAAbgSAXQAGgKAEgPQAKgdgLgUIgjgcIADAZQgBAfgWAYQAIgMAGgSQAMghgOgWIgkgaIADALQgCgIgEgHIgZgXIAdARQAjAIAkgjQgQAWgbAGIgWACIAkAaQAZAHAcgXQAPgLAIgMQgRAdgbAKIgZAGIAlAZQAWACAZgQQAMgJAHgKQgPAZgaAIIgXADIAmAdQAPACARgJQAJgEAEgEQgJAPgRADIgOAAIA2AsIg8gmIAGAPQACARgLANQACgGABgJg");
	this.shape_834.setTransform(377.4,102.7,1.227,1.227);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#A8CE38").s().p("AAbBtIgJgFIAAAHQgRgCgJgHIgHgHIgBAKQgOgFgMgKIgJgKIgCAJQgQgKgIgLIgEgKIgDAIQgMgJgGgNIgDgKIgEAGQgIgKgBgLIAAgJIgFAIQgEgIABgMIACgLIgIAGQgBgHAEgMIADgLIgFADQACgHAHgSIAGgRIAPgMQAPgMAGgDIgCAFIAKgHQAKgIAHgBIgDAJIALgGQAMgFAIACIgFAIIAJgDQALgDALAFIgEAGIALgCQAOABANAKIgHAEIALABQAOAEANANIgIADIANAFQAOAIAIAMIgJADIAJAFQAKAIAHAOIgHACIAIAHQAJAIAEALIgJAAIAHAHQAHAKACAMIgIgBIAFAHQAFAIACAKIgIgBIABAbIgaAHIAEAIQgJAAgLgCIgIgCIAEAHQgMACgLgEIgJgEIACAJQgMgBgLgGg");
	this.shape_835.setTransform(377.8,102.8,1.227,1.227);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#8CAF2E").s().p("AAYA9IgEAOQgGAQgPAGIAKgMQANgOABgPIgTgsQgCAJgFAMQgPAWgcAKIAXgPQAXgUABgXIgQgqQgCALgJANQgRAYggAKIAdgSQAcgWAAgaIgSgpQgBAKgGALQgNAYgaALQArgagBgkIgJghIAQAeQASASAbABQARAAAMgFQgaALgYgIIgUgKIARApQARATAlgEQARgCAOgGQgdAQgegGIgYgJIASApQASAPAfgDQAPgCALgEQgaAOgagGIgWgJIASAsQAMAKATABQAIABAHgBQgPAIgQgGIgNgIIAYBCg");
	this.shape_836.setTransform(271.7,89.2,1.227,1.227);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#A8CE38").s().p("AAUCBIgGgGIgBAIQgKgEgIgJIgFgJIgDAJQgIgHgHgKIgGgKIgDAGQgNgKgFgLIgDgKIgEAJQgKgMgFgPIgCgNIgGAGQgJgQgBgOIACgKIgGAFQgHgPADgNQACgKAEgCIgHADQgCgMAFgKIAFgIIgJAEQAAgJAIgKIAHgJIgJABQADgHAJgIIAJgIIgGAAQAHgIAbgUIASgDQATgCAHAAIgEAEIALgBQAMAAAHACIgHAGIAMABQAMABAHAGIgJAEIAJACQALAEAHAJIgHADIAKAFQAMAIAGAPIgIAAIAIAHQAKAKAFASIgJgBIAIAMQAIAOABANIgJgCIAFAJQAEAMgBAQIgHgCIADALQADAMgCALIgIgEIABAKQACAMgFALIgGgFIAAAJQAAAKgDAJIgHgFIgMAXIgbgHIAAAJQgJgFgIgHg");
	this.shape_837.setTransform(271.9,90.2,1.227,1.227);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#8CAF2E").s().p("AAYA9IgDAOQgGAQgQAGIALgMQAMgOABgPIgSgsQgCAJgGAMQgOAWgcAKIAXgPQAWgUACgXIgQgqQgCALgJANQgRAYggAKIAcgSQAcgWAAgaIgSgpQgBAKgGAMQgNAYgbAKQAsgagCgkIgIghIARAeQARASAbABQARAAAMgFQgZALgZgIIgUgKIARApQASATAkgEQASgCAOgGQgeAQgegGIgXgJIASApQASAPAegDQAPgCAMgEQgaAOgbgGIgVgJIASAsQALAJATACQAJABAHgBQgQAIgQgGIgMgIIAYBCg");
	this.shape_838.setTransform(297.8,83.8,1.227,1.227);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#A8CE38").s().p("AAVCAIgFgGIgBAIQgLgEgIgJIgFgJIgCAJQgJgHgHgKIgGgKIgDAGQgNgKgFgLIgCgKIgGAJQgJgMgFgPIgDgNIgEAGQgKgQgBgOIACgKIgGAFQgHgOADgNQABgIACgCIgGADQgBgMAEgKIAFgIIgJAEQABgKAHgKIAIgIIgJABQACgHAKgJIAIgHIgGAAQAHgJAbgUIASgDQATgCAHAAIgDAEIAKgBQANAAAGACIgHAGIAMABQAMABAIAGIgIACIAJACQAKAEAIAJIgIADIALAFQAMAIAFAPIgIAAIAJAHQAJAKAGASIgJgBIAIAMQAHAOACANIgJgBIAEAIQAFAMgBAQIgHgCIACALQADAMgCALIgIgEIACAKQABAMgFALIgFgFIABAJQAAAKgEAJIgGgFIgOAXIgagHIgBAJQgIgFgIgHg");
	this.shape_839.setTransform(298,84.9,1.227,1.227);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#8CAF2E").s().p("AgTA9QgEAFgHAEQgPAIgRgGIAQgBQASgDAKgMIAMguQgHAGgNAFQgZAKgcgKIAbADQAfgCAPgRIAMgrQgHAHgPAFQgdAKgfgMIAhADQAlgBAPgVIAMgrQgHAHgNAFQgXAMgbgGQAOACAPgCQAagFAPgUIANgfIgFAiQADAYAWARQALAKAOAFQgagHgQgWIgKgVIgMArQADAbAgASQAPAJAPAEQghgFgVgWIgNgWIgLAsQAEAXAaAPQANAJAMADQgegFgRgVIgKgUIgMAuQAEAPANANQAGAGAGADQgRgDgIgPIgFgOIgVBCg");
	this.shape_840.setTransform(240.1,106.7,1.227,1.227);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#A8CE38").s().p("Ag7B7IgGAGQgDgIgCgKIgBgJIgFAGQgFgKgBgNIAAgKIgHAFQgDgKABgNIACgLIgHADQgDgPADgNIADgJIgJAEQAAgPAFgOIAGgMIgJADQADgTAIgLQAEgGAEgCIgJACQAEgRALgKIAKgHIgHgCQAGgKAKgGIAJgDIgJgCQAJgMAUgBIgIgFQALgGAUABIgFgDQAKgDAiABIAQAKQARAKAFAEIgGAAIAJAGQALAHAEAGIgKAAIAIAHQAJAJABAJIgIgCIAGAIQAGAKAAAMIgHgCIAFAKQAEANgEAQIgHgFIADAKQABANgHASIgGgHQABAWgMAUIgGgHIgBAKQgDAMgMAMIgFgGQgFARgNANIgEgIQgFAPgRAKIgCgIQgFALgNAKIgCgJIgYALg");
	this.shape_841.setTransform(240.4,107.8,1.227,1.227);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#8CAF2E").s().p("AAHBAQgCAHgFAGQgKAOgRABIANgIQAOgKAFgPIgFgvQgEAJgKAJQgTATgdABIAagIQAbgNAIgWIgFgtQgFAKgMAKQgYATggABIAggIQAhgPAHgaIgHgtQgDAJgJAKQgTAUgbAEQAMgCAPgJQAYgOAFgYIAAgiIAKAhQAQAhAxAAQgaAEgXgPIgQgPIAGAtQALAXAkAFQASADAQgCQghAIgcgOIgUgPIAHAtQAOATAdAFQAQADALgCQgcAGgYgMIgSgOIAFAvQAJAMASAHQAIADAIABQgSADgOgKIgKgLIAGBGg");
	this.shape_842.setTransform(270.3,124.4,1.227,1.227);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#A8CE38").s().p("AAACFIgCAIQgHgHgFgJIgEgHIgDAHQgJgIgGgLIgDgJIgFAIQgIgKgEgMIgCgKIgFAFQgJgNgCgNIAAgKIgHAGQgGgNAAgRIAAgNIgHAGQgFgRADgOIAEgKIgHAFQgDgRAGgMIAGgIIgHABQACgMAHgIIAHgHIgJABQACgJALgIIAJgGIgJgBQAHgJATgHIgGgBQAKgGAfgMIARACQATACAHADIgFADIALACQANADAGAEIgJAEIAKADQAMAFAFAIIgJABIAIAEQAKAHAEALIgHABIAJAHQAIALADAQIgIgDIAHAJQAGAMAAATIgIgEIAEANQAFAOgDAPIgJgEIADAJQAAANgFAPIgGgEIAAAKQAAANgFALIgHgGQACARgMAPIgEgGQgCANgIANIgFgHIgSATg");
	this.shape_843.setTransform(270.3,126,1.227,1.227);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#8CAF2E").s().p("AAGBAQgBAHgFAGQgKAOgSABIAPgIQAOgLAFgOIgGgvQgEAKgJAIQgUATgeABIAagIQAcgNAHgVIgFgtQgEAJgMALQgYASghABIAhgJQAigOAGgZIgGgtQgEAIgKALQgSAUgcADQANgCAPgJQAYgPAFgXIAAgiIAJAhQARAhAyAAQgbAEgXgPIgRgOIAGAtQAMAWAkAGQASACAPgBQggAHgbgOIgVgPIAGAuQAPATAeAEQAOADANgCQgdAHgYgMIgTgPIAHAvQAIANASAGQAJAEAGABQgRACgNgKIgKgLIAFBGg");
	this.shape_844.setTransform(300,128,1.227,1.227);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#A8CE38").s().p("AAACFIgCAIQgHgHgFgIIgEgIIgDAHQgJgIgFgKIgEgKIgFAIQgHgKgEgLIgDgLIgFAFQgJgNgCgNIAAgKIgHAGQgGgNAAgQIAAgOIgHAGQgFgRADgOIAEgKIgHAFQgCgQAFgNIAGgIIgHABQACgMAHgIIAHgHIgJABQACgJAKgIIAKgGIgJgBQAHgJATgHIgGgBQAKgGAfgMIARACQATACAHADIgFADIALACQANACAGAFIgJAEIAKADQAMAFAFAIIgJABIAIAEQAJAHAFALIgHABIAIAHQAJALADAQIgIgDIAGAJQAHAMAAATIgIgEIAEANQAEAOgCAPIgJgEIACAJQABANgFAPIgGgEIAAAKQgBANgEALIgHgGQACARgMAPIgEgGQgCANgIANIgFgHIgSATg");
	this.shape_845.setTransform(300.1,129.5,1.227,1.227);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#8CAF2E").s().p("AAYA9IgDAOQgGAQgQAGIALgMQAMgOABgPIgSgsQgCAJgGAMQgOAWgcAKIAXgPQAWgUACgXIgQgqQgCALgJANQgRAYggAKIAcgSQAcgWAAgaIgRgpQgBAKgHAMQgNAYgbAKQAsgagBgkIgJghIARAeQARASAbABQARAAAMgFQgZALgZgIIgUgKIARApQASATAkgEQASgCAOgGQgeAQgegGIgXgJIASApQASAPAegDQAPgCAMgEQgaAOgbgGIgVgJIASAsQALAKATABQAJABAHgBQgQAIgQgGIgMgIIAYBCg");
	this.shape_846.setTransform(329.4,127.9,1.227,1.227);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#A8CE38").s().p("AAVCBIgGgGIgBAIQgLgEgHgJIgGgIIgCAIQgJgGgGgLIgGgKIgEAHQgNgLgEgLIgDgKIgFAJQgJgMgGgPIgDgNIgEAGQgKgQgBgOIACgKIgGAFQgHgOADgNQACgKAEgDIgHADQgCgMAFgKIAFgIIgJAEQAAgJAHgKIAIgJIgJABQADgHAJgIIAJgIIgGAAQAHgIAbgUIASgDQATgCAHAAIgEAEIAKgBQANAAAHACIgHAGIAMABQAMABAHAGIgJAEIAJACQALAEAHAJIgHADIAKAFQAMAIAGAPIgIAAIAIAHQAKAKAFASIgJgBIAIAMQAIAOABANIgJgCIAFAJQAEAMgBAQIgHgCIADALQADAMgCALIgIgEIACAKQAAAMgEALIgGgFIABAJQAAAKgDAJIgHgFIgNAYIgagHIgBAIQgJgFgHgHg");
	this.shape_847.setTransform(329.6,128.8,1.227,1.227);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#8CAF2E").s().p("AAYA8IgDAPQgGAQgQAFIALgLQAMgOABgPIgSgtQgCAKgGALQgOAYgcAJIAXgQQAWgTACgYIgQgpQgCAKgJANQgRAZggAJIAcgRQAcgWAAgaIgRgpQgBAKgHAMQgNAXgbALQAsgagBgkIgJghIARAeQARASAbAAQARABAMgFQgZAKgZgHIgUgKIARApQASATAkgEQASgCAOgGQgeAPgegFIgXgJIASApQASAPAegDQAPgBAMgFQgaAOgbgGIgVgJIASAsQALAKATABQAJABAHgBQgQAIgQgGIgMgIIAYBCg");
	this.shape_848.setTransform(334.3,96.4,1.227,1.227);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#A8CE38").s().p("AAVCBIgGgGIgBAIQgLgEgHgJIgGgJIgCAJQgIgGgIgLIgFgJIgEAGQgMgKgGgMIgCgJIgFAIQgKgLgEgQIgDgNIgFAHQgJgQgBgOIABgLIgGAGQgIgPADgNQACgLAFgCIgHADQgCgMAFgKIAFgIIgJAEQAAgJAIgKIAHgJIgJABQADgHAKgIIAIgIIgGAAQAHgIAbgUIASgDQATgCAHAAIgEAEIALgBQAMAAAHACIgHAGIALABQANABAHAGIgJAEIAJACQAKAEAIAJIgHADIALAFQALAIAGAPIgIAAIAJAHQAJAKAFASIgJgBIAIAMQAIAOABANIgJgCIAFAJQAFAMgCAQIgHgCIADALQADAMgCALIgIgEIABAKQACAMgFALIgGgFIABAJQAAAKgDAJIgHgFIgNAXIgagHIgBAJQgIgFgIgHg");
	this.shape_849.setTransform(334.6,97.3,1.227,1.227);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#8CAF2E").s().p("AAyBIQADgSgHgOIgmgcIADAWQAAAbgSAXQAHgKAEgPQAJgdgKgUIgkgbIADAYQgBAfgWAZQAJgNAGgRQAMgigPgWIgkgaIAFAWQACAbgPAVQAHgLADgPQAFgbgMgVIgZgXIAeARQAiAJAkgkQgQAWgaAHIgXACIAkAaQAZAGAcgWQAOgMAKgMQgRAdgcALIgZAFIAnAZQAXADAYgRQAMgJAIgKQgQAZgaAIIgWAEIAmAcQAPACAQgJQAJgEAFgEQgKAPgQADIgPAAIA1AsIg6gmIAEAOQADARgLAOQADgGABgJg");
	this.shape_850.setTransform(345.1,46.2,1.227,1.227);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#A8CE38").s().p("AAbBtIgKgFIAAAHQgQgCgJgHIgIgHIgBAKQgNgFgMgKIgKgKIgBAJQgQgKgIgLIgFgKIgCAIQgNgKgGgMIgCgKIgEAGQgIgKgCgLIABgJIgFAIQgFgIACgMIACgLIgIAGQgBgHADgMIAEgLIgFADQABgHAHgSIAHgRIAOgMQAQgMAGgDIgCAFIAJgHQALgIAHgBIgDAJIAKgGQAMgFAJACIgFAIIAJgDQALgDALAFIgEAGIAKgCQAOABAOAKIgHAEIALABQANAEAOANIgIADIAMAFQAOAIAJAMIgJADIAIAFQAKAHAIAPIgHACIAIAHQAIAIAFALIgJAAIAHAHQAHAKACAMIgIgBIAFAHQAFAIACAKIgIgBIABAbIgaAHIAEAIQgKAAgKgCIgIgCIAEAHQgMACgLgEIgKgEIACAJQgLgBgLgGg");
	this.shape_851.setTransform(345.8,46.2,1.227,1.227);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#8CAF2E").s().p("AhaAmIghAIIAegQQASgRABgaQABgRgEgMQAJAZgIAZQgFANgGAHIAqgQQAUgRgDglIgHggQAPAegHAeQgEAOgGAJIAqgQQARgRgDgeIgFgbQANAbgIAaQgDAOgGAHIAsgRQAKgLACgSIAAgRQAHARgHAPQgDAIgFAEIBCgVIhAAcIAPAEQAPAGAFARQgEgGgHgGQgOgMgPgBIgrARIAVAIQAXAPAHAdQgEgMgJgMQgUgYgXgDIgrAQIAYALQAYASAJAhQgGgPgLgPQgVgcgbgBIgpAQIAVAIQAYANALAZQgagrgjgBg");
	this.shape_852.setTransform(393.3,12.6,1.227,1.227);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#A8CE38").s().p("Ag4BlIgIgGIADAJQgJAAgKgIIgIgIIABAKQgHgDgIgKIgHgJIAAAGQgFgFgLgPIgLgPQgEgiABgLIAEAEQgCgTAEgLIAGAIIABgLQABgNAHgGIADAJQAAgEACgFQAEgKAKgHIADAHIAFgKQAJgMAPgFIgBAIIAHgJQALgJASgEIgCAJIAMgHQAOgHANgBIgCAJIAJgFQAMgEAQACIgCAHIALgDQAMgCALACIgFAIIAKgCQAMAAALAFIgFAGIAJgBQAKABAJADIgGAGIAXAOIgIAZIAIABQgIAOgLAHIAIABQgIAQgPAHIAJADQgHAJgLAHIgKAFIAGAEQgKAMgMAEIgKADIAIAGQgLAJgQAEIgNACIAHAFQgRAJgOAAIgKgBIAFAGQgPAFgNgDIgHgDIABAEIgFAAQgJAAgIgDg");
	this.shape_853.setTransform(394.5,12.6,1.227,1.227);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#8CAF2E").s().p("AhaAmIghAIIAegQQASgQACgbQAAgQgEgNQAJAZgIAZQgFANgGAHIAqgQQAUgRgDgkIgHghQAPAegHAeQgEAOgGAJIAqgQQAQgRgCgeIgFgbQANAbgIAaQgDANgGAIIAsgRQAKgLACgTIAAgQQAHARgHAPQgDAIgFAEIBCgVIhAAcIAOAEQAQAHAFAQQgEgFgHgGQgOgMgPgCIgsARIAVAJQAXAPAIAcQgFgLgJgMQgTgYgXgDIgrAPIAYAMQAYASAIAgQgGgOgKgPQgVgdgbgBIgqAQIAWAIQAZANAKAZQgagrgjgBg");
	this.shape_854.setTransform(224.3,39.8,1.227,1.227);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#A8CE38").s().p("Ag6BmIgHgGIADAJQgKAAgJgIIgIgIIABAJQgHgDgIgKIgHgJIAAAGQgFgEgLgQIgLgPQgEgiABgLIAEAEQgCgTAEgLIAIAHIAAgLQACgNAHgGIADAJQAAgEACgFQAEgKAKgHIADAHIAFgKQAIgMAQgFIgBAIIAHgJQALgJASgEIgCAJIALgHQAOgHAOgBIgCAJIAJgFQAMgEAQACIgCAHIAKgDQANgCALACIgFAIIAKgCQAMAAALAFIgFAGIAIgBQAKABAKADIgGAGIAXAOIgIAZIAIABQgIAOgLAHIAIABQgIAQgPAHIAJADQgIAJgLAHIgJAFIAGAEQgLAMgMAEIgJADIAIAGQgLAJgQAEIgNACIAHAFQgRAJgOAAIgKgBIAFAGQgOAGgOgDIgLgFIADAHIgGAAQgJAAgIgDg");
	this.shape_855.setTransform(225.4,40,1.227,1.227);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#8CAF2E").s().p("AhKBAQAKgWgJgZQgFgPgJgKQATASABAbQABAOgDAKIAhggQAMgXgRgfIgTgcQAZAVAFAfQADAOgDAKIAggeQAIgXgMgbIgPgWQAVATADAbQADAOgDAKIAighQAFgOgFgRIgGgPQAMAMAAARQAAAIgDAHIA1gtIgxAxIAPgCQARABALAOQgGgEgJgDQgSgGgOAEIgiAfIAXABQAbAFASAWQgIgIgNgHQgbgPgXAHIgiAdIAaACQAeAIAUAaQgLgLgQgJQgdgTgZAKIgiAfIAYgBQAbADATAUQgmgggiAOIgcAUg");
	this.shape_856.setTransform(244.6,9.3,1.227,1.227);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#A8CE38").s().p("Ag2BzIgLgGIADAFQgIgCgQgKIgQgKQgRgdgDgLIAGADQgKgRAAgMIAHAFIgDgKQgDgNADgIIAHAGIgBgIQAAgMAFgKIAGAGQgBgEACgHQAEgNAMgMIACAIIAEgKQAGgMAQgMIABAJIAIgKQAMgMANgHIACAJIAGgHQAKgIAOgFIACAHIAIgGQALgHAMgCIgBAJIAKgFQALgFAMAAIgEAHIAIgDQAJgDAKgBIgCAIIAaAEIABAaIAJgCQgDAQgGALIAHgCQgBATgMAMIAJgBQgFARgNAMIAHAAQgFAPgIAJIgIAGIAJACQgMAVgVAJIAJACQgMAPgNAFIgLADIAJADQgOALgNACQgGABgDgBIADAEQgKAGgLgBIgJgCIAHAHQgJADgMgDIgLgFIAFAJQgIgBgLgFg");
	this.shape_857.setTransform(244.7,9.4,1.227,1.227);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#8CAF2E").s().p("AAABjQgKgWgagKQgQgGgMAAQAbgBAVARQALAIAFAIIgBgtQgLgYgjgJIghgFQAhgEAaARQANAIAHAIIgCgtQgLgUgegJIgbgDQAdgEAWAPQAMAJAFAIIgBgvQgIgOgQgIIgPgFQARgCANAMQAGAGADAFIAChGIAEBGIAJgMQAMgMARAAQgGACgJAFQgQAJgHAOIABAvIAQgRQAWgPAdAAQgMABgPAFQgdAKgKAUIAAAuIATgTQAZgRAhACQgPAAgSAGQgiALgKAZIABAtIAPgSQAVgSAbgBQgxALgMAgIgDAjg");
	this.shape_858.setTransform(232.6,-9.3,1.227,1.227);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#A8CE38").s().p("AgmCJIAFgCQgUgFgJgIIAJgCQgUgFgGgOIAJAAQgPgFgFgUIAIAAQgDgBgEgHQgIgLgBgRIAIADQgDgCgDgHQgFgMACgTIAIAFQgHgUAGgWIAIAEQgCgDAAgGQAAgMAIgPIAGAEIABgLQACgNAFgJIAGAHIACgKQAEgMAIgKIAFAHIACgHQAEgJAGgJIAEAHIAUgRIAUARIAEgKQALAMADANIADgHQAOAOABAPIAFgGQAKAQAAAQIAGgDQANAXgFAOIAIgGQAHAXgGAUIAIgEQADASgFANQgCAHgDADIAIgEQAAAagPALIAIAAQgEASgOAGIAJAAQgFANgTAIIAJACQgFAEgMAFIgLADIAFADIgYAJIgSAEQgggGgKgFg");
	this.shape_859.setTransform(232.5,-10.9,1.227,1.227);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#8CAF2E").s().p("AAABjQgKgWgagKQgQgHgMAAQAaAAAWAQQAKAJAGAIIgCgtQgKgYgjgJIghgFQAhgEAaAQQANAIAGAJIgCgtQgLgUgdgJIgcgEQAegDAWAPQALAIAFAIIgBgvQgHgNgRgIIgPgGQASgBAMAMQAHAFACAGIAChGIAFBGIAJgMQAMgMARAAQgGACgIAFQgRAJgHANIACAvIAQgQQAVgQAdABQgMABgPAFQgdAJgKAVIAAAtIATgSQAZgSAhACQgPABgSAFQgiALgKAZIABAtIAPgRQAVgSAbAAQgNABgPAHQgZAMgIAWIgDAjg");
	this.shape_860.setTransform(209,16.8,1.227,1.227);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#A8CE38").s().p("AglCJIAFgDQgUgDgJgIIAJgDQgUgGgGgNIAJAAQgPgGgFgSIAIAAQgEgDgEgGQgIgLAAgQIAIACQgDgCgDgHQgFgNACgSIAIAEQgHgSAGgYIAIAFQgCgDAAgGQAAgNAIgOIAGADIABgKQABgNAGgJIAGAGQAAgDACgHQAEgMAIgJIAEAIIACgIQAEgJAGgJIAEAIIAUgRIAUAQIAEgIQALAMADANIADgHQAOAOABAPIAFgHQAKARAAARIAGgEQANAWgFAPIAIgGQAHAWgGAVIAIgFQADASgFAOQgCAGgDADIAIgDQAAAbgOAHIAIAAQgEAUgOAFIAJAAQgFAOgTAGIAJADQgFAFgMAEIgLADIAFACQgGAEgTAFIgRAGQgggIgKgEg");
	this.shape_861.setTransform(209,14.8,1.227,1.227);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#8CAF2E").s().p("AAABjQgKgWgagKQgQgHgMABQAbgBAVAQQALAJAFAIIgBgtQgLgYgjgJIghgFQAhgEAaAQQANAJAHAIIgCgtQgLgUgegJIgbgDQAdgEAWAQQAMAHAFAJIgBgwQgIgNgQgIIgPgGQARgBANAMQAGAGADAGIABhHIAGBHIAIgNQAMgMASAAIgPAHQgQAJgHANIABAwIAQgQQAVgQAeAAQgNABgOAFQgdAKgKAUIAAAtIASgSQAZgTAhAEQgPAAgRAFQgjALgJAZIABAtIAPgRQAUgSAbgBQgxALgMAgIgDAjg");
	this.shape_862.setTransform(189.3,40.9,1.227,1.227);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#A8CE38").s().p("AglCIIAFgCQgUgEgJgIIAJgDQgUgFgGgOIAJAAQgPgFgFgTIAIAAQgEgCgEgGQgIgLAAgRIAIADQgDgCgDgHQgFgNACgTIAIAFQgHgTAGgXIAIAFQgCgDAAgHQAAgMAIgPIAGAEIAAgKQACgNAGgKIAGAIIACgKQAEgMAIgJIAEAHIACgIQAEgJAGgIIAEAHIAUgRIAUAQIAEgIQALAMADANIADgHQAOAOABAQIAFgHQAKAQAAARIAGgEQANAXgFAOIAIgFQAHAWgGAUIAIgFQADATgFANQgCAHgDADIAIgEQAAAagOAIIAIAAQgEATgOAGIAJAAQgFANgTAHIAJACQgFAFgMAFIgLADIAFACIgYAJIgSAFQgggHgKgFg");
	this.shape_863.setTransform(189.2,39,1.227,1.227);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#8CAF2E").s().p("AgQAwQgIgkgYgMIgtgCIAQAQQAQAVgBAcQAAgNgFgPQgJgagWgKIgigGIAigCQAYgHANgYQAGgNADgPQgCAbgSATIgTAOIAtADQAagIANgiIAHghQAAAhgRAZIgTARIAtACQAVgJALgcIAGgbQAAAdgRAVIgSAPIAvADQAOgFAKgQQAFgHADgHQgBASgNALIgNAHIBFAJIhGgCIALAJQAMANgDASQgBgHgEgIQgIgRgMgIIgvgEIAPASQAOAWgFAeQABgMgEgPQgGgegUgMIgtgFIAQAVQAPAagGAhQABgPgDgSg");
	this.shape_864.setTransform(148.8,105.8,1.227,1.227);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#A8CE38").s().p("AgmBeIgJgGIADAJQgQgCgLgIIgIgJIgBAIQgLgDgHgJIgFgJIgBAJQgIgDgGgMIgEgLIgDAJQgFgFgDgNIgCgLIgCAFQgDgHgEgTIgDgRIAGgRQAGgSAEgHIABAGIAEgKQAGgMAFgFIACAJIAGgJQAIgLAIgDIgBAJIAGgHQAIgIAMgCIgBAIIAJgGQAMgGARABIgEAGIAKgEQAOgDARADIgFAHIAOgBQAQgBANAFIgGAJIAKgBQANABANAJIgFAFIALACQAMADAJAGIgIAFIAKADQALAFAIAJIgHADIAIAEQAJAFAHAGIgIAEIAPAUIgSAUIAHAFQgIAFgKADIgIACIAHAFQgIAHgMADIgLABIAHAGQgKAFgNACIgLAAIAEAGQgPAHgMgBIgKgCIAFAIQgOADgQgCIgMgEIAEAIIgDAAQgQAAgNgFg");
	this.shape_865.setTransform(150.2,106,1.227,1.227);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#8CAF2E").s().p("AAWA1QAAgegRgRIgrgNIAMAWQAJAegNAfQAFgPAAgSQAAglgVgOIgqgOIAMATQAKAYgIAbQAJgwgegYIghgOIAiAGQAYgCATgUQAJgMAFgNQgIAagWAPIgVAJIArAOQAbgDASgfQAJgPAFgOQgGAggWAVIgXAMIAsANQAYgFAQgaQAIgMAEgLQgGAdgVAQIgTAKIAtANQAOgDANgNQAHgGADgGQgEAQgPAIIgNAFIBCAXIhFgQIAJALQAIAQgFAQQAAgHgCgJQgEgSgKgLIgtgNIAKAUQAJAagLAcQADgNAAgPg");
	this.shape_866.setTransform(215.9,74.8,1.227,1.227);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#A8CE38").s().p("AgPBhIgMgGIACAJQgTgDgLgJIgIgHIABAIQgQgEgKgLIgGgKIgCAHQgKgGgFgKIgDgJIgDAJQgIgGgDgMIgBgMIgFAIQgDgHgBgMIAAgMIgDAFQgBgHAAgSIABgTIAJgPQALgRAFgFIAAAGIAGgJQAIgLAGgEIAAAKIAHgIQAJgIAKgCIgDAJIAHgGQAKgFAMAAIgCAHIAKgFQAOgEAQAFIgGAGIAKgCQANgBASAHIgHAGIANABQAPADANAIIgHAGIAKACQAMAEAMALIgGAEIAJAEQALAGAIAIIgIADIAKAFQAKAIAFAKIgIAAIAHAFQAIAHAFAIIgIACIAKAZIgWAPIAGAGQgJAEgKABIgJABIAHAFQgLAFgMABIgLgBIAFAHQgKADgNgBIgKgCIADAHQgQADgMgDIgJgEIADAJQgOAAgOgGg");
	this.shape_867.setTransform(217.4,74.6,1.227,1.227);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#8CAF2E").s().p("AAWA1QAAgfgRgQIgrgOIAMAXQAJAegNAeQAFgPAAgRQAAglgVgPIgqgOIAMAUQAKAYgIAaQAJgvgegYIghgOIAjAGQAXgCATgVQAKgNADgLQgHAZgWAPIgVAKIArANQAbgDASgeQAJgPAFgPQgGAhgWAUIgXAMIAsANQAXgFARgZQAIgMAEgMQgFAdgWARIgUAJIAtANQAPgDAOgMQAGgGADgHQgEAQgPAJIgOAFIBDAWIhFgQIAJAMQAIAPgGARQAAgHgCgKQgDgSgKgKIgtgNIAKAUQAJAZgLAcQADgMAAgPg");
	this.shape_868.setTransform(195.9,104.3,1.227,1.227);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#A8CE38").s().p("AgPBhIgMgGIACAJQgTgDgMgJIgIgHIACAIQgRgFgJgKIgGgKIgCAHQgKgGgFgKIgDgJIgDAJQgIgGgDgMIgBgMIgFAIQgDgHgBgMIAAgMIgDAFQgBgHAAgSIABgTIAJgPQALgRAFgFIAAAGIAGgJQAIgLAGgEIAAAKIAHgIQAJgIAKgCIgDAJIAHgGQAKgFAMAAIgCAHIAKgFQAOgEAQAFIgGAGIAKgCQANgBASAHIgHAGIANABQAPADANAIIgHAGIAKACQAMAEAMALIgGAEIAJAEQALAGAIAIIgIADIAJAFQALAIAFAKIgIAAIAHAFQAIAHAFAIIgIACIAKAZIgWAPIAGAGQgJAEgKABIgJABIAGAFQgKAFgMABIgLgBIAFAHQgKADgNgBIgKgCIADAHQgQADgMgDIgJgEIADAJQgOAAgOgGg");
	this.shape_869.setTransform(197.4,104.2,1.227,1.227);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#8CAF2E").s().p("AhKBBQAKgWgJgaQgGgPgIgIQATASACAaQABAOgDAJIAggfQALgYgRgfQgJgQgLgMQAaAWAGAeQADAOgDALIAhgfQAHgWgNgbQgHgOgIgJQAVAUAEAbQACANgCAKIAighQAEgPgFgRQgCgJgEgGQANALAAARIgDAPIA0guIgvAzIAPgDQAQAAAMANIgPgGQgSgGgOAEIgiAhIAWAAQAbAFATAVQgIgIgOgHQgagOgXAHIghAfIAZACQAeAGAVAaQgLgLgQgIQgfgSgYALIggAfIAXgCQAbADARATQgmgegiAPIgbAUg");
	this.shape_870.setTransform(77.7,-17.4,1.227,1.227);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#A8CE38").s().p("AgzB2IgKgFIACAFQgGgCgQgKIgRgJQgRgdgDgLIAEACQgKgRgBgNIAJAFIgEgKQgDgMAEgJIAHAHQgCgDAAgGQAAgKAGgLIAFAFIABgLQACgNALgMIADAIIAEgLQAGgNAPgLIAEALIAHgLQALgMANgHIACAJIAGgIQAJgJAPgFIABAHIAJgHQAKgHALgDIgBAJIAJgFQALgGAMAAIgDAHIAHgDQAKgEAKgBIgDAIIAaADIADAaIAHgDQAAAKgFAKIgEAHIAIgCQgBAUgKAMIAJgBQgFASgMAMIAGABQgHAYgOAGIAIACQgKAUgUAKIAJABQgMAPgNAGIgKADIAIADQgMAMgNADIgLABIAEAFQgKAGgKAAIgJgCIAFAGQgIAEgNgDIgKgEIAFAIQgIAAgLgGg");
	this.shape_871.setTransform(77.8,-17.6,1.227,1.227);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#8CAF2E").s().p("AgpBaQABglgqgZQAZAKANAYQAFAMABAKIASgpQABgagcgWIgdgSQAgAKARAZQAJANACALIAQgqQgCgYgWgUIgYgPQAcAJAPAYQAFAMACAJIAUgqQgCgQgLgOIgLgMQAQAHAGAPIADAOIAfg/IgYBCIAMgIQARgGAPAJQgHgBgJAAQgSACgMAJIgTAsIAWgJQAagHAaAPQgMgGgOgBQgfgEgSAPIgSApIAXgIQAfgGAdAQQgOgGgSgCQgjgEgTATIgRAoIAUgKQAZgHAYALQgNgEgQAAQgbAAgRARIgRAeg");
	this.shape_872.setTransform(43.7,-18,1.227,1.227);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#A8CE38").s().p("AghCLIgSgDQgbgUgHgJIAGAAQgQgMgFgLIAJABQgPgNAAgPIAJAEQgKgLACgTIAIADQgDgEgBgHQgCgOAGgOIAFAFQgBgDAAgHQABgOAKgQIACAHIADgNQAEgPAKgMIAFAIIADgJQAFgMANgKIAEAGIAFgJQAHgLAKgHIACAJIAGgIQAHgJALgFIAAAIIAFgGQAIgHAJgFIAAAJIAagHIAOAXIAHgFQACAJAAAKIAAAJIAGgFQAIARgGAQIAIgEQADASgHAQIAHgCQACAagKAKIAKgBQgDAWgOARIAIgCQgFASgJALIgJAGIAIAAQgHAQgLAIIgLAGIAHADQgHAJgLAEIgJACIAJAEQgHAGgMACIgMAAIAHAGQgHACgMgBIgLgBIAEAEIgCAAIgYgCg");
	this.shape_873.setTransform(43.6,-19.2,1.227,1.227);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#8CAF2E").s().p("AAjBdQgQgRgbAAIgcADQAYgKAZAHQANAEAIAGIgTgpQgRgSgkAEQgSACgPAGQAegPAeAFQAOADAJAGIgSgpQgSgPgeADQgPABgMAFQAbgNAaAFQANADAIAGIgSgrQgMgKgSgCIgQABQAQgIAQAGQAIADAEAFIgYhCIAfA/IADgOQAGgPAQgHQgFAFgFAGQgLAPgCAPIASArIAIgVQAOgYAcgJQgLAGgMAJQgXAUgCAXIARAqIALgXQAQgZAggKQgOAGgOAMQgcAVAAAbIASApQABgJAHgNQALgWAXgKQgKAEgKALQgTAVABAYIAJAhg");
	this.shape_874.setTransform(-20.3,-22.7,1.227,1.227);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#A8CE38").s().p("AAHCMIADgEQgSAEgLgEIAHgGQgTACgMgKIAIgEQgOAAgNgPIAIgDQgEgBgGgEQgLgHgGgQIAHAAQgEgBgEgGQgKgKgGgSIAJACQgPgRgCgWIAKAAIgFgHQgFgLABgRIAHACIgCgKQgDgNABgLIAIAEIgCgKQgBgNAFgLIAFAFIgBgJQAAgKAEgJIAGAFIAOgXIAYAIIABgJQAOAIAIAKIAAgIQARAHAHAPIACgJQAPALAHAQIAEgGQANAKAFALIADAKIAFgIQAPASACAWIAFgHQAJAQABAOIgBAKIAGgFQAHAOgCANQgCAKgDACIAIgDQADATgLALIAJgEQgBAPgPANIAJgCQgEALgQAMIAGAAQgFAFgPANIgOALQgdAEgMAAIgEAAg");
	this.shape_875.setTransform(-19.9,-23.9,1.227,1.227);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#8CAF2E").s().p("ABCBKQgWgKgaAKQgPAFgGAHQARgRAZgCQAOgBAKACIggggQgYgLggARQgQAJgLALQAVgaAfgGQAOgCALACIgggfQgWgIgbANQgNAHgKAJQAUgWAagEQAOgCAKADIgigiQgOgFgRAGQgKACgFAEQALgNARAAQAIAAAHADIgug0IAzAuQgCgGAAgIQABgRANgMIgHAPQgGASAFAOIAgAiQgBgJACgOQAEgaAWgTIgPAWQgOAbAHAWIAeAhQgCgLADgPQAHgeAagUIgUAbQgSAeALAZIAeAgQgCgKABgNQADgaATgSQgIAHgHAQQgKAaAKAWIAUAbg");
	this.shape_876.setTransform(-18.9,21.1,1.227,1.227);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#A8CE38").s().p("AAjB2QgTAJgOgGIAJgGQgNAFgRgJIAFgGQgFACgHgCQgNgDgMgMIAIgDQgEAAgGgDQgNgGgMgPIAJgDQgTgKgLgUIAJgCQgOgHgHgXIAHgBQgNgNgEgRIAJABQgLgNAAgUIAIACQgIgLgBgQIAJADIACgaIAagEIgCgIQAPADAMAGIgCgGQATAAAMALIgBgJQASAEAMANIACgIQAXAJAHANIABgJQAVALAKAVIACgJQAPAMAFAMQADAGAAAFIAEgIQAMAMACAOQABAGAAAEIAFgFQAKARgGANIAHgHQAHAOgKASIAIgFQgBAMgMARIAGgCQgEAKgRAdQgdASgMADIACgFQgRAKgMAAg");
	this.shape_877.setTransform(-18.9,20.9,1.227,1.227);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#8CAF2E").s().p("ABCBKQgWgKgaAKQgPAFgIAIQASgTAagBQAOgCAJADIgfggQgYgLgfARQgQAJgLALQAVgaAegGQAOgCALACIgggfQgWgIgbANQgNAIgJAIQATgVAbgEQANgCAKADIghgjQgPgFgRAGQgJADgGADQAMgMAQAAQAJAAAGADIgug1IAzAvQgDgGAAgIQABgRANgMIgHAPQgGARAFAPIAgAiQgCgJADgOQAFgaAVgTIgPAWQgNAbAHAWIAeAiQgCgMADgPQAGgeAagUIgUAbQgRAeAJAZIAfAgQgCgJABgOQADgZASgTQgHAIgGAOQgKAaAJAWIAVAbg");
	this.shape_878.setTransform(-34,55.9,1.227,1.227);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#A8CE38").s().p("AAjB2QgSAJgOgGIAHgGQgMAFgRgKIAEgFQgEABgHgBQgNgDgMgMIAHgEQgEAAgGgDQgNgGgMgPIAMgDQgUgKgLgVIAJgDQgNgFgHgYIAHgBQgNgMgEgSIAJABQgMgNABgTIAGACQgGgLgCgQIAIADIAEgaIAagCIgEgIQAQACALAHIgCgHQAUAAANALIgBgKQARAFANAMIABgGQAOAFAKAJQAEAEABAEIADgJQATALALAUIAAgKQAQAMAFANQAEAGAAAEIADgIQALAMADAOQABAHAAAEIAEgFQAKARgFANIAGgHQAHAOgKASIAIgFQgBAMgKARIAEgCQgDAKgRAeQgdARgMADIADgFQgSAKgMAAg");
	this.shape_879.setTransform(-34.1,55.9,1.227,1.227);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#8CAF2E").s().p("AgzA5IAEgNIg4ApIAzgvQgGACgJgBQgQgBgLgOQAGAEAIADQARAIAPgDIAkgeQgKABgNgEQgagFgRgYIAVARQAaAPAWgFIAigbQgLABgOgEQgdgKgTgbIAaAWQAdAUAZgIIAjgdQgJACgNgCQgagFgQgVQAIAKAQAHQAZANAXgHIAdgTIgYAYQgMAWAIAaIAMAaQgRgUgBgbIAEgWIgjAcQgNAXAPAhQAHARAKALQgYgWgDggIABgYIgiAdQgKAVAMAcQAFAOAIAKQgUgWgCgaIACgYIgkAeQgGAPAEARQACAKADAGQgMgNABgSg");
	this.shape_880.setTransform(-24.3,152.4,1.227,1.227);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#A8CE38").s().p("AhJB4IAEgHQgMAGgPAAIADgIIgagFIgBgbIgIACQACgKAEgJIAFgHIgIACQABgMAHgKIAGgIIgJAAQAEgLAJgKIAHgGIgHgCQAHgPAJgIIAIgGIgJgDQAIgNANgJIAMgGIgJgDQANgOANgFQAHgCAEAAIgIgEQAMgLAOgBIAMgBIgFgGQAJgFAMACIAJACIgGgHQAOgEARALIgEgJQAMACAQAMIgCgFQAKAFAbAUIAHARIAKAYIgFgDIAFALQAEAMAAAHIgIgFIADALQACAMgEAIIgGgHIAAAJQAAALgHAKIgFgGIgCALQgFAOgMAKIgCgIIgEAKQgIAMgPAKIgBgJQgMATgVAJIgBgKQgIAOgZAFIAAgHQgNALgSADIADgIQgLAIgPAAIgHAAg");
	this.shape_881.setTransform(-25,152.3,1.227,1.227);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#8CAF2E").s().p("AAZATIANgVIgsAJQgSAOgDAfQgCAPACAMQgIgcALgZIANgTIgtAJQgNAJgEATQgDAIAAAHQgFgRAJgOIAKgKIhEAKIBDgSQgGAAgHgGQgOgIgCgSIAJAOQALANAPAFIAtgKQgIgCgKgKQgTgRgEgeIAJAZQAPAbAWAHIAsgJQgKgEgLgLQgVgVgDgiIALAfQARAgAaAGIAsgJQgJgEgLgIQgUgQgGgaQAIARAGAJQAPAXAYAFIAjgEIgiALQgUAMgGAbQgEARACAMQgFgbANgYIANgRIgsAJQgXANgCAlQgCASADAPQgKggAMgdg");
	this.shape_882.setTransform(-33,130.2,1.227,1.227);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#A8CE38").s().p("AgUBmIAEgJQgNAIgZgHIADgGQgRADgRgHIAGgHQgQADgQgLIAGgFQgNgBgOgHIAHgFIgUgRIAMgYIgIgCQAHgIAIgFIAHgEIgHgCQAHgKALgGIAJgEIgIgEQAJgIAMgFIAKgDIgFgFQANgKAMgDIAKgBIgHgHQANgHAQgBIANgBIgGgHQARgGANACQAHABAEACIgFgGQAagFAKALIgBgHQAUABAIANIgCgJQAOADAKASIABgJQAKAHAIASIACgGQAHAJAOAeIgBASQgBASgCAHIgDgFIgBAMQgCAMgEAGIgEgIQgCAUgMAIIgCgJQgDAPgRAIIgBgHIgHAJQgKAKgQADIACgIIgIAIQgMAHgTABIAAgGQgQAKgSAAIgHgBg");
	this.shape_883.setTransform(-34.6,130.2,1.227,1.227);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#8CAF2E").s().p("AA2A3QANgEAJAAIgmgYQgagEgaAYQgNAMgIANQAPgdAbgNQAOgGAKgBIgngXQgWgBgXATQgMAKgGAKQANgaAZgKQANgFAKAAIgpgZQgPgBgPAKQgIAEgGAFQAJgPARgEQAIgCAHABIg6goIA9AiQgDgFgCgJQgDgQAJgPIgDAQQgBASAIANIAnAZQgDgIgBgOQgCgbAQgYIgJAaQgHAdAMAUIAlAYQgEgKgBgPQAAgfAVgaIgOAfQgJAiAQAVIAlAYQgDgGgDgKQADAKAGAJIAbAWIgfgPQgYgEgWAPQgNAIgGAJQAOgVAYgHgABTgaIgIAbQgBAJAAAJQgCgYALgVg");
	this.shape_884.setTransform(-21.1,90.2,1.227,1.227);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#A8CE38").s().p("AAlBxIAFgIQgNAJgSgGIAEgGQgEACgHAAQgNAAgOgJIAGgFQgEABgHgBQgOgDgOgMIAIgEQgWgFgPgSIAJgEQgEAAgFgEQgLgGgIgPIAHgDQgPgJgIgPIAJgCQgNgJgEgTIAIABQgJgJgFgPIAIABIgDgaIAYgKIgEgHQAQgCAMAEIgEgHQATgEAOAIIgDgIQASABAPAJIgBgHQAZACAJAMIAAgKQAXAGAOARIAAgJQARAHAJALQAEAGABAEIABgJQAXAPAAARIAEgGQAOAOgDAPIAFgIQAIANgFASIAHgGQADAMgHATIAGgDQgBALgLAgQgYAXgKAGIABgGQgPAOgLADIADgJQgNALgNAAIgEAAg");
	this.shape_885.setTransform(-21.7,90.3,1.227,1.227);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#8CAF2E").s().p("AhFBGQAJgWgMgZQgHgPgJgJQAVARAEAbQACAOgDAKIAeghQAKgagUgdIgVgaQAbATAIAcQAEAPgCALIAdgiQAHgWgPgaIgRgWQAYATAEAaQADANgCAKIAhgkQADgOgGgRIgHgOQAOALAAARQABAIgDAHIAygyIgtA2IAPgCQARgBANAMQgGgDgJgCQgSgFgOAGIghAjIAXgCQAbAEAUAUQgJgHgOgHQgbgLgWAHIgfAhIAZAAQAfAEAWAZQgLgKgRgJQgggQgYALIgeAiIAXgCQAbAAATASQgPgKgKgEQgagIgWALIgaAVg");
	this.shape_886.setTransform(30.6,81.4,1.227,1.227);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#A8CE38").s().p("AgrB6IgKgEIADAEIgogTQgTgbgEgLIAFACQgMgQgBgMIAKADQgKgRAFgOIAHAGQgHgOAJgQIAGAFQgBgEABgHQACgNALgNIADAIQAAgEACgHQAFgMAPgNIACAJIAHgMQAJgNANgGIACAJIAFgIQAJgKAQgGIABAIIAIgHQAKgHALgEIgBAJIAIgGQALgGAMAAIgCAGIAHgEQAJgFAKgBIgCAIIAbACIAEAaIAIgCQgBAQgGALIAHgCQABASgKANIAJgCQgDASgMAOIAHABQgHAYgNAGIAJABQgKAWgTALIAKABQgLAQgMAHQgHADgEABIAIABQgLANgOADIgMACIAGAFQgQAKgNgFIAGAGQgNAHgSgJIAEAJQgHgBgMgFg");
	this.shape_887.setTransform(30.5,81.2,1.227,1.227);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#8CAF2E").s().p("AhEBGQAIgVgLgaQgHgPgJgJQAUASAEAaQACAOgCAKIAegiQAJgZgTgeIgVgaQAbAUAHAdQAEAPgBALIAdgiQAGgXgPgaIgRgVQAXARAFAbQADANgCAJIAggjQAEgOgGgRIgIgPQAOAMABARQABAJgDAFIAxgwIgsA2IAPgEQARAAAMANQgGgEgJgCQgRgFgPAFIggAjIAXAAQAbACAUAWQgJgJgOgGQgbgLgWAHIgeAgIAZAAQAeAFAWAYQgLgKgRgIQgggQgYAMIgeAhIAXgEQAbABATASIgZgMQgagJgVAKIgaAXg");
	this.shape_888.setTransform(140.6,74.2,1.227,1.227);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#A8CE38").s().p("AgpB7IgLgGIADAGIgXgLIgRgJQgTgbgEgLIAFACQgMgQgBgMIAJAFIgEgKQgEgMADgKIAHAGIgCgIQgCgLAGgKIAGAEQgBgEABgGQACgOALgNIADAJQAAgEADgHQAFgNAOgMIACAJIAHgMQAJgNANgIIACAJIAFgIQAJgJAQgFIAAAHIAIgHQAKgJALgCIgBAJIAIgGQALgHAMgBIgCAIIAHgFQAJgEAKgBIgCAIIAbACIAEAaIAIgEQgBARgGAKIAHgDQABAUgKANIAJgDQgDATgMANIAHAAQgHAYgNAIIAJACQgKAVgTAKIAJADQgLAPgNAHIgKADIAIADQgLALgOAEIgKADIAGAEQgKAHgLAAIgIgBIAGAFQgHAFgNgDIgLgEIAFAIQgHAAgLgEg");
	this.shape_889.setTransform(140.7,74,1.227,1.227);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#8CAF2E").s().p("AAkBdQgSgRgbAAQgRABgMAEQAZgLAZAHQAOAEAHAFIgTgoQgRgTgkAFIggAJQAdgRAeAFQAOADAKAFIgTgpQgTgOgeAEIgbAGQAbgOAaAFQANADAJAFIgVgrQgLgJgTgBIgQAAQAQgIAQAGQAIADAEAEIgahBIAhA+QAAgGACgIQAGgQAQgHQgFAFgGAHQgLAOgBAPIAUArIAHgVQANgYAcgKQgLAGgLAKQgXAUAAAXIARApIAKgYQAQgZAggLQgOAHgOAMQgbAXABAbIATAoIAHgWQAMgXAYgJQgqAZADAmIAKAhg");
	this.shape_890.setTransform(141,41.4,1.227,1.227);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#A8CE38").s().p("AANCJQgTADgLgDIAHgHQgUADgLgLIAIgDQgPAAgMgPIAHgCQgFgBgFgEQgMgIgHgOIAIAAQgDgCgFgFQgKgLgGgRIAJAAQgPgQgDgWIAJAAQgLgJACgZIAHABQgHgQACgSIAIAFQgGgRAHgRIAGAEQgCgNAEgPIAHAGIAMgZIAaAHIAAgJQAOAGAIALIAAgIQASAFAHAPIACgJQAPAKAHAQIAEgGQAUAQABAPIAFgIQAQARACAWIAFgIQAKARABAOQABAGgCAEIAFgGQAGANgBAPIgBAOIAHgDQAEASgLALIAIgDQAAAPgPANIAJgBQgFAKgQAMIAGAAQgFAGgPANIgOALQghAHgLgBg");
	this.shape_891.setTransform(141.3,40.4,1.227,1.227);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#8CAF2E").s().p("AgTBiQgEgYgYgPQgNgJgKgDQAYAGAQATQAKALACAJIAIgsQgFgaghgQIgfgKQAhACAWAUQALALAEAKIAHgtQgGgWgcgOIgZgJQAeADASATQAKAJADAJIAHgvQgEgOgOgLIgNgJQARACAJAOQAFAHABAGIAPhEIgIBFIALgKQAOgJASADQgIABgJADQgRAFgKAMIgIAvIATgOQAZgLAcAHQgMgCgPACQgeAFgOASIgIAsIAVgOQAcgMAgAIQgPgCgRABQglAFgNAWIgIAsIARgOQAYgNAbAFQgNgCgQAEQgcAHgMAVIgKAhg");
	this.shape_892.setTransform(118.6,37.8,1.227,1.227);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#A8CE38").s().p("Ag7B/IAGgBQgTgIgHgJIAJgBQgSgKgDgOIAJACQgNgIgCgTIAHABQgDgDgDgHQgFgNACgQIAHAFQgCgDgCgHQgCgOAFgRIAHAGIAAgOQABgQAGgNIAHAGQgBgEACgGQACgMAKgNIAFAFIADgKQAFgMAHgJIAEAIIAEgKQAFgKAKgHIACAHIAEgHQAGgJAGgGIADAIIAXgNIASAUIAFgHQAIAOABANIAFgGQALAQgCAQIAHgGQAHARgDARIAGgDQAIAZgIANIAJgEQADAXgKATIAIgDQgBATgHAMIgHAJIAIgCQgCAQgKAKIgHAFIAHABQgIASgPADIAJACQgIAMgUADIAJAEQgGAFgMACIgMABIAFADQgGADgSACIgTABQgfgNgJgHg");
	this.shape_893.setTransform(118.7,36,1.227,1.227);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#8CAF2E").s().p("AgDBAQgCAGgGAGQgMALgSAAIAQgGQAQgJAGgNIAAgvQgEAJgMAHQgWAQgdgCIAbgFQAdgIAKgVIABgsQgFAJgOAIQgaARgggEIAggFQAkgKAJgYIAAguQgEAJgLAIQgUAQgcAAQANAAAQgHQAagLAIgXIAEgiIADAiQANAhAxAIQgaAAgVgQIgQgSIAAAtQALAZAiAKQASAFAQAAQgiAEgagRIgTgSIACAuQALAVAeAIQAOAFANABQgeABgXgQIgQgQIAAAvQAIANAQAJQAIAEAGACQgRAAgMgLIgJgMIgDBGg");
	this.shape_894.setTransform(107.8,-6.5,1.227,1.227);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#A8CE38").s().p("AgUCFIgEAIQgGgHgEgKIgDgIIgDAHQgJgIgEgMIgCgKIgGAHQgGgJgCgNIgBgLIgGAEQgIgOAAgNIABgKIgIAFQgEgNACgQIACgNIgIAEQgCgRAFgOIAFgKIgIAEQAAgQAIgMQAEgGAEgCIgIAAQAFgSAOgHIgJAAQAGgNATgHIgIgDQAIgIAUgFIgFgCQAKgFAggIIASAEQATAFAGADIgFACIALAEQAMAEAFAFIgJADQATAGAGAOIgJAAQAOAGAFATIgIAAIAIAJQAHALAAARIgIgEIAGAKQAFAOgDARIgIgEQAHAUgHAWIgIgFQAFAOgMAXIgGgEQAAARgJAQIgGgHQgBAQgOAOIgDgHQgDANgKAMIgEgIIgVAQg");
	this.shape_895.setTransform(107.9,-5.1,1.227,1.227);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#8CAF2E").s().p("AAXA1QgBgegQgQIgsgNQAIAHAEAPQAKAdgNAfQAFgPAAgTQAAgkgWgPIgrgNQAIAIAFALQALAXgIAZQADgLgCgQQgEgbgTgOIgggOIAiAHQAXgDATgVQAJgMAFgNQgGAagXAPIgUAKIAqANQAbgDASgfQAJgPAFgPQgGAhgWATIgXAOIAsAMQAWgFARgZQAJgNADgMQgFAegVAQIgUAKIAtANQAOgDANgNQAGgGAEgGQgFARgOAIIgPAFIBDAXIhFgQIAKALQAIAPgGARQABgHgCgJQgEgSgKgLIgtgNIALATQAJAagKAcQACgMAAgPg");
	this.shape_896.setTransform(136.2,-14.3,1.227,1.227);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#A8CE38").s().p("AgRBhIgMgGIADAJQgTgDgLgJIgIgHIABAIQgQgEgJgKIgGgJIgCAHQgKgGgFgKIgDgJIgDAJQgHgGgDgMIgCgLIgFAIQgDgHgBgNIAAgLIgDAFQgCgKABgiIAJgQQAKgRAFgFIAAAGIAHgKQAHgKAGgEIAAAKIAIgJQAJgJAJgBIgDAJIAIgGQAJgGAMABIgCAHIALgFQANgFAQAFIgGAGIALgDQANgBARAIIgHAGIAOABQAQADAMAIIgHAGIAKACQAMAEAMALIgGAEIAKAEQALAGAIAIIgIADQAQAFAJARIgIABIAHADQAHAHAGAIIgIACIAKAZIgWAQIAGAGQgJAEgKABIgJABIAGAFQgLAGgMABIgKgBIAFAHQgLADgNgBIgKgCIADAHQgQADgMgDIgJgEIADAJQgOAAgPgGg");
	this.shape_897.setTransform(137.8,-14.4,1.227,1.227);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#8CAF2E").s().p("AgSBiQgGgYgXgPQgMgIgJgCQAXAFAPATQAJAKAEAJIAIgsQgGgaghgQIgfgKQAhACAWAUQALALAFAKIAGgtQgGgWgbgOIgagJQAeACASATQAKAKADAJIAIgvQgFgPgOgLIgNgIQARACAJANQAFAHACAHIAOhEIgIBFIALgKQAOgKARAEQgGAAgKADQgRAGgKAMIgIAvIAUgOQAYgMAcAIQgLgCgQACQgdAEgOATIgIAsIAUgOQAcgNAhAJQgPgDgTACQgkAEgNAXIgHAsIARgOQAWgNAbAFQgMgCgQAFQgcAGgMAVIgKAhg");
	this.shape_898.setTransform(97.9,19.8,1.227,1.227);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#A8CE38").s().p("Ag7B/IAGgBQgTgIgHgJIAJgBQgSgKgDgOIAJACQgNgIgCgTIAHABQgDgDgDgHQgGgNADgQIAHAFQgDgDgBgHQgDgOAGgRIAHAGIAAgOQABgQAGgNIAHAGIAAgJQADgNAKgNIAFAFIADgKQAEgMAIgJIAEAIIADgKQAGgKAKgHIACAHIAEgHQAFgJAHgGIADAIIAXgNIASAUIAFgHQAIAOABANIAFgGQALAQgCAQIAHgGQAHARgDARIAGgDQAIAZgIANIAJgEQADAXgKATIAIgDQgBATgHAMIgHAJIAIgCQgFAagOAFIAHABQgIASgPADIAJACQgIAMgUADIAJAEQgGAFgNACIgLABIAFADQgGACgTADIgSABQgfgNgJgHg");
	this.shape_899.setTransform(98,17.9,1.227,1.227);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#8CAF2E").s().p("AAvA8QAOgDAKACIgkgcQgZgIgdAVIgZAXQATgcAcgKQAPgEALABIgkgbQgXgEgZAQIgUASQAQgZAagHQANgDAKABIglgdQgQgCgRAHIgNAIQAKgOARgCQAJgBAFABIgzguIA5ApQgDgFgCgJQgBgRAMgNIgFAQQgEASAGANIAlAdQgCgJAAgNQABgbAUgWIgNAZQgLAcAKAVIAiAdQgEgKACgOQADgfAWgYIgPAdQgOAhANAXIAiAcQgDgJAAgOQgBgcASgVQgaApASAhIAZAYIgdgSQgigKglAhQARgVAZgGg");
	this.shape_900.setTransform(69.1,18.1,1.227,1.227);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#A8CE38").s().p("AA1BtQgRALgOgEIAGgHQgNAIgRgIIAEgGQgDACgHgBQgOgBgNgLIAHgEQgEABgGgDQgNgFgNgNIAJgDQgVgIgNgTIAJgDQgEgBgFgEQgKgIgGgPIAGgCQgNgJgHgSIAKAAQgOgLgBgTIAGADQgHgKgEgQIAJACIAAgbIAagHIgFgGQAQgBAMAGIgDgHQAUgDANAKIgCgJQATACANALIAAgIQAQADAKAIQAFAEABADIABgKQAXAKALARIAAgJQARAKAHAMQAEAGABAEIABgIQAOALAEANQADAHgBAEIADgHQALAPgFAPIAGgHQAHAMgHATIAJgFQAAAMgJASIAFgDQgBAMgPAeQgaAUgKAFIABgFQgPAMgLACg");
	this.shape_901.setTransform(68.4,18.3,1.227,1.227);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#8CAF2E").s().p("Ag6BOQAFgXgOgYQgEgHgOgQQAWAQAHAaQADANgBAKIAZgjQAGgagWgcIgYgXQAdARALAbQAFAPAAALIAZglQAEgXgSgZIgTgTQAaAPAHAZQAFANgBAKIAbgmQACgPgJgRIgIgNQAPAJADARQABAIgBAHIAsg3IgmA7IAOgFQARgCAOALQgGgDgJgBQgSgDgOAHIgbAmIAXgEQAbgBAWATQgKgHgOgEQgdgKgVALIgbAkIAZgDQAfABAZAWQgNgJgRgGQgigNgWAPIgaAlIAXgGQAagCAWARQgKgHgQgEQgcgGgUANIgXAZg");
	this.shape_902.setTransform(89.3,81.9,1.227,1.227);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#A8CE38").s().p("AgbCCIgLgEIADAFQgHAAgSgHIgRgHQgWgZgFgKIAFACQgOgQgCgLIAJADQgMgPAEgPIAIAFQgHgNAGgSIAHAEQgCgEAAgGQAAgOALgOIADAHQAAgEACgGQAEgOAMgOIAEAIIAFgMQAHgOAMgJIAFAJIAEgIQAIgKAPgIIABAHIAIgIQAIgJALgFIAAAJIAHgHQAJgHAMgCIgBAIIAIgFQAIgFAKgDIgBAIIAbAAIAHAZIAGgCQABAQgFAMIAHgEQADATgJAOIAJgDQgCASgKAOIAHAAQgCAPgHALIgHAHIAKAAQgGAWgTANIAJABQgIAQgMAIIgKAFIAJACQgKANgNAFIgMADIAGAEQgPAOgPgEIAIAFQgIAEgMgCIgLgCIAGAHIgFABQgGAAgIgDg");
	this.shape_903.setTransform(89.4,81.1,1.227,1.227);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#8CAF2E").s().p("AAOBiQgVgggwAEQAbgFAXAMQAMAGAGAIIgJgsQgNgWgkgCIgiABQAggKAdALQAOAHAHAHIgJgsQgOgSgfgDIgbABQAcgIAZALQAMAFAHAHIgKguQgKgMgRgFIgQgDQARgFAOAKQAHAFAEAFIgLhFIASBEIAGgNQAJgOARgDQgGADgHAGQgNALgFAPIAJAuIAMgTQATgUAdgEQgMADgNAHQgbAOgGAXIAIAsIAPgVQAWgVAhgDQgPAEgQAHQggARgFAaIAJAsIAMgUQASgUAagGQgPAFgMAJQgXAPgDAYIABAig");
	this.shape_904.setTransform(68.5,44.7,1.227,1.227);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#A8CE38").s().p("AgRCPIAFgDQgUgBgKgGIAIgEQgUgCgIgMIAJgCQgQgDgIgRIAHgCQgEgCgFgFQgKgKgDgQIAIACQgEgCgDgGQgIgMgBgTIAIADQgLgUACgVIAJACQgIgMAHgZIAHACQgEgRAGgQIAHAGIAAgKQABgNAHgKIAFAHIABgIQADgKAEgJIAFAEIARgUIAYAMIACgIQALAKAGAMIADgHQAQAMAEAPIACgJQANAOADARIAFgFQALANADAMQABAHgBADIAHgHQALAUgCAWIAHgGQAHASgCANQgBAHgDADIAHgFQAEARgFANQgCAHgEADIAJgBQgBATgNAJIAJgCQgDAOgSAKIAJABQgHAKgSAIIAGABQgGAEgRAJIgQAIQghgBgLgDg");
	this.shape_905.setTransform(68.6,43.2,1.227,1.227);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#8CAF2E").s().p("Ag/BLQAKghghgmQAWASAFAZQACAOgBAKIAcgjQAIgagWgdIgWgZQAcASAJAdQAFAOgBALIAbgjQAEgXgQgZIgSgVQAZARAHAaQAEANgCAKIAdglQADgQgIgQIgIgPQAPALACARQABAJgCAFIAug0IgpA6IAOgFQARgCANAMQgGgDgJgBQgSgDgOAFIgdAlIAWgCQAbACAWASQgKgHgOgFQgdgLgVAKIgdAiIAZgDQAfAEAXAXQgMgJgRgIQghgOgXANIgcAjIAXgDQAbgBAUASQgqgaggATIgYAYg");
	this.shape_906.setTransform(39.6,42.5,1.227,1.227);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#A8CE38").s().p("AgiB/IgKgFIADAFIgagJIgQgIQgUgbgFgKIAFACQgMgPgCgMIAJACQgMgRAFgOIAHAGQgIgNAIgRIAGAFQgCgEABgHQABgOAKgNIAFAIIACgLQAFgNANgNIACAJIAHgMQAJgOAMgIIADAJIAFgJQAIgKAPgGIACAHIAHgHQAKgJAKgEIAAAJIAIgGQAKgHAMgCIgBAIIAHgEQAIgFAKgCIgCAIIAbAAIAEAZIAIgEQABAQgGAMIAHgDQADAUgKANIAJgCQgCATgLANIAHAAQgFAZgNAHIAKABQgJAWgSAMIAJABQgKAQgMAIIgKAEIAIACQgJANgOAEIgKACIAGAFQgKAHgLABIgJgBIAHAGQgMAHgTgHIAFAIIgCABQgHAAgLgEg");
	this.shape_907.setTransform(39.3,42.1,1.227,1.227);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#8CAF2E").s().p("AA7BPQghgRgpAZQAVgQAbAAQANAAAKAEIgcgkQgYgNggAOIgeASQAYgYAegDQAPgCAKADIgcgiQgVgJgdALIgXANQAVgUAbgCQAOAAAJADIgfglQgNgGgSAEIgQAEQANgLARACQAJAAAGADIgqg4IAwA1QgDgHACgIQABgQAOgLIgIAOQgGARADAOIAdAlQAAgJADgNQAGgbAYgRQgJAJgJAMQgQAaAFAXIAcAjQgBgLAEgPQAKgcAcgSQgMAKgKAOQgWAeAJAZIAcAjQgCgKADgNQAEgbAVgSQghAlAKAjIATAcg");
	this.shape_908.setTransform(59.9,69.7,1.227,1.227);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#A8CE38").s().p("AASCCIAFgJQgTAIgMgHIAHgGQgPAFgPgLIAFgFQgEAAgHgCQgNgFgLgNIAHgCQgEAAgGgEQgMgHgKgQIAKgBQgTgLgIgXIAKgBQgNgHgFgZIAHAAQgLgNgDgTIAJAEQgKgOACgUIAHAEQgGgMAAgQIAIADIAGgaIAbAAIgCgIQAQADAKAIIgCgIQATACALANIAAgKQARAHAKANIACgHQAPAHAIAJQAEAFABADIAEgJQASAOAIAUIAEgIQAUAVAAAQIAEgJQAKANACAPQABAHgBAEIAGgEQAIAQgHANIAGgFQAEAOgLAQIAJgEQgCANgMAQIAFgCQgFAKgUAbQgeAPgLABIAEgFQgSAJgLAAIgBAAg");
	this.shape_909.setTransform(60.1,69.4,1.227,1.227);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#8CAF2E").s().p("AAZA1QgBgegSgQIgsgLIANAXQAMAdgMAeQADgPAAgRQgCglgWgOIgsgKIAOASQAMAYgIAZQABgVgCgHQgFgagUgOIgfgNIAiAFQAjgFATgvQgGAbgWAQIgVAKIAsAKQAbgEASggQAIgPADgPQgDAhgWAVIgWAOIAsAKQAXgFAPgaQAIgNADgNQgFAegTARIgTAMIAuALQAOgEAMgNQAHgHADgHQgDASgPAIIgOAFIBEAUIhGgMIAKALQAKAOgFASQAAgIgDgIQgEgTgLgJIgvgMIAMAUQAKAZgJAdQADgMgCgQg");
	this.shape_910.setTransform(134.9,132.7,1.227,1.227);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#A8CE38").s().p("AgNBjIgMgGIADAJQgTgCgLgIIgIgHIACAIQgRgEgKgKQgFgHAAgCIgCAGQgLgFgFgKIgDgJIgCAJQgIgFgDgNIgCgLIgFAIQgEgHgBgMIgBgMIgDAFQgCgHAAgSIgBgTIAJgQQAIgRAFgGIABAGIAGgKQAHgKAGgFIAAAKIAHgJQAIgJAKgCIgCAJIAHgGQAJgHAMAAIgCAHIAKgFQANgEAQADIgFAHIALgCQAMgCASAGIgGAGIAOABQAPACANAHIgHAHIAJABQAMAEANAKIgGAFIAKAEQAMAFAIAIIgIAEIAJAFQALAGAGAKIgIACIAHAFQAIAFAGAIIgIACIALAYIgVARIAGAGQgIAFgKABIgJABIAGAFQgLAHgMABIgKgBIAGAHQgLADgNAAIgKgCIADAHQgQAFgMgDIgJgEIADAJIgDAAQgNAAgNgEg");
	this.shape_911.setTransform(136.4,132.6,1.227,1.227);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#8CAF2E").s().p("AAaA1QgCgfgSgPIgsgLIAOAWQALAdgLAfQADgPgBgSQgCglgWgOIgrgKIAMASQAMAYgGAbQAAgVgCgIQgFgagTgOIghgMIAiAEQAkgFASgvQgFAbgWAQIgUALIAsAKQAagFASgfQAIgQAEgPQgEAhgVAVIgWAOIAsAKQAVgFARgaQAHgNADgMQgEAdgUARIgUALIAuAMQAPgEAMgNQAGgHADgHQgCASgPAIIgNAFIBCAUIhEgNIAKAMQAIAOgFARQAAgHgBgJQgFgRgMgLIgugLIAMAUQAKAZgJAcQADgMgBgPg");
	this.shape_912.setTransform(155.3,156.8,1.227,1.227);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#A8CE38").s().p("AgMBiIgNgFIAEAJQgTgCgMgIIgJgHIACAIQgPgEgKgKQgGgGAAgCIgCAFQgLgFgFgKIgDgJIgCAJQgHgFgEgNIgCgLIgFAIQgEgHgBgMIgBgMIgDAFQgCgHgBgSIAAgTQAPgeAHgJIABAGIAGgKQAHgKAGgFIAAAKIAHgJQAJgJAJgCIgCAJIAHgGQAJgHAMAAIgCAHIAKgFQANgEAQADIgFAHIAKgCQAOgCARAGIgGAGIANABQARACAMAHIgHAHIAKABQAMAEAMAKIgGAFIAKAEQAMAFAIAIIgIAEIAJAFQALAGAGAKIgIACIAHAFQAIAFAGAIIgIACIALAYIgVARIAGAGQgJAEgKACIgIABIAGAFQgKAGgNABIgKAAIAGAHQgLADgNgBIgKgBIADAHQgPAEgNgDIgJgDIADAJIgDAAQgNAAgMgFg");
	this.shape_913.setTransform(156.8,156.7,1.227,1.227);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#8CAF2E").s().p("AAuBJQAEgSgFgNIgkggIACAXQgCAcgVAVQAIgKAGgOQAMgcgKgWIghgeIACAZQgEAfgZAXQAKgLAIgRQAPgggMgYIgigdIACAXQAAAbgUATQAHgLAFgOQAIgbgLgVIgYgZIAeATQAWAHAagMQAOgHAKgJQgSAVgaAFIgYAAIAjAdQAYAJAegUQAPgKALgMQgTAbgcAJIgaADIAjAcQAWAFAagPQANgIAHgJQgRAYgaAFIgWACIAjAfQAXAFAXgQQgKAOgRABIgPgBIAzAwIg3grIAEAOQACAQgMANQADgGACgJg");
	this.shape_914.setTransform(154.8,180.1,1.227,1.227);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#A8CE38").s().p("AAzB1IgJgFIACAIQgLgBgLgGIgJgGIAAAGQgPgDgKgIIgGgHIgCAKQgNgGgLgMIgJgKIgBAIQgPgKgIgNIgEgKIgCAIQgMgKgFgOIgFgNIgFAGQgHgJAAgLIABgJIgGAGQgEgHACgNIADgLIgIAFQAAgHAFgMIAEgLIgFADQACgHAIgRIAIgRIAQgKQAQgLAGgDIgCAFIAKgGQALgGAHgBIgDAJIAKgEQAMgEAJACIgGAHIAJgDQALgBAKAFIgFAGIALAAQAOACANAKIgIADIALADQANAFANANIgJADIALAHQAOAJAIAMIgJAEIAIAFQAKAJAGAOIgHACIAHAHQAIALAEAKIgJAAIAGAJQAHAKABAMIgHgCIAEAHQAEAJACALIgIgCIgBAbIgbAFIAEAIQgKAAgJgDIgIgEIADAHIgFABQgJAAgJgEg");
	this.shape_915.setTransform(155.2,180,1.227,1.227);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#8CAF2E").s().p("AgHA+IgJAMQgNAMgSgDIAPgEQASgJAHgMIADgwIgRAQQgWAPgegFIAbgDQAegHAMgUIADgtQgHAIgNAIQgaAPgggEIAhgFQAkgIAKgYIACgtQgFAIgLAJQgUAPgZACQALgBAMgEQAagKAKgXIAFgiIACAiQANAlAvAHQgaAAgUgTIgPgSIgCAtQAKAZAiALQARAGAQACQgiABgZgSIgSgTIgBAtQAKAVAcAKQAPAGAMAAQgeABgVgRIgPgRIgCAwQAFAOARAJQAIAEAGACQgRAAgMgMIgHgNIgHBGg");
	this.shape_916.setTransform(126.5,167,1.227,1.227);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#A8CE38").s().p("AgcCCIgEAIQgGgJgDgJIgDgJIgDAIQgIgJgEgMIgBgLIgGAHQgFgKgCgNIAAgLIgGAFQgHgPAAgMIACgKIgIAEQgEgNADgQIADgNIgIAFQgBgTAFgOIAGgJIgJAEQABgSAIgKIAHgHIgIAAQAEgMAJgGIAHgGIgJgBQAEgHAMgGIAKgFIgJgCQAGgFAMgDIALgDIgFgDQAKgEAggHIASAGQASAGAGAEIgFABIALAEQAMAFAFAGIgJACIAKAFQALAHADAIIgJgBIAIAGQAIAIACAMIgIAAIAHAJQAHAMgBARIgHgEIAFAKQADANgDARIgHgEIACANQACAQgGANIgIgFIABAKQgBANgIAOIgHgGIgBAMQgDAMgHAKIgFgIIgCAKQgFAMgJAHIgDgGIgDAHQgEAJgHAHIgDgIIgVAPg");
	this.shape_917.setTransform(126.4,168.6,1.227,1.227);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#8CAF2E").s().p("AgHA+IgJAMQgNAMgSgDIAQgEQARgJAHgMIAEgwIgRAQQgXAPgdgFIAbgDQAdgIAMgTIAEgtQgHAIgNAIQgaAQghgGIAhgEQAkgIAKgXIACgtQgEAHgMAJQgRANgVADQAIgBAIgDQAagKAKgXIAFgiIACAiQAMAlAwAHQgbAAgTgTIgPgSIgCAtQAJAZAjALQARAGAPACQghABgZgSIgSgTIgBAtQAKAVAcAKQAPAGAMAAQgdABgWgRIgPgRIgCAwQAGAOAQAJQAIAEAGACQgRAAgMgMIgHgNIgHBGg");
	this.shape_918.setTransform(105.6,146,1.227,1.227);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#A8CE38").s().p("AgbCCIgEAIQgGgIgEgKIgCgIIgEAHQgIgJgEgMIgBgLIgGAIQgFgLgCgNIAAgLIgGAFQgHgPAAgMIACgKIgIAEQgEgNADgQIADgNIgIAFQgBgTAFgNIAGgKIgJAEQACgRAIgMIAHgGIgIAAQAEgMAIgGIAIgGIgJAAQADgJAMgGIAKgEIgJgCQAGgFAMgDIALgEIgFgCQAKgFAhgFIARAFQASAGAGAEIgFACIALADQAMAGAGAEIgJADIAKAFQALAHADAJIgJgBIAHAFQAIAIADAMIgIAAIAHAJQAGAMAAARIgHgFIAEALQAEANgDARIgHgEIACANQABAQgFANIgIgFIAAAKQgBANgIAOIgGgGIgCALQgDANgGAKIgFgIIgDAKQgEAMgJAHIgDgGIgDAHQgEAJgHAHIgDgIIgVAPg");
	this.shape_919.setTransform(105.6,147.5,1.227,1.227);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#8CAF2E").s().p("AgkBdQgBgZgVgTQgLgLgMgFQAZAJAOAXQAHAMABAJIAQgqQgBgbgegUIgegQQAhAIATAYQAJANACAKIAPgrQgEgXgYgTIgYgNQAdAIAQAVQAIALAAAKIARgsQgDgPgNgOIgKgKQAQAFAIAPQAEAIAAAGIAahBIgTBDIAMgJQAPgHARAGQgbgBgSAQIgQAsIAUgJQAagIAbAMQgLgEgQAAQgegCgQAQIgQAqIAYgKQAegJAeAPQgOgFgTgBQgkgCgRAUIgPAqIAUgMQAYgIAYALQgygJgWAbIgQAfg");
	this.shape_920.setTransform(58.9,104.3,1.227,1.227);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#A8CE38").s().p("AgZCMIgSgCQgcgSgIgIIAGAAQgRgLgGgKIAKABQgQgMgBgPIAJADQgMgKACgTIAHAEQgCgEgCgHQgDgOAFgPIAGAFQgBgDAAgHQAAgOAIgQIAGAGQAAgVAOgTIAGAIQAAgPATgSIAEAFQAGgQAOgMIADAKIAGgJQAIgKAJgFIABAIQAHgLAOgIIABAIIAZgJIAOAWIAGgGQAFAPgBANIAEgGQAJARgFAQIAIgFQAEASgGAQIAHgBQACAQgEAMQgCAGgCACIAJgBQgBAXgNAQIAJgBQgEATgJAKQgEAGgEABIAIAAQgGAQgKAIQgGAEgDAAIAFACQgLAQgPABIAJADQgKALgUgBIAIAGQgLAEgTgCIADAEIgFABIgVgBg");
	this.shape_921.setTransform(58.9,102.8,1.227,1.227);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#8CAF2E").s().p("AglBdQAAgZgUgTQgIgIgQgJQAaAJANAXQAHAMABAKIAQgrQgBgagdgVIgdgRQAhAJASAYQAJANACAKIAPgrQgDgXgXgTIgYgOQAdAJAPAXQAGALACAJIARgsQgCgOgMgPIgLgLQAQAGAHAPQAEAIAAAGIAchAIgWBDIAMgIQAQgHAQAHIgQAAQgTADgLAKIgRAsIAVgKQAagHAbANQgMgEgPgBQgegCgRAQIgQAqIAXgKQAegHAeAPQgPgFgSgCQgkgDgRAUIgQApIAUgKQAYgIAaALQgMgEgRABQgaABgRASIgQAeg");
	this.shape_922.setTransform(33.5,2.8,1.227,1.227);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#A8CE38").s().p("AgvCKQgbgTgIgIIAGAAQgRgMgFgKIAKABQgPgMgBgPIAJADQgLgLACgTIAHADQgDgEgBgHQgDgOAGgOIAGAEQgBgEAAgGQAAgOAJgRIAFAHQAAgFACgIQAEgPAJgMIAGAIQAAgDACgGQAFgMAMgLIAEAGIAFgJQAGgLAJgIIADAJIAFgIQAHgKALgFIABAJIAFgGQAHgIAJgFIABAIIAZgIIAPAYIAGgGQAFAPgCANIAGgFQAIARgFAQIAIgFQADASgGAQIAHgCQADAagKALIAJgCQgBAWgOARIAJgCQgFASgJALIgIAHIAIAAQgJAZgTADIAHADQgHAKgKAEIgJACIAJADQgGAHgNACIgLABIAGAGQgHADgNAAIgKgBIAEAEg");
	this.shape_923.setTransform(33.4,1.5,1.227,1.227);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#8CAF2E").s().p("AglBdQAAgZgUgTQgIgIgQgJQAaAJANAXQAHAMABAKIAQgqQgBgagdgVIgdgRQAgAJASAYQAJAMADALIAPgrQgDgXgYgTIgXgOQAdAIAPAXQAGALACAKIARgtQgCgPgMgOIgLgLQAQAGAHAPQAEAIAAAGIAbhAIgVBCIAMgIQAQgHAQAHIgQABQgTACgLAKIgRAsIAVgJQAagHAbAMQgMgEgOgBQgegBgSAPIgQArIAXgKQAegHAeAPQgPgFgSgCQgkgDgRAUIgQAqIAVgLQAYgIAZALQgMgEgRABQgaABgRASIgQAeg");
	this.shape_924.setTransform(32.7,109.5,1.227,1.227);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#A8CE38").s().p("AgdCLIgSgCQgbgTgIgIIAGAAQgRgMgFgKIAKABQgPgMgBgPIAJADQgLgLACgTIAHAEQgCgEgCgHQgCgOAFgOIAGAEQgBgDAAgHQABgOAIgQIAFAGQABgUAOgUIAGAJIACgKQAEgMANgKIAEAGQAGgRAOgLIADAJIAFgJQAHgJALgGIABAKQAHgLAOgJIABAJIAZgJIAOAXIAGgGQAFAPgCANIAGgFQAIARgFAQIAIgFQADASgGAQIAHgBQADAagKALIAJgCQgBAXgOAQIAJgBQgFASgJAKQgEAGgEABIAIAAQgGAQgLAHQgIAGgDgBIAGACQgLAQgPAAIAJADQgKALgUgBIAIAGQgLAFgTgDIAEAEIgEABIgXgCg");
	this.shape_925.setTransform(32.6,108.2,1.227,1.227);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#8CAF2E").s().p("AgRA+IgLAKQgNAJgSgEIAQgDQARgFAKgMIAJguQgHAHgLAGQgZALgdgIIAcAAQAdgDAPgSIAJgsQgGAIgPAFQgcANgggKIAhABQAkgDAOgXIAIgsIgRAOQgYAOgbgFQASAAALgDQAbgGAMgUIAKghIgCAiQAIAkAuAQQgagFgRgVIgMgUIgIAsQAFAbAhAQQAQAHAPADQgigDgWgUIgPgVIgIAtQAHAWAaAOQAOAIAMACQgegEgSgTIgMgTIgJAuQAEAOANAMQAIAGAGADQgSgDgIgOIgGgNIgRBEg");
	this.shape_926.setTransform(42.4,168.9,1.227,1.227);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#A8CE38").s().p("AgvB/IgFAHQgFgIgCgKIgBgJIgFAGQgHgKgCgMIAAgKIgHAGQgEgKAAgOIABgKIgHADQgFgPACgNIADgKIgKAEQgBgPAEgOIAFgMIgIADQACgTAHgLIAGgJIgHACQADgQAJgLQAJgIgBgBIgHgBQAFgKAKgHIAIgDIgJgCQAFgIAMgFIALgCIgIgEQAHgDAMgCIALgCIgFgDQAKgDAhgCIARAIQASAIAFAFIgGABIALAGQALAGAEAGIgJABIAKAGQAJAJACAJIgJgBIAHAHQAHAIAAAMIgHgBIAGAKQAGANgDAQIgHgFIADAKQACANgFASIgHgGIAAANQgBAQgHANIgHgHIgBAKQgCANgKAMIgFgFIgDALQgFALgHAJIgEgIIgEAJQgGALgKAHIgCgHIgFAHQgGAJgGAGIgCgIIgYAMg");
	this.shape_927.setTransform(42.5,170.3,1.227,1.227);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#8CAF2E").s().p("AAyBGQADgSgHgNIgngbIAEAWQABAbgSAXQAGgKAFgPQAKgcgMgVIgkgaIADAZQAAAfgWAZQAJgNAFgRQAMgjgPgVIglgaIAGAXQADAagQAWQAIgLACgPQAGgbgNgVIgagXIAdAQQAYAGAXgPQAJgFAOgOQgPAWgbAIIgWACIAlAaQAZAHAcgXIAWgZQgPAegcALIgaAFIAnAYQAWADAYgRIATgUQgPAagZAIIgXAEIAnAbQAQACAQgJIANgJQgKAPgQADIgOAAIA3ArIg8glIAFAOQADARgLAOQACgHABgJg");
	this.shape_928.setTransform(66,157.8,1.227,1.227);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#A8CE38").s().p("AAdBuIgJgFIAAAHQgQgCgKgIIgHgHIAAAKQgPgFgMgKIgJgKIAAAJQgRgIgIgMIgFgKIgBAIQgNgJgGgMIgGgKIgEAGQgIgKgBgLIAAgJIgFAIQgFgIABgMIACgLIgHAGQgBgHADgMIAEgLIgFADQABgIAHgSIAGgRIAOgMQAPgNAGgDIgBAFIAJgHQAKgHAHgCIgDAJIAJgGQALgFAKACIgFAIIAJgEQALgDALAFIgEAGIAKgCQAOAAAOAKIgHAEIALABQAOADAOANIgIAEIAMAGQAOAIAKALIgJAEIAJAEQAKAHAIAPIgHACIAIAHQAJAIAFALIgJABIAHAHQAIAKACAMIgKgDIAFAHQAFAIADAKIgIgBIACAbIgZAIIAEAIQgKABgKgCIgIgCIAEAHQgMACgMgDIgJgEIADAJQgMgBgMgFg");
	this.shape_929.setTransform(66.5,158,1.227,1.227);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#716558").s().p("A7Nd7MAA3hEEIIxhPILKhzIA/BQQA5BRgiAEQgxAFgSA0QgUA4A/AiQA5AeAXBSQAMAqAAAjIgrAGQhJhogrgrQgagbhRgOIhMgIQjQA3hPAfQg/AYg6BEQg+BHAAA5IACCgQgEBwgjA6QgqBFgQBfQgRBgAOBlQANBjBlAPQBjAOBQhPQBChDAJhBQADgXgCgjIgDg9QAAg2gJg6IgJgvIArgxIAXBJQAVBOgHAaQgKAiA4A7QA5A8AsgIQAtgJAjgfQAkggASgyQATgzgBg/QgBhBgXgpQgWgmhDglQg6ggg9gPQgugLgrg5Ighg2IAAhJIAqAsQAxAvAfATQAYAQBcAnQBWAsAiA1QAbArAsBMQAlA0AngMQArgNAthIQAphAAehZQAWhFAAhJIgEg8IAxg3QAGA1AEA9QAJB4gHAjQgLAvgwBRQg0BZgtAiQg8AtgyBJQg5BUAqAMQAoALBhgmQAfgNCJhAQA9geA+hYIAqhAQAWghAMgLQANgLAOgZIAfgxQAvhKBQg9QBVhBArhwQAWg3AFgrIBQAAQgBAggGApQgMBTgaAuQgaAvhFBBIhgBUQgmAhgaA5QgcA/AmAAQAeAABNgkQBZgqAngIQApgKBXg/QBTg+AogGQA3gJDGgMQC7gKBRAAQA+AACng9QBUgfBHgeIBJAAQlpCfhfArQg3AYiPgBQi/gCgaADQhPAIiNBfQg1AkgjAeQgiAfAJACQALACCzghQC2giAdAEQBEAJCEAlQCrAvBJAwQBHAuBcAfQAuAPAgAGIghBJQicg9g0gfQg+glhFgbQhogqhSgEIilgJQhPgDgkAMQhCAVgsAgQg+AsAoAhQA2ArAYAPQAlAWBCAWQA5ASBWAOICIAXQA3ALBAgXQAggLAUgOIBSAxQjVAxgoAAQgJAAiRgRQiJgRgvADQgnADhGhJQhMhQgygJQlBg7hKA7QgyAoAeBqQAcBnBGA5QA3AvAgBqQAPA2AFAsIAABDQgLgKgLgRQgXgggCgbQgDghgXg3QgYg6gZgfQgbggg/g2Qg+g3gegSQgagQhsAXQhUARhNAZQhBAVgrAgQg0AkAaAVQBnBVBBA+QAcAbAtBaQAWAuARAnIgrgSQhOhog3gxQgjgfhQg0IhKgtQg9gKhGgGQiLgKgoAaQhLAuhuB7QiOCfggCAQgTBLgOC8QgLCYguBnQg2B2gSDnQgJB6AADjQgBByA6AjQAdASAdgFIAACsIgRA8QgZBFgoAsQgxAzgQCmQgQCZAGE7QAFD8C2DKQBbBlBaAzIsUC8g");
	this.shape_930.setTransform(168.8,269.7,1.227,1.227);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#66A338").s().p("AAzBVQgVgOgbAFQgPADgLAHQAWgQAZADQAOABAJAFIgZglQgWgPgiAMIgeAOQAZgWAfAAQAPAAAKAEIgaglQgUgLgdAJIgZAKQAYgSAbABQANAAAJAEIgbgnQgNgHgTADIgPADQAOgLARADQAIACAGADIgkg8IAqA4QgBgHABgIQAEgQAPgKIgJANQgJARACAPIAbAnQgBgJAEgNQAJgaAagPQgLAHgJAMQgTAYADAXIAYAmQAAgLAGgPQAMgbAdgQQgMAJgMAOQgXAbAFAaIAZAlQAAgLADgNQAIgYAVgOQgIAGgKAPQgOAXAFAYIAQAfg");
	this.shape_931.setTransform(184.3,64.1,1.227,1.227);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#7BC043").s().p("AAECEIAGgHQgTAGgMgIIAIgFQgPADgOgNIAGgEQgEAAgHgCQgMgGgKgOIAIgBQgEAAgFgFQgMgIgJgRIAJAAQgRgOgHgWIAKAAQgDgCgDgFQgHgJgCgRIAHAAQgKgPgBgSIAJADQgJgOAEgTIAHAEQgEgMABgQIAHAEIAIgZIAbADIgBgIQAPADAKAKIgBgIQATAEAKANIABgJQAPAHAKAPIACgHQAPAHAHALQAEAFAAAEIAEgKQASAPAGAVIAEgIQANAPADAOQACAHgBAEIAEgIQAJAOABANQAAAHgBABIAGgEQAGASgIANIAIgFQADAOgNAQIAJgDQgCALgOAPIAFgBQgFAKgXAZQggALgLACIADgFQgPAGgLAAIgFAAg");
	this.shape_932.setTransform(184.4,62.9,1.227,1.227);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#66A338").s().p("AgWA9QgEAFgIAEQgQAIgQgHIAQAAQASgEALgKIAPgtQgIAGgMAEQgbAJgbgMIAbAEQAeAAARgQIAPgqQgJAHgOAEQgeAIgegOIAhAGQAkABAQgUIAOgrQgHAHgMAEQgZAKgZgMQAKAEASgCQAbgCAQgTIAPgfIgHAiQABAYAUATQANAMAMAEQgZgJgPgXIgJgWIgOAsQACAbAdATQAQALAOAFQghgHgSgXIgNgXIgNArQADAXAZARQANAJALAFQgdgHgQgVIgJgVIgPAtQADAPAMANQAGAHAGAEQgQgFgHgPIgFgOIgZBBg");
	this.shape_933.setTransform(113,170.5,1.227,1.227);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#7BC043").s().p("AhCB5IgGAGQgEgJgBgLIAAgIIgFAFQgFgLAAgMIABgKIgIAFQgDgLACgNIACgKIgGACQgDgQADgMIAFgJIgJACQAAgOAHgOIAHgMIgJACQADgSAJgMIAIgHIgJABQAGgPALgKQAJgGAAgBIgHgCQAHgKAKgEIAJgDIgJgDQAGgHANgCIALgCIgIgFQAHgDAMAAIALAAIgDgDQAKgCAiADIAPAKQAQALAFAFIgGAAIAJAHQAKAIAEAGIgKAAIAIAIQAJAKABAJIgJgDIAFAIQAFAJAAAMIgHgCIAEALQAEAOgFAPIgGgGIACAKQAAAOgIARIgGgHIgCAOQgEAPgIAMIgGgHIgCAKQgEAMgMALIgEgGIgEAKQgGAMgJAHIgDgJQgHAPgPAJIgBgIIgFAHQgHAHgIAFIgBgIIgZAJg");
	this.shape_934.setTransform(113,172,1.227,1.227);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#66A338").s().p("AAMA7QAGgdgOgUIgmgWIAGAYQAEAfgTAbQAHgNAEgSQAHgkgQgUIgogVIAHAWQAGAZgPAXQAHgMABgRQADgbgQgSIgcgUIAfANQAZADAVgRQAOgKAGgLQgMAYgZAKIgWAFIAmAVQAbADAZgaIATgaQgNAfgaAPQgNAHgLABIAnAUQAYABAVgVIARgVQgMAbgYAMQgMAEgJABIAoAWQAQABAPgLIAMgKQgHAQgQAFIgOACIA8AkIg/geIAGAOQAFAQgJAPQABgGAAgKQABgSgJgNIgogWIAGAWQAEAbgRAZQAGgLADgPg");
	this.shape_935.setTransform(55.8,181.2,1.227,1.227);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#7BC043").s().p("AAmBqIgKgEIABAHQgQAAgLgGIgIgGIABAKQgOgDgNgKIgLgIIABAIQgRgGgKgLIgGgKIAAAJQgOgHgIgNIgGgJIgEAHQgKgIgCgLIgBgJIgEAIQgGgHAAgNIABgLIgHAHQgBgHACgMIACgLIgEADQAAgGAEgTIAFgSQAXgZAJgHIgBAHIAIgIQAKgJAHgCIgCAJIAJgHQALgHAJABIgEAIIAIgFQALgDAMADIgEAHIALgDQANgCAPAIIgHAFIALABQAOACAPAKIgIAEIANAFQAPAGAKAKIgIAFIAJAEQALAGAJAOIgHADIAJAGQAKAHAGAJIgJACIAIAHQAJAIADAMIgIAAIAGAGQAHAIADAJIgJAAIAFAbIgYAKIAFAGQgJACgKAAIgJgCIAEAHQgLADgMgCIgKgDIAEAIQgMAAgMgEg");
	this.shape_936.setTransform(56.8,181.4,1.227,1.227);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#66A338").s().p("Ag0BUQAEgYgQgWQgKgPgLgGQAYANAJAaQAFAMgBAKIAXgnQAFgagZgZIgagWQAeAOAOAaQAHAOABALIAUgnQACgXgTgXIgVgRQAbANAKAZQAFAMAAAKIAYgpQABgPgKgQIgKgMQARAIAEARQADAHgCAHIAng7IghA+IAOgGQAQgFAPAKQgGgCgKgBQgSAAgMAIIgZApIAXgGQAagDAYARQgKgGgQgEQgdgGgUAMIgXAmIAZgFQAfgCAbATQgOgHgSgFQgjgJgTAQIgYAoIAXgHQAYgEAWAPQgKgGgSgCQgbgDgSAPIgWAbg");
	this.shape_937.setTransform(295.6,95,1.227,1.227);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#7BC043").s().p("AgwCDIgRgFQgYgYgGgJIAGABQgOgOgEgLIAJABQgOgPACgOIAIAFQgJgMAFgTIAHAEQgCgEgBgHQAAgMAIgPIAFAGQgBgEABgGQADgOALgPIAEAIIAEgNQAHgOALgKIAEAJIAEgJQAGgLAOgJIADAHIAGgJQAIgJAKgHIABAKIAHgIQAJgJALgDIAAAJIAHgFQAIgGAJgEIAAAJIAagEIAKAZIAIgFQACAQgDAMIAGgEQAFASgIAPIAIgDQAAASgJAPIAHgBQgBAZgMAJIAKAAQgGAWgQAPIAJAAQgHARgLAJIgJAGIAHABQgNAXgRAAIAHAEQgJAJgLADIgJAAIAIAFQgIAFgNAAIgKgBIAGAHQgHACgMgDIgLgCIAEAEQgIAAgTgFg");
	this.shape_938.setTransform(295.9,93.9,1.227,1.227);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#66A338").s().p("Ag0BUQAFgYgRgWQgKgOgKgHQAWAOAKAZQAEANABAKIAWgoQAFgagagZIgagWQAfAOAOAbQAHANABALIAUgnQACgXgUgXIgVgRQAbANALAZQAGANAAAJIAYgpQAAgOgJgQIgLgNQARAIAFARQABAIAAAHIAlg8IgfA+IANgGQAQgEAQAJQgHgCgJAAQgTgBgNAJIgXAoIAVgGQAbgDAZARQgLgGgPgDQgegIgUANIgWAmIAZgGQAegCAbAUQgOgIgRgDQgkgJgTAQIgXAnIAWgHQAZgEAWAPQgMgGgQgCQgbgDgTAPIgVAbg");
	this.shape_939.setTransform(252.5,59.7,1.227,1.227);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#7BC043").s().p("AgwCDIgRgFQgYgYgGgJIAGABQgOgOgEgLIAJACQgOgPACgPIAIAFQgJgMAFgTIAHAEQgCgEgBgHQAAgNAIgOIAFAHQgBgEABgHQADgOALgPIAEAIIAEgNQAHgOALgKIADAJIAEgJQAHgLANgJIADAHIAHgJQAIgKAJgFIACAJIAHgHQAJgJAMgDIAAAIIAGgFQAIgGAJgEIAAAJIAbgEIAKAZIAHgFQACAQgEAMIAHgEQAFARgJAQIAJgEQAAATgJAPIAHgBQgCAZgLAJIAKAAQgGAWgQAPIAIAAQgGARgLAJIgJAFIAIABQgJAPgNAGIgJADIAAAAIAAAAIAHAEQgJAJgLADIgJAAIAIAFQgIAFgNAAIgKgBIAGAHQgHACgMgCIgLgDIAEAEQgIAAgTgFg");
	this.shape_940.setTransform(252.8,58.7,1.227,1.227);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#66A338").s().p("AgzBUQADgYgQgWQgKgPgLgGQAYANAJAaQAFAMgBAKIAYgnQADgagZgaIgZgVQAeAOAOAaQAHAOAAALIAWgnQABgXgTgWIgWgSQAbANALAZQAFAMAAAKIAZgpQAAgPgJgQIgKgMQAQAIAEARQACAHgBAHIAmg7IgfA+IANgGQARgEAPAJQgHgCgKgBQgSgBgMAJIgZApIAWgGQAbgDAYARQgLgGgPgEQgdgGgTAMIgYAmIAZgFQAfgDAaAUQgNgIgRgEQgkgJgTAQIgYAoIAXgHQAYgFAXAQQgLgGgRgCQgbgDgTAPIgWAbg");
	this.shape_941.setTransform(142.5,89.6,1.227,1.227);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#7BC043").s().p("AgwCDIgRgFQgYgYgGgJIAGABQgPgOgDgLIAIABQgNgPACgOIAIAFQgJgMAFgTIAHAEQgCgEgBgHQAAgMAIgPIAFAGQgBgEABgGQADgOALgPIAEAIIAEgNQAHgOALgKIAEAJIADgJQAHgLANgJIADAHIAHgJQAIgJAJgHIACAKIAHgIQAJgJAMgDIAAAJIAGgFQAIgGAKgEIAAAJIAagEIAKAZIAHgFQACAQgEAMIAHgEQAFASgIAPIAIgDQAAASgJAPIAHgBQgBAZgMAJIAKAAQgGAWgQAPIAJAAQgHARgLAJIgJAGIAIABQgJAOgNAHIgHADIAEADQgIAJgLADIgJAAIAIAFQgIAFgNAAIgKgBIAGAHQgHACgMgDIgLgCIADAEQgHAAgTgFg");
	this.shape_942.setTransform(142.8,88.4,1.227,1.227);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#66A338").s().p("AAjA4IgBAPQgEAQgQAJIAKgNQAJgQgCgPIgagoIgEAWQgKAZgaAPIAUgTQATgYgDgXIgXgmIgGAaQgMAcgeAPIAZgXQAYgagFgbIgZgmIgDAXQgIAagXAPQANgJAHgMQAQgYgFgYIgPgfIAVAaQAUAOAcgFQAPgCAMgHQgYAPgagDIgVgGIAYAmQAWAPAigLQASgEAMgJQgZAVgfgBIgZgEIAaAlQAUAMAdgJQAPgEAKgFQgXARgbgBIgXgFIAaAoQAOAHASgCQAJAAAGgDQgOAKgQgCIgPgGIAjA8g");
	this.shape_943.setTransform(233.7,129.2,1.227,1.227);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#7BC043").s().p("AAwB9IgGgFIABAIQgMgCgKgIIgHgHIgCAJQgKgFgIgJIgGgJIgEAHQgOgHgHgLIgFgJIgDAJQgLgKgIgOIgGgMIgDAIQgNgOgDgOIAAgLIgEAHQgJgNAAgOIgBgLIgGAEQgDgLADgLIADgJIgIAFQgCgJAGgLIAGgKIgJADQACgHAHgKIAIgJIgFABQAEgGANgPIAMgNIASgGQASgGAHAAIgDAEIALgDQANgDAHABIgGAHIAKgCQAOAAAHAFIgIAFIAJAAQALACAJAIIgHAEIAMADQAMAFAJAOIgIABIAKAFQAMAJAHARIgJAAIAKAKQAKAMAEAOIgJAAIAHAIQAGAKACAQIgHAAIAEAKQAFAMABALIgJgDIADAJQADAMgDAMIgGgEIACAIQACAKgBAKIgIgEIgIAZIgagCIABAIQgJgDgJgGg");
	this.shape_944.setTransform(233.5,130.1,1.227,1.227);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#66A338").s().p("AAiA4IAAAPQgEAQgQAJIAKgNQAJgQgBgPIgbgoIgEAWQgJAZgbAOIAUgSQATgYgDgWIgXgnIgHAaQgMAcgdAOIAYgVQAYgbgFgaIgZgnIgCALQABgIgCgIIgOgfIAVAaQAUAOAcgFQAQgDAKgGQgWAPgagDIgXgGIAZAmQAVAPAjgKQARgGAOgIQgaAUgfAAIgYgEIAZAlQAUAMAdgIQAPgFAKgFQgXARgbgBIgWgFIAaAoQAUALAagJQgOAKgQgDIgPgFIAkA8gAhBghQAIgMADgNIgBAGQgHAbgXAOQANgKAHgMg");
	this.shape_945.setTransform(204.7,127.4,1.227,1.227);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#7BC043").s().p("AAwB9IgHgFIACAJQgMgDgKgHIgHgHIgBAIQgLgFgIgJIgHgJIgDAHQgOgHgHgLIgFgJIgDAJQgLgJgIgOIgFgNIgEAJQgMgPgDgOIgBgKIgEAGQgJgNgBgOQABgLgBAAIgGAEQgEgLAEgLIADgJIgIAFQgCgIAGgMIAGgKIgJADQACgHAHgKIAIgJIgFABQAEgGANgOIAMgOIASgFQASgGAHgBIgDAEIALgDQANgDAHABIgGAHIAKgBQANgBAIAFIgIAFIAKAAQAKACAJAIIgHAEIALADQANAGAKANIgIABIAJAGQAMAIAHARIgJAAIAKAKQAKANAFANIgKAAIAGAIQAIAKAAAQIgGAAIAEAKQAFAMABALIgJgDIADAKQADALgDAMIgHgEIADAIQACAKgBAKIgHgEIgJAZIgagCIABAIQgKgDgIgGg");
	this.shape_946.setTransform(204.6,128.3,1.227,1.227);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#66A338").s().p("AgUAvQgEgkgXgOIgsgIIAPARQAMAYgEAbQABgMgDgRQgHgbgUgMIghgKIAiACQAjgHAQgvQgEAbgUARIgVAMIAsAIQAagGAQghQAIgQACgPQgCAhgUAXIgWAPIAtAHQAXgGAOgbQAHgOACgMQgCAdgUATIgSAMIAuAIQAOgFALgOQAGgGADgHQgCASgOAJIgNAGIBDAQIhFgJIALAKQAKAOgFASQAAgHgDgJQgFgSgMgJIgugIIAMATQAMAZgHAcQABgMgBgQQgDgdgUgPIgsgIIAPAVQAMAcgKAgQADgPgCgSg");
	this.shape_947.setTransform(406.2,29.3,1.227,1.227);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#7BC043").s().p("AgIBjIgMgFIACAIQgSgBgMgHIgJgHIACAIQgRgDgKgKIgGgHIgBAEQgKgFgHgJIgDgJIgCAJQgJgFgEgMIgDgLIgDAJQgEgGgCgMIgBgMIgEAFQgBgGgCgSIgBgTIAHgQQAIgSAEgGIABAGIAGgKQAGgLAFgFIABAJIAIgJQAIgKAJgCIgCAJIAGgGQAJgHAMgBIgBAHIAKgGQANgFAQADIgGAHIAKgDQAOgCARAFIgGAHIAOAAQARABAMAHIgHAHIAKABQAMACANAKIgEAFIAKADQAMAFAIAHIgIAEIAKAEQALAGAGAKIgHACIAIAEQAIAGAHAGIgIACIAMAXIgUASIAIAFQgJAFgKADIgJABIAHAFQgLAHgMACIgKAAIAHAHQgLAEgNAAIgLgBIADAHQgPAFgNgCIgKgDIAFAKIgIAAQgLAAgLgDg");
	this.shape_948.setTransform(408.1,29.3,1.227,1.227);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#66A338").s().p("AAiA4IAAAOQgEARgQAIIAKgMQAJgQgCgPIgagoIgEAWQgJAagbAOIAUgTQATgXgDgXIgXgmIgGAZQgNAcgdAPIAZgXQAYgagGgbIgYglIgEAXQgIAZgWAPQANgJAHgMQAQgYgGgYIgOgfIAVAaQAUAOAcgFQAQgDAKgGQgWAPgagDIgXgGIAZAmQAVAPAjgLQARgEAOgJQgaAVgfgBIgYgEIAZAlQAUAMAdgJQAPgEALgFQgYARgbgBIgWgFIAaAoQAMAHATgCQAJAAAHgDQgPAKgQgDIgOgFIAjA8g");
	this.shape_949.setTransform(258.8,144.8,1.227,1.227);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#7BC043").s().p("AAwB+IgHgFIACAIQgMgDgKgHIgHgHIgCAJQgKgFgIgKIgHgIIgDAGQgOgHgHgKIgFgJIgDAIQgLgJgIgOIgFgNIgEAIQgMgOgDgOIgBgLIgFAHQgIgNgCgNQACgLgBgBIgGAEQgEgLAEgLIADgJIgIAFQgCgIAGgMIAGgKIgJADQACgHAHgKIAIgJIgFABQAEgGANgOIAMgOIASgFQASgGAHgBIgDAEIALgDQANgDAHABIgGAHIAKgBQANgBAIAFIgIAFIAJAAQALACAJAIIgHAEIALADQANAGAKANIgIABIAJAGQAMAIAHARIgJAAIAKAKQAKANAFANIgKAAIAGAIQAIAKAAAQIgGAAIAEAKQAFAMABALIgJgDIADAKQADALgDAMIgHgEIADAIQACAKgBAKIgHgEIgJAZIgagCIABAIQgKgDgIgFg");
	this.shape_950.setTransform(258.7,145.6,1.227,1.227);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#66A338").s().p("AAiA3IAAAPQgEARgQAJIAKgNQAJgQgBgPIgagoIgFAWQgJAZgbAPIAVgTQASgXgCgXIgXgmIgHAaQgMAbgdAPIAYgWQAYgagFgbIgZgmIgDAWQgIAagXAPQAMgKAIgLQAPgYgFgYIgPgfIAWAaQAUAOAcgEQAPgDALgHQgXAPgagDIgWgGIAZAmQAVAPAjgLQARgEANgJQgZAVgfAAIgZgFIAZAlQAVAMAdgJQAPgDAKgGQgXARgbgBIgXgFIAaAoQAVALAbgJQgPALgQgDIgOgGIAjA8g");
	this.shape_951.setTransform(287.9,130.1,1.227,1.227);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#7BC043").s().p("AAwB+IgGgFIABAIQgMgDgKgHIgHgHIgBAJQgLgFgIgKIgGgIIgEAGQgOgHgHgKIgFgJIgEAIQgLgJgHgOIgGgNIgDAJQgNgPgDgOIgBgLIgDAHQgJgNAAgNIgBgMIgGAEQgDgLADgLIADgJIgIAFQgCgIAGgMIAGgKIgJADQACgHAIgKIAHgJIgFABQAEgGANgOIAMgOIARgFQASgGAIgBIgDAEIALgDQAMgDAIABIgGAHIALgBQANgBAHAFIgIAFIAKAAQALACAIAIIgGAEIALADQAMAGAKANIgIABIAJAGQAMAIAIARIgJAAIAJAKQAKANAFANIgKAAIAHAIQAGAKACAQIgHAAIAEAKQAFAMABALIgJgDIADAKQADALgDAMIgGgEIACAIQACAKgCAKIgHgEIgIAZIgagCIACAIQgKgDgJgFg");
	this.shape_952.setTransform(287.7,130.9,1.227,1.227);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#66A338").s().p("AAiA4IAAAPQgEARgQAIIAKgNQAJgQgCgPIgagoIgEAWQgJAagaAOIAUgTQASgXgCgXIgYgmIgGAZQgLAcgeAPIAZgWQAWgbgEgaIgZgmIgEAWQgHAbgXAOQANgKAHgMQAPgXgFgYIgOgfIAVAaQAUAOAcgFQAPgDAMgGQgYAPgagDIgVgGIAYAmQAWAPAigKQARgGANgIQgZAUgfABIgYgFIAZAlQAUAMAdgIQAPgFAKgFQgXARgbgBIgWgFIAaAoQAUALAagJQgOALgQgEIgPgFIAjA8g");
	this.shape_953.setTransform(355.6,103.2,1.227,1.227);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#7BC043").s().p("AAwB9IgHgFIABAIQgMgCgJgHIgIgHIgBAJQgKgGgIgJIgHgJIgDAHQgOgHgHgLIgFgJIgEAKQgLgKgHgOIgFgMIgEAIQgMgPgDgNIgBgLIgEAHQgJgPgBgNQABgLgBAAIgGAEQgEgLADgLIADgJIgHAFQgCgIAGgMIAGgKIgJADQACgHAHgKIAIgJIgFABQAEgGANgOIAMgOIARgFQATgGAHgBIgDAEIALgDQAMgDAIABIgGAHIAKgBQANgBAIAFIgIAFIAJAAQALACAJAIIgGAEIALADQAMAGAKANIgIABIAJAGQAMAIAIARIgJAAIAJAKQAKANAFANIgKAAIAHAIQAHAKABAQIgHAAIAEAKQAFAMABALIgJgDIADAKQADALgCAMIgIgEIADAIQACAKgCAKIgHgEIgIAZIgagCIABAIQgKgDgIgGg");
	this.shape_954.setTransform(355.5,104.1,1.227,1.227);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#66A338").s().p("AAHAzQgWgcgaABIgqASIAWAHQAVAKAKAVQgEgJgKgJQgVgTgYABIghAKIAegRQARgRAAgbQABgRgFgMQAKAZgHAZQgEANgGAIIApgSQATgSgFgkIgIggQAQAegFAeQgDAOgGAJIApgSQAPgSgDgeIgFgbQANAbgGAaQgDANgGAIIArgSQAKgMACgSIgBgQQAIAQgGAQQgDAIgFAEIBCgYIg/AfIAPADQAQAGAFAQQgEgGgHgEQgPgMgOgBIgsARIAWAJQAXAOAKAcQgFgLgLgMQgUgXgWgCIgqARIAXAKQAZARAJAgQgFgOgMgPg");
	this.shape_955.setTransform(346.2,64.3,1.227,1.227);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#7BC043").s().p("AhLBiIgIgHIABAJQgHgDgJgJIgHgJIAAAGQgGgFgMgPIgLgOQgGghABgLIAEAEIgCgLQgBgMADgHIAGAHIAAgMQACgMAGgHIAEAJQAAgEACgFQADgLAKgHIADAHIAEgKQAIgMAQgGIAAAIIAGgIQALgKASgFIgBAJIALgIQAOgHAOgCIgCAJIAJgEQAMgFAQABIgCAHIAKgCQANgDALABIgEAIIAKgCQAMgBALAFIgFAGIAIgBQAKAAAKADIgFAHIAXANIgHAaIAJABQgFAJgHAIIgGAFIAIAAQgHARgPAHIAJACQgHAKgLAGIgJAGIAGADQgKANgMAFIgJADIAHAFQgLAJgPAFIgOADIAIAEQgRAKgOABIgKgCIAGAGQgPAHgNgDIgKgDIADAFQgMACgKgFIgIgFIAEAJQgKAAgKgIg");
	this.shape_956.setTransform(347.4,64.7,1.227,1.227);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#66A338").s().p("AgtA+QgUgTgYAAIghAKIAegQQARgSAAgaQAAgSgEgMQALAZgIAaQgEANgGAHIApgSQATgRgEgkIgJggQARAdgGAeQgDAOgGAKIApgSQAPgSgDgfIgGgaQAOAagGAaQgDANgGAJIArgSQAKgMABgTIAAgPQAIAPgGAQQgDAIgFAFIBCgYIg/AeIAPAEQAPAFAGAQQgEgFgHgFQgPgLgPgBIgrARIAVAIQAYAOAJAcQgFgKgKgMQgUgYgXgBIgqARIAXAKQAZARAKAfQgGgOgMgOQgWgcgaAAIgpASIAWAIQAWALAKAUQgFgIgLgKg");
	this.shape_957.setTransform(133.4,59.7,1.227,1.227);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#7BC043").s().p("AhLBjIgIgHIABAJQgHgDgJgJIgHgJIAAAGQgFgFgNgPIgLgOQgGghABgLIAEAEIgBgMQgCgLADgHIAFAFIAAgLQACgNAGgHIAEAJQAAgDACgGQADgKAKgIIADAHIAFgKQAIgLAPgHIAAAIIAHgIQAKgKASgFIgBAJIALgHQAOgIAOgCIgBAJIAIgEQAMgFAQABIgCAHIAKgCQANgDALABIgEAIIAKgBQAMgBALAEIgFAGIAJAAQAKAAAJACIgFAHIAXANIgHAaIAJABQgFAJgHAIIgGAFIAIAAQgHARgPAHIAJACQgHAKgKAHIgKAFIAGAEQgKANgLAGIgKACIAIAFQgLAKgPAEIgOADIAHAFQgQAKgOAAIgKgBIAFAGQgPAHgNgDIgHgCIABAEQgMACgKgFIgIgFIAEAJQgJAAgLgIg");
	this.shape_958.setTransform(134.7,60.1,1.227,1.227);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#66A338").s().p("AgsA9QgVgTgYABIghAKIAegRQARgRAAgbQABgSgFgLQAKAYgHAaQgEANgGAIIApgSQATgSgFgkIgIggQARAdgGAeQgDAOgGAKIApgSQAPgSgDgfIgGgaQAOAagGAbQgDANgGAIIArgSQAKgMACgSIgBgQQAIAPgGAQQgDAIgFAFIBCgYIg/AfIAOADQAQAGAGAQQgEgGgIgEQgOgMgPgBIgrARIAWAIQAWAPAKAcQgGgMgKgLQgTgYgXgBIgqARIAYAKQAYARAKAgQgGgPgMgOQgWgcgaABIgpARIAWAHQAXAMAKAWQgEgJgMgLg");
	this.shape_959.setTransform(119.5,6.1,1.227,1.227);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#7BC043").s().p("AhLBiIgJgHIABAJQgHgDgIgKIgIgIIAAAGQgFgEgNgPIgLgPQgGghABgLIAEAEIgBgLQgBgMACgHIAGAHIABgLQABgNAGgHIAEAJQAAgDACgGQAEgKAJgIIADAHIAFgKQAIgMAPgGIAAAIIAHgJQAKgJASgFIgBAJIAMgHQAOgIANgCIgBAJIAIgFQAMgEAQABIgCAHIALgDQAMgCALABIgEAIIAKgBQAMgCAMAFIgFAGIAIAAQAKgBAKADIgFAHIAXANIgHAaIAJABQgFAJgHAHIgGAGIAIAAQgHARgPAHIAJACQgHAJgLAIIgJAFIAGAEQgKANgMAGIgJACIAIAFQgLAJgQAFIgNADIAHAFQgRAJgOABIgKgBIAGAGQgPAHgOgEQgGgBgCgCIABAEQgMACgKgFIgIgFIAEAJQgJAAgKgIg");
	this.shape_960.setTransform(120.8,6.1,1.227,1.227);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#66A338").s().p("AgtA9QgUgTgYAAIghAKIAegRQARgRABgbQgBgRgEgMQALAZgIAZQgEANgGAIIApgSQATgRgEgkIgJghQAQAegFAeQgDAOgGAJIApgSQAPgSgDgeIgGgbQAOAbgGAaQgDANgGAIIArgSQAKgMABgSIAAgQQAIAQgGAQQgDAIgFAEIBCgYIg/AfIAOADQARAGAGAQIgMgKQgPgMgPgBIgqASIAVAIQAXAOAKAcQgGgLgJgMQgVgXgXgCIgqARIAYAKQAYARALAgQgHgOgLgPQgWgcgbABIgoASIAVAHQAYALAJAYQgEgKgNgLg");
	this.shape_961.setTransform(381,83.5,1.227,1.227);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#7BC043").s().p("AhLBiIgIgHIABAJQgHgDgJgJIgHgJIAAAGQgGgEgMgPIgLgPQgGghABgLIAEAEIgCgLQgBgMADgHIAGAHIAAgLQACgNAGgHIAEAJQAAgDACgGQADgKAKgIIADAHIAEgKQAIgLAQgHIAAAIIAGgIQALgKASgFIgBAJIALgHQAOgIAOgCIgCAJIAJgEQAMgFAQABIgCAHIAKgCQANgDALABIgEAIIAKgBQAMgBALAEIgFAGIAIAAQAKAAAKACIgFAHIAXANIgHAaIAJABQgFAJgHAIIgGAFIAIAAQgHARgPAHIAJACQgHAKgLAHIgJAFIAGAEQgKANgMAGIgJACIAHAFQgLAKgPAEIgOADIAIAFQgRAJgOABIgKgBIAGAGQgPAGgOgCIgKgEIADAEQgLACgLgFIgIgFIAEAJQgJAAgKgIg");
	this.shape_962.setTransform(382.4,83.5,1.227,1.227);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#66A338").s().p("AAVA1QAAgegQgQIgrgOIALAWQAJAegOAfQAFgPAAgSQABgkgUgQIgrgPIAMAUQAKAYgIAaQADgOgBgOQgDgbgTgQIgfgPIAiAHQAlgDAWgsQgIAagXAOIgVAJIArAOQAagCAUgeQAKgPAFgPQgHAhgXATIgXAMIArANQAWgDASgZQAJgNAEgMQgHAdgWAQIgUAKIAtAOQAOgCANgMQAHgHAEgGQgFAQgPAIIgOAEIBBAZIhDgSIAJANQAHAQgGAQQAAgHgBgJQgEgTgKgKIgtgPIAKAUQAIAagLAcQADgMABgQg");
	this.shape_963.setTransform(389,48.3,1.227,1.227);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#7BC043").s().p("AgTBhIgMgGIACAJQgSgDgMgJIgHgIIABAIQgPgGgKgKQgGgJgBAAIgCAHQgKgHgFgKIgCgJIgDAJQgHgGgDgNIgBgLIgFAIQgDgHgBgMIABgMIgDAEQgBgGABgTIABgTIAKgPQALgRAFgFIAAAGIAHgJQAIgKAGgEIAAAKIAHgJQAJgIAKgBIgDAJIAHgFQAKgFAMAAIgCAHIAKgEQAOgEAQAFIgGAGIAKgCQAOAAARAIIgHAGIANABQAQAEAMAIIgHAGIAKACQAMAEALAMIgGAEIAKAEQALAGAIAJIgJADIAIAFQAKAHAGAKIgIABIAGAFQAIAHAGAIIgIABIAJAZIgWAPIAGAGQgKAEgKABIgIAAIAFAFQgLAFgMAAIgKgBIAFAIQgLACgNgBIgKgCIACAHQgQADgMgEIgJgEIACAJQgOAAgOgHg");
	this.shape_964.setTransform(390.4,48.2,1.227,1.227);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#66A338").s().p("AhGBIQAJgYgLgaQgHgOgJgJQAUARADAbQACAOgCAJIAfghQAJgZgTgeIgUgaQAbAUAHAdQAEAPgCALIAegiQAHgWgOgbIgRgWQAWATAFAbQADAMgCAKIAggjQAEgPgGgRQgDgJgEgGQANAMABAQQABAJgDAGIAygxIgtA1IAPgDQARAAAMANQgGgEgJgCQgRgGgPAGIggAjIAXgBQAbADAUAWQgJgJgOgGQgbgNgWAIIgfAgIAZAAQAeAFAWAZQgMgKgQgJQgfgQgYALIgfAhIAXgCQAbADASAUQgKgJgPgFQgagJgWAKIgaAWg");
	this.shape_965.setTransform(379.7,-5.9,1.227,1.227);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#7BC043").s().p("AguB6IgKgFIADAFQgHgCgRgKIgQgIQgSgcgEgLIAFABQgLgQgBgMIAJADIgFgKQgDgLADgJIAHAGIgCgJQgBgLAGgLIAGAGQgBgFABgHQADgNALgMIADAHQAAgDADgIQAFgNAPgMIADAJIAHgLQAJgNANgHIADAJIAFgHQAJgJAPgFIABAGIAIgGQAKgIALgEIgCAJIAJgFQALgGAMgBIgDAIIAIgEQAJgEALgBIgDAIIAaAAIAFAaIAIgEQgBAQgHALIAIgCQABATgLANIAJgBQgEASgNANIAIABQgEAQgIAJIgIAGIAJACQgKAVgTALIAJACQgLAPgNAHIgKADIAHADQgKAMgPADIgNAEIAGAEQgLAHgLAAIgIgBIAHAGQgJAEgMgDIgLgEIAFAIQgHAAgMgFg");
	this.shape_966.setTransform(379.8,-6.1,1.227,1.227);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#66A338").s().p("AhGBHQAJgXgLgaQgHgQgJgIQATARAFAbQABAOgCAJIAfghQAJgYgTgeIgUgbQAbAUAHAdQAEAPgCALIAegiQAGgWgOgbIgQgWQAWATAGAbQACANgCAJIAggiQAEgOgGgSQgDgIgEgGQANALABARQAAAJgCAGIAygxIgtA1IAPgDQARgBAMANQgGgEgJgCQgSgFgOAFIggAjIAXgBQAbAEAUAVQgJgIgOgHQgbgMgWAIIgfAgIAZAAQAeAFAWAZQgMgLgPgIQgggRgYAMIgfAhIAXgCQAbABASAUQgKgJgPgFQgagJgWAKIgaAWg");
	this.shape_967.setTransform(331.7,-5.8,1.227,1.227);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#7BC043").s().p("AgtB6IgKgEIADAEQgHgCgRgJIgQgIQgSgdgEgKIAFABQgLgRgBgLIAJADIgFgKQgDgMADgJIAHAGIgCgJQgBgKAGgLIAGAFQgBgEABgHQADgNALgNIADAIQAAgEADgGQAFgNAOgNIADAJIAHgLQAJgNANgHIADAIIAFgHQAJgKAPgFIABAHIAIgHQAKgIALgDIgBAJIAIgGQALgFAMgBIgCAHIAHgDQAKgEAKgCIgCAIIAaABIAEAaIAHgDQgBAQgGALIAHgDQACATgMANIAKgBQgEASgMANIAHACQgEAPgIAJIgIAGIAJACQgKAWgTALIAJABQgLAQgNAGIgKAEIAIACQgLAMgOAEIgNADIAGAGQgLAGgLAAIgIgCIAGAGQgIAEgMgDIgLgDIAFAIQgHgBgMgFg");
	this.shape_968.setTransform(331.7,-6,1.227,1.227);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#66A338").s().p("Ag1BUQAFgYgRgYQgJgNgJgGQAWAOAIAYQAFAMAAALIAWgmQAFgagZgaIgagXQAfAOAMAbQAHAOABALIAVgnQADgWgUgYIgVgSQAbAOAKAYQAFANAAAKIAZgpQABgPgJgQIgKgMQAPAIAFARQABAIAAAGIAmg5IggA8IANgGQARgEAPAKQgHgCgJAAQgTgBgNAIIgYAnIAVgFQAbgCAZAQQgLgEgPgFQgdgHgVANIgXAlIAYgEQAggCAaAUQgOgHgSgGQgigIgVAPIgWAmIAVgHQAagDAYAPQgugTgdAVIgUAcg");
	this.shape_969.setTransform(293,-7.4,1.227,1.227);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#7BC043").s().p("AgRCFIgLgDIAEAEQgHgBgTgFIgRgFQgYgYgGgJIAGABQgPgOgDgLIAJACQgNgPACgPIAIAFQgJgNAGgTIAGAEQgCgEAAgGQAAgNAIgPIAFAHQgBgDACgHQACgNAMgQIAEAIIAFgMQAIgPAKgKIAEAJIAFgJQAHgLANgIIADAIIAHgIQAIgKAJgFIABAJIAHgIQAJgIAMgDIgBAJIAHgFQAIgGAJgDIgBAJIAagEIAJAZIAHgEQACAQgEAMIAHgEQAFASgIAPIAJgDQAAASgJAPIAHgBQgCAZgMAJIAKAAQgGAXgRAOIAJAAQgHARgLAJIgKAFIAIACQgJAOgMAGIgGACIADABQgJAJgLACIgJABIAIAFQgIAFgNAAIgKgCIAFAIIgGAAIgNgBg");
	this.shape_970.setTransform(292.9,-8.6,1.227,1.227);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#66A338").s().p("AAaBgQgVgagyAHQAagIAZAJQAMAFAHAGIgNgrQgRgUgkACIgiAFQAfgNAeAIQAOAEAIAGIgOgqQgRgQgfABIgbAEQAcgMAaAIQANAEAIAGIgPgtQgLgKgSgDIgQgBQAQgHAPAHQAIAEAFAFIgThDIAaBBIAEgOQAIgPAQgFIgNAKQgLAOgCAPIANAtIALgVQAQgWAdgHQgMAEgMAJQgaASgCAXIANArIANgXQATgYAggHQgOAFgPALQgeAUgBAaIANArIACgEIgCAKIAHAig");
	this.shape_971.setTransform(180.3,-9.7,1.227,1.227);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#7BC043").s().p("AgCCMIADgDQgTACgLgFIAIgFQgUAAgKgLIAJgDQgPgBgLgQIAHgCQgEgBgGgEQgKgJgGgQIAIABQgDgCgFgFQgJgMgEgSIALAEQgNgTgBgVIAJACQgCgDgCgGQgEgMACgRIAHACQgGgQAEgSIAIAFIgBgKQgBgMAGgLIAFAFIAAgIQAAgKAEgJIAGAFIAQgVIAZAJIABgIQANAHAHAMIABgJQAQAKAGAPIADgKQANAMAGAQIAEgGQAMAMAEAMQACAGAAADIAGgGQAOATAAAWIAGgHQAIARAAAOQAAAGgCAEIAGgGQAGAPgEANQgCAHgDACIAHgCQACATgMAKIAJgDQgBAPgQAMIAKAAQgGAKgRALIAGAAQgFAFgQALIgPAKIggACIgMgBg");
	this.shape_972.setTransform(180.7,-11,1.227,1.227);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#66A338").s().p("AAaBgQgWgbgxAIQAagIAZAJQAMAFAHAGIgNgrQgRgUgkABIghAGQAegNAeAHQAOAFAIAGIgPgqQgRgQgeABIgbAEQAcgMAaAIQANAEAHAGIgOgtQgLgKgSgDIgQgBQARgHAPAIQAHADAFAFIgThDIAZBBIAFgOQAIgPAQgFQgGAEgGAHQgMANgCAPIAOAsIALgUQAQgXAcgHQgMAEgMAKQgZASgDAWIANArIANgXQAUgYAfgHQgOAGgPAKQgeAUgBAaIAOArIABgCIgCAJIAIAigAArBBQANgXAYgIQgMAFgLALQgKAJgFAKg");
	this.shape_973.setTransform(89.1,-0.7,1.227,1.227);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#7BC043").s().p("AgCCNIADgDQgTACgLgFIAIgFQgUAAgKgLIAJgDQgPgBgLgQIAHgCQgEgBgGgFQgKgJgGgPIALABQgEgCgEgGQgJgLgEgSIAJACQgNgSgBgWIAJACQgCgDgCgGQgEgMACgQIAHACQgGgQAEgSIAIAFIgCgKQAAgNAGgKIAFAFQgCgNAGgPIAGAGIAOgWIAZAJIABgIQANAIAHALIACgHQAQAJAGAPIADgJQANAMAGAQIAEgGQATASgBAPIAGgIQAOATAAAWIAGgHQAIARAAAOQAAAGgCAEIAGgGQAJAagMANIAHgCQACATgMAKIAJgDQgBAPgQAMIAKAAQgEAGgKAIIgJAHIAGAAQgFAFgQALIgPAKIghACIgLgBg");
	this.shape_974.setTransform(89.6,-2.2,1.227,1.227);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#66A338").s().p("AAaBgQgWgbgxAIQAagIAZAJQAMAFAHAGIgOgrQgQgUglABIggAGQAegOAeAIQAOAEAIAHIgPgqQgRgQgeABIgbAEQAcgMAaAIQANAEAHAGIgOgtQgLgKgTgDIgPgBQAQgHAPAHQAIAEAFAFIgUhDIAaBBIAFgOQAHgPARgFIgNAKQgLAOgCAPIANAtIALgVQAQgWAcgHQgLAEgMAJQgZASgDAXIANArIANgXQATgXAggIQgOAGgPAKQgeAUgBAaIAOArIAAgCIgBAIIAIAig");
	this.shape_975.setTransform(82.4,56.6,1.227,1.227);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#7BC043").s().p("AgBCNIADgEQgTACgLgFIAIgFQgUAAgKgLIAJgDQgPgBgLgQIAHgCQgEgBgFgEQgLgJgGgQIAIABQgDgCgFgFQgJgLgEgTIAKADQgNgSgBgVIAJACQgCgDgCgGQgEgMACgQIAHACQgGgRAEgSIAJAFIgCgKQAAgMAGgKIAFAFQgCgNAGgPIAGAFIAQgWIAZAIIAAgIQAOAIAGALIABgIQARAJAGAPIACgIQANANAGAPIAEgFQAUARgBAPIAGgHQAOASAAAWIAGgHQAIARgBAOQAAAHgCADIAGgFQAJAZgLAPIAGgCQACATgMAKIAKgDQgBAPgQAMIAKAAQgEAGgKAIIgJAHIAFAAQgEAEgQALIgPAKIghACIgLgBg");
	this.shape_976.setTransform(82.8,55.3,1.227,1.227);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#66A338").s().p("AgDBjQgKgWgZgLQgOgGgOgCQAbAAAUARQALAJAFAIIAAgtQgKgYgjgKIghgFQAhgEAaARQANAJAGAIIgBgtQgLgUgdgJIgbgFQAegCAWAQQALAIAFAJIAAgwQgHgNgQgJIgPgGQARAAAMAMQAGAFADAHIADhHIAEBHQACgHAGgFQAMgMASAAIgPAGQgQAJgHANIAAAwQAFgJALgIQAWgRAeADQgNAAgOAFQgeAJgKAUIgBAtQAGgIANgJQAagRAhAEQgPAAgSAFQgjAKgKAYIAAAtQAFgIAKgJQAVgRAbAAQgNABgQAGQgZAMgJAWIgEAjg");
	this.shape_977.setTransform(52,86.1,1.227,1.227);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#7BC043").s().p("AgoCIIADAAQgTgGgJgIIAJgDQgTgGgGgOIAJAAQgOgGgFgTIAIAAQgEgDgEgFQgHgMAAgRIAIAEQgDgDgDgGQgFgNADgTIAIAEQgIgUAIgWIAHAGIgBgKQABgNAIgOIAFADQAAgQAKgRIAFAHQABgPAOgPIADAHQADgNAKgMIAEAIIAUgQIAVAQIAEgIQAKAMAEANIABgHQAOAPABAPIAGgHQAJARAAAQIAGgDQAIAOABANQAAAGgCAEIAIgGQAHAWgHAUIAIgEQACATgFANQgCAGgDADIAIgEQAAAbgPAIIAJAAQgFATgOAGIAJAAQgGAOgTAGIAJADQgIAIgUAFIAGADQgKAEghAJQgggJgKgEg");
	this.shape_978.setTransform(52,84.5,1.227,1.227);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#C4E8FA").s().p("EhJfAvwMAAAhfeMCS/AAAMAAABfeg");
	this.shape_979.setTransform(543.9,321,1.227,1.227);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(488.9,306.2,1203.5,823.1);
// library properties:
lib.properties = {
	width: 1100,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/nuages.png", id:"nuages"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;