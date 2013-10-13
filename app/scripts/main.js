require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        underscore: '../bower_components/underscore/underscore-min',
        backbone: '../bower_components/backbone/backbone-min',
        marionette: '../bower_components/marionette/lib/backbone.marionette.min',
        bootstrapAffix: '../bower_components/sass-bootstrap/js/affix',
        bootstrapAlert: '../bower_components/sass-bootstrap/js/alert',
        bootstrapButton: '../bower_components/sass-bootstrap/js/button',
        bootstrapCarousel: '../bower_components/sass-bootstrap/js/carousel',
        bootstrapCollapse: '../bower_components/sass-bootstrap/js/collapse',
        bootstrapPopover: '../bower_components/sass-bootstrap/js/popover',
        bootstrapScrollspy: '../bower_components/sass-bootstrap/js/scrollspy',
        bootstrapTab: '../bower_components/sass-bootstrap/js/tab',
        bootstrapTooltip: '../bower_components/sass-bootstrap/js/tooltip',
        bootstrapTransition: '../bower_components/sass-bootstrap/js/transition',
        tpl: '../bower_components/requirejs-tpl/tpl',
        'facebook': '//connect.facebook.net/en_US/all'
    },
    shim: {
        'backbone': {
            'deps': ['underscore', 'jquery'],
            'exports': 'Backbone'
        },
        'marionette':{
            'deps': ['underscore', 'backbone', 'jquery'],
            'exports': 'Marionette'
        },
        bootstrapAffix: { deps: ['jquery'] },
        bootstrapAlert: { deps: ['jquery'] },
        bootstrapButton: { deps: ['jquery'] },
        bootstrapCarousel: { deps: ['jquery'] },
        bootstrapCollapse: { deps: ['jquery'] },
        bootstrapPopover: { deps: ['jquery'] },
        bootstrapScrollspy: { deps: ['jquery'] },
        bootstrapTab: { deps: ['jquery'] },
        bootstrapTooltip: { deps: ['jquery'] },
        bootstrapTransition: { deps: ['jquery'] },
        'facebook' : {
            export: 'FB'
        }
    }
})
require(['fb']);

require(['app'], function (App) {
    Dcsh.App = App;
    Dcsh.App.start();

    /*
    Backbone.Collection.prototype.debugEvents =
    Backbone.Model.prototype.debugEvents =
    Backbone.View.prototype.debugEvents =
    Backbone.Router.prototype.debugEvents = function() {
        this.on('all', function(eventName) {
            console.log('[debug event] --> ', eventName, Array.prototype.slice.call(arguments, 1))
        })
    }
    */
    
    return App;
});