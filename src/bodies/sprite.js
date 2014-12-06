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

            },

            animate: function() {
                var ctx, w, h, makeTexture;

                makeTexture = function(c) {
                    c.drawImage(this.view, 0, 0, this.view.width, this.view.height);
                    this.view = document.createElement('canvas');
                    this.view.width = this.texture.width / Math.max.apply(0, this.texMap.x);
                    this.view.height = this.texture.height / this.texMap.y;


                };

                if (this.view) {
                    if (this.texture) {
                        if (this.view.getContext) {
                            if (this.texMap.tick < 10) {
                                this.texMap.tick += 1;
                            } else {
                                w = this.view.width;
                                h = this.view.height;
                                if (this.texMap.frame < this.texMap.x[this.texMap.activity] - 1) {
                                    this.texMap.frame += 1;
                                } else {
                                    this.texMap.frame = 0;
                                }
                                this.texMap.tick = 0;
                                ctx = this.view.getContext("2d");
                                this.view.width = this.view.width;

                        
                                ctx.drawImage(this.texture,
                                    this.texMap.frame * w, 
                                    this.texMap.activity * h,
                                    w,
                                    h,
                                    0, 
                                    0,
                                    w * this.texMap.scaler,
                                    h * this.texMap.scaler);
                            }
                        }
                    } else {
                        this.texture = document.createElement('canvas');
                        ctx = this.texture.getContext("2d");
                        this.texture.height = this.view.height;
                        this.texture.width = this.view.width;
                        this.texMap.tick = 0;
                        this.view.onload = makeTexture.bind(this, ctx);
                    }
                }

            }

        };
    });

