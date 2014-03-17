# Molecules

<social>

The purpose of the molecules is to combine different properties and their values into a single definition. If you need to handle the vendor prefixes AbsurdJS provides another way. Check it out [here](/pages/css-preprocessing/basics/#browser-vendor-prefixes).

- - -

* [size](#size-small-class-prop-values-width-height-small-)
* [cf](#cf-small-class-prop-values-all-before-after-small-)
* [grid](#grid-small-class-prop-values-columns-selector-small-)
* [moveto](#moveto-small-class-prop-values-x-y-z-small-)
* [rotateto](#rotateto-small-class-prop-values-deg-small-)
* [scaleto](#scaleto-small-class-prop-values-x-y-small-)
* [animate](#animate-small-class-prop-values-string-object-array-small-)
* [transparent](#transparent-small-class-prop-values-float-small-)
* [gradient](#gradient-small-class-prop-values-color-color-color-deg-small-)
* [blur](#blur-small-class-prop-values-number-small-)
* [brightness](#brightness-small-class-prop-values-number-small-)
* [contrast](#contrast-small-class-prop-values-number-small-)
* [invert](#invert-small-class-prop-values-number-small-)
* [saturate](#saturate-small-class-prop-values-number-small-)
* [sepia](#sepia-small-class-prop-values-number-small-)
* [calc](#calc-small-class-prop-values-property-expression-small-)
* [dropshadow](#calc-small-class-prop-values-property-expression-small-)
* [trsform](#trsform-small-class-prop-values-transformations-small-)

- - -

<!-- ---------------------------------------------------------------- size -->
## size: <small class="prop-values">[width]/[height]</small>

> sets the `width` and `height` of an element 

<example>
<js>
api.add({
body: {
	size: 100,
	p: {
		size: '300px/40'
	},
	section: {
		size: '/200px'
	}
}
}).compile(function(err, css) {
console.log(css);
});
</js>
<css>
body {
	width: 100%;
	height: 100%;
}
body p {
	width: 30%;
	height: 40%;
}
body section{
	height: 200px;
}
</css>
</example>

<!-- ---------------------------------------------------------------- cf -->
## cf: <small class="prop-values">[all | before | after]</small>

> clear fix

<example>
<js>
api.add({
	body: {
		cf: 'all',
		p: {
			cf: 'before'
		},
		section: {
			cf: 'after'
		}
	}
}).compile(function(err, css) {
	console.log(css);
});
</js>
<css>
body:before, 
body:after, 
body p:before, 
body section:after {
  content: " ";
  display: table;
  clear: both;
}
</css>
</example>

<!-- ---------------------------------------------------------------- grid -->
## grid: <small class="prop-values">[columns]/[selector]</small>

> grid definition

<example>
<js>
api.add({
	'section.container': {
		grid: '3/div'
	}
}).compile(function(err, css) {
	console.log(css);
});
</js>
<css>
section.container:before, section.container:after {
  content: " ";
  display: table;
  clear: both;
}
section.container div {
  float: left;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 33.33%;
}
</css>
</example>

<!-- ---------------------------------------------------------------- moveto -->
## moveto: <small class="prop-values">[x]/[y]/[z]</small>

> translates an element to x/y/z position

<example>
<js>
api.add({
	p: {
		moveto: '10/20/30'
	},
	div: {
		moveto: '50px/100px'
	}
}).compile(function(err, css) {
	console.log(css);
});
</js>
<css>
p {
  transform: translate3d(10px,20px,30px);
  -webkit-transform: translate3d(10px,20px,30px);
  -ms-transform: translate3d(10px,20px,30px);
}
div {
  transform: translate(50px,100px);
  -webkit-transform: translate(50px,100px);
  -ms-transform: translate(50px,100px);
}
</css>
</example>

<!-- ---------------------------------------------------------------- rotateto -->
## rotateto: <small class="prop-values">[deg]</small>

> rotates an element

<example>
<js>
api.add({
	p: {
		rotateto: '-45'
	}
}).compile(function(err, css) {
	console.log(css);
});
</js>
<css>
p {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
}
</css>
</example>

<!-- ---------------------------------------------------------------- scaleto -->
## scaleto: <small class="prop-values">[x]/[y]</small>

> scales an element

<example>
<js>
api.add({
	p: {
		scaleto: '1.3/1.3'
	}
}).compile(function(err, css) {
	console.log(css);
});
</js>
<css>
p {
  transform: scale(1.3,1.3);
  -webkit-transform: scale(1.3,1.3);
  -ms-transform: scale(1.3,1.3);
}
</css>
</example>

<!-- ---------------------------------------------------------------- animate -->
## animate: <small class="prop-values">[string | object | array]</small>

> a shortcut to [animate.css](http://daneden.github.io/animate.css/) snippets. Valid values are: bounce, flash, pulse, shake, swing, tada, wobble, bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp, bounceOut, bounceOutDown, bounceOutLeft, bounceOutRight, bounceOutUp, fadeIn, fadeInDown, fadeInDownBig, fadeInLeft, fadeInLeftBig, fadeInRight, fadeInRightBig, fadeInUp, fadeInUpBig, fadeOut, fadeOutDown, fadeOutDownBig, fadeOutLeft, fadeOutLeftBig, fadeOutRight, fadeOutRightBig, fadeOutUp, fadeOutUpBig, flip, flipInX, flipInY, flipOutX, flipOutY, lightSpeedIn, lightSpeedOut, rotateIn, rotateInDownLeft, rotateInDownRight, rotateInUpLeft, rotateInUpRight, rotateOut, rotateOutDownLeft, rotateOutDownRight, rotateOutUpLeft, rotateOutUpRight, slideInDown, slideInLeft, slideInRight, slideOutLeft, slideOutRight, slideOutUp, hinge, rollIn, rollOut.

Triggering an animation by its name

<example>
<js>
api.add({
    div: {
        animate: 'rotateInUpLeft'
    }
}).compile(function(err, css) {
	console.log(css);
});
</js>
<css>
@keyframes rotateInUpLeft {
	0% {
	  transform-origin: left bottom;
	  opacity: 0;
	  transform: rotate(90deg);
	  -webkit-transform: rotate(90deg);
	}
	100% {
	  transform-origin: left bottom;
	  opacity: 1;
	  transform: rotate(0);
	  -webkit-transform: rotate(0);
	}
}
@-webkit-keyframes rotateInUpLeft {
	0% {
	  transform-origin: left bottom;
	  opacity: 0;
	  transform: rotate(90deg);
	  -webkit-transform: rotate(90deg);
	}
	100% {
	  transform-origin: left bottom;
	  opacity: 1;
	  transform: rotate(0);
	  -webkit-transform: rotate(0);
	}
}
div {
	animation-duration: 1s;
	-webkit-animation-duration: 1s;
	animation-fill-mode: both;
	-webkit-animation-fill-mode: both;
	animation-name: rotateInUpLeft;
	-webkit-animation-name: rotateInUpLeft;
}
</css>
</example>

Triggering an animation by setting more properties

<example>
<js>
api.add({
    div: {
        animate: {
            name: 'slide-to-top',
            duration: '1000ms',
            iterationCount: 2,
            fillMode: 'both',
            timingFunction: 'ease',
            delay: '1000ms',
            direction: 'alternate',
            playState: 'running'
        }
    }
}).compile(function(err, css) {
    console.log(css);
});
</js>
<css>
div {
  animation-name: slide-to-top;
  -webkit-animation-name: slide-to-top;
  -moz-animation-name: slide-to-top;
  -ms-animation-name: slide-to-top;
  -o-animation-name: slide-to-top;
  animation-duration: 1000ms;
  -webkit-animation-duration: 1000ms;
  -moz-animation-duration: 1000ms;
  -ms-animation-duration: 1000ms;
  -o-animation-duration: 1000ms;
  animation-fill-mode: both;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -ms-animation-fill-mode: both;
  -o-animation-fill-mode: both;
  animation-timing-function: ease;
  -webkit-animation-timing-function: ease;
  -moz-animation-timing-function: ease;
  -ms-animation-timing-function: ease;
  -o-animation-timing-function: ease;
  animation-iteration-count: 2;
  -webkit-animation-iteration-count: 2;
  -moz-animation-iteration-count: 2;
  -ms-animation-iteration-count: 2;
  -o-animation-iteration-count: 2;
  animation-delay: 1000ms;
  -webkit-animation-delay: 1000ms;
  -moz-animation-delay: 1000ms;
  -ms-animation-delay: 1000ms;
  -o-animation-delay: 1000ms;
  animation-direction: alternate;
  -webkit-animation-direction: alternate;
  -moz-animation-direction: alternate;
  -ms-animation-direction: alternate;
  -o-animation-direction: alternate;
  animation-play-state: running;
  -webkit-animation-play-state: running;
  -moz-animation-play-state: running;
  -ms-animation-play-state: running;
  -o-animation-play-state: running;
}
</css>
</example>

Only definition of animation.

<example>
<js>
absurd.add({
    animate: ['show', {
        '0%': { color: '#FFF' },
        '100%': { color: '#000' }
    }]
}).compile(function(err, css) {
    console.log(css);
});
</js>
<css>
@keyframes show {
  0% { color: #FFF; }
  100% { color: #000; }
}
@-webkit-keyframes show {
  0% { color: #FFF; }
  100% { color: #000; }
}
</css>
</example>

<!-- ---------------------------------------------------------------- transparent -->
## transparent: <small class="prop-values">[float]</small>

> setting opacity

<example>
<js>
api.add({
    div: {
        transparent: 0.3
    }
}).compile(function(err, css) {
    console.log(css);
});
</js>
<css>
div {
  filter: alpha(opacity=30);
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=30);
  opacity: 0.3;
  -moz-opacity: 0.3;
  -khtml-opacity: 0.3;
}
</css>
</example>

<!-- ---------------------------------------------------------------- gradient -->
## gradient: <small class="prop-values">[color]/[color]/[color...]/[deg]</small>

> Creating linear gradient.

<example>
<js>
api.add({
    div: {
        gradient: '#F00/#00F'
    }
}).compile(function(err, css) {
    console.log(css);
});
</js>
<css>
div {
  background: -webkit-linear-gradient(0deg, #F00 0%, #00F 100%);
  background: -moz-linear-gradient(0deg, #F00 0%, #00F 100%);
  background: -ms-linear-gradient(0deg, #F00 0%, #00F 100%);
  background: -o-linear-gradient(0deg, #F00 0%, #00F 100%);
  background: linear-gradient(0deg, #F00 0%, #00F 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF0000FF', endColorstr='#FFFF0000',GradientType=0);
  -ms-filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF0000FF',endColorstr='#FFFF0000',GradientType=0);
}
</css>
</example>

> Creating linear gradient with multiple stops.

<example>
<js>
api.add({
    div: {
        gradient: '#F00/#00F/#BADA55/#000'
    }
}).compile(function(err, css) {
    console.log(css);
});
</js>
<css>
div {
  background: -webkit-linear-gradient(0deg, #F00 0%, #00F 33%, #BADA55 66%, #000 99%);
  background: -moz-linear-gradient(0deg, #F00 0%, #00F 33%, #BADA55 66%, #000 99%);
  background: -ms-linear-gradient(0deg, #F00 0%, #00F 33%, #BADA55 66%, #000 99%);
  background: -o-linear-gradient(0deg, #F00 0%, #00F 33%, #BADA55 66%, #000 99%);
  background: linear-gradient(0deg, #F00 0%, #00F 33%, #BADA55 66%, #000 99%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF000000', endColorstr='#FFFF0000',GradientType=0);
  -ms-filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF000000',endColorstr='#FFFF0000',GradientType=0);
}
</css>
</example>

> Creating linear gradient by setting an angle.

<example>
<js>
api.add({
    div: {
        gradient: '#BADA55/#000/50deg'
    }
}).compile(function(err, css) {
    console.log(css);
});
</js>
<css>
div {
  background: -webkit-linear-gradient(50deg, #BADA55 0%, #000 100%);
  background: -moz-linear-gradient(50deg, #BADA55 0%, #000 100%);
  background: -ms-linear-gradient(50deg, #BADA55 0%, #000 100%);
  background: -o-linear-gradient(50deg, #BADA55 0%, #000 100%);
  background: linear-gradient(50deg, #BADA55 0%, #000 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFBADA55', endColorstr='#FF000000',GradientType=1);
  -ms-filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFBADA55',endColorstr='#FF000000',GradientType=1);
}
</css>
</example>

> Creating linear gradient by setting an angle and determining the stops' positions.

<example>
<js>
api.add({
    div: {
        gradient: '#BADA55/#000 10%/#999 20%/#FF0/50deg'
    }
}).compile(function(err, css) {
    console.log(css);
});
</js>
<css>
div {
  background: -webkit-linear-gradient(50deg, #BADA55 0%, #000 10%, #999 20%, #FF0 99%);
  background: -moz-linear-gradient(50deg, #BADA55 0%, #000 10%, #999 20%, #FF0 99%);
  background: -ms-linear-gradient(50deg, #BADA55 0%, #000 10%, #999 20%, #FF0 99%);
  background: -o-linear-gradient(50deg, #BADA55 0%, #000 10%, #999 20%, #FF0 99%);
  background: linear-gradient(50deg, #BADA55 0%, #000 10%, #999 20%, #FF0 99%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFBADA55', endColorstr='#FFFFFF00',GradientType=1);
  -ms-filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFBADA55',endColorstr='#FFFFFF00',GradientType=1);
}
</css>
</example>

<!-- ---------------------------------------------------------------- blur -->
## blur: <small class="prop-values">[number]</small>

> Adding blur.

<example>
<js>
api.add({
    div: {
        blur: 20
    }
}).compile(function(err, css) {
    console.log(css);
});
</js>
<css>
div {
  filter: blur(20px);
  -webkit-filter: blur(20px);
  -moz-filter: blur(20px);
  -ms-filter: blur(20px);
}
</css>
</example>

<!-- ---------------------------------------------------------------- brightness -->
## brightness: <small class="prop-values">[number]</small>

> Brightness adjustment.

<example>
<js>
api.add({
    div: {
        brightness: 20
    }
}).compile(function(err, css) {
    console.log(css);
});
</js>
<css>
div {
  filter: brightness(20px);
  -webkit-filter: brightness(20px);
  -moz-filter: brightness(20px);
  -ms-filter: brightness(20px);
}
</css>
</example>

<!-- ---------------------------------------------------------------- contrast -->
## contrast: <small class="prop-values">[number]</small>

> contrast adjustment.

<example>
<js>
api.add({
    div: {
        contrast: 20
    }
}).compile(function(err, css) {
    console.log(css);
});
</js>
<css>
div {
  filter: contrast(20px);
  -webkit-filter: contrast(20px);
  -moz-filter: contrast(20px);
  -ms-filter: contrast(20px);
}
</css>
</example>

<!-- ---------------------------------------------------------------- invert -->
## invert: <small class="prop-values">[number]</small>

> invert adjustment.

<example>
<js>
api.add({
    div: {
        invert: 20
    }
}).compile(function(err, css) {
    console.log(css);
});
</js>
<css>
div {
  filter: invert(20px);
  -webkit-filter: invert(20px);
  -moz-filter: invert(20px);
  -ms-filter: invert(20px);
}
</css>
</example>

<!-- ---------------------------------------------------------------- saturate -->
## saturate: <small class="prop-values">[number]</small>

> saturate adjustment.

<example>
<js>
api.add({
    div: {
        saturate: 20
    }
}).compile(function(err, css) {
    console.log(css);
});
</js>
<css>
div {
  filter: saturate(20px);
  -webkit-filter: saturate(20px);
  -moz-filter: saturate(20px);
  -ms-filter: saturate(20px);
}
</css>
</example>

<!-- ---------------------------------------------------------------- sepia -->
## sepia: <small class="prop-values">[number]</small>

> sepia adjustment.

<example>
<js>
api.add({
    div: {
        sepia: 20
    }
}).compile(function(err, css) {
    console.log(css);
});
</js>
<css>
div {
  filter: sepia(20px);
  -webkit-filter: sepia(20px);
  -moz-filter: sepia(20px);
  -ms-filter: sepia(20px);
}
</css>
</example>

<!-- ---------------------------------------------------------------- calc -->
## calc: <small class="prop-values">[property]/[expression]</small>

> Calculating a property.

<example>
<js>
api.add({
    div: {
        calc: 'width/100% - 45px'
    }
}).compile(function(err, css) {
    console.log(css);
});
</js>
<css>
div {
  -lh-property: 0;
  width: -webkit-calc(100% - 45px);
  width: -moz-calc(100% - 45px);
  width: calc(100% - 45px);
}
</css>
</example>

<!-- ---------------------------------------------------------------- dropshadow -->
## dropshadow: <small class="prop-values">[property]/[expression]</small>

> Adding drop shadow.

<example>
<js>
api.add({
    div: {
        dropshadow: '16px 16px 10px #000000'
    }
}).compile(function(err, css) {
    console.log(css);
});
</js>
<css>
div {
  filter: drop-shadow(16px 16px 10px #000000);
  -webkit-filter: drop-shadow(16px 16px 10px #000000);
  -moz-filter: drop-shadow(16px 16px 10px #000000);
  -ms-filter: drop-shadow(16px 16px 10px #000000);
}
</css>
</example>

<!-- ---------------------------------------------------------------- trsform -->
## trsform: <small class="prop-values">transformations</small>

> Alias to `transform` property. Sets the needed browser prefixes.

<example>
<js>
api.add({
    section: {
        trsform: 'scale(1.2, 1.2) rotate(30deg)'
    }
}).compile(function(err, css) {
    console.log(css);
});
</js>
<css>
section {
  transform: scale(1.2, 1.2) rotate(30deg);
  -webkit-transform: scale(1.2, 1.2) rotate(30deg);
  -moz-transform: scale(1.2, 1.2) rotate(30deg);
  -ms-transform: scale(1.2, 1.2) rotate(30deg);
  -o-transform: scale(1.2, 1.2) rotate(30deg);
}
</css>
</example>