# Molecules

<social>

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

## animate: <small class="prop-values">[type of animation]</small>

> a shortcut to [animate.css](http://daneden.github.io/animate.css/) snippets. Valid values are: bounce, flash, pulse, shake, swing, tada, wobble, bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp, bounceOut, bounceOutDown, bounceOutLeft, bounceOutRight, bounceOutUp, fadeIn, fadeInDown, fadeInDownBig, fadeInLeft, fadeInLeftBig, fadeInRight, fadeInRightBig, fadeInUp, fadeInUpBig, fadeOut, fadeOutDown, fadeOutDownBig, fadeOutLeft, fadeOutLeftBig, fadeOutRight, fadeOutRightBig, fadeOutUp, fadeOutUpBig, flip, flipInX, flipInY, flipOutX, flipOutY, lightSpeedIn, lightSpeedOut, rotateIn, rotateInDownLeft, rotateInDownRight, rotateInUpLeft, rotateInUpRight, rotateOut, rotateOutDownLeft, rotateOutDownRight, rotateOutUpLeft, rotateOutUpRight, slideInDown, slideInLeft, slideInRight, slideOutLeft, slideOutRight, slideOutUp, hinge, rollIn, rollOut.

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