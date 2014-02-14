# Dependency injection

<social>

Dependency management is one of the most difficult things to handle. It's always challenging to write a code which have less or if possible no dependencies. AbsurdJS has its own dependency injector. It is inspired by the [Angular](http://docs.angularjs.org/guide/di) and it is well explained [here](http://krasimirtsonev.com/blog/article/Dependency-injection-in-JavaScript).

To use the injection we first need to define our module/function  in the dependency injector.

	absurd.di.register('INeedYou', function() {
	    console.log('Ok, here I am');
	});

And that's it. You are able to use `INeedYou` as an argument of your component's functions. You don't have to initialize it or something like that. It just comes as a parameter.

	absurd.component("CompClass", {
	    anotherMethod: function(INeedYou, message) {
	        INeedYou();
	        console.log(message);
	    },
	    constructor: function(INeedYou) {
	        INeedYou();
	        this.anotherMethod('Hi');
	    }
	})();

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/manen/13/edit)</small>

Notice that you can still pass another arguments. They are coming after the dependency.

## The minification problem

If you read [this](http://krasimirtsonev.com/blog/article/Dependency-injection-in-JavaScript), you will find out that if you use minificators your code will be transformed to something like this:

	absurd.component("CompClass",{anotherMethod:function(e,t){e();console.log(t)},constructor:function(e){e();this.anotherMethod("Hi")}})()

Notice that `INeedYou, message` are changed to `e,t`. This of course breaks our dependency injection, because we are using interpolation to resolve it. AbsurdJS follows Angular in solving this problem by letting you writing the arguments in a string, just before the function definition. 

	absurd.di.register('INeedYou', function() {
	    console.log('Ok, here I am');
	});
	absurd.component("CompClass", {
	    identify: ['INeedYou,,', function(INeedYou, name, type) {
	        INeedYou();
	        console.log(name, type);
	    }],
	    constructor: function(INeedYou) {
	        this.identify('AbsurdJS', 'JavaScript library');
	    }
	})();

Instead of defining your function directly pass an array, where the first element is a string representing your arguments. The two commas in `INeedYou,,` mean `name` and `type`. You don't need to write the actual name of the parameters. Just put commas. We could even change the order of the args. For example:

	absurd.component("CompClass", {
	    identify: [',INeedYou,', function(name, INeedYou, type) {
	        INeedYou();
	        console.log(name, type);
	    }],
	    constructor: function(INeedYou) {
	        this.identify('AbsurdJS', 'JavaScript library');
	    }
	})();

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/gujub/1/edit)</small>

At the end your code is minified to the following line, which still works.

	absurd.component("CompClass",{identify:[",INeedYou,",function(e,t,n){t();console.log(e,n)}],constructor:function(e){this.identify("AbsurdJS","JavaScript library")}})()

You could add whatever you want to the dependency injector.

	var config = {
	    username: '...',
	    password: '...'
	};
	absurd.di.register('config', config);
	absurd.component("CompClass", {
	    constructor: function(config) {
	        console.log(config.username);
	    }
	})();

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/lifew/1/edit)</small>