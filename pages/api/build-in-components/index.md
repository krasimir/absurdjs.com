# Build-in components

<social>

There are components which are integrated into AbsurdJS and you are able to inject them in every of the your component's functions.

- - -

# is

A helper component wrapping common tasks.

## appended ( <small class="prop-values">selector</small> )

> It checks if there is a DOM element matching the passed selector

<example>
<str text="No minification">
absurd.component('MyComp', {
    constructor: function(is) {
        if(is.appended('body')) {
            console.log('Yes, there is a body tag.');
        }
    }
})();
</str>
<str text="Minification protection">
absurd.component('MyComp', {
    constructor: ['is', function(is) {
        if(is.appended('body')) {
            console.log('Yes, there is a body tag.');
        }
    }]
})();
</str>
</example>

- - -

# router

Class providing single page app routing. It supports hash based URLs and may use the [History API](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history). A demo could be found [here](http://absurdjs.com/tests/router/). Read about how this class is created in [A modern JavaScript router in 100 lines](http://krasimirtsonev.com/blog/article/A-modern-JavaScript-router-in-100-lines-history-api-pushState-hash-url). To be sure that everything works run the test suite [here](http://absurdjs.com/tests/?spec=Testing%20components%20(router)).

## add ( <small class="prop-values">regex, handler</small> )

> Registering a new route.

    absurd.component('MyComp', {
        constructor: function(router) {
            .add(/about\/?$/, function() {
                // matching: /about
            })
            .add(/products\/(.*)\/edit\/(.*)\/(.*)?$/, function(id, a, b) {
                // matching: products/34/edit/a/b
            })
            .add(function() {
                // default route
            });
        }
    })();

## remove ( <small class="prop-values">regex | handler</small> )

> Deletes a registered route.

    absurd.component('MyComp', {
        constructor: function(router) {
            router.remove(/about/);
        }
    })();

## flush ( )

> Removes all the added routes.

    absurd.component('MyComp', {
        constructor: function(router) {
            router.flush();
        }
    })();

## config ( <small class="prop-values">options</small> )

> The `options` is an object with two possible properties - `mode` could be `hash` (default) or `history`, `root` contains the root path of your application. Have in mind that if the History API is not supported `mode` is always `hash` even if you set `history`. The `root` option is required only if the router uses `pushState` i.e. the History API.

    absurd.component('MyComp', {
        constructor: function(router) {
            router.config({ 
                mode: 'history',
                root: '/single-page-app/test/' 
            });
        }
    })();

## listen ( )

> Starts listening for changes in the URL. If this method is not called you should call `check` manually.

    absurd.component('MyComp', {
        constructor: function(router) {
            router.listen();
        }
    })();

## check ( )

> It compares the current URL and if it is a new one and matches some of the registered routes it calls the handler. The method is called internally by the `listen` method.

    absurd.component('MyComp', {
        constructor: function(router) {
            router.check();
        }
    })();

## navigate ( <small class="prop-values">new path</small> )

> Changes the current URL.

    absurd.component('MyComp', {
        constructor: function(router) {
            router.navigate('/products/show/33');
        }
    })();

# ajax

The class deals with GET and POST requests. It also handles the loading of external JSON files. To be sure that everything works run the test suite [here](http://absurdjs.com/tests/?spec=Testing%20components%20(ajax).

## GET request

    absurd.component('TestingAjax', {
        constructor: function(ajax) {
            ajax
            .request('data/data.txt')
            .done(function(data) {
                // ...
            })
            .fail(function(xhr) {
                // ...  
            })
            .always(function(xhr) {
                // ...
            })
        }
    })();

## GET request with parameters

    absurd.component('TestingAjax', {
        constructor: function(ajax) {
            ajax
            .request({
                url: 'data/data-get.php', 
                data: { 
                    a: 'AbsurdJS is a javascript library', 
                    b: 'with super powers.'
                }
            })
            .done(function(data) {
                // ...
            })
            .fail(function(xhr) {
                // ...  
            })
            .always(function(xhr) {
                // ...
            })
        }
    })();

## POST request

    absurd.component('TestingAjax', {
        constructor: function(ajax) {
            ajax
            .request({
                url: 'data/data-post.php', 
                method: 'post'
            })
            .done(function(data) {
                // ...
            })
            .fail(function(xhr) {
                // ...  
            })
            .always(function(xhr) {
                // ...
            })
        }
    })();

## POST request with parameters

    absurd.component('TestingAjax', {
        constructor: function(ajax) {
            ajax
            .request({
                url: 'data/data-post.php', 
                data: { 
                    a: 'AbsurdJS is a javascript library', 
                    b: 'with super powers.'
                },
                method: 'post'
            })
            .done(function(data) {
                // ...
            })
            .fail(function(xhr) {
                // ...  
            })
            .always(function(xhr) {
                // ...
            })
        }
    })();

## PUT request

    absurd.component('TestingAjax', {
        constructor: function(ajax) {
            ajax
            .request({ 'data/data.php', method: 'put' })
            .done(function(data) {
                // ...
            })
            .fail(function(xhr) {
                // ...  
            })
            .always(function(xhr) {
                // ...
            })
        }
    })();

## DELETE request

    absurd.component('TestingAjax', {
        constructor: function(ajax) {
            ajax
            .request({ 'data/data.php', method: 'delete' })
            .done(function(data) {
                // ...
            })
            .fail(function(xhr) {
                // ...  
            })
            .always(function(xhr) {
                // ...
            })
        }
    })();

## Setting headers

    absurd.component('TestingAjax', {
        constructor: function(ajax) {
            ajax
            .request({
                url: 'data/header.php', 
                headers: { 
                    'absurd-header': 'oh yeah'
                }
            })
            .done(function(data) {
                // ...
            })
            .fail(function(xhr) {
                // ...  
            })
            .always(function(xhr) {
                // ...
            })
        }
    })();

## Getting JSON

    absurd.component('TestingAjax', {
        constructor: function(ajax) {
            ajax
            .request({
                url: 'data/data.json', 
                json: true
            })
            .done(function(data) {
                // ...
            })
            .fail(function(xhr) {
                // ...  
            })
            .always(function(xhr) {
                // ...
            })
        }
    })();

# val

Sometimes we need to extract data from the DOM. This could be value of a `input` field, `textarea` or just the text of a div. This method provides a mechanism for doing all this things.

## Getting value of `input`, `select` and `textarea`

<example>
<html>
&lt;form class="form">
    &lt;input type="text" value="my text" />
    &lt;textarea>Long text here&lt;/textarea>
    &lt;select>
        &lt;option value="A">A&lt;/option>
        &lt;option value="B" selected="selected">B&lt;/option>
    &lt;/select>
&lt;/form>
</html>
<js>
absurd.component('TestingVal', {
    html: '.form',
    ready: function() {
        this.populate();
        console.log(
            this.val('[type="text"]'), // my text
            this.val('textarea'), // Long text here
            this.val('select') // B
        );
    }
})();
</js>
</example>

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/yipix/15/edit)</small>

## Getting value of `check` or `radio` controls

<example>
<html>
&lt;form class="form">
    &lt;input type="radio" name="question" value="A" />
    &lt;input type="radio" name="question" value="B" checked/>
    &lt;input type="checkbox" name="option" value="A" />
    &lt;input type="checkbox" name="option" value="B" />
    &lt;input type="checkbox" name="option" value="C" />
    &lt;input type="checkbox" name="option" value="D" checked/>
&lt;/form>
</html>
<js>
absurd.component('TestingVal', {
    html: '.form',
    ready: function() {
        this.populate();
        console.log(
            this.val('[name="question"]'), // B
            this.val('[name="option"]'), // D
            this.val('[value="C"]') // D
        );
    }
})();
</js>
</example>

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/yipix/16/edit)</small>

## Passing a DOM element

<example>
<html>
&lt;div id="content">
    &lt;h1>Title&lt;/h1>
    &lt;p>Paragraph&lt;/p>
&lt;/div>
</html>
<js>
absurd.component('TestingVal', {
    ready: function() {
        console.log(
            this.val(document.getElementById("content"))
            /*
            Title
            Paragraph
            */
        );
    }
})();
</js>
</example>

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/yipix/22/edit)</small>

## Scoping

<example>
<html>
&lt;div id="content">
    &lt;h1>Title&lt;/h1>
    &lt;p>Paragraph with &lt;small>small text&lt;/small>.&lt;/p>
&lt;/div>
</html>
<js>
absurd.component('TestingVal', {
    ready: function() {
        var parent = document.querySelector("#content p"); 
        console.log(
            this.val('small', parent) // small text
        );
    }
})();
</js>
</example>

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/yipix/23/edit)</small>

## Keeping the data in an object

<example>
<html>
&lt;div id="content">
    &lt;h1>Title&lt;/h1>
    &lt;p>Paragraph with &lt;small>small text&lt;/small>.&lt;/p>
    &lt;form method="post">
        &lt;input type="text" name="username" />
        &lt;input type="submit" />
    &lt;/form>
    &lt;section class="info">
        &lt;p>Description here&lt;/p>
    &lt;/section>
&lt;/div>
</html>
<js>
absurd.component('TestingVal', {
    ready: function() {
        var parent = document.querySelector("#content"); 
        var value = this.val({
            title: 'h1',
            texts: {
                paragraph: 'p',
                info: '.info p'
            }
        }, parent);
        console.log(value);
        /*
        {
            texts: {
                paragraph: 'Paragraph with small text.',
                info: 'Description here'
            },
            title: 'Title'
        }
        */
    }
})();
</js>
</example>

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/yipix/26/edit)</small>