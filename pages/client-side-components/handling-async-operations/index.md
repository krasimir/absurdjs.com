# Handling async template operations

<social>

You probably know how easy is to use [expressions in your HTML templates](/pages/client-side-components/html-compilation). Let's say that we have the following component and HTML on the page:

<example>
<html>
&lt;h1>&lt;% this.getData() %>&lt;/h1>
</html>
<js>
absurd.component("Component", {
    html: 'h1',
    getData: function() {
        return 'AbsurdJS';
    },
    constructor: function() {
        this.populate();
    }
})();
</js>
</example>

The result of the example is that the heading tag is filled with some text - `<h1>AbsurdJS</h1>`. Now let's say that the function `getData` has to perform some asynchronous operation. If we keep the template the same it will not work, because the method is executed immediately during the population. Luckily AbsurdJS provides a mechanism for solving such issues.

<example>
<html>
&lt;h1>&lt;% this.async('getData') %>&lt;/h1>
</html>
<js>
absurd.component("Component", {
    html: 'h1',
    getData: function(callback) {
        setTimeout(function() {
        	// this runs after 2 sec
            callback('It\'s done.');
        }, 2000);
    },
    constructor: function() {
        this.populate();
    }
})();
</js>
</example>

The idea is to receive a callback which you need to run once your asynchronous action finishes. You still can pass parameters to your function. Just remember that the callback is always the first argument. The rest are yours.

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/tudic/1/)</small>