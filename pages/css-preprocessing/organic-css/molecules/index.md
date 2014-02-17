# Molecules

<social>

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