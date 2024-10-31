(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7131A").s().p("EgAUAp4Qm3AAmLidQmZijk4k4QlalbiqmwQifmXANm4QAMmpCsmNQCsmNEykyIYn4oIYnYoQEyEyCtGNQCsGNAMGpQANG4igGXQipGwlbFbQk4E4mZCjQmLCdm3AAgAsPk6QiYCYhWDFQhWDFgGDUQgGDbBPDKQBVDXCsCsQCcCcDLBQQDEBPDbAAIATAAQDbAADEhOQDMhRCbicQCsisBVjXQBPjKgGjbQgGjUhWjFQhWjFiYiYIsQsQg");
	this.shape.setTransform(296.8835,355.2661,1.3257,1.3257);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,593.8,710.6), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {start:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_58 = function() {
		//this.gotoAndPlay("start");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(58).call(this.frame_58).wait(11));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7131A").s().p("EhGMA6YMAAAhm9QCfmKDmjQQDcjGE/g5QEegzGvA3QFIAqJYCHISQEFQL6ChKkBhQdLEMeThvMAAABm9g");
	this.shape.setTransform(449.3,352.5789);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7131A").s().p("EhGMA6XMAAAhm9QCimIDqjQQDdjGFAg5QEegzGyA2QFIAqJZCFQR3EAAYAEQL5ChKiBhQdHENeOhuMAAABm9g");
	this.shape_1.setTransform(449.3,352.6673);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7131A").s().p("EhGMA6UMAAAhm8QCrmCD3jQQDgjFFEg6QEeg0G3A0QFMAnJXCEQRzD8AbAFQL3CfKeBiQc6EMd+hoMAAABm8g");
	this.shape_2.setTransform(449.3,352.9375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7131A").s().p("EhGMA6QMAAAhm9QC6l2ELjQQDmjEFKg9QEegzHAAuQFTAkJUCBQRrD2AhAFQLyCdKaBkQcjELdkhgMAAABm9g");
	this.shape_3.setTransform(449.3,353.3843);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7131A").s().p("EhGMA6KMAAAhm9QDOlmEnjRQDujCFUg/QEdg0HNAnQFbAfJSB8QRfDvApAGQLsCaKSBmQcFEKdAhVMAAABm9g");
	this.shape_4.setTransform(449.3,353.9847);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7131A").s().p("EhGMA6CMAAAhm8QDolTFKjSQD5i/FghDQEbg0HdAfQFnAYJMB3QRTDlAyAGQLlCXKIBoQbeEJcThGMAAABm8g");
	this.shape_5.setTransform(449.3,354.7112);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7131A").s().p("EhGMA56MAAAhm8QEIk7F0jUQEEi7FuhHQEbg1HwAUQF0ARJHBwQRCDaA+AGQLcCTJ+BsQauEHbdg1MAAABm8g");
	this.shape_6.setTransform(449.3,355.5241);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7131A").s().p("EhGMA5yMAAAhm9QErkgGmjUQESi4F+hMQEZg1IIAIQGDAIJBBoQQuDOBNAGQLRCOJwBvQZ5EGaegiMAAABm9g");
	this.shape_7.setTransform(449.3,356.3721);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7131A").s().p("EhGMA5rMAAAhm9QFUkBHbjWQEiizGRhSQEYg1IggGQGUgCI8BgQQYC+BbAHIUoD8QY8EEZYgMMAAABm9g");
	this.shape_8.setTransform(449.3,357.098);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7131A").s().p("EhGMA5kMAAAhm9QGAjfIYjYQEyivGmhYQEVg1I9gVQGngNI0BXQQACuBsAHQK6CCJRB4QX6ECYLANMAAABm9g");
	this.shape_9.setTransform(449.3,357.7655);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7131A").s().p("EhGMA5eMAAAhm9QGwi7JYjZQFFiqG6hfQEVg2JaglQG7gYIsBMQPnCdB9AIQKuB8I/B8QWzEAW4AnMAAABm9g");
	this.shape_10.setTransform(449.3,358.3764);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7131A").s().p("EhGMA5ZMAAAhm9QHiiVKdjbQFYilHShlQESg2J6g3QHRglIjBCQPMCLCRAIQKfB1ItCCQVmD9VhBDMAAABm9g");
	this.shape_11.setTransform(449.3,358.8604);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7131A").s().p("EhGMA5VMAAAhm8QIXhuLkjcQFsigHqhsQEQg3KbhIQHogyIZA2QOxB4ClAJQKPBuIaCHQUZD7UEBgMAAABm8g");
	this.shape_12.setTransform(449.3,359.2413);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7131A").s().p("EhGMA5TMAAAhm9QJNhEMujeQGCiaIBh0QEOg4K+haQH+g/IRArQOUBjC4AKQKBBmIHCNQTFD5SnB9MAAABm9g");
	this.shape_13.setTransform(449.3,359.4778);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7131A").s().p("EhGMA5SMAAAhm9QKEgaN6jgQGWiVIbh7QEMg4LghtQIWhNIHAfQN3BQDOALQJwBeHzCSQRzD2RGCcMAAABm9g");
	this.shape_14.setTransform(449.3,359.578);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7131A").s().p("EhGMA5SMAAAhm8QK7AQPGjjQGriOI1iDQEKg5MDiAQIshaH/ATQNZA7DiAMQJiBXHeCYQQgDzPlC7MAAABm8g");
	this.shape_15.setTransform(449.3,359.5264);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7131A").s().p("EhGMA5UMAAAhm8QLyA5QRjkQHBiIJNiLQEIg6MliTQJFhnH1AIIQ0AzQJRBQHKCdQPNDxOFDZMAAABm8g");
	this.shape_16.setTransform(449.3,359.3497);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7131A").s().p("EhGMA5XMAAAhm9QMoBjRbjmQHViDJniSQEFg6NIilQJbh1HsgEQMgATELANQJDBIG1CjQN8DuMnD3MAAABm9g");
	this.shape_17.setTransform(449.3,359.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7131A").s().p("EhGMA5aMAAAhm8QNdCLSijpQHqh9J+iZQEDg6Npi4QJxiCHkgPQMEAAEfAOQI0BBGiCoQMtDsLLEUMAAABm8g");
	this.shape_18.setTransform(449.3,358.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7131A").s().p("EhGMA5iMAAAhm8QOQCxTmjqQH9h4KVigQECg7OHjJQKHiOHcgZQLpgTEzAOQIlA6GPCuQLiDpJzEwMAAABm8g");
	this.shape_19.setTransform(449.3,357.9485);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E7131A").s().p("EhGMA5sMAAAhm8QO/DVUojrQIPh0KqimISlkUQKciaHTgkQLRgkFDAPQIZA0F9CyQKbDnIgFKMAAABm8g");
	this.shape_20.setTransform(449.3,356.9272);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E7131A").s().p("EhGMA52MAAAhm8QPrD2VjjsQIihvK+isQD+g8PBjoQKuilHMgtQK5g0FVAPQILAuFuC3QJXDlHUFiMAAABm8g");
	this.shape_21.setTransform(449.3,355.922);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E7131A").s().p("EhGMA5/MAAAhm8QQTEVWbjuQIwhrLRixQD8g9Pbj2QK/iuHGg2QKjhDFjARQIAAnFgC8QIaDjGOF4MAAABm8g");
	this.shape_22.setTransform(449.3,355.012);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E7131A").s().p("EhGMA6IMAAAhm9QQ3ExXLjwQI/hmLhi3QD7g9PxkCQLPi3HAg+QKPhPFyAQQH1AjFTC/QHlDhFOGMMAAABm9g");
	this.shape_23.setTransform(449.3,354.1832);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E7131A").s().p("EhGMA6PMAAAhm9QRWFJX2jxQJKhkLwi7QD5g9QFkMQLci/G7hEQJ/hbF9ARQHsAeFHDCQG3DgEYGdMAAABm9g");
	this.shape_24.setTransform(449.3,353.4662);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E7131A").s().p("EhGMA6VMAAAhm9QRxFcYYjxQJUhhL8i/QD5g9QUkVQLojFG1hKQJzhlGGARQHlAbE+DFQGPDfDrGrMAAABm9g");
	this.shape_25.setTransform(449.3,352.852);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E7131A").s().p("EhGMA6aMAAAhm9QSFFsY1jyQJchfMFjBQD3g+QjkcQLvjKGzhPQJnhsGOASQHfAYE3DHQFwDeDHG2MAAABm9g");
	this.shape_26.setTransform(449.3,352.378);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E7131A").s().p("EhGMA6dMAAAhm8QSUF3ZJjzQJihdMLjEQD4g9QqkiQL3jNGwhSQJfhxGUARQHbAXEwDIQFbDdCtG/MAAABm8g");
	this.shape_27.setTransform(449.3,352.0331);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E7131A").s().p("EhGMA6fMAAAhm8QSdF9ZWjyQJkhdMQjEQD3g+QxklQL6jQGuhTQJah1GXASQHZAVEtDJQFNDdCeHEMAAABm8g");
	this.shape_28.setTransform(449.3,351.83);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E7131A").s().p("EhGMA6gMAAAhm9QSgGAZajzQJlhcMRjFQD3g+QzklQL7jRGvhUQJYh2GZASQHXAVEtDJQFHDdCZHFMAAABm9g");
	this.shape_29.setTransform(449.3,351.7559);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E7131A").s().p("EhGMA6fMAAAhm8QSdF9ZWjyQJkhdMQjEQD3g+QxklQL6jQGuhTQJbh1GXASQHZAVEtDJQFNDdCdHEMAAABm8g");
	this.shape_30.setTransform(449.3,351.83);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E7131A").s().p("EhGMA6IMAAAhm9QQ3ExXLjvQI/hnLhi3QD7g9PxkCQLPi3HAg+QKPhPFyAQQH1AjFTC/QHlDhFOGMMAAABm9g");
	this.shape_31.setTransform(449.3,354.1832);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E7131A").s().p("EhGMA5/MAAAhm8QQTEVWbjuQIwhrLRixQD8g9Pbj2QK/iuHGg2QKjhDFjARQIAAnFgC8QIbDjGNF4MAAABm8g");
	this.shape_32.setTransform(449.3,355.012);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E7131A").s().p("EhGMA52MAAAhm8QPrD3VkjtQIghvK/isQD+g8PBjoQKuilHMgtQK5g0FVAPQILAuFuC3QJXDlHUFiMAAABm8g");
	this.shape_33.setTransform(449.3,355.922);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E7131A").s().p("EhGMA5sMAAAhm8QO/DVUojrQIPh0KqimISlkUQKciaHTgkQLRgkFDAPQIZA0F+CyQKZDnIhFKMAAABm8g");
	this.shape_34.setTransform(449.3,356.9272);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E7131A").s().p("EhGMA5XMAAAhm9QMoBjRbjmQHWiDJmiSQEFg6NIilQJah1HugEQMfATELANQJDBIG1CjQN8DuMnD3MAAABm9g");
	this.shape_35.setTransform(449.3,359.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E7131A").s().p("EhGMA5UMAAAhm8QLyA5QRjkQHBiIJNiLQEIg5MliUQJFhnH1AIIQ0AzQJRBQHKCdQPNDxOFDZMAAABm8g");
	this.shape_36.setTransform(449.3,359.3497);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E7131A").s().p("EhGMA5SMAAAhm9QKEgaN6jgQGWiUIbh8QEMg4LghtQIWhNIHAfQN3BQDOALQJwBeHzCSQRzD2RGCcMAAABm9g");
	this.shape_37.setTransform(449.3,359.578);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E7131A").s().p("EhGMA5TMAAAhm9QJNhEMujeQGCiaIBh0QEOg3K+hbQH+g/IRArQOUBjC4AKQKBBmIHCNQTFD5SnB9MAAABm9g");
	this.shape_38.setTransform(449.3,359.4778);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E7131A").s().p("EhGMA5VMAAAhm8QIXhuLkjcQFtigHphsQEQg3KbhIQHogyIaA2QOwB4ClAJQKPBuIaCHQUZD7UEBgMAAABm8g");
	this.shape_39.setTransform(449.3,359.2413);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E7131A").s().p("EhGMA5eMAAAhm9QGwi7JYjZQFFiqG6hfQEUg2JbglQG7gYIsBMQPnCdB9AIQKuB8I/B8QWzEAW4AnMAAABm9g");
	this.shape_40.setTransform(449.3,358.3764);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E7131A").s().p("EhGMA5rMAAAhm9QFTkBHdjWQEhizGRhSQEYg1IggGQGUgCI8BgQQYC+BbAHIUoD8QY8EEZYgMMAAABm9g");
	this.shape_41.setTransform(449.3,357.098);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E7131A").s().p("EhGMA56MAAAhm8QEIk7F0jTQEEi8FuhHQEbg1HwAUQF0ARJHBwQRCDaA+AGQLcCTJ+BsQauEHbdg1MAAABm8g");
	this.shape_42.setTransform(449.3,355.5241);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E7131A").s().p("EhGMA6CMAAAhm8QDplTFJjSQD4i/FhhDQEbg0HdAfQFnAYJMB3QRTDlAyAGQLlCXKIBoQbeEJcThGMAAABm8g");
	this.shape_43.setTransform(449.3,354.7112);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E7131A").s().p("EhGMA6KMAAAhm9QDOlmEnjRQDujCFUg/QEdg0HNAnQFcAfJRB8QRfDvApAGQLsCaKSBmQcFEKdAhVMAAABm9g");
	this.shape_44.setTransform(449.3,353.9847);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E7131A").s().p("EhGMA6XMAAAhm9QCimIDqjQQDdjGFAg5QEegzGyA2QFIAqJZCFQR3EAAZAEQL4ChKiBhQdHENeOhuMAAABm9g");
	this.shape_45.setTransform(449.3,352.6673);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-22.6,898.6,748.8000000000001);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgLXwQj5AAjghZQjohcixixQjFjFhgj1QhajnAHj6QAHjxBhjhQBijhCuiuIN9t9IN+N9QCtCuBiDhQBiDhAHDxQAHD6hbDnQhgD1jEDFQixCxjoBcQjhBZj5AAg");
	mask.setTransform(500.0249,536.125);

	// wave_percentage
	this.percentage_wave = new lib.Symbol3();
	this.percentage_wave.name = "percentage_wave";
	this.percentage_wave.setTransform(498.15,735.4,0.3906,0.037,0,0,0,449.3,725.6);

	var maskedShapeInstanceList = [this.percentage_wave];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.percentage_wave).to({regY:726.2,scaleY:0.4307,y:735.45},59,cjs.Ease.cubicInOut).wait(1));

	// BG
	this.instance = new lib.Symbol4();
	this.instance.setTransform(500.05,500,1,1,0,0,0,296.9,355.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(203.2,144.8,593.7,710.5999999999999);


// stage content:
(lib.blood_drop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(500,500,1,1,0,0,0,500,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(703.2,644.8,93.69999999999993,210.60000000000002);
// library properties:
lib.properties = {
	id: 'D6575376D0EE4849A8F334E37A31AAF3',
	width: 1000,
	height: 1000,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D6575376D0EE4849A8F334E37A31AAF3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;