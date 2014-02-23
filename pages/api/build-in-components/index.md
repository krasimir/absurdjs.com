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