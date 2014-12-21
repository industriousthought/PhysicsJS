/** 
 * class ConstantAccelerationBehavior < Behavior
 *
 * `Physics.behavior('constant-acceleration')`.
 *
 * Constant acceleration behavior.
 *
 * Basically the "gravity" behavior. Used to give "earth-like gravity" to the world.
 *
 * Additional options include:
 * - acc: The acceleration vector (Vectorish). (default: `{ x: 0, y: 0.0004 }`)
 **/
Physics.behavior('zombie', function( parent ){


    return {

        // extended
        init: function( options ){

            parent.init.call( this );
            this.options( options );


            this.follow = options.follow;
        },


        // extended
        behave: function( data ){
            var follow = this.follow,
                x = follow.state.pos.get(0) - this.state.pos.get(0),
                y = follow.state.pos.get(1) - this.state.pos.get(1);
    
                this.state.angular.pos = Math.atan(x/y);
        }
    };
});
