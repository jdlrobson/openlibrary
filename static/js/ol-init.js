/**
 * A lightweight module that allows the loading of
 * OpenLibrary JavaScript and CSS outside the critical path.
 * 
 */
(function(ol) {

/**
 * Load non-critical CSS file via JavaScript
 * e.g. CSS that depends on JavaScript to work.
 * @param {String} href path to style resource
 */
var loaded = {};
ol.loadStyle = function (href) {
    // Should only be possible to load once
    if ( !loaded[href] ) {
        var el = document.createElement( 'link' );
        el.rel = 'stylesheet';
        el.href = href;
        document.head.appendChild( el );
        loaded[href] = true;
    }
};

/**
 * Loads JavaScript via JavaScript
 * @param {String} href path to JavaScript resource
 */
ol.loadScript = function ( href ) {
    if ( !loaded[href] ) {
        var el = document.createElement( 'script' );
        el.type = 'text/javascript';
        el.src = href;
        document.head.appendChild( el );
        loaded[href] = true;
    }
};

}(window.ol || { q: [], styles: [] }));
