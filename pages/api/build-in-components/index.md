# Build-in components

<social>

There are components which are integrated into AbsurdJS and you are able to inject them in every of the your component's functions.

- - -

## is

A helper component wrapping common tasks.

### appended ( <small class="prop-values">selector</small> )

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