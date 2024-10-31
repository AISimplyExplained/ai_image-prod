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
	this.frame_40 = function() {
		//this.gotoAndPlay("start");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(29));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7131A").s().p("EhGMA6YMAAAhm9QCfmKDmjQQDcjGE/g5QEegzGvA3QFIAqJYCHISQEFQL6ChKkBhQdLEMeThvMAAABm9g");
	this.shape.setTransform(449.3,352.5789);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7131A").s().p("EhGMgsoQCgmIDmjOQDdjFE+g4QBfgRBwgFQDfgKEgAlQEjAlH5BtICEAdQMdCyD+A2IB1AaQIuB1IABRQC6AeC0AaQGdA5GeApQIDAxIIAVQHiAVHmgDQHmgDHpgZIABEZMAAABijMiMYAABg");
	this.shape_1.setTransform(449.3,352.9425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7131A").s().p("EhGKA6JMgAChm8QCil/DnjJQDejBE9g2QBggQBvgFQDggJEgAkQEkAlH4BrICEAcQMZCuEDAyQBsAXAJABQIsBxIBBMQC6AcC0AYQGdA1GcAmQIEAuIGAVQHjATHlABQHkAAHogTIADEaMAAABikIjEADg");
	this.shape_2.setTransform(449.3,354.0019);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7131A").s().p("EhGIA54IgEhQMAAAhlsQCmlxDqjBQDei5E9gzQBggQBvgEQDggHEfAjQEnAlH1BnICEAaQMSCnEMArQBrAXAKAAQInBqIEBCQC6AZCzAWQGeAuGaAjQIEAnIFAUQHjASHkAGQHiAGHkgIIAHEYMAAABimIi/AIg");
	this.shape_3.setTransform(449.3,355.7346);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7131A").s().p("EhGGA5gIgGhOMAAAhluQCrleDsi2QDhiuE8gvQBggOBvgDQDggGEfAjQEqAkHyBhICEAYQMJCfEWAhQBqAVALgBQIiBgIIA1QC6AWCyASQGhAlGTAeQIHAdICATQHkAQHiAPQHfAMHfAIIAMEWMAAABipIi5AOg");
	this.shape_4.setTransform(449.3,358.1311);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7131A").s().p("EhGCA5CIgKhKMAAAhlyQCxlGDwioQDjihE7gqQBggMBugCQDjgEEcAiQEuAkHvBZICEAXQL+CTEiAVQBpASAOgCQIaBVINAlIFqAfIMxAwQIJATH+AQQHlAOHhAYQHaAWHaAaIASEVMAAABisIixAWg");
	this.shape_5.setTransform(449.3,361.1087);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7131A").s().p("EhF+A4fIgOhGMAAAhl2QC4kqD0iWQDmiSE7gkQBggKBtgBQDkgBEbAhQEyAjHsBQICDAVQLwCFEyAGQBmARASgEQISBHISARIFoAVQGmAKGIARQILAFH6AOQHmAMHeAjQHVAgHTAxIAaETMAAABivIioAgg");
	this.shape_6.setTransform(449.3,364.6246);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7131A").s().p("EhF6A33IgShCMAAAhl6QDAkJD6iEQDpiBE4gcQBggIBuABQDkACEaAgQE4AhHmBHICEARQLhB2FEgKQBjAOAVgGQIIA4IZgFIFnAIQGpgFF+AJQIOgLH3ALQHnAJHbAxQHPAsHLBLIAjEQMAAABi0IidAqg");
	this.shape_7.setTransform(449.3,368.6234);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7131A").s().p("EhF1A3MIgXg+MAAAhl/QDKjlD+hvQDthtE3gVQBggFBtACQDmAGEYAeQE/AgHgA9ICEAOQLQBlFWgcQBhAKAZgIQH+AnIfgdIFkgFQGugYF1ABQISgcHwAIQHqAGHXBAQHKA5HCBnQAWCEAWCJMAAABi4IiRA3g");
	this.shape_8.setTransform(449.3,372.9733);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7131A").s().p("EhFvA2eIgdg4MAAAhmFQDTi/EFhZQDxhYE1gMQBggDBsAEQDoAKEWAdQFFAfHbAwICEALQK9BTFrgwQBfAIAdgLQHyAVIng3IFigUQGxgqFsgJQIUguHrAFQHtACHTBQQHCBGG6CGIA2EKMAAABi+IiFBDg");
	this.shape_9.setTransform(449.3,377.5979);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7131A").s().p("EhFqA27IgigzMAAAhmKQDdiWELhCQD1hDEzgDQBhABBrAFQDqAOEUAbQFMAeHUAkICEAHQKrBAGBhEQBbAEAhgMQHmABIvhTQC1gTCrgPQG1g/FigTQIYhBHlACQHvgBHOBgQG8BVGwClQAhCBAgCHMAAABjDIh3BQg");
	this.shape_10.setTransform(449.3,374.6983);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7131A").s().p("EhFkA3hIgogtMAAAhmPQDohtERgqQD5gsExAGQBhADBrAHQDsASERAZQFTAdHOAYICEADQKXAtGXhZQBYAAAmgPQHbgSI2hvQC1gbCngXQG6hTFZgeQIbhUHfgCQHxgEHKBwQG1BlGmDGQAnB/AlCFMAAABjJIhrBdg");
	this.shape_11.setTransform(449.3,370.8414);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7131A").s().p("EhFeA4IIgugnMAAAhmVQDzhEEWgRQD/gWEuAPQBiAHBqAJIH9AuQFaAbHIALICDgBQKDAaGvhvQBUgDArgRQHNgnI/iLQC0gkCmgeQG/hoFNgnQIghoHZgGQHygIHHCCQGuB0GaDnQAtB9ArCEMAAABjOIhcBrg");
	this.shape_12.setTransform(449.3,366.9239);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7131A").s().p("EhFZA4vIgzgiMAAAhmbQD+gaEcAHQEDABEsAYIDMAUQDvAaEOAWQFgAaHCgBICEgEQJuAFHGiDQBRgHAugUQHCg6JHioQCzgrCkgmQHDh8FDgyQIkh8HTgIQH0gMHCCSQGoCDGREIQAyB7AwCEMAAABjTIhQB5g");
	this.shape_13.setTransform(449.3,363.0546);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7131A").s().p("EhFSA5VIg6gcMAAAhmhQEIAPEiAeQEIAWEqAhIDKAZQDyAeEMAUQFnAZG7gNICEgIQJcgNHbiYQBOgLAzgVQG2hOJOjDQCzg0CigsQHHiRE5g8QIniOHOgMQH2gQG+CjQGgCSGIEoQA3B5A2CCMAAABjZIhCCGg");
	this.shape_14.setTransform(449.3,359.2827);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7131A").s().p("EhFNA55Ig/gXMAAAhmmQERA1EpA1QELAqEoAqQBjAPBoAOQDzAiEJATQFvAXG1gZICEgLQJJgfHwisQBMgNA2gYQGrhgJVjdQCzg8CggzQHLijEwhGQIqigHHgQQH5gTG7CzQGaCgF+FGQA8B3A7CBMAAABjeIg1CTg");
	this.shape_15.setTransform(449.3,355.6838);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7131A").s().p("EhFIA6aIhEgSMAAAhmqQEbBYEtBKQEQA+EmAxQBjASBnAPQD0AmEIARQF1AWGwgjICDgPQI5gwIDi+QBJgQA6gaQGhhxJcj2QCyhDCeg4QHPi2EnhOQItiyHCgSQH7gWG3DCQGTCsF2FjQBCB1A/CAMAAABjjIgqCeg");
	this.shape_16.setTransform(449.3,352.3377);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7131A").s().p("EhFDA65IhJgOMAAAhmvQEjB5EzBcQESBQElA5QBjAUBmAQQD2ApEHAQQF5AVGrgtQBCgIBDgKQIpg/IUjOQBHgTA9gcQGXiBJikLQCxhKCeg+QHSjGEfhWQIvjBG/gVQH8gZG0DPQGOC5FuF8QBFBzBECAMAAABjnIggCpg");
	this.shape_17.setTransform(449.3,349.2903);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7131A").s().p("EhE/A7TIhNgJMAAAhmzQErCVE2BtQEVBfEkA/QBkAWBlASQD3AsEFAOQF/AVGng2QBAgJBEgLQIbhNIkjdQBEgVBBgeQGPiOJnkfQCxhPCchEQHVjTEZhdQIyjPG6gXQH8gcGyDbQGJDDFnGSQBKBzBHB+MAAABjrIgXCyg");
	this.shape_18.setTransform(449.3,346.6213);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7131A").s().p("EhE9A7qIhPgGMAAAhm3QEwCuE7B7QEYBsEjBEQBjAYBlASQD4AvEEAOQGDATGjg9QBBgKBDgNQIQhYIxjoQBCgYBEgfQGHiaJskvQCxhUCbhIQHXjfEThjQIzjaG3gaQH+gdGwDkQGFDMFgGlQBOByBKB+MAAABjtIgPC7g");
	this.shape_19.setTransform(449.3,344.3564);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E7131A").s().p("EhE5A78IhTgDMAAAhm5QE2DAE8CHQEaB2EjBIQBiAaBmATQD4AwEDANQGGATGhhDQBBgLBDgNQIHhhI7jyQBBgaBGggQGBijJwk8QCwhYCahLQHajpENhoQI2jjGzgbQIAgfGuDsQGBDTFdG1QBPBwBNB9MAAABjxIgIDAg");
	this.shape_20.setTransform(449.3,342.545);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E7131A").s().p("EhGMA8IMAAAhm7QE5DOFACPQEaB+EiBLQBjAaBlAUQD5AyEDANQGIASGehHQBBgMBDgOQIAhnJEj6QA/gaBIghQF8iqJ0lGQCvhbCZhNQHcjwEKhrQI3jqGygcQH/ghGtDyQF/DYFYHAQBSBwBPB9MAAABjyIgDDFg");
	this.shape_21.setTransform(449.3,341.2326);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E7131A").s().p("EhGMA8RMAAAhm8QE7DXFBCTQEcCDEhBNQBjAbBkAUQD7AzEBAMQGKASGchJQBCgMBDgPQH8hrJIj+QA/gcBIghQF6iuJ1lMQCwhcCZhPQHcj0EIhuQI3jtGxgdQIAghGsD1QF9DbFYHHQBSBvBQB9MgABBm7g");
	this.shape_22.setTransform(449.3,340.4489);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E7131A").s().p("EhGMA8UMAAAhm9QK1HeLNCTQJ5CBKph7QIxhlKXkiQGIirLumPQLSl+FbiSQI3jvGxgdQIAghGrD2QHbESGcJ/MAAABm9g");
	this.shape_23.setTransform(449.3,340.1746);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E7131A").s().p("EhGMA8RMAAAhm9QKzHZLNCSQJ4B/Koh6QIxhlKWkgQGHiqLtmMQLRl8FbiQQI4jtGxgcQIBghGtD1QHcEQGfJ8MAAABm9g");
	this.shape_24.setTransform(449.3,340.4545);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E7131A").s().p("EhGMA8JMAAAhm9QKxHMLICMQJ2B7Kkh6QIvhkKTkaQGGinLrmEQLQlzFciMQI4jnGzgbQIEgeGyDyQHgENGmJwMAAABm9g");
	this.shape_25.setTransform(449.3,341.2543);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E7131A").s().p("EhGMA78MAAAhm9QKsG2LDCDQJwBzKgh3QIqhjKPkRQGEiiLol2QLPllFciGQI5jdG3gYQIIgaG4DsQHpEHGxJeMAAABm9g");
	this.shape_26.setTransform(449.3,342.5915);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E7131A").s().p("EhGMA7pMAAAhm8QKmGYK7B3QJqBoKYh1QIlhhKIkFQGBiaLkljQLNlRFbh/QI8jPG6gTQIPgWHCDlQH0D+HBJGMAAABm8g");
	this.shape_27.setTransform(449.3,344.4327);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E7131A").s().p("EhGMA7SMAAAhm8QKeFyKxBoQJhBaKQhyQIdheKBj2QF+iRLdlLQLLk4Fch1QI9i+HBgNQIWgPHODbQIDD0HUImMAAABm8g");
	this.shape_28.setTransform(449.3,346.727);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E7131A").s().p("EhGMA63MAAAhm8QKVFFKkBVQJYBKKEhuQIVhbJ5jjQF4iGLYkuQLIkcFbhoQJBipHHgIQIfgHHcDRQIUDnHsIAMAAABm8g");
	this.shape_29.setTransform(449.3,349.4386);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E7131A").s().p("EhGMA6YMAAAhm8QKKESKXBAQJMA3J4hqQIMhXJujPQFzh4LQkOQLFj6FchbQJDiRHPAAQIpACHtDDQInDZIHHVMAAABm8g");
	this.shape_30.setTransform(449.3,352.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E7131A").s().p("EhGMA52MAAAhm8QJ9DZKJAqQJAAhJphlQIChTJji3QFthrLHjqQLCjUFchMQJGh3HYAIQI0AMH/C1QI+DIIkGmMAAABm8g");
	this.shape_31.setTransform(449.3,355.8998);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E7131A").s().p("EhGMA5TMAAAhm9QJwCbJ4ARQIzAKJbhfQH1hPJXieQFohbK9jDQK+isFdg7QJIhbHhARQJCAXISClQJWC3JEFyMAAABm9g");
	this.shape_32.setTransform(449.3,359.4728);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E7131A").s().p("EhGMA4uMAAAhm8QJiBZJogKQIkgNJLhaQHohLJKiDQFihLKziZQK6iBFdgqQJNg9HqAbQJPAiIoCVQJuClJmE7MAAABm8g");
	this.shape_33.setTransform(449.3,363.1214);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E7131A").s().p("EhGMA4LMAAAhm8QJUAVJVgmQIVgmI7hUQHchGI7hnQFbg6KqhvQK1hUFdgYQJRgdH1AkQJdAuI9CEQKICSKKECMAAABm8g");
	this.shape_34.setTransform(449.3,366.6031);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E7131A").s().p("EhGMA3wMAAAhm8QJFgxJDhCQIGhAIphOQHOhBIvhLQFUgoKfhDQKygnFdgEQJUADH/AuQJrA6JUByQKjB+KuDIMAAABm8g");
	this.shape_35.setTransform(449.3,369.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E7131A").s().p("EhGMA3mMAAAhm8QI3h4IvheQH3hbIXhHQHCg9IhgtQFNgXKUgWQKtAHFeAOQJYAkIKA4QJ5BGJqBhQK+BqLTCNMAAABm8g");
	this.shape_36.setTransform(449.3,370.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E7131A").s().p("EhGMA37MAAAhm9QIni9Ieh7QHoh0IGhCQG1g3ISgRQFGgGKKAWQKpA1FeAhQJbBEIVBCQKIBSKABPQLZBYL3BRMAAABm9g");
	this.shape_37.setTransform(449.3,368.295);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E7131A").s().p("EhGMA4kMAAAhm8QIZkCILiXQHZiNH2g8QGogyIFALQE/ALKABBIQDCVQJfBjIfBMQKVBeKXA+QLzBEMaAZMAAABm8g");
	this.shape_38.setTransform(449.3,364.1266);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E7131A").s().p("EhGMA5TMAAAhm8QILlEH7ixQHKilHmg3QGbgtH4AlQE5AcJ1BrQKiCMFeBFQJjCBIoBVQKjBqKrAtQMMAyM9geMAAABm8g");
	this.shape_39.setTransform(449.3,359.4029);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E7131A").s().p("EhGMA6DMAAAhm8QH+mBHqjKQG9i9HXgxQGPgpHsA/QEzArJsCRQKfC1FeBVQJlCeIyBeQKwB0K+AeQMkAhNdhSMAAABm8g");
	this.shape_40.setTransform(449.3,354.626);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E7131A").s().p("EhGMA6xMAAAhm9QHym6HbjhQGxjRHIgtQGFglHhBWQEuA5JiC2QKbDaFfBkQJoC4I7BmQK6B/LSAQQM5AQN7iCMAAABm9g");
	this.shape_41.setTransform(449.3,350.058);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E7131A").s().p("EhGMA7bMAAAhm9QHnntHOj2QGljkG8goQF8giHWBrQEoBGJbDWQKZD8FeByQJsDPJCBuQLFCHLiADQNMACOWitMAAABm9g");
	this.shape_42.setTransform(449.3,345.8901);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E7131A").s().p("EhGMA8AMAAAhm9QHdoaHCkJQGdj0GwgkQFzgfHOB9QEjBSJVDyQKVEZFeB+QJvDlJJBzQLOCQLwgJQNfgKOsjTMAAABm9g");
	this.shape_43.setTransform(449.3,342.193);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E7131A").s().p("EhGMA8fMAAAhm9QHVpAG4kYQGUkCGnghQFtgcHFCNQEhBaJOELQKUExFfCJQJvD1JPB5QLWCWL8gSQNsgVPBjyMAAABm9g");
	this.shape_44.setTransform(449.3,339.0854);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E7131A").s().p("EhGMA84MAAAhm9QHPpeGwkkQGOkNGfgfQFngaHACZQEdBjJKEdQKRFFFgCQQJxEEJTB9QLcCbMGgZQN4gePQkLMAAABm9g");
	this.shape_45.setTransform(449.3,336.5862);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E7131A").s().p("EhGMA9KMAAAhm9QHKp0GrksQGIkWGbgcQFigZG8CiQEbBoJHErQKQFTFgCWQJyEOJWCAQLgCfMOgfQN/gkPckdMAAABm9g");
	this.shape_46.setTransform(449.3,334.7833);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E7131A").s().p("EhGMA9VMAAAhm9QHIqBGmkyQGGkaGYgcQFfgYG6CoQEaBrJEEzQKPFcFgCaQJzEUJYCCQLkChMQgiQOGgnPikpMAAABm9g");
	this.shape_47.setTransform(449.3,333.675);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E7131A").s().p("EhGMA9YMAAAhm8QHHqGGlk0QGFkcGWgbQFggXG3CpQEaBsJEE2QKPFfFgCbQJzEWJZCDQLkCiMTgkQOHgoPkksMAAABm8g");
	this.shape_48.setTransform(449.3,333.3069);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[]},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-59.5,898.6,785.7);


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
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(21));

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

	this.timeline.addTween(cjs.Tween.get(this.percentage_wave).to({regY:726.4,scaleY:0.2802,y:735.45},39,cjs.Ease.backOut).wait(21));

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