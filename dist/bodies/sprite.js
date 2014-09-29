/**
 * PhysicsJS v0.6.0 - 2014-04-22
 * A modular, extendable, and easy-to-use physics engine for javascript
 * http://wellcaffeinated.net/PhysicsJS
 *
 * Copyright (c) 2014 Jasper Palfree <jasper@wellcaffeinated.net>
 * Licensed MIT
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['physicsjs','../geometries/circle', '../bodies/circle'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory.apply(root, ['physicsjs','../geometries/circle', '../bodies/circle'].map(require));
    } else {
        factory.call(root, root.Physics);
    }
}(this, function (Physics) {
    'use strict';
    /*
     * @requires geometries/circle
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
    Physics.body('sprite', 'circle', function( parent ){

        return {

            init: function( options ){

                parent.init.call(this, options);

                this.state.rot = 0;

            },


            // spin the wheel at desired speed
            spin: function( speed ){
                // the wheels are spinning...
                this.state.angular.vel = speed;
            }
        };
    });

    // end module: bodies/circle.js
    return Physics;
}));// UMD
