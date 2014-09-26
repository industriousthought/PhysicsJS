/**
  A sprite factory
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['physicsjs','../geometries/circle'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory.apply(root, ['physicsjs','../geometries/circle'].map(require));
    } else {
        factory.call(root, root.Physics);
    }
}(this, function (Physics) {
    'use strict';
    /*
     Needs updating for sprite factory usage!
     */
    /** 
     * class CircleBody < Body
     *
     * Physics.body('circle')
     *
     * The circle body has a circular shape.
     *
     * Additional options include:
     * - radius: the radius
     *
     * Example:
     *
     * ```javascript
     * var round = Physics.body('circle', {
     *     x: 30,
     *     y: 20,
     *     radius: 5
     * });
     * ```
     **/
    //Physics.body('sprite', function( parent ){ <<< old factory call
    //

    var factory = Physics.util.decorator('factory', {
        // prototype methods...
        method: function( args ){
        }
    });

    // define
    factory( 'sprite', 'circle', function( parent ){

        // extend further...
        return {
            // overrides
            init: function( cfg ){
                parent.init.call(this, cfg);
            }
        };
    });
        
    /*
        var defaults = {
            radius: 1.0
        };
    
        return {
    
            // extended
            init: function( options ){
    
                // call parent init method
                parent.init.call(this, options);
    
                options = Physics.util.extend({}, defaults, options);
    
                this.geometry = Physics.geometry('circle', {
                    radius: options.radius,
                });
    
                this.recalc();
            },
    
            // extended
            recalc: function(){
                parent.recalc.call(this);
                // moment of inertia
                this.moi = this.mass * this.geometry.radius * this.geometry.radius / 2;
            }
        };
    });
    
    // end module: bodies/circle.js
    return Physics;
*/
}));// UMD
