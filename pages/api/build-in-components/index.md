# Build-in components

<social>

There are components which are integrated into AbsurdJS and you are able to inject them in every of the your component's functions.

- - -

* [is (Utility)](#is)
* [router (Cross-browser router)](#router)
* [ajax (Cross-browser Ajax)](#ajax)
* [dom (DOM access)](#dom)
* [mq (media queries)](#mq)

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

## hidden ( <small class="prop-values">element</small> )

> It checks if the element is visible. If the method is called without parameters AbsurdJS uses the current component's element.

    absurd.component('MyComp', {
        constructor: function(is) {
            if(is.hidden()) {
                console.log('Yes, the element is hidden.');
            }
        }
    })();

# router

Class providing single page app routing. It supports hash based URLs and may use the [History API](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history). A demo could be found [here](http://absurdjs.com/tests/router/). Read about how this class is created in [A modern JavaScript router in 100 lines](http://krasimirtsonev.com/blog/article/A-modern-JavaScript-router-in-100-lines-history-api-pushState-hash-url). To be sure that everything works run the test suite [here](http://absurdjs.com/tests/?spec=Testing%20components%20(router)).

## add ( <small class="prop-values">regex, handler</small> )

> Registering a new route.

    absurd.component('MyComp', {
        constructor: function(router) {
            router
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

# dom

We are communicating with DOM elements all the time, getting or setting values. This module simplifies these processes.

## Accessing a DOM element

<example>
<html>
&lt;p class="content">Paragraph&lt;/p>
</html>
<js>
absurd.component('TestingDOM', {
    constructor: function(dom) {
        var el = dom('.content').el;
        console.log(el.outerHTML); 
        // &lt;p class="content">Paragraph&lt;/p>
    }
})();
</js>
</example>

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/yipix/34/edit)</small>

## Accessing several DOM elements at once

<example>
<html>
&lt;section>
    &lt;h1>AbsurdJS&lt;/h1>
    &lt;p>JavaScript library with super powers&lt;/p>
    &lt;footer>
        absurdjs.com
        &lt;br />
        &lt;small>version: 0.3&lt;/small>
    &lt;/footer>
&lt;/section>
</html>
<js>
absurd.component('TestingDOM', {
    constructor: function(dom) {
        var els = dom({
            title: 'h1',
            text: 'p',
            other: {
                version: 'footer small'
            }
        }, 'section');
        console.log(els.title.el.innerHTML);
        // AbsurdJS
        console.log(els.text.el.innerHTML);
        // JavaScript library with super powers
        console.log(els.other.version.el.innerHTML);
        // version: 0.3
    }
})();
</js>
</example>

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/yipix/46/edit)</small>

## Scoping

By default the `dom` function is querying the DOM tree from the current `document` object. However, if your component has a valid `html` property set up and you call `populate` before to use `dom` the scope is changed. For example:

<example>
<html>
&lt;p class="content">A&lt;/p>
&lt;section>
    &lt;p class="content">B&lt;/p>
&lt;/section>
</html>
<js>
absurd.component('TestingDOM', {
    html: 'section',
    constructor: function(dom) {
        this.populate();
        var el = dom('.content').el;
        console.log(el.outerHTML); 
        // &lt;p class="content">B&lt;/p>
    }
})();
</js>
</example>

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/yipix/40/edit)</small>

Of course, if you want you may specify your own scope.

<example>
<html>
&lt;p class="content">A&lt;/p>
&lt;section>
    &lt;p class="content">B&lt;/p>
&lt;/section>
&lt;section id='my-section'>
    &lt;p class="content">C&lt;/p>
&lt;/section>
</html>
<js>
absurd.component('TestingDOM', {
    constructor: function(dom) {
        var el = dom('.content', '#my-section').el;
        console.log(el.outerHTML); 
        // &lt;p class="content">B&lt;/p>
    }
})();
</js>
</example>

## Setting and getting value from a text field

<example>
<html>
&lt;form>
    &lt;input type="text" value="default text"/>
&lt;/form>
</html>
<js>
absurd.component('TestingDOM', {
    constructor: function(dom) {
        var input = dom('[type="text"]');
        console.log(input.val()); // default text
        input.val('absurdjs'); // sets a new value
    }
})();
</js>
</example>

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/yipix/50/edit)</small>

## Setting and getting value from a text area and select box

<example>
<html>
&lt;form>
    &lt;textarea>JavaScript is &lt;/textarea>
    &lt;select>
        &lt;option value="cool">cool&lt;/option>
        &lt;option value="awesome" selected="selected">awesome&lt;/option>
        &lt;option value="difficult">difficult&lt;/option>
    &lt;/select>
&lt;/form>
</html>
<js>
absurd.component('TestingDOM', {
    constructor: function(dom) {
        var textarea = dom('textarea');
        var select = dom('select');
        console.log(textarea.val() + select.val());
        // JavaScript is awesome
        textarea.val('Coding is ');
        select.val('difficult');
        console.log(textarea.val() + select.val());
        // Conding is difficult
    }
})();
</js>
</example>

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/yipix/54/edit)</small>

## Setting and getting value from a radio and check boxes

<example>
<html>
&lt;form>
    &lt;input type="radio" value="oA" name="options"> option A
    &lt;input type="radio" value="oB" name="options" checked> option B
    &lt;input type="checkbox" value="f1" name="features"> feature 1
    &lt;input type="checkbox" value="f2" checked name="features"> feature 2
    &lt;input type="checkbox" value="f3" checked name="features"> feature 2
&lt;/form>
</html>
<js>
absurd.component('TestingDOM', {
    ready: function(dom) {
        console.log(dom('[type="radio"]').val());
        // oB
        console.log(dom('[type="checkbox"]').val());
        // ['f2', 'f3']
    }
})();
</js>
</example>

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/yipix/60/edit)</small>

## Setting and getting value from any other DOM element

<example>
<html>
&lt;div class="content">
    &lt;h1>AbsurdJS&lt;/h1>
    &lt;div class="inner">
        &lt;p>JavaScript library with super powers. Find the official web site &lt;a href="http://absurdjs.com">here&lt;/a>.&lt;/p>
    &lt;/div>
    &lt;footer>footer&lt;/footer>
&lt;/div>
</html>
<js>
absurd.component('TestingDOM', {
    ready: function(dom) {
        console.log(dom('h1').val());
        // AbsurdJS
        console.log(dom('.inner').val());
        // JavaScript library with super powers.
        // Find the official web site here.
        console.log(dom('.inner a').val());
        // here
        
        // setting new values
        dom('.inner').val('New Text');
        dom('h1').val('New Title');
    }
})();
</js>
</example>

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/yipix/67/edit)</small>

## Getting values of several elements at once

<example>
<html>
&lt;form class="contacts">
    Name:
    &lt;input type="text" name="name" value="John" />
    &lt;br />Your email:
    &lt;input type="email" name="email"  value="j@j.com" />
    &lt;br />Experience:
    &lt;input type="radio" name="exp" value="l1" /> level 1
    &lt;input type="radio" name="exp" value="l2" /> level 2
    &lt;input type="radio" name="exp" value="l3" checked /> level 3
    &lt;br />
    &lt;div class="info">
        Version: &lt;span class="ver">0.3&lt;/span>
        Position: &lt;span class="pos">web&lt;/span>
    &lt;/div>
&lt;/form>
</html>
<js>
absurd.component('TestingDOM', {
    ready: function(dom) {
        console.log(dom({
            user: {
                name: '[name="name"]',
                mail: '[name="email"]',
                exp: '[name="exp"]'
            },
            information: {
                version: '.ver',
                position: '.pos'
            }
        }, 'fomr.contacts').val());
    }
})();
</js>
</example>

The result of the code above is the following object:

    {
        information: {
            position: "web",
            version: "0.3"
        },
        user: {
            exp: "l3",
            mail: "j@j.com",
            name: "John"
        }
    }

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/yipix/65/edit)</small>

# mq

AbsurdJS provides an API for using Media Queries in JavaScript. It works with [`window.matchMedia`](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Testing_media_queries) by default but also has a polyfill if that feature is not supported by the browser.

The mq method accepts three properties. The first one is your query, the second one is a callback function which is called once at the beginning and again on every match or mismatch. The last argument tells to Absurd to use the polyfill or not. You will usually leave it blank.

    ready: function(mq) {
        // the handler is called at least once 
        // it is fired again if the query changes its status
        mq('all and (min-width: 300px)', function(match) {
            // match = true or false
        });
    }

Here is a full example showing a div with text `Test` which becomes green or red depending on the browser's width.

    absurd.component('MyComp', {
        html: { div: 'Test' },
        css: { div: { color: '#f00' }},    
        ready: function(dom, mq) {
            this.set('parent', dom('body').el).populate();
            mq('all and (min-width: 300px)', function(match) {
                if(match) { 
                    this.css.div.color = '#0f0';
                } else {
                    this.css.div.color = '#f00';
                }
                this.populate();
            });
        }
    })();

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/paqegexe/22/edit?js,output)</small>

> To see the result in the JSBin example drag the panels' divider to the left.