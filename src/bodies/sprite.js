    /** 
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
                

            }


        };
    });

